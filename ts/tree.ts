// Initial tree

export class Tree {

  public jsonStr: string = '';
  public json: any = null;
  public root: Node = null;

  public loadJson() {
    let location = window.location.href.replace(/\/.*\.html$/, 'samples/tree2.json');
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          this._loadJson(httpRequest.responseText);
        }
      }
    }.bind(this);
    httpRequest.open('GET', location, true);
    httpRequest.send();
  }

  public _loadJson(json: string) {
    try {
      this.jsonStr = json;
      this.fromJson();
    } catch (err) {
      console.error('Something went wrong!');
      console.error(err);
    }
  }


  public fromJson() {
    this.json = JSON.parse(this.jsonStr);
    this.root = Node.fromJson(this.json);
  }

  
  public toHTML(node: HTMLElement = null) {
    let dfs = new DepthFirst(this, (x: Node) => x);
    // TODO: Visit the tree.
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


let counter = 0;
let labelCounter = 0;

export class Node {

  public content: Map<number, string> = new Map<number, string>();
  public kind: string = '';
  public children: Node[] = [];
  public parent: Node = null;
  public variable: string = 'dt_variable_' + counter++;

  private _next: HTMLElement;
  private _previous: HTMLElement;
  private _div: HTMLElement;

  public nextName: string = 'Next';
  public previousName: string = 'Back';
  
  constructor(public title: string, public value = 0,
              content: {text: string, value: number}[] = []) {
    for (let {text: text, value: value} of content) {
      this.content.set(value, text);
    }
  }

  static fromJson(json: any): Node {
    let kind = json.type || 'leaf';
    let node: Node = null;
    switch (kind) {
      case 'leaf':
        node = new Leaf(json.title, json.value);
        break;
      case 'nary':
        node = new Nary(json.title, json.value, json.content || []);
        if (json.children.length) {
          node.children = json.children.map(Node.fromJson);
          node.children.forEach(child => child.parent = node);
        }
        break;
      case 'binary':
        node = new Binary(json.title, json.value);
        if (json.children.length) {
          node.children = json.children.map(Node.fromJson);
          node.children.forEach(child => child.parent = node);
        }
        break;
      default:
        throw Error('Unknown node type.');
    }
    return node;
  }

  public radios: HTMLElement[] = [];
  
  public toHtml(): HTMLElement {
    let div = document.createElement('div');
    addClass(div, 'NODE', this.kind);
    let title = document.createElement('span');
    addClass(title, 'TITLE');
    title.innerHTML = this.title;
    div.appendChild(title);
    this.content.forEach(x => {
      let content = document.createElement('div');
      addClass(content, 'CONTENT');
      let radio = document.createElement('input');
      addClass(radio, 'RADIO');
      let labelId = 'dt_id_' + labelCounter++;
      radio.type = 'radio';
      radio.name = this.variable;
      radio.value = this.value.toString();
      radio.setAttribute('aria-labelledby', labelId);
      this.radios.push(radio);
      let label = document.createElement('label');
      addClass(label, 'LABEL');
      label.id = labelId;
      label.innerHTML = x;
      content.appendChild(radio);
      content.appendChild(label);
      div.appendChild(content);
    });
    this._div = div;
    this.previous();
    this.next();
    return div;
  }

  public next() {
    if (this._next) return;
    this._next = document.createElement('button');
    this._next.innerHTML = this.nextName;
    addClass(this._next, 'NEXT');
    this._next.addEventListener('click', this.fireNext.bind(this));
    this._div.appendChild(this._next);
  }

  public fireNext() {
    console.log('Firing');
    for (let radio of this.radios) {
      console.log(radio);
      if ((radio as any).checked) {
        let value = (radio as any).value;
        console.log(value);
        this.hide();
        this.children[value].show();
        return;
      }
    }
  }
  
  public previous() {
    if (this._previous || !this.parent) return;
    this._previous = document.createElement('button');
    this._previous.innerHTML = this.previousName;
    addClass(this._previous, 'PREVIOUS');
    this._div.appendChild(this._previous);
  }

  public show() {
    this._div.style.visibility = 'visible';
  }
  
  public hide() {
    this._div.style.visibility = 'hidden';
  }
  
}

let prefix = 'DT_';

let addClass = function(element: HTMLElement, ...rest: string[]) {
  rest.forEach(x => element.classList.add(prefix + x.toUpperCase()));
};

// let makeElement = function(kind: string, ...rest: string[]) {
  
// }



export class Binary extends Node {

  public kind = 'binary'
  
  constructor(public title: string, public value = 0) {
    super(title, value, [{text: 'Yes', value: 1}, {text: 'No', value: 0}]);
  }

}


export class Nary extends Node {
  public kind = 'nary'
  
}


export class Leaf extends Node {
  public kind = 'leaf';
  readonly children: Node[] = [];
  public nextName = 'Restart';
  // TODO: Leaves could get an action.
  
  constructor(title: string, value: number) {
    super(title, value);
  }
  
}
