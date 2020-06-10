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
    console.log(this.json);
  }

  
}


export class Node {

  public content: Map<number, string> = new Map<number, string>();
  public children: Node[] = [];
  public parent: Node = null;
  
  constructor(public title: string, public value = 0, public kind: string = '',
              content: {text: string, value: number}[] = []) {
    for (let {text: text, value: value} of content) {
      this.content.set(value, text);
    }
  }

  
}
