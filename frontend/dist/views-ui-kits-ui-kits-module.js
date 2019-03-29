(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-ui-kits-ui-kits-module"],{

/***/ "./node_modules/angular2-ladda/module/ladda-config.js":
/*!************************************************************!*\
  !*** ./node_modules/angular2-ladda/module/ladda-config.js ***!
  \************************************************************/
/*! exports provided: LaddaConfigArgs, configAttributes, LaddaConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfigArgs", function() { return LaddaConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configAttributes", function() { return configAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfig", function() { return LaddaConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LaddaConfigArgs = /** @class */ (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());

var configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = /** @class */ (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    LaddaConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LaddaConfig.ctorParameters = function () { return [
        { type: LaddaConfigArgs, },
    ]; };
    return LaddaConfig;
}());

//# sourceMappingURL=ladda-config.js.map

/***/ }),

/***/ "./node_modules/angular2-ladda/module/ladda.directive.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular2-ladda/module/ladda.directive.js ***!
  \***************************************************************/
/*! exports provided: LaddaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaDirective", function() { return LaddaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ladda_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ladda-config */ "./node_modules/angular2-ladda/module/ladda-config.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");



var LaddaDirective = /** @class */ (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in _ladda_config__WEBPACK_IMPORTED_MODULE_1__["configAttributes"]) {
            var configValue = config[_ladda_config__WEBPACK_IMPORTED_MODULE_1__["configAttributes"][attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LaddaDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LaddaDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._ladda = Object(ladda__WEBPACK_IMPORTED_MODULE_2__["create"])(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LaddaDirective.prototype.ngOnDestroy = function () {
        if (this._ladda) {
            this._ladda.remove();
        }
    };
    LaddaDirective.prototype.updateLadda = function (previousValue) {
        var loading = typeof this.loading === 'number' || !!this.loading;
        var wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this._ladda.start();
        }
        if (typeof this.loading === 'number') {
            this._ladda.setProgress(this.loading);
        }
    };
    LaddaDirective.prototype.updateDisabled = function () {
        this.el.disabled = this.disabled;
    };
    LaddaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ladda]'
                },] },
    ];
    /** @nocollapse */
    LaddaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _ladda_config__WEBPACK_IMPORTED_MODULE_1__["LaddaConfigArgs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_ladda_config__WEBPACK_IMPORTED_MODULE_1__["LaddaConfig"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    LaddaDirective.propDecorators = {
        "loading": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ladda',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] },],
    };
    return LaddaDirective;
}());

//# sourceMappingURL=ladda.directive.js.map

/***/ }),

/***/ "./node_modules/angular2-ladda/module/module.js":
/*!******************************************************!*\
  !*** ./node_modules/angular2-ladda/module/module.js ***!
  \******************************************************/
/*! exports provided: LaddaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaModule", function() { return LaddaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ladda_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ladda.directive */ "./node_modules/angular2-ladda/module/ladda.directive.js");
/* harmony import */ var _ladda_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ladda-config */ "./node_modules/angular2-ladda/module/ladda-config.js");



var LaddaModule = /** @class */ (function () {
    function LaddaModule() {
    }
    LaddaModule.forRoot = function (config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: _ladda_config__WEBPACK_IMPORTED_MODULE_2__["LaddaConfig"], useValue: config }
            ]
        };
    };
    LaddaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [_ladda_directive__WEBPACK_IMPORTED_MODULE_1__["LaddaDirective"]],
                    exports: [_ladda_directive__WEBPACK_IMPORTED_MODULE_1__["LaddaDirective"]],
                },] },
    ];
    return LaddaModule;
}());

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/ladda/js/ladda.js":
/*!****************************************!*\
  !*** ./node_modules/ladda/js/ladda.js ***!
  \****************************************/
/*! exports provided: create, bind, stopAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAll", function() { return stopAll; });
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */

 

// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create( button ) {

	if( typeof button === 'undefined' ) {
		console.warn( "Ladda button target must be defined." );
		return;
	}

	// The button must have the class "ladda-button"
	if ( !button.classList.contains('ladda-button') ) {
		button.classList.add( 'ladda-button' );
	}

	// Style is required, default to "expand-right"
	if( !button.hasAttribute( 'data-style' ) ) {
		button.setAttribute( 'data-style', 'expand-right' );
	}

	// The text contents must be wrapped in a ladda-label
	// element, create one if it doesn't already exist
	if( !button.querySelector( '.ladda-label' ) ) {
		var laddaLabel = document.createElement( 'span' );
		laddaLabel.className = 'ladda-label';
		wrapContent( button, laddaLabel );
	}

	// The spinner component
	var spinner,
		spinnerWrapper = button.querySelector( '.ladda-spinner' );

	// Wrapper element for the spinner
	if( !spinnerWrapper ) {
		spinnerWrapper = document.createElement( 'span' );
		spinnerWrapper.className = 'ladda-spinner';
	}

	button.appendChild( spinnerWrapper );

	// Timer used to delay starting/stopping
	var timer;

	var instance = {

		/**
		 * Enter the loading state.
		 */
		start: function() {

			// Create the spinner if it doesn't already exist
			if( !spinner ) {
				spinner = createSpinner( button );
			}

			button.disabled = true;
			button.setAttribute( 'data-loading', '' );

			clearTimeout( timer );
			spinner.spin( spinnerWrapper );

			this.setProgress( 0 );

			return this; // chain

		},

		/**
		 * Enter the loading state, after a delay.
		 */
		startAfter: function( delay ) {

			clearTimeout( timer );
			timer = setTimeout( function() { instance.start(); }, delay );

			return this; // chain

		},

		/**
		 * Exit the loading state.
		 */
		stop: function() {

			if (instance.isLoading()) {
				button.disabled = false;
				button.removeAttribute( 'data-loading' );	
			}

			// Kill the animation after a delay to make sure it
			// runs for the duration of the button transition
			clearTimeout( timer );

			if( spinner ) {
				timer = setTimeout( function() { spinner.stop(); }, 1000 );
			}

			return this; // chain

		},

		/**
		 * Toggle the loading state on/off.
		 */
		toggle: function() {
			return this.isLoading() ? this.stop() : this.start();
		},

		/**
		 * Sets the width of the visual progress bar inside of
		 * this Ladda button
		 *
		 * @param {Number} progress in the range of 0-1
		 */
		setProgress: function( progress ) {

			// Cap it
			progress = Math.max( Math.min( progress, 1 ), 0 );

			var progressElement = button.querySelector( '.ladda-progress' );

			// Remove the progress bar if we're at 0 progress
			if( progress === 0 && progressElement && progressElement.parentNode ) {
				progressElement.parentNode.removeChild( progressElement );
			}
			else {
				if( !progressElement ) {
					progressElement = document.createElement( 'div' );
					progressElement.className = 'ladda-progress';
					button.appendChild( progressElement );
				}

				progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
			}

		},

		isLoading: function() {

			return button.hasAttribute( 'data-loading' );

		},

		remove: function() {

			clearTimeout( timer );

			button.disabled = false;
			button.removeAttribute( 'data-loading' );

			if( spinner ) {
				spinner.stop();
				spinner = null;
			}

			ALL_INSTANCES.splice( ALL_INSTANCES.indexOf(instance), 1 );

		}

	};

	ALL_INSTANCES.push( instance );

	return instance;

}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind( target, options ) {

	var targets;

	if( typeof target === 'string' ) {
		targets = document.querySelectorAll( target );
	}
	else if( typeof target === 'object' ) {
		targets = [ target ];
	} else {
		throw new Error('target must be string or object');
	}

	options = options || {};

	for( var i = 0; i < targets.length; i++ ) {
		bindElement(targets[i], options);
	}

}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {

	for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
		ALL_INSTANCES[i].stop();
	}

}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType( elem, type ) {

	while ( elem.parentNode && elem.tagName !== type ) {
		elem = elem.parentNode;
	}

	return ( type === elem.tagName ) ? elem : undefined;

}

function createSpinner( button ) {

	var height = button.offsetHeight,
		spinnerColor,
		spinnerLines;

	if( height === 0 ) {
		// We may have an element that is not visible so
		// we attempt to get the height in a different way
		height = parseFloat( window.getComputedStyle( button ).height );
	}

	// If the button is tall we can afford some padding
	if( height > 32 ) {
		height *= 0.8;
	}

	// Prefer an explicit height if one is defined
	if( button.hasAttribute( 'data-spinner-size' ) ) {
		height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
	}

	// Allow buttons to specify the color of the spinner element
	if( button.hasAttribute( 'data-spinner-color' ) ) {
		spinnerColor = button.getAttribute( 'data-spinner-color' );
	}

	// Allow buttons to specify the number of lines of the spinner
	if( button.hasAttribute( 'data-spinner-lines' ) ) {
		spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
	}

	var radius = height * 0.2,
		length = radius * 0.6,
		width = radius < 7 ? 2 : 3;

	return new spin_js__WEBPACK_IMPORTED_MODULE_0__["Spinner"]( {
		color: spinnerColor || '#fff',
		lines: spinnerLines || 12,
		radius: radius,
		length: length,
		width: width,
		animation: 'ladda-spinner-line-fade',
		zIndex: 'auto',
		top: 'auto',
		left: 'auto',
		className: ''
	} );

}

function wrapContent( node, wrapper ) {

	var r = document.createRange();
	r.selectNodeContents( node );
	r.surroundContents( wrapper );
	node.appendChild( wrapper );

}

function bindElement( element, options ) {
	if( typeof element.addEventListener !== 'function' ) {
		return;
	}

	var instance = create( element );
	var timeout = -1;

	element.addEventListener( 'click', function() {

		// If the button belongs to a form, make sure all the
		// fields in that form are filled out
		var valid = true;
		var form = getAncestorOfTagType( element, 'FORM' );

		if( typeof form !== 'undefined' && !form.hasAttribute('novalidate') ) {
			// Modern form validation
			if( typeof form.checkValidity === 'function' ) {
				valid = form.checkValidity();
			}
		}

		if( valid ) {
			// This is asynchronous to avoid an issue where disabling
			// the button prevents forms from submitting
			instance.startAfter( 1 );

			// Set a loading timeout if one is specified
			if( typeof options.timeout === 'number' ) {
				clearTimeout( timeout );
				timeout = setTimeout( instance.stop, options.timeout );
			}

			// Invoke callbacks
			if( typeof options.callback === 'function' ) {
				options.callback.apply( null, [ instance ] );
			}
		}

	}, false );

}


/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign({}, defaults, opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "./src/app/views/ui-kits/accordions/accordions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<h1>Accordion</h1>\n\t<ul>\n\t\t<li><a href=\"\">UI Kits</a></li>\n\t\t<li>Accordion</li>\n\t</ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n<div class=\"\">\n\t\t<ngb-tabset class=\"p-0\">\n\t\t\t\t<ngb-tab title=\"Example\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\" activeIds=\"ngb-panel-0\">\n\t\t\t\t\t\t\t<ngb-panel title=\"Accordion\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim\n\t\t\t\t\t\t\t\t\t\tkeffiyeh\n\t\t\t\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel>\n\t\t\t\t\t\t\t\t<ng-template ngbPanelTitle>\n\t\t\t\t\t\t\t\t\t<span>&#9733; <b>Fancy</b> title &#9733;</span>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim\n\t\t\t\t\t\t\t\t\t\tkeffiyeh\n\t\t\t\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel title=\"Simple\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<div [@animate]=\"{value:'*',params:{y:'20px',opacity:'0',delay:'0ms', duration: '400ms'}}\">\n\t\t\t\t\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\tofficia\n\t\t\t\t\t\t\t\t\t\taute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n\t\t\t\t\t\t\t\t\t\tmoon\n\t\t\t\t\t\t\t\t\t\ttempor,\n\t\t\t\t\t\t\t\t\t\tsunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim\n\t\t\t\t\t\t\t\t\t\tkeffiyeh\n\t\t\t\t\t\t\t\t\t\thelvetica,\n\t\t\t\t\t\t\t\t\t\tcraft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.\n\t\t\t\t\t\t\t\t\t\tLeggings\n\t\t\t\t\t\t\t\t\t\toccaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them\n\t\t\t\t\t\t\t\t\t\taccusamus\n\t\t\t\t\t\t\t\t\t\tlabore sustainable VHS.\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t</ngb-accordion>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Code\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<pre class=\"m-0\">\n\t\t\t\t\t\t\t<code [highlight]>{{code}}</code>\n\t\t\t\t\t  \t</pre>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/views/ui-kits/accordions/accordions.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/accordions/accordions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/ui-kits/accordions/accordions.component.ts ***!
  \******************************************************************/
/*! exports provided: AccordionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionsComponent", function() { return AccordionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionsComponent = /** @class */ (function () {
    function AccordionsComponent() {
        this.code = "\n<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Simple\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>";
    }
    AccordionsComponent.prototype.ngOnInit = function () {
    };
    AccordionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accordions',
            template: __webpack_require__(/*! ./accordions.component.html */ "./src/app/views/ui-kits/accordions/accordions.component.html"),
            styles: [__webpack_require__(/*! ./accordions.component.scss */ "./src/app/views/ui-kits/accordions/accordions.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionsComponent);
    return AccordionsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Alerts</h1>\n  <ul>\n    <li><a href=\"\">UI Kits</a></li>\n    <li>Alerts</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\" *ngIf=\"mainAlert\">\n    <ngb-alert class=\"alert-card text-center\" (close)=\"mainAlert = false\">\n      Gull makes developent life easier! <button class=\"btn btn-rounded btn-warning ml-3\">Buy Now</button>\n    </ngb-alert>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Ngx Toastr</div>\n        <button class=\"btn btn-rounded btn-outline-success m-1\" (click)=\"success()\">Launch Success</button>\n        <button class=\"btn btn-rounded btn-outline-warning m-1\" (click)=\"warning()\">Launch Warning</button>\n        <button class=\"btn btn-rounded btn-outline-info m-1\" (click)=\"info()\">Launch Info</button>\n        <button class=\"btn btn-rounded btn-outline-danger m-1\" (click)=\"error()\">Launch Error</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Toastr with Progress Bar</div>\n        <button class=\"btn btn-rounded btn-outline-success m-1\" (click)=\"successBar()\">Launch Success</button>\n        <button class=\"btn btn-rounded btn-outline-warning m-1\" (click)=\"warningBar()\">Launch Warning</button>\n        <button class=\"btn btn-rounded btn-outline-info m-1\" (click)=\"infoBar()\">Launch Info</button>\n        <button class=\"btn btn-rounded btn-outline-danger m-1\" (click)=\"errorBar()\">Launch Error</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Bootstrap Alerts</div>\n\n        <ngb-alert [type]=\"alert.type\" *ngFor=\"let alert of alerts\" (close)=\"closeAlert(alert)\">\n          <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n        </ngb-alert>\n        \n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <ngb-alert class=\"alert-card mb-4\" [type]=\"alert.type\" *ngFor=\"let alert of alertCards\" (close)=\"closeAlertCard(alert)\">\n        <strong class=\"text-capitalize\">{{alert.type}}!</strong> {{alert.message}}\n    </ngb-alert>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/alerts/alerts.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/alerts/alerts.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ALERTS = [{
        type: 'success',
        message: 'This is an success alert',
    }, {
        type: 'info',
        message: 'This is an info alert',
    }, {
        type: 'warning',
        message: 'This is a warning alert',
    }, {
        type: 'danger',
        message: 'This is a danger alert',
    }, {
        type: 'primary',
        message: 'This is a primary alert',
    }, {
        type: 'dark',
        message: 'This is a dark alert',
    }
];
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(toastr) {
        this.toastr = toastr;
        this.mainAlert = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        this.alerts = ALERTS.slice();
        this.alertCards = ALERTS.slice();
    };
    AlertsComponent.prototype.closeAlert = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertsComponent.prototype.closeAlertCard = function (alert) {
        this.alertCards.splice(this.alertCards.indexOf(alert), 1);
    };
    AlertsComponent.prototype.success = function () {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.warning = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.info = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.error = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
    };
    AlertsComponent.prototype.successBar = function () {
        this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.warningBar = function () {
        this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.infoBar = function () {
        this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent.prototype.errorBar = function () {
        this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/views/ui-kits/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.scss */ "./src/app/views/ui-kits/alerts/alerts.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Badges</h1>\n  <ul>\n    <li>UI Kits</li>\n    <li>Badges</li>\n  </ul>\n</div>\n  \n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Badge outline</div>\n        \n        <span class=\"badge badge-pill badge-outline-primary p-2 mr-1\">Primary</span>\n        <span class=\"badge badge-pill badge-outline-secondary p-2 mr-1\">Secondary</span>\n        <span class=\"badge badge-pill badge-outline-success p-2 mr-1\">Success</span>\n        <span class=\"badge badge-pill badge-outline-danger p-2 mr-1\">Danger</span>\n        <span class=\"badge badge-pill badge-outline-warning p-2 mr-1\">Warning</span>\n        <span class=\"badge badge-pill badge-outline-info p-2 mr-1\">Info</span>\n        <span class=\"badge badge-pill badge-outline-dark p-2 mr-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Regular Badges</div>\n        \n        <span class=\"badge badge-primary mr-1\">Primary</span>\n        <span class=\"badge badge-secondary mr-1\">Secondary</span>\n        <span class=\"badge badge-success mr-1\">Success</span>\n        <span class=\"badge badge-danger mr-1\">Danger</span>\n        <span class=\"badge badge-warning mr-1\">Warning</span>\n        <span class=\"badge badge-info mr-1\">Info</span>\n        <span class=\"badge badge-light mr-1\">Light</span>\n        <span class=\"badge badge-dark mr-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Badge Pill</div>\n        \n        <span class=\"badge badge-pill badge-primary mr-1\">Primary</span>\n        <span class=\"badge badge-pill badge-secondary mr-1\">Secondary</span>\n        <span class=\"badge badge-pill badge-success mr-1\">Success</span>\n        <span class=\"badge badge-pill badge-danger mr-1\">Danger</span>\n        <span class=\"badge badge-pill badge-warning mr-1\">Warning</span>\n        <span class=\"badge badge-pill badge-info mr-1\">Info</span>\n        <span class=\"badge badge-pill badge-light mr-1\">Light</span>\n        <span class=\"badge badge-pill badge-dark mr-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Badge Pill with Padding</div>\n        \n        <span class=\"badge badge-pill badge-primary p-2 mr-1\">Primary</span>\n        <span class=\"badge badge-pill badge-secondary p-2 mr-1\">Secondary</span>\n        <span class=\"badge badge-pill badge-success p-2 mr-1\">Success</span>\n        <span class=\"badge badge-pill badge-danger p-2 mr-1\">Danger</span>\n        <span class=\"badge badge-pill badge-warning p-2 mr-1\">Warning</span>\n        <span class=\"badge badge-pill badge-info p-2 mr-1\">Info</span>\n        <span class=\"badge badge-pill badge-light p-2 mr-1\">Light</span>\n        <span class=\"badge badge-pill badge-dark p-2 mr-1\">Dark</span>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"col-md-12\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-4\">Badge link</div>\n        \n        <a href=\"#\" class=\"badge badge-primary mr-1\">Primary</a>\n        <a href=\"#\" class=\"badge badge-secondary mr-1\">Secondary</a>\n        <a href=\"#\" class=\"badge badge-success mr-1\">Success</a>\n        <a href=\"#\" class=\"badge badge-danger mr-1\">Danger</a>\n        <a href=\"#\" class=\"badge badge-warning mr-1\">Warning</a>\n        <a href=\"#\" class=\"badge badge-info mr-1\">Info</a>\n        <a href=\"#\" class=\"badge badge-light mr-1\">Light</a>\n        <a href=\"#\" class=\"badge badge-dark mr-1\">Dark</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/badges/badges.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/badges/badges.component.ts ***!
  \**********************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
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

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent.prototype.ngOnInit = function () {
    };
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badges',
            template: __webpack_require__(/*! ./badges.component.html */ "./src/app/views/ui-kits/badges/badges.component.html"),
            styles: [__webpack_require__(/*! ./badges.component.scss */ "./src/app/views/ui-kits/badges/badges.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons-loading/buttons-loading.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Buttons Loading</h1>\n    <ul>\n        <li><a href=\"\">UI Kits</a></li>\n        <li>Buttons Loading</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Gull Custom Loading Buttons</div>\n                <div>\n                    <btn-loading \n                    *ngFor=\"let btn of loadingButtons\"\n                    btnClass=\"btn-{{btn.name}} btn-rounded m-1\" \n                    [loading]=\"btn.loading\" \n                    loadingText=\"Loading...\"\n                    (click)=\"showLoading(btn)\">\n                        Click me\n                    </btn-loading>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Ladda Buttons</div>\n                <div>\n                    <button \n                    *ngFor=\"let btn of laddaButtons\"\n                    class=\"btn btn-{{btn.name}} btn-rounded ladda-button m-1\"\n                    [ladda]=\"btn.loading\" \n                    (click)=\"showLoading(btn)\">\n                        Click me\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons-loading/buttons-loading.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons-loading/buttons-loading.component.ts ***!
  \****************************************************************************/
/*! exports provided: ButtonsLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsLoadingComponent", function() { return ButtonsLoadingComponent; });
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

var ButtonsLoadingComponent = /** @class */ (function () {
    function ButtonsLoadingComponent() {
        this.loadingButtons = [
            {
                name: 'primary',
                loading: false,
            },
            {
                name: 'secondary',
                loading: false,
            },
            {
                name: 'success',
                loading: false,
            },
            {
                name: 'warning',
                loading: false,
            },
            {
                name: 'info',
                loading: false,
            },
            {
                name: 'danger',
                loading: false,
            },
            {
                name: 'light',
                loading: false,
            },
            {
                name: 'dark',
                loading: false,
            }
        ];
        this.laddaButtons = [
            {
                name: 'primary',
                loading: false,
            },
            {
                name: 'secondary',
                loading: false,
            },
            {
                name: 'success',
                loading: false,
            },
            {
                name: 'warning',
                loading: false,
            },
            {
                name: 'info',
                loading: false,
            },
            {
                name: 'danger',
                loading: false,
            },
            {
                name: 'light',
                loading: false,
            },
            {
                name: 'dark',
                loading: false,
            }
        ];
    }
    ButtonsLoadingComponent.prototype.ngOnInit = function () { };
    ButtonsLoadingComponent.prototype.showLoading = function (btn) {
        btn.loading = true;
        setTimeout(function () {
            btn.loading = false;
        }, 3000);
    };
    ButtonsLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-loading',
            template: __webpack_require__(/*! ./buttons-loading.component.html */ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.html"),
            styles: [__webpack_require__(/*! ./buttons-loading.component.scss */ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsLoadingComponent);
    return ButtonsLoadingComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Buttons</h1>\n    <ul>\n        <li><a href=\"\">UI Kits</a></li>\n        <li>Buttons</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Buttons</div>\n                <button type=\"button\" class=\"btn btn-primary m-1\">Primary</button>\n                <button type=\"button\" class=\"btn btn-secondary m-1\">Secondary</button>\n                <button type=\"button\" class=\"btn btn-success m-1\">Success</button>\n                <button type=\"button\" class=\"btn btn-danger m-1\">Danger</button>\n                <button type=\"button\" class=\"btn btn-warning m-1\">Warning</button>\n                <button type=\"button\" class=\"btn btn-info m-1\">Info</button>\n                <button type=\"button\" class=\"btn btn-light m-1\">Light</button>\n                <button type=\"button\" class=\"btn btn-dark m-1\">Dark</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Buttons Rounded</div>\n                <button type=\"button\" class=\"btn btn-primary btn-rounded m-1\">Primary</button>\n                <button type=\"button\" class=\"btn btn-secondary btn-rounded m-1\">Secondary</button>\n                <button type=\"button\" class=\"btn btn-success btn-rounded m-1\">Success</button>\n                <button type=\"button\" class=\"btn btn-danger btn-rounded m-1\">Danger</button>\n                <button type=\"button\" class=\"btn btn-warning btn-rounded m-1\">Warning</button>\n                <button type=\"button\" class=\"btn btn-info btn-rounded m-1\">Info</button>\n                <button type=\"button\" class=\"btn btn-light btn-rounded m-1\">Light</button>\n                <button type=\"button\" class=\"btn btn-dark btn-rounded m-1\">Dark</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    Buttons outline\n                </div>\n                <button type=\"button\" class=\"btn btn-outline-primary m-1\">Primary</button>\n                <button type=\"button\" class=\"btn btn-outline-secondary m-1\">Secondary</button>\n                <button type=\"button\" class=\"btn btn-outline-success m-1\">Success</button>\n                <button type=\"button\" class=\"btn btn-outline-danger m-1\">Danger</button>\n                <button type=\"button\" class=\"btn btn-outline-warning m-1\">Warning</button>\n                <button type=\"button\" class=\"btn btn-outline-info m-1\">Info</button>\n                <button type=\"button\" class=\"btn btn-outline-dark m-1\">Dark</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    Button group\n                </div>\n                <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                    <div class=\"btn-group btn-group-toggle\">\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input type=\"checkbox\" ngbButton [(ngModel)]=\"btnGroupModel.left\"> Left (pre-checked)\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input type=\"checkbox\" ngbButton [(ngModel)]=\"btnGroupModel.middle\"> Middle\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input type=\"checkbox\" ngbButton [(ngModel)]=\"btnGroupModel.right\"> Right\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Button block</div>\n                <button type=\"button\" class=\"btn btn-primary btn-block m-1\">Primary</button>\n                <button type=\"button\" class=\"btn btn-success btn-block m-1\">Success</button>\n                <button type=\"button\" class=\"btn btn-warning btn-block m-1\">Warning</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-6\">\n        <div class=\"card mb-3\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Big & Small Buttons</div>\n                <div class=\"mb-3\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm m-1\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-success btn-sm m-1\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-sm m-1\">Warning</button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"btn btn-lg btn-primary m-1\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-success btn-lg m-1\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-lg m-1\">Warning</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/buttons/buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/buttons/buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.btnGroupModel = {
            left: true,
            middle: false,
            right: false
        };
    }
    ButtonsComponent.prototype.ngOnInit = function () { };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/views/ui-kits/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/views/ui-kits/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Card metrics</h1>\n  <ul>\n    <li><a href=\"\">UI Kits</a></li>\n    <li>Card metrics</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">Server status region 1</h6>\n        <p class=\"text-20 text-success line-height-1 mb-3\"><i class=\"i-Arrow-Up-in-Circle\"></i> Up</p>\n        <small class=\"text-muted\">Last down 4 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">Server status region 2</h6>\n        <p class=\"text-20 text-success line-height-1 mb-3\"><i class=\"i-Arrow-Up-in-Circle\"></i> Up</p>\n        <small class=\"text-muted\">Last down 8 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">Server status region 3</h6>\n        <p class=\"text-20 text-danger line-height-1 mb-3\"><i class=\"i-Arrow-Down-in-Circle\"></i> Down</p>\n        <small class=\"text-muted\">Last down 22 days ago</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-3\">Server status region 4</h6>\n        <p class=\"text-20 text-danger line-height-1 mb-3\"><i class=\"i-Arrow-Down-in-Circle\"></i> Down</p>\n        <small class=\"text-muted\">Last down 2 days ago</small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-1\">Taffic in last 24h</h6>\n        <p class=\"text-22 text-success font-weight-light mb-1\">13000</p>\n        <div echarts [options]=\"chartLine1\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-1\">Taffic in last week</h6>\n        <p class=\"text-22 text-danger font-weight-light mb-1\">65058</p>\n        <div echarts [options]=\"chartLine2\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-1\">Taffic in last month</h6>\n        <p class=\"text-22 font-weight-light mb-1\">165058</p>\n        <div echarts [options]=\"chartLine3\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-1\">Taffic in last 3 months</h6>\n        <p class=\"text-22 font-weight-light mb-1\">1065058</p>\n        <div echarts [options]=\"chartLine4\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Storage Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">50%</p>\n        <p class=\"mb-1\"><ngb-progressbar type=\"success\" [value]=\"50\" height=\"4px\"></ngb-progressbar></p>\n        <small class=\"text-muted\">Most data used in last 3 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Bandwith Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">90%</p>\n        <p class=\"mb-1\"><ngb-progressbar type=\"danger\" [value]=\"90\" height=\"4px\"></ngb-progressbar></p>\n        <small class=\"text-muted\">Most data used in last 7 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Data Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">60%</p>\n        <p class=\"mb-1\"><ngb-progressbar type=\"warning\" [value]=\"60\" height=\"4px\"></ngb-progressbar></p>\n        <small class=\"text-muted\">Most data used in last 5 days</small>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Data Usage</h6>\n        <p class=\"mb-1 text-22 font-weight-light\">60%</p>\n        <p class=\"mb-1\"><ngb-progressbar type=\"info\" [value]=\"60\" height=\"4px\"></ngb-progressbar></p>\n        <small class=\"text-muted\">Most data used in last 4 days</small>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <h6 class=\"mb-0 text-muted\">Registration/Subscription</h6>\n          <p class=\"text-22 font-weight-light mb-1\">20/80</p>\n          <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <h6 class=\"mb-0 text-muted\">Project Running/Completed</h6>\n          <p class=\"text-22 font-weight-light mb-1\">40/60</p>\n          <div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <h6 class=\"mb-0 text-muted\">Registration/Subscription</h6>\n          <p class=\"text-22 font-weight-light mb-1\">20/80</p>\n          <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <h6 class=\"mb-0 text-muted\">Project Running/Completed</h6>\n          <p class=\"text-22 font-weight-light mb-1\">40/60</p>\n          <div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n        </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Project Completion Rate</h6>\n        <p class=\"text-22 font-weight-light mb-1\"><i class=\"i-Up text-success\"></i> 15%</p>\n        <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mb-2 text-muted\">Project Completion Rate</h6>\n        <p class=\"text-22 font-weight-light mb-1\"><i class=\"i-Down text-danger\"></i> 15%</p>\n        <div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-metrics/card-metrics.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardMetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMetricsComponent", function() { return CardMetricsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardMetricsComponent = /** @class */ (function () {
    function CardMetricsComponent() {
        this.chartLine1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [6, 4, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartLine3 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [2, 2, 7, 4, 6, 4, 8] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.chartLine4 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [__assign({ data: [2, 2, 7, 4, 6, 4, 1] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#df0029' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#df0029'
                    } })]
        });
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Email Subscription', value: 80 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } }), __assign({ name: 'Registration', value: 20 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#df0029',
                            } })]
                }]
        });
        this.chartPie2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Running', value: 40 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#ff9800',
                            } }), __assign({ name: 'Completed', value: 60 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } })]
                }]
        });
        this.chartBar1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'bar',
                    barWidth: 6,
                    itemStyle: __assign({ color: '#ff9800' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    data: [{
                            name: 'Bar 1',
                            value: 40
                        }, {
                            name: 'Bar 2',
                            value: 60,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }, {
                            name: 'Bar 3',
                            value: 80,
                        }, {
                            name: 'Bar 4',
                            value: 70,
                        }, {
                            name: 'Bar 5',
                            value: 60,
                        }, {
                            name: 'Bar 6',
                            value: 70,
                        }, {
                            name: 'Bar 7',
                            value: 80,
                        }, {
                            name: 'Bar 8',
                            value: 40,
                        }, {
                            name: 'Bar 9',
                            value: 70,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }]
                }]
        });
    }
    CardMetricsComponent.prototype.ngOnInit = function () {
    };
    CardMetricsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-metrics',
            template: __webpack_require__(/*! ./card-metrics.component.html */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.html"),
            styles: [__webpack_require__(/*! ./card-metrics.component.scss */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardMetricsComponent);
    return CardMetricsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Widgets</h1>\n  <ul>\n    <li><a href=\"\">UI Kits</a></li>\n    <li>Cards Widgets</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title m-0\">Network Stats</div>\n        <p class=\"text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n              <i class=\"i-Data-Backup text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1 text-white\">Backups</h4>\n                <span>Total: 32</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n              <i class=\"i-Big-Data text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1 text-white\">Databases</h4>\n                <span>Total: 302</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 mb-4\">\n            <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n              <i class=\"i-Data-Cloud text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Space used</h4>\n                <span>Total: 160GB</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"p-4 border border-light rounded d-flex align-items-center\">\n              <i class=\"i-Data-Download text-32 mr-3\"></i>\n              <div>\n                <h4 class=\"text-18 mb-1\">Downloaded</h4>\n                <span>Total: 30GB</span>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Top Selling Products</div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">Wireless Headphone</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-primary text-16\">$450</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-3.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">Headphone Black</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-warning text-16\">$350</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/iphone-2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">iPhone 6</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-danger text-16\">$649</span>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/products/headphone-4.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">Headphone Red</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <span class=\"font-weight-bold text-secondary text-16\">$150</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Top Users</div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">David Hopkins</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/3.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">James Mitchell</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n              <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/4.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">John Doe</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n              <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/5.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">Dan Hill</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card card-chart-bottom o-hidden mb-4\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">Last Week Sales</div>\n        <p class=\"mb-4 text-primary text-24\">$1250</p>\n      </div>\n      <div echarts [options]=\"chartOption1\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card card-chart-bottom o-hidden mb-4\">\n      <div class=\"card-body\">\n        <div class=\"text-muted\">Last Month Sales</div>\n        <p class=\"mb-4 text-warning text-24\">$40250</p>\n      </div>\n      <div echarts [options]=\"chartOption2\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Last Month Summary</div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Item</th>\n                  <th scope=\"col\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Portable Speaker</td>\n                  <td class=\"font-weight-bold text-success\">+ $1200</td>\n                </tr>\n                <tr>\n                  <td>Portable Headphone</td>\n                  <td class=\"font-weight-bold\">In Stock</td>\n                </tr>\n                <tr>\n                  <td>Speaker</td>\n                  <td class=\"text-danger font-weight-bold\">Out of stock</td>\n                </tr>\n                <tr>\n                  <td>Watch</td>\n                  <td class=\"text-warning font-weight-bold\">Low stock</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-6\">\n              <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 200px;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/ui-kits/card-widgets/card-widgets.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardWidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWidgetsComponent", function() { return CardWidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardWidgetsComponent = /** @class */ (function () {
    function CardWidgetsComponent() {
    }
    CardWidgetsComponent.prototype.ngOnInit = function () {
        this.chartOption1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#663399',
                    }, itemStyle: {
                        color: '#663399'
                    } })]
        });
        this.chartOption2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [30, 10, 40, 10, 40, 20, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#ff9800'
                    }, itemStyle: {
                        color: '#ff9800'
                    } })]
        });
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [__assign({ type: 'pie' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieRing, { label: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelCenterHover, data: [{
                            name: 'Completed',
                            value: 80,
                            itemStyle: {
                                color: '#4CAF50',
                            }
                        }, {
                            name: 'Pending',
                            value: 20,
                            itemStyle: {
                                color: '#df0029',
                            }
                        }] })]
        });
    };
    CardWidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-widgets',
            template: __webpack_require__(/*! ./card-widgets.component.html */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.html"),
            styles: [__webpack_require__(/*! ./card-widgets.component.scss */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardWidgetsComponent);
    return CardWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Card eCommerce</h1>\n    <ul>\n      <li><a href=\"\">UI Kits</a></li>\n      <li>Card eCommerce</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"card card-ecommerce-1 mb-4\">\n        <div class=\"card-body text-center\">\n          <i class=\"i-Cloud mb-3\"></i>\n          <h5 class=\"text-primary\">Cloud product one</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptates?</p>\n          <button class=\"btn btn-primary btn-rounded\">Buy now</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n      <div class=\"card card-ecommerce-2 o-hidden mb-4\">\n        <img class=\"card-img-top\" src=\"./assets/images/photo-long-3.jpg\" alt=\"\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <h5 class=\"m-0 font-weight-bold text-muted\">Cloud product one</h5>\n            <p class=\"m-0\">$30</p>\n          </div>\n          <div class=\"card-action\">\n            <i class=\"icon i-Add-Cart\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"card card-ecommerce-3 o-hidden mb-4\">\n        <div class=\"d-flex\">\n          <div class=\"\">\n            <img class=\"card-img-left\" src=\"./assets/images/photo-wide-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"flex-grow-1 p-4\">\n            <h5 class=\"m-0 font-weight-bold text-muted\">Produt featured</h5>\n            <p class=\"m-0 text-small text-muted\">By ABC Cafe</p>\n            <p class=\"m-0\">$40 <del>$55</del></p>\n            <p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. \n              Nesciunt placeat esse tempore debitis.</p>\n            <div class=\"actions\">\n              <button class=\"btn btn-sm rounded-circle btn-icon btn-outline-primary\">\n                <i class=\"icon i-Add-Cart\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n    \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardsEcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsEcommerceComponent", function() { return CardsEcommerceComponent; });
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

var CardsEcommerceComponent = /** @class */ (function () {
    function CardsEcommerceComponent() {
    }
    CardsEcommerceComponent.prototype.ngOnInit = function () {
    };
    CardsEcommerceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-ecommerce',
            template: __webpack_require__(/*! ./cards-ecommerce.component.html */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./cards-ecommerce.component.scss */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsEcommerceComponent);
    return CardsEcommerceComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"breadcrumb\">\n\t\t<h1>Cards</h1>\n\t\t<ul>\n\t\t\t<li><a href=\"\">UI Kits</a></li>\n\t\t\t<li>Cards</li>\n\t\t</ul>\n\t</div>\n\n\t<div class=\"separator-breadcrumb border-top\"></div>\n\n\t<div class=\"row\">\n\t\t<!-- ICON BG -->\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n              <div class=\"card-body text-center\">\n                <i class=\"i-Add-User\"></i>\n                <div class=\"content\">\n                  <p class=\"text-muted mt-2 mb-0\">New Leads</p>\n                  <p class=\"lead text-primary text-24 mb-2\">205</p>\n                </div>\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n              <div class=\"card-body text-center\">\n                <i class=\"i-Financial\"></i>\n                <div class=\"content\">\n                  <p class=\"text-muted mt-2 mb-0\">Sales</p>\n                  <p class=\"lead text-primary text-24 mb-2\">4021</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        \n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n              <div class=\"card-body text-center\">\n                <i class=\"i-Checkout-Basket\"></i>\n                <div class=\"content\">\n                  <p class=\"text-muted mt-2 mb-0\">Orders</p>\n                  <p class=\"lead text-primary text-24 mb-2\">80</p>\n                </div>\n              </div>\n            </div>\n          </div>\n      \n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n              <div class=\"card-body text-center\">\n                <i class=\"i-Money-2\"></i>\n                <div class=\"content\">\n                  <p class=\"text-muted mt-2 mb-0\">Expense</p>\n                  <p class=\"lead text-primary text-24 mb-2\">120</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\t</div>\n\n\t<!-- CARD ICON -->\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Data-Upload\"></i>\n\t\t\t\t\t\t\t<p class=\"text-muted mt-2 mb-2\">Today's Upload</p>\n\t\t\t\t\t\t\t<p class=\"lead text-22 m-0\">21</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Add-User\"></i>\n\t\t\t\t\t\t\t<p class=\"text-muted mt-2 mb-2\">New Users</p>\n\t\t\t\t\t\t\t<p class=\"lead text-22 m-0\">21</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Money-2\"></i>\n\t\t\t\t\t\t\t<p class=\"text-muted mt-2 mb-2\">Total sales</p>\n\t\t\t\t\t\t\t<p class=\"lead text-22 m-0\">4021</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon-big mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Money-2\"></i>\n\t\t\t\t\t\t\t<p class=\"lead text-18 mt-2 mb-0\">4021</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon-big mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Gear\"></i>\n\t\t\t\t\t\t\t<p class=\"lead text-18 mt-2 mb-0\">4021</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"card card-icon-big mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<i class=\"i-Bell\"></i>\n\t\t\t\t\t\t\t<p class=\"lead text-18 mt-2 mb-0\">4021</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<ngb-tabset>\n\t\t\t\t\t\t\t<ngb-tab title=\"Simple\">\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t\t\t<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro\n\t\t\t\t\t\t\t\t\t\tsynth\n\t\t\t\t\t\t\t\t\t\tmaster cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro\n\t\t\t\t\t\t\t\t\t\tkeffiyeh\n\t\t\t\t\t\t\t\t\t\tdreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia\n\t\t\t\t\t\t\t\t\t\tcillum\n\t\t\t\t\t\t\t\t\t\tiphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t\t<ngb-tab>\n\t\t\t\t\t\t\t\t<ng-template ngbTabTitle>Fancy title</ng-template>\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee\n\t\t\t\t\t\t\t\t\tsquid.\n\t\t\t\t\t\t\t\t\t<p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko\n\t\t\t\t\t\t\t\t\t\tfarm-to-table\n\t\t\t\t\t\t\t\t\t\tcraft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad\n\t\t\t\t\t\t\t\t\t\tvinyl\n\t\t\t\t\t\t\t\t\t\tcillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS\n\t\t\t\t\t\t\t\t\t\tsalvia\n\t\t\t\t\t\t\t\t\t\tyr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable\n\t\t\t\t\t\t\t\t\t\tjean\n\t\t\t\t\t\t\t\t\t\tshorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher\n\t\t\t\t\t\t\t\t\t\tvero\n\t\t\t\t\t\t\t\t\t\tsint qui sapiente accusamus tattooed echo park.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t\t<ngb-tab title=\"Disabled\" [disabled]=\"true\">\n\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t\t\t<p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla\n\t\t\t\t\t\t\t\t\t\tfacilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu,\n\t\t\t\t\t\t\t\t\t\tcongue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices\n\t\t\t\t\t\t\t\t\t\tet. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus\n\t\t\t\t\t\t\t\t\t\tfaucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci\n\t\t\t\t\t\t\t\t\t\tvarius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac\n\t\t\t\t\t\t\t\t\t\tlorem\n\t\t\t\t\t\t\t\t\t\taliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-tab>\n\t\t\t\t\t\t</ngb-tabset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card card-profile-1 mb-4\">\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<div class=\"avatar box-shadow-2 mb-3\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/images/faces/16.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Jassica Hike</h5>\n\t\t\t\t\t\t\t<p class=\"mt-0\">UI/UX Designer</p>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-rounded\">Contact Jassica</button>\n\t\t\t\t\t\t\t<div class=\"card-socials-simple mt-4\">\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Linkedin-2\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Facebook-2\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Twitter\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\tFeatured\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title text</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-rounded\">Go somewhere</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card bg-dark text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t\t<h5 class=\"card-title text-white\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content.\n\t\t\t\t\t\t\t\tThis content is a little bit longer.</p>\n\t\t\t\t\t\t\t<p class=\"card-text\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n\t\t\t\t\t\t\t\tcontent.</p>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Card link</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Another link</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\n\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-lg-6 col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- BG IMAGE CARDS -->\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card bg-dark text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-long-1.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t\t<h5 class=\"card-title mb-2 text-white\">Card title</h5>\n\t\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card bg-dark text-white o-hidden mb-4\">\n\t\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-long-2.jpg\" alt=\"Card image\">\n\t\t\t\t\t\t<div class=\"card-img-overlay\">\n\n\t\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t\t<h5 class=\"card-title mb-2 text-white\">Card title</h5>\n\t\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card mb-4 o-hidden\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cumque!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"card mb-4 o-hidden\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"./assets/images/photo-wide-3.jpg\" alt=\"\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Card title</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n\t\t\t\t\t\t\t\tcontent.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Cras justo odio</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Dapibus ac facilisis in</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">Vestibulum at eros</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Card link</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"card-link\">Another link</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/cards/cards.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/ui-kits/cards/cards.component.ts ***!
  \********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/views/ui-kits/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/views/ui-kits/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Loaders</h1>\n    <ul>\n        <li><a href=\"\">UI Kits</a></li>\n        <li>Loaders</li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-4\">Loading Spinners</div>\n                <span class=\"spinner-glow spinner-glow-primary mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-secondary mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-warning mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-danger mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-success mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-info mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-light mr-5\"></span>\n                <span class=\"spinner-glow spinner-glow-dark mr-5\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-4\">Loading Spinners</div>\n                <div class=\"spinner spinner-primary mr-3\"></div>\n                <div class=\"spinner spinner-secondary mr-3\"></div>\n                <div class=\"spinner spinner-warning mr-3\"></div>\n                <div class=\"spinner spinner-danger mr-3\"></div>\n                <div class=\"spinner spinner-success mr-3\"></div>\n                <div class=\"spinner spinner-info mr-3\"></div>\n                <div class=\"spinner spinner-light mr-3\"></div>\n                <div class=\"spinner spinner-dark mr-3\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-4\">Loading Spinners</div>\n\n                <div class=\"spinner-bubble spinner-bubble-primary m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-secondary m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-warning m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-danger m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-success m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-info m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-light m-5\"></div>\n                <div class=\"spinner-bubble spinner-bubble-dark m-5\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title mb-4\">Loading Spinners</div>\n                <div class=\"loader-bubble loader-bubble-primary m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-secondary m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-success m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-warning m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-danger m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-info m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-light m-5\"></div>\n                <div class=\"loader-bubble loader-bubble-dark m-5\"></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/loaders/loaders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/loaders/loaders.component.ts ***!
  \************************************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
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

var LoadersComponent = /** @class */ (function () {
    function LoadersComponent() {
    }
    LoadersComponent.prototype.ngOnInit = function () {
    };
    LoadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loaders',
            template: __webpack_require__(/*! ./loaders.component.html */ "./src/app/views/ui-kits/loaders/loaders.component.html"),
            styles: [__webpack_require__(/*! ./loaders.component.scss */ "./src/app/views/ui-kits/loaders/loaders.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Modals</h1>\n  <ul>\n    <li><a href=\"\">UI Kits</a></li>\n    <li>Modals</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Basic Modal\n        </div>\n        <button class=\"btn btn-outline-primary btn-rounded\" (click)=\"open(modalBasic)\">Launch demo modal</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">\n          Confirm Modal\n        </div>\n        <button class=\"btn btn-outline-primary btn-rounded\" (click)=\"confirm(modalConfirm)\">Delete</button>\n        <p class=\"mb-0 mt-3\">{{confirmResut}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-6\">\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n          <div class=\"card-title\">\n            Large Content Modal\n          </div>\n          <button class=\"btn btn-outline-primary btn-rounded\" (click)=\"open(modalLong)\">Launch Modal</button>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-md-6\">\n      <div class=\"card mb-3\">\n        <div class=\"card-body\">\n            <div class=\"card-title\">\n              Small Modal\n            </div>\n            <button class=\"btn btn-outline-primary btn-rounded\" (click)=\"openSmall(modalSmall)\">Launch Modal</button>\n          </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #modalBasic let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Modal Basic</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"picker1\">Date picker</label>\n        <div class=\"input-group\">\n          <input id=\"picker1\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" (click)=\"dp.toggle()\" type=\"button\">\n              <i class=\"icon-regular i-Calendar-4\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark btn-rounded\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<ng-template #modalConfirm let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-title\">Profile deletion</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p><strong>Are you sure you want to delete <span class=\"text-primary\">\"John Doe\"</span> profile?</strong></p>\n      <p>All information associated to this user profile will be permanently deleted.\n      <span class=\"text-danger\">This operation can not be undone.</span>\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" (click)=\"modal.dismiss('cancel')\">Cancel</button>\n      <button type=\"button\" ngbAutofocus class=\"btn btn-danger btn-rounded\" (click)=\"modal.close('Ok')\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #modalSmall let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Small Modal</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Lorem ipsum dolor sit amet consectetur.</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark btn-rounded\" (click)=\"modal.close('ok')\">Ok</button>\n    </div>\n</ng-template>\n\n<ng-template #modalLong let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Modal With large content</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis ipsam voluptate eveniet. Ipsum, vero similique?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark btn-rounded\" (click)=\"modal.close('ok')\">Ok</button>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/modals/modals.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/modals/modals.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    ModalsComponent.prototype.openSmall = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    ModalsComponent.prototype.confirm = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.confirmResut = "Closed with: " + result;
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    ModalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/app/views/ui-kits/modals/modals.component.html"),
            styles: [__webpack_require__(/*! ./modals.component.scss */ "./src/app/views/ui-kits/modals/modals.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/popover/popover.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/popover/popover.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Popover</h1>\n    <ul>\n        <li><a href=\"\">UI Kits</a></li>\n        <li>Popover</li>\n    </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Quick and easy popovers</div>\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                    popoverTitle=\"Popover on top\">\n                    Popover on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" placement=\"right\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                    popoverTitle=\"Popover on right\">\n                    Popover on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" placement=\"bottom\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                    popoverTitle=\"Popover on bottom\">\n                    Popover on bottom\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" placement=\"left\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n                    popoverTitle=\"Popover on left\">\n                    Popover on left\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">HTML and bindings in popovers</div>\n                <p>\n                    Popovers can contain any arbitrary HTML, Angular bindings and even directives!\n                    Simply enclose desired content or title in a <code>&lt;ng-template&gt;</code> element.\n                </p>\n\n                <ng-template #popTitle>Popover Title</ng-template>\n                <ng-template #popContent>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore?</p>\n                    <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing.</blockquote>\n                </ng-template>\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\">\n                    I've got markup in my popover!\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Custom and manual triggers</div>\n                <p>\n                    You can easily override open and close triggers by specifying event names (separated by <code>:</code>)\n                    in the <code>triggers</code> property.\n                </p>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" ngbPopover=\"You see, I show up on hover!\"\n                    triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\n                    Hover over me!\n                </button>\n\n                <hr>\n                <p>\n                    Alternatively you can take full manual control over popover opening / closing events.\n                </p>\n\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" ngbPopover=\"What a great tip!\" [autoClose]=\"false\"\n                    triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\n                    Click me to open a popover\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded mr-2\" (click)=\"p.close()\">\n                    Click me to close a popover\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/popover/popover.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/ui-kits/popover/popover.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/popover/popover.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/popover/popover.component.ts ***!
  \************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
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

var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/views/ui-kits/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/views/ui-kits/popover/popover.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/rating/rating.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/rating/rating.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Rating</h1>\n    <ul>\n        <li><a href=\"\">UI Kits</a></li>\n        <li>Rating</li>\n    </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Rating component</div>\n                <ngb-rating [(rate)]=\"currentRate\" class=\"rating-primary text-18\"></ngb-rating>\n                <hr>\n                <pre>Rate: <b>{{currentRate}}</b></pre>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"card mb-4\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Custom decimal rating</div>\n                <p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\n\n                <ng-template #t let-fill=\"fill\">\n                    <span class=\"star\" [class.full]=\"fill === 100\">\n                        <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                    </span>\n                </ng-template>\n\n                <ngb-rating class=\"rating-danger text-18\" [(rate)]=\"heartRating\" [starTemplate]=\"t\" [readonly]=\"true\"\n                    max=\"5\"></ngb-rating>\n\n                <hr>\n                <pre>Rate: <b>{{heartRating}}</b></pre>\n                <button class=\"btn btn-rounded btn-sm btn-outline-primary mr-2\" (click)=\"heartRating = 1.35\">1.35</button>\n                <button class=\"btn btn-rounded btn-sm btn-outline-primary mr-2\" (click)=\"heartRating = 4.72\">4.72</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">Colors & Sizes</div>\n                <p class=\"m-0\">All the rating components are connected to a same variable</p>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-primary mr-3 mb-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-secondary text-20 m-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-warning text-22 m-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-success text-24 m-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-info text-26 m-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-danger text-28 m-3\"></ngb-rating>\n                <ngb-rating [(rate)]=\"demoRating\" max=\"5\" class=\"rating-dark text-30 m-3\"></ngb-rating>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/ui-kits/rating/rating.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/ui-kits/rating/rating.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/ui-kits/rating/rating.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/ui-kits/rating/rating.component.ts ***!
  \**********************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.currentRate = 8;
        this.heartRating = 3;
        this.demoRating = 4.4;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/views/ui-kits/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/views/ui-kits/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/ui-kits-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UiKitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsRoutingModule", function() { return UiKitsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/views/ui-kits/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/views/ui-kits/cards/cards.component.ts");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordions/accordions.component */ "./src/app/views/ui-kits/accordions/accordions.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/views/ui-kits/modals/modals.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/views/ui-kits/alerts/alerts.component.ts");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/views/ui-kits/badges/badges.component.ts");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/views/ui-kits/loaders/loaders.component.ts");
/* harmony import */ var _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons-loading/buttons-loading.component */ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/views/ui-kits/popover/popover.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/views/ui-kits/rating/rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"]
    },
    {
        path: 'accordions',
        component: _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_5__["AccordionsComponent"]
    },
    {
        path: 'badges',
        component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_9__["BadgesComponent"]
    },
    {
        path: 'buttons',
        component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"]
    },
    {
        path: 'buttons-loading',
        component: _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_12__["ButtonsLoadingComponent"]
    },
    {
        path: 'cards',
        component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]
    },
    {
        path: 'cards-widget',
        component: _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_10__["CardWidgetsComponent"]
    },
    {
        path: 'cards-ecommerce',
        component: _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__["CardsEcommerceComponent"]
    },
    {
        path: 'cards-metrics',
        component: _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_8__["CardMetricsComponent"]
    },
    {
        path: 'modals',
        component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"]
    },
    {
        path: 'loaders',
        component: _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__["LoadersComponent"]
    },
    {
        path: 'popover',
        component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_13__["PopoverComponent"]
    },
    {
        path: 'rating',
        component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_14__["RatingComponent"]
    }
];
var UiKitsRoutingModule = /** @class */ (function () {
    function UiKitsRoutingModule() {
    }
    UiKitsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UiKitsRoutingModule);
    return UiKitsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/ui-kits/ui-kits.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/ui-kits/ui-kits.module.ts ***!
  \*************************************************/
/*! exports provided: UiKitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitsModule", function() { return UiKitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kits-routing.module */ "./src/app/views/ui-kits/ui-kits-routing.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/views/ui-kits/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/views/ui-kits/cards/cards.component.ts");
/* harmony import */ var _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-ecommerce/cards-ecommerce.component */ "./src/app/views/ui-kits/cards-ecommerce/cards-ecommerce.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordions/accordions.component */ "./src/app/views/ui-kits/accordions/accordions.component.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/views/ui-kits/modals/modals.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/views/ui-kits/alerts/alerts.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-metrics/card-metrics.component */ "./src/app/views/ui-kits/card-metrics/card-metrics.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/views/ui-kits/badges/badges.component.ts");
/* harmony import */ var _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card-widgets/card-widgets.component */ "./src/app/views/ui-kits/card-widgets/card-widgets.component.ts");
/* harmony import */ var _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loaders/loaders.component */ "./src/app/views/ui-kits/loaders/loaders.component.ts");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./buttons-loading/buttons-loading.component */ "./src/app/views/ui-kits/buttons-loading/buttons-loading.component.ts");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/views/ui-kits/popover/popover.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/views/ui-kits/rating/rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var UiKitsModule = /** @class */ (function () {
    function UiKitsModule() {
    }
    UiKitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_13__["NgxEchartsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_17__["SharedComponentsModule"],
                src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_18__["SharedDirectivesModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"].forRoot({ style: 'expand-left' }),
                _ui_kits_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitsRoutingModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                _cards_ecommerce_cards_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["CardsEcommerceComponent"],
                _accordions_accordions_component__WEBPACK_IMPORTED_MODULE_8__["AccordionsComponent"],
                _modals_modals_component__WEBPACK_IMPORTED_MODULE_9__["ModalsComponent"],
                _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_10__["AlertsComponent"],
                _card_metrics_card_metrics_component__WEBPACK_IMPORTED_MODULE_12__["CardMetricsComponent"],
                _badges_badges_component__WEBPACK_IMPORTED_MODULE_14__["BadgesComponent"],
                _card_widgets_card_widgets_component__WEBPACK_IMPORTED_MODULE_15__["CardWidgetsComponent"],
                _loaders_loaders_component__WEBPACK_IMPORTED_MODULE_16__["LoadersComponent"],
                _buttons_loading_buttons_loading_component__WEBPACK_IMPORTED_MODULE_19__["ButtonsLoadingComponent"],
                _popover_popover_component__WEBPACK_IMPORTED_MODULE_21__["PopoverComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_22__["RatingComponent"]
            ]
        })
    ], UiKitsModule);
    return UiKitsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-ui-kits-ui-kits-module.js.map