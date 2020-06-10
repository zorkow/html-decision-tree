// Initial tree

export class Tree {

  public jsonStr: string = '';

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
    } catch (err) {
      console.error('Something went wrong!')
    }
  }

  
}
