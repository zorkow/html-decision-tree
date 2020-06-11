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
        var title = document.createElement('span');
        addClass(title, 'TITLE');
        title.innerHTML = this.title;
        this.div.appendChild(title);
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
        this.div.parentNode.focus();
    };
    Node.prototype.hide = function () {
        this.div.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2lzaW9udHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLCtEQUFvQztBQUV6QixZQUFJLEdBQUcsV0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QjtJQUFBO1FBRVMsWUFBTyxHQUFX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QUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsU0FDdkU7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFdBQUssR0FBTCxLQUFLLENBQUk7UUFGM0MsVUFBSSxHQUFHLFFBQVE7O0lBSXRCLENBQUM7SUFFSCxhQUFDO0FBQUQsQ0FBQyxDQVIyQixJQUFJLEdBUS9CO0FBUlksd0JBQU07QUFXbkI7SUFBMEIsd0JBQUk7SUFBOUI7UUFBQSxxRUFHQztRQUZRLFVBQUksR0FBRyxNQUFNOztJQUV0QixDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQ0FIeUIsSUFBSSxHQUc3QjtBQUhZLG9CQUFJO0FBTWpCO0lBQTBCLHdCQUFJO0lBSzVCLGNBQVksS0FBYSxFQUFFLEtBQWE7UUFBeEMsWUFDRSxrQkFBTSxLQUFLLEVBQUUsS0FBSyxDQUFDLFNBQ3BCO1FBTk0sVUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGNBQVEsR0FBRyxTQUFTLENBQUM7O0lBSzVCLENBQUM7SUFFUyx1QkFBUSxHQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFSCxXQUFDO0FBQUQsQ0FBQyxDQWR5QixJQUFJLEdBYzdCO0FBZFksb0JBQUkiLCJmaWxlIjoiZGVjaXNpb250cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGVjaXNpb250cmVlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRlY2lzaW9udHJlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge1RyZWUgYXMgb2JqMH0gZnJvbSAnLi90cmVlJztcblxuZXhwb3J0IGxldCBUcmVlID0gb2JqMDtcbiIsIi8vIEluaXRpYWwgdHJlZVxuXG5leHBvcnQgY2xhc3MgVHJlZSB7XG5cbiAgcHVibGljIGpzb25TdHI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMganNvbjogYW55ID0gbnVsbDtcbiAgcHVibGljIHJvb3Q6IE5vZGUgPSBudWxsO1xuXG4gIHB1YmxpYyBsb2FkSnNvbih1cmw6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmIChodHRwUmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEpzb24oaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoaHR0cFJlcXVlc3Quc3RhdHVzVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgICBodHRwUmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChodHRwUmVxdWVzdC5zdGF0dXNUZXh0KTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICBodHRwUmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgX2xvYWRKc29uKGpzb246IHN0cmluZywgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5qc29uU3RyID0ganNvbjtcbiAgICAgIHRoaXMuZnJvbUpzb24oKTtcbiAgICAgIHJlc29sdmUoJ0pTT04gbG9hZGVkJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoJ0pTT04gUGFyc2VyIEVycm9yIScpO1xuICAgIH1cbiAgfVxuXG5cbiAgcHVibGljIGZyb21Kc29uKCkge1xuICAgIHRoaXMuanNvbiA9IEpTT04ucGFyc2UodGhpcy5qc29uU3RyKTtcbiAgICB0aGlzLnJvb3QgPSBOb2RlLmZyb21Kc29uKHRoaXMuanNvbik7XG4gICAgbGV0IGRmcyA9IG5ldyBEZXB0aEZpcnN0KHRoaXMsICh4OiBOb2RlKSA9PiB4KTtcbiAgICBkZnMucmVzdWx0LmZvckVhY2gobiA9PiBuLnRyZWUgPSB0aGlzKTtcbiAgfVxuXG5cbiAgcHVibGljIHRvSFRNTChub2RlOiBIVE1MRWxlbWVudCA9IG51bGwpIHtcbiAgICBsZXQgZGZzID0gbmV3IERlcHRoRmlyc3QodGhpcywgKHg6IE5vZGUpID0+IHgpO1xuICAgIGRmcy5yZXN1bHQuZm9yRWFjaCgobjogTm9kZSkgPT4ge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChuLnRvSHRtbCgpKTtcbiAgICAgIG4uaGlkZSgpO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdC5zaG93KCk7XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBEZXB0aEZpcnN0IHtcblxuICBwdWJsaWMgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRyZWU6IFRyZWUsIHByaXZhdGUgZnVuYzogRnVuY3Rpb24pIHtcbiAgICB0aGlzLnZpc2l0KHRyZWUucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIHZpc2l0KG5vZGU6IE5vZGUpIHtcbiAgICB0aGlzLnJlc3VsdC5wdXNoKHRoaXMuZnVuYyhub2RlKSk7XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKHggPT4gdGhpcy52aXNpdCh4KSk7XG4gIH1cblxufVxuXG5cbmxldCBwcmVmaXggPSAnRFRfJztcblxubGV0IGFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudDogSFRNTEVsZW1lbnQsIC4uLnJlc3Q6IHN0cmluZ1tdKSB7XG4gIHJlc3QuZm9yRWFjaCh4ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChwcmVmaXggKyB4LnRvVXBwZXJDYXNlKCkpKTtcbn07XG5cblxubGV0IGNvdW50ZXIgPSAwO1xubGV0IGxhYmVsQ291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBOb2RlIHtcblxuICBwdWJsaWMgdHJlZTogVHJlZTtcbiAgcHVibGljIGNvbnRlbnQ6IE1hcDxudW1iZXIsIHN0cmluZz4gPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpO1xuICBwdWJsaWMga2luZDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjaGlsZHJlbjogTWFwPG51bWJlciwgTm9kZT4gPSBuZXcgTWFwPG51bWJlciwgTm9kZT4oKTtcbiAgcHVibGljIHBhcmVudDogTm9kZSA9IG51bGw7XG4gIHB1YmxpYyB2YXJpYWJsZTogc3RyaW5nID0gJ2R0X3ZhcmlhYmxlXycgKyBjb3VudGVyKys7XG4gIHB1YmxpYyByYWRpb0J1dHRvbnM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHVibGljIGRpdjogSFRNTEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBuZXh0QnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aW91c0J1dHRvbjogSFRNTEVsZW1lbnQ7XG5cblxuICBwdWJsaWMgbmV4dE5hbWU6IHN0cmluZyA9ICdOZXh0JztcbiAgcHVibGljIHByZXZpb3VzTmFtZTogc3RyaW5nID0gJ0JhY2snO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWUgPSAwLFxuICAgICAgICAgICAgICBjb250ZW50OiB7dGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyfVtdID0gW10pIHtcbiAgICBmb3IgKGxldCB7dGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlfSBvZiBjb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQuc2V0KHZhbHVlLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwYXJzZUNoaWxkcmVuKG5vZGU6IE5vZGUsIGpzb246IGFueVtdKSB7XG4gICAgaWYgKCFqc29uIHx8ICFqc29uLmxlbmd0aCkgcmV0dXJuO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YganNvbikge1xuICAgICAgbGV0IGNoaWxkTm9kZSA9IE5vZGUuZnJvbUpzb24oY2hpbGQpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5zZXQoY2hpbGROb2RlLnZhbHVlLCBjaGlsZE5vZGUpO1xuICAgICAgY2hpbGROb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb246IGFueSk6IE5vZGUge1xuICAgIGxldCBraW5kID0ganNvbi50eXBlIHx8ICdsZWFmJztcbiAgICBsZXQgbm9kZTogTm9kZSA9IG51bGw7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlICdsZWFmJzpcbiAgICAgICAgbm9kZSA9IG5ldyBMZWFmKGpzb24udGl0bGUsIGpzb24udmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25hcnknOlxuICAgICAgICBub2RlID0gbmV3IE5hcnkoanNvbi50aXRsZSwganNvbi52YWx1ZSwganNvbi5jb250ZW50IHx8IFtdKTtcbiAgICAgICAgTm9kZS5wYXJzZUNoaWxkcmVuKG5vZGUsIGpzb24uY2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIG5vZGUgPSBuZXcgQmluYXJ5KGpzb24udGl0bGUsIGpzb24udmFsdWUpO1xuICAgICAgICBOb2RlLnBhcnNlQ2hpbGRyZW4obm9kZSwganNvbi5jaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gbm9kZSB0eXBlLicpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHB1YmxpYyB0b0h0bWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkQ2xhc3ModGhpcy5kaXYsICdOT0RFJywgdGhpcy5raW5kKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkQ2xhc3ModGl0bGUsICdUSVRMRScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRoaXMucmFkaW9zKCk7XG4gICAgdGhpcy5idXR0b25zKCk7XG4gICAgcmV0dXJuIHRoaXMuZGl2O1xuICB9XG5cblxuICBwcm90ZWN0ZWQgcmFkaW9zKCkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMuY29udGVudCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFkZENsYXNzKGNvbnRlbnQsICdDT05URU5UJyk7XG4gICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgYWRkQ2xhc3MocmFkaW8sICdSQURJTycpO1xuICAgICAgbGV0IGxhYmVsSWQgPSAnZHRfaWRfJyArIGxhYmVsQ291bnRlcisrO1xuICAgICAgcmFkaW8udHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpby5uYW1lID0gdGhpcy52YXJpYWJsZTtcbiAgICAgIHJhZGlvLnZhbHVlID0ga2V5LnRvU3RyaW5nKCk7XG4gICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGxhYmVsSWQpO1xuICAgICAgdGhpcy5yYWRpb0J1dHRvbnMucHVzaChyYWRpbyk7XG4gICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgYWRkQ2xhc3MobGFiZWwsICdMQUJFTCcpO1xuICAgICAgbGFiZWwuaWQgPSBsYWJlbElkO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJhZGlvKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGJ1dHRvbnMoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRDbGFzcyhidXR0b25zLCAnQlVUVE9OUycpO1xuICAgIHRoaXMuZGl2LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wcmV2aW91cygpO1xuICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLnByZXZpb3VzQnV0dG9uKTtcbiAgICB9XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZCh0aGlzLm5leHRCdXR0b24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG5leHQoKSB7XG4gICAgaWYgKHRoaXMubmV4dEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLm5leHRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5uZXh0TmFtZTtcbiAgICBhZGRDbGFzcyh0aGlzLm5leHRCdXR0b24sICdORVhUJyk7XG4gICAgdGhpcy5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5maXJlTmV4dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJlTmV4dCgpIHtcbiAgICBmb3IgKGxldCByYWRpbyBvZiB0aGlzLnJhZGlvQnV0dG9ucykge1xuICAgICAgaWYgKChyYWRpbyBhcyBhbnkpLmNoZWNrZWQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gKHJhZGlvIGFzIGFueSkudmFsdWU7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmdldChwYXJzZUludCh2YWx1ZSwgMTApKS5zaG93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNCdXR0b24pIHJldHVybjtcbiAgICB0aGlzLnByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5wcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnByZXZpb3VzTmFtZTtcbiAgICBhZGRDbGFzcyh0aGlzLnByZXZpb3VzQnV0dG9uLCAnUFJFVklPVVMnKTtcbiAgICB0aGlzLnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5maXJlUHJldmlvdXMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kaXYuYXBwZW5kQ2hpbGQodGhpcy5wcmV2aW91c0J1dHRvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyZVByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnBhcmVudC5zaG93KCk7XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICB0aGlzLmRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAodGhpcy5kaXYucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIHRoaXMuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQmluYXJ5IGV4dGVuZHMgTm9kZSB7XG5cbiAgcHVibGljIGtpbmQgPSAnYmluYXJ5J1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWUgPSAwKSB7XG4gICAgc3VwZXIodGl0bGUsIHZhbHVlLCBbe3RleHQ6ICdZZXMnLCB2YWx1ZTogMX0sIHt0ZXh0OiAnTm8nLCB2YWx1ZTogMH1dKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE5hcnkgZXh0ZW5kcyBOb2RlIHtcbiAgcHVibGljIGtpbmQgPSAnbmFyeSdcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBMZWFmIGV4dGVuZHMgTm9kZSB7XG4gIHB1YmxpYyBraW5kID0gJ2xlYWYnO1xuICBwdWJsaWMgbmV4dE5hbWUgPSAnUmVzdGFydCc7XG4gIC8vIFRPRE86IExlYXZlcyBjb3VsZCBnZXQgYW4gYWN0aW9uLlxuXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICBzdXBlcih0aXRsZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcmVOZXh0KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHRoaXMudHJlZS5yb290LnNob3coKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9