(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"],{

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/AsYouType.js":
/*!*********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/AsYouType.js ***!
  \*********************************************************/
/*! exports provided: DIGIT_PLACEHOLDER, default, close_dangling_braces, count_occurences, repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return DIGIT_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close_dangling_braces", function() { return close_dangling_braces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count_occurences", function() { return count_occurences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");



// This is an enhanced port of Google Android `libphonenumber`'s
// `asyoutypeformatter.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/blob/8d21a365061de2ba0675c878a710a7b24f74d2ae/javascript/i18n/phonenumbers/asyoutypeformatter.js









// Used in phone number format template creation.
// Could be any digit, I guess.
var DUMMY_DIGIT = '9';
var DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, 'g');
// I don't know why is it exactly `15`
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
// Create a phone number consisting only of the digit 9 that matches the
// `number_pattern` by applying the pattern to the "longest phone number" string.
var LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);

// The digits that have not been entered yet will be represented by a \u2008,
// the punctuation space.
var DIGIT_PLACEHOLDER = 'x'; // '\u2008' (punctuation space)
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
var DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, 'g');

// A pattern that is used to match character classes in regular expressions.
// An example of a character class is "[1-4]".
var CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g;

// Any digit in a regular expression that actually denotes a digit. For
// example, in the regular expression "80[0-2]\d{6,10}", the first 2 digits
// (8 and 0) are standalone digits, but the rest are not.
// Two look-aheads are needed because the number following \\d could be a
// two-digit number, since the phone number can be as long as 15 digits.
var STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g;

// A pattern that is used to determine if a `format` is eligible
// to be used by the "as you type formatter".
// It is eligible when the `format` contains groups of the dollar sign
// followed by a single digit, separated by valid phone number punctuation.
// This prevents invalid punctuation (such as the star sign in Israeli star numbers)
// getting into the output of the "as you type formatter".
var ELIGIBLE_FORMAT_PATTERN = new RegExp('^' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*' + '(\\$\\d[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + ']*)+' + '$');

// This is the minimum length of the leading digits of a phone number
// to guarantee the first "leading digits pattern" for a phone number format
// to be preemptive.
var MIN_LEADING_DIGITS_LENGTH = 3;

var VALID_INCOMPLETE_PHONE_NUMBER = '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["PLUS_CHARS"] + ']{0,1}' + '[' + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_PUNCTUATION"] + _parse__WEBPACK_IMPORTED_MODULE_4__["VALID_DIGITS"] + ']*';

var VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp('^' + VALID_INCOMPLETE_PHONE_NUMBER + '$', 'i');

var as_you_type = function () {
	function as_you_type(country_code, metadata) {
		babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, as_you_type);

		// Metadata is required.
		if (!metadata || !metadata.countries) {
			throw new Error('Metadata is required');
		}

		if (country_code && metadata.countries[country_code]) {
			this.default_country = country_code;
		}

		this.metadata = metadata;

		this.reset();
	}

	babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(as_you_type, [{
		key: 'input',
		value: function input(text) {
			// Parse input

			var extracted_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["extract_formatted_phone_number"])(text);

			// Special case for a lone '+' sign
			// since it's not considered a possible phone number.
			if (!extracted_number) {
				if (text && text.indexOf('+') >= 0) {
					extracted_number = '+';
				}
			}

			// Validate possible first part of a phone number
			if (!Object(_common__WEBPACK_IMPORTED_MODULE_6__["matches_entirely"])(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
				return this.current_output;
			}

			return this.process_input(Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number"])(extracted_number));
		}
	}, {
		key: 'process_input',
		value: function process_input(input) {
			// If an out of position '+' sign detected
			// (or a second '+' sign),
			// then just drop it from the input.
			if (input[0] === '+') {
				if (!this.parsed_input) {
					this.parsed_input += '+';

					// If a default country was set
					// then reset it because an explicitly international
					// phone number is being entered
					this.reset_countriness();
				}

				input = input.slice(1);
			}

			// Raw phone number
			this.parsed_input += input;

			// // Reset phone number validation state
			// this.valid = false

			// Add digits to the national number
			this.national_number += input;

			// Try to format the parsed input

			if (this.is_international()) {
				if (!this.country_phone_code) {
					// If one looks at country phone codes
					// then he can notice that no one country phone code
					// is ever a (leftmost) substring of another country phone code.
					// So if a valid country code is extracted so far
					// then it means that this is the country code.

					// If no country phone code could be extracted so far,
					// then just return the raw phone number,
					// because it has no way of knowing
					// how to format the phone number so far.
					if (!this.extract_country_phone_code()) {
						// Return raw phone number
						return this.parsed_input;
					}

					// Initialize country-specific data
					this.initialize_phone_number_formats_for_this_country_phone_code();
					this.reset_format();
					this.determine_the_country();
				}
				// `this.country` could be `undefined`,
				// for instance, when there is ambiguity
				// in a form of several different countries
				// each corresponding to the same country phone code
				// (e.g. NANPA: USA, Canada, etc),
				// and there's not enough digits entered
				// to reliably determine the country
				// the phone number belongs to.
				// Therefore, in cases of such ambiguity,
				// each time something is input,
				// try to determine the country
				// (if it's not determined yet).
				else if (!this.country) {
						this.determine_the_country();
					}
			} else {
				// Some national prefixes are substrings of other national prefixes
				// (for the same country), therefore try to extract national prefix each time
				// because a longer national prefix might be available at some point in time.

				var previous_national_prefix = this.national_prefix;
				this.national_number = this.national_prefix + this.national_number;

				// Possibly extract a national prefix
				this.extract_national_prefix();

				if (this.national_prefix !== previous_national_prefix) {
					// National number has changed
					// (due to another national prefix been extracted)
					// therefore national number has changed
					// therefore reset all previous formatting data.
					// (and leading digits matching state)
					this.matching_formats = this.available_formats;
					this.reset_format();
				}
			}

			if (!this.should_format()) {
				return this.format_as_non_formatted_number();
			}

			// Check the available phone number formats
			// based on the currently available leading digits.
			this.match_formats_by_leading_digits();

			// Format the phone number (given the next digits)
			var formatted_national_phone_number = this.format_national_phone_number(input);

			// If the phone number could be formatted,
			// then return it, possibly prepending with country phone code
			// (for international phone numbers only)
			if (formatted_national_phone_number) {
				return this.full_phone_number(formatted_national_phone_number);
			}

			// If the phone number couldn't be formatted,
			// then just fall back to the raw phone number.
			return this.parsed_input;
		}
	}, {
		key: 'format_as_non_formatted_number',
		value: function format_as_non_formatted_number() {
			if (this.is_international() && this.country_phone_code) {
				if (this.national_number) {
					// For convenience, the public `.template` property
					// contains the whole international number
					// if the phone number being input is international:
					// 'x' for the '+' sign, 'x'es for the country phone code,
					// a spacebar and then the template for the national number digits.
					this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + repeat(DIGIT_PLACEHOLDER, this.national_number.length);

					return '+' + this.country_phone_code + ' ' + this.national_number;
				}

				return '+' + this.country_phone_code;
			}

			return this.parsed_input;
		}
	}, {
		key: 'format_national_phone_number',
		value: function format_national_phone_number(next_digits) {
			// Format the next phone number digits
			// using the previously chosen phone number format.
			//
			// This is done here because if `attempt_to_format_complete_phone_number`
			// was placed before this call then the `template`
			// wouldn't reflect the situation correctly (and would therefore be inconsistent)
			//
			var national_number_formatted_with_previous_format = void 0;
			if (this.chosen_format) {
				national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
			}

			// See if the input digits can be formatted properly already. If not,
			// use the results from format_next_national_number_digits(), which does formatting
			// based on the formatting pattern chosen.

			var formatted_number = this.attempt_to_format_complete_phone_number();

			// Just because a phone number doesn't have a suitable format
			// that doesn't mean that the phone is invalid
			// because phone number formats only format phone numbers,
			// they don't validate them and some (rare) phone numbers
			// are meant to stay non-formatted.
			if (formatted_number) {
				// if (this.country)
				// {
				// 	this.valid = true
				// }

				return formatted_number;
			}

			// For some phone number formats national prefix

			// If the previously chosen phone number format
			// didn't match the next (current) digit being input
			// (leading digits pattern didn't match).
			if (this.choose_another_format()) {
				// And a more appropriate phone number format
				// has been chosen for these `leading digits`,
				// then format the national phone number (so far)
				// using the newly selected phone number pattern.

				// Will return `undefined` if it couldn't format
				// the supplied national number
				// using the selected phone number pattern.

				return this.reformat_national_number();
			}

			// If could format the next (current) digit
			// using the previously chosen phone number format
			// then return the formatted number so far.

			// If no new phone number format could be chosen,
			// and couldn't format the supplied national number
			// using the selected phone number pattern,
			// then it will return `undefined`.

			return national_number_formatted_with_previous_format;
		}
	}, {
		key: 'reset',
		value: function reset() {
			// Input stripped of non-phone-number characters.
			// Can only contain a possible leading '+' sign and digits.
			this.parsed_input = '';

			this.current_output = '';

			// This contains the national prefix that has been extracted. It contains only
			// digits without formatting.
			this.national_prefix = '';

			this.national_number = '';

			this.reset_countriness();

			this.reset_format();

			// this.valid = false

			return this;
		}
	}, {
		key: 'reset_country',
		value: function reset_country() {
			if (this.default_country && !this.is_international()) {
				this.country = this.default_country;
			} else {
				this.country = undefined;
			}
		}
	}, {
		key: 'reset_countriness',
		value: function reset_countriness() {
			this.reset_country();

			if (this.default_country && !this.is_international()) {
				this.country_metadata = this.metadata.countries[this.default_country];
				this.country_phone_code = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_phone_code"])(this.country_metadata);

				this.initialize_phone_number_formats_for_this_country_phone_code();
			} else {
				this.country_metadata = undefined;
				this.country_phone_code = undefined;

				this.available_formats = [];
				this.matching_formats = this.available_formats;
			}
		}
	}, {
		key: 'reset_format',
		value: function reset_format() {
			this.chosen_format = undefined;
			this.template = undefined;
			this.partially_populated_template = undefined;
			this.last_match_position = -1;
		}

		// Format each digit of national phone number (so far)
		// using the newly selected phone number pattern.

	}, {
		key: 'reformat_national_number',
		value: function reformat_national_number() {
			// Format each digit of national phone number (so far)
			// using the selected phone number pattern.
			return this.format_next_national_number_digits(this.national_number);
		}
	}, {
		key: 'initialize_phone_number_formats_for_this_country_phone_code',
		value: function initialize_phone_number_formats_for_this_country_phone_code() {
			// Get all "eligible" phone number formats for this country
			this.available_formats = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_formats"])(this.country_metadata).filter(function (format) {
				return ELIGIBLE_FORMAT_PATTERN.test(Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format));
			});

			this.matching_formats = this.available_formats;
		}
	}, {
		key: 'match_formats_by_leading_digits',
		value: function match_formats_by_leading_digits() {
			var leading_digits = this.national_number;

			// "leading digits" pattern list starts with
			// one of a maximum length of 3 digits,
			// and then with each additional digit
			// a more precise "leading digits" pattern is specified.

			var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;

			if (index_of_leading_digits_pattern < 0) {
				index_of_leading_digits_pattern = 0;
			}

			this.matching_formats = this.matching_formats.filter(function (format) {
				var leading_digits_pattern_count = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format).length;

				// Keep everything that isn't restricted by leading digits.
				if (leading_digits_pattern_count === 0) {
					return true;
				}

				var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
				var leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_leading_digits_patterns"])(format)[leading_digits_pattern_index];

				// Brackets are required for `^` to be applied to
				// all or-ed (`|`) parts, not just the first one.
				return new RegExp('^(' + leading_digits_pattern + ')').test(leading_digits);
			});

			// If there was a phone number format chosen
			// and it no longer holds given the new leading digits then reset it.
			// The test for this `if` condition is marked as:
			// "Reset a chosen format when it no longer holds given the new leading digits".
			if (this.chosen_format && this.matching_formats.indexOf(this.chosen_format) === -1) {
				this.reset_format();
			}
		}
	}, {
		key: 'should_format',
		value: function should_format() {
			// Start matching any formats at all when the national number
			// entered so far is at least 3 digits long,
			// otherwise format matching would give false negatives
			// like when the digits entered so far are `2`
			// and the leading digits pattern is `21` –
			// it's quite obvious in this case that the format could be the one
			// but due to the absence of further digits it would give false negative.
			//
			// Google could have provided leading digits patterns starting
			// with a single digit but they chose not to (for whatever reasons).
			//
			return this.national_number >= MIN_LEADING_DIGITS_LENGTH;
		}

		// Check to see if there is an exact pattern match for these digits. If so, we
		// should use this instead of any other formatting template whose
		// leadingDigitsPattern also matches the input.

	}, {
		key: 'attempt_to_format_complete_phone_number',
		value: function attempt_to_format_complete_phone_number() {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var format = _step.value;

					var matcher = new RegExp('^(?:' + Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format) + ')$');

					if (!matcher.test(this.national_number)) {
						continue;
					}

					if (!this.validate_format(format)) {
						continue;
					}

					// To leave the formatter in a consistent state
					this.reset_format();
					this.chosen_format = format;

					var formatted_number = Object(_format__WEBPACK_IMPORTED_MODULE_5__["format_national_number_using_format"])(this.national_number, format, this.is_international(), this.national_prefix.length > 0, this.country_metadata);

					// Set `this.template` and `this.partially_populated_template`.
					//
					// `else` case doesn't ever happen
					// with the current metadata,
					// but just in case.
					//
					/* istanbul ignore else */
					if (this.create_formatting_template(format)) {
						// Populate `this.partially_populated_template`
						this.reformat_national_number();
					} else {
						// Prepend `+CountryCode` in case of an international phone number
						var full_number = this.full_phone_number(formatted_number);
						this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
						this.partially_populated_template = full_number;
					}

					return formatted_number;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		// Prepends `+CountryCode` in case of an international phone number

	}, {
		key: 'full_phone_number',
		value: function full_phone_number(formatted_national_number) {
			if (this.is_international()) {
				return '+' + this.country_phone_code + ' ' + formatted_national_number;
			}

			return formatted_national_number;
		}

		// Extracts the country calling code from the beginning
		// of the entered `national_number` (so far),
		// and places the remaining input into the `national_number`.

	}, {
		key: 'extract_country_phone_code',
		value: function extract_country_phone_code() {
			if (!this.national_number) {
				return;
			}

			var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["parse_phone_number_and_country_phone_code"])(this.parsed_input, this.metadata),
			    country_phone_code = _parse_phone_number_a.country_phone_code,
			    number = _parse_phone_number_a.number;

			if (!country_phone_code) {
				return;
			}

			this.country_phone_code = country_phone_code;
			this.national_number = number;

			return this.country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_metadata_by_country_phone_code"])(country_phone_code, this.metadata);
		}
	}, {
		key: 'extract_national_prefix',
		value: function extract_national_prefix() {
			this.national_prefix = '';

			if (!this.country_metadata) {
				return;
			}

			var national_number = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["strip_national_prefix"])(this.national_number, this.country_metadata);

			if (national_number !== this.national_number) {
				this.national_prefix = this.national_number.slice(0, this.national_number.length - national_number.length);
				this.national_number = national_number;
			}

			return this.national_prefix;
		}
	}, {
		key: 'choose_another_format',
		value: function choose_another_format() {
			// When there are multiple available formats, the formatter uses the first
			// format where a formatting template could be created.
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.matching_formats), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var format = _step2.value;

					// If this format is currently being used
					// and is still possible, then stick to it.
					if (this.chosen_format === format) {
						return;
					}

					// If this `format` is suitable for "as you type",
					// then extract the template from this format
					// and use it to format the phone number being input.

					if (!this.validate_format(format)) {
						continue;
					}

					if (!this.create_formatting_template(format)) {
						continue;
					}

					this.chosen_format = format;

					// With a new formatting template, the matched position
					// using the old template needs to be reset.
					this.last_match_position = -1;

					return true;
				}

				// No format matches the phone number,
				// therefore set `country` to `undefined`
				// (or to the default country).
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			this.reset_country();

			// No format matches the national phone number entered
			this.reset_format();
		}
	}, {
		key: 'validate_format',
		value: function validate_format(format) {
			// If national prefix is mandatory for this phone number format
			// and the user didn't input the national prefix,
			// then this phone number format isn't suitable.
			if (!this.is_international() && !this.national_prefix && Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_is_mandatory_when_formatting"])(format, this.country_metadata)) {
				return;
			}

			return true;
		}
	}, {
		key: 'create_formatting_template',
		value: function create_formatting_template(format) {
			// The formatter doesn't format numbers when numberPattern contains '|', e.g.
			// (20|3)\d{4}. In those cases we quickly return.
			// (Though there's no such format in current metadata)
			/* istanbul ignore if */
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format).indexOf('|') >= 0) {
				return;
			}

			// Get formatting template for this phone number format
			var template = this.get_template_for_phone_number_format_pattern(format);

			// If the national number entered is too long
			// for any phone number format, then abort.
			if (!template) {
				return;
			}

			// This one is for national number only
			this.partially_populated_template = template;

			// For convenience, the public `.template` property
			// contains the whole international number
			// if the phone number being input is international:
			// 'x' for the '+' sign, 'x'es for the country phone code,
			// a spacebar and then the template for the formatted national number.
			if (this.is_international()) {
				this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + ' ' + template;
			}
			// For local numbers, replace national prefix
			// with a digit placeholder.
			else {
					this.template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
				}

			// This one is for the full phone number
			return this.template;
		}

		// Generates formatting template for a phone number format

	}, {
		key: 'get_template_for_phone_number_format_pattern',
		value: function get_template_for_phone_number_format_pattern(format) {
			var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_national_prefix_formatting_rule"])(format, this.country_metadata);

			// A very smart trick by the guys at Google
			var number_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_pattern"])(format)
			// Replace anything in the form of [..] with \d
			.replace(CHARACTER_CLASS_PATTERN, '\\d')
			// Replace any standalone digit (not the one in `{}`) with \d
			.replace(STANDALONE_DIGIT_PATTERN, '\\d');

			// This match will always succeed,
			// because the "longest dummy phone number"
			// has enough length to accomodate any possible
			// national phone number format pattern.
			var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];

			// If the national number entered is too long
			// for any phone number format, then abort.
			if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
				return;
			}

			// Prepare the phone number format
			var number_format = this.get_format_format(format, national_prefix_formatting_rule);

			// Get a formatting template which can be used to efficiently format
			// a partial number where digits are added one by one.

			// Below `strict_pattern` is used for the
			// regular expression (with `^` and `$`).
			// This wasn't originally in Google's `libphonenumber`
			// and I guess they don't really need it
			// because they're not using "templates" to format phone numbers
			// but I added `strict_pattern` after encountering
			// South Korean phone number formatting bug.
			//
			// Non-strict regular expression bug demonstration:
			//
			// this.national_number : `111111111` (9 digits)
			//
			// number_pattern : (\d{2})(\d{3,4})(\d{4})
			// number_format : `$1 $2 $3`
			// dummy_phone_number_matching_format_pattern : `9999999999` (10 digits)
			//
			// '9999999999'.replace(new RegExp(/(\d{2})(\d{3,4})(\d{4})/g), '$1 $2 $3') = "99 9999 9999"
			//
			// template : xx xxxx xxxx
			//
			// But the correct template in this case is `xx xxx xxxx`.
			// The template was generated incorrectly because of the
			// `{3,4}` variability in the `number_pattern`.
			//
			// The fix is, if `this.national_number` has already sufficient length
			// to satisfy the `number_pattern` completely then `this.national_number` is used
			// instead of `dummy_phone_number_matching_format_pattern`.

			var strict_pattern = new RegExp('^' + number_pattern + '$');
			var national_number_dummy_digits = this.national_number.replace(/\d/g, DUMMY_DIGIT);

			// If `this.national_number` has already sufficient length
			// to satisfy the `number_pattern` completely then use it
			// instead of `dummy_phone_number_matching_format_pattern`.
			if (strict_pattern.test(national_number_dummy_digits)) {
				dummy_phone_number_matching_format_pattern = national_number_dummy_digits;
			}

			// Generate formatting template for this phone number format
			return dummy_phone_number_matching_format_pattern
			// Format the dummy phone number according to the format
			.replace(new RegExp(number_pattern), number_format)
			// Replace each dummy digit with a DIGIT_PLACEHOLDER
			.replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);
		}
	}, {
		key: 'format_next_national_number_digits',
		value: function format_next_national_number_digits(digits) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var digit = _step3.value;

					// If there is room for more digits in current `template`,
					// then set the next digit in the `template`,
					// and return the formatted digits so far.

					// If more digits are entered than the current format could handle
					if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
						// Reset the current format,
						// so that the new format will be chosen
						// in a subsequent `this.choose_another_format()` call
						// later in code.
						this.chosen_format = undefined;
						this.template = undefined;
						this.partially_populated_template = undefined;
						return;
					}

					this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
					this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
				}

				// Return the formatted phone number so far
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, ' ');
		}
	}, {
		key: 'is_international',
		value: function is_international() {
			return this.parsed_input && this.parsed_input[0] === '+';
		}
	}, {
		key: 'get_format_format',
		value: function get_format_format(format, national_prefix_formatting_rule) {
			var number_format = this.is_international() ? Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_format"])(format);

			// If national prefix formatting rule is set
			// for this phone number format
			if (national_prefix_formatting_rule) {
				// If the user did input the national prefix
				// (or if the national prefix formatting rule does not require national prefix)
				// then maybe make it part of the phone number template
				if (this.national_prefix || !Object(_metadata__WEBPACK_IMPORTED_MODULE_3__["get_format_uses_national_prefix"])(national_prefix_formatting_rule)) {
					// Make the national prefix part of the phone number template
					number_format = number_format.replace(_format__WEBPACK_IMPORTED_MODULE_5__["FIRST_GROUP_PATTERN"], national_prefix_formatting_rule);
				}
			}

			if (this.is_international()) {
				return Object(_format__WEBPACK_IMPORTED_MODULE_5__["local_to_international_style"])(number_format);
			}

			return number_format;
		}

		// Determines the country of the phone number
		// entered so far based on the country phone code
		// and the national phone number.

	}, {
		key: 'determine_the_country',
		value: function determine_the_country() {
			this.country = Object(_parse__WEBPACK_IMPORTED_MODULE_4__["find_country_code"])(this.country_phone_code, this.national_number, this.metadata);
		}
	}]);

	return as_you_type;
}();

/* harmony default export */ __webpack_exports__["default"] = (as_you_type);


function close_dangling_braces(template, cut_before) {
	var retained_template = template.slice(0, cut_before);

	var opening_braces = count_occurences('(', retained_template);
	var closing_braces = count_occurences(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		if (template[cut_before] === ')') {
			dangling_braces--;
		}
		cut_before++;
	}

	return template.slice(0, cut_before);
}

// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var character = _step4.value;

			if (character === symbol) {
				count++;
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	return count;
}

// Repeats a string (or a symbol) N times.
// http://stackoverflow.com/questions/202605/repeat-string-javascript
function repeat(string, times) {
	if (times < 1) {
		return '';
	}

	var result = '';

	while (times > 1) {
		if (times & 1) {
			result += string;
		}

		times >>= 1;
		string += string;
	}

	return result + string;
}
//# sourceMappingURL=AsYouType.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/common.js":
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/common.js ***!
  \******************************************************/
/*! exports provided: matches_entirely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches_entirely", function() { return matches_entirely; });
// Checks whether the entire input sequence can be matched
// against the regular expression.
function matches_entirely() {
	var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var regular_expression = arguments[1];

	if (typeof regular_expression === 'string') {
		regular_expression = '^(?:' + regular_expression + ')$';
	}

	var matched_groups = text.match(regular_expression);
	return matched_groups !== null && matched_groups[0].length === text.length;
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/format.js":
/*!******************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/format.js ***!
  \******************************************************/
/*! exports provided: default, FIRST_GROUP_PATTERN, format_national_number_using_format, format_national_number, choose_format_for_number, local_to_international_style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_GROUP_PATTERN", function() { return FIRST_GROUP_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_national_number_using_format", function() { return format_national_number_using_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format_national_number", function() { return format_national_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose_format_for_number", function() { return choose_format_for_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "local_to_international_style", function() { return local_to_international_style; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");


// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js







var default_options = {
	formatExtension: function formatExtension(number, extension) {
		return number + ' ext. ' + extension;
	}

	// Formats a phone number
	//
	// Example use cases:
	//
	// ```js
	// format('8005553535', 'RU', 'International')
	// format('8005553535', 'RU', 'International', metadata)
	// format({ phone: '8005553535', country: 'RU' }, 'International')
	// format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
	// format('+78005553535', 'National')
	// format('+78005553535', 'National', metadata)
	// ```
	//
};function format(arg_1, arg_2, arg_3, arg_4, arg_5) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3, arg_4, arg_5),
	    input = _sort_out_arguments.input,
	    format_type = _sort_out_arguments.format_type,
	    options = _sort_out_arguments.options,
	    metadata = _sort_out_arguments.metadata;

	var country_metadata = void 0;

	if (input.country) {
		country_metadata = metadata.countries[input.country];
	}

	var _parse_phone_number_a = Object(_parse__WEBPACK_IMPORTED_MODULE_3__["parse_phone_number_and_country_phone_code"])(input.phone, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	if (country_phone_code) {
		// Check country restriction
		if (input.country && country_metadata && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata)) {
			return input.phone;
		}

		country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata);
	}

	if (!country_metadata) {
		return input.phone;
	}

	switch (format_type) {
		case 'International':
			if (!number) {
				return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata);
			}
			var national_number = format_national_number(number, 'International', false, country_metadata);
			var international_number = '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + ' ' + national_number;
			if (input.ext || input.ext === 0) {
				return options.formatExtension(international_number, input.ext);
			}
			return international_number;

		case 'E.164':
		// "International_plaintext" is deprecated
		case 'International_plaintext':
			// `E.164` doesn't define "phone number extensions".
			return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone;

		case 'RFC3966':
			return '+' + Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(country_metadata) + input.phone + (input.ext || input.ext === 0 ? ';ext=' + input.ext : '');

		case 'National':
			if (!number) {
				return '';
			}
			var _national_number = format_national_number(number, 'National', false, country_metadata);
			if (input.ext || input.ext === 0) {
				return options.formatExtension(_national_number, input.ext);
			}
			return _national_number;
	}
}

// This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.
var FIRST_GROUP_PATTERN = /(\$\d)/;

function format_national_number_using_format(number, format, international, enforce_national_prefix, country_metadata) {
	var format_pattern_matcher = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(format));

	var national_prefix_formatting_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_formatting_rule"])(format, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_national_prefix_is_optional_when_formatting"])(format, country_metadata) && !enforce_national_prefix;

	if (!international && !national_prefix_may_be_omitted) {
		return number.replace(format_pattern_matcher, Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
	}

	var formatted_number = number.replace(format_pattern_matcher, international ? Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_international_format"])(format) : Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_format"])(format));

	if (international) {
		return local_to_international_style(formatted_number);
	}

	return formatted_number;
}

function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
	var format = choose_format_for_number(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_formats"])(country_metadata), number);

	if (!format) {
		return number;
	}

	return format_national_number_using_format(number, format, format_as === 'International', enforce_national_prefix, country_metadata);
}

function choose_format_for_number(available_formats, national_number) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _format = _step.value;

			// Validate leading digits
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length > 0) {
				// The last leading_digits_pattern is used here, as it is the most detailed
				var last_leading_digits_pattern = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format)[Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_leading_digits_patterns"])(_format).length - 1];

				// If leading digits don't match then move on to the next phone number format
				if (national_number.search(last_leading_digits_pattern) !== 0) {
					continue;
				}
			}

			// Check that the national number matches the phone number format regular expression
			if (Object(_common__WEBPACK_IMPORTED_MODULE_2__["matches_entirely"])(national_number, new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_format_pattern"])(_format)))) {
				return _format;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

// Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
function local_to_international_style(local) {
	return local.replace(new RegExp('[' + _parse__WEBPACK_IMPORTED_MODULE_3__["VALID_PUNCTUATION"] + ']+', 'g'), ' ').trim();
}

// Sort out arguments
function sort_out_arguments() {
	var arg_1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	var arg_2 = arguments[1];
	var arg_3 = arguments[2];
	var arg_4 = arguments[3];
	var arg_5 = arguments[4];

	var input = void 0;
	var format_type = void 0;
	var options = void 0;
	var metadata = void 0;

	// Sort out arguments.

	// If the phone number is passed as a string.
	// `format('8005553535', ...)`.
	if (typeof arg_1 === 'string') {
		// If country code is supplied.
		// `format('8005553535', 'RU', 'National', [options], metadata)`.
		if (typeof arg_3 === 'string') {
			// Will be `parse()`d later in code
			input = {
				phone: arg_1,
				country: arg_2
			};

			format_type = arg_3;

			if (arg_5) {
				options = arg_4;
				metadata = arg_5;
			} else {
				metadata = arg_4;
			}
		}
		// Just an international phone number is supplied
		// `format('+78005553535', 'National', [options], metadata)`.
		else {
				// Will be `parse()`d later in code
				input = {
					phone: arg_1
				};

				if (typeof arg_2 !== 'string') {
					throw new Error('Format type argument not passed for `format()`');
				}

				format_type = arg_2;

				if (arg_4) {
					options = arg_3;
					metadata = arg_4;
				} else {
					metadata = arg_3;
				}
			}
	}
	// If the phone number is passed as a parsed number object.
	// `format({ phone: '8005553535', country: 'RU' }, 'National', [options], metadata)`.
	else {
			input = arg_1;
			format_type = arg_2;

			if (arg_4) {
				options = arg_3;
				metadata = arg_4;
			} else {
				metadata = arg_3;
			}
		}

	// Metadata is required.
	if (!metadata) {
		throw new Error('Metadata is required');
	}

	// Validate `format_type`.
	switch (format_type) {
		case 'International':
		case 'E.164':
		// "International_plaintext" is deprecated
		case 'International_plaintext':
		case 'National':
		case 'RFC3966':
			break;
		default:
			throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
	}

	// Apply default options.
	if (options) {
		options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
	} else {
		options = default_options;
	}

	return { input: input, format_type: format_type, options: options, metadata: metadata };
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/metadata.js ***!
  \********************************************************/
/*! exports provided: get_phone_code, get_national_number_pattern, get_formats, get_national_prefix, get_national_prefix_formatting_rule, get_national_prefix_for_parsing, get_national_prefix_transform_rule, get_national_prefix_is_optional_when_formatting, get_leading_digits, get_format_pattern, get_format_format, get_format_leading_digits_patterns, get_format_national_prefix_formatting_rule, get_format_national_prefix_is_optional_when_formatting, get_format_national_prefix_is_mandatory_when_formatting, get_format_uses_national_prefix, get_format_international_format, get_metadata_by_country_phone_code, get_types, get_type_fixed_line, get_type_mobile, get_type_toll_free, get_type_premium_rate, get_type_personal_number, get_type_voice_mail, get_type_uan, get_type_pager, get_type_voip, get_type_shared_cost, get_country_phone_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_phone_code", function() { return get_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_number_pattern", function() { return get_national_number_pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_formats", function() { return get_formats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix", function() { return get_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_formatting_rule", function() { return get_national_prefix_formatting_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_for_parsing", function() { return get_national_prefix_for_parsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_transform_rule", function() { return get_national_prefix_transform_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_national_prefix_is_optional_when_formatting", function() { return get_national_prefix_is_optional_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_leading_digits", function() { return get_leading_digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_pattern", function() { return get_format_pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_format", function() { return get_format_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_leading_digits_patterns", function() { return get_format_leading_digits_patterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_formatting_rule", function() { return get_format_national_prefix_formatting_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_optional_when_formatting", function() { return get_format_national_prefix_is_optional_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_national_prefix_is_mandatory_when_formatting", function() { return get_format_national_prefix_is_mandatory_when_formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_uses_national_prefix", function() { return get_format_uses_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_format_international_format", function() { return get_format_international_format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_metadata_by_country_phone_code", function() { return get_metadata_by_country_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_types", function() { return get_types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_fixed_line", function() { return get_type_fixed_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_mobile", function() { return get_type_mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_toll_free", function() { return get_type_toll_free; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_premium_rate", function() { return get_type_premium_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_personal_number", function() { return get_type_personal_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_voice_mail", function() { return get_type_voice_mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_uan", function() { return get_type_uan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_pager", function() { return get_type_pager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_voip", function() { return get_type_voip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_type_shared_cost", function() { return get_type_shared_cost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_country_phone_code", function() { return get_country_phone_code; });
function get_phone_code(country_metadata) {
	return country_metadata[0];
}

function get_national_number_pattern(country_metadata) {
	return country_metadata[1];
}

function get_formats(country_metadata) {
	return country_metadata[2] || [];
}

function get_national_prefix(country_metadata) {
	return country_metadata[3];
}

function get_national_prefix_formatting_rule(country_metadata) {
	return country_metadata[4];
}

function get_national_prefix_for_parsing(country_metadata) {
	var national_prefix_for_parsing = country_metadata[5];

	// If `national_prefix_for_parsing` is not set explicitly,
	// then infer it from `national_prefix` (if any)
	if (!national_prefix_for_parsing) {
		national_prefix_for_parsing = get_national_prefix(country_metadata);
	}

	return national_prefix_for_parsing;
}

function get_national_prefix_transform_rule(country_metadata) {
	return country_metadata[6];
}

function get_national_prefix_is_optional_when_formatting(country_metadata) {
	return country_metadata[7];
}

function get_leading_digits(country_metadata) {
	return country_metadata[8];
}

function get_format_pattern(format_array) {
	return format_array[0];
}

function get_format_format(format_array) {
	return format_array[1];
}

function get_format_leading_digits_patterns(format_array) {
	return format_array[2] || [];
}

function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
	return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
}

function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
	return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
}

function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
	var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata);

	// National prefix is omitted if there's no national prefix formatting rule
	// set for this country, or when the national prefix formatting rule
	// contains no national prefix itself, or when this rule is set but
	// national prefix is optional for this phone number format
	// (and it is not enforced explicitly)
	return national_prefix_formatting_rule &&
	// Check that national prefix formatting rule is not a dummy one.
	// Check that national prefix formatting rule actually has national prefix digit(s).
	get_format_uses_national_prefix(national_prefix_formatting_rule) &&
	// Or maybe national prefix is optional for this format
	!get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
}

// Checks whether national prefix formatting rule contains national prefix
function get_format_uses_national_prefix(national_prefix_formatting_rule) {
	// Check that national prefix formatting rule is not a dummy one
	return national_prefix_formatting_rule !== '$1' &&
	// Check that national prefix formatting rule actually has national prefix digit(s)
	/\d/.test(national_prefix_formatting_rule.replace('$1', ''));
}

function get_format_international_format(format_array) {
	return format_array[5] || get_format_format(format_array);
}

// Formatting information for regions which share
// a country calling code is contained by only one region
// for performance reasons. For example, for NANPA region
// ("North American Numbering Plan Administration",
//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
// it will be contained in the metadata for `US`.
function get_metadata_by_country_phone_code(country_phone_code, metadata) {
	var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
	return metadata.countries[country_code];
}

function get_types(country_metadata) {
	return country_metadata[9];
}

function get_type(country_metadata, index) {
	return get_types(country_metadata) ? get_types(country_metadata)[index] : undefined;
}

function get_type_fixed_line(country_metadata) {
	return get_type(country_metadata, 0);
}

function get_type_mobile(country_metadata) {
	return get_type(country_metadata, 1);
}

function get_type_toll_free(country_metadata) {
	return get_type(country_metadata, 2);
}

function get_type_premium_rate(country_metadata) {
	return get_type(country_metadata, 3);
}

function get_type_personal_number(country_metadata) {
	return get_type(country_metadata, 4);
}

function get_type_voice_mail(country_metadata) {
	return get_type(country_metadata, 5);
}

function get_type_uan(country_metadata) {
	return get_type(country_metadata, 6);
}

function get_type_pager(country_metadata) {
	return get_type(country_metadata, 7);
}

function get_type_voip(country_metadata) {
	return get_type(country_metadata, 8);
}

function get_type_shared_cost(country_metadata) {
	return get_type(country_metadata, 9);
}

function get_country_phone_code(country, country_metadata) {
	return get_phone_code(country_metadata[country]);
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/parse.js ***!
  \*****************************************************/
/*! exports provided: PLUS_CHARS, VALID_DIGITS, VALID_PUNCTUATION, DIGIT_MAPPINGS, default, normalize, replace_characters, is_viable_phone_number, extract_formatted_phone_number, parse_phone_number, parse_phone_number_and_country_phone_code, strip_national_prefix, find_country_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_CHARS", function() { return PLUS_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_DIGITS", function() { return VALID_DIGITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_PUNCTUATION", function() { return VALID_PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIGIT_MAPPINGS", function() { return DIGIT_MAPPINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace_characters", function() { return replace_characters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_viable_phone_number", function() { return is_viable_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract_formatted_phone_number", function() { return extract_formatted_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_phone_number", function() { return parse_phone_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_phone_number_and_country_phone_code", function() { return parse_phone_number_and_country_phone_code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strip_national_prefix", function() { return strip_national_prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find_country_code", function() { return find_country_code; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");
/* harmony import */ var babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./node_modules/libphonenumber-js/es6/types.js");



// This is a port of Google Android `libphonenumber`'s
// `phonenumberutil.js` of 17th November, 2016.
//
// https://github.com/googlei18n/libphonenumber/commits/master/javascript/i18n/phonenumbers/phonenumberutil.js









// The maximum length of the country calling code.
var MAX_LENGTH_COUNTRY_CODE = 3;

// The minimum length of the national significant number.
var MIN_LENGTH_FOR_NSN = 2;

// The ITU says the maximum length should be 15,
// but one can find longer numbers in Germany.
var MAX_LENGTH_FOR_NSN = 17;

// We don't allow input strings for parsing to be longer than 250 chars.
// This prevents malicious input from consuming CPU.
var MAX_INPUT_STRING_LENGTH = 250;

var PLUS_CHARS = '+\uFF0B';

// Digits accepted in phone numbers
// (ascii, fullwidth, arabic-indic, and eastern arabic digits).
var VALID_DIGITS = '0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9';

// `DASHES` will be right after the opening square bracket of the "character class"
var DASHES = '-\u2010-\u2015\u2212\u30FC\uFF0D';
var SLASHES = '\uFF0F/';
var DOTS = '\uFF0E.';
var WHITESPACE = ' \xA0\xAD\u200B\u2060\u3000';
var BRACKETS = '()\uFF08\uFF09\uFF3B\uFF3D\\[\\]';
var TILDES = '~\u2053\u223C\uFF5E';

// Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.
var VALID_PUNCTUATION = '' + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES;

// Pattern to capture digits used in an extension.
// Places a maximum length of '7' for an extension.
var CAPTURING_EXTN_DIGITS = '([' + VALID_DIGITS + ']{1,7})';

// The RFC 3966 format for extensions.
var RFC3966_EXTN_PREFIX = ';ext=';

/**
 * Regexp of all possible ways to write extensions, for use when parsing. This
 * will be run as a case-insensitive regexp match. Wide character versions are
 * also provided after each ASCII version. There are three regular expressions
 * here. The first covers RFC 3966 format, where the extension is added using
 * ';ext='. The second more generic one starts with optional white space and
 * ends with an optional full stop (.), followed by zero or more spaces/tabs
 * /commas and then the numbers themselves. The other one covers the special
 * case of American numbers where the extension is written with a hash at the
 * end, such as '- 503#'. Note that the only capturing groups should be around
 * the digits that you want to capture as part of the extension, or else parsing
 * will fail! We allow two options for representing the accented o - the
 * character itself, and one in the unicode decomposed form with the combining
 * acute accent.
 */
var EXTN_PATTERNS_FOR_PARSING = RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + '|' + '[ \xA0\\t,]*' + '(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|' + '[;,x\uFF58#\uFF03~\uFF5E]|int|anexo|\uFF49\uFF4E\uFF54)' + '[:\\.\uFF0E]?[ \xA0\\t,-]*' + CAPTURING_EXTN_DIGITS + '#?|' + '[- ]+([' + VALID_DIGITS + ']{1,5})#';

// Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.
var EXTN_PATTERN = new RegExp('(?:' + EXTN_PATTERNS_FOR_PARSING + ')$', 'i');

//  Regular expression of viable phone numbers. This is location independent.
//  Checks we have at least three leading digits, and only valid punctuation,
//  alpha characters and digits in the phone number. Does not include extension
//  data. The symbol 'x' is allowed here as valid punctuation since it is often
//  used as a placeholder for carrier codes, for example in Brazilian phone
//  numbers. We also allow multiple '+' characters at the start.
//
//  Corresponds to the following:
//  [digits]{minLengthNsn}|
//  plus_sign*
//  (([punctuation]|[star])*[digits]){3,}([punctuation]|[star]|[digits]|[alpha])*
//
//  The first reg-ex is to allow short numbers (two digits long) to be parsed if
//  they are entered as "15" etc, but only if there is no punctuation in them.
//  The second expression restricts the number of digits to three or more, but
//  then allows them to be in international form, and to have alpha-characters
//  and punctuation. We split up the two reg-exes here and combine them when
//  creating the reg-ex VALID_PHONE_NUMBER_PATTERN itself so we can prefix it
//  with ^ and append $ to each branch.
//
//  "Note VALID_PUNCTUATION starts with a -,
//   so must be the first in the range" (c) Google devs.
//  (wtf did they mean by saying that; probably nothing)
//
var MIN_LENGTH_PHONE_NUMBER_PATTERN = '[' + VALID_DIGITS + ']{' + MIN_LENGTH_FOR_NSN + '}';
//
// And this is the second reg-exp:
// (see MIN_LENGTH_PHONE_NUMBER_PATTERN for a full description of this reg-exp)
//
var VALID_PHONE_NUMBER = '[' + PLUS_CHARS + ']{0,1}' + '(?:' + '[' + VALID_PUNCTUATION + ']*' + '[' + VALID_DIGITS + ']' + '){3,}' + '[' + VALID_PUNCTUATION + VALID_DIGITS + ']*';

// The combined regular expression for valid phone numbers:
//
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
// Either a short two-digit-only phone number
'^' + MIN_LENGTH_PHONE_NUMBER_PATTERN + '$' + '|' +
// Or a longer fully parsed phone number (min 3 characters)
'^' + VALID_PHONE_NUMBER +
// Phone number extensions
'(?:' + EXTN_PATTERNS_FOR_PARSING + ')?' + '$', 'i');

// This consists of the plus symbol, digits, and arabic-indic digits.
var PHONE_NUMBER_START_PATTERN = new RegExp('[' + PLUS_CHARS + VALID_DIGITS + ']');

// Regular expression of trailing characters that we want to remove.
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp('[^' + VALID_DIGITS + ']+$');

var LEADING_PLUS_CHARS_PATTERN = new RegExp('^[' + PLUS_CHARS + ']+');

// These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
var DIGIT_MAPPINGS = {
	'0': '0',
	'1': '1',
	'2': '2',
	'3': '3',
	'4': '4',
	'5': '5',
	'6': '6',
	'7': '7',
	'8': '8',
	'9': '9',
	'\uFF10': '0', // Fullwidth digit 0
	'\uFF11': '1', // Fullwidth digit 1
	'\uFF12': '2', // Fullwidth digit 2
	'\uFF13': '3', // Fullwidth digit 3
	'\uFF14': '4', // Fullwidth digit 4
	'\uFF15': '5', // Fullwidth digit 5
	'\uFF16': '6', // Fullwidth digit 6
	'\uFF17': '7', // Fullwidth digit 7
	'\uFF18': '8', // Fullwidth digit 8
	'\uFF19': '9', // Fullwidth digit 9
	'\u0660': '0', // Arabic-indic digit 0
	'\u0661': '1', // Arabic-indic digit 1
	'\u0662': '2', // Arabic-indic digit 2
	'\u0663': '3', // Arabic-indic digit 3
	'\u0664': '4', // Arabic-indic digit 4
	'\u0665': '5', // Arabic-indic digit 5
	'\u0666': '6', // Arabic-indic digit 6
	'\u0667': '7', // Arabic-indic digit 7
	'\u0668': '8', // Arabic-indic digit 8
	'\u0669': '9', // Arabic-indic digit 9
	'\u06F0': '0', // Eastern-Arabic digit 0
	'\u06F1': '1', // Eastern-Arabic digit 1
	'\u06F2': '2', // Eastern-Arabic digit 2
	'\u06F3': '3', // Eastern-Arabic digit 3
	'\u06F4': '4', // Eastern-Arabic digit 4
	'\u06F5': '5', // Eastern-Arabic digit 5
	'\u06F6': '6', // Eastern-Arabic digit 6
	'\u06F7': '7', // Eastern-Arabic digit 7
	'\u06F8': '8', // Eastern-Arabic digit 8
	'\u06F9': '9' // Eastern-Arabic digit 9
};

var default_options = {
	country: {}

	// `options`:
	//  {
	//    country:
	//    {
	//      restrict - (a two-letter country code)
	//                 the phone number must be in this country
	//
	//      default - (a two-letter country code)
	//                default country to use for phone number parsing and validation
	//                (if no country code could be derived from the phone number)
	//    }
	//  }
	//
	// Returns `{ country, number }`
	//
	// Example use cases:
	//
	// ```js
	// parse('8 (800) 555-35-35', 'RU')
	// parse('8 (800) 555-35-35', 'RU', metadata)
	// parse('8 (800) 555-35-35', { country: { default: 'RU' } })
	// parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
	// parse('+7 800 555 35 35')
	// parse('+7 800 555 35 35', metadata)
	// ```
	//
};function parse(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
	    text = _sort_out_arguments.text,
	    options = _sort_out_arguments.options,
	    metadata = _sort_out_arguments.metadata;

	// Validate country codes

	// Validate `default` country


	if (options.country.default && !metadata.countries[options.country.default]) {
		throw new Error('Unknown country code: ' + options.country.default);
	}

	// Validate `restrict` country
	if (options.country.restrict && !metadata.countries[options.country.restrict]) {
		throw new Error('Unknown country code: ' + options.country.restrict);
	}

	// Parse the phone number

	var formatted_phone_number = void 0;
	var extension = void 0;

	// Parse RFC 3966 phone number URI.
	if (text && text.indexOf('tel:') === 0) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text.split(';')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var part = _step.value;

				var _part$split = part.split(':'),
				    _part$split2 = babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_part$split, 2),
				    name = _part$split2[0],
				    value = _part$split2[1];

				switch (name) {
					case 'tel':
						formatted_phone_number = value;
						break;
					case 'ext':
						extension = value;
						break;
					case 'phone-context':
						// Domain contexts are ignored.
						if (value[0] === '+') {
							formatted_phone_number = value + formatted_phone_number;
						}
						break;
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	} else {
		formatted_phone_number = extract_formatted_phone_number(text);
	}

	// If the phone number is not viable, then abort.
	if (!is_viable_phone_number(formatted_phone_number)) {
		return {};
	}

	// Attempt to parse extension first, since it doesn't require region-specific
	// data and we want to have the non-normalised number here.
	var with_extension_stripped = strip_extension(formatted_phone_number);

	if (with_extension_stripped.extension) {
		formatted_phone_number = with_extension_stripped.number, extension = with_extension_stripped.extension;
	}

	var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, metadata),
	    country_phone_code = _parse_phone_number_a.country_phone_code,
	    number = _parse_phone_number_a.number;

	// Maybe invalid country phone code encountered


	if (!number) {
		return {};
	}

	var country = void 0;
	var country_metadata = void 0;

	// Whether the phone number is formatted as an international phone number
	var is_international = false;

	if (country_phone_code) {
		is_international = true;

		// Check country restriction
		if (options.country.restrict && country_phone_code !== Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_phone_code"])(metadata.countries[options.country.restrict])) {
			return {};
		}

		// Formatting information for regions which share
		// a country calling code is contained by only one region
		// for performance reasons. For example, for NANPA region
		// ("North American Numbering Plan Administration",
		//  which includes USA, Canada, Cayman Islands, Bahamas, etc)
		// it will be contained in the metadata for `US`.
		country_metadata = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_metadata_by_country_phone_code"])(country_phone_code, metadata);

		// `country` will be set later,
		// because, for example, for NANPA countries
		// there are several countries corresponding
		// to the same `1` country phone code.
		// Therefore, to reliably determine the exact country,
		// national (significant) number should be parsed first.
	} else if (options.country.restrict || options.country.default) {
		country = options.country.restrict || options.country.default;
		country_metadata = metadata.countries[country];

		number = normalize(formatted_phone_number);
	}

	if (!country_metadata) {
		return {};
	}

	var national_number = number;

	// Only strip national prefixes for non-international phone numbers
	// because national prefixes can't be present in international phone numbers.
	// Otherwise, while forgiving, it would parse a NANPA number `+1 1877 215 5230`
	// first to `1877 215 5230` and then, stripping the leading `1`, to `877 215 5230`,
	// and then it would assume that's a valid number which it isn't.
	// So no forgiveness for grandmas here.
	// The issue asking for this fix:
	// https://github.com/catamphetamine/libphonenumber-js/issues/159
	if (!is_international) {
		national_number = strip_national_prefix(number, country_metadata);
	}

	var did_have_national_prefix = national_number !== number;

	// https://github.com/catamphetamine/libphonenumber-js/issues/67
	// if (!is_international && !did_have_national_prefix &&
	// 		is_national_prefix_required(national_number, country_metadata))
	// {
	// 	return {}
	// }

	// Sometimes there are several countries
	// corresponding to the same country phone code
	// (e.g. NANPA countries all having `1` country phone code).
	// Therefore, to reliably determine the exact country,
	// national (significant) number should have been parsed first.
	//
	if (!country) {
		// When `metadata.json` is generated, all "ambiguous" country phone codes
		// get their countries populated with the full set of
		// "phone number type" regular expressions.
		country = find_country_code(country_phone_code, national_number, metadata);

		// Just in case there appears to be a bug in Google's metadata
		// and the exact country could not be extracted from the phone number.
		/* istanbul ignore if */
		if (!country) {
			return {};
		}

		// Update metadata to be for this specific country
		country_metadata = metadata.countries[country];
	}

	// Validate national (significant) number length.
	//
	// A sidenote:
	//
	// They say that sometimes national (significant) numbers
	// can be longer than `MAX_LENGTH_FOR_NSN` (e.g. in Germany).
	// https://github.com/googlei18n/libphonenumber/blob/7e1748645552da39c4e1ba731e47969d97bdb539/resources/phonenumber.proto#L36
	// Such numbers will just be discarded.
	//
	if (national_number.length > MAX_LENGTH_FOR_NSN) {
		return {};
	}

	// National number pattern is different for each country,
	// even for those ones which are part of the "NANPA" group.
	var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata));

	// Check if national phone number pattern matches the number
	if (!Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_number, national_number_rule)) {
		return {};
	}

	var result = {
		country: country,
		phone: national_number
	};

	if (extension) {
		result.ext = extension;
	}

	return result;
}

// Normalizes a string of characters representing a phone number.
// This converts wide-ascii and arabic-indic numerals to European numerals,
// and strips punctuation and alpha characters.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//
function normalize(number) {
	return replace_characters(number, DIGIT_MAPPINGS);
}

// For any character not being part of `replacements`
// it is removed from the phone number.
function replace_characters(text, replacements) {
	var replaced = '';

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var character = _step2.value;

			var replacement = replacements[character.toUpperCase()];

			if (replacement !== undefined) {
				replaced += replacement;
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return replaced;
}

// Checks to see if the string of characters could possibly be a phone number at
// all. At the moment, checks to see that the string begins with at least 2
// digits, ignoring any punctuation commonly found in phone numbers. This method
// does not require the number to be normalized in advance - but does assume
// that leading non-number symbols have been removed, such as by the method
// `extract_possible_number`.
//
function is_viable_phone_number(number) {
	return number.length >= MIN_LENGTH_FOR_NSN && Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, VALID_PHONE_NUMBER_PATTERN);
}

function extract_formatted_phone_number(text) {
	if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
		return '';
	}

	// Attempt to extract a possible number from the string passed in

	var starts_at = text.search(PHONE_NUMBER_START_PATTERN);

	if (starts_at < 0) {
		return '';
	}

	return text
	// Trim everything to the left of the phone number
	.slice(starts_at)
	// Remove trailing non-numerical characters
	.replace(AFTER_PHONE_NUMBER_END_PATTERN, '');
}

// Parses a formatted phone number.
function parse_phone_number(number) {
	if (!number) {
		return '';
	}

	var is_international = LEADING_PLUS_CHARS_PATTERN.test(number);

	// Remove non-digits
	// (and strip the possible leading '+')
	number = normalize(number);

	if (is_international) {
		return '+' + number;
	}

	return number;
}

// Parses a formatted phone number
// and returns `{ country_phone_code, number }`
// where `number` is the national (significant) phone number.
//
// (aka `maybeExtractCountryPhoneCode`)
//
function parse_phone_number_and_country_phone_code(number, metadata) {
	number = parse_phone_number(number);

	if (!number) {
		return {};
	}

	// If this is not an international phone number,
	// then don't extract country phone code.
	if (number[0] !== '+') {
		return { number: number };
	}

	// Strip the leading '+' sign
	number = number.slice(1);

	// Fast abortion: country codes do not begin with a '0'
	if (number[0] === '0') {
		return {};
	}

	// The thing with country phone codes
	// is that they are orthogonal to each other
	// i.e. there's no such country phone code A
	// for which country phone code B exists
	// where B starts with A.
	// Therefore, while scanning digits,
	// if a valid country code is found,
	// that means that it is the country code.
	//
	var i = 1;
	while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
		var country_phone_code = number.slice(0, i);

		if (metadata.country_phone_code_to_countries[country_phone_code]) {
			return { country_phone_code: country_phone_code, number: number.slice(i) };
		}

		i++;
	}

	return {};
}

// Strips any national prefix (such as 0, 1) present in the number provided
function strip_national_prefix(number, country_metadata) {
	var national_prefix_for_parsing = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_for_parsing"])(country_metadata);

	if (!number || !national_prefix_for_parsing) {
		return number;
	}

	// Attempt to parse the first digits as a national prefix
	var national_prefix_pattern = new RegExp('^(?:' + national_prefix_for_parsing + ')');
	var national_prefix_matcher = national_prefix_pattern.exec(number);

	// If no national prefix is present in the phone number,
	// but if the national prefix is optional for this country,
	// then consider this phone number valid.
	//
	// Google's reference `libphonenumber` implementation
	// wouldn't recognize such phone numbers as valid,
	// but I think it would perfectly make sense
	// to consider such phone numbers as valid
	// because if a national phone number was originally
	// formatted without the national prefix
	// then it must be parseable back into the original national number.
	// In other words, `parse(format(number))`
	// must always be equal to `number`.
	//
	if (!national_prefix_matcher) {
		return number;
	}

	var national_significant_number = void 0;

	// `national_prefix_for_parsing` capturing groups
	// (used only for really messy cases: Argentina, Brazil, Mexico, Somalia)
	var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];
	var national_prefix_transform_rule = Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_prefix_transform_rule"])(country_metadata);

	// If the national number tranformation is needed then do it
	if (national_prefix_transform_rule && any_groups_were_captured) {
		national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
	}
	// Else, no transformation is necessary,
	// and just strip the national prefix.
	else {
			national_significant_number = number.slice(national_prefix_matcher[0].length);
		}

	// Verify the parsed national (significant) number for this country
	var national_number_rule = new RegExp(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_national_number_pattern"])(country_metadata));

	// If the original number (before stripping national prefix) was viable,
	// and the resultant number is not, then prefer the original phone number.
	// This is because for some countries (e.g. Russia) the same digit could be both
	// a national prefix and a leading digit of a valid national phone number,
	// like `8` is the national prefix for Russia and both
	// `8 800 555 35 35` and `800 555 35 35` are valid numbers.
	if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(number, national_number_rule) && !Object(_common__WEBPACK_IMPORTED_MODULE_3__["matches_entirely"])(national_significant_number, national_number_rule)) {
		return number;
	}

	// Return the parsed national (significant) number
	return national_significant_number;
}

function find_country_code(country_phone_code, national_phone_number, metadata) {
	// Is always non-empty, because `country_phone_code` is always valid
	var possible_countries = metadata.country_phone_code_to_countries[country_phone_code];

	// If there's just one country corresponding to the country code,
	// then just return it, without further phone number digits validation.
	if (possible_countries.length === 1) {
		return possible_countries[0];
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(possible_countries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var country_code = _step3.value;

			var country = metadata.countries[country_code];

			// Leading digits check would be the simplest one
			if (Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) {
				if (national_phone_number && national_phone_number.search(Object(_metadata__WEBPACK_IMPORTED_MODULE_4__["get_leading_digits"])(country)) === 0) {
					return country_code;
				}
			}
			// Else perform full validation with all of those bulky
			// fixed-line/mobile/etc regular expressions.
			else if (Object(_types__WEBPACK_IMPORTED_MODULE_6__["default"])({ phone: national_phone_number, country: country_code }, metadata)) {
					return country_code;
				}
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}

// export function is_national_prefix_required(national_number, country_metadata)
// {
// 	const format = choose_format_for_number(get_formats(country_metadata), national_number)
//
// 	if (format)
// 	{
// 		return get_format_national_prefix_is_mandatory_when_formatting(format, country_metadata)
// 	}
// }

// Sort out arguments
function sort_out_arguments(arg_1, arg_2, arg_3) {
	var text = void 0;
	var options = void 0;
	var metadata = void 0;

	// Normalize numerical `value`.
	// https://github.com/catamphetamine/libphonenumber-js/issues/142
	// `parse(88005553535, ...)`.
	if (typeof arg_1 === 'number') {
		arg_1 = String(arg_1);
	}

	// If the phone number is passed as a string.
	// `parse('88005553535', ...)`.
	if (typeof arg_1 === 'string') {
		text = arg_1;
	}

	// If "resrict country" argument is being passed
	// then convert it to an `options` object.
	// `parse('88005553535', 'RU', [options], metadata)`.
	if (typeof arg_2 === 'string') {
		options = { country: { restrict: arg_2 } };
		metadata = arg_3;
	}
	// No "resrict country" argument is being passed.
	// International phone number is passed.
	// `parse('+78005553535', [options], metadata)`.
	else {
			if (arg_3) {
				options = arg_2;
				metadata = arg_3;
			} else {
				metadata = arg_2;
			}
		}

	// Metadata is required.
	if (!metadata || !metadata.countries) {
		throw new Error('Metadata is required');
	}

	// Apply default options.
	if (options) {
		options = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, default_options, options);
	} else {
		options = default_options;
	}

	return { text: text, options: options, metadata: metadata };
}

// Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.
function strip_extension(number) {
	var start = number.search(EXTN_PATTERN);
	if (start < 0) {
		return {};
	}

	// If we find a potential extension, and the number preceding this is a viable
	// number, we assume it is an extension.
	var number_without_extension = number.slice(0, start);
	/* istanbul ignore if - seems a bit of a redundant check */
	if (!is_viable_phone_number(number_without_extension)) {
		return {};
	}

	var matches = number.match(EXTN_PATTERN);
	var i = 1;
	while (i < matches.length) {
		if (matches[i] != null && matches[i].length > 0) {
			return {
				number: number_without_extension,
				extension: matches[i]
			};
		}
		i++;
	}
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/types.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/types.js ***!
  \*****************************************************/
/*! exports provided: default, is_of_type, sort_out_arguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get_number_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_of_type", function() { return is_of_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort_out_arguments", function() { return sort_out_arguments; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/libphonenumber-js/es6/common.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");






// Finds out national phone number type (fixed line, mobile, etc)
function get_number_type(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	// When no input was passed


	if (!input) {
		return;
	}

	// When `parse()` returned `{}`
	// meaning that the phone number is not a valid one.
	if (!input.country) {
		return;
	}

	var national_number = input.phone;
	var country_metadata = metadata.countries[input.country];

	// The following is copy-pasted from the original function:
	// https://github.com/googlei18n/libphonenumber/blob/3ea547d4fbaa2d0b67588904dfa5d3f2557c27ff/javascript/i18n/phonenumbers/phonenumberutil.js#L2835

	// Is this national number even valid for this country
	if (!is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_national_number_pattern"])(country_metadata))) {
		return; // 'UNKNOWN'
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_premium_rate"])(country_metadata))) {
		return 'PREMIUM_RATE';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_toll_free"])(country_metadata))) {
		return 'TOLL_FREE';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_shared_cost"])(country_metadata))) {
		return 'SHARED_COST';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voip"])(country_metadata))) {
		return 'VOIP';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_personal_number"])(country_metadata))) {
		return 'PERSONAL_NUMBER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_pager"])(country_metadata))) {
		return 'PAGER';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_uan"])(country_metadata))) {
		return 'UAN';
	}

	/* istanbul ignore if */
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_voice_mail"])(country_metadata))) {
		return 'VOICEMAIL';
	}

	// Is it fixed line number
	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_fixed_line"])(country_metadata))) {
		// Because duplicate regular expressions are removed
		// to reduce metadata size, if there's no "mobile" pattern
		// then it means it was removed due to being a duplicate of some other pattern.
		//
		if (!Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata)) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		// Check if the number happens to qualify as both fixed line and mobile.
		// (no such country in the minimal metadata set)
		/* istanbul ignore if */
		if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
			return 'FIXED_LINE_OR_MOBILE';
		}

		return 'FIXED_LINE';
	}

	if (is_of_type(national_number, Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_type_mobile"])(country_metadata))) {
		return 'MOBILE';
	}

	// return 'UNKNOWN'
}

function is_of_type(national_number, type) {
	// // Check if any possible number lengths are present;
	// // if so, we use them to avoid checking
	// // the validation pattern if they don't match.
	// // If they are absent, this means they match
	// // the general description, which we have
	// // already checked before a specific number type.
	// if (get_possible_lengths(type) &&
	// 	get_possible_lengths(type).indexOf(national_number.length) === -1)
	// {
	// 	return false
	// }

	// get_type_pattern(type) === type
	return Object(_common__WEBPACK_IMPORTED_MODULE_1__["matches_entirely"])(national_number, type);
}

// Sort out arguments
function sort_out_arguments(arg_1, arg_2, arg_3) {
	var input = void 0;
	var metadata = void 0;

	// Normalize numerical `value`.
	// https://github.com/catamphetamine/libphonenumber-js/issues/142
	// `getNumberType(88005553535, ...)`.
	if (typeof arg_1 === 'number') {
		arg_1 = String(arg_1);
	}

	// If the phone number is passed as a string.
	// `getNumberType('88005553535', ...)`.
	if (typeof arg_1 === 'string') {
		// If "resrict country" argument is being passed
		// then convert it to an `options` object.
		// `getNumberType('88005553535', 'RU', metadata)`.
		if (typeof arg_2 === 'string' || arg_2 === undefined) {
			metadata = arg_3;

			// `parse` extracts phone numbers from raw text,
			// therefore it will cut off all "garbage" characters,
			// while this `validate` function needs to verify
			// that the phone number contains no "garbage"
			// therefore the explicit `is_viable_phone_number` check.
			if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
				input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, arg_2, metadata);
			}
		}
		// No "resrict country" argument is being passed.
		// International phone number is passed.
		// `getNumberType('+78005553535', metadata)`.
		else {
				metadata = arg_2;

				// `parse` extracts phone numbers from raw text,
				// therefore it will cut off all "garbage" characters,
				// while this `validate` function needs to verify
				// that the phone number contains no "garbage"
				// therefore the explicit `is_viable_phone_number` check.
				if (Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1)) {
					input = Object(_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_1, metadata);
				}
			}
	}
	// If the phone number is passed as a parsed phone number.
	// `getNumberType({ phone: '88005553535', country: 'RU' }, ...)`.
	else {
			// The `arg_1` must be a valid phone number
			// as a whole, not just a part of it which gets parsed here.
			if (arg_1 && arg_1.phone && Object(_parse__WEBPACK_IMPORTED_MODULE_0__["is_viable_phone_number"])(arg_1.phone)) {
				input = arg_1;
			}

			metadata = arg_2;
		}

	// Metadata is required.
	if (!metadata || !metadata.countries) {
		throw new Error('Metadata is required');
	}

	return { input: input, metadata: metadata };
}
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/es6/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/libphonenumber-js/es6/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return is_valid; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/libphonenumber-js/es6/types.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");





// Checks if a given phone number is valid
//
// Example use cases:
//
// ```js
// is_valid('8005553535', 'RU')
// is_valid('8005553535', 'RU', metadata)
// is_valid({ phone: '8005553535', country: 'RU' })
// is_valid({ phone: '8005553535', country: 'RU' }, metadata)
// is_valid('+78005553535')
// is_valid('+78005553535', metadata)
// ```
//
function is_valid(arg_1, arg_2, arg_3) {
	var _sort_out_arguments = Object(_types__WEBPACK_IMPORTED_MODULE_1__["sort_out_arguments"])(arg_1, arg_2, arg_3),
	    input = _sort_out_arguments.input,
	    metadata = _sort_out_arguments.metadata;

	if (!input) {
		return false;
	}

	if (!input.country) {
		return false;
	}

	var country_metadata = metadata.countries[input.country];

	if (Object(_metadata__WEBPACK_IMPORTED_MODULE_2__["get_types"])(country_metadata)) {
		if (!Object(_types__WEBPACK_IMPORTED_MODULE_1__["default"])(input, metadata)) {
			return false;
		}
	}

	return true;
}
//# sourceMappingURL=validate.js.map

/***/ }),

/***/ "./node_modules/libphonenumber-js/index.es6.js":
/*!*****************************************************!*\
  !*** ./node_modules/libphonenumber-js/index.es6.js ***!
  \*****************************************************/
/*! exports provided: parse, format, getNumberType, get_number_type, isValidNumber, is_valid_number, AsYouType, as_you_type, asYouType, parseCustom, DIGITS, formatCustom, isValidNumberCustom, getNumberTypeCustom, AsYouTypeCustom, asYouTypeCustom, DIGIT_PLACEHOLDER, getPhoneCode, getPhoneCodeCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberType", function() { return getNumberType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_number_type", function() { return get_number_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return isValidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_valid_number", function() { return is_valid_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsYouType", function() { return AsYouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as_you_type", function() { return as_you_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asYouType", function() { return asYouType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneCode", function() { return getPhoneCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneCodeCustom", function() { return getPhoneCodeCustom; });
/* harmony import */ var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata.min.json */ "./node_modules/libphonenumber-js/metadata.min.json");
var _metadata_min_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.min.json */ "./node_modules/libphonenumber-js/metadata.min.json", 1);
/* harmony import */ var _es6_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es6/parse */ "./node_modules/libphonenumber-js/es6/parse.js");
/* harmony import */ var _es6_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es6/types */ "./node_modules/libphonenumber-js/es6/types.js");
/* harmony import */ var _es6_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./es6/format */ "./node_modules/libphonenumber-js/es6/format.js");
/* harmony import */ var _es6_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./es6/validate */ "./node_modules/libphonenumber-js/es6/validate.js");
/* harmony import */ var _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./es6/AsYouType */ "./node_modules/libphonenumber-js/es6/AsYouType.js");
/* harmony import */ var _es6_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./es6/metadata */ "./node_modules/libphonenumber-js/es6/metadata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCustom", function() { return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIGITS", function() { return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["DIGIT_MAPPINGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatCustom", function() { return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNumberCustom", function() { return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberTypeCustom", function() { return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsYouTypeCustom", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asYouTypeCustom", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DIGIT_PLACEHOLDER", function() { return _es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["DIGIT_PLACEHOLDER"]; });











function parse()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_parse__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, parameters)
}

function format()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_format__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, parameters)
}

function getNumberType()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_types__WEBPACK_IMPORTED_MODULE_2__["default"].apply(this, parameters)
}

// `get_number_type` name is deprecated
function get_number_type()
{
	return getNumberType.apply(this, arguments)
}

function isValidNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(_metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
	return _es6_validate__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, parameters)
}

// `is_valid_number` name is deprecated
function is_valid_number()
{
	return isValidNumber.apply(this, arguments)
}

function AsYouType(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

AsYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
AsYouType.prototype.constructor = AsYouType

// `as_you_type` name is deprecated
function as_you_type(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

as_you_type.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
as_you_type.prototype.constructor = as_you_type

// `asYouType` name is deprecated
function asYouType(country)
{
	_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

asYouType.prototype = Object.create(_es6_AsYouType__WEBPACK_IMPORTED_MODULE_5__["default"].prototype, {})
asYouType.prototype.constructor = asYouType









function getPhoneCode(country)
{
	return getPhoneCodeCustom(country, _metadata_min_json__WEBPACK_IMPORTED_MODULE_0__)
}

function getPhoneCodeCustom(country, metadata)
{
	if (!metadata.countries[country])
	{
		throw new Error('Unknown country: "' + country + '"')
	}

	return Object(_es6_metadata__WEBPACK_IMPORTED_MODULE_6__["get_phone_code"])(metadata.countries[country])
}

/***/ }),

/***/ "./node_modules/libphonenumber-js/metadata.min.json":
/*!**********************************************************!*\
  !*** ./node_modules/libphonenumber-js/metadata.min.json ***!
  \**********************************************************/
/*! exports provided: country_phone_code_to_countries, countries, default */
/***/ (function(module) {

module.exports = {"country_phone_code_to_countries":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"800":["001"],"808":["001"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"870":["001"],"878":["001"],"880":["BD"],"881":["001"],"882":["001"],"883":["001"],"886":["TW"],"888":["001"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"979":["001"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","[46]\\d{4}|[01589]\\d{5}"],"AD":["376","[16]\\d{5,8}|[37-9]\\d{5}",[["(\\d{3})(\\d{3})","$1 $2",["[137-9]|6[0-8]"]],["(\\d{4})(\\d{4})","$1 $2",["180","180[02]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["690"]]]],"AE":["971","[2-79]\\d{7,8}|800\\d{2,9}",[["([2-4679])(\\d{3})(\\d{4})","$1 $2 $3",["[2-4679][2-8]"]],["(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"]],["([479]00)(\\d)(\\d{5})","$1 $2 $3",["[479]00"],"$1"],["([68]00)(\\d{2,9})","$1 $2",["[68]00"],"$1"]],"0","0$1"],"AF":["93","[2-7]\\d{8}",[["([2-7]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"]]],"0","0$1"],"AG":["1","[2589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"268"],"AI":["1","[2589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"264"],"AL":["355","[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",[["(4)(\\d{3})(\\d{4})","$1 $2 $3",["4[0-6]"]],["(6\\d)(\\d{3})(\\d{4})","$1 $2 $3",["6"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"]],["(\\d{3})(\\d{3,5})","$1 $2",["[235][16-9]|[79]|8[016-9]"]]],"0","0$1"],"AM":["374","[1-9]\\d{7}",[["(\\d{2})(\\d{6})","$1 $2",["1|47"]],["(\\d{2})(\\d{6})","$1 $2",["4[1349]|[5-7]|88|9[1-9]"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],"0","(0$1)"],"AO":["244","[29]\\d{8}",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]]],"AR":["54","11\\d{8}|[2368]\\d{9}|9\\d{10}",[["([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"]],["(9)(11)(\\d{4})(\\d{4})","$2 15-$3-$4",["911"],null,null,"$1 $2 $3-$4"],["(9)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],null,null,"$1 $2 $3-$4"],["(9)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9[23]"],null,null,"$1 $2 $3-$4"],["(11)(\\d{4})(\\d{4})","$1 $2-$3",["11"],null,"true"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],null,"true"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],null,"true"]],"0","0$1","0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?","9$1"],"AS":["1","[5689]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"684"],"AT":["43","[1-9]\\d{3,12}",[["(116\\d{3})","$1",["116"],"$1"],["(1)(\\d{3,12})","$1 $2",["1"]],["(5\\d)(\\d{3,5})","$1 $2",["5[079]"]],["(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"]],["(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"]],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]],["(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]],"0","0$1"],"AU":["61","1\\d{4,9}|[2-578]\\d{8}",[["([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\d{3})","$1 $2",["180","1802"]],["(19\\d)(\\d{3})","$1 $2",["19[13]"]],["(19\\d{2})(\\d{4})","$1 $2",["19[679]"]],["(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}","14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}","180(?:0\\d{3}|2)\\d{3}","19(?:0[0126]\\d|[679])\\d{5}","500\\d{6}",null,null,"16\\d{3,7}","550\\d{6}","13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"]],"AW":["297","[25-9]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"AX":["358","1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}",[["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\d{3})","$1",["75[12]"]],["(116\\d{3})","$1",["116"],"$1"],["(\\d{2})(\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\d)(\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0",null,null,null,null,null,["18[1-8]\\d{3,9}","4\\d{5,10}|50\\d{4,8}","800\\d{4,7}","[67]00\\d{5,6}",null,null,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})"]],"AZ":["994","[1-9]\\d{8}",[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2(?:[0-36]|[45]2)|365"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],"0","(0$1)"],"BA":["387","[3-9]\\d{7,8}",[["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6[047]"]]],"0","0$1"],"BB":["1","[2589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"246"],"BD":["880","[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}",[["(2)(\\d{7,8})","$1-$2",["2"]],["(\\d{2})(\\d{4,6})","$1-$2",["[3-79]1"]],["(\\d{4})(\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]],["(\\d{3})(\\d{3,7})","$1-$2",["[3-79][2-9]|8"]]],"0","0$1"],"BE":["32","[1-9]\\d{7,8}",[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[6-9]"]],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"]]],"0","0$1"],"BF":["226","[25-7]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"BG":["359","[23567]\\d{5,7}|[489]\\d{6,8}",[["(2)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"]],["(2)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"]],["(\\d{3})(\\d{4})","$1 $2",["43[124-7]|70[1-9]"]],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[78]00"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["99[69]"]],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"]]],"0","0$1"],"BH":["973","[136-9]\\d{7}",[["(\\d{4})(\\d{4})","$1 $2"]]],"BI":["257","[267]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"BJ":["229","[2689]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"]]]],"BL":["590","[56]\\d{8}",[["([56]\\d{2})(\\d{2})(\\d{4})","$1 $2-$3",["590|69[01]"]]],"0",null,null,null,null,null,["590(?:2[7-9]|5[12]|87)\\d{4}","69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],"BM":["1","[4589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"441"],"BN":["673","[2-578]\\d{6}",[["([2-578]\\d{2})(\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","[23467]\\d{7}|8\\d{8}",[["([234])(\\d{7})","$1 $2",["[2-4]"]],["([67]\\d{7})","$1",["[67]"]],["(800)(\\d{2})(\\d{4})","$1 $2 $3",["800"]]],"0",null,"0(1\\d)?"],"BQ":["599","[347]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2",["[13-7]"]],["(9)(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}","(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]],"BR":["55","[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))",[["(\\d{4})(\\d{4})","$1-$2",["300|40[02]","300|40(?:0|20)"]],["([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)"]],"0",null,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],"BS":["1","[2589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"242"],"BT":["975","[1-8]\\d{6,7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1|77"]],["([2-8])(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]]],"BW":["267","[2-79]\\d{6,7}",[["(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],["(7\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(90)(\\d{5})","$1 $2",["90"]]]],"BY":["375","[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}",[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["([89]\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],["(82\\d)(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1"],["(800)(\\d{3})","$1 $2",["800"],"8 $1"],["(800)(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],"8",null,"8?0?"],"BZ":["501","[2-8]\\d{6}|0\\d{10}",[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(0)(800)(\\d{4})(\\d{3})","$1-$2-$3-$4",["080","0800"]]]],"CA":["1","[2-9]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,null,["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}","900[2-9]\\d{6}","5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],"CC":["61","[1458]\\d{5,9}",[["([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\d{3})","$1 $2",["180","1802"]],["(19\\d)(\\d{3})","$1 $2",["19[13]"]],["(19\\d{2})(\\d{4})","$1 $2",["19[679]"]],["(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}","14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}","180(?:0\\d{3}|2)\\d{3}","19(?:0[0126]\\d|[679])\\d{5}","500\\d{6}",null,null,null,"550\\d{6}","13(?:00\\d{2})?\\d{4}"]],"CD":["243","[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}",[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["12"]],["([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[0-2459]|9"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"]],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"]]],"0","0$1"],"CF":["236","[278]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"CG":["242","[028]\\d{8}",[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["801"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["800"]]]],"CH":["41","[2-9]\\d{8}|860\\d{9}",[["([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"]],["([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["860"]]],"0","0$1"],"CI":["225","[02-8]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"CK":["682","[2-8]\\d{4}",[["(\\d{2})(\\d{3})","$1 $2"]]],"CL":["56","1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}",[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)"],["(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"]],["(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["[68]00"],"$1"],["(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["600"],"$1"],["(1230)(\\d{3})(\\d{4})","$1 $2 $3",["123","1230"],"$1"],["(\\d{5})(\\d{4})","$1 $2",["219"],"($1)"]],"0","0$1","0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"],"CM":["237","[2368]\\d{7,8}",[["([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|88"]]]],"CN":["86","[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",[["([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d\\d[19]","[3-9]\\d\\d(?:10|9[56])"],"0$1"],["(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","true"],["([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","true"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","true"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","true"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","true"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1(?:[3-57-9]|66)"]],["(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],["(\\d{3})(\\d{7,8})","$1 $2",["950"]]],"0",null,"(1(?:[129]\\d{3}|79\\d{2}))|0"],"CO":["57","(?:[13]\\d{0,3}|[24-8])\\d{7}",[["(\\d)(\\d{7})","$1 $2",["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]","1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3"]],["(1)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1",null,"$1 $2 $3"]],"0",null,"0([3579]|4(?:44|56))?"],"CR":["506","[24-9]\\d{7,9}",[["(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]0"]]],null,null,"(19(?:0[012468]|1[09]|20|66|77|99))"],"CU":["53","[2-57]\\d{5,7}",[["(\\d)(\\d{6,7})","$1 $2",["7"]],["(\\d{2})(\\d{4,6})","$1 $2",["[2-4]"]],["(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],"0","(0$1)"],"CV":["238","[259]\\d{6}",[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]]],"CW":["599","[134679]\\d{6,7}",[["(\\d{3})(\\d{4})","$1 $2",["[13-7]"]],["(9)(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,["9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}","9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",null,null,null,null,null,"955\\d{5}",null,"60[0-2]\\d{4}"]],"CX":["61","[1458]\\d{5,9}",[["([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\d{3})","$1 $2",["180","1802"]],["(19\\d)(\\d{3})","$1 $2",["19[13]"]],["(19\\d{2})(\\d{4})","$1 $2",["19[679]"]],["(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}","14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}","180(?:0\\d{3}|2)\\d{3}","19(?:0[0126]\\d|[679])\\d{5}","500\\d{6}",null,null,null,"550\\d{6}","13(?:00\\d{2})?\\d{4}"]],"CY":["357","[257-9]\\d{7}",[["(\\d{2})(\\d{6})","$1 $2"]]],"CZ":["420","[2-8]\\d{8}|9\\d{8,11}",[["([2-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(96\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["96"]],["(9\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9[36]"]]]],"DE":["49","[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",[["(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"]],["(15\\d{3})(\\d{6})","$1 $2",["15[0568]"]],["(1\\d{3})(\\d{7})","$1 $2",["15"]],["(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"]],["(\\d{3})(\\d{3,11})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]],["(3\\d{4})(\\d{1,10})","$1 $2",["3"]],["(800)(\\d{7,12})","$1 $2",["800"]],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:37|80)|900","1(?:37|80)|900[1359]"]],["(1\\d{2})(\\d{5,11})","$1 $2",["181"]],["(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"]],["(18\\d{2})(\\d{7})","$1 $2",["18[68]"]],["(18\\d)(\\d{8})","$1 $2",["18[2-579]"]],["(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"]],["(138)(\\d{4})","$1 $2",["138"]],["(15[013-68])(\\d{2})(\\d{8})","$1 $2 $3",["15[013-68]"]],["(15[279]\\d)(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"]],["(1[67]\\d)(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"]]],"0","0$1"],"DJ":["253","[27]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"DK":["45","[2-9]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"DM":["1","[57-9]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"767"],"DO":["1","[589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"8[024]9"],"DZ":["213","(?:[1-4]|[5-9]\\d)\\d{7}",[["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"]],["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"]],["(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"]]],"0","0$1"],"EC":["593","1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],null,null,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["180","1800"],"$1"]],"0","(0$1)"],"EE":["372","[3-9]\\d{6,7}|800\\d{6,7}",[["([3-79]\\d{2})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],["(70)(\\d{2})(\\d{4})","$1 $2 $3",["70"]],["(8000)(\\d{3})(\\d{3})","$1 $2 $3",["800","8000"]],["([458]\\d{3})(\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]]],"EG":["20","1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}",[["(\\d)(\\d{7,8})","$1 $2",["[23]"]],["(\\d{2})(\\d{6,7})","$1 $2",["1(?:3|5[239])|[4-6]|[89][2-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1[0-25]|[89]00"]]],"0","0$1"],"EH":["212","[5-9]\\d{8}",[["([5-7]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\d{3})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0",null,null,null,null,"528[89]"],"ER":["291","[178]\\d{6}",[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3"]],"0","0$1"],"ES":["34","[5-9]\\d{8}",[["([89]00)(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]]],"ET":["251","[1-59]\\d{8}",[["([1-59]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"]]],"0","0$1"],"FI":["358","1\\d{4,11}|[2-9]\\d{4,10}",[["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\d{3})","$1",["75[12]"]],["(116\\d{3})","$1",["116"],"$1"],["(\\d{2})(\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\d)(\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0","0$1",null,null,null,null,["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}","4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}","800\\d{4,7}","[67]00\\d{5,6}",null,null,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})"]],"FJ":["679","[2-9]\\d{6}|0\\d{10}",[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]]],"FK":["500","[2-7]\\d{4}"],"FM":["691","[39]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"FO":["298","[2-9]\\d{5}",[["(\\d{6})","$1"]],null,null,"(10(?:01|[12]0|88))"],"FR":["33","[1-9]\\d{8}",[["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"]],["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],"0","0$1"],"GA":["241","0?\\d{7}",[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]]],"GB":["44","\\d{7,10}",[["(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\d{3})(\\d{5,6})","$1 $2",["1"]],["(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"]],["(800)(\\d{6})","$1 $2",["800"]]],"0","0$1",null,null,null,null,["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}","7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}","80(?:0(?:1111|\\d{6,7})|8\\d{7})","(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}","70\\d{8}",null,"(?:3[0347]|55)\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","56\\d{8}","8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],"GD":["1","[4589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"473"],"GE":["995","[34578]\\d{8}",[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"]]],"0"],"GF":["594","[56]\\d{8}",[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"GG":["44","[135789]\\d{6,9}",[["(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\d{3})(\\d{5,6})","$1 $2",["1"]],["(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"]],["(800)(\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1481[25-9]\\d{5}","7(?:781\\d|839\\d|911[17])\\d{5}","80(?:0(?:1111|\\d{6,7})|8\\d{7})","(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}","70\\d{8}",null,"(?:3[0347]|55)\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","56\\d{8}","8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],"GH":["233","[235]\\d{8}|8\\d{7}",[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{5})","$1 $2",["8"]]],"0","0$1"],"GI":["350","[256]\\d{7}",[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],"GL":["299","[1-689]\\d{5}",[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]]],"GM":["220","[2-9]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"GN":["224","[367]\\d{7,8}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","[56]\\d{8}",[["([56]\\d{2})(\\d{2})(\\d{4})","$1 $2-$3",["590|69[01]"]]],"0","0$1",null,null,null,null,["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}","69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],"GQ":["240","[23589]\\d{8}",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],"GR":["30","[26-9]\\d{9}",[["([27]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],["(2\\d{3})(\\d{6})","$1 $2",["2[2-9][02-9]"]]]],"GT":["502","[2-7]\\d{7}|1[89]\\d{9}",[["(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","[5689]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"671"],"GW":["245","(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["44|9[5-7]"]],["(\\d{3})(\\d{4})","$1 $2",["40"]]]],"GY":["592","[2-46-9]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"HK":["852","[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}",[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|[89](?:0[1-9]|[1-9])"]],["(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"]],["(900)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["900"]],["(900)(\\d{2,5})","$1 $2",["900"]]]],"HN":["504","[237-9]\\d{7}",[["(\\d{4})(\\d{4})","$1-$2"]]],"HR":["385","[1-7]\\d{5,8}|[89]\\d{6,8}",[["(1)(\\d{4})(\\d{3})","$1 $2 $3",["1"]],["([2-5]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"]],["(9\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["9"]],["(6[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"]],["([67]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"]],["(80[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["80[01]"]],["(80[01])(\\d{3})(\\d{3})","$1 $2 $3",["80[01]"]]],"0","0$1"],"HT":["509","[2-489]\\d{7}",[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3"]]],"HU":["36","[1-9]\\d{7,8}",[["(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"]]],"06","($1)"],"ID":["62","(?:[1-79]\\d{6,10}|8\\d{7,11})",[["(\\d{2})(\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,8})","$1 $2",["2[035-9]|[36][02-9]|[4579]"],"(0$1)"],["(8\\d{2})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"]],["(8\\d{2})(\\d{4})(\\d{4,5})","$1-$2-$3",["8[1-35-9]"]],["(1)(500)(\\d{3})","$1 $2 $3",["150","1500"],"$1"],["(177)(\\d{6,8})","$1 $2",["177"]],["(800)(\\d{5,7})","$1 $2",["800"]],["(804)(\\d{3})(\\d{4})","$1 $2 $3",["804"]],["(80\\d)(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80[79]"]]],"0","0$1"],"IE":["353","[124-9]\\d{6,9}",[["(1)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"]],["(\\d{3})(\\d{5})","$1 $2",["40[24]|50[45]"]],["(48)(\\d{4})(\\d{4})","$1 $2 $3",["48"]],["(818)(\\d{3})(\\d{3})","$1 $2 $3",["818"]],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],["(8\\d)(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8[35-9]5"],"0$1"],["(700)(\\d{3})(\\d{3})","$1 $2 $3",["700"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:5|8[059])","1(?:5|8[059]0)"],"$1"]],"0","(0$1)"],"IL":["972","1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}",[["([2-489])(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["([57]\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(153)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["153"]],["(1)([7-9]\\d{2})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(1255)(\\d{3})","$1-$2",["125","1255"]],["(1200)(\\d{3})(\\d{3})","$1-$2-$3",["120","1200"]],["(1212)(\\d{2})(\\d{2})","$1-$2-$3",["121","1212"]],["(1599)(\\d{6})","$1-$2",["159","1599"]],["(151)(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["151"]],["(\\d{4})","*$1",["[2-689]"]]],"0"],"IM":["44","[135789]\\d{6,9}",[["(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\d{3})(\\d{5,6})","$1 $2",["1"]],["(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"]],["(800)(\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1624[5-8]\\d{5}","7(?:4576|[59]24\\d|624[0-4689])\\d{5}","808162\\d{4}","(?:872299|90[0167]624)\\d{4}","70\\d{8}",null,"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",null,"56\\d{8}","8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]],"IN":["91","008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}",[["(\\d{8})","$1",["561","5616","56161"],"$1"],["(\\d{5})(\\d{5})","$1 $2",["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9","6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"]],["(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["008"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],"$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["160","1600"],"$1"],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],"$1"],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["180","1800"],"$1"],["(\\d{4})(\\d{3,4})(\\d{4})","$1 $2 $3",["186","1860"],"$1"],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18[06]"],"$1"]],"0","0$1",null,null,true],"IO":["246","3\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"IQ":["964","[1-7]\\d{7,9}",[["(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["([2-6]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"]],["(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"IR":["98","[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})",[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"]],["(\\d{2})(\\d{4,5})","$1 $2",["[1-8]"]],["(\\d{4,5})","$1",["96"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"]]],"0","0$1"],"IS":["354","[4-9]\\d{6}|38\\d{7}",[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(3\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]]],"IT":["39","[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",[["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\d{4,6})","$1 $2",["0[26]"]],["(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\d{4})(\\d{4})","$1 $2",["894","894[5-9]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,["0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})","3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})","80(?:0\\d{6}|3\\d{3})","0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})","1(?:78\\d|99)\\d{6}",null,null,null,"55\\d{8}","84(?:[08]\\d{6}|[17]\\d{3})"]],"JE":["44","[135789]\\d{6,9}",[["(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\d{3})(\\d{5,6})","$1 $2",["1"]],["(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"]],["(800)(\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1534[0-24-8]\\d{5}","7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}","80(?:07(?:35|81)|8901)\\d{4}","(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}","701511\\d{4}",null,"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}","56\\d{8}","8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]],"JM":["1","[589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"876"],"JO":["962","[235-9]\\d{7,8}",[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(7)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"]],["(\\d{2})(\\d{7})","$1 $2",["70"]],["(\\d{3})(\\d{5,6})","$1 $2",["8[0158]|9"]]],"0","0$1"],"JP":["81","[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})",[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"]],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"]],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"]],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"]]],"0","0$1"],"KE":["254","20\\d{6,7}|[4-9]\\d{6,9}",[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"]],["(\\d{3})(\\d{6})","$1 $2",["7"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"]]],"0","0$1","005|0"],"KG":["996","[235-8]\\d{8,9}",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[25-7]|31[25]"]],["(\\d{4})(\\d{5})","$1 $2",["3(?:1[36]|[2-9])"]],["(\\d{3})(\\d{3})(\\d)(\\d{3})","$1 $2 $3 $4",["8"]]],"0","0$1"],"KH":["855","[1-9]\\d{7,9}",[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["1\\d[1-9]|[2-9]"],"0$1"],["(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0","1[89]00"]]],"0"],"KI":["686","[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}",[],null,null,"0"],"KM":["269","[3478]\\d{6}",[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]]],"KN":["1","[589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"869"],"KP":["850","1\\d{9}|[28]\\d{7}",[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],"0","0$1"],"KR":["82","00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}",[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"]],["(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"],"$1"],["(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60[2-9]|80"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]0"]]],"0","0$1","0(8[1-46-8]|85\\d{2})?"],"KW":["965","[12569]\\d{6,7}",[["(\\d{4})(\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]],["(\\d{3})(\\d{5})","$1 $2",["244|5(?:[015]|6[56])"]]]],"KY":["1","[3589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"345"],"KZ":["7","(?:33\\d|7\\d{2}|80[089])\\d{7}",[["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"]]],"8",null,null,null,null,null,["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}","7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}","800\\d{7}","809\\d{7}","808\\d{7}",null,null,null,"751\\d{7}"]],"LA":["856","[2-8]\\d{7,9}",[["(20)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["20"]],["([2-8]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"]],["(30)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30"]]],"0","0$1"],"LB":["961","[13-9]\\d{6,7}",[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["([7-9]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]],"0"],"LC":["1","[5789]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"758"],"LI":["423","6\\d{8}|[23789]\\d{6}",[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[237-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[56]"]],["(69)(7\\d{2})(\\d{4})","$1 $2 $3",["697"]]],"0",null,"0|10(?:01|20|66)"],"LK":["94","[1-9]\\d{8}",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"LR":["231","2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}",[["(2\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["([4-5])(\\d{3})(\\d{3})","$1 $2 $3",["[45]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"]]],"0","0$1"],"LS":["266","[2568]\\d{7}",[["(\\d{4})(\\d{4})","$1 $2"]]],"LT":["370","[3-9]\\d{7}",[["([34]\\d)(\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"]],["([3-6]\\d{2})(\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"]],["([7-9]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1"],["(5)(2\\d{2})(\\d{4})","$1 $2 $3",["52[0-79]"]]],"8","(8-$1)","[08]",null,true],"LU":["352","[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})",[["(\\d{2})(\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["70|80[01]|90[015]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],null,null,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"],"LV":["371","[2689]\\d{7}",[["([2689]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2689]"]]]],"LY":["218","[25679]\\d{8}",[["([25-79]\\d)(\\d{7})","$1-$2",["[25-79]"]]],"0","0$1"],"MA":["212","[5-9]\\d{8}",[["([5-7]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\d{3})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0","0$1",null,null,null,null,["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}","(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}","80\\d{7}","89\\d{7}",null,null,null,null,"5924[01]\\d{4}"]],"MC":["377","[34689]\\d{7,8}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"]],["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"]],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"],"$1"]],"0","0$1"],"MD":["373","[235-9]\\d{7}",[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"]],["([25-7]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"]],["([89]\\d{2})(\\d{5})","$1 $2",["[89]"]]],"0","0$1"],"ME":["382","[2-9]\\d{7,8}",[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]"]]],"0","0$1"],"MF":["590","[56]\\d{8}",[["([56]\\d{2})(\\d{2})(\\d{4})","$1 $2-$3",["590|69[01]"]]],"0",null,null,null,null,null,["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}","69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],"MG":["261","[23]\\d{8}",[["([23]\\d)(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"]]],"0","0$1"],"MH":["692","[2-6]\\d{6}",[["(\\d{3})(\\d{4})","$1-$2"]],"1"],"MK":["389","[2-578]\\d{7}",[["(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"]],["([347]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[347]"]],["([58]\\d{2})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"]]],"0","0$1"],"ML":["223","[246-9]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"]]]],"MM":["95","[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}",[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["1|2[245]"]],["(2)(\\d{4})(\\d{4})","$1 $2 $3",["251"]],["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"]],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["432|67|81"]],["(\\d{2})(\\d{2})(\\d{3,4})","$1 $2 $3",["[4-8]"]],["(9)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"]],["(9)([34]\\d{4})(\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"]],["(9)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92[56]"]],["(9)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["93"]]],"0","0$1"],"MN":["976","[12]\\d{7,9}|[57-9]\\d{7}",[["([12]\\d)(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"]],["([12]2\\d)(\\d{5,6})","$1 $2",["[12]2[1-3]"]],["([12]\\d{3})(\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)2"]],["(\\d{4})(\\d{4})","$1 $2",["[57-9]"],"$1"],["([12]\\d{4})(\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)[4-9]"]]],"0","0$1"],"MO":["853","[268]\\d{7}",[["([268]\\d{3})(\\d{4})","$1 $2",["[268]"]]]],"MP":["1","[5689]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"670"],"MQ":["596","[56]\\d{8}",[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"MR":["222","[2-48]\\d{7}",[["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","[5689]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"664"],"MT":["356","[2357-9]\\d{7}",[["(\\d{4})(\\d{4})","$1 $2"]]],"MU":["230","[2-9]\\d{6,7}",[["([2-46-9]\\d{2})(\\d{4})","$1 $2",["[2-46-9]"]],["(5\\d{3})(\\d{4})","$1 $2",["5"]]]],"MV":["960","[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})",[["(\\d{3})(\\d{4})","$1-$2",["[3467]|9(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]]]],"MW":["265","(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}",[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[17-9]"]]],"0","0$1"],"MX":["52","[1-9]\\d{9,10}",[["([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]],["(1)([358]\\d)(\\d{4})(\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",null,"$1 $2 $3 $4"],["(1)(\\d{3})(\\d{3})(\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",null,"$1 $2 $3 $4"]],"01","01 $1","0[12]|04[45](\\d{10})","1$1",true],"MY":["60","[13-9]\\d{7,9}",[["([4-79])(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(3)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["([18]\\d)(\\d{3})(\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],["(1)([36-8]00)(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]0","1[36-8]00"]],["(11)(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1"],["(15[49])(\\d{3})(\\d{4})","$1-$2 $3",["15[49]"],"0$1"]],"0"],"MZ":["258","[28]\\d{7,8}",[["([28]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],["(80\\d)(\\d{3})(\\d{3})","$1 $2 $3",["80"]]]],"NA":["264","[68]\\d{7,8}",[["(8\\d)(\\d{3})(\\d{4})","$1 $2 $3",["8[1-35]"]],["(6\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["6"]],["(88)(\\d{3})(\\d{3})","$1 $2 $3",["88"]],["(870)(\\d{3})(\\d{3})","$1 $2 $3",["870"]]],"0","0$1"],"NC":["687","[2-57-9]\\d{5}",[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]]],"NE":["227","[0289]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["09|[289]"]],["(08)(\\d{3})(\\d{3})","$1 $2 $3",["08"]]]],"NF":["672","[13]\\d{5}",[["(\\d{2})(\\d{4})","$1 $2",["1"]],["(\\d)(\\d{5})","$1 $2",["3"]]]],"NG":["234","[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"]],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"]],["([78]00)(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]00"]],["([78]00)(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]00"]],["(78)(\\d{2})(\\d{3})","$1 $2 $3",["78"]]],"0","0$1"],"NI":["505","[125-8]\\d{7}",[["(\\d{4})(\\d{4})","$1 $2"]]],"NL":["31","1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",[["([1-578]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]],["([1-5]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]],["(6)(\\d{8})","$1 $2",["6[0-57-9]"]],["(66)(\\d{7})","$1 $2",["66"]],["(14)(\\d{3,4})","$1 $2",["14"],"$1"],["([89]0\\d)(\\d{4,7})","$1 $2",["[89]0"]]],"0","0$1"],"NO":["47","0\\d{4}|[2-9]\\d{7}",[["([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}","(?:4[015-8]|5[89]|87|9\\d)\\d{6}","80[01]\\d{5}","82[09]\\d{5}","880\\d{5}",null,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",null,"85[0-5]\\d{5}","810(?:0[0-6]|[2-8]\\d)\\d{3}"]],"NP":["977","[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})",[["(1)(\\d{7})","$1-$2",["1[2-6]"]],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]],["(9\\d{2})(\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],"0","0$1"],"NR":["674","[458]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"NU":["683","[1-5]\\d{3}"],"NZ":["64","6[235-9]\\d{6}|[2-57-9]\\d{7,9}",[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["240|[346]|7[2-57-9]|9[1-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["21"]],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]],["(2\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["90"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"]]],"0","0$1"],"OM":["968","(?:5|[279]\\d)\\d{6}|800\\d{5,6}",[["(2\\d)(\\d{6})","$1 $2",["2"]],["([79]\\d{3})(\\d{4})","$1 $2",["[79]"]],["([58]00)(\\d{4,6})","$1 $2",["[58]00"]]]],"PA":["507","[1-9]\\d{6,7}",[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["6"]]]],"PE":["51","[14-9]\\d{7,8}",[["(1)(\\d{7})","$1 $2",["1"]],["([4-8]\\d)(\\d{6})","$1 $2",["[4-7]|8[2-4]"]],["(\\d{3})(\\d{5})","$1 $2",["80"]],["(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"$1"]],"0","(0$1)"],"PF":["689","4\\d{5,7}|8\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]]]],"PG":["675","[1-9]\\d{6,7}",[["(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"]],["(\\d{4})(\\d{4})","$1 $2",["20|7"]]]],"PH":["63","1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}",[["(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(2)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["([3-8]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["81|9"],"0$1"],["(1800)(\\d{3})(\\d{4})","$1 $2 $3",["180","1800"]],["(1800)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["180","1800"]]],"0"],"PK":["92","1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))",[["([89]00)(\\d{3})(\\d{2})","$1 $2 $3",["[89]00"],"0$1"],["(1\\d{3})(\\d{5})","$1 $2",["1"],"$1"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]],["(\\d{3})(\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-469]","(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]],["(58\\d{3})(\\d{5})","$1 $2",["58[126]"]],["(3\\d{2})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]],["(\\d{3})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]],"0","(0$1)"],"PL":["48","[1-57-9]\\d{6,8}|6\\d{5,8}",[["(\\d{3})(\\d{3})","$1 $2",["11[68]|64"]],["(\\d{5})","$1",["19"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]],"PM":["508","[45]\\d{5}",[["([45]\\d)(\\d{2})(\\d{2})","$1 $2 $3",["[45]"]]],"0","0$1"],"PR":["1","[5789]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"787|939"],"PS":["970","1\\d{9}|[24589]\\d{7,8}",[["([2489])(2\\d{2})(\\d{4})","$1 $2 $3",["[2489]2"]],["(5[69]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["5[69]"]],["(1[78]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[78]0","1[78]00"],"$1"]],"0","0$1"],"PT":["351","[2-46-9]\\d{8}",[["(2\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["([2-46-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]]],"PW":["680","[2-8]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"PY":["595","5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}",[["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["9[1-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["870","8700"]],["(\\d{3})(\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],"0"],"QA":["974","[2-8]\\d{6,7}",[["([28]\\d{2})(\\d{4})","$1 $2",["[28]"]],["([3-7]\\d{3})(\\d{4})","$1 $2",["[3-7]"]]]],"RE":["262","[268]\\d{8}",[["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"]]],"0","0$1",null,null,null,"262|69|8"],"RO":["40","[23]\\d{5,8}|[7-9]\\d{8}",[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"]],["(\\d{2})(\\d{4})","$1 $2",["[23]1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"]],["(2\\d{2})(\\d{3})","$1 $2",["2[3-6]"]]],"0","0$1"],"RS":["381","[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",[["([23]\\d{2})(\\d{4,9})","$1 $2",["(?:2[389]|39)0"]],["([1-3]\\d)(\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]],["(6\\d)(\\d{6,8})","$1 $2",["6"]],["([89]\\d{2})(\\d{3,9})","$1 $2",["[89]"]],["(7[26])(\\d{4,9})","$1 $2",["7[26]"]],["(7[08]\\d)(\\d{4,9})","$1 $2",["7[08]"]]],"0","0$1"],"RU":["7","[347-9]\\d{9}",[["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"]]],"8","8 ($1)",null,null,true,null,["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}","9\\d{9}","80[04]\\d{7}","80[39]\\d{7}","808\\d{7}"]],"RW":["250","[027-9]\\d{7,8}",[["(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["([7-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(0\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],"0"],"SA":["966","1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",[["([1-467])(\\d{3})(\\d{4})","$1 $2 $3",["[1-467]"]],["(1\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[1-467]"]],["(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"]],["(92\\d{2})(\\d{5})","$1 $2",["92"],"$1"],["(800)(\\d{3})(\\d{4})","$1 $2 $3",["800"],"$1"],["(811)(\\d{3})(\\d{3,4})","$1 $2 $3",["811"]]],"0","0$1"],"SB":["677","[1-9]\\d{4,6}",[["(\\d{2})(\\d{5})","$1 $2",["[7-9]"]]]],"SC":["248","[24689]\\d{5,6}",[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]]],"SD":["249","[19]\\d{8}",[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3"]],"0","0$1"],"SE":["46","[1-35-9]\\d{5,11}|4\\d{6,8}",[["(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1-$2 $3 $4",["8"],null,null,"$1 $2 $3 $4"],["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],null,null,"$1 $2 $3 $4"],["([1-469]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90"],null,null,"$1 $2 $3"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3"],["(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],null,null,"$1 $2 $3 $4"],["(77)(\\d{2})(\\d{2})","$1-$2$3",["77"],null,null,"$1 $2 $3"],["(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],null,null,"$1 $2 $3"],["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"],null,null,"$1 $2 $3 $4"],["(9[034]\\d)(\\d{4})","$1-$2",["9[034]"],null,null,"$1 $2"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],null,null,"$1 $2 $3 $4 $5"]],"0","0$1"],"SG":["65","[36]\\d{7}|[17-9]\\d{7,10}",[["([3689]\\d{3})(\\d{4})","$1 $2",["[369]|8[1-9]"]],["(1[89]00)(\\d{3})(\\d{4})","$1 $2 $3",["1[89]0","1[89]00"]],["(7000)(\\d{4})(\\d{3})","$1 $2 $3",["700","7000"]],["(800)(\\d{3})(\\d{4})","$1 $2 $3",["800"]]]],"SH":["290","[256]\\d{4}|8\\d{3}",[],null,null,null,null,null,null,["2(?:[0-57-9]\\d|6[4-9])\\d{2}","[56]\\d{4}",null,null,null,null,null,null,"262\\d{2}"]],"SI":["386","[1-7]\\d{6,7}|[89]\\d{4,7}",[["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|[34][24-8]|5[2-8]|7[3-8]"],"(0$1)"],["([3-7]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"]],["([89][09])(\\d{3,6})","$1 $2",["[89][09]"]],["([58]\\d{2})(\\d{5})","$1 $2",["59|8[1-3]"]]],"0","0$1"],"SJ":["47","0\\d{4}|[45789]\\d{7}",[["([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,["79\\d{6}","(?:4[015-8]|5[89]|9\\d)\\d{6}","80[01]\\d{5}","82[09]\\d{5}","880\\d{5}",null,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",null,"85[0-5]\\d{5}","810(?:0[0-6]|[2-8]\\d)\\d{3}"]],"SK":["421","(?:[2-68]\\d{5,8}|9\\d{6,8})",[["(2)(1[67])(\\d{3,4})","$1 $2 $3",["21[67]"]],["([3-5]\\d)(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5]"]],["(2)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"]],["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"]],["([689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"]],["(9090)(\\d{3})","$1 $2",["909","9090"]]],"0","0$1"],"SL":["232","[2-9]\\d{7}",[["(\\d{2})(\\d{6})","$1 $2"]],"0","(0$1)"],"SM":["378","[05-7]\\d{7,9}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(0549)(\\d{6})","$1 $2",["054","0549"],null,null,"($1) $2"],["(\\d{6})","0549 $1",["[89]"],null,null,"(0549) $1"]],null,null,"([89]\\d{5})","0549$1"],"SN":["221","[3789]\\d{8}",[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],"SO":["252","[1-9]\\d{5,8}",[["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[13-5]|2[0-79]"]],["(\\d)(\\d{7})","$1 $2",["24|[67]"]],["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{2})(\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],"0"],"SR":["597","[2-8]\\d{5,6}",[["(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"]],["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","[19]\\d{8}",[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",null,"0$1"]],"0"],"ST":["239","[29]\\d{6}",[["(\\d{3})(\\d{4})","$1 $2"]]],"SV":["503","[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",[["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","[5789]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"721"],"SY":["963","[1-59]\\d{7,8}",[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"]],["(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0","0$1",null,null,true],"SZ":["268","[027]\\d{7}",[["(\\d{4})(\\d{4})","$1 $2",["[027]"]]]],"TA":["290","8\\d{3}",[],null,null,null,null,null,null,["8\\d{3}"]],"TC":["1","[5689]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"649"],"TD":["235","[2679]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]]],"TG":["228","[279]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","1\\d{8,9}|[2-9]\\d{7,8}",[["(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"]],["([13-9]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"]],["(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0","1[89]00"],"$1"]],"0","0$1"],"TJ":["992","[3-57-9]\\d{8}",[["([349]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["([457-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:[0235-9]|1[59])"]],["(331700)(\\d)(\\d{2})","$1 $2 $3",["331","3317","33170","331700"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"]]],"8",null,null,null,true],"TK":["690","[2-47]\\d{3,6}"],"TL":["670","[2-489]\\d{6}|7\\d{6,7}",[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7[3-8]"]]]],"TM":["993","[1-6]\\d{7}",[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"]],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["13|[2-5]"]]],"8","(8 $1)"],"TN":["216","[2-57-9]\\d{7}",[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3"]]],"TO":["676","[02-8]\\d{4,6}",[["(\\d{2})(\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"]],["(\\d{3})(\\d{4})","$1 $2",["7[5-9]|8[47-9]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]]]],"TR":["90","[2-589]\\d{9}|444\\d{4}",[["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[02-69]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["51|[89]"],"0$1"],["(444)(\\d{1})(\\d{3})","$1 $2 $3",["444"]]],"0",null,null,null,true],"TT":["1","[589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"868"],"TV":["688","[279]\\d{4,6}"],"TW":["886","2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}",[["(20)(\\d)(\\d{4})","$1 $2 $3",["202"]],["([258]0)(\\d{3})(\\d{4})","$1 $2 $3",["20[013-9]|50[0-46-9]|80[0-79]"]],["([2-8])(\\d{3,4})(\\d{4})","$1 $2 $3",["[25][2-8]|[346]|[78][1-9]"]],["(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"]],["(70)(\\d{4})(\\d{4})","$1 $2 $3",["70"]]],"0","0$1"],"TZ":["255","\\d{9}",[["([24]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[24]"]],["([67]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"]],["([89]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"]]],"0","0$1"],"UA":["380","[3-9]\\d{8}",[["([3-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]],["([3-689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]],["([3-6]\\d{3})(\\d{5})","$1 $2",["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])","3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]],"0","0$1"],"UG":["256","\\d{9}",[["(\\d{3})(\\d{6})","$1 $2",["20[0-8]|4(?:6[45]|[7-9])|[7-9]","20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]],["(\\d{2})(\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"]],["(2024)(\\d{5})","$1 $2",["202","2024"]]],"0","0$1"],"US":["1","[2-9]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,true,null,["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}",null,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}","900[2-9]\\d{6}","5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],"UY":["598","[2489]\\d{6,7}",[["(\\d{4})(\\d{4})","$1 $2",["[24]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["[89]0"],"0$1"]],"0"],"UZ":["998","[679]\\d{8}",[["([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"]]],"8","8 $1"],"VA":["39","(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",[["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\d{4,6})","$1 $2",["0[26]"]],["(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\d{4})(\\d{4})","$1 $2",["894","894[5-9]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,["06698\\d{5}","3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})","80(?:0\\d{6}|3\\d{3})","0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})","1(?:78\\d|99)\\d{6}",null,null,null,"55\\d{8}","84(?:[08]\\d{6}|[17]\\d{3})"]],"VC":["1","[5789]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"784"],"VE":["58","[24589]\\d{9}",[["(\\d{3})(\\d{7})","$1-$2"]],"0","0$1"],"VG":["1","[2589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"284"],"VI":["1","[3589]\\d{9}",[["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"340"],"VN":["84","1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}",[["([17]99)(\\d{4})","$1 $2",["[17]99"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"]],["(80)(\\d{5})","$1 $2",["80"]],["(69\\d)(\\d{4,5})","$1 $2",["69"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2[0-35-79]"]],["([89]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8(?:8|9[89])|9"]],["(1[2689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"]],["(86[89])(\\d{3})(\\d{3})","$1 $2 $3",["86[89]"]],["(1[89]00)(\\d{4,6})","$1 $2",["1[89]0","1[89]00"],"$1"]],"0","0$1",null,null,true],"VU":["678","[2-57-9]\\d{4,6}",[["(\\d{3})(\\d{4})","$1 $2",["[579]"]]]],"WF":["681","[4-8]\\d{5}",[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]]],"WS":["685","[2-8]\\d{4,6}",[["(8\\d{2})(\\d{3,4})","$1 $2",["8"]],["(7\\d)(\\d{5})","$1 $2",["7"]],["(\\d{5})","$1",["[2-6]"]]]],"YE":["967","[1-7]\\d{6,8}",[["([1-7])(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"]],["(7\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7[0137]"]]],"0","0$1"],"YT":["262","[268]\\d{8}",[["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"]]],"0",null,null,null,null,"269|63"],"ZA":["27","[1-79]\\d{8}|8\\d{4,8}",[["(860)(\\d{3})(\\d{3})","$1 $2 $3",["860"]],["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"]],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"]]],"0","0$1"],"ZM":["260","[289]\\d{8}",[["(\\d{2})(\\d{4})","$1 $2",null,"$1"],["([1-8])(\\d{2})(\\d{4})","$1 $2 $3",["[1-8]"],"$1"],["([29]\\d)(\\d{7})","$1 $2",["[29]"]],["(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"]]],"0","0$1"],"ZW":["263","2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}",[["([49])(\\d{3})(\\d{2,4})","$1 $2 $3",["4|9[2-9]"]],["(7\\d)(\\d{3})(\\d{4})","$1 $2 $3",["7"]],["(86\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["86[24]"]],["([2356]\\d{2})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]],["([1-356]\\d)(\\d{3,5})","$1 $2",["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]],["([235]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[23]9|54"]],["([25]\\d{3})(\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"]],["(8\\d{3})(\\d{6})","$1 $2",["86"]],["(80\\d)(\\d{4})","$1 $2",["80"]]],"0","0$1"],"001":["979","\\d{9}",[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]]]}};

/***/ }),

/***/ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js ***!
  \***************************************************************************/
/*! exports provided: Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownModule, DropdownStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownButton = /** @class */ (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    Ng2DropdownButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-button',
                    styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"],
                    template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    Ng2DropdownButton.propDecorators = {
        "onMenuToggled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "showCaret": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2DropdownButton;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var /** @type {?} */ onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var /** @type {?} */ ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownState = /** @class */ (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    Ng2DropdownState.prototype.select = /**
     * \@name selects a menu item and emits event
     * @param {?} item
     * @param {?=} dispatchEvent
     * @return {?}
     */
    function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownStateService = /** @class */ (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            toString: /**
             * @return {?}
             */
            function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    DropdownStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return DropdownStateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2MenuItem = /** @class */ (function () {
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    /**
     * @return {?}
     */
    Ng2MenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemDestroyed.emit(this);
    };
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = /**
     * \@name focus
     * @return {?}
     */
    function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    Ng2MenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-menu-item',
                    styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) /deep/ [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"],
                    template: "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    Ng2MenuItem.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2MenuItem.propDecorators = {
        "preventClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return Ng2MenuItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownMenu = /** @class */ (function () {
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @param {?=} dynamic
     * @return {?}
     */
    function (position, dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.state.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @param {?} dynamic {boolean}
     * @return {?}
     */
    function (position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = /**
     * \@name getMenuElement
     * @return {?}
     */
    function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @param {?=} dynamic
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updateOnChange = /**
     * @param {?=} dynamic
     * @return {?}
     */
    function (dynamic) {
        if (dynamic === void 0) { dynamic = true; }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top.toString());
            this.renderer.setElementStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
            this.state.dropdownState.select(this.items.first, false);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    Ng2DropdownMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown-menu',
                    styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host /deep/ .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
                    template: "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [style.z-index]=\"zIndex\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'block', opacity: 1, height: '*', width: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none', opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*', width: '*' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: 0, height: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('opacity', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1 }),
                                ]))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.5, offset: 0.3 }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1 }),
                                ]))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2DropdownMenu.ctorParameters = function () { return [
        { type: DropdownStateService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
    ]; };
    Ng2DropdownMenu.propDecorators = {
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "items": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Ng2MenuItem,] },],
    };
    return Ng2DropdownMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2Dropdown = /** @class */ (function () {
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
            var /** @type {?} */ newSelectedItem;
            var /** @type {?} */ items = _this.menu.items.toArray();
            if (item !== _this.state.dropdownState.selectedItem) {
                return;
            }
            if (_this.menu.focusFirstElement) {
                newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
            }
            _this.state.dropdownState.select(newSelectedItem);
        });
    };
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = /**
     * \@name scrollListener
     * @return {?}
     */
    function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    };
    Ng2Dropdown.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng2-dropdown',
                    template: "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n",
                    providers: [DropdownStateService]
                },] },
    ];
    /** @nocollapse */
    Ng2Dropdown.ctorParameters = function () { return [
        { type: DropdownStateService, },
    ]; };
    Ng2Dropdown.propDecorators = {
        "button": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownButton,] },],
        "menu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [Ng2DropdownMenu,] },],
        "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onItemClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onItemSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll',] },],
    };
    return Ng2Dropdown;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng2DropdownModule = /** @class */ (function () {
    function Ng2DropdownModule() {
    }
    Ng2DropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                        Ng2Dropdown
                    ],
                    declarations: [
                        Ng2Dropdown,
                        Ng2MenuItem,
                        Ng2DropdownButton,
                        Ng2DropdownMenu,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                },] },
    ];
    return Ng2DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLW1hdGVyaWFsLWRyb3Bkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS9hY3Rpb25zLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlLnRzIiwibmc6Ly9uZzItbWF0ZXJpYWwtZHJvcGRvd24vc3JjL21vZHVsZXMvc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZS50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0udHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL21lbnUvbmcyLWRyb3Bkb3duLW1lbnUudHMiLCJuZzovL25nMi1tYXRlcmlhbC1kcm9wZG93bi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL25nMi1kcm9wZG93bi50cyIsIm5nOi8vbmcyLW1hdGVyaWFsLWRyb3Bkb3duL3NyYy9tb2R1bGVzL25nMi1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT3V0cHV0LFxuICAgIElucHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1idXR0b24nLFxuICAgIHN0eWxlczogW2AubmcyLWRyb3Bkb3duLWJ1dHRvbntmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzouNDVyZW0gLjI1cmVtO2ZvbnQtc2l6ZToxNHB4O2xldHRlci1zcGFjaW5nOi4wOHJlbTtjb2xvcjojNDQ0O291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo0MDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VmZWZlZjt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjEwMHB4O3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzttYXgtd2lkdGg6MTUwcHh9Lm5nMi1kcm9wZG93bi1idXR0b246aG92ZXJ7Y29sb3I6IzIyMn0ubmcyLWRyb3Bkb3duLWJ1dHRvbjphY3RpdmUsLm5nMi1kcm9wZG93bi1idXR0b246Zm9jdXN7Y29sb3I6IzIyMjtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMjE5NmYzfS5uZzItZHJvcGRvd24tYnV0dG9uX19sYWJlbHtmbGV4OjEgMSA5NSV9Lm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0e3dpZHRoOjEycHg7aGVpZ2h0OjEycHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDYlfTpob3N0LWNvbnRleHQoLm5nMi1kcm9wZG93bi1idXR0b24tLWljb24pIC5uZzItZHJvcGRvd24tYnV0dG9ue2JvcmRlcjpub25lO21pbi13aWR0aDo0MHB4O3dpZHRoOjQwcHg7Ym9yZGVyLXJhZGl1czoxMDAlO3RyYW5zaXRpb246YWxsIC4yczt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NDBweDtwYWRkaW5nOi41ZW19Omhvc3QtY29udGV4dCgubmcyLWRyb3Bkb3duLWJ1dHRvbi0taWNvbikgLm5nMi1kcm9wZG93bi1idXR0b246YWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9YF0sXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPSduZzItZHJvcGRvd24tYnV0dG9uJyB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZU1lbnUoKVwiIHRhYmluZGV4PVwiMHNcIj5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2xhYmVsXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1kcm9wZG93bi1idXR0b25fX2NhcmV0XCIgKm5nSWY9XCJzaG93Q2FyZXRcIj5cbiAgICAgICAgPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMzIgMzJcIiBoZWlnaHQ9XCIxNnB4XCIgaWQ9XCLDkMKhw5DCu8OQwr7DkMK5XzFcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHdpZHRoPVwiMTZweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxwYXRoIGQ9XCJNMjQuMjg1LDExLjI4NEwxNiwxOS41NzFsLTguMjg1LTguMjg4Yy0wLjM5NS0wLjM5NS0xLjAzNC0wLjM5NS0xLjQyOSwwICBjLTAuMzk0LDAuMzk1LTAuMzk0LDEuMDM1LDAsMS40M2w4Ljk5OSw5LjAwMmwwLDBsMCwwYzAuMzk0LDAuMzk1LDEuMDM0LDAuMzk1LDEuNDI4LDBsOC45OTktOS4wMDIgIGMwLjM5NC0wLjM5NSwwLjM5NC0xLjAzNiwwLTEuNDMxQzI1LjMxOSwxMC44ODksMjQuNjc5LDEwLjg4OSwyNC4yODUsMTEuMjg0elwiIGZpbGw9XCIjMTIxMzEzXCIgaWQ9XCJFeHBhbmRfTW9yZVwiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25CdXR0b24ge1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25NZW51VG9nZ2xlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93Q2FyZXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdG9nZ2xlTWVudVxuICAgICAqIEBkZXNjIGVtaXRzIGV2ZW50IHRvIHRvZ2dsZSBtZW51XG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25NZW51VG9nZ2xlZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGdldFBvc2l0aW9uXG4gICAgICogQGRlc2MgcmV0dXJucyBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICovXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IENsaWVudFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi4vbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25NZW51IH0gZnJvbSAnLi9uZzItZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBOZzJEcm9wZG93blN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuY29uc3QgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDksXG4gICAgUFJFVjogMzgsXG4gICAgTkVYVDogNDAsXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjdcbn07XG5cbi8qKlxuICogQG5hbWUgb25Td2l0Y2hOZXh0XG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uU3dpdGNoTmV4dCA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBuYW1lIG9uU3dpdGNoUHJldlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvblN3aXRjaFByZXYgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbaW5kZXggLSAxXSwgdHJ1ZSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAbmFtZSBvbkJhY2tzcGFjZVxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gaXRlbXNcbiAqIEBwYXJhbSBzdGF0ZVxuICovXG5jb25zdCBvbkJhY2tzcGFjZSA9IChpbmRleDogbnVtYmVyLCBpdGVtczogTmcyTWVudUl0ZW1bXSwgc3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUpID0+IHtcbiAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdChpdGVtc1tpbmRleCArIDFdLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWxlY3QoaXRlbXNbMF0sIHRydWUpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9uRXNjYXBlKHRoaXM6IE5nMkRyb3Bkb3duTWVudSkge1xuICAgIHRoaXMuaGlkZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBvbkl0ZW1DbGlja2VkXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBpdGVtc1xuICogQHBhcmFtIHN0YXRlXG4gKi9cbmNvbnN0IG9uSXRlbUNsaWNrZWQgPSAoaW5kZXg6IG51bWJlciwgaXRlbXM6IE5nMk1lbnVJdGVtW10sIHN0YXRlOiBOZzJEcm9wZG93blN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkSXRlbSA/IHN0YXRlLnNlbGVjdGVkSXRlbS5jbGljaygpIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgW0tFWVMuQkFDS1NQQUNFXTogb25CYWNrc3BhY2UsXG4gICAgW0tFWVMuUFJFVl06IG9uU3dpdGNoUHJldixcbiAgICBbS0VZUy5ORVhUXTogb25Td2l0Y2hOZXh0LFxuICAgIFtLRVlTLkVOVEVSXTogb25JdGVtQ2xpY2tlZCxcbiAgICBbS0VZUy5FU0NBUEVdOiBvbkVzY2FwZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93S2V5c0hhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWzM4LCA0MF0uaW5kZXhPZihldmVudC5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVudS1pdGVtL25nMi1tZW51LWl0ZW0nO1xuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duU3RhdGUge1xuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyTWVudUl0ZW0+KCk7XG4gICAgcHVibGljIG9uSXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuICAgIHB1YmxpYyBvbkl0ZW1EZXN0cm95ZWQ6IEV2ZW50RW1pdHRlcjxOZzJNZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE5nMk1lbnVJdGVtPigpO1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBOZzJNZW51SXRlbTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHNlbGVjdGVkSXRlbVxuICAgICAqIEBkZXNjIGdldHRlciBmb3IgX3NlbGVjdGVkSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IE5nMk1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzZWxlY3RzIGEgbWVudSBpdGVtIGFuZCBlbWl0cyBldmVudFxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdChpdGVtOiBOZzJNZW51SXRlbSB8IHVuZGVmaW5lZCwgZGlzcGF0Y2hFdmVudCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcblxuICAgICAgICBpZiAoIWRpc3BhdGNoRXZlbnQgfHwgIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0uZm9jdXMoKTtcblxuICAgICAgICB0aGlzLm9uSXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdW5zZWxlY3RcbiAgICAgKiBAZGVzYyBzZXRzIF9zZWxlY3RlZEl0ZW0gYXMgdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIHVuc2VsZWN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmcyRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vbmcyLWRyb3Bkb3duLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgbWVudVN0YXRlID0ge1xuICAgICAgICBpc1Zpc2libGU6IDxib29sZWFuPmZhbHNlLFxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID09PSB0cnVlID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGRyb3Bkb3duU3RhdGU6IE5nMkRyb3Bkb3duU3RhdGUgPSBuZXcgTmcyRHJvcGRvd25TdGF0ZSgpO1xufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgUmVuZGVyZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLW1lbnUtaXRlbScsXG4gICAgc3R5bGVzOiBbYC5uZzItbWVudS1pdGVte2ZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOi45ZW07dGV4dC10cmFuc2Zvcm06bm9uZTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6LjAzZW07aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweDtwYWRkaW5nOi4zZW0gMS4yNXJlbTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4yNXN9Lm5nMi1tZW51LWl0ZW0tLXNlbGVjdGVke2JhY2tncm91bmQ6cmdiYSgxNTgsMTU4LDE1OCwuMik7b3V0bGluZTowfS5uZzItbWVudS1pdGVtOmZvY3Vze291dGxpbmU6MH0ubmcyLW1lbnUtaXRlbTphY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDE1OCwxNTgsMTU4LC40KX06aG9zdChuZzItbWVudS1pdGVtKSAvZGVlcC8gW25nMi1tZW51LWl0ZW0taWNvbl17dmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZToyOHB4O3dpZHRoOjEuNWVtO2hlaWdodDozMHB4O2NvbG9yOnJnYmEoMCwwLDAsLjQ0KX1gXSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25nMi1tZW51LWl0ZW0nXG4gICAgIHJvbGU9XCJidXR0b25cIlxuICAgICB0YWJpbmRleD1cIjBcIlxuICAgICBbY2xhc3MubmcyLW1lbnUtaXRlbS0tc2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgIChrZXlkb3duLmVudGVyKT1cImNsaWNrKClcIlxuICAgICAoY2xpY2spPVwiY2xpY2soKVwiXG4gICAgIChtb3VzZW92ZXIpPVwic2VsZWN0KClcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIE5nMk1lbnVJdGVtIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKipcbiAgICAgKiBAcHJldmVudENsb3NlXG4gICAgICogQGRlc2MgaWYgdHJ1ZSwgY2xpY2tpbmcgb24gdGhlIGl0ZW0gd29uJ3QgY2xvc2UgdGhlIGRyb3Bkb3duXG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgdmFsdWVcbiAgICAgKiBAZGVzYyBhbnkgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgaXRlbVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXNTZWxlY3RlZFxuICAgICAqIEBkZXNjIHJldHVybnMgY3VycmVudCBzZWxlY3RlZCBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBjbGlja1xuICAgICAqIEBkZXNjIGVtaXRzIHNlbGVjdCBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QoJGV2ZW50Pyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KHRoaXMsIHRydWUpO1xuXG4gICAgICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2xpY2tcbiAgICAgKiBAZGVzYyBlbWl0cyBjbGljayBldmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBmb2N1c1xuICAgICAqL1xuICAgIHB1YmxpYyBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnZm9jdXMnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIFJlbmRlcmVyLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgdHJpZ2dlcixcbiAgICBzdHlsZSxcbiAgICB0cmFuc2l0aW9uLFxuICAgIGFuaW1hdGUsXG4gICAga2V5ZnJhbWVzLFxuICAgIHN0YXRlXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBBQ1RJT05TLCBhcnJvd0tleXNIYW5kbGVyIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW1wb3J0IHsgTmcyTWVudUl0ZW0gfSBmcm9tICcuLi9tZW51LWl0ZW0vbmcyLW1lbnUtaXRlbSc7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ryb3Bkb3duLXN0YXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1kcm9wZG93bi1tZW51JyxcbiAgICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubmcyLWRyb3Bkb3duLW1lbnV7b3ZlcmZsb3cteTphdXRvO2JveC1zaGFkb3c6MCAxcHggMnB4IDAgcmdiYSgwLDAsMCwuMyk7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzouNWVtIDA7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MXB4O21heC1oZWlnaHQ6NDAwcHg7d2lkdGg6MjYwcHg7bWluLWhlaWdodDowO2Rpc3BsYXk6YmxvY2t9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS1pbnNpZGUtZWxlbWVudHtwb3NpdGlvbjpmaXhlZH0ubmcyLWRyb3Bkb3duLW1lbnUubmcyLWRyb3Bkb3duLW1lbnUtLXdpZHRoLS0ye3dpZHRoOjIwMHB4fS5uZzItZHJvcGRvd24tbWVudS5uZzItZHJvcGRvd24tbWVudS0td2lkdGgtLTR7d2lkdGg6MjYwcHh9Lm5nMi1kcm9wZG93bi1tZW51Lm5nMi1kcm9wZG93bi1tZW51LS13aWR0aC0tNnt3aWR0aDozMjBweH0ubmcyLWRyb3Bkb3duLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTtvdmVyZmxvdzpoaWRkZW59Omhvc3QgL2RlZXAvIC5uZzItbWVudS1kaXZpZGVye2hlaWdodDoxcHg7bWluLWhlaWdodDoxcHg7bWF4LWhlaWdodDoxcHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2Y5ZjlmOX1gXSxcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTUVOVSAtLT5cbjxkaXYgY2xhc3M9J25nMi1kcm9wZG93bi1tZW51IG5nMi1kcm9wZG93bi1tZW51LS0td2lkdGgtLXt7IHdpZHRoIH19J1xuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLWluc2lkZS1lbGVtZW50XT1cIiFhcHBlbmRUb0JvZHlcIlxuICAgICBbY2xhc3MubmcyLWRyb3Bkb3duLW1lbnUtLW9wZW5dPVwic3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZVwiXG4gICAgIFtzdHlsZS56LWluZGV4XT1cInpJbmRleFwiXG4gICAgIFtAZmFkZV09XCJzdGF0ZS5tZW51U3RhdGUudG9TdHJpbmcoKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmcyLWRyb3Bkb3duLW1lbnVfX29wdGlvbnMtY29udGFpbmVyXCJcbiAgICAgICAgICAgICBbQG9wYWNpdHldPVwic3RhdGUubWVudVN0YXRlLnRvU3RyaW5nKClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBCQUNLRFJPUCAtLT5cbjxkaXYgY2xhc3M9XCJuZzItZHJvcGRvd24tYmFja2Ryb3BcIiAqbmdJZj1cInN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGVcIiAoY2xpY2spPVwiaGlkZSgpXCI+PC9kaXY+XG5gLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZmFkZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoXG4gICAgICAgICAgICAgICAge2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBoZWlnaHQ6IDAsIHdpZHRoOiAwfVxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdmlzaWJsZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLWluJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonLCB3aWR0aDogJyonfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzM1MG1zIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdvcGFjaXR5JywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNDUwbXMgZWFzZS1pbicsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDEsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGhpZGRlbicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcyNTBtcyBlYXNlLW91dCcsIGtleWZyYW1lcyhbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAuNSwgb2Zmc2V0OiAwLjN9KSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIG9mZnNldDogMX0pLFxuICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duTWVudSB7XG4gICAgLyoqXG4gICAgICogQG5hbWUgd2lkdGhcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgc2V0IHRvIHRydWUsIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBkcm9wZG93biB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZFxuICAgICAqIEBuYW1lIGZvY3VzRmlyc3RFbGVtZW50XG4gICAgICovXG4gICAgQElucHV0KCkgcHVibGljIGZvY3VzRmlyc3RFbGVtZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBzZXRzIGRyb3Bkb3duIG9mZnNldCBmcm9tIHRoZSBidXR0b25cbiAgICAgKiBAbmFtZSBvZmZzZXQge3N0cmluZ30gZm9sbG93IGZvcm1hdCAnPG51bWJlcj4gPG51bWJlcj4nIGV4LiAnMCAyMCdcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgb2Zmc2V0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBhcHBlbmRUb0JvZHlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHpJbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyB6SW5kZXggPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQG5hbWUgaXRlbXNcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkcmVuKE5nMk1lbnVJdGVtKSBwdWJsaWMgaXRlbXM6IFF1ZXJ5TGlzdDxOZzJNZW51SXRlbT47XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnMgPSB7XG4gICAgICAgIGFycm93SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBoYW5kbGVLZXlwcmVzczogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogRHJvcGRvd25TdGF0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBzaG93cyBtZW51IGFuZCBzZWxlY3RzIGZpcnN0IGl0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdyhwb3NpdGlvbj86IENsaWVudFJlY3QsIGR5bmFtaWMgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB3ZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tZW51U3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIGhhbmRsZXJzXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcyA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGRjLmJvZHksICdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlwcmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmFycm93SGFuZGxlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHdkLCAna2V5ZG93bicsIGFycm93S2V5c0hhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCBkeW5hbWljKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKiBAZGVzYyBoaWRlcyBtZW51XG4gICAgICovXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUubWVudVN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGVkIGl0ZW0gc3RhdGVcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnVuc2VsZWN0KCk7XG5cbiAgICAgICAgLy8gY2FsbCBmdW5jdGlvbiB0byB1bmxpc3RlblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIgPyB0aGlzLmxpc3RlbmVycy5hcnJvd0hhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MgPyB0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcygpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHVwZGF0ZVBvc2l0aW9uXG4gICAgICogQGRlc2MgdXBkYXRlcyB0aGUgbWVudSBwb3NpdGlvbiBldmVyeSB0aW1lIGl0IGlzIHRvZ2dsZWRcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24ge0NsaWVudFJlY3R9XG4gICAgICogQHBhcmFtIGR5bmFtaWMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBDbGllbnRSZWN0LCBkeW5hbWljOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy51cGRhdGVPbkNoYW5nZShkeW5hbWljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBoYW5kbGVLZXlwcmVzc1xuICAgICAqIEBkZXNjIGV4ZWN1dGVzIGZ1bmN0aW9ucyBvbiBrZXlQcmVzcyBiYXNlZCBvbiB0aGUga2V5IHByZXNzZWRcbiAgICAgKiBAcGFyYW0gJGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIGhhbmRsZUtleXByZXNzKCRldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXkgPSAkZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZS5zZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGlmICghQUNUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBQ1RJT05TW2tleV0uY2FsbCh0aGlzLCBpbmRleCwgaXRlbXMsIHRoaXMuc3RhdGUuZHJvcGRvd25TdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgZ2V0TWVudUVsZW1lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE1lbnVFbGVtZW50KCk6IEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG5hbWUgY2FsY1Bvc2l0aW9uT2Zmc2V0XG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb25PZmZzZXQocG9zaXRpb24pOiB7IHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHdkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGRjID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghd2QgfHwgIWRjIHx8ICFwb3NpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0TWVudUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3Qgc3VwcG9ydFBhZ2VPZmZzZXQgPSB3ZC5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBpc0NTUzFDb21wYXQgPSAoKGRjLmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuXG4gICAgICAgIGNvbnN0IHggPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VYT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IDogZGMuYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHkgPSBzdXBwb3J0UGFnZU9mZnNldCA/IHdkLnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID9cbiAgICAgICAgICAgIGRjLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkYy5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuYXBwbHlPZmZzZXQoXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi50b3AgKyAodGhpcy5hcHBlbmRUb0JvZHkgPyB5IC0gMTUgOiAwKX1weGAsXG4gICAgICAgICAgICBgJHtwb3NpdGlvbi5sZWZ0ICsgeCAtIDV9cHhgXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2xpZW50V2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBjbGllbnRIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tQm90dG9tID0gcGFyc2VJbnQodG9wKSArIGNsaWVudEhlaWdodCArICh0aGlzLmFwcGVuZFRvQm9keSA/IDAgOiB5IC0gMTUpO1xuICAgICAgICBjb25zdCBtYXJnaW5Gcm9tUmlnaHQgPSBwYXJzZUludChsZWZ0KSArIGNsaWVudFdpZHRoO1xuXG4gICAgICAgIGNvbnN0IHdpbmRvd1Njcm9sbEhlaWdodCA9IHdkLmlubmVySGVpZ2h0ICsgd2Quc2Nyb2xsWTtcbiAgICAgICAgY29uc3Qgd2luZG93U2Nyb2xsV2lkdGggPSB3ZC5pbm5lcldpZHRoICsgd2Quc2Nyb2xsWDtcblxuICAgICAgICBpZiAobWFyZ2luRnJvbUJvdHRvbSA+PSB3aW5kb3dTY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgLSBjbGllbnRIZWlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcmdpbkZyb21SaWdodCA+PSB3aW5kb3dTY3JvbGxXaWR0aCkge1xuICAgICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBtYXJnaW5Gcm9tUmlnaHQgLSB3aW5kb3dTY3JvbGxXaWR0aCArIDMwO1xuICAgICAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpIC0gbWFyZ2luUmlnaHR9cHhgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseU9mZnNldCh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogeyB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nIH0ge1xuICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIGxlZnQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKCFvZmZzZXRbMV0pIHtcbiAgICAgICAgICAgIG9mZnNldFsxXSA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcCA9IGAke3BhcnNlSW50KHRvcC5yZXBsYWNlKCdweCcsICcnKSkgKyBwYXJzZUludChvZmZzZXRbMF0pfXB4YDtcbiAgICAgICAgbGVmdCA9IGAke3BhcnNlSW50KGxlZnQucmVwbGFjZSgncHgnLCAnJykpICsgcGFyc2VJbnQob2Zmc2V0WzFdKX1weGA7XG5cbiAgICAgICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBkYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgICAgICAvLyBhcHBlbmQgbWVudSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICAgICAgICBkYy5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVPbkNoYW5nZShkeW5hbWljID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRNZW51RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uT2Zmc2V0KHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZWxlbWVudCwgJ3RvcCcsIHBvc2l0aW9uLnRvcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsZW1lbnQsICdsZWZ0JywgcG9zaXRpb24ubGVmdC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbGVjdCBmaXJzdCBpdGVtIHVubGVzcyB1c2VyIGRpc2FibGVkIHRoaXMgb3B0aW9uXG4gICAgICAgIGlmICh0aGlzLmZvY3VzRmlyc3RFbGVtZW50ICYmXG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZpcnN0ICYmXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdCh0aGlzLml0ZW1zLmZpcnN0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5oYW5kbGVLZXlwcmVzcykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuaGFuZGxlS2V5cHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSG9zdExpc3RlbmVyLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmcyRHJvcGRvd25CdXR0b24gfSBmcm9tICcuLi9idXR0b24vbmcyLWRyb3Bkb3duLWJ1dHRvbic7XG5pbXBvcnQgeyBOZzJEcm9wZG93bk1lbnUgfSBmcm9tICcuLi9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IERyb3Bkb3duU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZzJNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5nMi1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZzItZHJvcGRvd24tYnV0dG9uXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5nMi1kcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogWyBEcm9wZG93blN0YXRlU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE5nMkRyb3Bkb3duIHtcbiAgICAvLyBnZXQgY2hpbGRyZW4gY29tcG9uZW50c1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25CdXR0b24pIHB1YmxpYyBidXR0b246IE5nMkRyb3Bkb3duQnV0dG9uO1xuICAgIEBDb250ZW50Q2hpbGQoTmcyRHJvcGRvd25NZW51KSBwdWJsaWMgbWVudTogTmcyRHJvcGRvd25NZW51O1xuXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNVcGRhdGUgPSB0cnVlO1xuXG4gICAgLy8gb3V0cHV0c1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25JdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBwdWJsaWMgb25TaG93OiBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+ID0gbmV3IEV2ZW50RW1pdHRlcjxOZzJEcm9wZG93bj4oKTtcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZTogRXZlbnRFbWl0dGVyPE5nMkRyb3Bkb3duPiA9IG5ldyBFdmVudEVtaXR0ZXI8TmcyRHJvcGRvd24+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRlOiBEcm9wZG93blN0YXRlU2VydmljZSkge31cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLm9uSXRlbUNsaWNrZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkLmVtaXQoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZlbnRDbG9zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oaWRlLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ub25NZW51VG9nZ2xlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtU2VsZWN0ZWQuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkl0ZW1TZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUub25JdGVtRGVzdHJveWVkLnN1YnNjcmliZSgoaXRlbTogTmcyTWVudUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdTZWxlY3RlZEl0ZW06IE5nMk1lbnVJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLm1lbnUuaXRlbXMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSAhPT0gdGhpcy5zdGF0ZS5kcm9wZG93blN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubWVudS5mb2N1c0ZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkSXRlbSA9IGl0ZW0gPT09IGl0ZW1zWzBdICYmIGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtc1sxXSA6IGl0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRyb3Bkb3duU3RhdGUuc2VsZWN0KG5ld1NlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBuYW1lIHRvZ2dsZU1lbnVcbiAgICAgKiBAZGVzYyB0b2dnbGVzIG1lbnUgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIHB1YmxpYyB0b2dnbGVNZW51KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLm1lbnVTdGF0ZS5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogLSBoaWRlcyBkcm9wZG93blxuICAgICAqIEBuYW1lIGhpZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICAgICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAtIHNob3dzIGRyb3Bkb3duXG4gICAgICogQG5hbWUgc2hvd1xuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93KHBvc2l0aW9uID0gdGhpcy5idXR0b24uZ2V0UG9zaXRpb24oKSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhwb3NpdGlvbiwgdGhpcy5keW5hbWljVXBkYXRlKTtcbiAgICAgICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbmFtZSBzY3JvbGxMaXN0ZW5lclxuICAgICAqL1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKVxuICAgIHB1YmxpYyBzY3JvbGxMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uICYmIHRoaXMuZHluYW1pY1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51LnVwZGF0ZVBvc2l0aW9uKHRoaXMuYnV0dG9uLmdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmcyRHJvcGRvd24gfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24vbmcyLWRyb3Bkb3duJztcbmltcG9ydCB7IE5nMkRyb3Bkb3duTWVudSB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L25nMi1kcm9wZG93bi1tZW51JztcbmltcG9ydCB7IE5nMkRyb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9uZzItZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB7IE5nMk1lbnVJdGVtIH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUtaXRlbS9uZzItbWVudS1pdGVtJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcm9wZG93blN0YXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZHJvcGRvd24tc3RhdGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZzJNZW51SXRlbSxcbiAgICAgICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgICAgIE5nMkRyb3Bkb3duTWVudSxcbiAgICAgICAgTmcyRHJvcGRvd25cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZzJEcm9wZG93bixcbiAgICAgICAgTmcyTWVudUl0ZW0sXG4gICAgICAgIE5nMkRyb3Bkb3duQnV0dG9uLFxuICAgICAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmcyRHJvcGRvd25Nb2R1bGUge31cblxuZXhwb3J0IHtcbiAgICBOZzJEcm9wZG93bixcbiAgICBOZzJEcm9wZG93bk1lbnUsXG4gICAgTmcyTWVudUl0ZW0sXG4gICAgTmcyRHJvcGRvd25CdXR0b24sXG4gICAgRHJvcGRvd25TdGF0ZVNlcnZpY2Vcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQTBCSSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTs2QkFIaUIsSUFBSSxZQUFZLEVBQVc7eUJBQzlDLElBQUk7S0FFRTs7Ozs7O0lBTXBDLHNDQUFVOzs7Ozs7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU8zQix1Q0FBVzs7Ozs7O1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7O2dCQWpDL0QsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLE1BQU0sRUFBRSxDQUFDLHMyQkFBbzJCLENBQUM7b0JBQzkyQixRQUFRLEVBQUUseTJCQVNiO2lCQUNBOzs7O2dCQWhCRyxVQUFVOzs7a0NBa0JULE1BQU07OEJBQ04sS0FBSzs7NEJBeEJWOzs7Ozs7O0FDSUEscUJBQU0sSUFBSSxHQUFHO0lBQ1QsU0FBUyxFQUFFLENBQUM7SUFDWixJQUFJLEVBQUUsRUFBRTtJQUNSLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDOUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztDQUNKLENBQUM7Ozs7Ozs7QUFRRixxQkFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhLEVBQUUsS0FBb0IsRUFBRUEsUUFBdUI7SUFDN0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0hBLFFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0NBQ0osQ0FBQzs7Ozs7QUFFRjtJQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNmO0FBQUE7Ozs7OztBQVFELHFCQUFNLGFBQWEsR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFvQixFQUFFQSxRQUF1QjtJQUMvRSxPQUFPQSxRQUFLLENBQUMsWUFBWSxHQUFHQSxRQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQztDQUN0RSxDQUFDO0FBRUsscUJBQU0sT0FBTztJQUNoQixHQUFDLElBQUksQ0FBQyxTQUFTLElBQUcsV0FBVztJQUM3QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxJQUFJLElBQUcsWUFBWTtJQUN6QixHQUFDLElBQUksQ0FBQyxLQUFLLElBQUcsYUFBYTtJQUMzQixHQUFDLElBQUksQ0FBQyxNQUFNLElBQUcsUUFBUTtPQUMxQixDQUFDOzs7OztBQUVGLDBCQUFpQyxLQUFLO0lBQ2xDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDMUI7Q0FDSjs7Ozs7OztBQzVFRCxBQUVBLElBQUE7OzhCQUN1RCxJQUFJLFlBQVksRUFBZTs2QkFDaEMsSUFBSSxZQUFZLEVBQWU7K0JBQzdCLElBQUksWUFBWSxFQUFlOzswQkFReEUsMENBQVk7Ozs7Ozs7WUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7OztJQU92QixpQ0FBTTs7Ozs7O2NBQUMsSUFBNkIsRUFBRSxhQUFvQjtRQUFwQiw4QkFBQSxFQUFBLG9CQUFvQjtRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTzVCLG1DQUFROzs7Ozs7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7MkJBdEN2QztJQXdDQyxDQUFBOzs7Ozs7QUN4Q0Q7O3lCQUt1QjtZQUNmLFNBQVMsb0JBQVcsS0FBSyxDQUFBO1lBQ3pCLFFBQVE7OztZQUFSO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQzthQUN6RDtTQUNKOzZCQUV3QyxJQUFJLGdCQUFnQixFQUFFOzs7Z0JBVGxFLFVBQVU7OytCQUhYOzs7Ozs7O0FDQUE7SUFxQ0kscUJBQW9CQSxRQUEyQixFQUMzQixTQUNBO1FBRkEsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzNCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7OzRCQVZZLEtBQUs7S0FVSDs7OztJQUVuQyxpQ0FBVzs7OztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7OzBCQU83QyxtQ0FBVTs7Ozs7OztZQUNqQixPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBT25ELDRCQUFNOzs7Ozs7Y0FBQyxNQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzNCOzs7Ozs7O0lBT0UsMkJBQUs7Ozs7OztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU0vQywyQkFBSzs7Ozs7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzs7O2dCQXBFMUYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsQ0FBQyx1bUJBQXFtQixDQUFDO29CQUMvbUIsUUFBUSxFQUFFLHFRQVNiO2lCQUNBOzs7O2dCQWZRLG9CQUFvQjtnQkFKekIsVUFBVTtnQkFEVixRQUFROzs7aUNBMEJQLEtBQUs7MEJBTUwsS0FBSzs7c0JBbkNWOzs7Ozs7O0FDQUE7SUFxSEkseUJBQW1CQSxRQUEyQixFQUMxQixTQUNBO1FBRkQsVUFBSyxHQUFMQSxRQUFLLENBQXNCO1FBQzFCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsYUFBUSxHQUFSLFFBQVE7Ozs7cUJBdENJLENBQUM7Ozs7O2lDQU1ZLElBQUk7Ozs7NEJBV1QsSUFBSTs7OztzQkFLbkIsSUFBSTt5QkFTVDtZQUNoQixZQUFZLEVBQUUsU0FBUztZQUN2QixjQUFjLEVBQUUsU0FBUztTQUM1QjtLQUl5Qzs7Ozs7Ozs7SUFNbkMsOEJBQUk7Ozs7Ozs7Y0FBQyxRQUFxQixFQUFFLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDN0MscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ2xFLHFCQUFNLEVBQUUsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUN2Rjs7UUFHRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUM7Ozs7Ozs7SUFPRSw4QkFBSTs7Ozs7O1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7UUFHdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR3BDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDOzs7Ozs7Ozs7SUFTekUsd0NBQWM7Ozs7Ozs7Y0FBQyxRQUFvQixFQUFFLE9BQWdCO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBUTFCLHdDQUFjOzs7Ozs7Y0FBQyxNQUFNO1FBQ3hCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzNCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7O0lBTTVELHdDQUFjOzs7OztRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU8xQyw0Q0FBa0I7Ozs7O2NBQUMsUUFBUTtRQUMvQixxQkFBTSxFQUFFLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUQscUJBQU0sRUFBRSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBRWxFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQztRQUN2RCxxQkFBTSxZQUFZLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUMsQ0FBQztRQUU5RCxxQkFBTSxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxZQUFZO1lBQ3ZELEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXZELHFCQUFNLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVk7WUFDdkQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFckQsaUhBQU0sWUFBRyxFQUFFLGNBQUksQ0FHYjtRQUVGLHFCQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3hDLHFCQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBRTFDLHFCQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLHFCQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXJELHFCQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxxQkFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFFckQsSUFBSSxnQkFBZ0IsSUFBSSxrQkFBa0IsRUFBRTtZQUN4QyxHQUFHLEdBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxPQUFJLENBQUM7U0FDL0Q7UUFFRCxJQUFJLGVBQWUsSUFBSSxpQkFBaUIsRUFBRTtZQUN0QyxxQkFBTSxXQUFXLEdBQUcsZUFBZSxHQUFHLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsV0FBVyxPQUFJLENBQUM7U0FDaEU7UUFFRCxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7OztJQUdqQixxQ0FBVzs7Ozs7Y0FBQyxHQUFXLEVBQUUsSUFBWTtRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDO1NBQ3hCO1FBRUQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ25CO1FBRUQsR0FBRyxHQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSSxDQUFDO1FBQ25FLElBQUksR0FBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUksQ0FBQztRQUVyRSxPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Ozs7SUFHbEIsa0NBQVE7Ozs7UUFDWCxxQkFBTSxFQUFFLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVuQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EOzs7Ozs7SUFHRSx3Q0FBYzs7OztjQUFDLE9BQWM7UUFBZCx3QkFBQSxFQUFBLGNBQWM7UUFDaEMscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QyxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVFOztRQUdELElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDaEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEOzs7OztJQUdFLHFDQUFXOzs7O1FBQ2QscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNuQzs7O2dCQTFRUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsTUFBTSxFQUFFLENBQUMsdXFCQUF1cUIsQ0FBQztvQkFDanJCLFFBQVEsRUFBRSwybEJBY2I7b0JBQ0csVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7NEJBQ1osS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQ2xCLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUMxRCxDQUFDOzRCQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUNqQixFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUN6RSxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGVBQWUsRUFDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUMvQzs2QkFDSixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGdCQUFnQixFQUNwQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQzNDOzZCQUNKLENBQUM7eUJBQ0wsQ0FBQzt3QkFDRixPQUFPLENBQUMsU0FBUyxFQUFFOzRCQUNmLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7b0NBQy9CLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO29DQUM5QixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztpQ0FDakMsQ0FBQyxDQUFDOzZCQUNOLENBQUM7NEJBQ0YsVUFBVSxDQUFDLG1CQUFtQixFQUFFO2dDQUM1QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO29DQUNoQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQ0FDOUIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7b0NBQ2xDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2lDQUNqQyxDQUFDLENBQUM7NkJBQ04sQ0FBQzt5QkFDTCxDQUFDO3FCQUNMO2lCQUNKOzs7O2dCQXZEUSxvQkFBb0I7Z0JBbkJ6QixVQUFVO2dCQUNWLFFBQVE7OzswQkE4RVAsS0FBSztzQ0FNTCxLQUFLOzJCQU1MLEtBQUs7aUNBS0wsS0FBSzsyQkFLTCxLQUFLOzBCQUtMLGVBQWUsU0FBQyxXQUFXOzswQkE1R2hDOzs7Ozs7O0FDQUE7SUFvQ0kscUJBQW9CQSxRQUEyQjtRQUEzQixVQUFLLEdBQUxBLFFBQUssQ0FBc0I7NkJBUmYsSUFBSTs7NkJBR21CLElBQUksWUFBWSxFQUFVOzhCQUN6QixJQUFJLFlBQVksRUFBVTtzQkFDN0IsSUFBSSxZQUFZLEVBQWU7c0JBQy9CLElBQUksWUFBWSxFQUFlO0tBRWpDOzs7O0lBRTVDLDhCQUFROzs7OztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2pELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNsRCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBaUI7WUFDakUscUJBQUksZUFBd0MsQ0FBQztZQUM3QyxxQkFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFeEMsSUFBSSxJQUFJLEtBQUssS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFO2dCQUNoRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzdCLGVBQWUsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakY7WUFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDOzs7Ozs7OztJQU9BLGdDQUFVOzs7Ozs7Y0FBQyxRQUFvQztRQUFwQyx5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7O0lBT2hFLDBCQUFJOzs7Ozs7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7OztJQVFwQiwwQkFBSTs7Ozs7O2NBQUMsUUFBb0M7UUFBcEMseUJBQUEsRUFBQSxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQU9wQixvQ0FBYzs7Ozs7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDs7O2dCQS9GUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw0S0FJYjtvQkFDRyxTQUFTLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtpQkFDdEM7Ozs7Z0JBWFEsb0JBQW9COzs7MkJBY3hCLFlBQVksU0FBQyxpQkFBaUI7eUJBQzlCLFlBQVksU0FBQyxlQUFlO2tDQUU1QixLQUFLO2tDQUdMLE1BQU07bUNBQ04sTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07bUNBdUVOLFlBQVksU0FBQyxlQUFlOztzQkF6R2pDOzs7Ozs7O0FDQUE7Ozs7Z0JBU0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixXQUFXO3FCQUNkO29CQUNELFlBQVksRUFBRTt3QkFDVixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtpQkFDSjs7NEJBekJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/base64/index.js");
var BASE64_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return _1.base64(c);
    };
    return Base64Validator;
}());
Base64Validator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            },] },
];
/** @nocollapse */
Base64Validator.ctorParameters = function () { return []; };
exports.Base64Validator = Base64Validator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/base64/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/base64/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/base64/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/base64/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.base64 = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/directive.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/directive.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/credit-card/index.js");
var CREDIT_CARD_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return _1.creditCard(c);
    };
    return CreditCardValidator;
}());
CreditCardValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            },] },
];
/** @nocollapse */
CreditCardValidator.ctorParameters = function () { return []; };
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/credit-card/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/credit-card/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/credit-card/validator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/credit-card/validator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.creditCard = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    var sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
        return { creditCard: true };
    }
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/date-ios/index.js");
var DATE_ISO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateISOValidator; }),
    multi: true
};
var DateISOValidator = (function () {
    function DateISOValidator() {
    }
    DateISOValidator.prototype.validate = function (c) {
        return _1.dateISO(c);
    };
    return DateISOValidator;
}());
DateISOValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            },] },
];
/** @nocollapse */
DateISOValidator.ctorParameters = function () { return []; };
exports.DateISOValidator = DateISOValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/date-ios/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/date-ios/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date-ios/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date-ios/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.dateISO = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/date/index.js");
var DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = (function () {
    function DateValidator() {
    }
    DateValidator.prototype.validate = function (c) {
        return _1.date(c);
    };
    return DateValidator;
}());
DateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
DateValidator.ctorParameters = function () { return []; };
exports.DateValidator = DateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/date/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/date/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.date = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return lang_1.isDate(v) ? null : { date: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/digits/index.js");
var DIGITS_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return _1.digits(c);
    };
    return DigitsValidator;
}());
DigitsValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            },] },
];
/** @nocollapse */
DigitsValidator.ctorParameters = function () { return []; };
exports.DigitsValidator = DigitsValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/digits/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/digits/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/digits/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/digits/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.digits = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/email/index.js");
var EMAIL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EmailValidator; }),
    multi: true
};
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (c) {
        return index_1.email(c);
    };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/** @nocollapse */
EmailValidator.ctorParameters = function () { return []; };
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/email/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/email/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/email/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/email/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.email = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/equal-to/index.js");
var EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EqualToValidator;
}());
EqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
EqualToValidator.ctorParameters = function () { return []; };
EqualToValidator.propDecorators = {
    'equalTo': [{ type: core_1.Input },],
};
exports.EqualToValidator = EqualToValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/equal-to/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/equal-to/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal-to/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal-to/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.equalTo = function (equalControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/equal/index.js");
var EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = index_1.equal(this.equal);
    };
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = index_1.equal(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return EqualValidator;
}());
EqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
EqualValidator.ctorParameters = function () { return []; };
EqualValidator.propDecorators = {
    'equal': [{ type: core_1.Input },],
};
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/equal/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/equal/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.equal = function (val) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return val === v ? null : { equal: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/directive.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/directive.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/greater-than-equal/index.js");
var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanEqualValidator; }),
    multi: true
};
var GreaterThanEqualValidator = (function () {
    function GreaterThanEqualValidator() {
    }
    GreaterThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = _1.gte(this.gte);
    };
    GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gte') {
                this.validator = _1.gte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanEqualValidator;
}());
GreaterThanEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
GreaterThanEqualValidator.ctorParameters = function () { return []; };
GreaterThanEqualValidator.propDecorators = {
    'gte': [{ type: core_1.Input },],
};
exports.GreaterThanEqualValidator = GreaterThanEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/greater-than-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/greater-than-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than-equal/validator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than-equal/validator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.gte = function (gte) {
    return function (control) {
        if (!lang_1.isPresent(gte))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +gte ? null : { gte: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/greater-than/index.js");
var GREATER_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return GreaterThanValidator; }),
    multi: true
};
var GreaterThanValidator = (function () {
    function GreaterThanValidator() {
    }
    GreaterThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.gt(this.gt);
    };
    GreaterThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gt') {
                this.validator = _1.gt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanValidator;
}());
GreaterThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
GreaterThanValidator.ctorParameters = function () { return []; };
GreaterThanValidator.propDecorators = {
    'gt': [{ type: core_1.Input },],
};
exports.GreaterThanValidator = GreaterThanValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/greater-than/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/greater-than/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/greater-than/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/greater-than/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.gt = function (gt) {
    return function (control) {
        if (!lang_1.isPresent(gt))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v > +gt ? null : { gt: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ng2-validation/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var base64_1 = __webpack_require__(/*! ./base64 */ "./node_modules/ng2-validation/dist/base64/index.js");
var credit_card_1 = __webpack_require__(/*! ./credit-card */ "./node_modules/ng2-validation/dist/credit-card/index.js");
var date_1 = __webpack_require__(/*! ./date */ "./node_modules/ng2-validation/dist/date/index.js");
var date_ios_1 = __webpack_require__(/*! ./date-ios */ "./node_modules/ng2-validation/dist/date-ios/index.js");
var digits_1 = __webpack_require__(/*! ./digits */ "./node_modules/ng2-validation/dist/digits/index.js");
var email_1 = __webpack_require__(/*! ./email */ "./node_modules/ng2-validation/dist/email/index.js");
var equal_1 = __webpack_require__(/*! ./equal */ "./node_modules/ng2-validation/dist/equal/index.js");
var equal_to_1 = __webpack_require__(/*! ./equal-to */ "./node_modules/ng2-validation/dist/equal-to/index.js");
var greater_than_1 = __webpack_require__(/*! ./greater-than */ "./node_modules/ng2-validation/dist/greater-than/index.js");
var greater_than_equal_1 = __webpack_require__(/*! ./greater-than-equal */ "./node_modules/ng2-validation/dist/greater-than-equal/index.js");
var json_1 = __webpack_require__(/*! ./json */ "./node_modules/ng2-validation/dist/json/index.js");
var less_than_1 = __webpack_require__(/*! ./less-than */ "./node_modules/ng2-validation/dist/less-than/index.js");
var less_than_equal_1 = __webpack_require__(/*! ./less-than-equal */ "./node_modules/ng2-validation/dist/less-than-equal/index.js");
var max_1 = __webpack_require__(/*! ./max */ "./node_modules/ng2-validation/dist/max/index.js");
var max_date_1 = __webpack_require__(/*! ./max-date */ "./node_modules/ng2-validation/dist/max-date/index.js");
var min_1 = __webpack_require__(/*! ./min */ "./node_modules/ng2-validation/dist/min/index.js");
var min_date_1 = __webpack_require__(/*! ./min-date */ "./node_modules/ng2-validation/dist/min-date/index.js");
var not_equal_1 = __webpack_require__(/*! ./not-equal */ "./node_modules/ng2-validation/dist/not-equal/index.js");
var not_equal_to_1 = __webpack_require__(/*! ./not-equal-to */ "./node_modules/ng2-validation/dist/not-equal-to/index.js");
var number_1 = __webpack_require__(/*! ./number */ "./node_modules/ng2-validation/dist/number/index.js");
var phone_1 = __webpack_require__(/*! ./phone */ "./node_modules/ng2-validation/dist/phone/index.js");
var range_1 = __webpack_require__(/*! ./range */ "./node_modules/ng2-validation/dist/range/index.js");
var range_length_1 = __webpack_require__(/*! ./range-length */ "./node_modules/ng2-validation/dist/range-length/index.js");
var url_1 = __webpack_require__(/*! ./url */ "./node_modules/ng2-validation/dist/url/index.js");
var uuid_1 = __webpack_require__(/*! ./uuid */ "./node_modules/ng2-validation/dist/uuid/index.js");
exports.CustomValidators = {
    base64: base64_1.base64,
    creditCard: credit_card_1.creditCard,
    date: date_1.date,
    dateISO: date_ios_1.dateISO,
    digits: digits_1.digits,
    email: email_1.email,
    equal: equal_1.equal,
    equalTo: equal_to_1.equalTo,
    gt: greater_than_1.gt,
    gte: greater_than_equal_1.gte,
    json: json_1.json,
    lt: less_than_1.lt,
    lte: less_than_equal_1.lte,
    max: max_1.max,
    maxDate: max_date_1.maxDate,
    min: min_1.min,
    minDate: min_date_1.minDate,
    notEqual: not_equal_1.notEqual,
    notEqualTo: not_equal_to_1.notEqualTo,
    number: number_1.number,
    phone: phone_1.phone,
    range: range_1.range,
    rangeLength: range_length_1.rangeLength,
    url: url_1.url,
    uuid: uuid_1.uuid
};
var CUSTOM_FORM_DIRECTIVES = [
    base64_1.Base64Validator,
    credit_card_1.CreditCardValidator,
    date_1.DateValidator,
    date_ios_1.DateISOValidator,
    digits_1.DigitsValidator,
    email_1.EmailValidator,
    equal_1.EqualValidator,
    equal_to_1.EqualToValidator,
    greater_than_1.GreaterThanValidator,
    greater_than_equal_1.GreaterThanEqualValidator,
    json_1.JSONValidator,
    less_than_1.LessThanValidator,
    less_than_equal_1.LessThanEqualValidator,
    max_1.MaxValidator,
    max_date_1.MaxDateValidator,
    min_1.MinValidator,
    min_date_1.MinDateValidator,
    not_equal_1.NotEqualValidator,
    not_equal_to_1.NotEqualToValidator,
    number_1.NumberValidator,
    phone_1.PhoneValidator,
    range_1.RangeValidator,
    range_length_1.RangeLengthValidator,
    url_1.UrlValidator,
    uuid_1.UUIDValidator
];
var CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    return CustomFormsModule;
}());
CustomFormsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [CUSTOM_FORM_DIRECTIVES],
                exports: [CUSTOM_FORM_DIRECTIVES]
            },] },
];
/** @nocollapse */
CustomFormsModule.ctorParameters = function () { return []; };
exports.CustomFormsModule = CustomFormsModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/json/index.js");
var JSON_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return JSONValidator; }),
    multi: true
};
var JSONValidator = (function () {
    function JSONValidator() {
    }
    JSONValidator.prototype.validate = function (c) {
        return _1.json(c);
    };
    return JSONValidator;
}());
JSONValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            },] },
];
/** @nocollapse */
JSONValidator.ctorParameters = function () { return []; };
exports.JSONValidator = JSONValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/json/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/json/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/json/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/json/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.json = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    try {
        var obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) {
    }
    return { json: true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/directive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/less-than-equal/index.js");
var LESS_THAN_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanEqualValidator; }),
    multi: true
};
var LessThanEqualValidator = (function () {
    function LessThanEqualValidator() {
    }
    LessThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = _1.lte(this.lte);
    };
    LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lte') {
                this.validator = _1.lte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanEqualValidator;
}());
LessThanEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
LessThanEqualValidator.ctorParameters = function () { return []; };
LessThanEqualValidator.propDecorators = {
    'lte': [{ type: core_1.Input },],
};
exports.LessThanEqualValidator = LessThanEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/less-than-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/less-than-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than-equal/validator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than-equal/validator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.lte = function (lte) {
    return function (control) {
        if (!lang_1.isPresent(lte))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +lte ? null : { lte: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/less-than/index.js");
var LESS_THAN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = (function () {
    function LessThanValidator() {
    }
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = _1.lt(this.lt);
    };
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = _1.lt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanValidator;
}());
LessThanValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            },] },
];
/** @nocollapse */
LessThanValidator.ctorParameters = function () { return []; };
LessThanValidator.propDecorators = {
    'lt': [{ type: core_1.Input },],
};
exports.LessThanValidator = LessThanValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/less-than/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/less-than/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/less-than/validator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/less-than/validator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.lt = function (lt) {
    return function (control) {
        if (!lang_1.isPresent(lt))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v < +lt ? null : { lt: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/max-date/index.js");
var MAX_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = (function () {
    function MaxDateValidator() {
    }
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = _1.maxDate(this.maxDate);
    };
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = _1.maxDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxDateValidator;
}());
MaxDateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
MaxDateValidator.ctorParameters = function () { return []; };
MaxDateValidator.propDecorators = {
    'maxDate': [{ type: core_1.Input },],
};
exports.MaxDateValidator = MaxDateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/max-date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/max-date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max-date/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max-date/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.maxDate = function (maxDate) {
    if (!lang_1.isDate(maxDate) && !(maxDate instanceof Function)) {
        throw Error('maxDate value must be or return a formatted date');
    }
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d))
            return { maxDate: true };
        if (maxDate instanceof Function)
            maxDate = maxDate();
        return d <= new Date(maxDate) ? null : { maxDate: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/max/index.js");
var MAX_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MaxValidator; }),
    multi: true
};
var MaxValidator = (function () {
    function MaxValidator() {
    }
    MaxValidator.prototype.ngOnInit = function () {
        this.validator = _1.max(this.max);
    };
    MaxValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'max') {
                this.validator = _1.max(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxValidator;
}());
MaxValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            },] },
];
/** @nocollapse */
MaxValidator.ctorParameters = function () { return []; };
MaxValidator.propDecorators = {
    'max': [{ type: core_1.Input },],
};
exports.MaxValidator = MaxValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/max/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/max/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/max/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/max/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.max = function (max) {
    return function (control) {
        if (!lang_1.isPresent(max))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +max ? null : { actualValue: v, requiredValue: +max, max: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/min-date/index.js");
var MIN_DATE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = (function () {
    function MinDateValidator() {
    }
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = _1.minDate(this.minDate);
    };
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = _1.minDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinDateValidator;
}());
MinDateValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            },] },
];
/** @nocollapse */
MinDateValidator.ctorParameters = function () { return []; };
MinDateValidator.propDecorators = {
    'minDate': [{ type: core_1.Input },],
};
exports.MinDateValidator = MinDateValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/min-date/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/min-date/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min-date/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min-date/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.minDate = function (minDate) {
    if (!lang_1.isDate(minDate) && !(minDate instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d))
            return { minDate: true };
        if (minDate instanceof Function)
            minDate = minDate();
        return d >= new Date(minDate) ? null : { minDate: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/min/index.js");
var MIN_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = (function () {
    function MinValidator() {
    }
    MinValidator.prototype.ngOnInit = function () {
        this.validator = _1.min(this.min);
    };
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = _1.min(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinValidator;
}());
MinValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            },] },
];
/** @nocollapse */
MinValidator.ctorParameters = function () { return []; };
MinValidator.propDecorators = {
    'min': [{ type: core_1.Input },],
};
exports.MinValidator = MinValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/min/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/min/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/min/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/min/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.min = function (min) {
    return function (control) {
        if (!lang_1.isPresent(min))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +min ? null : { actualValue: v, requiredValue: +min, min: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/not-equal-to/index.js");
var NOT_EQUAL_TO_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = (function () {
    function NotEqualToValidator() {
    }
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = _1.notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NotEqualToValidator;
}());
NotEqualToValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            },] },
];
/** @nocollapse */
NotEqualToValidator.ctorParameters = function () { return []; };
NotEqualToValidator.propDecorators = {
    'notEqualTo': [{ type: core_1.Input },],
};
exports.NotEqualToValidator = NotEqualToValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/not-equal-to/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/not-equal-to/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal-to/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal-to/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.notEqualTo = function (notEqualControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/ng2-validation/dist/not-equal/index.js");
var NOT_EQUAL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NotEqualValidator; }),
    multi: true
};
var NotEqualValidator = (function () {
    function NotEqualValidator() {
    }
    NotEqualValidator.prototype.ngOnInit = function () {
        this.validator = index_1.notEqual(this.notEqual);
    };
    NotEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'notEqual') {
                this.validator = index_1.notEqual(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    NotEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return NotEqualValidator;
}());
NotEqualValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            },] },
];
/** @nocollapse */
NotEqualValidator.ctorParameters = function () { return []; };
NotEqualValidator.propDecorators = {
    'notEqual': [{ type: core_1.Input },],
};
exports.NotEqualValidator = NotEqualValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/not-equal/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/not-equal/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/not-equal/validator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/not-equal/validator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.notEqual = function (val) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return val !== v ? null : { notEqual: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/number/index.js");
var NUMBER_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (c) {
        return _1.number(c);
    };
    return NumberValidator;
}());
NumberValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            },] },
];
/** @nocollapse */
NumberValidator.ctorParameters = function () { return []; };
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/number/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/number/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/number/validator.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/number/validator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.number = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/phone/index.js");
var PHONE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return PhoneValidator; }),
    multi: true
};
var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    PhoneValidator.prototype.ngOnInit = function () {
        this.validator = _1.phone(this.phone);
    };
    PhoneValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'phone') {
                this.validator = _1.phone(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    PhoneValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return PhoneValidator;
}());
PhoneValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
                providers: [PHONE_VALIDATOR]
            },] },
];
/** @nocollapse */
PhoneValidator.ctorParameters = function () { return []; };
PhoneValidator.propDecorators = {
    'phone': [{ type: core_1.Input },],
};
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/phone/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/phone/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/phone/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/phone/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var libphonenumber_js_1 = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/index.es6.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.phone = function (country) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return libphonenumber_js_1.isValidNumber({ phone: v, country: country }) ? null : { phone: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/directive.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/directive.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/range-length/index.js");
var RANGE_LENGTH_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = (function () {
    function RangeLengthValidator() {
    }
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = _1.rangeLength(this.rangeLength);
    };
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = _1.rangeLength(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeLengthValidator;
}());
RangeLengthValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            },] },
];
/** @nocollapse */
RangeLengthValidator.ctorParameters = function () { return []; };
RangeLengthValidator.propDecorators = {
    'rangeLength': [{ type: core_1.Input },],
};
exports.RangeLengthValidator = RangeLengthValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/range-length/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/range-length/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range-length/validator.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range-length/validator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.rangeLength = function (rangeLength) {
    return function (control) {
        if (!lang_1.isPresent(rangeLength))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { rangeLength: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/directive.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/directive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/range/index.js");
var RANGE_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return RangeValidator; }),
    multi: true
};
var RangeValidator = (function () {
    function RangeValidator() {
    }
    RangeValidator.prototype.ngOnInit = function () {
        this.validator = _1.range(this.range);
    };
    RangeValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'range') {
                this.validator = _1.range(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeValidator;
}());
RangeValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            },] },
];
/** @nocollapse */
RangeValidator.ctorParameters = function () { return []; };
RangeValidator.propDecorators = {
    'range': [{ type: core_1.Input },],
};
exports.RangeValidator = RangeValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/range/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/range/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/range/validator.js":
/*!*************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/range/validator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.range = function (range) {
    return function (control) {
        if (!lang_1.isPresent(range))
            return null;
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= range[0] && v <= range[1] ? null : { actualValue: v, requiredValue: range, range: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/directive.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/directive.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/url/index.js");
var URL_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return _1.url(c);
    };
    return UrlValidator;
}());
UrlValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            },] },
];
/** @nocollapse */
UrlValidator.ctorParameters = function () { return []; };
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/url/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/url/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/url/validator.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/url/validator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
exports.url = function (control) {
    if (lang_1.isPresent(forms_1.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/util/lang.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-validation/dist/util/lang.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}
exports.isDate = isDate;
//# sourceMappingURL=lang.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/directive.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/directive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var _1 = __webpack_require__(/*! ./ */ "./node_modules/ng2-validation/dist/uuid/index.js");
var UUID_VALIDATOR = {
    provide: forms_1.NG_VALIDATORS,
    useExisting: core_1.forwardRef(function () { return UUIDValidator; }),
    multi: true
};
var UUIDValidator = (function () {
    function UUIDValidator() {
    }
    UUIDValidator.prototype.ngOnInit = function () {
        this.validator = _1.uuid(this.uuid);
    };
    UUIDValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'uuid') {
                this.validator = _1.uuid(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    UUIDValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return UUIDValidator;
}());
UUIDValidator.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            },] },
];
/** @nocollapse */
UUIDValidator.ctorParameters = function () { return []; };
UUIDValidator.propDecorators = {
    'uuid': [{ type: core_1.Input },],
};
exports.UUIDValidator = UUIDValidator;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./directive */ "./node_modules/ng2-validation/dist/uuid/directive.js"));
__export(__webpack_require__(/*! ./validator */ "./node_modules/ng2-validation/dist/uuid/validator.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-validation/dist/uuid/validator.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-validation/dist/uuid/validator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var lang_1 = __webpack_require__(/*! ../util/lang */ "./node_modules/ng2-validation/dist/util/lang.js");
var uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
exports.uuid = function (version) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        var pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./node_modules/ngx-chips/esm5/ngx-chips.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-chips/esm5/ngx-chips.js ***!
  \**************************************************/
/*! exports provided: TagInputModule, TagInputDropdown, DeleteIconComponent, TagInputForm, TagRipple, TagComponent, TagInputComponent, ɵb, ɵa, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "./node_modules/ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'highlight'
            },] },
];
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    DragProvider.prototype.getDraggedItem = function (event) {
        var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        try {
            return (JSON.parse(data));
        }
        catch (_a) {
            return;
        }
    };
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var defaults = {
    tagInput: ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    }),
    dropdown: ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    })
};
function matchingFn(value, target) {
    var targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults;
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    TagInputAccessor.prototype.getItemValue = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    };
    TagInputAccessor.prototype.getItemDisplay = function (item, fromDropdown) {
        if (fromDropdown === void 0) { fromDropdown = false; }
        var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    };
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    if (!condition) {
        return;
    }
    this.listeners[listenerType].push(action);
}
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validators = [];
        this.asyncValidators = [];
        this.tabindex = '';
        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        get: function () {
            return this.item.value;
        },
        set: function (text) {
            this.item.setValue(text);
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.ngOnInit = function () {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
        });
    };
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"] && !changes["disabled"].firstChange) {
            if (changes["disabled"].currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        get: function () {
            return (this.form.get('item'));
        },
        enumerable: true,
        configurable: true
    });
    TagInputForm.prototype.isInputFocused = function () {
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    };
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    TagInputForm.prototype.hasErrors = function () {
        var _b = this.form, dirty = _b.dirty, value = _b.value, valid = _b.valid;
        return dirty && value.item && !valid;
    };
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    TagInputForm.prototype.destroy = function () {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    TagInputForm.prototype.onKeyDown = function ($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
            this.inputText = '';
        }
        return this.onKeydown.emit($event);
    };
    TagInputForm.prototype.onKeyUp = function ($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    };
    TagInputForm.prototype.submit = function ($event) {
        $event.preventDefault();
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-form',
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"],
                template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n"
            },] },
];
TagInputForm.propDecorators = {
    "onSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var defaults$1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        this.offset = new defaults$1().offset;
        this.focusFirstElement = new defaults$1().focusFirstElement;
        this.showDropdownIfEmpty = new defaults$1().showDropdownIfEmpty;
        this.minimumTextLength = new defaults$1().minimumTextLength;
        this.limitItemsTo = new defaults$1().limitItemsTo;
        this.displayBy = new defaults$1().displayBy;
        this.identifyBy = new defaults$1().identifyBy;
        this.matchingFn = new defaults$1().matchingFn;
        this.appendToBody = new defaults$1().appendToBody;
        this.keepOpen = new defaults$1().keepOpen;
        this.dynamicUpdate = new defaults$1().dynamicUpdate;
        this.zIndex = new defaults$1().zIndex;
        this.items = [];
        this.tagInput = this.injector.get(TagInputComponent);
        this._autocompleteItems = [];
        this.show = function () {
            var maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var value = _this.getFormValue();
            var hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var position = _this.calculatePosition();
            var items = _this.getMatchingItems(value);
            var hasItems = items.length > 0;
            var isHidden = _this.isVisible === false;
            var showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var isDisabled = _this.tagInput.disable;
            var shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        this.requestAdding = function (item) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var tag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag).catch(function () { })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.resetItems = function () {
            _this.items = [];
        };
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var subscribeFn = function (data) {
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        get: function () {
            var _this = this;
            var items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
                var _b;
            });
        },
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.onItemClicked().subscribe(function (item) {
            _this.requestAdding(item);
        });
        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    TagInputDropdown.prototype.updatePosition = function () {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    };
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    TagInputDropdown.prototype.getFormValue = function () {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    };
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    TagInputDropdown.prototype.createTagModel = function (item) {
        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_b = {}, _b[this.tagInput.displayBy] = display, _b[this.tagInput.identifyBy] = value, _b));
        var _b;
    };
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var identifyBy = _this.tagInput.identifyBy;
                var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_b = {}, _b[_this.displayBy] = item, _b[_this.identifyBy] = item, _b) : item;
            var _b;
        });
        return this;
    };
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            },] },
];
TagInputDropdown.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
]; };
TagInputDropdown.propDecorators = {
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"],] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],] },],
    "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusFirstElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showDropdownIfEmpty": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteObservable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "minimumTextLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "limitItemsTo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "matchingFn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "keepOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dynamicUpdate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autocompleteItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "scrollListener": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:scroll',] },],
    "onWindowBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:blur',] },],
};
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('ink', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('none => clicked', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
TagRipple.propDecorators = {
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.disabled = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editing = false;
        this.rippleState = "none";
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        get: function () {
            return typeof this.model !== "string" && this.model["readonly"] === true;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    TagComponent.prototype.blink = function () {
        var classList = this.element.nativeElement.classList;
        classList.add("blink");
        setTimeout(function () { return classList.remove("blink"); }, 50);
    };
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    };
    TagComponent.prototype.onBlurred = function (event) {
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === "string"
            ? value
            : Object.assign({}, this.model, (_b = {}, _b[this.displayBy] = value, _b));
        this.onBlur.emit(result);
        var _b;
    };
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === "string" ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        get: function () {
            return !this.readonly && !this.editing && isChrome && this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    TagComponent.prototype.disableEditMode = function ($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove("tag--editing");
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    TagComponent.prototype.isDeleteIconVisible = function () {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    };
    TagComponent.prototype.getContentEditableText = function () {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : "";
    };
    TagComponent.prototype.setContentEditableText = function (model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
    };
    TagComponent.prototype.activateEditMode = function () {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var exists = function (tag) {
            return typeof tag === 'string'
                ? tag === input
                : tag[_this.displayBy] === input;
        };
        var hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        if (exists(this.model)) {
            return;
        }
        var model = typeof this.model === 'string'
            ? input
            : (_b = {
                    index: this.index
                }, _b[this.identifyBy] = hasId()
                    ? this.model[this.identifyBy]
                    : input, _b[this.displayBy] = input, _b);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
        var _b;
    };
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "tag",
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;-webkit-transition:opacity 1s;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            },] },
];
TagComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
TagComponent.propDecorators = {
    "model": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "displayBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "identifyBy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "index": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hasRipple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "canAddTag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "moving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ["class.moving",] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagRipple,] },],
    "keydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["keydown", ["$event"],] },],
};
var animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ enter }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("{{ leave }}", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
var DragEvent = ((window)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var defaults$2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TagInputComponent, _super);
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        _this.separatorKeys = new defaults$2().separatorKeys;
        _this.separatorKeyCodes = new defaults$2().separatorKeyCodes;
        _this.placeholder = new defaults$2().placeholder;
        _this.secondaryPlaceholder = new defaults$2().secondaryPlaceholder;
        _this.maxItems = new defaults$2().maxItems;
        _this.validators = new defaults$2().validators;
        _this.asyncValidators = new defaults$2().asyncValidators;
        _this.onlyFromAutocomplete = new defaults$2().onlyFromAutocomplete;
        _this.errorMessages = new defaults$2().errorMessages;
        _this.theme = new defaults$2().theme;
        _this.onTextChangeDebounce = new defaults$2().onTextChangeDebounce;
        _this.inputId = new defaults$2().inputId;
        _this.inputClass = new defaults$2().inputClass;
        _this.clearOnBlur = new defaults$2().clearOnBlur;
        _this.hideForm = new defaults$2().hideForm;
        _this.addOnBlur = new defaults$2().addOnBlur;
        _this.addOnPaste = new defaults$2().addOnPaste;
        _this.pasteSplitPattern = new defaults$2().pasteSplitPattern;
        _this.blinkIfDupe = new defaults$2().blinkIfDupe;
        _this.removable = new defaults$2().removable;
        _this.editable = new defaults$2().editable;
        _this.allowDupes = new defaults$2().allowDupes;
        _this.modelAsStrings = new defaults$2().modelAsStrings;
        _this.trimTags = new defaults$2().trimTags;
        _this.ripple = new defaults$2().ripple;
        _this.tabindex = new defaults$2().tabIndex;
        _this.disable = new defaults$2().disable;
        _this.dragZone = new defaults$2().dragZone;
        _this.onRemoving = new defaults$2().onRemoving;
        _this.onAdding = new defaults$2().onAdding;
        _this.animationDuration = new defaults$2().animationDuration;
        _this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.isLoading = false;
        _this.listeners = (_b = {}, _b[KEYDOWN] = ([]), _b[KEYUP] = ([]), _b);
        _this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.inputTextValue = '';
        _this.errors = [];
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var items = _this.items;
            var model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        _this.createTag = function (model) {
            var trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_b = {}, _b[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _b[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _b));
            var _b;
        };
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            var value = _this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            var dupe = _this.findDupe(tag, fromAutocomplete);
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var assertions = [
                !dupe || _this.allowDupes,
                !_this.maxItemsReached,
                ((isFromAutocomplete) || !_this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        _this.onPasteCallback = function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            var getText, text, requests, resetInput;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                getText = function () {
                    var isIE = Boolean(((window)).clipboardData);
                    var clipboardData = isIE ? (((window)).clipboardData) : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
        var _b;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        get: function () {
            return this.inputTextValue;
        },
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var isReadonly = item && typeof item !== 'string' && item["readonly"];
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    TagInputComponent.prototype.handleKeydown = function (data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        event.preventDefault();
    };
    TagInputComponent.prototype.onFormSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onAddingRequested(false, this.formValue)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a_1 = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var control = this.getControl();
        control.setValue(value, { emitEvent: emitEvent });
    };
    TagInputComponent.prototype.getControl = function () {
        return (this.inputForm.value);
    };
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        get: function () {
            var form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    TagInputComponent.prototype.isDropping = function () {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    TagInputComponent.prototype.updateEditedTag = function (_b) {
        var tag = _b.tag, index = _b.index;
        this.onTagEdited.emit(tag);
    };
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    TagInputComponent.prototype.getTagIndex = function (item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var tags = this.tags.toArray();
        return tags[index];
    };
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        this.focus(true, false);
        this.onRemove.emit(tag);
    };
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise(function (resolve, reject) {
            var reset = function () {
                _this.setInputValue('');
                _this.focus(true, false);
                resolve(display);
            };
            var appendItem = function () {
                _this.appendTag(tag, index);
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var status = _this.inputForm.form.status;
            var isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                var statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var listener = function ($event) {
            var hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            var isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var listener = function ($event) {
            var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        listen.call(this, KEYDOWN, listener);
    };
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var input = this.inputForm.input.nativeElement;
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe(function (value) {
            _this.onTextChange.emit(value.item);
        });
    };
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var filterFn = function () {
            var isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(filterFn))
            .subscribe(function () {
            var reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    };
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:'';-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;-webkit-transition:all .3s;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;-webkit-box-shadow:0 2px 3px 1px #d4d1d1;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations: animations
            },] },
];
TagInputComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    "separatorKeys": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "separatorKeyCodes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "secondaryPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "maxItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "validators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "asyncValidators": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onlyFromAutocomplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "errorMessages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "theme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onTextChangeDebounce": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "clearOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "addOnPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pasteSplitPattern": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "blinkIfDupe": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "removable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowDupes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "modelAsStrings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "trimTags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "dragZone": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onRemoving": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animationDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "onAdd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onValidationError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onTagEdited": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "dropdown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [TagInputDropdown,] },],
    "templates": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false },] },],
    "inputForm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TagInputForm,] },],
    "tags": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [TagComponent,] },],
    "inputTextChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "tabindexAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] },],
};
var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus{-webkit-box-shadow:0 0 0 1px #323232;box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;-webkit-box-shadow:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;-webkit-box-shadow:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{-webkit-box-shadow:inset 0 1px 1px #d9534f;box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-transition:all .25s;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.minimal.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.dark.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.bootstrap3-info.ng2-tag-input{display:block;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;padding:4px;cursor:text;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;-webkit-transition:all .15s;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{-webkit-transform:scale(1.5) translateY(-3px);transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            },] },
];
var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            },] },
];


//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./node_modules/ngx-img-cropper/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ngx-img-cropper/index.js ***!
  \***********************************************/
/*! exports provided: ImageCropperModule, ImageCropperComponent, ImageCropper, CropperSettings, CropperDrawSettings, Bounds, CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/imageCropperModule */ "./node_modules/ngx-img-cropper/src/imageCropperModule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return _src_imageCropperModule__WEBPACK_IMPORTED_MODULE_0__["ImageCropperModule"]; });

/* harmony import */ var _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/imageCropperComponent */ "./node_modules/ngx-img-cropper/src/imageCropperComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return _src_imageCropperComponent__WEBPACK_IMPORTED_MODULE_1__["ImageCropperComponent"]; });

/* harmony import */ var _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/imageCropper */ "./node_modules/ngx-img-cropper/src/imageCropper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return _src_imageCropper__WEBPACK_IMPORTED_MODULE_2__["ImageCropper"]; });

/* harmony import */ var _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/cropperSettings */ "./node_modules/ngx-img-cropper/src/cropperSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return _src_cropperSettings__WEBPACK_IMPORTED_MODULE_3__["CropperSettings"]; });

/* harmony import */ var _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/cropperDrawSettings */ "./node_modules/ngx-img-cropper/src/cropperDrawSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return _src_cropperDrawSettings__WEBPACK_IMPORTED_MODULE_4__["CropperDrawSettings"]; });

/* harmony import */ var _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/model/bounds */ "./node_modules/ngx-img-cropper/src/model/bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return _src_model_bounds__WEBPACK_IMPORTED_MODULE_5__["Bounds"]; });

/* harmony import */ var _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/model/cropPosition */ "./node_modules/ngx-img-cropper/src/model/cropPosition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return _src_model_cropPosition__WEBPACK_IMPORTED_MODULE_6__["CropPosition"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/cropperDrawSettings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/cropperDrawSettings.js ***!
  \*****************************************************************/
/*! exports provided: CropperDrawSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperDrawSettings", function() { return CropperDrawSettings; });
var CropperDrawSettings = /** @class */ (function () {
    function CropperDrawSettings(settings) {
        this.lineDash = false;
        this.strokeWidth = 1;
        this.strokeColor = "rgba(255,255,255,1)";
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = "rgba(0,0,0,1)";
        this.dragIconFillColor = "rgba(255,255,255,1)";
        if (typeof settings === "object") {
            this.lineDash = settings.lineDash || this.lineDash;
            this.strokeWidth = settings.strokeWidth || this.strokeWidth;
            this.strokeColor = settings.strokeColor || this.strokeColor;
            this.dragIconStrokeWidth =
                settings.dragIconStrokeWidth || this.dragIconStrokeWidth;
            this.dragIconStrokeColor =
                settings.dragIconStrokeColor || this.dragIconStrokeColor;
            this.dragIconFillColor =
                settings.dragIconFillColor || this.dragIconFillColor;
        }
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/cropperSettings.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/cropperSettings.js ***!
  \*************************************************************/
/*! exports provided: CropperSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropperSettings", function() { return CropperSettings; });
/* harmony import */ var _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropperDrawSettings */ "./node_modules/ngx-img-cropper/src/cropperDrawSettings.js");

var CropperSettings = /** @class */ (function () {
    function CropperSettings(settings) {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new _cropperDrawSettings__WEBPACK_IMPORTED_MODULE_0__["CropperDrawSettings"]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.markerSizeMultiplier = 1;
        this.centerTouchRadius = 20;
        this.showCenterMarker = true;
        this.allowedFilesRegex = /\.(jpe?g|png|gif|bmp)$/i;
        this.cropOnResize = true;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        if (typeof settings === "object") {
            Object.assign(this, settings);
        }
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            this._keepAspect = val;
            if (this._rounded === true && this._keepAspect === false) {
                console.error("Cannot set keep aspect to false on rounded cropper. Ellipsis not supported");
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/exif.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/exif.js ***!
  \**************************************************/
/*! exports provided: Fraction, Debug, Exif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fraction", function() { return Fraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exif", function() { return Exif; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = /** @class */ (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var 
// Console debug wrapper that makes code looks a little bit cleaner
Debug = /** @class */ (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());
// Console debug wrapper that makes code looks a little bit cleaner

var Exif = /** @class */ (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent("on" + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!img.exifdata;
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gim, "");
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ("src" in img && img.src) {
            if (/^data:/i.test(img.src)) {
                // Data URI
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    // Object URL
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw "Could not load image";
                        }
                    };
                    http_1.open("GET", img.src, true);
                    http_1.responseType = "arraybuffer";
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log("Got file of length " + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) !== 0xff || dataView.getUint8(1) !== 0xd8) {
            Debug.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xff) {
                Debug.log("Not a valid marker at offset " +
                    offset +
                    ", found: " +
                    dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log("Found 0xFFE1 marker");
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) !== 0xff || dataView.getUint8(1) !== 0xd8) {
            Debug.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 &&
                _dataView.getUint8(_offset + 1) === 0x42 &&
                _dataView.getUint8(_offset + 2) === 0x49 &&
                _dataView.getUint8(_offset + 3) === 0x4d &&
                _dataView.getUint8(_offset + 4) === 0x04 &&
                _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1c &&
                dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                // undefined, 8-bit byte, value depending on field
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:
                // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : entryOffset + 8;
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:
                // short, 16 bit int
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:
                // long, 32 bit int
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:
                // rational = two long values, first is numerator, second is denominator
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:
                // slong, 32 bit signed int
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:
                // signed rational, two slongs, first is numerator, second is denominator
                if (numValues === 1) {
                    return (file.getInt32(valueOffset, !bigEnd) /
                        file.getInt32(valueOffset + 4, !bigEnd));
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] =
                            file.getInt32(valueOffset + 8 * n, !bigEnd) /
                                file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = "";
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== "Exif") {
            Debug.log("Not valid EXIF data! " + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4d4d) {
                bigEnd = true;
            }
            else {
                Debug.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002a) {
            Debug.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case "LightSource":
                        case "Flash":
                        case "MeteringMode":
                        case "ExposureProgram":
                        case "SensingMethod":
                        case "SceneCaptureType":
                        case "SceneType":
                        case "CustomRendered":
                        case "WhiteBalance":
                        case "GainControl":
                        case "Contrast":
                        case "Saturation":
                        case "Sharpness":
                        case "SubjectDistanceRange":
                        case "FileSource":
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case "ExifVersion":
                        case "FlashpixVersion":
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case "ComponentsConfiguration":
                            var compopents = "Components";
                            exifData[tag] =
                                Exif.StringValues[compopents][exifData[tag][0]] +
                                    Exif.StringValues[compopents][exifData[tag][1]] +
                                    Exif.StringValues[compopents][exifData[tag][2]] +
                                    Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case "GPSVersionID":
                            gpsData[tag] =
                                gpsData[tag][0] +
                                    "." +
                                    gpsData[tag][1] +
                                    "." +
                                    gpsData[tag][2] +
                                    "." +
                                    gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    //   get rid of this silly issue
    //   get rid of this silly issue
    Exif.checkImageType = 
    //   get rid of this silly issue
    function (img) {
        return img instanceof Image || img instanceof HTMLImageElement;
    };
    Exif.getData = function (img, callback) {
        if (this.checkImageType(img) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return "";
        }
        var a, data = img.exifdata, strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    Exif.debug = false;
    Exif.IptcFieldMap = {
        0x78: "caption",
        0x6e: "credit",
        0x19: "keywords",
        0x37: "dateCreated",
        0x50: "byline",
        0x55: "bylineTitle",
        0x7a: "captionWriter",
        0x69: "headline",
        0x74: "copyright",
        0x0f: "category"
    };
    Exif.Tags = {
        // version tags
        0x9000: "ExifVersion",
        // EXIF version
        0xa000: "FlashpixVersion",
        // Flashpix format version
        // colorspace tags
        0xa001: "ColorSpace",
        // Color space information tag
        // image configuration
        0xa002: "PixelXDimension",
        // Valid width of meaningful image
        0xa003: "PixelYDimension",
        // Valid height of meaningful image
        0x9101: "ComponentsConfiguration",
        // Information about channels
        0x9102: "CompressedBitsPerPixel",
        // Compressed bits per pixel
        // user information
        0x927c: "MakerNote",
        // Any desired information written by the manufacturer
        0x9286: "UserComment",
        // Comments by user
        // related file
        0xa004: "RelatedSoundFile",
        // Name of related sound file
        // date and time
        0x9003: "DateTimeOriginal",
        // Date and time when the original image was generated
        0x9004: "DateTimeDigitized",
        // Date and time when the image was stored digitally
        0x9290: "SubsecTime",
        // Fractions of seconds for DateTime
        0x9291: "SubsecTimeOriginal",
        // Fractions of seconds for DateTimeOriginal
        0x9292: "SubsecTimeDigitized",
        // Fractions of seconds for DateTimeDigitized
        // picture-taking conditions
        0x829a: "ExposureTime",
        // Exposure time (in seconds)
        0x829d: "FNumber",
        // F number
        0x8822: "ExposureProgram",
        // Exposure program
        0x8824: "SpectralSensitivity",
        // Spectral sensitivity
        0x8827: "ISOSpeedRatings",
        // ISO speed rating
        0x8828: "OECF",
        // Optoelectric conversion factor
        0x9201: "ShutterSpeedValue",
        // Shutter speed
        0x9202: "ApertureValue",
        // Lens aperture
        0x9203: "BrightnessValue",
        // Value of brightness
        0x9204: "ExposureBias",
        // Exposure bias
        0x9205: "MaxApertureValue",
        // Smallest F number of lens
        0x9206: "SubjectDistance",
        // Distance to subject in meters
        0x9207: "MeteringMode",
        // Metering mode
        0x9208: "LightSource",
        // Kind of light source
        0x9209: "Flash",
        // Flash status
        0x9214: "SubjectArea",
        // Location and area of main subject
        0x920a: "FocalLength",
        // Focal length of the lens in mm
        0xa20b: "FlashEnergy",
        // Strobe energy in BCPS
        0xa20c: "SpatialFrequencyResponse",
        //
        0xa20e: "FocalPlaneXResolution",
        // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xa20f: "FocalPlaneYResolution",
        // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xa210: "FocalPlaneResolutionUnit",
        // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xa214: "SubjectLocation",
        // Location of subject in image
        0xa215: "ExposureIndex",
        // Exposure index selected on camera
        0xa217: "SensingMethod",
        // Image sensor type
        0xa300: "FileSource",
        // Image source (3 == DSC)
        0xa301: "SceneType",
        // Scene type (1 == directly photographed)
        0xa302: "CFAPattern",
        // Color filter array geometric pattern
        0xa401: "CustomRendered",
        // Special processing
        0xa402: "ExposureMode",
        // Exposure mode
        0xa403: "WhiteBalance",
        // 1 = auto white balance, 2 = manual
        0xa404: "DigitalZoomRation",
        // Digital zoom ratio
        0xa405: "FocalLengthIn35mmFilm",
        // Equivalent foacl length assuming 35mm film camera (in mm)
        0xa406: "SceneCaptureType",
        // Type of scene
        0xa407: "GainControl",
        // Degree of overall image gain adjustment
        0xa408: "Contrast",
        // Direction of contrast processing applied by camera
        0xa409: "Saturation",
        // Direction of saturation processing applied by camera
        0xa40a: "Sharpness",
        // Direction of sharpness processing applied by camera
        0xa40b: "DeviceSettingDescription",
        //
        0xa40c: "SubjectDistanceRange",
        // Distance to subject
        // other tags
        0xa005: "InteroperabilityIFDPointer",
        0xa420: "ImageUniqueID" // Identifier assigned uniquely to each image
    };
    Exif.TiffTags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x8769: "ExifIFDPointer",
        0x8825: "GPSInfoIFDPointer",
        0xa005: "InteroperabilityIFDPointer",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x011c: "PlanarConfiguration",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x011a: "XResolution",
        0x011b: "YResolution",
        0x0128: "ResolutionUnit",
        0x0111: "StripOffsets",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x0201: "JPEGInterchangeFormat",
        0x0202: "JPEGInterchangeFormatLength",
        0x012d: "TransferFunction",
        0x013e: "WhitePoint",
        0x013f: "PrimaryChromaticities",
        0x0211: "YCbCrCoefficients",
        0x0214: "ReferenceBlackWhite",
        0x0132: "DateTime",
        0x010e: "ImageDescription",
        0x010f: "Make",
        0x0110: "Model",
        0x0131: "Software",
        0x013b: "Artist",
        0x8298: "Copyright"
    };
    Exif.GPSTags = {
        0x0000: "GPSVersionID",
        0x0001: "GPSLatitudeRef",
        0x0002: "GPSLatitude",
        0x0003: "GPSLongitudeRef",
        0x0004: "GPSLongitude",
        0x0005: "GPSAltitudeRef",
        0x0006: "GPSAltitude",
        0x0007: "GPSTimeStamp",
        0x0008: "GPSSatellites",
        0x0009: "GPSStatus",
        0x000a: "GPSMeasureMode",
        0x000b: "GPSDOP",
        0x000c: "GPSSpeedRef",
        0x000d: "GPSSpeed",
        0x000e: "GPSTrackRef",
        0x000f: "GPSTrack",
        0x0010: "GPSImgDirectionRef",
        0x0011: "GPSImgDirection",
        0x0012: "GPSMapDatum",
        0x0013: "GPSDestLatitudeRef",
        0x0014: "GPSDestLatitude",
        0x0015: "GPSDestLongitudeRef",
        0x0016: "GPSDestLongitude",
        0x0017: "GPSDestBearingRef",
        0x0018: "GPSDestBearing",
        0x0019: "GPSDestDistanceRef",
        0x001a: "GPSDestDistance",
        0x001b: "GPSProcessingMethod",
        0x001c: "GPSAreaInformation",
        0x001d: "GPSDateStamp",
        0x001e: "GPSDifferential"
    };
    Exif.StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0x0000: "Flash did not fire",
            0x0001: "Flash fired",
            0x0005: "Strobe return light not detected",
            0x0007: "Strobe return light detected",
            0x0009: "Flash fired, compulsory flash mode",
            0x000d: "Flash fired, compulsory flash mode, return light not detected",
            0x000f: "Flash fired, compulsory flash mode, return light detected",
            0x0010: "Flash did not fire, compulsory flash mode",
            0x0018: "Flash did not fire, auto mode",
            0x0019: "Flash fired, auto mode",
            0x001d: "Flash fired, auto mode, return light not detected",
            0x001f: "Flash fired, auto mode, return light detected",
            0x0020: "No flash function",
            0x0041: "Flash fired, red-eye reduction mode",
            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
            0x0047: "Flash fired, red-eye reduction mode, return light detected",
            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004d: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004f: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059: "Flash fired, auto mode, red-eye reduction mode",
            0x005d: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005f: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },
        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };
    return Exif;
}());

//# sourceMappingURL=exif.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/imageCropper.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/imageCropper.js ***!
  \**********************************************************/
/*! exports provided: ImageCropper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropper", function() { return ImageCropper; });
/* harmony import */ var _model_bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/bounds */ "./node_modules/ngx-img-cropper/src/model/bounds.js");
/* harmony import */ var _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/cornerMarker */ "./node_modules/ngx-img-cropper/src/model/cornerMarker.js");
/* harmony import */ var _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/cropTouch */ "./node_modules/ngx-img-cropper/src/model/cropTouch.js");
/* harmony import */ var _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/dragMarker */ "./node_modules/ngx-img-cropper/src/model/dragMarker.js");
/* harmony import */ var _model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/imageCropperModel */ "./node_modules/ngx-img-cropper/src/model/imageCropperModel.js");
/* harmony import */ var _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageCropperDataShare */ "./node_modules/ngx-img-cropper/src/imageCropperDataShare.js");
/* harmony import */ var _model_pointPool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/pointPool */ "./node_modules/ngx-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = /** @class */ (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var centerTouchRadius = cropperSettings.centerTouchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        _this.canvasHeight = cropperSettings.canvasHeight;
        _this.canvasWidth = cropperSettings.canvasWidth;
        _this.width = width;
        if (width === void 0) {
            _this.width = 100;
        }
        _this.height = height;
        if (height === void 0) {
            _this.height = 50;
        }
        _this.keepAspect = keepAspect;
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        _this.touchRadius = touchRadius;
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"](200);
        _this.tl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"](x + (width / 2), y + (height / 2), centerTouchRadius, _this.cropperSettings);
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.updateSettings = function (cropperSettings) {
        this.cropperSettings = cropperSettings;
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            if (!this.cropperSettings.rounded) {
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                ctx.save();
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, 2 * Math.PI);
                ctx.clip();
                if (canvasAspect < sourceAspect) {
                    this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
                }
                else {
                    this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
                }
                ctx.restore();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(_model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(iX, iY), anchorMarker.position, _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(a);
        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.cropperSettings.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.cropperSettings.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImageHelper(false, this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                // only width changed
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                // only height changed
                actualW = scaledW;
            }
            else {
                // height and width changed
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY + actualH);
        var trPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX, actualY);
        var brPos = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW, actualY);
        var center = _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCroppedImageHelper = function (preserveSize, fillWidth, fillHeight) {
        if (this.cropperSettings.cropOnResize) {
            return this.getCroppedImage(preserveSize, fillWidth, fillHeight);
        }
        return this.croppedImage ? this.croppedImage : document.createElement('img');
    };
    // todo: Unused parameters?
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = 
    // todo: Unused parameters?
    function (preserveSize, fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize || preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            else {
                this.cropCanvas.width = this.cropWidth;
                this.cropCanvas.height = this.cropHeight;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new _model_bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            if (event.touches.length === 1) {
                if (this.isMouseDown) {
                    event.preventDefault();
                    for (var i = 0; i < event.touches.length; i++) {
                        var touch = event.touches[i];
                        var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                        var cropTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](touchPosition.x, touchPosition.y, touch.identifier);
                        _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(touchPosition);
                        this.move(cropTouch);
                    }
                }
            }
            else {
                if (event.touches.length === 2) {
                    event.preventDefault();
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var bounds = this.getBounds();
                        if (distance < this.previousDistance) {
                            bounds.top += 1;
                            bounds.left += 1;
                            bounds.right -= 1;
                            bounds.bottom -= 1;
                        }
                        if (distance > this.previousDistance) {
                            if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                // none
                                bounds.top -= 1;
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                // left
                                bounds.top -= 1;
                                bounds.right += 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                // right
                                bounds.top -= 1;
                                bounds.left -= 2;
                                bounds.bottom += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                // top
                                bounds.left -= 1;
                                bounds.right += 1;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right !== this.maxXClamp) {
                                // bottom
                                bounds.top -= 2;
                                bounds.left -= 1;
                                bounds.right += 1;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                // top left
                                bounds.right += 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top === this.minYClamp && bounds.bottom !== this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                // top right
                                bounds.left -= 2;
                                bounds.bottom += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left === this.minXClamp && bounds.right !== this.maxXClamp) {
                                // bottom left
                                bounds.top -= 2;
                                bounds.right += 2;
                            }
                            else if (bounds.top !== this.minYClamp && bounds.bottom === this.maxYClamp && bounds.left !== this.minXClamp && bounds.right === this.maxXClamp) {
                                // bottom right
                                bounds.top -= 2;
                                bounds.left -= 2;
                            }
                        }
                        if (bounds.top < this.minYClamp)
                            bounds.top = this.minYClamp;
                        if (bounds.bottom > this.maxYClamp)
                            bounds.bottom = this.maxYClamp;
                        if (bounds.left < this.minXClamp)
                            bounds.left = this.minXClamp;
                        if (bounds.right > this.maxXClamp)
                            bounds.right = this.maxXClamp;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](mousePosition.x, mousePosition.y, 0);
            }
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setOver(this.canvas);
                    _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            var touch = event.touches[0];
            var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
            var cropTouch = new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](touchPosition.x, touchPosition.y, touch.identifier);
            _model_pointPool__WEBPACK_IMPORTED_MODULE_6__["PointPool"].instance.returnPoint(touchPosition);
            this.isMouseDown = false;
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(cropTouch.x, cropTouch.y)) {
                    this.isMouseDown = true;
                }
            }
            if (this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
                this.isMouseDown = true;
            }
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof _model_cornerMarker__WEBPACK_IMPORTED_MODULE_1__["CornerMarker"] || dragTouch.dragHandle instanceof _model_dragMarker__WEBPACK_IMPORTED_MODULE_3__["DragMarker"]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = 
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            _imageCropperDataShare__WEBPACK_IMPORTED_MODULE_5__["ImageCropperDataShare"].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new _model_cropTouch__WEBPACK_IMPORTED_MODULE_2__["CropTouch"](0, 0, 0));
        }
    };
    return ImageCropper;
}(_model_imageCropperModel__WEBPACK_IMPORTED_MODULE_4__["ImageCropperModel"]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/imageCropperComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/imageCropperComponent.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageCropper */ "./node_modules/ngx-img-cropper/src/imageCropper.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cropperSettings */ "./node_modules/ngx-img-cropper/src/cropperSettings.js");
/* harmony import */ var _exif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exif */ "./node_modules/ngx-img-cropper/src/exif.js");
/* harmony import */ var _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/cropPosition */ "./node_modules/ngx-img-cropper/src/model/cropPosition.js");





var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageSet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_2__["CropperSettings"]();
        }
        if (this.settings.cropperClass) {
            this.renderer.setAttribute(canvas, "class", this.settings.cropperClass);
        }
        if (!this.settings.dynamicSizing) {
            this.renderer.setAttribute(canvas, "width", this.settings.canvasWidth.toString());
            this.renderer.setAttribute(canvas, "height", this.settings.canvasHeight.toString());
        }
        else {
            this.windowListener = this.resize.bind(this);
            window.addEventListener("resize", this.windowListener);
        }
        if (!this.cropper) {
            this.cropper = new _imageCropper__WEBPACK_IMPORTED_MODULE_1__["ImageCropper"](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImageHelper().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
        if (changes.inputImage) {
            this.setImage(changes.inputImage.currentValue);
        }
        if (changes.settings && this.cropper && this.cropper.isImageSet()) {
            this.cropper.updateSettings(this.settings);
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
        }
    };
    ImageCropperComponent.prototype.ngOnDestroy = function () {
        if (this.settings.dynamicSizing && this.windowListener) {
            window.removeEventListener("resize", this.windowListener);
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
        // if (!this.cropper.isImageSet() && !this.settings.noFileInput) {
        //   // load img
        //   this.fileInput.nativeElement.click();
        // }
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImageHelper().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        var _this = this;
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            fileReader.addEventListener("loadend", function (loadEvent) {
                image_1.addEventListener("load", function () {
                    _this.setImage(image_1);
                });
                image_1.src = loadEvent.target.result;
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.resize = function () {
        var canvas = this.cropcanvas.nativeElement;
        this.settings.canvasWidth = canvas.offsetWidth;
        this.settings.canvasHeight = canvas.offsetHeight;
        this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setAttribute(this.cropcanvas.nativeElement, "class", this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImageHelper().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        this.imageSet.emit(true);
        this.renderer.setAttribute(this.cropcanvas.nativeElement, "class", this.settings.cropperClass + " " + this.settings.croppingClass);
        this.raf = window.requestAnimationFrame(function () {
            if (_this.raf) {
                window.cancelAnimationFrame(_this.raf);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                window.cancelAnimationFrame(_this.raf);
                _this.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    _this.cropper.setImage(img);
                    if (_this.cropPosition && _this.cropPosition.isInitialized()) {
                        _this.cropper.updateCropPosition(_this.cropPosition.toBounds());
                    }
                    _this.image.original = img;
                    var bounds = _this.cropper.getCropBounds();
                    _this.image.image = _this.cropper.getCroppedImageHelper().src;
                    if (!_this.image) {
                        _this.image = image;
                    }
                    if (newBounds != null) {
                        bounds = newBounds;
                        _this.cropper.setBounds(bounds);
                        _this.cropper.updateCropPosition(bounds);
                    }
                    _this.onCrop.emit(bounds);
                });
            }
        });
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper &&
            changes["cropPosition"] &&
            this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new _model_cropPosition__WEBPACK_IMPORTED_MODULE_4__["CropPosition"](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getData(image, function () {
            var orientation = _exif__WEBPACK_IMPORTED_MODULE_3__["Exif"].getTag(image, "Orientation");
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d"), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement("img");
                img.width = cw;
                img.height = ch;
                img.addEventListener("load", function () {
                    callback(img);
                });
                img.src = canvas.toDataURL("image/png");
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "img-cropper",
                    template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" #fileInput type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
                },] },
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    ]; };
    ImageCropperComponent.propDecorators = {
        "cropcanvas": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["cropcanvas", undefined,] },],
        "fileInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["fileInput",] },],
        "settings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["settings",] },],
        "image": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["image",] },],
        "inputImage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["inputImage",] },],
        "cropper": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cropPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "cropPositionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onCrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "imageSet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ImageCropperComponent;
}());

//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/imageCropperDataShare.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/imageCropperDataShare.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperDataShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperDataShare", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = /** @class */ (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ImageCropperDataShare.share = {};
    return ImageCropperDataShare;
}());

//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/imageCropperModule.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/imageCropperModule.js ***!
  \****************************************************************/
/*! exports provided: ImageCropperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageCropperComponent */ "./node_modules/ngx-img-cropper/src/imageCropperComponent.js");



var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    declarations: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]],
                    exports: [_imageCropperComponent__WEBPACK_IMPORTED_MODULE_2__["ImageCropperComponent"]]
                },] },
    ];
    /** @nocollapse */
    ImageCropperModule.ctorParameters = function () { return []; };
    return ImageCropperModule;
}());

//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/bounds.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/bounds.js ***!
  \**********************************************************/
/*! exports provided: Bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return Bounds; });
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ngx-img-cropper/src/model/pointPool.js");

var Bounds = /** @class */ (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return _pointPool__WEBPACK_IMPORTED_MODULE_0__["PointPool"].instance.borrow(this.left + w / 2, this.top + h / 2);
    };
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/cornerMarker.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/cornerMarker.js ***!
  \****************************************************************/
/*! exports provided: CornerMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerMarker", function() { return CornerMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ngx-img-cropper/src/model/handle.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = /** @class */ (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = this.cropperSettings.markerSizeMultiplier;
        var vDirection = this.cropperSettings.markerSizeMultiplier;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -this.cropperSettings.markerSizeMultiplier;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -this.cropperSettings.markerSizeMultiplier;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        if (this.cropperSettings.cropperDrawSettings.lineDash) {
            ctx.setLineDash([1, 3]);
        }
        ctx.lineJoin = "miter";
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y + sideLength * vDirection);
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + sideLength * vDirection);
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle =
            this.cropperSettings.cropperDrawSettings.strokeColor ||
                "rgba(255,255,255,.7)";
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = this.cropperSettings.markerSizeMultiplier;
        var vDirection = this.cropperSettings.markerSizeMultiplier;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -this.cropperSettings.markerSizeMultiplier;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -this.cropperSettings.markerSizeMultiplier;
        }
        ctx.beginPath();
        if (this.cropperSettings.cropperDrawSettings.lineDash) {
            ctx.setLineDash([1, 3]);
        }
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + sideLength * hDirection, this.position.y + this.offset.y + sideLength * vDirection);
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + sideLength * vDirection);
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle =
            this.cropperSettings.cropperDrawSettings.strokeColor ||
                "rgba(255,255,255,.7)";
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/cropPosition.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/cropPosition.js ***!
  \****************************************************************/
/*! exports provided: CropPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPosition", function() { return CropPosition; });
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounds */ "./node_modules/ngx-img-cropper/src/model/bounds.js");

var CropPosition = /** @class */ (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new _bounds__WEBPACK_IMPORTED_MODULE_0__["Bounds"](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/cropTouch.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/cropTouch.js ***!
  \*************************************************************/
/*! exports provided: CropTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropTouch", function() { return CropTouch; });
var CropTouch = /** @class */ (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/dragMarker.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/dragMarker.js ***!
  \**************************************************************/
/*! exports provided: DragMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragMarker", function() { return DragMarker; });
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handle */ "./node_modules/ngx-img-cropper/src/model/handle.js");
/* harmony import */ var _pointPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointPool */ "./node_modules/ngx-img-cropper/src/model/pointPool.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = /** @class */ (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(0, -maxLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength, 0));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(_pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        if (this.cropperSettings.showCenterMarker) {
            ctx.beginPath();
            ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
            for (var k = 0; k < points.length; k++) {
                var p = points[k];
                ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
            }
            ctx.closePath();
            ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
            ctx.fill();
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
            ctx.stroke();
        }
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        _pointPool__WEBPACK_IMPORTED_MODULE_1__["PointPool"].instance.returnPoint(c);
    };
    return DragMarker;
}(_handle__WEBPACK_IMPORTED_MODULE_0__["Handle"]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/handle.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/handle.js ***!
  \**********************************************************/
/*! exports provided: Handle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ngx-img-cropper/src/model/point.js");
/* harmony import */ var _cropperSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropperSettings */ "./node_modules/ngx-img-cropper/src/cropperSettings.js");


var Handle = /** @class */ (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new _cropperSettings__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        this.over = false;
        this.drag = false;
        this._position = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](x, y);
        this.offset = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x &&
            x < this.position.x + this.radius + this.offset.x &&
            y > this.position.y - this.radius + this.offset.y &&
            y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/imageCropperModel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/imageCropperModel.js ***!
  \*********************************************************************/
/*! exports provided: ImageCropperModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModel", function() { return ImageCropperModel; });
var ImageCropperModel = /** @class */ (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/point.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/point.js ***!
  \*********************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "./node_modules/ngx-img-cropper/src/model/pointPool.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-img-cropper/src/model/pointPool.js ***!
  \*************************************************************/
/*! exports provided: PointPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPool", function() { return PointPool; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./node_modules/ngx-img-cropper/src/model/point.js");

var PointPool = /** @class */ (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = (this.firstAvailable = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]());
        for (var i = 1; i < initialSize; i++) {
            var p = new _point__WEBPACK_IMPORTED_MODULE_0__["Point"]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw "Pool exhausted";
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/shared/components/form-wizard/form-wizard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/form-wizard.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardModule", function() { return FormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]],
            exports: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]]
        })
    ], FormWizardModule);
    return FormWizardModule;
}());



/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts ***!
  \************************************************************************************/
/*! exports provided: WizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WizardStepComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onComplete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isActive'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], WizardStepComponent.prototype, "isActive", null);
    WizardStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wizard-step',
            template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], WizardStepComponent);
    return WizardStepComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-justified\">\n      <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n        <a (click)=\"goToStep(step)\">{{step.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"card-footer\" [hidden]=\"isCompleted\">\n      <button type=\"button\" class=\"btn btn-rounded btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n      <button type=\"button\" class=\"btn btn-rounded btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n      <button type=\"button\" class=\"btn btn-rounded btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%; }\n\n.card-header {\n  background-color: #fff;\n  padding: 0;\n  font-size: 1.25rem; }\n\n.card-block {\n  overflow-y: auto; }\n\n.card-footer {\n  background-color: #fff;\n  border-top: 0 none; }\n\n.nav-item {\n  padding: 1rem 0rem;\n  border-bottom: 0.5rem solid #ccc; }\n\n.active {\n  font-weight: bold;\n  color: black;\n  border-bottom-color: #1976D2 !important; }\n\n.enabled {\n  cursor: pointer;\n  border-bottom-color: #58a2ea; }\n\n.disabled {\n  color: #ccc; }\n\n.completed {\n  cursor: default; }\n"

/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.ts ***!
  \**************************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__["WizardStepComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], WizardComponent.prototype, "wizardSteps", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardComponent.prototype, "onStepChanged", void 0);
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/shared/components/form-wizard/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.scss */ "./src/app/shared/components/form-wizard/wizard/wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Basic</h1>\n    <ul>\n        <li><a href=\"\">Form</a></li>\n        <li>Basic</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-3\">Form Inputs</div>\n                <form [formGroup]=\"formBasic\" (ngSubmit)=\"submit()\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"firstName\">First name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter your first name\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"lastName\">Last name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter your last name\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                                placeholder=\"Enter email\">\n                            <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"phone\">Phone</label>\n                            <input class=\"form-control\" id=\"phone\" placeholder=\"Enter phone\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"credit\">Cradit card number</label>\n                            <input class=\"form-control\" id=\"credit\" placeholder=\"Card\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"credit\">Website</label>\n                            <input class=\"form-control\" id=\"credit\" placeholder=\"Web address\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"picker1\">Birth date</label>\n                            <div class=\"input-group\">\n                                <input id=\"picker1\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                                    ngbDatepicker #dp=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-secondary\" (click)=\"dp.toggle()\" type=\"button\">\n                                        <i class=\"icon-regular i-Calendar-4\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"picker1\">Select</label>\n                            <select class=\"form-control\">\n                                <option>Option 1</option>\n                                <option>Option 1</option>\n                                <option>Option 1</option>\n                            </select>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <btn-loading btnClass=\"btn-primary btn-rounded\" [loading]=\"loading\">Submit</btn-loading>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-3\">Form Inputs Rounded</div>\n                <form [formGroup]=\"formBasic\" (ngSubmit)=\"submit()\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"firstName\">First name</label>\n                            <input type=\"text\" class=\"form-control form-control-rounded\" id=\"firstName\" placeholder=\"Enter your first name\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"lastName\">Last name</label>\n                            <input type=\"text\" class=\"form-control form-control-rounded\" id=\"lastName\" placeholder=\"Enter your last name\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" class=\"form-control form-control-rounded\" id=\"exampleInputEmail1\"\n                                aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"phone\">Phone</label>\n                            <input class=\"form-control form-control-rounded\" id=\"phone\" placeholder=\"Enter phone\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"credit\">Cradit card number</label>\n                            <input class=\"form-control form-control-rounded\" id=\"credit\" placeholder=\"Card\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"credit\">Website</label>\n                            <input class=\"form-control form-control-rounded\" id=\"credit\" placeholder=\"Web address\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"picker1\">Birth date</label>\n                            <div class=\"input-group\">\n                                <input id=\"picker1\" class=\"form-control form-control-rounded\" placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                                    ngbDatepicker #dp=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-secondary btn-rounded\" (click)=\"dp.toggle()\" type=\"button\">\n                                        <i class=\"icon-regular i-Calendar-4\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"picker1\">Select</label>\n                            <select class=\"form-control form-control-rounded\">\n                                <option>Option 1</option>\n                                <option>Option 1</option>\n                                <option>Option 1</option>\n                            </select>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <btn-loading btnClass=\"btn-primary btn-rounded\" [loading]=\"loading\">Submit</btn-loading>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Switch</div>\n                <label class=\"switch switch-primary mr-3\">\n                    <span>Primary</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-secondary mr-3\">\n                    <span>Secondary</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-success mr-3\">\n                    <span>Success</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-warning mr-3\">\n                    <span>Warning</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-danger mr-3\">\n                    <span>Danger</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-light mr-3\">\n                    <span>Light</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n                <label class=\"switch switch-dark mr-3\">\n                    <span>Dark</span>\n                    <input type=\"checkbox\" checked>\n                    <span class=\"slider\"></span>\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Checkbox Default</div>\n                <label class=\"checkbox checkbox-primary\">\n                    <input type=\"checkbox\" checked>\n                    <span>Primary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-secondary\">\n                    <input type=\"checkbox\" checked>\n                    <span>Secondary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-success\">\n                    <input type=\"checkbox\" checked>\n                    <span>Success</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-warning\">\n                    <input type=\"checkbox\" checked>\n                    <span>Warning</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-danger\">\n                    <input type=\"checkbox\" checked>\n                    <span>Danger</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-info\">\n                    <input type=\"checkbox\" checked>\n                    <span>Info</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-dark\">\n                    <input type=\"checkbox\" checked>\n                    <span>Dark</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Checkbox Outline</div>\n                <label class=\"checkbox checkbox-outline-primary\">\n                    <input type=\"checkbox\" checked>\n                    <span>Primary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-secondary\">\n                    <input type=\"checkbox\" checked>\n                    <span>Secondary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-success\">\n                    <input type=\"checkbox\" checked>\n                    <span>Success</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-warning\">\n                    <input type=\"checkbox\" checked>\n                    <span>Warning</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-danger\">\n                    <input type=\"checkbox\" checked>\n                    <span>Danger</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-info\">\n                    <input type=\"checkbox\" checked>\n                    <span>Info</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"checkbox checkbox-outline-dark\">\n                    <input type=\"checkbox\" checked>\n                    <span>Dark</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\" [formGroup]=\"radioGroup\">\n                <div class=\"card-title\">Radio Button</div>\n                <label class=\"radio radio-primary\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"1\" formControlName=\"radio\">\n                    <span>Primary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-secondary\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"2\" formControlName=\"radio\">\n                    <span>Secondary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-success\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"3\" formControlName=\"radio\">\n                    <span>Success</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-warning\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"4\" formControlName=\"radio\">\n                    <span>Warning</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-danger\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"5\" formControlName=\"radio\">\n                    <span>Danger</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-light\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"6\" formControlName=\"radio\">\n                    <span>Light</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-dark\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"7\" formControlName=\"radio\">\n                    <span>Dark</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\" [formGroup]=\"radioGroup\">\n                <div class=\"card-title\">Radio Button Outline</div>\n                <label class=\"radio radio-outline-primary\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"1\" formControlName=\"radio\">\n                    <span>Primary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-secondary\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"2\" formControlName=\"radio\">\n                    <span>Secondary</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-success\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"3\" formControlName=\"radio\">\n                    <span>Success</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-warning\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"4\" formControlName=\"radio\">\n                    <span>Warning</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-danger\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"5\" formControlName=\"radio\">\n                    <span>Danger</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-light\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"6\" formControlName=\"radio\">\n                    <span>Light</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-dark\">\n                    <input type=\"radio\" name=\"radio\" [value]=\"7\" formControlName=\"radio\">\n                    <span>Dark</span>\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/basic-form/basic-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/forms/basic-form/basic-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(fb, toastr) {
        this.fb = fb;
        this.toastr = toastr;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        this.buildFormBasic();
        this.radioGroup = this.fb.group({
            radio: []
        });
    };
    BasicFormComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    BasicFormComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
        }, 3000);
    };
    BasicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/views/forms/basic-form/basic-form.component.html"),
            styles: [__webpack_require__(/*! ./basic-form.component.scss */ "./src/app/views/forms/basic-form/basic-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/form-layouts/form-layouts.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/form-layouts/form-layouts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Form Layouts</h1>\n    <ul>\n        <li><a href=\"\">Forms</a></li>\n        <li>Form Layouts</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n        <h4>Horizontal Layout</h4>\n        <p>A form control layout using row to create horizontal alignment.</p>\n        <div class=\"card mb-5\">\n            <div class=\"card-body\">\n                <div class=\"row row-xs\">\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\">\n                    </div>\n                    <div class=\"col-md-4 mt-3 mt-md-0\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                    </div>\n                    <div class=\"col-md-4 mt-3 mt-md-0\">\n                        <button class=\"btn btn-primary btn-block\">Sign In</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"border-top mb-5\"></div>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h4>Verticle Layout</h4>\n        <p>A form control layout using flex to create verticle alignment.</p>\n        <div class=\"card mb-5\">\n            <div class=\"card-body\">\n                <div class=\"d-flex flex-column\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                    </div>\n                    <button class=\"btn btn-primary pd-x-20\">Sign In</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"border-top mb-5\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h4>Left Label Alignment</h4>\n        <p>A form control layout using row with left label alignment.</p>\n        <div class=\"card mb-5\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n                        </div>\n                    </div>\n                    <fieldset class=\"form-group\">\n                        <div class=\"row\">\n                            <legend class=\"col-form-label col-sm-2 pt-0\">Radios</legend>\n                            <div class=\"col-sm-10\">\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\"\n                                        value=\"option1\" checked>\n                                    <label class=\"form-check-label\" for=\"gridRadios1\">\n                                        First radio\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\"\n                                        value=\"option2\">\n                                    <label class=\"form-check-label\" for=\"gridRadios2\">\n                                        Second radio\n                                    </label>\n                                </div>\n                                <div class=\"form-check disabled\">\n                                    <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\"\n                                        value=\"option3\" disabled>\n                                    <label class=\"form-check-label\" for=\"gridRadios3\">\n                                        Third disabled radio\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </fieldset>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-2\">Checkbox</div>\n                        <div class=\"col-sm-10\">\n                            <div class=\"form-check\">\n                                <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\n                                <label class=\"form-check-label\" for=\"gridCheck1\">\n                                    Example checkbox\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-10\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"border-top mb-5\"></div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h4>Form Inside Dropdown</h4>\n        <p>A form group layout inside dropdown</p>\n        <div ngbDropdown>\n            <button ngbDropdownToggle class=\"btn btn-primary\">Download File</button>\n            <div ngbDropdownMenu class=\"p-3\" style=\"width: 320px\">\n                <div class=\"d-flex flex-column\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                    </div>\n                    <button class=\"btn btn-primary pd-x-20\">Sign In</button>\n                </div>\n            </div>\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/views/forms/form-layouts/form-layouts.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/form-layouts/form-layouts.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/form-layouts/form-layouts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/form-layouts/form-layouts.component.ts ***!
  \********************************************************************/
/*! exports provided: FormLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutsComponent", function() { return FormLayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormLayoutsComponent = /** @class */ (function () {
    function FormLayoutsComponent() {
    }
    FormLayoutsComponent.prototype.ngOnInit = function () {
    };
    FormLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-layouts',
            template: __webpack_require__(/*! ./form-layouts.component.html */ "./src/app/views/forms/form-layouts/form-layouts.component.html"),
            styles: [__webpack_require__(/*! ./form-layouts.component.scss */ "./src/app/views/forms/form-layouts/form-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormLayoutsComponent);
    return FormLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/forms-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-inputs/tag-inputs.component */ "./src/app/views/forms/tag-inputs/tag-inputs.component.ts");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/views/forms/img-cropper/img-cropper.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");
/* harmony import */ var _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-mask/input-mask.component */ "./src/app/views/forms/input-mask/input-mask.component.ts");
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-groups/input-groups.component */ "./src/app/views/forms/input-groups/input-groups.component.ts");
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ "./src/app/views/forms/form-layouts/form-layouts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'basic',
        component: _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicFormComponent"]
    },
    {
        path: 'layouts',
        component: _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_8__["FormLayoutsComponent"]
    },
    {
        path: 'input-group',
        component: _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_7__["InputGroupsComponent"]
    },
    {
        path: 'input-mask',
        component: _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_6__["InputMaskComponent"]
    },
    {
        path: 'tag-input',
        component: _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_3__["TagInputsComponent"]
    },
    {
        path: 'wizard',
        component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"]
    },
    {
        path: 'img-cropper',
        component: _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_4__["AppImgCropperComponent"]
    }
];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: AppFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFormsModule", function() { return AppFormsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms-routing.module */ "./src/app/views/forms/forms-routing.module.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/views/forms/basic-form/basic-form.component.ts");
/* harmony import */ var _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tag-inputs/tag-inputs.component */ "./src/app/views/forms/tag-inputs/tag-inputs.component.ts");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/views/forms/img-cropper/img-cropper.component.ts");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/views/forms/wizard/wizard.component.ts");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ "./src/app/shared/components/form-wizard/form-wizard.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./input-mask/input-mask.component */ "./src/app/views/forms/input-mask/input-mask.component.ts");
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./input-groups/input-groups.component */ "./src/app/views/forms/input-groups/input-groups.component.ts");
/* harmony import */ var _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-layouts/form-layouts.component */ "./src/app/views/forms/form-layouts/form-layouts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppFormsModule = /** @class */ (function () {
    function AppFormsModule() {
    }
    AppFormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                ngx_img_cropper__WEBPACK_IMPORTED_MODULE_10__["ImageCropperModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_13__["FormWizardModule"],
                _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"]
            ],
            declarations: [_basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_7__["BasicFormComponent"], _tag_inputs_tag_inputs_component__WEBPACK_IMPORTED_MODULE_8__["TagInputsComponent"], _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_9__["AppImgCropperComponent"], _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"], _input_mask_input_mask_component__WEBPACK_IMPORTED_MODULE_15__["InputMaskComponent"], _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_16__["InputGroupsComponent"], _form_layouts_form_layouts_component__WEBPACK_IMPORTED_MODULE_17__["FormLayoutsComponent"]]
        })
    ], AppFormsModule);
    return AppFormsModule;
}());



/***/ }),

/***/ "./src/app/views/forms/img-cropper/img-cropper.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/img-cropper/img-cropper.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Image Cropper</h1>\n  <ul>\n    <li><a href=\"\">Forms</a></li>\n    <li>Image Cropper</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">NGX Image Cropper</div>\n        <div>\n          <button class=\"btn btn-outline-primary btn-rounded mr-3\" (click)=\"open(modalCropper)\">Launch Cropper</button>\n          <img *ngIf=\"data?.image\" class=\"rounded-circle\" [src]=\"data?.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #modalCropper let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Upload & Crop</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <img-cropper [image]=\"data\" [settings]=\"cropperSettings\"></img-cropper><br>\n    <img *ngIf=\"data?.image\" class=\"mt-3  mr-3\" [src]=\"data?.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n    <img *ngIf=\"data?.image\" class=\"rounded-circle  mt-3\" [src]=\"data?.image\" [width]=\"cropperSettings.croppedWidth\" [height]=\"cropperSettings.croppedHeight\">\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-rounded btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/views/forms/img-cropper/img-cropper.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/img-cropper/img-cropper.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/img-cropper/img-cropper.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/img-cropper/img-cropper.component.ts ***!
  \******************************************************************/
/*! exports provided: AppImgCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppImgCropperComponent", function() { return AppImgCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppImgCropperComponent = /** @class */ (function () {
    function AppImgCropperComponent(modalService) {
        this.modalService = modalService;
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_1__["CropperSettings"]();
        // this.cropperSettings.width = 100;
        // this.cropperSettings.height = 100;
        // this.cropperSettings.croppedWidth = 100;
        // this.cropperSettings.croppedHeight = 100;
        // this.cropperSettings.canvasWidth = 400;
        // this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.cropperDrawSettings.lineDash = true;
        this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth = 0;
        this.data = {};
    }
    AppImgCropperComponent.prototype.ngOnInit = function () {
    };
    AppImgCropperComponent.prototype.open = function (modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    AppImgCropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-cropper',
            template: __webpack_require__(/*! ./img-cropper.component.html */ "./src/app/views/forms/img-cropper/img-cropper.component.html"),
            styles: [__webpack_require__(/*! ./img-cropper.component.scss */ "./src/app/views/forms/img-cropper/img-cropper.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AppImgCropperComponent);
    return AppImgCropperComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/input-groups/input-groups.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/input-groups/input-groups.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Input Group</h1>\n    <ul>\n        <li><a href=\"\">Form</a></li>\n        <li>Input Group</li>\n    </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Basic Example</div>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n                        aria-describedby=\"basic-addon1\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\"\n                        aria-describedby=\"basic-addon2\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\n                    </div>\n                </div>\n\n                <label for=\"basic-url\">Your vanity URL</label>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon3\">https://example.com/users/</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">With textarea</span>\n                    </div>\n                    <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">File inputs</div>\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n                    </div>\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\" aria-describedby=\"inputGroupFileAddon01\">\n                        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                    </div>\n                </div>\n\n                <div class=\"input-group mb-3\">\n                    <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\">\n                        <label class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\">Choose\n                            file</label>\n                    </div>\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\" id=\"inputGroupFileAddon02\">Upload</span>\n                    </div>\n                </div>\n\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/forms/input-groups/input-groups.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/input-groups/input-groups.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/input-groups/input-groups.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/input-groups/input-groups.component.ts ***!
  \********************************************************************/
/*! exports provided: InputGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupsComponent", function() { return InputGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputGroupsComponent = /** @class */ (function () {
    function InputGroupsComponent() {
    }
    InputGroupsComponent.prototype.ngOnInit = function () {
    };
    InputGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-groups',
            template: __webpack_require__(/*! ./input-groups.component.html */ "./src/app/views/forms/input-groups/input-groups.component.html"),
            styles: [__webpack_require__(/*! ./input-groups.component.scss */ "./src/app/views/forms/input-groups/input-groups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputGroupsComponent);
    return InputGroupsComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/input-mask/input-mask.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/input-mask/input-mask.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Masks</h1>\n    <ul>\n        <li><a href=\"\">Form</a></li>\n        <li>Input Masks</li>\n    </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-3\">Input Masks</div>\n                <form [formGroup]=\"formMask\" (ngSubmit)=\"submit()\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"isbn1\">ISBN 1</label>\n                            <input type=\"text\" class=\"form-control\" id=\"isbn1\" [textMask]=\"{mask: isbnMask1}\"\n                                placeholder=\"999-99-999-9999-9\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"isbn2\">ISBN 2</label>\n                            <input type=\"text\" class=\"form-control\" id=\"isbn2\" [textMask]=\"{mask: isbnMask2}\"\n                                placeholder=\"999 99 999 9999 9\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"isbn3\">ISBN 3</label>\n                            <input type=\"text\" class=\"form-control\" id=\"isbn3\" [textMask]=\"{mask: isbnMask3}\"\n                                placeholder=\"999/99/999/9999/9\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"phone\">Phone</label>\n                            <input class=\"form-control\" id=\"phone\" [textMask]=\"{mask: phoneMask}\" formControlName=\"phone\"\n                                placeholder=\"(323) 323-4324\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"card\">Master card</label>\n                            <input class=\"form-control\" id=\"card\" [textMask]=\"{mask: cardMask}\" placeholder=\"9999 9999 9999 9999\">\n                        </div>\n\n                        <div class=\"col-md-6 form-group mb-3\">\n                            <label for=\"picker1\">Date</label>\n                            <div class=\"input-group\">\n                                <input id=\"picker1\" class=\"form-control\" [textMask]=\"{mask: dateMask}\" placeholder=\"mm/dd/yyyy\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <btn-loading btnClass=\"btn-primary\">Submit</btn-loading>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/forms/input-mask/input-mask.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/input-mask/input-mask.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/input-mask/input-mask.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/forms/input-mask/input-mask.component.ts ***!
  \****************************************************************/
/*! exports provided: InputMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskComponent", function() { return InputMaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputMaskComponent = /** @class */ (function () {
    function InputMaskComponent(fb) {
        this.fb = fb;
        this.isbnMask1 = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/];
        this.isbnMask2 = [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/];
        this.isbnMask3 = [/\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '/', /\d/];
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
        this.dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    }
    InputMaskComponent.prototype.ngOnInit = function () {
        this.formMask = this.fb.group({
            experience: [],
            phone: []
        });
    };
    InputMaskComponent.prototype.submit = function () {
        console.log(this.formMask.value);
    };
    InputMaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-mask',
            template: __webpack_require__(/*! ./input-mask.component.html */ "./src/app/views/forms/input-mask/input-mask.component.html"),
            styles: [__webpack_require__(/*! ./input-mask.component.scss */ "./src/app/views/forms/input-mask/input-mask.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], InputMaskComponent);
    return InputMaskComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/tag-inputs/tag-inputs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/tag-inputs/tag-inputs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Tag Input</h1>\n  <ul>\n    <li><a href=\"\">Forms</a></li>\n    <li>Tag input</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Tag inputs</div>\n        <tag-input [formControl]=\"tagsCtrl1\"\n          (onSelect)=\"onSelect($event)\"\n          [modelAsStrings]=\"true\" theme='primary'>\n        </tag-input>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Autocomplete</div>\n        <tag-input [formControl]=\"tagsCtrl2\"\n          (onSelect)=\"onSelect($event)\"\n          theme='primary' placeholder=\"Type Country name\">\n          <tag-input-dropdown [focusFirstElement]=\"true\" [autocompleteItems]=\"autocompletes$ | async\">\n          </tag-input-dropdown>\n        </tag-input>\n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/views/forms/tag-inputs/tag-inputs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/forms/tag-inputs/tag-inputs.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/tag-inputs/tag-inputs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/forms/tag-inputs/tag-inputs.component.ts ***!
  \****************************************************************/
/*! exports provided: TagInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputsComponent", function() { return TagInputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagInputsComponent = /** @class */ (function () {
    function TagInputsComponent(dl) {
        this.dl = dl;
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.items);
        this.tagsCtrl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([{ display: 'Bangladesh', value: 'BD' }]);
    }
    TagInputsComponent.prototype.ngOnInit = function () {
        this.autocompletes$ = this.dl.getCountries();
    };
    TagInputsComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is ' + item);
    };
    TagInputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-inputs',
            template: __webpack_require__(/*! ./tag-inputs.component.html */ "./src/app/views/forms/tag-inputs/tag-inputs.component.html"),
            styles: [__webpack_require__(/*! ./tag-inputs.component.scss */ "./src/app/views/forms/tag-inputs/tag-inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_2__["DataLayerService"]])
    ], TagInputsComponent);
    return TagInputsComponent;
}());



/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Form Wizard</h1>\n  <ul>\n    <li><a href=\"\">Form</a></li>\n    <li>Wizard</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n   \n    <form-wizard>\n      <wizard-step [title]=\"'Basic Info'\" [isValid]=\"basicForm.form.valid\" (onNext)=\"onStep1Next($event)\">\n        <form #basicForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"firstName\">First Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\"\n                [(ngModel)]=\"data.firstName\">\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"lastName\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Last name\"\n                [(ngModel)]=\"data.lastName\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" name=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"\n                [(ngModel)]=\"data.email\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"phone\">Phone number</label>\n              <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Phone number\"\n                [(ngModel)]=\"data.phone\">\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step [title]=\"'Company info'\" [isValid]=\"step2Form.valid\" (onNext)=\"onStep2Next($event)\">\n        <form [formGroup]=\"step2Form\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h6 class=\"mb-2\">Employees</h6>\n              <label class=\"checkbox checkbox-primary\">\n                <input type=\"checkbox\" checked>\n                <span>Designer</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"checkbox checkbox-secondary\">\n                <input type=\"checkbox\" checked>\n                <span>Coder</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"checkbox checkbox-success\">\n                <input type=\"checkbox\" checked>\n                <span>QA</span>\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n            <div class=\"col-md-6\">\n                <h6 class=\"mb-2\">Company age</h6>\n                <label class=\"radio radio-outline-primary\">\n                  <input type=\"radio\" name=\"experience\" [value]=\"1\" formControlName=\"experience\">\n                  <span>Less than 1 Year</span>\n                  <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-success\">\n                  <input type=\"radio\" name=\"experience\" [value]=\"3\" formControlName=\"experience\">\n                  <span>1-5 Years</span>\n                  <span class=\"checkmark\"></span>\n                </label>\n                <label class=\"radio radio-outline-warning\">\n                  <input type=\"radio\" name=\"experience\" [value]=\"4\" formControlName=\"experience\">\n                  <span>5+ Years</span>\n                  <span class=\"checkmark\"></span>\n                </label>\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step [title]=\"'Payment Info'\" (onNext)=\"onStep3Next($event)\">\n        <form #paymentForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"card\">Card number</label>\n              <input type=\"text\" class=\"form-control\" id=\"card\" name=\"card\" placeholder=\"Card Number\"\n                [(ngModel)]=\"data.card\">\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"exp\">Expires at</label>\n              <input type=\"text\" class=\"form-control\" id=\"exp\" name=\"exp\" placeholder=\"Expires at\"\n                [(ngModel)]=\"data.cardExpiresAt\">\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"security\">Security code</label>\n              <input type=\"text\" class=\"form-control\" id=\"security\" name=\"exp\" placeholder=\"Security code\"\n                [(ngModel)]=\"data.code\">\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step [title]=\"'Final'\" (onComplete)=\"onComplete($event)\">\n        <div class=\"text-center mt-4 mb-4\">\n            <i class=\"i-Checked-User text-32 mb-3 text-success d-inline-block\"></i>\n            <h5 class=\"font-weight-light\">Thank you! You have completed all the steps.</h5>\n        </div>\n      </wizard-step>\n    </form-wizard>\n     \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/forms/wizard/wizard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/forms/wizard/wizard.component.ts ***!
  \********************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = /** @class */ (function () {
    function WizardComponent(fb) {
        this.fb = fb;
        this.data = {
            email: ''
        };
    }
    WizardComponent.prototype.ngOnInit = function () {
        this.step2Form = this.fb.group({
            experience: [2]
        });
    };
    WizardComponent.prototype.onStep1Next = function (e) { };
    WizardComponent.prototype.onStep2Next = function (e) { };
    WizardComponent.prototype.onStep3Next = function (e) { };
    WizardComponent.prototype.onComplete = function (e) { };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/views/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.scss */ "./src/app/views/forms/wizard/wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-forms-forms-module.js.map