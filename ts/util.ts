namespace Util {

  export const makeButton = function(
    name: string, action: () => any, parent: HTMLElement,
    classname: string = ''): HTMLButtonElement {
    let button = document.createElement('button');
    button.innerHTML = name;
    addClass(button, classname || name.toUpperCase(), 'BUTTON');
    button.addEventListener('click', action);
    parent.appendChild(button);
    return button;
  };

  let prefix = 'DT_';

  export const addClass = function(element: HTMLElement, ...rest: string[]) {
    rest.forEach(x => element.classList.add(prefix + x.toUpperCase()));
  };

  export const makeDiv = function(...classname: string[]) {
    let div = document.createElement('div');
    addClass(div, ...classname);
    return div;
  };

  export const makeSpan = function(
    parent: HTMLElement, content: string, ...classname: string[]) {
    let span = document.createElement('span');
    addClass(span, ...classname);
    span.innerHTML = content;
    parent.appendChild(span);
  };

}

export default Util;
