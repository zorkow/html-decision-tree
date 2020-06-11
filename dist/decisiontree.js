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
        var dfs = new DepthFirst(this, function (x) { return x; });
        dfs.result.forEach(function (n) {
            node.appendChild(n.toHtml());
            n.hide();
        });
        this.root.show();
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
        var e_1, _a;
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (labels_1_1 && !labels_1_1.done && (_a = labels_1.return)) _a.call(labels_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Node.parseChildren = function (node, json) {
        var e_2, _a;
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (json_1_1 && !json_1_1.done && (_a = json_1.return)) _a.call(json_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Node.fromJson = function (json) {
        var kind = json.type || 'leaf';
        var node = null;
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
        var e_3, _a;
        try {
            for (var _b = __values(this.labels), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                var content = document.createElement('div');
                addClass(content, 'RADIOBUTTON');
                var radio = document.createElement('input');
                addClass(radio, 'RADIO');
                var labelId = 'dt_id_' + labelCounter++;
                radio.type = 'radio';
                radio.name = this.variable;
                radio.value = key.toString();
                radio.setAttribute('aria-labelledby', labelId);
                this.radioButtons.push(radio);
                var label = document.createElement('label');
                addClass(label, 'LABEL');
                label.id = labelId;
                label.innerHTML = value;
                content.appendChild(radio);
                content.appendChild(label);
                this.div.appendChild(content);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Node.prototype.buttons = function () {
        var buttons = document.createElement('div');
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
        var e_4, _a;
        try {
            for (var _b = __values(this.radioButtons), _c = _b.next(); !_c.done; _c = _b.next()) {
                var radio = _c.value;
                if (radio.checked) {
                    var value = radio.value;
                    this.hide();
                    this.children.get(parseInt(value, 10)).show();
                    return;
                }
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
        this.titleElement.focus();
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
    function Leaf(content, title, value) {
        var _this = _super.call(this, content, title, value) || this;
        _this.kind = 'leaf';
        _this.nextName = 'Restart';
        return _this;
    }
    Leaf.prototype.fireNext = function () {
        this.hide();
        this.tree.root.show();
    };
    return Leaf;
}(Node));
exports.Leaf = Leaf;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2lzaW9udHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLCtEQUFvQztBQUV6QixZQUFJLEdBQUcsV0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QjtJQUFBO1FBRVMsWUFBTyxHQUFX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LEVBQUMsQ0FBQyxDQUFDLFNBQ2hGO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBSyxHQUFMLEtBQUssQ0FBSTtRQUZuRSxVQUFJLEdBQUcsUUFBUTs7SUFJdEIsQ0FBQztJQUVILGFBQUM7QUFBRCxDQUFDLENBUjJCLElBQUksR0FRL0I7QUFSWSx3QkFBTTtBQVduQjtJQUEwQix3QkFBSTtJQUE5QjtRQUFBLHFFQUdDO1FBRlEsVUFBSSxHQUFHLE1BQU07O0lBRXRCLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxDQUh5QixJQUFJLEdBRzdCO0FBSFksb0JBQUk7QUFNakI7SUFBMEIsd0JBQUk7SUFLNUIsY0FBWSxPQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWE7UUFBekQsWUFDRSxrQkFBTSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUM3QjtRQU5NLFVBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxjQUFRLEdBQUcsU0FBUyxDQUFDOztJQUs1QixDQUFDO0lBRVMsdUJBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQ0FkeUIsSUFBSSxHQWM3QjtBQWRZLG9CQUFJIiwiZmlsZSI6ImRlY2lzaW9udHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlY2lzaW9udHJlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZWNpc2lvbnRyZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtUcmVlIGFzIG9iajB9IGZyb20gJy4vdHJlZSc7XG5cbmV4cG9ydCBsZXQgVHJlZSA9IG9iajA7XG4iLCIvLyBJbml0aWFsIHRyZWVcblxuZXhwb3J0IGNsYXNzIFRyZWUge1xuXG4gIHB1YmxpYyBqc29uU3RyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGpzb246IGFueSA9IG51bGw7XG4gIHB1YmxpYyByb290OiBOb2RlID0gbnVsbDtcblxuICBwdWJsaWMgbG9hZEpzb24odXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRKc29uKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGh0dHBSZXF1ZXN0LnN0YXR1c1RleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgaHR0cFJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaHR0cFJlcXVlc3Quc3RhdHVzVGV4dCk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgaHR0cFJlcXVlc3Quc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIF9sb2FkSnNvbihqc29uOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuanNvblN0ciA9IGpzb247XG4gICAgICB0aGlzLmZyb21Kc29uKCk7XG4gICAgICByZXNvbHZlKCdKU09OIGxvYWRlZCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KCdKU09OIFBhcnNlciBFcnJvciEnKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBmcm9tSnNvbigpIHtcbiAgICB0aGlzLmpzb24gPSBKU09OLnBhcnNlKHRoaXMuanNvblN0cik7XG4gICAgdGhpcy5yb290ID0gTm9kZS5mcm9tSnNvbih0aGlzLmpzb24pO1xuICAgIGxldCBkZnMgPSBuZXcgRGVwdGhGaXJzdCh0aGlzLCAoeDogTm9kZSkgPT4geCk7XG4gICAgZGZzLnJlc3VsdC5mb3JFYWNoKG4gPT4gbi50cmVlID0gdGhpcyk7XG4gIH1cblxuXG4gIHB1YmxpYyB0b0hUTUwobm9kZTogSFRNTEVsZW1lbnQgPSBudWxsKSB7XG4gICAgbGV0IGRmcyA9IG5ldyBEZXB0aEZpcnN0KHRoaXMsICh4OiBOb2RlKSA9PiB4KTtcbiAgICBkZnMucmVzdWx0LmZvckVhY2goKG46IE5vZGUpID0+IHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobi50b0h0bWwoKSk7XG4gICAgICBuLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3Quc2hvdygpO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVwdGhGaXJzdCB7XG5cbiAgcHVibGljIHJlc3VsdDogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0cmVlOiBUcmVlLCBwcml2YXRlIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy52aXNpdCh0cmVlLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpdChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5yZXN1bHQucHVzaCh0aGlzLmZ1bmMobm9kZSkpO1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHRoaXMudmlzaXQoeCkpO1xuICB9XG5cbn1cblxuXG5sZXQgcHJlZml4ID0gJ0RUXyc7XG5cbmxldCBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCAuLi5yZXN0OiBzdHJpbmdbXSkge1xuICByZXN0LmZvckVhY2goeCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQocHJlZml4ICsgeC50b1VwcGVyQ2FzZSgpKSk7XG59O1xuXG5cbmxldCBjb3VudGVyID0gMDtcbmxldCBsYWJlbENvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgTm9kZSB7XG5cbiAgcHVibGljIHRyZWU6IFRyZWU7XG4gIHB1YmxpYyBsYWJlbHM6IE1hcDxudW1iZXIsIHN0cmluZz4gPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICBwdWJsaWMga2luZDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjaGlsZHJlbjogTWFwPG51bWJlciwgTm9kZT4gPSBuZXcgTWFwPG51bWJlciwgTm9kZT4oKTtcbiAgcHVibGljIHBhcmVudDogTm9kZSA9IG51bGw7XG4gIHB1YmxpYyB2YXJpYWJsZTogc3RyaW5nID0gJ2R0X3ZhcmlhYmxlXycgKyBjb3VudGVyKys7XG4gIHB1YmxpYyByYWRpb0J1dHRvbnM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHVibGljIGRpdjogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyB0aXRsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBcbiAgcHJpdmF0ZSBuZXh0QnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aW91c0J1dHRvbjogSFRNTEVsZW1lbnQ7XG5cblxuICBwdWJsaWMgbmV4dE5hbWU6IHN0cmluZyA9ICdOZXh0JztcbiAgcHVibGljIHByZXZpb3VzTmFtZTogc3RyaW5nID0gJ0JhY2snO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgICAgICAgICAgIHB1YmxpYyB2YWx1ZSA9IDAsXG4gICAgICAgICAgICAgIGxhYmVsczoge3RleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlcn1bXSA9IFtdKSB7XG4gICAgZm9yIChsZXQge3RleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZX0gb2YgbGFiZWxzKSB7XG4gICAgICB0aGlzLmxhYmVscy5zZXQodmFsdWUsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHBhcnNlQ2hpbGRyZW4obm9kZTogTm9kZSwganNvbjogYW55W10pIHtcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ubGVuZ3RoKSByZXR1cm47XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBqc29uKSB7XG4gICAgICBsZXQgY2hpbGROb2RlID0gTm9kZS5mcm9tSnNvbihjaGlsZCk7XG4gICAgICBub2RlLmNoaWxkcmVuLnNldChjaGlsZE5vZGUudmFsdWUsIGNoaWxkTm9kZSk7XG4gICAgICBjaGlsZE5vZGUucGFyZW50ID0gbm9kZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbjogYW55KTogTm9kZSB7XG4gICAgbGV0IGtpbmQgPSBqc29uLnR5cGUgfHwgJ2xlYWYnO1xuICAgIGxldCBub2RlOiBOb2RlID0gbnVsbDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgJ2xlYWYnOlxuICAgICAgICBub2RlID0gbmV3IExlYWYoanNvbi5jb250ZW50LCBqc29uLnRpdGxlLCBqc29uLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICduYXJ5JzpcbiAgICAgICAgbm9kZSA9IG5ldyBOYXJ5KGpzb24uY29udGVudCwganNvbi50aXRsZSwganNvbi52YWx1ZSwganNvbi5sYWJlbHMgfHwgW10pO1xuICAgICAgICBOb2RlLnBhcnNlQ2hpbGRyZW4obm9kZSwganNvbi5jaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgbm9kZSA9IG5ldyBCaW5hcnkoanNvbi5jb250ZW50LCBqc29uLnRpdGxlLCBqc29uLnZhbHVlKTtcbiAgICAgICAgTm9kZS5wYXJzZUNoaWxkcmVuKG5vZGUsIGpzb24uY2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwdWJsaWMgdG9IdG1sKCk6IEhUTUxFbGVtZW50IHtcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzKHRoaXMuZGl2LCAnTk9ERScsIHRoaXMua2luZCk7XG4gICAgLy8gQWN0dWFsIHRpdGxlIGVsZW1lbnRcbiAgICB0aGlzLnRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRDbGFzcyh0aGlzLnRpdGxlRWxlbWVudCwgJ1RJVExFJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIHRoaXMudGl0bGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xuICAgIC8vIEFjdHVhbCBjb250ZW50IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZENsYXNzKHRoaXMuY29udGVudEVsZW1lbnQsICdDT05URU5UJyk7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWxlbWVudCk7XG4gICAgdGhpcy5yYWRpb3MoKTtcbiAgICB0aGlzLmJ1dHRvbnMoKTtcbiAgICByZXR1cm4gdGhpcy5kaXY7XG4gIH1cblxuXG4gIHByb3RlY3RlZCByYWRpb3MoKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5sYWJlbHMpIHtcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhZGRDbGFzcyhjb250ZW50LCAnUkFESU9CVVRUT04nKTtcbiAgICAgIGxldCByYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBhZGRDbGFzcyhyYWRpbywgJ1JBRElPJyk7XG4gICAgICBsZXQgbGFiZWxJZCA9ICdkdF9pZF8nICsgbGFiZWxDb3VudGVyKys7XG4gICAgICByYWRpby50eXBlID0gJ3JhZGlvJztcbiAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLnZhcmlhYmxlO1xuICAgICAgcmFkaW8udmFsdWUgPSBrZXkudG9TdHJpbmcoKTtcbiAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgbGFiZWxJZCk7XG4gICAgICB0aGlzLnJhZGlvQnV0dG9ucy5wdXNoKHJhZGlvKTtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBhZGRDbGFzcyhsYWJlbCwgJ0xBQkVMJyk7XG4gICAgICBsYWJlbC5pZCA9IGxhYmVsSWQ7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmFkaW8pO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYnV0dG9ucygpIHtcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzKGJ1dHRvbnMsICdCVVRUT05TJyk7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnByZXZpb3VzKCk7XG4gICAgICBidXR0b25zLmFwcGVuZENoaWxkKHRoaXMucHJldmlvdXNCdXR0b24pO1xuICAgIH1cbiAgICB0aGlzLm5leHQoKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHRoaXMubmV4dEJ1dHRvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5uZXh0QnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRoaXMubmV4dEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm5leHROYW1lO1xuICAgIGFkZENsYXNzKHRoaXMubmV4dEJ1dHRvbiwgJ05FWFQnKTtcbiAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZpcmVOZXh0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcmVOZXh0KCkge1xuICAgIGZvciAobGV0IHJhZGlvIG9mIHRoaXMucmFkaW9CdXR0b25zKSB7XG4gICAgICBpZiAoKHJhZGlvIGFzIGFueSkuY2hlY2tlZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAocmFkaW8gYXMgYW55KS52YWx1ZTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZ2V0KHBhcnNlSW50KHZhbHVlLCAxMCkpLnNob3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c0J1dHRvbikgcmV0dXJuO1xuICAgIHRoaXMucHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLnByZXZpb3VzQnV0dG9uLmlubmVySFRNTCA9IHRoaXMucHJldmlvdXNOYW1lO1xuICAgIGFkZENsYXNzKHRoaXMucHJldmlvdXNCdXR0b24sICdQUkVWSU9VUycpO1xuICAgIHRoaXMucHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZpcmVQcmV2aW91cy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLnByZXZpb3VzQnV0dG9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJlUHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIHRoaXMucGFyZW50LnNob3coKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIFRPRE86IFRoaXMgaXMgcHJvYmFibHkgb3ZlcmtpbGwuXG4gIHB1YmxpYyBzaG93KCkge1xuICAgIHRoaXMuZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuY29udGVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIHRoaXMuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5jb250ZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxpdmUnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgTm9kZSB7XG5cbiAgcHVibGljIGtpbmQgPSAnYmluYXJ5J1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBzdHJpbmcsIHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWUgPSAwKSB7XG4gICAgc3VwZXIoY29udGVudCwgdGl0bGUsIHZhbHVlLCBbe3RleHQ6ICdZZXMnLCB2YWx1ZTogMX0sIHt0ZXh0OiAnTm8nLCB2YWx1ZTogMH1dKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE5hcnkgZXh0ZW5kcyBOb2RlIHtcbiAgcHVibGljIGtpbmQgPSAnbmFyeSdcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBMZWFmIGV4dGVuZHMgTm9kZSB7XG4gIHB1YmxpYyBraW5kID0gJ2xlYWYnO1xuICBwdWJsaWMgbmV4dE5hbWUgPSAnUmVzdGFydCc7XG4gIC8vIFRPRE86IExlYXZlcyBjb3VsZCBnZXQgYW4gYWN0aW9uLlxuXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHN1cGVyKGNvbnRlbnQsIHRpdGxlLCB2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyZU5leHQoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdGhpcy50cmVlLnJvb3Quc2hvdygpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=