namespace Util {

  export const makeButton = function(
    name: string, action: () => any, parent: HTMLElement,
    classname: string = ''): HTMLButtonElement {
    let button = document.createElement('button');
    button.innerHTML = name;
    addClass(button, classname || name.toUpperCase());
    button.addEventListener('click', action);
    parent.appendChild(button);
    return button;
  };

  let prefix = 'DT_';

  export const addClass = function(element: HTMLElement, ...rest: string[]) {
    rest.forEach(x => element.classList.add(prefix + x.toUpperCase()));
  };

}

export default Util;
