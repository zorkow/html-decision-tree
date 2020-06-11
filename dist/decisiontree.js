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
    function Node(title, value, content) {
        var e_1, _a;
        if (value === void 0) { value = 0; }
        if (content === void 0) { content = []; }
        this.title = title;
        this.value = value;
        this.content = new Map();
        this.kind = '';
        this.children = new Map();
        this.parent = null;
        this.variable = 'dt_variable_' + counter++;
        this.radioButtons = [];
        this.nextName = 'Next';
        this.previousName = 'Back';
        try {
            for (var content_1 = __values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
                var _b = content_1_1.value, text = _b.text, value_1 = _b.value;
                this.content.set(value_1, text);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (content_1_1 && !content_1_1.done && (_a = content_1.return)) _a.call(content_1);
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
                node = new Leaf(json.title, json.value);
                break;
            case 'nary':
                node = new Nary(json.title, json.value, json.content || []);
                Node.parseChildren(node, json.children);
                break;
            case 'binary':
                node = new Binary(json.title, json.value);
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
        console.log('HERE');
        this.titleElement.setAttribute('tabindex', '-1');
        this.titleElement.innerHTML = this.title;
        this.div.appendChild(this.titleElement);
        this.radios();
        this.buttons();
        return this.div;
    };
    Node.prototype.radios = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.content), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                var content = document.createElement('div');
                addClass(content, 'CONTENT');
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
        this.titleElement.setAttribute('aria-live', 'polite');
        this.titleElement.setAttribute('tabindex', '0');
        this.titleElement.focus();
    };
    Node.prototype.hide = function () {
        this.div.style.display = 'none';
        this.titleElement.removeAttribute('aria-live');
        this.titleElement.setAttribute('tabindex', '-1');
    };
    return Node;
}());
exports.Node = Node;
var Binary = (function (_super) {
    __extends(Binary, _super);
    function Binary(title, value) {
        if (value === void 0) { value = 0; }
        var _this = _super.call(this, title, value, [{ text: 'Yes', value: 1 }, { text: 'No', value: 0 }]) || this;
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
    function Leaf(title, value) {
        var _this = _super.call(this, title, value) || this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2lzaW9udHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLCtEQUFvQztBQUV6QixZQUFJLEdBQUcsV0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QjtJQUFBO1FBRVMsWUFBTyxHQUFX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QUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQ0FkeUIsSUFBSSxHQWM3QjtBQWRZLG9CQUFJIiwiZmlsZSI6ImRlY2lzaW9udHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRlY2lzaW9udHJlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZWNpc2lvbnRyZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtUcmVlIGFzIG9iajB9IGZyb20gJy4vdHJlZSc7XG5cbmV4cG9ydCBsZXQgVHJlZSA9IG9iajA7XG4iLCIvLyBJbml0aWFsIHRyZWVcblxuZXhwb3J0IGNsYXNzIFRyZWUge1xuXG4gIHB1YmxpYyBqc29uU3RyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGpzb246IGFueSA9IG51bGw7XG4gIHB1YmxpYyByb290OiBOb2RlID0gbnVsbDtcblxuICBwdWJsaWMgbG9hZEpzb24odXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRKc29uKGh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGh0dHBSZXF1ZXN0LnN0YXR1c1RleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgaHR0cFJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaHR0cFJlcXVlc3Quc3RhdHVzVGV4dCk7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgaHR0cFJlcXVlc3Quc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIF9sb2FkSnNvbihqc29uOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuanNvblN0ciA9IGpzb247XG4gICAgICB0aGlzLmZyb21Kc29uKCk7XG4gICAgICByZXNvbHZlKCdKU09OIGxvYWRlZCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KCdKU09OIFBhcnNlciBFcnJvciEnKTtcbiAgICB9XG4gIH1cblxuXG4gIHB1YmxpYyBmcm9tSnNvbigpIHtcbiAgICB0aGlzLmpzb24gPSBKU09OLnBhcnNlKHRoaXMuanNvblN0cik7XG4gICAgdGhpcy5yb290ID0gTm9kZS5mcm9tSnNvbih0aGlzLmpzb24pO1xuICAgIGxldCBkZnMgPSBuZXcgRGVwdGhGaXJzdCh0aGlzLCAoeDogTm9kZSkgPT4geCk7XG4gICAgZGZzLnJlc3VsdC5mb3JFYWNoKG4gPT4gbi50cmVlID0gdGhpcyk7XG4gIH1cblxuXG4gIHB1YmxpYyB0b0hUTUwobm9kZTogSFRNTEVsZW1lbnQgPSBudWxsKSB7XG4gICAgbGV0IGRmcyA9IG5ldyBEZXB0aEZpcnN0KHRoaXMsICh4OiBOb2RlKSA9PiB4KTtcbiAgICBkZnMucmVzdWx0LmZvckVhY2goKG46IE5vZGUpID0+IHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobi50b0h0bWwoKSk7XG4gICAgICBuLmhpZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJvb3Quc2hvdygpO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgRGVwdGhGaXJzdCB7XG5cbiAgcHVibGljIHJlc3VsdDogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0cmVlOiBUcmVlLCBwcml2YXRlIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy52aXNpdCh0cmVlLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpdChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5yZXN1bHQucHVzaCh0aGlzLmZ1bmMobm9kZSkpO1xuICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHRoaXMudmlzaXQoeCkpO1xuICB9XG5cbn1cblxuXG5sZXQgcHJlZml4ID0gJ0RUXyc7XG5cbmxldCBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCAuLi5yZXN0OiBzdHJpbmdbXSkge1xuICByZXN0LmZvckVhY2goeCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQocHJlZml4ICsgeC50b1VwcGVyQ2FzZSgpKSk7XG59O1xuXG5cbmxldCBjb3VudGVyID0gMDtcbmxldCBsYWJlbENvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgTm9kZSB7XG5cbiAgcHVibGljIHRyZWU6IFRyZWU7XG4gIHB1YmxpYyBjb250ZW50OiBNYXA8bnVtYmVyLCBzdHJpbmc+ID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgcHVibGljIGtpbmQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgY2hpbGRyZW46IE1hcDxudW1iZXIsIE5vZGU+ID0gbmV3IE1hcDxudW1iZXIsIE5vZGU+KCk7XG4gIHB1YmxpYyBwYXJlbnQ6IE5vZGUgPSBudWxsO1xuICBwdWJsaWMgdmFyaWFibGU6IHN0cmluZyA9ICdkdF92YXJpYWJsZV8nICsgY291bnRlcisrO1xuICBwdWJsaWMgcmFkaW9CdXR0b25zOiBIVE1MRWxlbWVudFtdID0gW107XG4gIHB1YmxpYyBkaXY6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgdGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgXG4gIHByaXZhdGUgbmV4dEJ1dHRvbjogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcHJldmlvdXNCdXR0b246IEhUTUxFbGVtZW50O1xuXG5cbiAgcHVibGljIG5leHROYW1lOiBzdHJpbmcgPSAnTmV4dCc7XG4gIHB1YmxpYyBwcmV2aW91c05hbWU6IHN0cmluZyA9ICdCYWNrJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHZhbHVlID0gMCxcbiAgICAgICAgICAgICAgY29udGVudDoge3RleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlcn1bXSA9IFtdKSB7XG4gICAgZm9yIChsZXQge3RleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZX0gb2YgY29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50LnNldCh2YWx1ZSwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGFyc2VDaGlsZHJlbihub2RlOiBOb2RlLCBqc29uOiBhbnlbXSkge1xuICAgIGlmICghanNvbiB8fCAhanNvbi5sZW5ndGgpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGpzb24pIHtcbiAgICAgIGxldCBjaGlsZE5vZGUgPSBOb2RlLmZyb21Kc29uKGNoaWxkKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uc2V0KGNoaWxkTm9kZS52YWx1ZSwgY2hpbGROb2RlKTtcbiAgICAgIGNoaWxkTm9kZS5wYXJlbnQgPSBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uOiBhbnkpOiBOb2RlIHtcbiAgICBsZXQga2luZCA9IGpzb24udHlwZSB8fCAnbGVhZic7XG4gICAgbGV0IG5vZGU6IE5vZGUgPSBudWxsO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSAnbGVhZic6XG4gICAgICAgIG5vZGUgPSBuZXcgTGVhZihqc29uLnRpdGxlLCBqc29uLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICduYXJ5JzpcbiAgICAgICAgbm9kZSA9IG5ldyBOYXJ5KGpzb24udGl0bGUsIGpzb24udmFsdWUsIGpzb24uY29udGVudCB8fCBbXSk7XG4gICAgICAgIE5vZGUucGFyc2VDaGlsZHJlbihub2RlLCBqc29uLmNoaWxkcmVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICBub2RlID0gbmV3IEJpbmFyeShqc29uLnRpdGxlLCBqc29uLnZhbHVlKTtcbiAgICAgICAgTm9kZS5wYXJzZUNoaWxkcmVuKG5vZGUsIGpzb24uY2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwdWJsaWMgdG9IdG1sKCk6IEhUTUxFbGVtZW50IHtcbiAgICB0aGlzLmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZENsYXNzKHRoaXMuZGl2LCAnTk9ERScsIHRoaXMua2luZCk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkQ2xhc3ModGhpcy50aXRsZUVsZW1lbnQsICdUSVRMRScpO1xuICAgIGNvbnNvbGUubG9nKCdIRVJFJyk7XG4gICAgdGhpcy50aXRsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIHRoaXMudGl0bGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUVsZW1lbnQpO1xuICAgIHRoaXMucmFkaW9zKCk7XG4gICAgdGhpcy5idXR0b25zKCk7XG4gICAgcmV0dXJuIHRoaXMuZGl2O1xuICB9XG5cblxuICBwcm90ZWN0ZWQgcmFkaW9zKCkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuY29udGVudCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZENsYXNzKGNvbnRlbnQsICdDT05URU5UJyk7XG4gICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgYWRkQ2xhc3MocmFkaW8sICdSQURJTycpO1xuICAgICAgbGV0IGxhYmVsSWQgPSAnZHRfaWRfJyArIGxhYmVsQ291bnRlcisrO1xuICAgICAgcmFkaW8udHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpby5uYW1lID0gdGhpcy52YXJpYWJsZTtcbiAgICAgIHJhZGlvLnZhbHVlID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGxhYmVsSWQpO1xuICAgICAgdGhpcy5yYWRpb0J1dHRvbnMucHVzaChyYWRpbyk7XG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgYWRkQ2xhc3MobGFiZWwsICdMQUJFTCcpO1xuICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJhZGlvKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyhidXR0b25zLCAnQlVUVE9OUycpO1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLnByZXZpb3VzQnV0dG9uKTtcbiAgICB9XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLm5leHRCdXR0b24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5leHQoKSB7XG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLm5leHRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5uZXh0TmFtZTtcbiAgICBhZGRDbGFzcyh0aGlzLm5leHRCdXR0b24sICdORVhUJyk7XG4gICAgdGhpcy5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5maXJlTmV4dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJlTmV4dCgpIHtcbiAgICBmb3IgKGxldCByYWRpbyBvZiB0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgaWYgKChyYWRpbyBhcyBhbnkpLmNoZWNrZWQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gKHJhZGlvIGFzIGFueSkudmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmdldChwYXJzZUludCh2YWx1ZSwgMTApKS5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNCdXR0b24pIHJldHVybjtcbiAgICB0aGlzLnByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5wcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnByZXZpb3VzTmFtZTtcbiAgICBhZGRDbGFzcyh0aGlzLnByZXZpb3VzQnV0dG9uLCAnUFJFVklPVVMnKTtcbiAgICB0aGlzLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5maXJlUHJldmlvdXMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5wcmV2aW91c0J1dHRvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyZVByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnBhcmVudC5zaG93KCk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICB0aGlzLmRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5kaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnRpdGxlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpO1xuICAgIHRoaXMudGl0bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBOb2RlIHtcblxuICBwdWJsaWMga2luZCA9ICdiaW5hcnknXG5cbiAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZSA9IDApIHtcbiAgICBzdXBlcih0aXRsZSwgdmFsdWUsIFt7dGV4dDogJ1llcycsIHZhbHVlOiAxfSwge3RleHQ6ICdObycsIHZhbHVlOiAwfV0pO1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTmFyeSBleHRlbmRzIE5vZGUge1xuICBwdWJsaWMga2luZCA9ICduYXJ5J1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIExlYWYgZXh0ZW5kcyBOb2RlIHtcbiAgcHVibGljIGtpbmQgPSAnbGVhZic7XG4gIHB1YmxpYyBuZXh0TmFtZSA9ICdSZXN0YXJ0JztcbiAgLy8gVE9ETzogTGVhdmVzIGNvdWxkIGdldCBhbiBhY3Rpb24uXG5cbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHN1cGVyKHRpdGxlLCB2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyZU5leHQoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdGhpcy50cmVlLnJvb3Quc2hvdygpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=