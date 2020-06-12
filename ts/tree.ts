//                    GNU GENERAL PUBLIC LICENSE
//                       Version 3, 29 June 2007
//
//  (c) 2020 Volker Sorge, v.sorge@progressiveaccess.com
//           Benetech & ETS hackathon
//

import Util from './util';


/**
 * Basic tree class
 */
export class Tree {

  public jsonStr: string = '';
  public root: Node = null;
  public history: number[] = [];
  public rootElement: HTMLElement;
  public summaryElement: Summary = new Summary();


  /**
   * Creator pattern for the tree.
   * @param {string} url The data URL for loading JSON.
   * @param {HTMLElement} result The node to attach the tree to.
   * @param {HTMLElement=} error The node to attach error output. O/w errors are
   *     thrown.
   */
  public static create(url: string, result: HTMLElement, error?: HTMLElement) {
    let tree = new Tree();
    let promise = tree.loadJson(url);
    promise.then((p) => {
      if (error) {
        error.innerHTML = p;
        error.style.display = 'hide';
      }
      tree.toHTML(result);
    }).catch((p) => {
      if (!error) {
        throw error;
      }
      error.innerHTML = p;
      error.style.display = 'block';
      error.style.visibility = 'visible';
    });
  }


  /**
   * Loads Json data from a URL.
   * @return Promise
   */
  public loadJson(url: string): Promise<string> {
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


  /**
   * Receives loaded json and parses it into the Tree structure.
   * @param {string} json The JSON string.
   * @param {Function} resolve Promise resolution.
   * @param {Function} reject Promise rejection.
   */
  protected _loadJson(json: string, resolve: Function, reject: Function) {
    try {
      this.jsonStr = json;
      this.fromJson();
      resolve('JSON loaded');
    } catch (err) {
      reject('JSON Parser Error!');
    }
  }


  /**
   * Parses the JSON.
   */
  public fromJson() {
    this.root = Node.fromJson(JSON.parse(this.jsonStr));
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach(n => n.tree = this);
    this.summaryElement.parent = this.root;
    this.summaryElement.tree = this;
  }


  /**
   * Attaches the tree DOM to an existing node.
   * @param {HTMLElement} node The DOM node.
   */
  public toHTML(node: HTMLElement) {
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


  /**
   * Generate a summary of the decision path.
   * @param {Node} node The leaf node.
   */
  public summary(node: Node) {
    node.hide();
    this.summaryElement.parent = node;
    this.summaryElement.show();
  }

}


/**
 * A Depth First Visitor for the Tree.
 */
export class DepthFirst {

  /**
   * The results from the search.
   */
  public result: any[] = [];

  /**
   * @constructor
   * @param {Tree} tree The tree to visit.
   * @param {Function} func The visiting method.
   */
  constructor(tree: Tree, private func: Function) {
    this.visit(tree.root);
  }

  /**
   * DF walking of the tree.
   * @param {Node} node The current node.
   */
  private visit(node: Node) {
    this.result.push(this.func(node));
    node.children.forEach(x => this.visit(x));
  }

}


/**
 * Abstract node class
 */
export abstract class Node {

  /**
   * Counter for variables..
   */
  protected static counter = 0;

  /**
   * Counter for ids.
   */
  protected static labelCounter = 0;

  /**
   * The type of node.
   */
  public kind: string = '';

  /**
   * The tree it is attached to.
   */
  public tree: Tree;

  /**
   * Name for the next button.
   */
  public nextName: string = 'Next';

  /**
   * Name for the back button.
   */
  public previousName: string = 'Back';

  public labels: Map<number, string> = new Map<number, string>();
  public children: Map<number, Node> = new Map<number, Node>();
  public parent: Node = null;
  public variable: string = 'dt_variable_' + Node.counter++;
  public card: Card;
  public radioButtons: HTMLElement[] = [];

  /**
   * @constructor
   * @param {Tree} tree The tree to visit.
   * @param {Function} func The visiting method.
   */
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

  /**
   * Parses the JSON format of a node.
   * @param {JSON} josn The input JSON.
   * @return {Node} The newly parsed node.
   */
  public static fromJson(json: any): Node {
    let kind = json.type || 'leaf';
    let node: Node = null;
    switch (kind) {
      case 'leaf':
        node = new Leaf(json.content, json.title, json.value, json.action);
        break;
      case 'nary':
        node = new Nary(json.content, json.title,
                        json.value, json.labels || []);
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

  /**
   * @return {HTMLElement} The HTML element of that node.
   */
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

  /**
   * Adds radio buttons to the card.
   */
  protected radios() {
    for (const [key, value] of this.labels) {
      let content = Util.makeNode('div', 'RADIOBUTTON');
      let radio = document.createElement('input');
      Util.addClass(radio, 'RADIO');
      let radioId = 'dt_id_' + Node.labelCounter++;
      let labelId = 'dt_id_' + Node.labelCounter++;
      radio.type = 'radio';
      radio.id = radioId;
      radio.name = this.variable;
      radio.value = key.toString();
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

  /**
   * Adds buttons to the card.
   */
  protected buttons() {
    if (this.parent) {
      Util.makeButton(
        this.previousName, this.firePrevious.bind(this), this.card.buttons, 'PREVIOUS');
    }
    Util.makeButton(this.nextName, this.fireNext.bind(this), this.card.buttons, 'NEXT');
  }

  /**
   * Action on next button.
   */
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

  /**
   * Action on previous button.
   */
  protected firePrevious() {
    if (this.parent) {
      this.hide();
      this.parent.show();
    }
  }

  /**
   * Show the node.
   */
  public show() {
    this.card.show();
  }

  /**
   * Hide the node.
   */
  public hide() {
    this.card.hide();
  }

}


/**
 * Binary nodes.
 */
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


/**
 * Multiply branching nodes.
 */
export class Nary extends Node {

  /**
   * @override
   */
  public kind = 'nary';

}


/**
 * Leaf nodes.
 */
export class Leaf extends Node {

  /**
   * @override
   */
  public kind = 'leaf';

  /**
   * @override
   */
  public nextName = 'Restart';

  /**
   * Summary button.
   */
  public summaryButton: HTMLElement;

  /**
   * Action or Go button.
   */
  public actionButton: HTMLElement;

  
  constructor(content: string, title: string, value: number,
              public action: string = '') {
    super(content, title, value);
  }

  /**
   * @override
   */
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

  /**
   * Action on go button. Fires up a new tab.
   */
  protected fireAction() {
    window.open(this.action, '_blank');
  }

  /**
   * Action on summary button.
   */
  protected fireSummary() {
    this.tree.summary(this);
  }

  /**
   * @override
   */
  protected fireNext() {
    this.hide();
    this.tree.root.show();
    this.tree.history = [];
  }

}


/**
 * Summary node.
 */
export class Summary extends Node {

  /**
   * @override
   */
  public kind = 'summary';

  /**
   * @override
   */
  public nextName = 'Restart';

  public summaryElement = Util.makeNode('div', 'SUMMARY');
  
  constructor() {
    super('', 'Summary');
    this.card.content.appendChild(this.summaryElement);
  }

  /**
   * @override
   */
  protected fireNext() {
    this.hide();
    this.tree.root.show();
    this.tree.history = [];
  }

  /**
   * @override
   */
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
    let div = Util.makeNode('div', 'SUMMARYLINE');
    Util.makeSpan(div, question, 'QUESTION');
    Util.makeSpan(div, answer, 'ANSWER');
    return div;
  }

}


/**
 * Class that holds the HTML elements of the actually displayed card.
 */
export class Card {

  public div: HTMLElement = Util.makeNode('div', 'NODE');
  public title: HTMLElement = Util.makeNode('h1', 'TITLE');
  public content: HTMLElement = Util.makeNode('div', 'CONTENT')
  public buttons: HTMLElement = Util.makeNode('div', 'BUTTONS');

  constructor() {
    this.div.appendChild(this.title);
    this.title.setAttribute('tabindex', '-1');
    this.div.appendChild(this.content);
    this.content.setAttribute('tabindex', '-1');
    this.div.appendChild(this.buttons);
  }

  /**
   * Show the card.
   */
  public show() {
    this.div.style.display = 'block';
    this.title.setAttribute('aria-live', 'polite');
    this.content.setAttribute('tabindex', '0');
    this.title.setAttribute('tabindex', '0');
    this.title.focus();
  }

  /**
   * Hide the card.
   */
  public hide() {
    this.div.style.display = 'none';
    this.title.removeAttribute('aria-live');
    this.title.setAttribute('tabindex', '-1');
    this.content.setAttribute('tabindex', '-1');
  }

}
