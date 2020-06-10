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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = exports.Nary = exports.Binary = exports.Node = exports.DepthFirst = exports.Tree = void 0;
var Tree = (function () {
    function Tree() {
        this.jsonStr = '';
        this.json = null;
        this.root = null;
    }
    Tree.prototype.loadJson = function () {
        var location = window.location.href.replace(/\/.*\.html$/, 'samples/tree2.json');
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    this._loadJson(httpRequest.responseText);
                }
            }
        }.bind(this);
        httpRequest.open('GET', location, true);
        httpRequest.send();
    };
    Tree.prototype._loadJson = function (json) {
        try {
            this.jsonStr = json;
            this.fromJson();
        }
        catch (err) {
            console.error('Something went wrong!');
            console.error(err);
        }
    };
    Tree.prototype.fromJson = function () {
        this.json = JSON.parse(this.jsonStr);
        this.root = Node.fromJson(this.json);
    };
    Tree.prototype.toHTML = function (node) {
        if (node === void 0) { node = null; }
        var dfs = new DepthFirst(this, function (x) { return x.toHtml(); });
        dfs.result.forEach(function (n) { return node.appendChild(n); });
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
var counter = 0;
var Node = (function () {
    function Node(title, value, content) {
        var e_1, _a;
        if (value === void 0) { value = 0; }
        if (content === void 0) { content = []; }
        this.title = title;
        this.value = value;
        this.content = new Map();
        this.kind = '';
        this.children = [];
        this.parent = null;
        this.variable = 'dt_variable' + counter++;
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
    Node.fromJson = function (json) {
        var kind = json.type || 'leaf';
        var node = null;
        switch (kind) {
            case 'leaf':
                node = new Leaf(json.title, json.value);
                break;
            case 'nary':
                node = new Nary(json.title, json.value, json.content || []);
                if (json.children.length) {
                    node.children = json.children.map(Node.fromJson);
                    node.children.forEach(function (child) { return child.parent = node; });
                }
                break;
            case 'binary':
                node = new Binary(json.title, json.value);
                if (json.children.length) {
                    node.children = json.children.map(Node.fromJson);
                    node.children.forEach(function (child) { return child.parent = node; });
                }
                break;
            default:
                throw Error('Unknown node type.');
        }
        return node;
    };
    Node.prototype.toHtml = function () {
        var _this = this;
        var div = document.createElement('div');
        div.classList.add('DT_NODE');
        div.classList.add('DT_' + this.kind.toUpperCase());
        var title = document.createElement('span');
        title.classList.add('DT_TITLE');
        title.innerHTML = this.title;
        div.appendChild(title);
        this.content.forEach(function (x) {
            var content = document.createElement('div');
            content.classList.add('DT_CONTENT');
            var radio = document.createElement('input');
            radio.classList.add('DT_RADIO');
            radio.type = 'radio';
            radio.name = _this.variable;
            radio.value = _this.value.toString();
            var label = document.createElement('label');
            label.classList.add('DT_LABEL');
            label.innerHTML = x;
            content.appendChild(radio);
            content.appendChild(label);
            div.appendChild(content);
        });
        return div;
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
        _this.children = [];
        return _this;
    }
    return Leaf;
}(Node));
exports.Leaf = Leaf;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2RlY2lzaW9udHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9kZWNpc2lvbnRyZWUvLi90cy90cmVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLCtEQUFvQztBQUV6QixZQUFJLEdBQUcsV0FBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZCO0lBQUE7UUFFUyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsU0FBSSxHQUFTLElBQUksQ0FBQztJQXNDM0IsQ0FBQztJQXBDUSx1QkFBUSxHQUFmO1FBQ0UsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pGLElBQUksV0FBVyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdkMsV0FBVyxDQUFDLGtCQUFrQixHQUFHO1lBQy9CLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR00scUJBQU0sR0FBYixVQUFjLElBQW9CO1FBQXBCLGtDQUFvQjtRQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxDQUFPLElBQUssUUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRXhELEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxXQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDO0FBMUNZLG9CQUFJO0FBNkNqQjtJQUlFLG9CQUFZLElBQVUsRUFBVSxJQUFjO1FBQWQsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUZ2QyxXQUFNLEdBQVUsRUFBRSxDQUFDO1FBR3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTywwQkFBSyxHQUFiLFVBQWMsSUFBVTtRQUF4QixpQkFHQztRQUZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDO0FBYlksZ0NBQVU7QUFldkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBRWhCO0lBUUUsY0FBbUIsS0FBYSxFQUFTLEtBQVMsRUFDdEMsT0FBNkM7O1FBRGhCLGlDQUFTO1FBQ3RDLHNDQUE2QztRQUR0QyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQU4zQyxZQUFPLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3pELFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQVMsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxhQUFhLEdBQUcsT0FBTyxFQUFFLENBQUM7O1lBSWxELEtBQXVDLGdDQUFPLHNGQUFFO2dCQUF2QywwQkFBMEIsRUFBbkIsSUFBSSxZQUFTLE9BQUs7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvQjs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUVNLGFBQVEsR0FBZixVQUFnQixJQUFTO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQy9CLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQztRQUN0QixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssTUFBTTtnQkFDVCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUFDLENBQUM7aUJBQ3JEO2dCQUNELE1BQUs7WUFDUDtnQkFDRSxNQUFNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0scUJBQU0sR0FBYjtRQUFBLGlCQXdCQztRQXZCQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQUM7WUFDcEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDO0FBcEVZLG9CQUFJO0FBNEVqQjtJQUE0QiwwQkFBSTtJQUk5QixnQkFBbUIsS0FBYSxFQUFTLEtBQVM7UUFBVCxpQ0FBUztRQUFsRCxZQUNFLGtCQUFNLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxTQUN2RTtRQUZrQixXQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBSyxHQUFMLEtBQUssQ0FBSTtRQUYzQyxVQUFJLEdBQUcsUUFBUTs7SUFJdEIsQ0FBQztJQUVILGFBQUM7QUFBRCxDQUFDLENBUjJCLElBQUksR0FRL0I7QUFSWSx3QkFBTTtBQVduQjtJQUEwQix3QkFBSTtJQUE5QjtRQUFBLHFFQUdDO1FBRlEsVUFBSSxHQUFHLE1BQU07O0lBRXRCLENBQUM7SUFBRCxXQUFDO0FBQUQsQ0FBQyxDQUh5QixJQUFJLEdBRzdCO0FBSFksb0JBQUk7QUFNakI7SUFBMEIsd0JBQUk7SUFLNUIsY0FBWSxLQUFhLEVBQUUsS0FBYTtRQUF4QyxZQUNFLGtCQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsU0FDcEI7UUFOTSxVQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ1osY0FBUSxHQUFXLEVBQUUsQ0FBQzs7SUFLL0IsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLENBVHlCLElBQUksR0FTN0I7QUFUWSxvQkFBSSIsImZpbGUiOiJkZWNpc2lvbnRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkZWNpc2lvbnRyZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGVjaXNpb250cmVlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7VHJlZSBhcyBvYmowfSBmcm9tICcuL3RyZWUnO1xuXG5leHBvcnQgbGV0IFRyZWUgPSBvYmowO1xuIiwiLy8gSW5pdGlhbCB0cmVlXG5cbmV4cG9ydCBjbGFzcyBUcmVlIHtcblxuICBwdWJsaWMganNvblN0cjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBqc29uOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgcm9vdDogTm9kZSA9IG51bGw7XG5cbiAgcHVibGljIGxvYWRKc29uKCkge1xuICAgIGxldCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1xcLy4qXFwuaHRtbCQvLCAnc2FtcGxlcy90cmVlMi5qc29uJyk7XG4gICAgbGV0IGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgaHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaHR0cFJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBpZiAoaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0aGlzLl9sb2FkSnNvbihodHRwUmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIGxvY2F0aW9uLCB0cnVlKTtcbiAgICBodHRwUmVxdWVzdC5zZW5kKCk7XG4gIH1cblxuICBwdWJsaWMgX2xvYWRKc29uKGpzb246IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmpzb25TdHIgPSBqc29uO1xuICAgICAgdGhpcy5mcm9tSnNvbigpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZyb21Kc29uKCkge1xuICAgIHRoaXMuanNvbiA9IEpTT04ucGFyc2UodGhpcy5qc29uU3RyKTtcbiAgICB0aGlzLnJvb3QgPSBOb2RlLmZyb21Kc29uKHRoaXMuanNvbik7XG4gIH1cblxuICBcbiAgcHVibGljIHRvSFRNTChub2RlOiBFbGVtZW50ID0gbnVsbCkge1xuICAgIGxldCBkZnMgPSBuZXcgRGVwdGhGaXJzdCh0aGlzLCAoeDogTm9kZSkgPT4geC50b0h0bWwoKSk7XG4gICAgLy8gVE9ETzogVmlzaXQgdGhlIHRyZWUuXG4gICAgZGZzLnJlc3VsdC5mb3JFYWNoKG4gPT4gbm9kZS5hcHBlbmRDaGlsZChuKSk7XG4gIH1cbiAgXG59XG5cblxuZXhwb3J0IGNsYXNzIERlcHRoRmlyc3Qge1xuXG4gIHB1YmxpYyByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IodHJlZTogVHJlZSwgcHJpdmF0ZSBmdW5jOiBGdW5jdGlvbikge1xuICAgIHRoaXMudmlzaXQodHJlZS5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaXQobm9kZTogTm9kZSkge1xuICAgIHRoaXMucmVzdWx0LnB1c2godGhpcy5mdW5jKG5vZGUpKTtcbiAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goeCA9PiB0aGlzLnZpc2l0KHgpKTtcbiAgfVxuICBcbn1cbiAgXG5sZXQgY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBOb2RlIHtcblxuICBwdWJsaWMgY29udGVudDogTWFwPG51bWJlciwgc3RyaW5nPiA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG4gIHB1YmxpYyBraW5kOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGNoaWxkcmVuOiBOb2RlW10gPSBbXTtcbiAgcHVibGljIHBhcmVudDogTm9kZSA9IG51bGw7XG4gIHB1YmxpYyB2YXJpYWJsZTogc3RyaW5nID0gJ2R0X3ZhcmlhYmxlJyArIGNvdW50ZXIrKztcbiAgXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWUgPSAwLFxuICAgICAgICAgICAgICBjb250ZW50OiB7dGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyfVtdID0gW10pIHtcbiAgICBmb3IgKGxldCB7dGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlfSBvZiBjb250ZW50KSB7XG4gICAgICB0aGlzLmNvbnRlbnQuc2V0KHZhbHVlLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbjogYW55KTogTm9kZSB7XG4gICAgbGV0IGtpbmQgPSBqc29uLnR5cGUgfHwgJ2xlYWYnO1xuICAgIGxldCBub2RlOiBOb2RlID0gbnVsbDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgJ2xlYWYnOlxuICAgICAgICBub2RlID0gbmV3IExlYWYoanNvbi50aXRsZSwganNvbi52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbmFyeSc6XG4gICAgICAgIG5vZGUgPSBuZXcgTmFyeShqc29uLnRpdGxlLCBqc29uLnZhbHVlLCBqc29uLmNvbnRlbnQgfHwgW10pO1xuICAgICAgICBpZiAoanNvbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuID0ganNvbi5jaGlsZHJlbi5tYXAoTm9kZS5mcm9tSnNvbik7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgbm9kZSA9IG5ldyBCaW5hcnkoanNvbi50aXRsZSwganNvbi52YWx1ZSk7XG4gICAgICAgIGlmIChqc29uLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBqc29uLmNoaWxkcmVuLm1hcChOb2RlLmZyb21Kc29uKTtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwdWJsaWMgdG9IdG1sKCk6IEVsZW1lbnQge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnRFRfTk9ERScpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ0RUXycgKyB0aGlzLmtpbmQudG9VcHBlckNhc2UoKSlcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnRFRfVElUTEUnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGhpcy5jb250ZW50LmZvckVhY2goeCA9PiB7XG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdEVF9DT05URU5UJyk7XG4gICAgICBsZXQgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgcmFkaW8uY2xhc3NMaXN0LmFkZCgnRFRfUkFESU8nKTtcbiAgICAgIHJhZGlvLnR5cGUgPSAncmFkaW8nO1xuICAgICAgcmFkaW8ubmFtZSA9IHRoaXMudmFyaWFibGU7XG4gICAgICByYWRpby52YWx1ZSA9IHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdEVF9MQUJFTCcpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0geDtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmFkaW8pO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuICBcbn1cblxuLy8gbGV0IG1ha2VFbGVtZW50ID0gZnVuY3Rpb24oa2luZDogc3RyaW5nLCAuLi5yZXN0OiBzdHJpbmdbXSkge1xuICBcbi8vIH1cblxuXG5cbmV4cG9ydCBjbGFzcyBCaW5hcnkgZXh0ZW5kcyBOb2RlIHtcblxuICBwdWJsaWMga2luZCA9ICdiaW5hcnknXG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHZhbHVlID0gMCkge1xuICAgIHN1cGVyKHRpdGxlLCB2YWx1ZSwgW3t0ZXh0OiAnWWVzJywgdmFsdWU6IDF9LCB7dGV4dDogJ05vJywgdmFsdWU6IDB9XSk7XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBOYXJ5IGV4dGVuZHMgTm9kZSB7XG4gIHB1YmxpYyBraW5kID0gJ25hcnknXG4gIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBMZWFmIGV4dGVuZHMgTm9kZSB7XG4gIHB1YmxpYyBraW5kID0gJ2xlYWYnO1xuICByZWFkb25seSBjaGlsZHJlbjogTm9kZVtdID0gW107XG4gIC8vIFRPRE86IExlYXZlcyBjb3VsZCBnZXQgYW4gYWN0aW9uLlxuICBcbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHN1cGVyKHRpdGxlLCB2YWx1ZSk7XG4gIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9