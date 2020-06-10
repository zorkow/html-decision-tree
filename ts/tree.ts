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

  
  public toHTML(node: Element = null) {
    let dfs = new DepthFirst(this, (x: Node) => x.toHtml());
    // TODO: Visit the tree.
    dfs.result.forEach(n => node.appendChild(n));
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

export class Node {

  public content: Map<number, string> = new Map<number, string>();
  public kind: string = '';
  public children: Node[] = [];
  public parent: Node = null;
  public variable: string = 'dt_variable' + counter++;
  
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
        break
      default:
        throw Error('Unknown node type.');
    }
    return node;
  }

  public toHtml(): Element {
    let div = document.createElement('div');
    div.classList.add('DT_NODE')
    div.classList.add('DT_' + this.kind.toUpperCase())
    let title = document.createElement('span');
    title.classList.add('DT_TITLE');
    title.innerHTML = this.title;
    div.appendChild(title);
    this.content.forEach(x => {
      let content = document.createElement('div');
      content.classList.add('DT_CONTENT');
      let radio = document.createElement('input');
      radio.classList.add('DT_RADIO');
      radio.type = 'radio';
      radio.name = this.variable;
      radio.value = this.value.toString();
      let label = document.createElement('label');
      label.classList.add('DT_LABEL');
      label.innerHTML = x;
      content.appendChild(radio);
      content.appendChild(label);
      div.appendChild(content);
    });
    return div;
  }
  
}

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
  // TODO: Leaves could get an action.
  
  constructor(title: string, value: number) {
    super(title, value);
  }
  
}
