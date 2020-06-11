// Initial tree

export class Tree {

  public jsonStr: string = '';
  public json: any = null;
  public root: Node = null;

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
    let dfs = new DepthFirst(this, (x: Node) => x);
    dfs.result.forEach((n: Node) => {
      node.appendChild(n.toHtml());
      n.hide();
    });
    this.root.show();
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
      let labelId = 'dt_id_' + labelCounter++;
      radio.type = 'radio';
      radio.name = this.variable;
      radio.value = key.toString();
      radio.setAttribute('aria-labelledby', labelId);
      this.radioButtons.push(radio);
      let label = document.createElement('label');
      addClass(label, 'LABEL');
      label.id = labelId;
      label.innerHTML = value;
      content.appendChild(radio);
      content.appendChild(label);
      this.div.appendChild(content);
    }
  }

  protected buttons() {
    let buttons = document.createElement('div');
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
        this.hide();
        this.children.get(parseInt(value, 10)).show();
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
    this.titleElement.focus();
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
  // TODO: Leaves could get an action.

  constructor(content: string, title: string, value: number) {
    super(content, title, value);
  }

  protected fireNext() {
    this.hide();
    this.tree.root.show();
  }

}
