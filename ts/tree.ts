//                    GNU GENERAL PUBLIC LICENSE
//                       Version 3, 29 June 2007
//
//  (c) 2020 Volker Sorge, v.sorge@progressiveaccess.com
//           Benetech & ETS hackathon
//

import Util from './util';


export class Tree {

  public jsonStr: string = '';
  public root: Node = null;
  public history: number[] = [];
  public rootElement: HTMLElement;
  public summaryElement: Summary = new Summary();

  public loadJson(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      let httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            this._loadJson(httpRequest.responseText, resolve, reject);
          } else {
            reject(httpRequest.statusText);
          }
        }
      }.bind(this);
      httpRequest.onerror = function() {
        reject(httpRequest.statusText);
      }.bind(this);
      httpRequest.open('GET', url, true);
      httpRequest.send();
    });
  }

  public _loadJson(json: string, resolve: Function, reject: Function) {
    try {
      this.jsonStr = json;
      this.fromJson();
      resolve('JSON loaded');
    } catch (err) {
      reject('JSON Parser Error!');
    }
  }


  public fromJson() {
    this.root = Node.fromJson(JSON.parse(this.jsonStr));
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach(n => n.tree = this);
    this.summaryElement.parent = this.root;
    this.summaryElement.tree = this;
  }


  public toHTML(node: HTMLElement = null) {
    this.rootElement = node;
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach((n: Node) => {
      node.appendChild(n.toHtml());
      n.hide();
    });
    node.appendChild(this.summaryElement.toHtml());
    this.summaryElement.hide();
    this.root.show();
  }

  public summary(node: Node) {
    node.hide();
    this.summaryElement.parent = node;
    this.summaryElement.show();
  }

}


export class DepthFirst {

  public result: any[] = [];

  constructor(tree: Tree, private func: Function) {
    this.visit(tree.root);
  }

  private visit(node: Node) {
    this.result.push(this.func(node));
    node.children.forEach(x => this.visit(x));
  }

}


let counter = 0;
let labelCounter = 0;

export abstract class Node {

  public kind: string = '';
  public tree: Tree;
  public labels: Map<number, string> = new Map<number, string>();
  public children: Map<number, Node> = new Map<number, Node>();
  public parent: Node = null;
  public variable: string = 'dt_variable_' + counter++;
  public card: Card;
  public radioButtons: HTMLElement[] = [];

  public nextName: string = 'Next';
  public previousName: string = 'Back';

  constructor(public content: string, public title: string = '',
              public value = 0,
              labels: {text: string, value: number}[] = []) {
    this.card = new Card();
    for (let {text: text, value: value} of labels) {
      this.labels.set(value, text);
    }
  }

  private static parseChildren(node: Node, json: any[]) {
    if (!json || !json.length) {
      return;
    }
    for (const child of json) {
      let childNode = Node.fromJson(child);
      node.children.set(childNode.value, childNode);
      childNode.parent = node;
    }
  }

  static fromJson(json: any): Node {
    let kind = json.type || 'leaf';
    let node: Node = null;
    switch (kind) {
      case 'leaf':
        node = new Leaf(json.content, json.title, json.value, json.action);
        break;
      case 'nary':
        node = new Nary(json.content, json.title, json.value, json.labels || []);
        Node.parseChildren(node, json.children);
        break;
      case 'binary':
        node = new Binary(json.content, json.title, json.value);
        Node.parseChildren(node, json.children);
        break;
      default:
        throw Error('Unknown node type.');
    }
    return node;
  }

  public toHtml(): HTMLElement {
    Util.addClass(this.card.div, this.kind);
    // Actual title element
    this.card.title.innerHTML = this.title;
    // Actual content element
    let content = document.createElement('span');
    Util.addClass(content, 'CONTENT');
    content.innerHTML = this.content;
    this.card.content.appendChild(content);
    this.radios();
    this.buttons();
    return this.card.div;
  }


  protected radios() {
    for (const [key, value] of this.labels) {
      let content = Util.makeDiv('RADIOBUTTON');
      let radio = document.createElement('input');
      Util.addClass(radio, 'RADIO');
      let radioId = 'dt_id_' + labelCounter++;
      let labelId = 'dt_id_' + labelCounter++;
      radio.type = 'radio';
      radio.id = radioId;
      radio.name = this.variable;
      radio.value = key.toString();
      // radio.setAttribute('aria-labelledby', labelId);
      this.radioButtons.push(radio);
      let label = document.createElement('label');
      Util.addClass(label, 'LABEL');
      label.id = labelId;
      label.setAttribute('for', radioId);
      label.innerHTML = value;
      content.appendChild(radio);
      content.appendChild(label);
      this.card.content.appendChild(content);
    }
  }

  protected buttons() {
    if (this.parent) {
      Util.makeButton(
        this.previousName, this.firePrevious.bind(this), this.card.buttons, 'PREVIOUS');
    }
    Util.makeButton(this.nextName, this.fireNext.bind(this), this.card.buttons, 'NEXT');
  }

  protected fireNext() {
    for (let radio of this.radioButtons) {
      if ((radio as any).checked) {
        let value = (radio as any).value;
        let num = parseInt(value, 10);
        this.tree.history.push(num);
        this.hide();
        this.children.get(num).show();
        return;
      }
    }
  }

  protected firePrevious() {
    if (this.parent) {
      this.hide();
      this.parent.show();
    }
  }


  // TODO: This is probably overkill.
  public show() {
    this.card.show();
  }

  public hide() {
    this.card.hide();
  }

}

export class Binary extends Node {

  /**
   * @override
   */
  public kind = 'binary';

  constructor(public content: string, public title: string, public value = 0) {
    super(content, title, value,
          [{text: 'Yes', value: 1}, {text: 'No', value: 0}]);
  }

}


export class Nary extends Node {
  public kind = 'nary'

}


export class Leaf extends Node {
  public kind = 'leaf';
  public nextName = 'Restart';
  public summaryButton: HTMLElement;
  public actionButton: HTMLElement;

  constructor(content: string, title: string, value: number,
              public action: string = '') {
    super(content, title, value);
  }


  protected buttons() {
    super.buttons();
    this.summaryButton = Util.makeButton(
      'Summary', this.fireSummary.bind(this), this.card.buttons);
    if (this.action) {
      this.actionButton = Util.makeButton(
        'Go', this.fireAction.bind(this), this.card.buttons, 'ACTION');
      document.createElement('button');
    }
  }

  protected fireAction() {
    window.open(this.action, '_blank');
  }

  protected fireSummary() {
    this.tree.summary(this);
  }

  protected fireNext() {
    this.hide();
    this.tree.root.show();
    this.tree.history = [];
  }

}


export class Summary extends Node {

  public kind = 'summary';
  public nextName = 'Restart';
  public summaryElement = Util.makeDiv('SUMMARY');
  
  constructor() {
    super('', 'Summary');
    this.card.content.appendChild(this.summaryElement);
  }

  protected fireNext() {
    this.hide();
    this.tree.root.show();
    this.tree.history = [];
  }

  public show() {
    super.show();
    this.compileSummary();
  }

  private compileSummary() {
    let count = 0;
    let hl = this.tree.history.length;
    let node = this.parent;
    let result = [];
    this.summaryElement.innerHTML = '';
    do {
      let answer = count ? node.labels.get(this.tree.history[hl - count]) : '';
      result.unshift(this.makeSummaryLine(node.content, answer));
      node = node.parent;
      count++;
    } while (node);
    result.forEach(x => this.summaryElement.appendChild(x));
  }

  private makeSummaryLine(question: string, answer: string): HTMLElement {
    let div = Util.makeDiv('SUMMARYLINE');
    Util.makeSpan(div, question, 'QUESTION');
    Util.makeSpan(div, answer, 'ANSWER');
    return div;
  }

}

export class Card {

  public div: HTMLElement = Util.makeDiv('NODE');
  public title: HTMLElement = Util.makeH1('TITLE');
  public content: HTMLElement = Util.makeDiv('CONTENT')
  public buttons: HTMLElement = Util.makeDiv('BUTTONS');

  constructor() {
    this.div.appendChild(this.title);
    this.title.setAttribute('tabindex', '-1');
    this.div.appendChild(this.content);
    // this.content.setAttribute('tabindex', '-1');
    this.div.appendChild(this.buttons);
  }

  public show() {
    this.div.style.display = 'block';
    // this.content.setAttribute('tabindex', '0');
    this.title.setAttribute('aria-live', 'polite');
    this.title.focus();
    // this.title.setAttribute('tabindex', '0');
  }

  public hide() {
    this.div.style.display = 'none';
    // this.content.setAttribute('tabindex', '-1');
    this.title.removeAttribute('aria-live');
    // this.title.setAttribute('tabindex', '-1');
  }

}
