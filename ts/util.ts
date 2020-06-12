//                    GNU GENERAL PUBLIC LICENSE
//                       Version 3, 29 June 2007
//
//  (c) 2020 Volker Sorge, v.sorge@progressiveaccess.com
//           Benetech & ETS hackathon
//

namespace Util {

  /**
   * Classname prefix.
   */
  let prefix = 'DT_';

  /**
   * Adds class with the right prefix to an element.
   * @param {HTMLElement} element The element.
   * @param {string[]} ...rest A rest list of classes.
   */
  export const addClass = function(element: HTMLElement, ...rest: string[]) {
    rest.forEach(x => element.classList.add(prefix + x.toUpperCase()));
  };

  /**
   * Creates a button element.
   * @param {string} name The name of the button.
   * @param {() => any} action The action it should perform.
   * @param {HTMLElement} parent The parent to attache the button to.
   * @param {string=} classname The classname of the element.
   * @return {HTMLButtonElement} The newly created button element.
   */
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

  /**
   * Makes a general DOM node.
   * @param {string} tag The tag of the node.
   * @param {string[]} ...classname A rest list of classes.
   * @return {HTMLElement} The newly created element.
   */
  export const makeNode = function(
    tag: string, ...classname: string[]): HTMLElement {
    let node = document.createElement(tag);
    addClass(node, ...classname);
    return node;
  };

  /**
   * Creates and attaches a span element with text content.
   * @param {HTMLElement} parent The parent node to attach to.
   * @param {string} content The text content.
   * @param {string[]} ...classname The rest list of classes.
   */
  export const makeSpan = function(
    parent: HTMLElement, content: string, ...classname: string[]) {
    let span = document.createElement('span');
    addClass(span, ...classname);
    span.innerHTML = content;
    parent.appendChild(span);
  };

}

export default Util;
