(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["decisiontree"] = factory();
	else
		root["decisiontree"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var tree_1 = __webpack_require__(/*! ./tree */ "./ts/tree.ts");
exports.Tree = tree_1.Tree;


/***/ }),

/***/ "./ts/tree.ts":
/*!********************!*\
  !*** ./ts/tree.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Nary = exports.Binary = exports.Node = exports.DepthFirst = exports.Tree = void 0;
var Tree = (function () {
    function Tree() {
        this.jsonStr = '';
        this.json = null;
        this.root = null;
        this.history = [];
    }
    Tree.prototype.loadJson = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === 4) {
                    if (httpRequest.status === 200) {
                        this._loadJson(httpRequest.responseText, resolve, reject);
                    }
                    else {
                        reject(httpRequest.statusText);
                    }
                }
            }.bind(_this);
            httpRequest.onerror = function () {
                reject(httpRequest.statusText);
            }.bind(_this);
            httpRequest.open('GET', url, true);
            httpRequest.send();
        });
    };
    Tree.prototype._loadJson = function (json, resolve, reject) {
        try {
            this.jsonStr = json;
            this.fromJson();
            resolve('JSON loaded');
        }
        catch (err) {
            reject('JSON Parser Error!');
        }
    };
    Tree.prototype.fromJson = function () {
        var _this = this;
        this.json = JSON.parse(this.jsonStr);
        this.root = Node.fromJson(this.json);
        var dfs = new DepthFirst(this, function (x) { return x; });
        dfs.result.forEach(function (n) { return n.tree = _this; });
    };
    Tree.prototype.toHTML = function (node) {
        if (node === void 0) { node = null; }
        this.rootElement = node;
        var dfs = new DepthFirst(this, function (x) { return x; });
        dfs.result.forEach(function (n) {
            node.appendChild(n.toHtml());
            n.hide();
        });
        this.root.show();
    };
    Tree.prototype.summary = function (node) {
        node.hide();
        var result = [[node.content, '']];
        var count = 0;
        node = node.parent;
        while (node) {
            count++;
            var value = this.history[this.history.length - count];
            result.unshift([node.content, node.labels.get(value)]);
            node = node.parent;
        }
        this.printSummary(result);
    };
    Tree.prototype.printSummary = function (summary) {
        var e_1, _a;
        this.summaryElement = document.createElement('div');
        addClass(this.summaryElement, 'NODE', 'SUMMARY');
        this.rootElement.appendChild(this.summaryElement);
        var title = document.createElement('span');
        addClass(title, 'TITLE');
        title.setAttribute('tabindex', '-1');
        title.innerHTML = 'Summary';
        this.summaryElement.appendChild(title);
        try {
            for (var summary_1 = __values(summary), summary_1_1 = summary_1.next(); !summary_1_1.done; summary_1_1 = summary_1.next()) {
                var _b = __read(summary_1_1.value, 2), question = _b[0], result = _b[1];
                var div = document.createElement('div');
                var span1 = document.createElement('span');
                span1.innerHTML = question;
                div.appendChild(span1);
                var span2 = document.createElement('span');
                span2.innerHTML = result;
                div.appendChild(span2);
                this.summaryElement.appendChild(div);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (summary_1_1 && !summary_1_1.done && (_a = summary_1.return)) _a.call(summary_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.summaryElement.style.display = 'block';
    };
    return Tree;
}());
exports.Tree = Tree;
var DepthFirst = (function () {
    function DepthFirst(tree, func) {
        this.func = func;
        this.result = [];
        this.visit(tree.root);
    }
    DepthFirst.prototype.visit = function (node) {
        var _this = this;
        this.result.push(this.func(node));
        node.children.forEach(function (x) { return _this.visit(x); });
    };
    return DepthFirst;
}());
exports.DepthFirst = DepthFirst;
var prefix = 'DT_';
var addClass = function (element) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    rest.forEach(function (x) { return element.classList.add(prefix + x.toUpperCase()); });
};
var counter = 0;
var labelCounter = 0;
var Node = (function () {
    function Node(content, title, value, labels) {
        var e_2, _a;
        if (title === void 0) { title = ''; }
        if (value === void 0) { value = 0; }
        if (labels === void 0) { labels = []; }
        this.content = content;
        this.title = title;
        this.value = value;
        this.labels = new Map();
        this.kind = '';
        this.children = new Map();
        this.parent = null;
        this.variable = 'dt_variable_' + counter++;
        this.radioButtons = [];
        this.nextName = 'Next';
        this.previousName = 'Back';
        try {
            for (var labels_1 = __values(labels), labels_1_1 = labels_1.next(); !labels_1_1.done; labels_1_1 = labels_1.next()) {
                var _b = labels_1_1.value, text = _b.text, value_1 = _b.value;
                this.labels.set(value_1, text);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (labels_1_1 && !labels_1_1.done && (_a = labels_1.return)) _a.call(labels_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    Node.parseChildren = function (node, json) {
        var e_3, _a;
        if (!json || !json.length)
            return;
        try {
            for (var json_1 = __values(json), json_1_1 = json_1.next(); !json_1_1.done; json_1_1 = json_1.next()) {
                var child = json_1_1.value;
                var childNode = Node.fromJson(child);
                node.children.set(childNode.value, childNode);
                childNode.parent = node;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (json_1_1 && !json_1_1.done && (_a = json_1.return)) _a.call(json_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Node.fromJson = function (json) {
        var kind = json.type || 'leaf';
        var node = null;
        switch (kind) {
            case 'leaf':
                node = new Leaf(json.content, json.title, json.value, json.action);
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
    };
    Node.prototype.toHtml = function () {
        this.div = document.createElement('div');
        addClass(this.div, 'NODE', this.kind);
        this.titleElement = document.createElement('span');
        addClass(this.titleElement, 'TITLE');
        this.titleElement.setAttribute('tabindex', '-1');
        this.titleElement.innerHTML = this.title;
        this.div.appendChild(this.titleElement);
        this.contentElement = document.createElement('span');
        addClass(this.contentElement, 'CONTENT');
        this.contentElement.setAttribute('tabindex', '-1');
        this.contentElement.innerHTML = this.content;
        this.div.appendChild(this.contentElement);
        this.radios();
        this.buttons();
        return this.div;
    };
    Node.prototype.radios = function () {
        var e_4, _a;
        try {
            for (var _b = __values(this.labels), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                var content = document.createElement('div');
                addClass(content, 'RADIOBUTTON');
                var radio = document.createElement('input');
                addClass(radio, 'RADIO');
                var radioId = 'dt_id_' + labelCounter++;
                var labelId = 'dt_id_' + labelCounter++;
                radio.type = 'radio';
                radio.id = radioId;
                radio.name = this.variable;
                radio.value = key.toString();
                radio.setAttribute('aria-labelledby', labelId);
                this.radioButtons.push(radio);
                var label = document.createElement('label');
                addClass(label, 'LABEL');
                label.id = labelId;
                label.setAttribute('for', radioId);
                label.innerHTML = value;
                content.appendChild(radio);
                content.appendChild(label);
                this.div.appendChild(content);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    Node.prototype.buttons = function () {
        var buttons = this.buttonsElement = document.createElement('div');
        addClass(buttons, 'BUTTONS');
        this.div.appendChild(buttons);
        if (this.parent) {
            this.previous();
            buttons.appendChild(this.previousButton);
        }
        this.next();
        buttons.appendChild(this.nextButton);
    };
    Node.prototype.next = function () {
        if (this.nextButton) {
            return;
        }
        this.nextButton = document.createElement('button');
        this.nextButton.innerHTML = this.nextName;
        addClass(this.nextButton, 'NEXT');
        this.nextButton.addEventListener('click', this.fireNext.bind(this));
    };
    Node.prototype.fireNext = function () {
        var e_5, _a;
        try {
            for (var _b = __values(this.radioButtons), _c = _b.next(); !_c.done; _c = _b.next()) {
                var radio = _c.value;
                if (radio.checked) {
                    var value = radio.value;
                    var num = parseInt(value, 10);
                    this.tree.history.push(num);
                    this.hide();
                    this.children.get(num).show();
                    return;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    Node.prototype.previous = function () {
        if (this.previousButton)
            return;
        this.previousButton = document.createElement('button');
        this.previousButton.innerHTML = this.previousName;
        addClass(this.previousButton, 'PREVIOUS');
        this.previousButton.addEventListener('click', this.firePrevious.bind(this));
        this.div.appendChild(this.previousButton);
    };
    Node.prototype.firePrevious = function () {
        if (this.parent) {
            this.hide();
            this.parent.show();
        }
    };
    Node.prototype.show = function () {
        this.div.style.display = 'block';
        this.contentElement.setAttribute('tabindex', '0');
        this.titleElement.setAttribute('aria-live', 'polite');
        this.titleElement.setAttribute('tabindex', '0');
    };
    Node.prototype.hide = function () {
        this.div.style.display = 'none';
        this.contentElement.setAttribute('tabindex', '-1');
        this.titleElement.removeAttribute('aria-live');
        this.titleElement.setAttribute('tabindex', '-1');
    };
    return Node;
}());
exports.Node = Node;
var Binary = (function (_super) {
    __extends(Binary, _super);
    function Binary(content, title, value) {
        if (value === void 0) { value = 0; }
        var _this = _super.call(this, content, title, value, [{ text: 'Yes', value: 1 }, { text: 'No', value: 0 }]) || this;
        _this.content = content;
        _this.title = title;
        _this.value = value;
        _this.kind = 'binary';
        return _this;
    }
    return Binary;
}(Node));
exports.Binary = Binary;
var Nary = (function (_super) {
    __extends(Nary, _super);
    function Nary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = 'nary';
        return _this;
    }
    return Nary;
}(Node));
exports.Nary = Nary;
var Leaf = (function (_super) {
    __extends(Leaf, _super);
    function Leaf(content, title, value, action) {
        if (action === void 0) { action = ''; }
        var _this = _super.call(this, content, title, value) || this;
        _this.action = action;
        _this.kind = 'leaf';
        _this.nextName = 'Restart';
        return _this;
    }
    Leaf.prototype.buttons = function () {
        _super.prototype.buttons.call(this);
        this.summaryButton = document.createElement('button');
        this.summaryButton.innerHTML = 'Summary';
        addClass(this.summaryButton, 'SUMMARY');
        this.summaryButton.addEventListener('click', this.fireSummary.bind(this));
        this.buttonsElement.appendChild(this.summaryButton);
        console.log(this.action);
        if (this.action) {
            this.actionButton = document.createElement('button');
            this.actionButton.innerHTML = 'Go';
            addClass(this.actionButton, 'ACTION');
            this.actionButton.addEventListener('click', this.fireAction.bind(this));
            this.buttonsElement.appendChild(this.actionButton);
        }
    };
    Leaf.prototype.fireAction = function () {
        console.log('Firing!');
        window.open(this.action, '_blank');
    };
    Leaf.prototype.fireSummary = function () {
        this.tree.summary(this);
    };
    Leaf.prototype.fireNext = function () {
        this.hide();
        this.tree.root.show();
        this.tree.history = [];
    };
    return Leaf;
}(Node));
exports.Leaf = Leaf;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2lzaW9udHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLCtEQUFvQztBQUV6QixZQUFJLEdBQUcsV0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QjtJQUFBO1FBRVMsWUFBTyxHQUFX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Q0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVTLHlCQUFVLEdBQXBCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLDBCQUFXLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVTLHVCQUFRLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFSCxXQUFDO0FBQUQsQ0FBQyxDQTVDeUIsSUFBSSxHQTRDN0I7QUE1Q1ksb0JBQUkiLCJmaWxlIjoiZGVjaXNpb250cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGVjaXNpb250cmVlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlY2lzaW9udHJlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge1RyZWUgYXMgb2JqMH0gZnJvbSAnLi90cmVlJztcblxuZXhwb3J0IGxldCBUcmVlID0gb2JqMDtcbiIsIi8vIEluaXRpYWwgdHJlZVxuXG5leHBvcnQgY2xhc3MgVHJlZSB7XG5cbiAgcHVibGljIGpzb25TdHI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMganNvbjogYW55ID0gbnVsbDtcbiAgcHVibGljIHJvb3Q6IE5vZGUgPSBudWxsO1xuICBwdWJsaWMgaGlzdG9yeTogbnVtYmVyW10gPSBbXTtcbiAgcHVibGljIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHVibGljIHN1bW1hcnlFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgbG9hZEpzb24odXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRKc29uKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGh0dHBSZXF1ZXN0LnN0YXR1c1RleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgaHR0cFJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaHR0cFJlcXVlc3Quc3RhdHVzVGV4dCk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgaHR0cFJlcXVlc3Quc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIF9sb2FkSnNvbihqc29uOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuanNvblN0ciA9IGpzb247XG4gICAgICB0aGlzLmZyb21Kc29uKCk7XG4gICAgICByZXNvbHZlKCdKU09OIGxvYWRlZCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KCdKU09OIFBhcnNlciBFcnJvciEnKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBmcm9tSnNvbigpIHtcbiAgICB0aGlzLmpzb24gPSBKU09OLnBhcnNlKHRoaXMuanNvblN0cik7XG4gICAgdGhpcy5yb290ID0gTm9kZS5mcm9tSnNvbih0aGlzLmpzb24pO1xuICAgIGxldCBkZnMgPSBuZXcgRGVwdGhGaXJzdCh0aGlzLCAoeDogTm9kZSkgPT4geCk7XG4gICAgZGZzLnJlc3VsdC5mb3JFYWNoKG4gPT4gbi50cmVlID0gdGhpcyk7XG4gIH1cblxuXG4gIHB1YmxpYyB0b0hUTUwobm9kZTogSFRNTEVsZW1lbnQgPSBudWxsKSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IG5vZGU7XG4gICAgbGV0IGRmcyA9IG5ldyBEZXB0aEZpcnN0KHRoaXMsICh4OiBOb2RlKSA9PiB4KTtcbiAgICBkZnMucmVzdWx0LmZvckVhY2goKG46IE5vZGUpID0+IHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobi50b0h0bWwoKSk7XG4gICAgICBuLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3Quc2hvdygpO1xuICB9XG5cbiAgcHVibGljIHN1bW1hcnkobm9kZTogTm9kZSkge1xuICAgIG5vZGUuaGlkZSgpO1xuICAgIGxldCByZXN1bHQ6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtbbm9kZS5jb250ZW50LCAnJ11dO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBjb3VudCsrO1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSBjb3VudF07XG4gICAgICByZXN1bHQudW5zaGlmdChbbm9kZS5jb250ZW50LCBub2RlLmxhYmVscy5nZXQodmFsdWUpXSk7XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgfVxuICAgIHRoaXMucHJpbnRTdW1tYXJ5KHJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIHByaW50U3VtbWFyeShzdW1tYXJ5OiBbc3RyaW5nLCBzdHJpbmddW10pIHtcbiAgICB0aGlzLnN1bW1hcnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3ModGhpcy5zdW1tYXJ5RWxlbWVudCwgJ05PREUnLCAnU1VNTUFSWScpO1xuICAgIHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdW1tYXJ5RWxlbWVudCk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZENsYXNzKHRpdGxlLCAnVElUTEUnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ1N1bW1hcnknO1xuICAgIHRoaXMuc3VtbWFyeUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvciAobGV0IFtxdWVzdGlvbiwgcmVzdWx0XSBvZiBzdW1tYXJ5KSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsZXQgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuMS5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuMSk7XG4gICAgICBsZXQgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuMi5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuICAgICAgdGhpcy5zdW1tYXJ5RWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgICB0aGlzLnN1bW1hcnlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVwdGhGaXJzdCB7XG5cbiAgcHVibGljIHJlc3VsdDogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0cmVlOiBUcmVlLCBwcml2YXRlIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy52aXNpdCh0cmVlLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpdChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5yZXN1bHQucHVzaCh0aGlzLmZ1bmMobm9kZSkpO1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHRoaXMudmlzaXQoeCkpO1xuICB9XG5cbn1cblxuXG5sZXQgcHJlZml4ID0gJ0RUXyc7XG5cbmxldCBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCAuLi5yZXN0OiBzdHJpbmdbXSkge1xuICByZXN0LmZvckVhY2goeCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQocHJlZml4ICsgeC50b1VwcGVyQ2FzZSgpKSk7XG59O1xuXG5cbmxldCBjb3VudGVyID0gMDtcbmxldCBsYWJlbENvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgTm9kZSB7XG5cbiAgcHVibGljIHRyZWU6IFRyZWU7XG4gIHB1YmxpYyBsYWJlbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICBwdWJsaWMga2luZDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjaGlsZHJlbjogTWFwPG51bWJlciwgTm9kZT4gPSBuZXcgTWFwPG51bWJlciwgTm9kZT4oKTtcbiAgcHVibGljIHBhcmVudDogTm9kZSA9IG51bGw7XG4gIHB1YmxpYyB2YXJpYWJsZTogc3RyaW5nID0gJ2R0X3ZhcmlhYmxlXycgKyBjb3VudGVyKys7XG4gIHB1YmxpYyByYWRpb0J1dHRvbnM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHVibGljIGRpdjogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyB0aXRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgYnV0dG9uc0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBcbiAgcHJpdmF0ZSBuZXh0QnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aW91c0J1dHRvbjogSFRNTEVsZW1lbnQ7XG5cblxuICBwdWJsaWMgbmV4dE5hbWU6IHN0cmluZyA9ICdOZXh0JztcbiAgcHVibGljIHByZXZpb3VzTmFtZTogc3RyaW5nID0gJ0JhY2snO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgICAgICAgIHB1YmxpYyB2YWx1ZSA9IDAsXG4gICAgICAgICAgICAgIGxhYmVsczoge3RleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlcn1bXSA9IFtdKSB7XG4gICAgZm9yIChsZXQge3RleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZX0gb2YgbGFiZWxzKSB7XG4gICAgICB0aGlzLmxhYmVscy5zZXQodmFsdWUsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlQ2hpbGRyZW4obm9kZTogTm9kZSwganNvbjogYW55W10pIHtcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ubGVuZ3RoKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBqc29uKSB7XG4gICAgICBsZXQgY2hpbGROb2RlID0gTm9kZS5mcm9tSnNvbihjaGlsZCk7XG4gICAgICBub2RlLmNoaWxkcmVuLnNldChjaGlsZE5vZGUudmFsdWUsIGNoaWxkTm9kZSk7XG4gICAgICBjaGlsZE5vZGUucGFyZW50ID0gbm9kZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbjogYW55KTogTm9kZSB7XG4gICAgbGV0IGtpbmQgPSBqc29uLnR5cGUgfHwgJ2xlYWYnO1xuICAgIGxldCBub2RlOiBOb2RlID0gbnVsbDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgJ2xlYWYnOlxuICAgICAgICBub2RlID0gbmV3IExlYWYoanNvbi5jb250ZW50LCBqc29uLnRpdGxlLCBqc29uLnZhbHVlLCBqc29uLmFjdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbmFyeSc6XG4gICAgICAgIG5vZGUgPSBuZXcgTmFyeShqc29uLmNvbnRlbnQsIGpzb24udGl0bGUsIGpzb24udmFsdWUsIGpzb24ubGFiZWxzIHx8IFtdKTtcbiAgICAgICAgTm9kZS5wYXJzZUNoaWxkcmVuKG5vZGUsIGpzb24uY2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIG5vZGUgPSBuZXcgQmluYXJ5KGpzb24uY29udGVudCwganNvbi50aXRsZSwganNvbi52YWx1ZSk7XG4gICAgICAgIE5vZGUucGFyc2VDaGlsZHJlbihub2RlLCBqc29uLmNoaWxkcmVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignVW5rbm93biBub2RlIHR5cGUuJyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcHVibGljIHRvSHRtbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgdGhpcy5kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyh0aGlzLmRpdiwgJ05PREUnLCB0aGlzLmtpbmQpO1xuICAgIC8vIEFjdHVhbCB0aXRsZSBlbGVtZW50XG4gICAgdGhpcy50aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkQ2xhc3ModGhpcy50aXRsZUVsZW1lbnQsICdUSVRMRScpO1xuICAgIHRoaXMudGl0bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMudGl0bGVFbGVtZW50KTtcbiAgICAvLyBBY3R1YWwgY29udGVudCBlbGVtZW50XG4gICAgdGhpcy5jb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRDbGFzcyh0aGlzLmNvbnRlbnRFbGVtZW50LCAnQ09OVEVOVCcpO1xuICAgIHRoaXMuY29udGVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIHRoaXMuY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsZW1lbnQpO1xuICAgIHRoaXMucmFkaW9zKCk7XG4gICAgdGhpcy5idXR0b25zKCk7XG4gICAgcmV0dXJuIHRoaXMuZGl2O1xuICB9XG5cblxuICBwcm90ZWN0ZWQgcmFkaW9zKCkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMubGFiZWxzKSB7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYWRkQ2xhc3MoY29udGVudCwgJ1JBRElPQlVUVE9OJyk7XG4gICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgYWRkQ2xhc3MocmFkaW8sICdSQURJTycpO1xuICAgICAgbGV0IHJhZGlvSWQgPSAnZHRfaWRfJyArIGxhYmVsQ291bnRlcisrO1xuICAgICAgbGV0IGxhYmVsSWQgPSAnZHRfaWRfJyArIGxhYmVsQ291bnRlcisrO1xuICAgICAgcmFkaW8udHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpby5pZCA9IHJhZGlvSWQ7XG4gICAgICByYWRpby5uYW1lID0gdGhpcy52YXJpYWJsZTtcbiAgICAgIHJhZGlvLnZhbHVlID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGxhYmVsSWQpO1xuICAgICAgdGhpcy5yYWRpb0J1dHRvbnMucHVzaChyYWRpbyk7XG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgYWRkQ2xhc3MobGFiZWwsICdMQUJFTCcpO1xuICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCByYWRpb0lkKTtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyYWRpbyk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBidXR0b25zKCkge1xuICAgIGxldCBidXR0b25zID0gdGhpcy5idXR0b25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzKGJ1dHRvbnMsICdCVVRUT05TJyk7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnByZXZpb3VzKCk7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKHRoaXMucHJldmlvdXNCdXR0b24pO1xuICAgIH1cbiAgICB0aGlzLm5leHQoKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHRoaXMubmV4dEJ1dHRvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubmV4dEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm5leHROYW1lO1xuICAgIGFkZENsYXNzKHRoaXMubmV4dEJ1dHRvbiwgJ05FWFQnKTtcbiAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZpcmVOZXh0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcmVOZXh0KCkge1xuICAgIGZvciAobGV0IHJhZGlvIG9mIHRoaXMucmFkaW9CdXR0b25zKSB7XG4gICAgICBpZiAoKHJhZGlvIGFzIGFueSkuY2hlY2tlZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAocmFkaW8gYXMgYW55KS52YWx1ZTtcbiAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgIHRoaXMudHJlZS5oaXN0b3J5LnB1c2gobnVtKTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZ2V0KG51bSkuc2hvdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLnByZXZpb3VzQnV0dG9uKSByZXR1cm47XG4gICAgdGhpcy5wcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMucHJldmlvdXNCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5wcmV2aW91c05hbWU7XG4gICAgYWRkQ2xhc3ModGhpcy5wcmV2aW91c0J1dHRvbiwgJ1BSRVZJT1VTJyk7XG4gICAgdGhpcy5wcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmlyZVByZXZpb3VzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKHRoaXMucHJldmlvdXNCdXR0b24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcmVQcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5wYXJlbnQuc2hvdygpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gVE9ETzogVGhpcyBpcyBwcm9iYWJseSBvdmVya2lsbC5cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy5kaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAvLyB0aGlzLnRpdGxlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmNvbnRlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpO1xuICAgIHRoaXMudGl0bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBOb2RlIHtcblxuICBwdWJsaWMga2luZCA9ICdiaW5hcnknXG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRlbnQ6IHN0cmluZywgcHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZSA9IDApIHtcbiAgICBzdXBlcihjb250ZW50LCB0aXRsZSwgdmFsdWUsIFt7dGV4dDogJ1llcycsIHZhbHVlOiAxfSwge3RleHQ6ICdObycsIHZhbHVlOiAwfV0pO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTmFyeSBleHRlbmRzIE5vZGUge1xuICBwdWJsaWMga2luZCA9ICduYXJ5J1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIExlYWYgZXh0ZW5kcyBOb2RlIHtcbiAgcHVibGljIGtpbmQgPSAnbGVhZic7XG4gIHB1YmxpYyBuZXh0TmFtZSA9ICdSZXN0YXJ0JztcbiAgcHVibGljIHN1bW1hcnlCdXR0b246IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgYWN0aW9uQnV0dG9uOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihjb250ZW50OiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBhY3Rpb246IHN0cmluZyA9ICcnKSB7XG4gICAgc3VwZXIoY29udGVudCwgdGl0bGUsIHZhbHVlKTtcbiAgfVxuXG5cbiAgcHJvdGVjdGVkIGJ1dHRvbnMoKSB7XG4gICAgc3VwZXIuYnV0dG9ucygpO1xuICAgIHRoaXMuc3VtbWFyeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMuc3VtbWFyeUJ1dHRvbi5pbm5lckhUTUwgPSAnU3VtbWFyeSc7XG4gICAgYWRkQ2xhc3ModGhpcy5zdW1tYXJ5QnV0dG9uLCAnU1VNTUFSWScpO1xuICAgIHRoaXMuc3VtbWFyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmlyZVN1bW1hcnkuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5idXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnN1bW1hcnlCdXR0b24pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aW9uKTtcbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0aGlzLmFjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnR28nO1xuICAgICAgYWRkQ2xhc3ModGhpcy5hY3Rpb25CdXR0b24sICdBQ1RJT04nKTtcbiAgICAgIHRoaXMuYWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5maXJlQWN0aW9uLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5idXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmFjdGlvbkJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcmVBY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0ZpcmluZyEnKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLmFjdGlvbiwgJ19ibGFuaycpO1xuICB9XG4gIFxuICBwcm90ZWN0ZWQgZmlyZVN1bW1hcnkoKSB7XG4gICAgdGhpcy50cmVlLnN1bW1hcnkodGhpcyk7XG4gIH1cbiAgXG4gIHByb3RlY3RlZCBmaXJlTmV4dCgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICB0aGlzLnRyZWUucm9vdC5zaG93KCk7XG4gICAgdGhpcy50cmVlLmhpc3RvcnkgPSBbXTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9