// Initial tree

export class Tree {

  public jsonStr: string = '';
  public json: any = null;
  public root: Node = null;
  public history: number[] = [];
  public rootElement: HTMLElement;
  public summaryElement: HTMLElement;

  public loadJson(url: string) {
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
    this.json = JSON.parse(this.jsonStr);
    this.root = Node.fromJson(this.json);
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach(n => n.tree = this);
  }


  public toHTML(node: HTMLElement = null) {
    this.rootElement = node;
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach((n: Node) => {
      node.appendChild(n.toHtml());
      n.hide();
    });
    this.root.show();
  }

  public summary(node: Node) {
    node.hide();
    let result: [string, string][] = [[node.content, '']];
    let count = 0;
    node = node.parent;
    while (node) {
      count++;
      let value = this.history[this.history.length - count];
      result.unshift([node.content, node.labels.get(value)]);
      node = node.parent;
    }
    this.printSummary(result);
  }

  private printSummary(summary: [string, string][]) {
    this.summaryElement = document.createElement('div');
    addClass(this.summaryElement, 'NODE', 'SUMMARY');
    this.rootElement.appendChild(this.summaryElement);
    let title = document.createElement('span');
    addClass(title, 'TITLE');
    title.setAttribute('tabindex', '-1');
    title.innerHTML = 'Summary';
    this.summaryElement.appendChild(title);
    for (let [question, result] of summary) {
      let div = document.createElement('div');
      let span1 = document.createElement('span');
      span1.innerHTML = question;
      div.appendChild(span1);
      let span2 = document.createElement('span');
      span2.innerHTML = result;
      div.appendChild(span2);
      this.summaryElement.appendChild(div);
    }
    this.summaryElement.style.display = 'block';
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


let prefix = 'DT_';

let addClass = function(element: HTMLElement, ...rest: string[]) {
  rest.forEach(x => element.classList.add(prefix + x.toUpperCase()));
};


let counter = 0;
let labelCounter = 0;

export class Node {

  public tree: Tree;
  public labels: Map<number, string> = new Map<number, string>();
  public kind: string = '';
  public children: Map<number, Node> = new Map<number, Node>();
  public parent: Node = null;
  public variable: string = 'dt_variable_' + counter++;
  public radioButtons: HTMLElement[] = [];
  public div: HTMLElement;
  public titleElement: HTMLElement;
  public contentElement: HTMLElement;
  public buttonsElement: HTMLElement;
  
  private nextButton: HTMLElement;
  private previousButton: HTMLElement;


  public nextName: string = 'Next';
  public previousName: string = 'Back';

  constructor(public content: string, public title: string = '',
              public value = 0,
              labels: {text: string, value: number}[] = []) {
    for (let {text: text, value: value} of labels) {
      this.labels.set(value, text);
    }
  }

  private static parseChildren(node: Node, json: any[]) {
    if (!json || !json.length) return;
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
        node = new Leaf(json.content, json.title, json.value);
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
    this.div = document.createElement('div');
    addClass(this.div, 'NODE', this.kind);
    // Actual title element
    this.titleElement = document.createElement('span');
    addClass(this.titleElement, 'TITLE');
    this.titleElement.setAttribute('tabindex', '-1');
    this.titleElement.innerHTML = this.title;
    this.div.appendChild(this.titleElement);
    // Actual content element
    this.contentElement = document.createElement('span');
    addClass(this.contentElement, 'CONTENT');
    this.contentElement.setAttribute('tabindex', '-1');
    this.contentElement.innerHTML = this.content;
    this.div.appendChild(this.contentElement);
    this.radios();
    this.buttons();
    return this.div;
  }


  protected radios() {
    for (const [key, value] of this.labels) {
      let content = document.createElement('div');
      addClass(content, 'RADIOBUTTON');
      let radio = document.createElement('input');
      addClass(radio, 'RADIO');
      let radioId = 'dt_id_' + labelCounter++;
      let labelId = 'dt_id_' + labelCounter++;
      radio.type = 'radio';
      radio.id = radioId;
      radio.name = this.variable;
      radio.value = key.toString();
      radio.setAttribute('aria-labelledby', labelId);
      this.radioButtons.push(radio);
      let label = document.createElement('label');
      addClass(label, 'LABEL');
      label.id = labelId;
      label.setAttribute('for', radioId);
      label.innerHTML = value;
      content.appendChild(radio);
      content.appendChild(label);
      this.div.appendChild(content);
    }
  }

  protected buttons() {
    let buttons = this.buttonsElement = document.createElement('div');
    addClass(buttons, 'BUTTONS');
    this.div.appendChild(buttons);
    if (this.parent) {
      this.previous();
      buttons.appendChild(this.previousButton);
    }
    this.next();
    buttons.appendChild(this.nextButton);
  }

  protected next() {
    if (this.nextButton) {
      return;
    }
    this.nextButton = document.createElement('button');
    this.nextButton.innerHTML = this.nextName;
    addClass(this.nextButton, 'NEXT');
    this.nextButton.addEventListener('click', this.fireNext.bind(this));
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

  protected previous() {
    if (this.previousButton) return;
    this.previousButton = document.createElement('button');
    this.previousButton.innerHTML = this.previousName;
    addClass(this.previousButton, 'PREVIOUS');
    this.previousButton.addEventListener('click', this.firePrevious.bind(this));
    this.div.appendChild(this.previousButton);
  }

  protected firePrevious() {
    if (this.parent) {
      this.hide();
      this.parent.show();
    }
  }


  // TODO: This is probably overkill.
  public show() {
    this.div.style.display = 'block';
    this.contentElement.setAttribute('tabindex', '0');
    this.titleElement.setAttribute('aria-live', 'polite');
    this.titleElement.setAttribute('tabindex', '0');
    // this.titleElement.focus();
  }

  public hide() {
    this.div.style.display = 'none';
    this.contentElement.setAttribute('tabindex', '-1');
    this.titleElement.removeAttribute('aria-live');
    this.titleElement.setAttribute('tabindex', '-1');
  }

}

export class Binary extends Node {

  public kind = 'binary'

  constructor(public content: string, public title: string, public value = 0) {
    super(content, title, value, [{text: 'Yes', value: 1}, {text: 'No', value: 0}]);
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
    this.summaryButton = document.createElement('button');
    this.summaryButton.innerHTML = 'Summary';
    addClass(this.summaryButton, 'SUMMARY');
    this.summaryButton.addEventListener('click', this.fireSummary.bind(this));
    this.buttonsElement.appendChild(this.summaryButton);
    
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
