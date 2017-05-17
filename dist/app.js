webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(5);
	var core_1 = __webpack_require__(7);
	var app_module_1 = __webpack_require__(27);
	/*
	 Our application code
	*/
	// Turns off assertions and other checks within the framework if we are in production
	if (process.env.ENV === 'prod') {
	    core_1.enableProdMode();
	}
	// Bootstrap
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(26);
	var platform_browser_1 = __webpack_require__(25);
	var http_1 = __webpack_require__(28);
	var forms_1 = __webpack_require__(29);
	var home_component_1 = __webpack_require__(33);
	var about_component_1 = __webpack_require__(39);
	var prospective_players_component_1 = __webpack_require__(43);
	var contact_component_1 = __webpack_require__(48);
	var app_component_1 = __webpack_require__(52);
	var team_module_1 = __webpack_require__(60);
	var history_module_1 = __webpack_require__(150);
	var page_frame_module_1 = __webpack_require__(151);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            forms_1.FormsModule,
	            // AgmCoreModule.forRoot({
	            //     apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
	            // }),
	            page_frame_module_1.PageFrameModule,
	            team_module_1.TeamModule,
	            history_module_1.HistoryModule
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	            home_component_1.HomeComponent,
	            about_component_1.AboutComponent,
	            prospective_players_component_1.ProspectivePlayersComponent,
	            contact_component_1.ContactComponent
	        ],
	        // Use hash strategy so page refreshes on Github pages route correctly
	        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.2.4
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(7), __webpack_require__(30), __webpack_require__(8), __webpack_require__(9), __webpack_require__(31)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return flat.concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var isPromise = _angular_core.__core_private__.isPromise;
	
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var regex;
	            var regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());
	
	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	
	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a range value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="range" [(ngModel)]="age" >
	     *  ```
	     */
	    var RangeValueAccessor = (function () {
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return RangeValueAccessor;
	    }());
	
	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(name) || null;
	            }
	            return null;
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             * The parent control.
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     * You can't use the value key without the disabled key; both are required
	     * to use this way of initialization.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last: 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? this.form.get(path) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? extra['validator'] : null;
	            var asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());
	
	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus,
	        NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent.prototype.ngOnInit = function () { };
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(34),
	        styles: [__webpack_require__(36)],
	        encapsulation: core_1.ViewEncapsulation.None,
	    }),
	    __metadata("design:paramtypes", [])
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<img class=\"home-image\" src=\"" + __webpack_require__(35) + "\"/>";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/home.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(37);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-image {\n  width: 100%;\n  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);\n  border: 1px solid #00004D;\n}\n", ""]);
	
	// exports


/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var AboutComponent = (function () {
	    function AboutComponent() {
	    }
	    AboutComponent.prototype.ngOnInit = function () { };
	    return AboutComponent;
	}());
	AboutComponent = __decorate([
	    core_1.Component({
	        selector: 'about',
	        template: __webpack_require__(40),
	        styles: [__webpack_require__(41)]
	    }),
	    __metadata("design:paramtypes", [])
	], AboutComponent);
	exports.AboutComponent = AboutComponent;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">About Us</h1>\n<p>Illinois Ultimate is one of the premier ultimate programs in the Midwest and frequently ranks in the National top 25. We strive to contend with the best programs in the country and have qualified to compete at Nationals 7 of the last 10 years. We are a program that prides itself on developing players who come to Illinois with no experience playing competitive ultimate. We teach all levels of ultimate, from the basics of throwing a forehand all the way to throwing bombs in the worst of weather.</p>\n<h2 class=\"ui header\">Mission Statement</h2>\n<p>We want to compete at the highest level possible in college ultimate while remaining respectful to our opponents.  We want to develop all our of players to become the best they can be at ultimate, as well as players who exemplify the true meaning of sportsmanship, which is pivotal to the progress of ultimate frisbee in its current state.</p>\n<h2 class=\"ui header\">Team Structure/Affiliation with University</h2>\n<p>Our team is a Registered Student Organization (RSO) at the University of Illinois and we are classified as a club sport. We receive some funding from the University that helps pay for our travel costs and hotels while we are at tournaments.</p>\n<p>We are a member of the USAU  College Series and compete in a series of tournaments that  culminate in the College Championships held every year during Memorial Day weekend. Most, if not all, state schools have established ultimate teams and many smaller schools have teams as well.  We compete in the Illinois conference which is as you can guess, the schools in the state of Illinois. The next largest division is the Great Lakes Region, which includes the states of Illinois, Indiana, Michigan, and Kentucky. The final step is the aforementioned National Championships.</p>\n<p>Our program is split up into two teams, A and B. Our A team is a group of individuals who are very dedicated to the team and who put in a large amount of time for practices as well as training outside of practices. Our B team is more oriented towards the development of younger or inexperienced players. B team provides a much more relaxed atmosphere but still remains competitive with all other B teams in the region, and even beats some smaller schools' A teams.</p>\n<p>A team has tryouts each year. This year's tryouts will consist of four fall tournaments. There will be a round of cuts made after the second tournament. The tryout roster will then be narrowed down to one team before the final tournament of the fall, via cuts on a rolling basis. Players may be moved between the A and B team rosters as necessary.</p>";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(42);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "p {\n  text-align: left;\n}\n", ""]);
	
	// exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var google_spreadsheet_service_1 = __webpack_require__(44);
	var ProspectivePlayersComponent = (function () {
	    // Constructor with our http service injected
	    function ProspectivePlayersComponent(spreadsheetService) {
	        this.spreadsheetService = spreadsheetService;
	        // API url for our personal server
	        this.googleSheetsApiUrl = 'https://nick-proz-google-sheet-api.herokuapp.com/sheets/11ijrHoysiIwsFfEggbSNM9Y8VvzU65jeuhQ3vkV5FGw/sheetIndex/2/rows/';
	        // API url for our backup server (sheetsu API)
	        // private googleSheetsBackupApiUrl = 'https://sheetsu.com/apis/v1.0/7a030ae60b7d';
	        this.googleSheetsBackupApiUrl = '';
	        // Error messages
	        this.validationErrors = 'Please do not leave any required fields blank.';
	        this.submissionError = 'Could not submit the form  due to a server error. Please try again soon or contact the web admins.';
	        // Contact input
	        this.contact = 'Yes';
	        // Boolean indicating if our form is in the process of submitting (to show our loading icon)
	        this.formIsSubmitting = false;
	        // Boolean indicating if our form was successfully submitted (to show our success message)
	        this.submitSuccess = false;
	    }
	    ProspectivePlayersComponent.prototype.ngOnInit = function () { };
	    ProspectivePlayersComponent.prototype.handleSubmit = function (event) {
	        event.preventDefault();
	        this.submitSuccess = false;
	        if (!this.formIsValid()) {
	            this.formErrors = this.validationErrors;
	        }
	        else {
	            this.formIsSubmitting = true;
	            this.formErrors = null;
	            var date = new Date();
	            var data = {
	                "Timestamp": date.toLocaleString(),
	                "First Name": this.firstName,
	                "Last Name": this.lastName,
	                "Email Address": this.emailAddress,
	                "Hometown": this.hometown,
	                "Highschool": this.highschool,
	                "Major": this.major,
	                "Experience": this.experience,
	                "Other Clubs": this.otherClubs,
	                "Contact Me": this.contact
	            };
	            this.submitAbsentForm(data);
	        }
	    };
	    /**
	     * Submits our form to the spreadsheet by calling our service method.
	     * On success, we show our confirmation modal and reset our rsvp modal.
	     * On failure, we hide our submitting dialog and show our submission error to the user.
	     *
	     * @param data - data to submit to our spreadsheet
	     */
	    ProspectivePlayersComponent.prototype.submitAbsentForm = function (data) {
	        var _this = this;
	        this.spreadsheetService.postRowToSpreadsheet(this.googleSheetsApiUrl, this.googleSheetsBackupApiUrl, data)
	            .then(function () {
	            _this.resetForm();
	            _this.submitSuccess = true;
	        })
	            .catch(function () {
	            _this.formIsSubmitting = false;
	            _this.formErrors = _this.submissionError;
	        });
	    };
	    /**
	     * Clears our input fields, errors, and resets our form is submitting flag.
	     */
	    ProspectivePlayersComponent.prototype.resetForm = function () {
	        this.firstName = null;
	        this.lastName = null;
	        this.emailAddress = null;
	        this.hometown = null;
	        this.highschool = null;
	        this.major = null;
	        this.experience = null;
	        this.otherClubs = null;
	        this.formErrors = null;
	        this.formIsSubmitting = false;
	    };
	    /**
	     * Front-end validation for our form.
	     * Our form is valid only if all fields are populated.
	     *
	     * @returns {boolean} - true if the form is valid, false otherwise
	     */
	    ProspectivePlayersComponent.prototype.formIsValid = function () {
	        return this.firstName != null && this.firstName != ''
	            && this.lastName != null && this.lastName != ''
	            && this.emailAddress != null && this.emailAddress != ''
	            && this.hometown != null && this.hometown != ''
	            && this.highschool != null && this.highschool != ''
	            && this.major != null && this.major != ''
	            && this.experience != null && this.experience != ''
	            && this.otherClubs != null && this.otherClubs != ''
	            && this.contact != null && this.contact != '';
	    };
	    return ProspectivePlayersComponent;
	}());
	ProspectivePlayersComponent = __decorate([
	    core_1.Component({
	        selector: 'prospective-players',
	        template: __webpack_require__(45),
	        styles: [__webpack_require__(46)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof google_spreadsheet_service_1.SpreadsheetService !== "undefined" && google_spreadsheet_service_1.SpreadsheetService) === "function" && _a || Object])
	], ProspectivePlayersComponent);
	exports.ProspectivePlayersComponent = ProspectivePlayersComponent;
	var _a;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(28);
	/**
	 * Service to interact with our Google spreadsheet.
	 */
	var SpreadsheetService = (function () {
	    // Constructor with our http service injected
	    function SpreadsheetService(http) {
	        this.http = http;
	        // HTTP headers
	        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	    }
	    /**
	     * Attempts to post the data passed in to our spreadsheet.
	     * Rejects the promise if there is an error.
	     *
	     * @param apiUrl - url of the google sheets API
	     * @param backupApiUrl - url of hte google sheets backup API
	     * @param data - data to add to our spreadsheet
	     * @returns {Promise<JSON>} - Promise holding the successfully posted object, or a rejected promise with an error
	     */
	    SpreadsheetService.prototype.postRowToSpreadsheet = function (apiUrl, backupApiUrl, data) {
	        return this.http
	            .post(apiUrl, data, { headers: this.headers })
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(SpreadsheetService.handleError);
	        // .catch(() => this.postRowToSpreadsheetBackup(backupApiUrl, data));
	    };
	    /**
	     * Attempts to post the data passed in to our backup spreadsheet.
	     * This is a backup post in case our personal server fails.
	     * Rejects the promise if there is an error.
	     *
	     * @param backupApiUrl - url of hte google sheets backup API
	     * @param data - data to add to our spreadsheet
	     * @returns {Promise<JSON>} - Promise holding the successfully posted object, or a rejected promise with an error
	     */
	    SpreadsheetService.prototype.postRowToSpreadsheetBackup = function (backupApiUrl, data) {
	        return this.http
	            .post(backupApiUrl, data, { headers: this.headers })
	            .toPromise()
	            .then(function (response) { return response.json(); })
	            .catch(SpreadsheetService.handleError);
	    };
	    /**
	     * Handles all rsvp service errors (after our backup call) when interfacing
	     * with the google spreadsheet api. We log the error and reject the promise.
	     *
	     * @param error - Error to log and reject
	     * @returns {Promise<any>} - A rejected promise
	     */
	    SpreadsheetService.handleError = function (error) {
	        console.error('An error occurred when attempting to send data to our spreadsheet: ', error);
	        return Promise.reject(error);
	    };
	    return SpreadsheetService;
	}());
	SpreadsheetService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
	], SpreadsheetService);
	exports.SpreadsheetService = SpreadsheetService;
	var _a;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<h1 class=\"ui header\">Prospective Players</h1>\n<p>Illinois Ultimate has had a long history since its inception in the early 1990s and now consistently competes with best competition around the country. Illinois has qualified for national championships 6 out of the last 9 years behind our dedication, determination, and distinguished character on and off the field. Illinois alumni have gone on to play for nationals caliber club teams such as Chicago Machine, Minneapolis Drag 'n Thrust, Cincinnati Steamboat, Atlanta Chain Lightning, and San Francisco Blackbird. Alumni have played on professional AUDL teams such as the Chicago Wildfire, Minnesota Windchill, Cincinnati Revolution, and the San Jose Spiders. They have also created and captained club teams including Chicago Machine, Black Market Ultimate, and Beachfront Ultimate, and have gone on to coach college ultimate at the University of Illinois, the University of Chicago, Northwestern University, and the University of Kentucky. It's safe to say that once you play ultimate at Illinois you are opened up to a world of opportunity through our alumni network, who are more than willing to assist you on your journey though ultimate during and beyond your college years.</p>\n<p>While you are at Illinois you will enjoy a number of experiences. This ranges from team socials to study groups and from practices in Irwin Fieldhouse to playing games on the shores of San Diego. Your teammates won't only be your best friends, they will be family. You will learn the various ways ultimate is played, how to expand your throwing arsenal, how to improve your athleticism, and how to take your game to the next level. A majority of our team didn't play organized ultimate before coming to college, and are now some of the best players in the Great Lakes region (see our All-Regions honors page).</p>\n<p>We encourage prospective players to fill out our interest form and to reach out to the captains especially if you will be on campus. We are more than happy to meet up and discuss what Illinois can do for you, and to see what you can do to be ready for Illinois once you get on campus. Our contact information is below. Thank you for taking the time to visit our website, and we hope to hear from you soon.</p>\n<!--Form-->\n<form class=\"ui form\">\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>First Name <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"firstName\" type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n            </div>\n            <div class=\"field\">\n                <label>Last Name <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"lastName\" type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n            </div>\n        </div>\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>Email Address <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"emailAddress\" type=\"text\" name=\"email-address\" placeholder=\"Email Address\">\n            </div>\n            <div class=\"field\">\n                <label>What is your Hometown? <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"hometown\" type=\"text\" name=\"home-town\" placeholder=\"Hometown\">\n            </div>\n        </div>\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>What high school did you attend? <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"highschool\" type=\"text\" name=\"highschool\" placeholder=\"High School\">\n            </div>\n            <div class=\"field\">\n                <label>What major are you planning on going into? <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"major\" type=\"text\" name=\"major\" placeholder=\"Major\">\n            </div>\n        </div>\n        <div class=\"field\">\n            <label>How long have you played ultimate/what kind of experience do you have? <span class=\"required\">*</span></label>\n            <textarea [(ngModel)]=\"experience\" name=\"experience\" rows=\"2\"></textarea>\n        </div>\n        <div class=\"field\">\n            <label>What other clubs/organizations are you planning on joining when you arrive on campus? <span class=\"required\">*</span></label>\n            <textarea [(ngModel)]=\"otherClubs\" name=\"other-clubs\" rows=\"2\"></textarea>\n        </div>\n        <div class=\"inline fields\">\n            <label>Would you be alright with a captain or coach reaching out to you? <span class=\"required\">*</span></label>\n            <div class=\"field\">\n                <div class=\"ui radio checkbox\">\n                    <input id=\"contact-yes\" [(ngModel)]=\"contact\" type=\"radio\" name=\"contact\" value=\"Yes\" checked=\"checked\" tabindex=\"0\" class=\"hidden\">\n                    <label for=\"contact-yes\">Yes</label>\n                </div>\n            </div>\n            <div class=\"field\">\n                <div class=\"ui radio checkbox\">\n                    <input id=\"contact-no\" [(ngModel)]=\"contact\" type=\"radio\" name=\"contact\" value=\"No\" tabindex=\"0\" class=\"hidden\">\n                    <label for=\"contact-no\">No</label>\n                </div>\n            </div>\n        </div>\n    <button (click)=\"handleSubmit($event)\" class=\"ui button\" type=\"submit\">Submit</button>\n    <!--Error/Success Messages-->\n    <div class=\"ui error message\" *ngIf=\"formErrors\">\n        <p>{{formErrors}}</p>\n    </div>\n    <div class=\"ui success message\" *ngIf=\"submitSuccess\">\n        <div class=\"header\">Form Submitted</div>\n        <p>The form was successfully submitted! Thanks for taking the time to fill it out.</p>\n    </div>\n    <!--Submitting Loader-->\n    <div *ngIf=\"formIsSubmitting\" class=\"ui active inverted dimmer\"><div class=\"ui text loader\">Submitting</div></div>\n</form>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(47);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "p,\nlabel {\n  text-align: left;\n}\n.ui.form {\n  margin: 20px auto;\n}\n.ui.form .ui.error.message,\n.ui.form .ui.success.message {\n  display: block;\n}\n.ui.form .ui.error.message p,\n.ui.form .ui.success.message p {\n  text-align: center;\n}\n", ""]);
	
	// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var ContactComponent = (function () {
	    function ContactComponent() {
	    }
	    ContactComponent.prototype.ngOnInit = function () { };
	    return ContactComponent;
	}());
	ContactComponent = __decorate([
	    core_1.Component({
	        selector: 'contact',
	        template: __webpack_require__(49),
	        styles: [__webpack_require__(50)]
	    }),
	    __metadata("design:paramtypes", [])
	], ContactComponent);
	exports.ContactComponent = ContactComponent;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Contact Us</h1>\n<p>For any questions regarding practice or club details, feel free to contact any of the current captains:</p>\n\n<p class=\"captain\">Chris Buchta -- cbuchta2@gmail.com</p>\n<p class=\"captain\">Ben Foster -- ben.foster234@gmail.com</p>\n<p class=\"captain\">Jacob Komenda -- jacob.komenda@gmail.com</p>";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(51);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".captain {\n  margin-bottom: 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	__webpack_require__(53);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent.prototype.ngOnInit = function () { };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(57),
	        styles: [__webpack_require__(58)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(56)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "/* General Elements */\nbody {\n    background-image: url(" + __webpack_require__(55) + ");\n    font-family: 'Quattrocento', serif;\n    text-align: center;\n    overflow-y: scroll;\n}\np {\n    text-indent: 25px;\n    padding: 5px;\n}\na {\n    color: #ff6226;\n}\na:hover {\n    color: #00004D;\n}\ninput {\n    font-family: 'Quattrocento', serif !important;\n}\n\ninput:focus {\n     border-color: #ff6226 !important;\n}\n\n/* Headers */\n.ui.header {\n    font-family: 'Oswald', sans-serif;\n    color: #00004D;\n    letter-spacing: 1px;\n    /*text-transform: uppercase;*/\n}\n\n/* Tables */\n.ui.table tr, .ui.table td {\n    text-align: center;\n    border-top: 0;\n}\n\n/* Secondary Menus */\n.ui.secondary.pointing.menu {\n    justify-content: center;\n}\n.ui.secondary.pointing.menu .item.active {\n    border-color: #00004D;\n}\n\n/* Random */\n.button {\n    background-color: #ff6226 !important;\n    color: white !important;\n}\n.required {\n    color: #ff6226;\n}", ""]);
	
	// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/background.jpg";

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	module.exports = "<main class=\"main-container\">\n    <page-frame></page-frame>\n</main>\n";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(59);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".main-container {\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var core_2 = __webpack_require__(61);
	var platform_browser_1 = __webpack_require__(25);
	var forms_1 = __webpack_require__(29);
	var practice_component_1 = __webpack_require__(84);
	var tournaments_component_1 = __webpack_require__(89);
	var roster_component_1 = __webpack_require__(124);
	var absent_component_1 = __webpack_require__(129);
	var router_1 = __webpack_require__(90);
	var app_routes_1 = __webpack_require__(134);
	var google_spreadsheet_service_1 = __webpack_require__(44);
	var TeamModule = (function () {
	    function TeamModule() {
	    }
	    return TeamModule;
	}());
	TeamModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            core_2.AgmCoreModule.forRoot({
	                apiKey: 'AIzaSyBRIXAk5xdvn3ezypsSe55f8dZhcHheAZ8'
	            }),
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            practice_component_1.PracticeComponent,
	            tournaments_component_1.TournamentsComponent,
	            roster_component_1.RosterComponent,
	            absent_component_1.AbsentComponent
	        ],
	        providers: [google_spreadsheet_service_1.SpreadsheetService]
	    }),
	    __metadata("design:paramtypes", [])
	], TeamModule);
	exports.TeamModule = TeamModule;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// main modules
	__export(__webpack_require__(62));
	__export(__webpack_require__(79));
	// Google Maps types
	// core module
	// we explicitly export the module here to prevent this Ionic 2 bug:
	// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
	var core_module_1 = __webpack_require__(83);
	exports.AgmCoreModule = core_module_1.AgmCoreModule;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var google_map_1 = __webpack_require__(63);
	exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
	var google_map_circle_1 = __webpack_require__(72);
	exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
	var google_map_info_window_1 = __webpack_require__(73);
	exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
	var google_map_kml_layer_1 = __webpack_require__(74);
	exports.SebmGoogleMapKmlLayer = google_map_kml_layer_1.SebmGoogleMapKmlLayer;
	var google_map_marker_1 = __webpack_require__(75);
	exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
	var google_map_polygon_1 = __webpack_require__(76);
	exports.SebmGoogleMapPolygon = google_map_polygon_1.SebmGoogleMapPolygon;
	var google_map_polyline_1 = __webpack_require__(77);
	exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
	var google_map_polyline_point_1 = __webpack_require__(78);
	exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=directives.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var circle_manager_1 = __webpack_require__(66);
	var info_window_manager_1 = __webpack_require__(67);
	var marker_manager_1 = __webpack_require__(68);
	var polygon_manager_1 = __webpack_require__(69);
	var polyline_manager_1 = __webpack_require__(70);
	var kml_layer_manager_1 = __webpack_require__(71);
	/**
	 * SebMGoogleMap renders a Google Map.
	 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
	 * class `sebm-google-map-container`.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMap = (function () {
	    function SebmGoogleMap(_elem, _mapsWrapper) {
	        this._elem = _elem;
	        this._mapsWrapper = _mapsWrapper;
	        /**
	         * The longitude that defines the center of the map.
	         */
	        this.longitude = 0;
	        /**
	         * The latitude that defines the center of the map.
	         */
	        this.latitude = 0;
	        /**
	         * The zoom level of the map. The default zoom level is 8.
	         */
	        this.zoom = 8;
	        /**
	         * Enables/disables if map is draggable.
	         */
	        this.draggable = true;
	        /**
	         * Enables/disables zoom and center on double click. Enabled by default.
	         */
	        this.disableDoubleClickZoom = false;
	        /**
	         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
	         * value cannot get updated.
	         */
	        this.disableDefaultUI = false;
	        /**
	         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
	         */
	        this.scrollwheel = true;
	        /**
	         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
	         * enabled by default.
	         */
	        this.keyboardShortcuts = true;
	        /**
	         * The enabled/disabled state of the Zoom control.
	         */
	        this.zoomControl = true;
	        /**
	         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
	         * modes, these styles will only apply to labels and geometry.
	         */
	        this.styles = [];
	        /**
	         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
	         * used to
	         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
	         */
	        this.usePanning = false;
	        /**
	         * The initial enabled/disabled state of the Street View Pegman control.
	         * This control is part of the default UI, and should be set to false when displaying a map type
	         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
	         */
	        this.streetViewControl = true;
	        /**
	         * Sets the viewport to contain the given bounds.
	         */
	        this.fitBounds = null;
	        /**
	         * The initial enabled/disabled state of the Scale control. This is disabled by default.
	         */
	        this.scaleControl = false;
	        /**
	         * The initial enabled/disabled state of the Map type control.
	         */
	        this.mapTypeControl = false;
	        this._observableSubscriptions = [];
	        /**
	         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
	         * marker or infoWindow).
	         */
	        this.mapClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapRightClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapDblClick = new core_1.EventEmitter();
	        /**
	         * This event emitter is fired when the map center changes.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the viewport bounds have changed.
	         */
	        this.boundsChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the map becomes idle after panning or zooming.
	         */
	        this.idle = new core_1.EventEmitter();
	        /**
	         * This event is fired when the zoom level has changed.
	         */
	        this.zoomChange = new core_1.EventEmitter();
	    }
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnInit = function () {
	        // todo: this should be solved with a new component and a viewChild decorator
	        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
	        this._initMapInstance(container);
	    };
	    SebmGoogleMap.prototype._initMapInstance = function (el) {
	        this._mapsWrapper.createMap(el, {
	            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
	            zoom: this.zoom,
	            minZoom: this.minZoom,
	            maxZoom: this.maxZoom,
	            disableDefaultUI: this.disableDefaultUI,
	            backgroundColor: this.backgroundColor,
	            draggable: this.draggable,
	            draggableCursor: this.draggableCursor,
	            draggingCursor: this.draggingCursor,
	            keyboardShortcuts: this.keyboardShortcuts,
	            zoomControl: this.zoomControl,
	            styles: this.styles,
	            streetViewControl: this.streetViewControl,
	            scaleControl: this.scaleControl,
	            mapTypeControl: this.mapTypeControl
	        });
	        // register event listeners
	        this._handleMapCenterChange();
	        this._handleMapZoomChange();
	        this._handleMapMouseEvents();
	        this._handleBoundsChange();
	        this._handleIdleEvent();
	    };
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnDestroy = function () {
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    /* @internal */
	    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
	        this._updateMapOptionsChanges(changes);
	        this._updatePosition(changes);
	    };
	    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._mapsWrapper.setMapOptions(options);
	    };
	    /**
	     * Triggers a resize event on the google map instance.
	     * Returns a promise that gets resolved after the event was triggered.
	     */
	    SebmGoogleMap.prototype.triggerResize = function () {
	        var _this = this;
	        // Note: When we would trigger the resize event and show the map in the same turn (which is a
	        // common case for triggering a resize event), then the resize event would not
	        // work (to show the map), so we trigger the event in a timeout.
	        return new Promise(function (resolve) {
	            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
	        });
	    };
	    SebmGoogleMap.prototype._updatePosition = function (changes) {
	        if (changes['latitude'] == null && changes['longitude'] == null &&
	            changes['fitBounds'] == null) {
	            // no position update needed
	            return;
	        }
	        // we prefer fitBounds in changes
	        if (changes['fitBounds'] && this.fitBounds != null) {
	            this._fitBounds();
	            return;
	        }
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        var newCenter = {
	            lat: this.latitude,
	            lng: this.longitude,
	        };
	        if (this.usePanning) {
	            this._mapsWrapper.panTo(newCenter);
	        }
	        else {
	            this._mapsWrapper.setCenter(newCenter);
	        }
	    };
	    SebmGoogleMap.prototype._fitBounds = function () {
	        if (this.usePanning) {
	            this._mapsWrapper.panToBounds(this.fitBounds);
	            return;
	        }
	        this._mapsWrapper.fitBounds(this.fitBounds);
	    };
	    SebmGoogleMap.prototype._handleMapCenterChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
	            _this._mapsWrapper.getCenter().then(function (center) {
	                _this.latitude = center.lat();
	                _this.longitude = center.lng();
	                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleBoundsChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
	            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapZoomChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
	            _this._mapsWrapper.getZoom().then(function (z) {
	                _this.zoom = z;
	                _this.zoomChange.emit(z);
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleIdleEvent = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
	        var _this = this;
	        var events = [
	            { name: 'click', emitter: this.mapClick },
	            { name: 'rightclick', emitter: this.mapRightClick },
	        ];
	        events.forEach(function (e) {
	            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
	                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
	                e.emitter.emit(value);
	            });
	            _this._observableSubscriptions.push(s);
	        });
	    };
	    /**
	     * Map option attributes that can change over time
	     */
	    SebmGoogleMap._mapOptionsAttributes = [
	        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
	        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl',
	        'minZoom', 'maxZoom'
	    ];
	    SebmGoogleMap.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map',
	                    providers: [
	                        google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager,
	                        polygon_manager_1.PolygonManager, kml_layer_manager_1.KmlLayerManager
	                    ],
	                    inputs: [
	                        'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'draggable: mapDraggable',
	                        'disableDoubleClickZoom', 'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor',
	                        'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl',
	                        'fitBounds', 'scaleControl', 'mapTypeControl'
	                    ],
	                    outputs: [
	                        'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
	                    ],
	                    host: { '[class.sebm-google-map-container]': 'true' },
	                    styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
	                    template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMap.ctorParameters = function () { return [
	        { type: core_1.ElementRef, },
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	    ]; };
	    return SebmGoogleMap;
	}());
	exports.SebmGoogleMap = SebmGoogleMap;
	//# sourceMappingURL=google-map.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var maps_api_loader_1 = __webpack_require__(65);
	/**
	 * Wrapper class that handles the communication with the Google Maps Javascript
	 * API v3
	 */
	var GoogleMapsAPIWrapper = (function () {
	    function GoogleMapsAPIWrapper(_loader, _zone) {
	        var _this = this;
	        this._loader = _loader;
	        this._zone = _zone;
	        this._map =
	            new Promise(function (resolve) { _this._mapResolver = resolve; });
	    }
	    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
	        var _this = this;
	        return this._loader.load().then(function () {
	            var map = new google.maps.Map(el, mapOptions);
	            _this._mapResolver(map);
	            return;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
	        this._map.then(function (m) { m.setOptions(options); });
	    };
	    /**
	     * Creates a google map marker with the map context
	     */
	    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
	        if (options === void 0) { options = {}; }
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Marker(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
	        return this._map.then(function () { return new google.maps.InfoWindow(options); });
	    };
	    /**
	     * Creates a google.map.Circle for the current map.
	     */
	    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Circle(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var line = new google.maps.Polyline(options);
	            line.setMap(map);
	            return line;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var polygon = new google.maps.Polygon(options);
	            polygon.setMap(map);
	            return polygon;
	        });
	    };
	    /**
	     * Determines if given coordinates are insite a Polygon path.
	     */
	    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
	        return google.maps.geometry.poly.containsLocation(latLng, polygon);
	    };
	    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._map.then(function (m) {
	                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
	            });
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
	        return this._map.then(function (map) { return map.setCenter(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
	    GoogleMapsAPIWrapper.prototype.getBounds = function () {
	        return this._map.then(function (map) { return map.getBounds(); });
	    };
	    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
	        return this._map.then(function (map) { return map.setZoom(zoom); });
	    };
	    GoogleMapsAPIWrapper.prototype.getCenter = function () {
	        return this._map.then(function (map) { return map.getCenter(); });
	    };
	    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
	        return this._map.then(function (map) { return map.panTo(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
	        return this._map.then(function (map) { return map.fitBounds(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
	        return this._map.then(function (map) { return map.panToBounds(latLng); });
	    };
	    /**
	     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
	     */
	    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
	    /**
	     * Triggers the given event name on the map instance.
	     */
	    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
	        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
	    };
	    GoogleMapsAPIWrapper.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    GoogleMapsAPIWrapper.ctorParameters = function () { return [
	        { type: maps_api_loader_1.MapsAPILoader, },
	        { type: core_1.NgZone, },
	    ]; };
	    return GoogleMapsAPIWrapper;
	}());
	exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
	//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var MapsAPILoader = (function () {
	    function MapsAPILoader() {
	    }
	    MapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MapsAPILoader.ctorParameters = function () { return []; };
	    return MapsAPILoader;
	}());
	exports.MapsAPILoader = MapsAPILoader;
	//# sourceMappingURL=maps-api-loader.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var CircleManager = (function () {
	    function CircleManager(_apiWrapper, _zone) {
	        this._apiWrapper = _apiWrapper;
	        this._zone = _zone;
	        this._circles = new Map();
	    }
	    CircleManager.prototype.addCircle = function (circle) {
	        this._circles.set(circle, this._apiWrapper.createCircle({
	            center: { lat: circle.latitude, lng: circle.longitude },
	            clickable: circle.clickable,
	            draggable: circle.draggable,
	            editable: circle.editable,
	            fillColor: circle.fillColor,
	            fillOpacity: circle.fillOpacity,
	            radius: circle.radius,
	            strokeColor: circle.strokeColor,
	            strokeOpacity: circle.strokeOpacity,
	            strokePosition: circle.strokePosition,
	            strokeWeight: circle.strokeWeight,
	            visible: circle.visible,
	            zIndex: circle.zIndex
	        }));
	    };
	    ;
	    /**
	     * Removes the given circle from the map.
	     */
	    CircleManager.prototype.removeCircle = function (circle) {
	        var _this = this;
	        return this._circles.get(circle).then(function (c) {
	            c.setMap(null);
	            _this._circles.delete(circle);
	        });
	    };
	    CircleManager.prototype.setOptions = function (circle, options) {
	        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
	    };
	    ;
	    CircleManager.prototype.getBounds = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
	    };
	    ;
	    CircleManager.prototype.getCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
	    };
	    ;
	    CircleManager.prototype.getRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
	    };
	    CircleManager.prototype.setCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
	    };
	    ;
	    CircleManager.prototype.setEditable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
	    };
	    ;
	    CircleManager.prototype.setDraggable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
	    };
	    ;
	    CircleManager.prototype.setVisible = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
	    };
	    ;
	    CircleManager.prototype.setRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
	    };
	    ;
	    CircleManager.prototype.createEventObservable = function (eventName, circle) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            var listener = null;
	            _this._circles.get(circle).then(function (c) {
	                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	            return function () {
	                if (listener !== null) {
	                    listener.remove();
	                }
	            };
	        });
	    };
	    CircleManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    CircleManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return CircleManager;
	}());
	exports.CircleManager = CircleManager;
	//# sourceMappingURL=circle-manager.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(9);
	var core_1 = __webpack_require__(7);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var marker_manager_1 = __webpack_require__(68);
	var InfoWindowManager = (function () {
	    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markerManager = _markerManager;
	        this._infoWindows = new Map();
	    }
	    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
	        var _this = this;
	        var iWindow = this._infoWindows.get(infoWindow);
	        if (iWindow == null) {
	            // info window already deleted
	            return Promise.resolve();
	        }
	        return iWindow.then(function (i) {
	            return _this._zone.run(function () {
	                i.close();
	                _this._infoWindows.delete(infoWindow);
	            });
	        });
	    };
	    InfoWindowManager.prototype.setPosition = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
	            lat: infoWindow.latitude,
	            lng: infoWindow.longitude
	        }); });
	    };
	    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
	        return this._infoWindows.get(infoWindow)
	            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
	    };
	    InfoWindowManager.prototype.open = function (infoWindow) {
	        var _this = this;
	        return this._infoWindows.get(infoWindow).then(function (w) {
	            if (infoWindow.hostMarker != null) {
	                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
	                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
	                });
	            }
	            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
	        });
	    };
	    InfoWindowManager.prototype.close = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
	    };
	    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
	    };
	    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
	        var options = {
	            content: infoWindow.content,
	            maxWidth: infoWindow.maxWidth,
	            zIndex: infoWindow.zIndex,
	        };
	        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
	            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
	        }
	        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
	        this._infoWindows.set(infoWindow, infoWindowPromise);
	    };
	    /**
	     * Creates a Google Maps event listener for the given InfoWindow as an Observable
	     */
	    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._infoWindows.get(infoWindow).then(function (i) {
	                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    InfoWindowManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    InfoWindowManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	        { type: marker_manager_1.MarkerManager, },
	    ]; };
	    return InfoWindowManager;
	}());
	exports.InfoWindowManager = InfoWindowManager;
	//# sourceMappingURL=info-window-manager.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var MarkerManager = (function () {
	    function MarkerManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markers = new Map();
	    }
	    MarkerManager.prototype.deleteMarker = function (marker) {
	        var _this = this;
	        var m = this._markers.get(marker);
	        if (m == null) {
	            // marker already deleted
	            return Promise.resolve();
	        }
	        return m.then(function (m) {
	            return _this._zone.run(function () {
	                m.setMap(null);
	                _this._markers.delete(marker);
	            });
	        });
	    };
	    MarkerManager.prototype.updateMarkerPosition = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
	    };
	    MarkerManager.prototype.updateTitle = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
	    };
	    MarkerManager.prototype.updateLabel = function (marker) {
	        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
	    };
	    MarkerManager.prototype.updateDraggable = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
	    };
	    MarkerManager.prototype.updateIcon = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
	    };
	    MarkerManager.prototype.updateOpacity = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
	    };
	    MarkerManager.prototype.updateVisible = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
	    };
	    MarkerManager.prototype.updateZIndex = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
	    };
	    MarkerManager.prototype.addMarker = function (marker) {
	        var markerPromise = this._mapsWrapper.createMarker({
	            position: { lat: marker.latitude, lng: marker.longitude },
	            label: marker.label,
	            draggable: marker.draggable,
	            icon: marker.iconUrl,
	            opacity: marker.opacity,
	            visible: marker.visible,
	            zIndex: marker.zIndex,
	            title: marker.title
	        });
	        this._markers.set(marker, markerPromise);
	    };
	    MarkerManager.prototype.getNativeMarker = function (marker) {
	        return this._markers.get(marker);
	    };
	    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._markers.get(marker).then(function (m) {
	                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    MarkerManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MarkerManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return MarkerManager;
	}());
	exports.MarkerManager = MarkerManager;
	//# sourceMappingURL=marker-manager.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var PolygonManager = (function () {
	    function PolygonManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polygons = new Map();
	    }
	    PolygonManager.prototype.addPolygon = function (path) {
	        var polygonPromise = this._mapsWrapper.createPolygon({
	            clickable: path.clickable,
	            draggable: path.draggable,
	            editable: path.editable,
	            fillColor: path.fillColor,
	            fillOpacity: path.fillOpacity,
	            geodesic: path.geodesic,
	            paths: path.paths,
	            strokeColor: path.strokeColor,
	            strokeOpacity: path.strokeOpacity,
	            strokeWeight: path.strokeWeight,
	            visible: path.visible,
	            zIndex: path.zIndex,
	        });
	        this._polygons.set(path, polygonPromise);
	    };
	    PolygonManager.prototype.updatePolygon = function (polygon) {
	        var _this = this;
	        var m = this._polygons.get(polygon);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
	    };
	    PolygonManager.prototype.setPolygonOptions = function (path, options) {
	        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
	    };
	    PolygonManager.prototype.deletePolygon = function (paths) {
	        var _this = this;
	        var m = this._polygons.get(paths);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polygons.delete(paths);
	            });
	        });
	    };
	    PolygonManager.prototype.createEventObservable = function (eventName, path) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polygons.get(path).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolygonManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolygonManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return PolygonManager;
	}());
	exports.PolygonManager = PolygonManager;
	//# sourceMappingURL=polygon-manager.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	var PolylineManager = (function () {
	    function PolylineManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polylines = new Map();
	    }
	    PolylineManager._convertPoints = function (line) {
	        var path = line._getPoints().map(function (point) {
	            return { lat: point.latitude, lng: point.longitude };
	        });
	        return path;
	    };
	    PolylineManager.prototype.addPolyline = function (line) {
	        var path = PolylineManager._convertPoints(line);
	        var polylinePromise = this._mapsWrapper.createPolyline({
	            clickable: line.clickable,
	            draggable: line.draggable,
	            editable: line.editable,
	            geodesic: line.geodesic,
	            strokeColor: line.strokeColor,
	            strokeOpacity: line.strokeOpacity,
	            strokeWeight: line.strokeWeight,
	            visible: line.visible,
	            zIndex: line.zIndex,
	            path: path
	        });
	        this._polylines.set(line, polylinePromise);
	    };
	    PolylineManager.prototype.updatePolylinePoints = function (line) {
	        var _this = this;
	        var path = PolylineManager._convertPoints(line);
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
	    };
	    PolylineManager.prototype.setPolylineOptions = function (line, options) {
	        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
	    };
	    PolylineManager.prototype.deletePolyline = function (line) {
	        var _this = this;
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polylines.delete(line);
	            });
	        });
	    };
	    PolylineManager.prototype.createEventObservable = function (eventName, line) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polylines.get(line).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolylineManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolylineManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return PolylineManager;
	}());
	exports.PolylineManager = PolylineManager;
	//# sourceMappingURL=polyline-manager.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var Observable_1 = __webpack_require__(9);
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	/**
	 * Manages all KML Layers for a Google Map instance.
	 */
	var KmlLayerManager = (function () {
	    function KmlLayerManager(_wrapper, _zone) {
	        this._wrapper = _wrapper;
	        this._zone = _zone;
	        this._layers = new Map();
	    }
	    /**
	     * Adds a new KML Layer to the map.
	     */
	    KmlLayerManager.prototype.addKmlLayer = function (layer) {
	        var newLayer = this._wrapper.getNativeMap().then(function (m) {
	            return new google.maps.KmlLayer({
	                clickable: layer.clickable,
	                map: m,
	                preserveViewport: layer.preserveViewport,
	                screenOverlays: layer.screenOverlays,
	                suppressInfoWindows: layer.suppressInfoWindows,
	                url: layer.url,
	                zIndex: layer.zIndex
	            });
	        });
	        this._layers.set(layer, newLayer);
	    };
	    KmlLayerManager.prototype.setOptions = function (layer, options) {
	        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
	    };
	    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
	        var _this = this;
	        this._layers.get(layer).then(function (l) {
	            l.setMap(null);
	            _this._layers.delete(layer);
	        });
	    };
	    /**
	     * Creates a Google Maps event listener for the given KmlLayer as an Observable
	     */
	    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._layers.get(layer).then(function (m) {
	                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    KmlLayerManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    KmlLayerManager.ctorParameters = function () { return [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ]; };
	    return KmlLayerManager;
	}());
	exports.KmlLayerManager = KmlLayerManager;
	//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var circle_manager_1 = __webpack_require__(66);
	var SebmGoogleMapCircle = (function () {
	    function SebmGoogleMapCircle(_manager) {
	        this._manager = _manager;
	        /**
	         * Indicates whether this Circle handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this circle over the map. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this circle by dragging the control points shown at
	         * the center and around the circumference of the circle. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * The radius in meters on the Earth's surface.
	         */
	        this.radius = 0;
	        /**
	         * The stroke position. Defaults to CENTER.
	         * This property is not supported on Internet Explorer 8 and earlier.
	         */
	        this.strokePosition = 'CENTER';
	        /**
	         * The stroke width in pixels.
	         */
	        this.strokeWeight = 0;
	        /**
	         * Whether this circle is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the circle's center is changed.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the circle.
	         */
	        this.drag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the circle.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the circle.
	         */
	        this.dragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the circle.
	         */
	        this.mouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the circle.
	         */
	        this.mouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseout.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseover.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mouseup event is fired on the circle.
	         */
	        this.mouseUp = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle's radius is changed.
	         */
	        this.radiusChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle is right-clicked on.
	         */
	        this.rightClick = new core_1.EventEmitter();
	        this._circleAddedToManager = false;
	        this._eventSubscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnInit = function () {
	        this._manager.addCircle(this);
	        this._circleAddedToManager = true;
	        this._registerEventListeners();
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
	        if (!this._circleAddedToManager) {
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._manager.setCenter(this);
	        }
	        if (changes['editable']) {
	            this._manager.setEditable(this);
	        }
	        if (changes['draggable']) {
	            this._manager.setDraggable(this);
	        }
	        if (changes['visible']) {
	            this._manager.setVisible(this);
	        }
	        if (changes['radius']) {
	            this._manager.setRadius(this);
	        }
	        this._updateCircleOptionsChanges(changes);
	    };
	    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        if (optionKeys.length > 0) {
	            this._manager.setOptions(this, options);
	        }
	    };
	    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
	        var _this = this;
	        var events = new Map();
	        events.set('center_changed', this.centerChange);
	        events.set('click', this.circleClick);
	        events.set('dblclick', this.circleDblClick);
	        events.set('drag', this.drag);
	        events.set('dragend', this.dragEnd);
	        events.set('dragStart', this.dragStart);
	        events.set('mousedown', this.mouseDown);
	        events.set('mousemove', this.mouseMove);
	        events.set('mouseout', this.mouseOut);
	        events.set('mouseover', this.mouseOver);
	        events.set('mouseup', this.mouseUp);
	        events.set('radius_changed', this.radiusChange);
	        events.set('rightclick', this.rightClick);
	        events.forEach(function (eventEmitter, eventName) {
	            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
	                switch (eventName) {
	                    case 'radius_changed':
	                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
	                        break;
	                    case 'center_changed':
	                        _this._manager.getCenter(_this).then(function (center) {
	                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
	                        });
	                        break;
	                    default:
	                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
	                }
	            }));
	        });
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
	        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
	        this._eventSubscriptions = null;
	        this._manager.removeCircle(this);
	    };
	    /**
	     * Gets the LatLngBounds of this Circle.
	     */
	    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
	    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
	    SebmGoogleMapCircle._mapOptions = [
	        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	        'visible', 'zIndex'
	    ];
	    SebmGoogleMapCircle.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-circle',
	                    inputs: [
	                        'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
	                        'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	                        'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
	                        'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapCircle.ctorParameters = function () { return [
	        { type: circle_manager_1.CircleManager, },
	    ]; };
	    return SebmGoogleMapCircle;
	}());
	exports.SebmGoogleMapCircle = SebmGoogleMapCircle;
	//# sourceMappingURL=google-map-circle.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var info_window_manager_1 = __webpack_require__(67);
	var infoWindowId = 0;
	/**
	 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *        <sebm-google-map-info-window [disableAutoPan]="true">
	 *          Hi, this is the content of the <strong>info window</strong>
	 *        </sebm-google-map-info-window>
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapInfoWindow = (function () {
	    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
	        this._infoWindowManager = _infoWindowManager;
	        this._el = _el;
	        /**
	         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
	         */
	        this.isOpen = false;
	        /**
	         * Emits an event when the info window is closed.
	         */
	        this.infoWindowClose = new core_1.EventEmitter();
	        this._infoWindowAddedToManager = false;
	        this._id = (infoWindowId++).toString();
	    }
	    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
	        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
	        this._infoWindowManager.addInfoWindow(this);
	        this._infoWindowAddedToManager = true;
	        this._updateOpenState();
	        this._registerEventListeners();
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
	        if (!this._infoWindowAddedToManager) {
	            return;
	        }
	        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
	            typeof this.longitude === 'number') {
	            this._infoWindowManager.setPosition(this);
	        }
	        if (changes['zIndex']) {
	            this._infoWindowManager.setZIndex(this);
	        }
	        if (changes['isOpen']) {
	            this._updateOpenState();
	        }
	        this._setInfoWindowOptions(changes);
	    };
	    SebmGoogleMapInfoWindow.prototype._registerEventListeners = function () {
	        var _this = this;
	        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
	            _this.isOpen = false;
	            _this.infoWindowClose.emit();
	        });
	    };
	    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
	        this.isOpen ? this.open() : this.close();
	    };
	    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._infoWindowManager.setOptions(this, options);
	    };
	    /**
	     * Opens the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
	    /**
	     * Closes the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.close = function () {
	        var _this = this;
	        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
	    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
	    SebmGoogleMapInfoWindow.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map-info-window',
	                    inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
	                    outputs: ['infoWindowClose'],
	                    template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapInfoWindow.ctorParameters = function () { return [
	        { type: info_window_manager_1.InfoWindowManager, },
	        { type: core_1.ElementRef, },
	    ]; };
	    return SebmGoogleMapInfoWindow;
	}());
	exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;
	//# sourceMappingURL=google-map-info-window.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var kml_layer_manager_1 = __webpack_require__(71);
	var layerId = 0;
	var SebmGoogleMapKmlLayer = (function () {
	    function SebmGoogleMapKmlLayer(_manager) {
	        this._manager = _manager;
	        this._addedToManager = false;
	        this._id = (layerId++).toString();
	        this._subscriptions = [];
	        /**
	         * If true, the layer receives mouse events. Default value is true.
	         */
	        this.clickable = true;
	        /**
	         * By default, the input map is centered and zoomed to the bounding box of the contents of the
	         * layer.
	         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
	         * were never set.
	         */
	        this.preserveViewport = false;
	        /**
	         * Whether to render the screen overlays. Default true.
	         */
	        this.screenOverlays = true;
	        /**
	         * Suppress the rendering of info windows when layer features are clicked.
	         */
	        this.suppressInfoWindows = false;
	        /**
	         * The URL of the KML document to display.
	         */
	        this.url = null;
	        /**
	         * The z-index of the layer.
	         */
	        this.zIndex = null;
	        /**
	         * This event is fired when a feature in the layer is clicked.
	         */
	        this.layerClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the KML layers default viewport has changed.
	         */
	        this.defaultViewportChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the KML layer has finished loading.
	         * At this point it is safe to read the status property to determine if the layer loaded
	         * successfully.
	         */
	        this.statusChange = new core_1.EventEmitter();
	    }
	    SebmGoogleMapKmlLayer.prototype.ngOnInit = function () {
	        if (this._addedToManager) {
	            return;
	        }
	        this._manager.addKmlLayer(this);
	        this._addedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapKmlLayer.prototype.ngOnChanges = function (changes) {
	        if (!this._addedToManager) {
	            return;
	        }
	        this._updatePolygonOptions(changes);
	    };
	    SebmGoogleMapKmlLayer.prototype._updatePolygonOptions = function (changes) {
	        var options = Object.keys(changes)
	            .filter(function (k) { return SebmGoogleMapKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
	            .reduce(function (obj, k) {
	            obj[k] = changes[k].currentValue;
	            return obj;
	        }, {});
	        if (Object.keys(options).length > 0) {
	            this._manager.setOptions(this, options);
	        }
	    };
	    SebmGoogleMapKmlLayer.prototype._addEventListeners = function () {
	        var _this = this;
	        var listeners = [
	            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
	            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
	            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
	        ];
	        listeners.forEach(function (obj) {
	            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.toString = function () { return "SebmGoogleMapKmlLayer-" + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapKmlLayer.prototype.ngOnDestroy = function () {
	        this._manager.deleteKmlLayer(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
	    SebmGoogleMapKmlLayer.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-kml-layer',
	                    inputs: ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'],
	                    outputs: ['layerClick', 'defaultViewportChange', 'statusChange']
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapKmlLayer.ctorParameters = function () { return [
	        { type: kml_layer_manager_1.KmlLayerManager, },
	    ]; };
	    return SebmGoogleMapKmlLayer;
	}());
	exports.SebmGoogleMapKmlLayer = SebmGoogleMapKmlLayer;
	//# sourceMappingURL=google-map-kml-layer.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var marker_manager_1 = __webpack_require__(68);
	var google_map_info_window_1 = __webpack_require__(73);
	var markerId = 0;
	/**
	 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapMarker = (function () {
	    function SebmGoogleMapMarker(_markerManager) {
	        this._markerManager = _markerManager;
	        /**
	         * If true, the marker can be dragged. Default value is false.
	         */
	        this.draggable = false;
	        /**
	         * If true, the marker is visible
	         */
	        this.visible = true;
	        /**
	         * Whether to automatically open the child info window when the marker is clicked.
	         */
	        this.openInfoWindow = true;
	        /**
	         * The marker's opacity between 0.0 and 1.0.
	         */
	        this.opacity = 1;
	        /**
	         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
	         * front of markers with lower values. By default, markers are displayed according to their
	         * vertical position on screen, with lower markers appearing in front of markers further up the
	         * screen.
	         */
	        this.zIndex = 1;
	        /**
	         * This event emitter gets emitted when the user clicks on the marker.
	         */
	        this.markerClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the marker.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses over the marker.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses outside the marker.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        this._markerAddedToManger = false;
	        this._observableSubscriptions = [];
	        this._id = (markerId++).toString();
	    }
	    /* @internal */
	    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
	        if (this.infoWindow != null) {
	            this.infoWindow.hostMarker = this;
	        }
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        if (!this._markerAddedToManger) {
	            this._markerManager.addMarker(this);
	            this._markerAddedToManger = true;
	            this._addEventListeners();
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._markerManager.updateMarkerPosition(this);
	        }
	        if (changes['title']) {
	            this._markerManager.updateTitle(this);
	        }
	        if (changes['label']) {
	            this._markerManager.updateLabel(this);
	        }
	        if (changes['draggable']) {
	            this._markerManager.updateDraggable(this);
	        }
	        if (changes['iconUrl']) {
	            this._markerManager.updateIcon(this);
	        }
	        if (changes['opacity']) {
	            this._markerManager.updateOpacity(this);
	        }
	        if (changes['visible']) {
	            this._markerManager.updateVisible(this);
	        }
	        if (changes['zIndex']) {
	            this._markerManager.updateZIndex(this);
	        }
	    };
	    SebmGoogleMapMarker.prototype._addEventListeners = function () {
	        var _this = this;
	        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
	            if (_this.openInfoWindow && _this.infoWindow != null) {
	                _this.infoWindow.open();
	            }
	            _this.markerClick.emit(null);
	        });
	        this._observableSubscriptions.push(cs);
	        var ds = this._markerManager.createEventObservable('dragend', this)
	            .subscribe(function (e) {
	            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(ds);
	        var mover = this._markerManager.createEventObservable('mouseover', this)
	            .subscribe(function (e) {
	            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mover);
	        var mout = this._markerManager.createEventObservable('mouseout', this)
	            .subscribe(function (e) {
	            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mout);
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
	        this._markerManager.deleteMarker(this);
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapMarker.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-marker',
	                    inputs: [
	                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
	                        'openInfoWindow', 'opacity', 'visible', 'zIndex'
	                    ],
	                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapMarker.ctorParameters = function () { return [
	        { type: marker_manager_1.MarkerManager, },
	    ]; };
	    SebmGoogleMapMarker.propDecorators = {
	        'infoWindow': [{ type: core_1.ContentChild, args: [google_map_info_window_1.SebmGoogleMapInfoWindow,] },],
	    };
	    return SebmGoogleMapMarker;
	}());
	exports.SebmGoogleMapMarker = SebmGoogleMapMarker;
	//# sourceMappingURL=google-map-marker.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var polygon_manager_1 = __webpack_require__(69);
	/**
	 * SebmGoogleMapPolygon renders a polygon on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap, SebmGooglePolygon, LatLngLiteral } from 'angular2-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  styles: [`
	 *    .semb-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <semb-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <semb-map-polygon [paths]="paths">
	 *      </semb-map-polygon>
	 *    </semb-map>
	 *  `
	 * })
	 * export class MyMapCmp {
	 *   lat: number = 0;
	 *   lng: number = 0;
	 *   zoom: number = 10;
	 *   paths: Array<LatLngLiteral> = [
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ]
	 *   // Nesting paths will create a hole where they overlap;
	 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ], [
	 *     { lat: 0, lng: 15 },
	 *     { lat: 0, lng: 20 },
	 *     { lat: 5, lng: 20 },
	 *     { lat: 5, lng: 15 },
	 *     { lat: 0, lng: 15 }
	 *   ]]
	 * }
	 * ```
	 */
	var SebmGoogleMapPolygon = (function () {
	    function SebmGoogleMapPolygon(_polygonManager) {
	        this._polygonManager = _polygonManager;
	        /**
	         * Indicates whether this Polygon handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic
	         * property defines the mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control
	         * points shown at the vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will
	         * follow the curvature of the Earth. When false, edges of the polygon are
	         * rendered as straight lines in screen space. Note that the shape of a
	         * geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * The ordered sequence of coordinates that designates a closed loop.
	         * Unlike polylines, a polygon may consist of one or more paths.
	         *  As a result, the paths property may specify one or more arrays of
	         * LatLng coordinates. Paths are closed automatically; do not repeat the
	         * first vertex of the path as the last vertex. Simple polygons may be
	         * defined using a single array of LatLngs. More complex polygons may
	         * specify an array of arrays. Any simple arrays are converted into Arrays.
	         * Inserting or removing LatLngs from the Array will automatically update
	         * the polygon on the map.
	         */
	        this.paths = [];
	        /**
	         * This event is fired when the DOM click event is fired on the Polygon.
	         */
	        this.polyClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polygon.
	         */
	        this.polyDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polygon.
	         */
	        this.polyDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polygon.
	         */
	        this.polyDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polygon.
	         */
	        this.polyDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polygon.
	         */
	        this.polyMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polygon.
	         */
	        this.polyMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseout.
	         */
	        this.polyMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseover.
	         */
	        this.polyMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polygon
	         */
	        this.polyMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polygon is right-clicked on.
	         */
	        this.polyRightClick = new core_1.EventEmitter();
	        this._polygonAddedToManager = false;
	        this._subscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngAfterContentInit = function () {
	        if (!this._polygonAddedToManager) {
	            this._init();
	        }
	    };
	    SebmGoogleMapPolygon.prototype.ngOnChanges = function (changes) {
	        if (!this._polygonAddedToManager) {
	            this._init();
	            return;
	        }
	        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
	    };
	    SebmGoogleMapPolygon.prototype._init = function () {
	        this._polygonManager.addPolygon(this);
	        this._polygonAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolygon.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    SebmGoogleMapPolygon.prototype._updatePolygonOptions = function (changes) {
	        return Object.keys(changes)
	            .filter(function (k) { return SebmGoogleMapPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
	            .reduce(function (obj, k) {
	            obj[k] = changes[k].currentValue;
	            return obj;
	        }, {});
	    };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngOnDestroy = function () {
	        this._polygonManager.deletePolygon(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolygon._polygonOptionsAttributes = [
	        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
	        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
	        'editable', 'visible'
	    ];
	    SebmGoogleMapPolygon.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-map-polygon',
	                    inputs: [
	                        'clickable',
	                        'draggable: polyDraggable',
	                        'editable',
	                        'fillColor',
	                        'fillOpacity',
	                        'geodesic',
	                        'paths',
	                        'strokeColor',
	                        'strokeOpacity',
	                        'strokeWeight',
	                        'visible',
	                        'zIndex',
	                    ],
	                    outputs: [
	                        'polyClick', 'polyDblClick', 'polyDrag', 'polyDragEnd', 'polyMouseDown', 'polyMouseMove',
	                        'polyMouseOut', 'polyMouseOver', 'polyMouseUp', 'polyRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolygon.ctorParameters = function () { return [
	        { type: polygon_manager_1.PolygonManager, },
	    ]; };
	    return SebmGoogleMapPolygon;
	}());
	exports.SebmGoogleMapPolygon = SebmGoogleMapPolygon;
	//# sourceMappingURL=google-map-polygon.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var polyline_manager_1 = __webpack_require__(70);
	var google_map_polyline_point_1 = __webpack_require__(78);
	var polylineId = 0;
	/**
	 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-polyline>
	 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
	 *          </sebm-google-map-polyline-point>
	 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
	 *          </sebm-google-map-polyline-point>
	 *      </sebm-google-map-polyline>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapPolyline = (function () {
	    function SebmGoogleMapPolyline(_polylineManager) {
	        this._polylineManager = _polylineManager;
	        /**
	         * Indicates whether this Polyline handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic property defines the
	         * mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control points shown at the
	         * vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
	         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
	         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * Whether this polyline is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the DOM click event is fired on the Polyline.
	         */
	        this.lineClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polyline.
	         */
	        this.lineDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polyline.
	         */
	        this.lineDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polyline.
	         */
	        this.lineDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polyline.
	         */
	        this.lineDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polyline.
	         */
	        this.lineMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polyline.
	         */
	        this.lineMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseout.
	         */
	        this.lineMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseover.
	         */
	        this.lineMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polyline
	         */
	        this.lineMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polyline is right-clicked on.
	         */
	        this.lineRightClick = new core_1.EventEmitter();
	        this._polylineAddedToManager = false;
	        this._subscriptions = [];
	        this._id = (polylineId++).toString();
	    }
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        if (this.points.length) {
	            this.points.forEach(function (point) {
	                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
	                _this._subscriptions.push(s);
	            });
	        }
	        if (!this._polylineAddedToManager) {
	            this._init();
	        }
	        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
	        this._subscriptions.push(s);
	        this._polylineManager.updatePolylinePoints(this);
	    };
	    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
	        if (!this._polylineAddedToManager) {
	            this._init();
	            return;
	        }
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
	        this._polylineManager.setPolylineOptions(this, options);
	    };
	    SebmGoogleMapPolyline.prototype._init = function () {
	        this._polylineManager.addPolyline(this);
	        this._polylineAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype._getPoints = function () {
	        if (this.points) {
	            return this.points.toArray();
	        }
	        return [];
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
	        this._polylineManager.deletePolyline(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolyline._polylineOptionsAttributes = [
	        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
	        'zIndex'
	    ];
	    SebmGoogleMapPolyline.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-polyline',
	                    inputs: [
	                        'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
	                        'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
	                        'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolyline.ctorParameters = function () { return [
	        { type: polyline_manager_1.PolylineManager, },
	    ]; };
	    SebmGoogleMapPolyline.propDecorators = {
	        'points': [{ type: core_1.ContentChildren, args: [google_map_polyline_point_1.SebmGoogleMapPolylinePoint,] },],
	    };
	    return SebmGoogleMapPolyline;
	}());
	exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;
	//# sourceMappingURL=google-map-polyline.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	/**
	 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
	 * SembGoogleMapPolyline}
	 */
	var SebmGoogleMapPolylinePoint = (function () {
	    function SebmGoogleMapPolylinePoint() {
	        /**
	         * This event emitter gets emitted when the position of the point changed.
	         */
	        this.positionChanged = new core_1.EventEmitter();
	    }
	    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
	        if (changes['latitude'] || changes['longitude']) {
	            var position = {
	                lat: changes['latitude'].currentValue,
	                lng: changes['longitude'].currentValue
	            };
	            this.positionChanged.emit(position);
	        }
	    };
	    SebmGoogleMapPolylinePoint.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'sebm-google-map-polyline-point' },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolylinePoint.ctorParameters = function () { return []; };
	    SebmGoogleMapPolylinePoint.propDecorators = {
	        'latitude': [{ type: core_1.Input },],
	        'longitude': [{ type: core_1.Input },],
	        'positionChanged': [{ type: core_1.Output },],
	    };
	    return SebmGoogleMapPolylinePoint;
	}());
	exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=google-map-polyline-point.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var google_maps_api_wrapper_1 = __webpack_require__(64);
	exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
	var circle_manager_1 = __webpack_require__(66);
	exports.CircleManager = circle_manager_1.CircleManager;
	var info_window_manager_1 = __webpack_require__(67);
	exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
	var marker_manager_1 = __webpack_require__(68);
	exports.MarkerManager = marker_manager_1.MarkerManager;
	var polygon_manager_1 = __webpack_require__(69);
	exports.PolygonManager = polygon_manager_1.PolygonManager;
	var polyline_manager_1 = __webpack_require__(70);
	exports.PolylineManager = polyline_manager_1.PolylineManager;
	var kml_layer_manager_1 = __webpack_require__(71);
	exports.KmlLayerManager = kml_layer_manager_1.KmlLayerManager;
	var lazy_maps_api_loader_1 = __webpack_require__(80);
	exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
	exports.LAZY_MAPS_API_CONFIG = lazy_maps_api_loader_1.LAZY_MAPS_API_CONFIG;
	exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
	var maps_api_loader_1 = __webpack_require__(65);
	exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
	var noop_maps_api_loader_1 = __webpack_require__(82);
	exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
	//# sourceMappingURL=services.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(7);
	var browser_globals_1 = __webpack_require__(81);
	var maps_api_loader_1 = __webpack_require__(65);
	(function (GoogleMapsScriptProtocol) {
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
	})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
	var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
	/**
	 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
	 * LazyMapsAPILoaderConfig}.
	 */
	exports.LAZY_MAPS_API_CONFIG = new core_1.OpaqueToken('angular2-google-maps LAZY_MAPS_API_CONFIG');
	var LazyMapsAPILoader = (function (_super) {
	    __extends(LazyMapsAPILoader, _super);
	    function LazyMapsAPILoader(config, w, d) {
	        _super.call(this);
	        this._config = config || {};
	        this._windowRef = w;
	        this._documentRef = d;
	    }
	    LazyMapsAPILoader.prototype.load = function () {
	        var _this = this;
	        if (this._scriptLoadingPromise) {
	            return this._scriptLoadingPromise;
	        }
	        var script = this._documentRef.getNativeDocument().createElement('script');
	        script.type = 'text/javascript';
	        script.async = true;
	        script.defer = true;
	        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
	        script.src = this._getScriptSrc(callbackName);
	        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
	            _this._windowRef.getNativeWindow()[callbackName] = function () { resolve(); };
	            script.onerror = function (error) { reject(error); };
	        });
	        this._documentRef.getNativeDocument().body.appendChild(script);
	        return this._scriptLoadingPromise;
	    };
	    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
	        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
	        var protocol;
	        switch (protocolType) {
	            case GoogleMapsScriptProtocol.AUTO:
	                protocol = '';
	                break;
	            case GoogleMapsScriptProtocol.HTTP:
	                protocol = 'http:';
	                break;
	            case GoogleMapsScriptProtocol.HTTPS:
	                protocol = 'https:';
	                break;
	        }
	        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
	        var queryParams = {
	            v: this._config.apiVersion || '3',
	            callback: callbackName,
	            key: this._config.apiKey,
	            client: this._config.clientId,
	            channel: this._config.channel,
	            libraries: this._config.libraries,
	            region: this._config.region,
	            language: this._config.language
	        };
	        var params = Object.keys(queryParams)
	            .filter(function (k) { return queryParams[k] != null; })
	            .filter(function (k) {
	            // remove empty arrays
	            return !Array.isArray(queryParams[k]) ||
	                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
	        })
	            .map(function (k) {
	            // join arrays as comma seperated strings
	            var i = queryParams[k];
	            if (Array.isArray(i)) {
	                return { key: k, value: i.join(',') };
	            }
	            return { key: k, value: queryParams[k] };
	        })
	            .map(function (entry) { return entry.key + "=" + entry.value; })
	            .join('&');
	        return protocol + "//" + hostAndPath + "?" + params;
	    };
	    LazyMapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    LazyMapsAPILoader.ctorParameters = function () { return [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.LAZY_MAPS_API_CONFIG,] },] },
	        { type: browser_globals_1.WindowRef, },
	        { type: browser_globals_1.DocumentRef, },
	    ]; };
	    return LazyMapsAPILoader;
	}(maps_api_loader_1.MapsAPILoader));
	exports.LazyMapsAPILoader = LazyMapsAPILoader;
	//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	"use strict";
	var WindowRef = (function () {
	    function WindowRef() {
	    }
	    WindowRef.prototype.getNativeWindow = function () { return window; };
	    return WindowRef;
	}());
	exports.WindowRef = WindowRef;
	var DocumentRef = (function () {
	    function DocumentRef() {
	    }
	    DocumentRef.prototype.getNativeDocument = function () { return document; };
	    return DocumentRef;
	}());
	exports.DocumentRef = DocumentRef;
	exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
	//# sourceMappingURL=browser-globals.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";
	/**
	 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
	 * Tag.
	 * It's important that the Google Maps API script gets loaded first on the page.
	 */
	var NoOpMapsAPILoader = (function () {
	    function NoOpMapsAPILoader() {
	    }
	    NoOpMapsAPILoader.prototype.load = function () {
	        if (!window.google || !window.google.maps) {
	            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
	        }
	        return Promise.resolve();
	    };
	    ;
	    return NoOpMapsAPILoader;
	}());
	exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
	//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(7);
	var google_map_kml_layer_1 = __webpack_require__(74);
	var google_map_1 = __webpack_require__(63);
	var google_map_circle_1 = __webpack_require__(72);
	var google_map_info_window_1 = __webpack_require__(73);
	var google_map_marker_1 = __webpack_require__(75);
	var google_map_polygon_1 = __webpack_require__(76);
	var google_map_polyline_1 = __webpack_require__(77);
	var google_map_polyline_point_1 = __webpack_require__(78);
	var lazy_maps_api_loader_1 = __webpack_require__(80);
	var lazy_maps_api_loader_2 = __webpack_require__(80);
	var maps_api_loader_1 = __webpack_require__(65);
	var browser_globals_1 = __webpack_require__(81);
	/**
	 * @internal
	 */
	function coreDirectives() {
	    return [
	        google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
	        google_map_polygon_1.SebmGoogleMapPolygon, google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint, google_map_kml_layer_1.SebmGoogleMapKmlLayer
	    ];
	}
	exports.coreDirectives = coreDirectives;
	;
	/**
	 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
	 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
	 */
	var AgmCoreModule = (function () {
	    function AgmCoreModule() {
	    }
	    /**
	     * Please use this method when you register the module at the root level.
	     */
	    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
	        return {
	            ngModule: AgmCoreModule,
	            providers: browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([
	                { provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader },
	                { provide: lazy_maps_api_loader_2.LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
	            ]),
	        };
	    };
	    AgmCoreModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
	    ];
	    /** @nocollapse */
	    AgmCoreModule.ctorParameters = function () { return []; };
	    return AgmCoreModule;
	}());
	exports.AgmCoreModule = AgmCoreModule;
	//# sourceMappingURL=core-module.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var practice_data_1 = __webpack_require__(85);
	var PracticeComponent = (function () {
	    function PracticeComponent() {
	        // Practice data to inject into our template
	        this.practiceData = practice_data_1.PRACTICE_DATA;
	    }
	    PracticeComponent.prototype.ngOnInit = function () { };
	    return PracticeComponent;
	}());
	PracticeComponent = __decorate([
	    core_1.Component({
	        selector: 'practice',
	        template: __webpack_require__(86),
	        styles: [__webpack_require__(87)]
	    }),
	    __metadata("design:paramtypes", [])
	], PracticeComponent);
	exports.PracticeComponent = PracticeComponent;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	"use strict";
	exports.PRACTICE_DATA = [
	    {
	        season: 'Fall',
	        what: 'Normal Practice',
	        time: '4:30PM-7PM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Fall',
	        what: 'Weekend Invite Practice',
	        time: 'TBD',
	        when: 'Weekends',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Winter',
	        what: 'Normal Practice',
	        time: '9:30PM-12AM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Armory',
	        locationLink: 'https://www.google.com/maps/place/Armory/@40.105402,-88.235534,17z/data=!3m1!5s0x880cd73b8c4fbb7d:0xa84890110afd0990!4m7!1m4!3m3!1s0x880cd73a16c1d78f:0xe1bb009225fc1225!2sE+Armory+Ave,+Champaign,+IL+61820!3b1!3m1!1s0x0000000000000000:0x0b21d56f2b951978'
	    },
	    {
	        season: 'Winter',
	        what: 'Indoor Field Practice',
	        time: '11PM-12AM',
	        when: 'Thursdays',
	        locationLabel: 'Irwin Facility',
	        locationLink: 'https://www.google.com/maps/place/Irwin+Indoor+Football+Facility,+University+of+Illinois+at+Urbana-Champaign,+Champaign,+IL+61820/@40.1006475,-88.2342204,17z/data=!3m1!4b1!4m6!1m3!3m2!1s0x880cd724a92655e9:0xa53c0525046826fa!2sUniversity+of+Illinois+at+Urbana-Champaign!3m1!1s0x880cd725292c02bd:0x18f5a03daad8677a'
	    },
	    {
	        season: 'Spring',
	        what: 'Normal Practice',
	        time: '9:30PM-12AM',
	        when: 'Mondays & Wednesdays',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    },
	    {
	        season: 'Spring',
	        what: 'A-Team Practice',
	        time: 'TBD',
	        when: 'Weekends',
	        locationLabel: 'Complex Fields',
	        locationLink: 'https://www.google.com/maps/place/Florida+and+Lincoln+Playing+Field/@40.0966964,-88.2242806,16z/data=!4m5!1m2!2m1!1scomplex+fields!3m1!1s0x0000000000000000:0x13633840896e25bf'
	    }
	];


/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<h1 class=\"ui header\">Practice</h1>\n<!--Table-->\n<table class=\"ui celled table\">\n    <thead>\n        <tr>\n            <th>Season</th>\n            <th>What</th>\n            <th>Time</th>\n            <th>When</th>\n            <th>Location</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let practiceRow of practiceData\">\n            <td>{{practiceRow.season}}</td>\n            <td>{{practiceRow.what}}</td>\n            <td>{{practiceRow.time}}</td>\n            <td>{{practiceRow.when}}</td>\n            <td><a href=\"{{practiceRow.locationLink}}\" target=\"_blank\">{{practiceRow.locationLabel}}</a></td>\n        </tr>\n    </tbody>\n</table>";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(88);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "tr {\n  text-align: center;\n}\n", ""]);
	
	// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(90);
	var tournaments_data_1 = __webpack_require__(120);
	var TournamentsComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function TournamentsComponent(route) {
	        this.route = route;
	        // Tournament data to inject into our template
	        this.tournamentData = tournaments_data_1.TOURNAMENTS_DATA;
	    }
	    /**
	     * Subscribe to our route parameters (tournament year).
	     */
	    TournamentsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (tournament year).
	     */
	    TournamentsComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return TournamentsComponent;
	}());
	TournamentsComponent = __decorate([
	    core_1.Component({
	        selector: 'tournaments',
	        template: __webpack_require__(121),
	        styles: [__webpack_require__(122)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
	], TournamentsComponent);
	exports.TournamentsComponent = TournamentsComponent;
	var _a;


/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports) {

	"use strict";
	exports.TOURNAMENTS_DATA = [
	    {
	        year: 2017,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: 'https://boilerlink.purdue.edu/organization/mensultimate/calendar/details/972920',
	                when: 'Sept. 17th-18th',
	                location: 'West Lafayette, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'No Wisconsequences',
	                nameLink: 'http://nowisconsequences.ultimatecentral.com',
	                when: 'Oct. 8th-9th',
	                location: 'Hartland, WI',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Missouri Loves Company',
	                nameLink: 'http://ultimate.missouri.edu/mlc/2016',
	                when: 'Nov. 5th-6th',
	                location: 'Columbia, MO',
	                result: '-'
	            },
	            {
	                season: 'Spring',
	                nameLabel: "President's Day Invite",
	                nameLink: 'http://play.usaultimate.org/events/Presidents-Day-Tournament-2017',
	                when: 'Feb. 17th-20th',
	                location: 'San Diego, CA',
	                result: '5th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Centex',
	                nameLink: 'http://play.usaultimate.org/events/Centex-2017-Open',
	                when: 'March 10th-13th',
	                location: 'Austin, TX',
	                result: '7th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Huck Finn',
	                nameLink: 'http://play.usaultimate.org/events/Huck-Finn-2017',
	                when: 'April 1st-2nd',
	                location: 'St. Louis, MO',
	                result: '11th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Illinois Conferences',
	                nameLink: 'http://play.usaultimate.org/events/Illinois-D-I-College-Mens-CC-2017',
	                when: 'April 22nd-23rd',
	                location: 'Rantoul, IL',
	                result: '2nd'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Great Lakes Regionals',
	                nameLink: 'http://play.usaultimate.org/events/Great-Lakes-D-I-College-Mens-Regionals-2017',
	                when: 'May 6th-7th',
	                location: 'Fair Oaks, IN',
	                result: '6th'
	            }
	        ]
	    },
	    {
	        year: 2016,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: 'https://www.reddit.com/r/ultimate/comments/38gy72/new_fields_boiler_breakaway_2015_hosted_by_undue',
	                when: 'Sept. 19th-20th',
	                location: 'Westfield, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Huck of the Irish',
	                nameLink: 'https://ndultimate.wordpress.com/hoti',
	                when: 'Oct. 3rd-4th',
	                location: 'South Bend, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Chicago Invite',
	                nameLink: 'http://www.chicagoinvite.com',
	                when: 'Oct. 17th-18th',
	                location: 'Rockford, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Missouri Loves Company',
	                nameLink: 'http://ultiworld.com/2015/11/12/missouri-loves-company-2015-tournament-recap-mens',
	                when: 'Nov. 7th-8th',
	                location: 'Columbia, MO',
	                result: '10th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Florida Warmup',
	                nameLink: 'http://play.usaultimate.org/events/Warm-up-A-Florida-Affair-2016',
	                when: 'Feb. 11th-14th',
	                location: 'Tampa, FL',
	                result: '15th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Easterns',
	                nameLink: 'http://play.usaultimate.org/events/College-Easterns-2016',
	                when: 'March 18th-20th',
	                location: 'North Myrtle Beach, SC',
	                result: '19th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Huck Finn',
	                nameLink: 'http://play.usaultimate.org/events/Huck-Finn-XX-2016',
	                when: 'Feb. 11th-14th',
	                location: 'St. Louis, MO',
	                result: '11th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Illinois Conferences',
	                nameLink: 'http://play.usaultimate.org/events/Illinois-D-I-College-Mens-CC-2016',
	                when: 'April 16th-17th',
	                location: 'Rantoul, IL',
	                result: '3rd'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Great Lakes Regionals',
	                nameLink: 'http://play.usaultimate.org/events/Great-Lakes-D-I-College-Mens-Regionals-2016',
	                when: 'April 30th-May 1st',
	                location: 'Fair Oaks, IN',
	                result: '3rd'
	            }
	        ]
	    },
	    {
	        year: 2015,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Huck of the Irish',
	                nameLink: 'https://ndultimate.wordpress.com/whitesmoke',
	                when: 'Sept. 27th-28th',
	                location: 'South Bend, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Glory Days',
	                nameLink: 'http://www.sun-ultimate.org/glory-days.html',
	                when: 'Oct. 4th-5th',
	                location: 'Rockford, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Illinois Invite',
	                nameLink: 'https://illinois.collegiatelink.net/organization/illinoismensultimatefrisbeeteam/calendar/details/504204',
	                when: 'Oct. 18th-19th',
	                location: 'Rantoul, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Missouri Loves Company',
	                nameLink: 'http://ultiworld.com/2014/11/06/missouri-loves-company-2014-tournament-preview-mens',
	                when: 'Nov. 8th-9th',
	                location: 'Columbia, MO',
	                result: '-'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Florida Warmup',
	                nameLink: 'http://play.usaultimate.org/events/Warm-Up-A-Florida-Affair-2015',
	                when: 'Feb. 13th-15th',
	                location: 'Tampa, FL',
	                result: '13th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Centex Invite',
	                nameLink: 'http://play.usaultimate.org/events/Centex-Invite-2015',
	                when: 'March 14th-15th',
	                location: 'Austin, TX',
	                result: '17th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Easterns',
	                nameLink: 'http://play.usaultimate.org/events/Easterns-2015',
	                when: 'March 27th-29th',
	                location: 'North Myrtle Beach, SC',
	                result: '17th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Illinois Conferences',
	                nameLink: 'http://play.usaultimate.org/events/Illinois-D-I-College-Mens-CC-2015',
	                when: 'April 11th-12th',
	                location: 'Rantoul, IL',
	                result: '2nd'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Great Lakes Regionals',
	                nameLink: 'http://play.usaultimate.org/events/Great-Lakes-D-I-College-Mens-Regionals-2015',
	                when: 'April 25th-26th',
	                location: 'Rockford, IL',
	                result: '1st'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'D-I National Championships',
	                nameLink: 'http://play.usaultimate.org/events/USA-Ultimate-D-I-College-Championships-2015',
	                when: 'May 22nd-25th',
	                location: 'Milwaukee, WI',
	                result: '13th'
	            }
	        ]
	    },
	    {
	        year: 2014,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/13422',
	                when: 'Oct. 5th-6th',
	                location: 'West Lafayette, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Illinois Invite',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/13350',
	                when: 'Oct. 12th-13th',
	                location: 'Rantoul, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Michigan Round Robin',
	                nameLink: '',
	                when: 'Oct. 20th',
	                location: 'Ann Arbor, MI',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Glory Days',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/13499',
	                when: 'Oct. 26th-27th',
	                location: 'Rockford, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Missouri Loves Company',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/14017',
	                when: 'Nov. 9th-10th',
	                location: 'Columbia, MO',
	                result: '13th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Cat Fight',
	                nameLink: 'http://play.usaultimate.org/events/Cat-Fight',
	                when: 'Feb. 22nd-23rd',
	                location: 'Lexington, KY',
	                result: '1st'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Easterns',
	                nameLink: 'http://play.usaultimate.org/events/Easterns-and-DIII-Easterns',
	                when: 'March 22nd-23rd',
	                location: 'Little River, SC',
	                result: '13th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Illinois Conferences',
	                nameLink: 'http://play.usaultimate.org/events/Illinois-D-I-College-Mens-CC',
	                when: 'April 12th-13th',
	                location: 'Rantoul, IL',
	                result: '1st'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Great Lakes Regionals',
	                nameLink: 'http://play.usaultimate.org/events/Great-Lakes-D-I-College-Mens-Regionals',
	                when: 'April 26th-27th',
	                location: 'Rockford, IL',
	                result: '5th'
	            }
	        ]
	    },
	    {
	        year: 2013,
	        tournaments: [
	            {
	                season: 'Fall',
	                nameLabel: 'Boiler Breakaway',
	                nameLink: 'http://scores.usaultimate.org/scores2012/#college-open/tournament/11432',
	                when: 'Sept. 22nd-23rd',
	                location: 'West Lafayette, IN',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Illinois Invite',
	                nameLink: 'http://scores.usaultimate.org/scores2012/#college-open/tournament/11476',
	                when: 'Oct. 13th-14th',
	                location: 'Rantoul, IL',
	                result: '-'
	            },
	            {
	                season: 'Fall',
	                nameLabel: 'Missouri Loves Company',
	                nameLink: 'http://scores.usaultimate.org/scores2012/#college-open/tournament/11657',
	                when: 'Nov. 10th-11th',
	                location: 'Columbia, MO',
	                result: '-'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Huck Finn',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/12115',
	                when: 'March 9th-10th',
	                location: 'Chesterfield, MO',
	                result: '13th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Centex',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/12707',
	                when: 'March 16th-17th',
	                location: 'Austin, TX',
	                result: '4th'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Illinois Conferences',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/12604',
	                when: 'April 13th-14th',
	                location: 'Rantoul, IL',
	                result: '1st'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'Great Lakes Regionals',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/12667',
	                when: 'April 27th-28th',
	                location: 'Rockford, IL',
	                result: '1st'
	            },
	            {
	                season: 'Spring',
	                nameLabel: 'D-I National Championships',
	                nameLink: 'http://scores.usaultimate.org/scores/#college-open/tournament/12686',
	                when: 'May 24th-27th',
	                location: 'Madison, WI',
	                result: '17th'
	            }
	        ]
	    }
	];


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<h1 class=\"ui header\">Tournaments</h1>\n<!--Menu-->\n<div class=\"ui secondary pointing menu\">\n    <a class=\"item\" routerLink=\"/tournaments/2013\" [ngClass]=\"{'active': year === 2013}\">2013</a>\n    <a class=\"item\" routerLink=\"/tournaments/2014\" [ngClass]=\"{'active': year === 2014}\">2014</a>\n    <a class=\"item\" routerLink=\"/tournaments/2015\" [ngClass]=\"{'active': year === 2015}\">2015</a>\n    <a class=\"item\" routerLink=\"/tournaments/2016\" [ngClass]=\"{'active': year === 2016}\">2016</a>\n    <a class=\"item\" routerLink=\"/tournaments/2017\" [ngClass]=\"{'active': year === 2017}\">2017</a>\n</div>\n<!--Table-->\n<ng-container *ngFor=\"let tournamentYear of tournamentData\">\n    <ng-container *ngIf=\"tournamentYear.year === year\">\n        <table class=\"ui celled table\" *ngIf=\"tournamentData\">\n            <thead>\n                <tr>\n                    <th>Season</th>\n                    <th>Name</th>\n                    <th>When</th>\n                    <th>Location</th>\n                    <th>Result</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let tournament of tournamentYear.tournaments\">\n                    <td>{{tournament.season}}</td>\n                    <td>\n                        <!--Only render a link if there is one provided in the data, otherwise just render the text-->\n                        <a *ngIf=\"tournament.nameLink\" href=\"{{tournament.nameLink}}\" target=\"_blank\">{{tournament.nameLabel}}</a>\n                        <ng-container *ngIf=\"!tournament.nameLink\">{{tournament.nameLabel}}</ng-container>\n                    </td>\n                    <td>{{tournament.when}}</td>\n                    <td>{{tournament.location}}</td>\n                    <td>{{tournament.result}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </ng-container>\n</ng-container>";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(123);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(90);
	var rosters_data_1 = __webpack_require__(125);
	var RosterComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function RosterComponent(route) {
	        this.route = route;
	        // Roster data to inject into our template
	        this.rosterData = rosters_data_1.ROSTER_DATA;
	    }
	    /**
	     * Subscribe to our route parameters (roster year).
	     */
	    RosterComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (roster year).
	     */
	    RosterComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return RosterComponent;
	}());
	RosterComponent = __decorate([
	    core_1.Component({
	        selector: 'roster',
	        template: __webpack_require__(126),
	        styles: [__webpack_require__(127)]
	    }),
	    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
	], RosterComponent);
	exports.RosterComponent = RosterComponent;
	var _a;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	"use strict";
	exports.ROSTER_DATA = [
	    {
	        year: 2017,
	        imagePath: './assets/team-photo-2017.jpg',
	        players: [
	            {
	                number: 2,
	                name: "Ben 'Beef' Sabourin",
	                year: 'Sophomore'
	            },
	            {
	                number: 3,
	                name: 'Cody Gray',
	                year: 'Grad'
	            },
	            {
	                number: 6,
	                name: 'Jacob Cuthbert',
	                year: 'Sophomore'
	            },
	            {
	                number: 7,
	                name: 'Kevin Lin',
	                year: 'Junior'
	            },
	            {
	                number: 8,
	                name: 'Devin Kelly',
	                year: 'Sophomore'
	            },
	            {
	                number: 13,
	                name: 'Walter Jaskowiak',
	                year: 'Sophomore'
	            },
	            {
	                number: 18,
	                name: 'Hector Moreno',
	                year: 'Junior'
	            },
	            {
	                number: 19,
	                name: 'Jacob Komenda*',
	                year: 'Junior'
	            },
	            {
	                number: 23,
	                name: 'Jarred Elliott',
	                year: 'Senior'
	            },
	            {
	                number: 24,
	                name: 'Josh Deeman',
	                year: 'Sophomore'
	            },
	            {
	                number: 28,
	                name: 'Frank Dore',
	                year: 'Sophomore'
	            },
	            {
	                number: 29,
	                name: 'Ben Foster*',
	                year: 'Senior'
	            },
	            {
	                number: 33,
	                name: 'Jacob Trueb',
	                year: 'Junior'
	            },
	            {
	                number: 35,
	                name: 'Cameron Hartman',
	                year: 'Sophomore'
	            },
	            {
	                number: 38,
	                name: 'John Kulikowski',
	                year: 'Sophomore'
	            },
	            {
	                number: 47,
	                name: 'Grant Whitman',
	                year: 'Junior'
	            },
	            {
	                number: 81,
	                name: "Chris 'Books' Buchta*",
	                year: 'Senior'
	            },
	            {
	                number: 95,
	                name: 'Tat Shing',
	                year: 'Junior'
	            },
	            {
	                number: undefined,
	                name: 'Erik Huemiller',
	                year: 'Coach'
	            }
	        ]
	    },
	    {
	        year: 2016,
	        imagePath: './assets/team-photo-2016.jpg',
	        players: [
	            {
	                number: 1,
	                name: 'Nick Prozorovsky*',
	                year: 'Senior'
	            },
	            {
	                number: 2,
	                name: 'Ben Sabourin',
	                year: 'Freshman'
	            },
	            {
	                number: 3,
	                name: 'Cody Gray',
	                year: 'Grad'
	            },
	            {
	                number: 4,
	                name: 'Michael Cosmos',
	                year: 'Senior'
	            },
	            {
	                number: 7,
	                name: 'Kevin Lin',
	                year: 'Sophomore'
	            },
	            {
	                number: 8,
	                name: 'Johnny Saniat',
	                year: 'Senior'
	            },
	            {
	                number: 10,
	                name: 'Jacob Komenda',
	                year: 'Sophomore'
	            },
	            {
	                number: 12,
	                name: 'Kan Zi Yang',
	                year: 'Senior'
	            },
	            {
	                number: 13,
	                name: 'Mark Peterson',
	                year: 'Senior'
	            },
	            {
	                number: 17,
	                name: 'Prayag Patel*',
	                year: 'Senior'
	            },
	            {
	                number: 18,
	                name: 'Alex Guy',
	                year: 'Senior'
	            },
	            {
	                number: 23,
	                name: 'Jarred Elliott',
	                year: 'Junior'
	            },
	            {
	                number: 24,
	                name: 'Josh Deeman',
	                year: 'Freshman'
	            },
	            {
	                number: 27,
	                name: 'Wilson Wang',
	                year: 'Senior'
	            },
	            {
	                number: 29,
	                name: 'Ben Foster',
	                year: 'Junior'
	            },
	            {
	                number: 37,
	                name: 'Walter Jaskowiak',
	                year: 'Freshman'
	            },
	            {
	                number: 38,
	                name: 'Jacob Trueb',
	                year: 'Sophomore'
	            },
	            {
	                number: 41,
	                name: 'Devin Kelly',
	                year: 'Freshman'
	            },
	            {
	                number: 44,
	                name: 'Ryan Kantor',
	                year: 'Freshman'
	            },
	            {
	                number: 48,
	                name: 'Hector Moreno',
	                year: 'Sophomore'
	            },
	            {
	                number: 71,
	                name: 'Bobby Gazdziak',
	                year: 'Senior'
	            },
	            {
	                number: 81,
	                name: 'Chris Buchta*',
	                year: 'Junior'
	            },
	            {
	                number: 88,
	                name: 'Tim Chu',
	                year: 'Senior'
	            },
	            {
	                number: 95,
	                name: 'Tat Shing',
	                year: 'Sophomore'
	            },
	            {
	                number: 97,
	                name: 'Jacob Cuthbert',
	                year: 'Freshman'
	            },
	            {
	                number: undefined,
	                name: 'Matt West',
	                year: 'Assistant Coach'
	            },
	            {
	                number: undefined,
	                name: 'Erik Huemiller',
	                year: 'Coach'
	            }
	        ]
	    },
	    {
	        year: 2015,
	        imagePath: './assets/team-photo-2015.jpg',
	        players: [
	            {
	                number: 0,
	                name: 'Max Willis',
	                year: 'Senior'
	            },
	            {
	                number: 1,
	                name: 'Nick Prozorovsky*',
	                year: 'Junior'
	            },
	            {
	                number: 4,
	                name: 'Michael Pohling',
	                year: 'Senior'
	            },
	            {
	                number: 7,
	                name: 'Matt West',
	                year: 'Grad'
	            },
	            {
	                number: 8,
	                name: 'John Saniat*',
	                year: 'Junior'
	            },
	            {
	                number: 10,
	                name: 'Joe Moyles',
	                year: 'Senior'
	            },
	            {
	                number: 11,
	                name: 'Jon Mckoy',
	                year: 'Senior'
	            },
	            {
	                number: 12,
	                name: 'Kan Zi Yang',
	                year: 'Junior'
	            },
	            {
	                number: 13,
	                name: 'Mark Peterson',
	                year: 'Junior'
	            },
	            {
	                number: 17,
	                name: 'Prayag Patel',
	                year: 'Junior'
	            },
	            {
	                number: 18,
	                name: 'Eric Bultman',
	                year: 'Senior'
	            },
	            {
	                number: 21,
	                name: 'Jarred Elliott',
	                year: 'Sophomore'
	            },
	            {
	                number: 23,
	                name: 'Tyler DeNooyer',
	                year: 'Grad'
	            },
	            {
	                number: 27,
	                name: 'Wilson Wang',
	                year: 'Junior'
	            },
	            {
	                number: 29,
	                name: 'Ben Foster',
	                year: 'Sophomore'
	            },
	            {
	                number: 35,
	                name: 'Marty Markenson*',
	                year: 'Senior'
	            },
	            {
	                number: 38,
	                name: 'Grant Hallan',
	                year: 'Senior'
	            },
	            {
	                number: 46,
	                name: 'Kevin Birchok',
	                year: 'Senior'
	            },
	            {
	                number: 69,
	                name: 'Jacob Komenda',
	                year: 'Freshman'
	            },
	            {
	                number: 75,
	                name: 'Eric Badger',
	                year: 'Grad'
	            },
	            {
	                number: 81,
	                name: 'Chris Buchta',
	                year: 'Sophomore'
	            },
	            {
	                number: 97,
	                name: 'Kevin Lin',
	                year: 'Freshman'
	            },
	            {
	                number: undefined,
	                name: 'Matt Stupca',
	                year: 'Coach'
	            }
	        ]
	    },
	    {
	        year: 2014,
	        imagePath: './assets/team-photo-2014.jpg',
	        players: [
	            {
	                number: 0,
	                name: 'Max Willis',
	                year: 'Junior'
	            },
	            {
	                number: 1,
	                name: 'Nick Prozorovsky',
	                year: 'Sophomore'
	            },
	            {
	                number: 3,
	                name: 'Sean Hill',
	                year: 'Senior'
	            },
	            {
	                number: 4,
	                name: 'Michael Pohling',
	                year: 'Junior'
	            },
	            {
	                number: 6,
	                name: 'Nick Oo',
	                year: 'Junior'
	            },
	            {
	                number: 8,
	                name: 'Johnny Saniat',
	                year: 'Sophomore'
	            },
	            {
	                number: 10,
	                name: 'Joe Moyles',
	                year: 'Junior'
	            },
	            {
	                number: 11,
	                name: 'Jon Mckoy',
	                year: 'Junior'
	            },
	            {
	                number: 12,
	                name: 'Kan Zi Yang',
	                year: 'Sophomore'
	            },
	            {
	                number: 17,
	                name: 'Prayag Patel',
	                year: 'Sophomore'
	            },
	            {
	                number: 18,
	                name: 'Eric Bultman*',
	                year: 'Junior'
	            },
	            {
	                number: 21,
	                name: 'Chris Buchta',
	                year: 'Freshman'
	            },
	            {
	                number: 22,
	                name: 'Brian Rathunde',
	                year: 'Senior'
	            },
	            {
	                number: 23,
	                name: 'Greg Hill',
	                year: 'Senior'
	            },
	            {
	                number: 24,
	                name: 'Jim Riddle',
	                year: 'Senior'
	            },
	            {
	                number: 27,
	                name: 'Wilson Wang',
	                year: 'Sophomore'
	            },
	            {
	                number: 30,
	                name: 'Steve Brand',
	                year: 'Grad'
	            },
	            {
	                number: 35,
	                name: 'Marty Markenson*',
	                year: 'Junior'
	            },
	            {
	                number: 38,
	                name: 'Grant Hallan',
	                year: 'Junior'
	            },
	            {
	                number: 39,
	                name: 'Ross Tuttle',
	                year: 'Senior'
	            },
	            {
	                number: 44,
	                name: 'Michael Cosmos',
	                year: 'Sophomore'
	            },
	            {
	                number: 46,
	                name: 'Kevin Birchok',
	                year: 'Junior'
	            },
	            {
	                number: 64,
	                name: 'Neal Phelps*',
	                year: 'Grad'
	            },
	            {
	                number: 69,
	                name: 'Tyler DeNooyer',
	                year: 'Grad'
	            },
	            {
	                number: 81,
	                name: 'Arthur Ding',
	                year: 'Sophomore'
	            },
	            {
	                number: undefined,
	                name: 'Walden Nelson',
	                year: 'Coach'
	            }
	        ]
	    },
	    {
	        year: 2013,
	        imagePath: './assets/team-photo-2013.jpg',
	        players: [
	            {
	                number: 1,
	                name: 'Nick Prozorovsky',
	                year: 'Freshman'
	            },
	            {
	                number: 3,
	                name: 'Sean Hill',
	                year: 'Junior'
	            },
	            {
	                number: 4,
	                name: 'Rob Dreier',
	                year: 'Senior'
	            },
	            {
	                number: 6,
	                name: 'Brad Bolliger',
	                year: 'Senior'
	            },
	            {
	                number: 9,
	                name: 'Preston Goulson',
	                year: 'Senior'
	            },
	            {
	                number: 11,
	                name: 'Jon Mckoy',
	                year: 'Sophomore'
	            },
	            {
	                number: 12,
	                name: 'Derek Yan',
	                year: 'Freshman'
	            },
	            {
	                number: 18,
	                name: 'Eric Bultman',
	                year: 'Sophomore'
	            },
	            {
	                number: 20,
	                name: 'Tyler Anderson',
	                year: 'Senior'
	            },
	            {
	                number: 22,
	                name: 'Brian Rathunde',
	                year: 'Junior'
	            },
	            {
	                number: 23,
	                name: 'Ryan Smith*',
	                year: 'Grad'
	            },
	            {
	                number: 27,
	                name: 'Wilson Wang',
	                year: 'Freshman'
	            },
	            {
	                number: 30,
	                name: 'Colin Reid*',
	                year: 'Senior'
	            },
	            {
	                number: 34,
	                name: 'Michael Pohling',
	                year: 'Sophomore'
	            },
	            {
	                number: 35,
	                name: 'Marty Markenson',
	                year: 'Sophomore'
	            },
	            {
	                number: 39,
	                name: 'Ross Tuttle',
	                year: 'Junior'
	            },
	            {
	                number: 44,
	                name: 'Nate Gibbons*',
	                year: 'Senior'
	            },
	            {
	                number: 45,
	                name: 'Greg Hill',
	                year: 'Junior'
	            },
	            {
	                number: 64,
	                name: 'Neal Phelps*',
	                year: 'Grad'
	            },
	            {
	                number: 65,
	                name: 'Michael Cosmos',
	                year: 'Freshman'
	            },
	            {
	                number: 87,
	                name: 'Adam Wright',
	                year: 'Senior'
	            },
	            {
	                number: 99,
	                name: 'Johnny Saniat',
	                year: 'Junior'
	            },
	            {
	                number: undefined,
	                name: 'Walden Nelson',
	                year: 'Coach'
	            }
	        ]
	    },
	    {
	        year: 2011,
	        imagePath: './assets/team-photo-2011.jpg',
	        players: [
	            {
	                number: 2,
	                name: 'Joe Sidrys',
	                year: 'Senior'
	            },
	            {
	                number: 5,
	                name: 'Jack Krieger',
	                year: 'Junior'
	            },
	            {
	                number: 8,
	                name: 'Kyle McKinley',
	                year: 'Grad'
	            },
	            {
	                number: 13,
	                name: 'Tom Rudwick',
	                year: 'Senior'
	            },
	            {
	                number: 14,
	                name: 'Austin Lien',
	                year: 'Senior'
	            },
	            {
	                number: 15,
	                name: 'Alex Komisarz',
	                year: 'Senior'
	            },
	            {
	                number: 16,
	                name: 'Andy Kilinskis',
	                year: 'Junior'
	            },
	            {
	                number: 18,
	                name: 'Kurt Zoellick',
	                year: 'Grad'
	            },
	            {
	                number: 22,
	                name: 'Brian Chrysler',
	                year: 'Grad'
	            },
	            {
	                number: 23,
	                name: 'Ryan Smith',
	                year: 'Grad'
	            },
	            {
	                number: 25,
	                name: 'Mark Hirschman',
	                year: 'Senior'
	            },
	            {
	                number: 27,
	                name: 'Chris Hidaka',
	                year: 'Grad'
	            },
	            {
	                number: 29,
	                name: 'Matt Kurley',
	                year: 'Grad'
	            },
	            {
	                number: 32,
	                name: 'Chris Kvistad',
	                year: 'Junior'
	            },
	            {
	                number: 33,
	                name: 'Don McDonald',
	                year: 'Grad'
	            },
	            {
	                number: 36,
	                name: 'Brian Pierce',
	                year: 'Junior'
	            },
	            {
	                number: 47,
	                name: 'Jon Hatcher',
	                year: 'Senior'
	            },
	            {
	                number: 61,
	                name: 'Brian Phelan',
	                year: 'Grad'
	            },
	            {
	                number: 64,
	                name: 'Neal Phelps*',
	                year: 'Senior'
	            },
	            {
	                number: 80,
	                name: 'Jon Ogrodnik',
	                year: 'Grad'
	            },
	            {
	                number: 81,
	                name: 'Suleyman Ahmad',
	                year: 'Senior'
	            },
	            {
	                number: 84,
	                name: "Charlie O'Brien",
	                year: 'Grad'
	            },
	            {
	                number: 87,
	                name: 'Adam Wright',
	                year: 'Junior'
	            },
	            {
	                number: 88,
	                name: 'Kevin Bruns',
	                year: 'Junior'
	            },
	            {
	                number: 90,
	                name: 'Zachary Frantz',
	                year: 'Junior'
	            },
	            {
	                number: undefined,
	                name: 'Walden Nelson',
	                year: 'Coach'
	            }
	        ]
	    }
	];


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<h1 class=\"ui header\">Roster</h1>\n<!--Menu-->\n<div class=\"ui secondary pointing menu\">\n    <a class=\"item\" routerLink=\"/roster/2011\" [ngClass]=\"{'active': year === 2011}\">2011</a>\n    <a class=\"item\" routerLink=\"/roster/2013\" [ngClass]=\"{'active': year === 2013}\">2013</a>\n    <a class=\"item\" routerLink=\"/roster/2014\" [ngClass]=\"{'active': year === 2014}\">2014</a>\n    <a class=\"item\" routerLink=\"/roster/2015\" [ngClass]=\"{'active': year === 2015}\">2015</a>\n    <a class=\"item\" routerLink=\"/roster/2016\" [ngClass]=\"{'active': year === 2016}\">2016</a>\n    <a class=\"item\" routerLink=\"/roster/2017\" [ngClass]=\"{'active': year === 2017}\">2017</a>\n</div>\n<!--Table-->\n<ng-container *ngFor=\"let rosterYear of rosterData\">\n    <ng-container *ngIf=\"rosterYear.year === year\">\n        <img src=\"{{rosterYear.imagePath}}\"/>\n        <table class=\"ui celled table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Year</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let player of rosterYear.players\">\n                    <td>{{player.number}}</td>\n                    <td>{{player.name}}</td>\n                    <td>{{player.year}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <p>(*) indicates captain for that year</p>\n    </ng-container>\n</ng-container>";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(128);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "img {\n  width: 75%;\n  border: 1px solid #00004D;\n  border-radius: 0.28571429em;\n}\np {\n  text-align: left;\n  text-indent: 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var google_spreadsheet_service_1 = __webpack_require__(44);
	var AbsentComponent = (function () {
	    // Constructor with our http service injected
	    function AbsentComponent(spreadsheetService) {
	        this.spreadsheetService = spreadsheetService;
	        // API url for our personal server
	        this.googleSheetsApiUrl = 'https://nick-proz-google-sheet-api.herokuapp.com/sheets/11ijrHoysiIwsFfEggbSNM9Y8VvzU65jeuhQ3vkV5FGw/sheetIndex/1/rows/';
	        // API url for our backup server (sheetsu API)
	        // private googleSheetsBackupApiUrl = 'https://sheetsu.com/apis/v1.0/7a030ae60b7d';
	        this.googleSheetsBackupApiUrl = '';
	        // Error messages
	        this.validationErrors = 'Please do not leave any required fields blank.';
	        this.submissionError = 'Could not submit the form  due to a server error. Please try again soon or contact the web admins.';
	        // Boolean indicating if our form is in the process of submitting (to show our loading icon)
	        this.formIsSubmitting = false;
	        // Boolean indicating if our form was successfully submitted (to show our success message)
	        this.submitSuccess = false;
	    }
	    AbsentComponent.prototype.ngAfterViewInit = function () {
	        $(this.monthDropdown.nativeElement).dropdown();
	    };
	    AbsentComponent.prototype.handleSubmit = function (event, monthInput) {
	        event.preventDefault();
	        this.month = monthInput;
	        this.submitSuccess = false;
	        if (!this.formIsValid()) {
	            this.formErrors = this.validationErrors;
	        }
	        else {
	            this.formIsSubmitting = true;
	            this.formErrors = null;
	            var date = new Date();
	            var data = {
	                "Timestamp": date.toLocaleString(),
	                "First Name": this.firstName,
	                "Last Name": this.lastName,
	                "Time": this.time,
	                "Date": this.month + "/" + this.day,
	                "Reason": this.reason
	            };
	            this.submitAbsentForm(data);
	        }
	    };
	    /**
	     * Submits our form to the spreadsheet by calling our service method.
	     * On success, we show our confirmation modal and reset our rsvp modal.
	     * On failure, we hide our submitting dialog and show our submission error to the user.
	     *
	     * @param data - data to submit to our spreadsheet
	     */
	    AbsentComponent.prototype.submitAbsentForm = function (data) {
	        var _this = this;
	        this.spreadsheetService.postRowToSpreadsheet(this.googleSheetsApiUrl, this.googleSheetsBackupApiUrl, data)
	            .then(function () {
	            _this.resetForm();
	            _this.submitSuccess = true;
	        })
	            .catch(function () {
	            _this.formIsSubmitting = false;
	            _this.formErrors = _this.submissionError;
	        });
	    };
	    /**
	     * Clears our input fields, errors, and resets our form is submitting flag.
	     */
	    AbsentComponent.prototype.resetForm = function () {
	        this.firstName = null;
	        this.lastName = null;
	        this.reason = null;
	        this.time = null;
	        this.day = null;
	        this.month = null;
	        this.formErrors = null;
	        this.formIsSubmitting = false;
	    };
	    /**
	     * Front-end validation for our form.
	     * Our form is valid only if all fields are populated.
	     *
	     * @returns {boolean} - true if the form is valid, false otherwise
	     */
	    AbsentComponent.prototype.formIsValid = function () {
	        return this.firstName != null && this.firstName != ''
	            && this.lastName != null && this.lastName != ''
	            && this.reason != null && this.reason != ''
	            && this.time != null && this.time != ''
	            && this.month != null && this.month > 0
	            && this.day != null;
	    };
	    return AbsentComponent;
	}());
	__decorate([
	    core_1.ViewChild('monthDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], AbsentComponent.prototype, "monthDropdown", void 0);
	AbsentComponent = __decorate([
	    core_1.Component({
	        selector: 'absent',
	        template: __webpack_require__(131),
	        styles: [__webpack_require__(132)]
	    }),
	    __metadata("design:paramtypes", [typeof (_b = typeof google_spreadsheet_service_1.SpreadsheetService !== "undefined" && google_spreadsheet_service_1.SpreadsheetService) === "function" && _b || Object])
	], AbsentComponent);
	exports.AbsentComponent = AbsentComponent;
	var _a, _b;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<h1 class=\"ui header\">Practice Absence Form</h1>\n<!--Submitting Loader-->\n<div *ngIf=\"formIsSubmitting\" class=\"ui active inverted dimmer\"><div class=\"ui text loader\">Submitting</div></div>\n<!--Form-->\n<form class=\"ui form\">\n    <div class=\"two fields\">\n        <div class=\"field\">\n            <label>First Name <span class=\"required\">*</span></label>\n            <input [(ngModel)]=\"firstName\" type=\"text\" name=\"first-name\" placeholder=\"First Name\">\n        </div>\n        <div class=\"field\">\n            <label>Last Name <span class=\"required\">*</span></label>\n            <input [(ngModel)]=\"lastName\" type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\n        </div>\n    </div>\n    <div class=\"field\">\n        <label>Reason for missing or being late to practice <span class=\"required\">*</span></label>\n        <input [(ngModel)]=\"reason\" type=\"text\" name=\"reason\" placeholder=\"Better be good...\">\n    </div>\n    <div class=\"field\">\n        <label>From what time to what time is your conflict? <span class=\"required\">*</span></label>\n        <input [(ngModel)]=\"time\" type=\"text\" name=\"time\" placeholder=\"Time\">\n    </div>\n    <div class=\"field\">\n        <div class=\"two fields\">\n            <div class=\"field\">\n                <label>Practice date <span class=\"required\">*</span></label>\n                <input [(ngModel)]=\"day\" maxlength=\"2\" type=\"text\" name=\"day\" placeholder=\"Day (0-31)\">\n            </div>\n            <div class=\"field\">\n                <label>&nbsp;</label>\n                <div #monthDropdown class=\"ui search selection dropdown\">\n                    <input #monthInput type=\"hidden\" name=\"month\">\n                    <i class=\"dropdown icon\"></i>\n                    <div class=\"default text\">Month</div>\n                    <div class=\"menu\">\n                        <div class=\"item\" data-value=\"01\">January</div>\n                        <div class=\"item\" data-value=\"02\">February</div>\n                        <div class=\"item\" data-value=\"03\">March</div>\n                        <div class=\"item\" data-value=\"04\">April</div>\n                        <div class=\"item\" data-value=\"05\">May</div>\n                        <div class=\"item\" data-value=\"06\">June</div>\n                        <div class=\"item\" data-value=\"07\">July</div>\n                        <div class=\"item\" data-value=\"08\">August</div>\n                        <div class=\"item\" data-value=\"09\">September</div>\n                        <div class=\"item\" data-value=\"10\">October</div>\n                        <div class=\"item\" data-value=\"11\">November</div>\n                        <div class=\"item\" data-value=\"12\">December</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <button (click)=\"handleSubmit($event, monthInput.value)\" class=\"ui button\" type=\"submit\">Submit</button>\n    <!--Error/Success Messages-->\n    <div class=\"ui error message\" *ngIf=\"formErrors\">\n        <p>{{formErrors}}</p>\n    </div>\n    <div class=\"ui success message\" *ngIf=\"submitSuccess\">\n        <div class=\"header\">Form Submitted</div>\n        <p>The form was successfully submitted. Stop missing practice.</p>\n    </div>\n</form>";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(133);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "label {\n  text-align: left;\n}\n.ui.form {\n  width: 80%;\n  margin: 0 auto;\n}\n.ui.form .ui.error.message,\n.ui.form .ui.success.message {\n  display: block;\n}\n.ui.form .ui.error.message p,\n.ui.form .ui.success.message p {\n  text-align: center;\n}\n.ui.selection.active.dropdown .menu,\n.ui.search.selection.dropdown.active.visible,\n.ui.selection.active.dropdown:hover {\n  border-color: #ff6226;\n}\n.ui.dropdown {\n  min-width: inherit;\n}\n", ""]);
	
	// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var home_component_1 = __webpack_require__(33);
	var about_component_1 = __webpack_require__(39);
	var prospective_players_component_1 = __webpack_require__(43);
	var contact_component_1 = __webpack_require__(48);
	var practice_component_1 = __webpack_require__(84);
	var tournaments_component_1 = __webpack_require__(89);
	var roster_component_1 = __webpack_require__(124);
	var absent_component_1 = __webpack_require__(129);
	var team_history_component_1 = __webpack_require__(135);
	var awards_component_1 = __webpack_require__(140);
	var results_component_1 = __webpack_require__(145);
	exports.ROUTES = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'practice', component: practice_component_1.PracticeComponent },
	    { path: 'absent', component: absent_component_1.AbsentComponent },
	    { path: 'contact', component: contact_component_1.ContactComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent },
	    { path: 'prospects', component: prospective_players_component_1.ProspectivePlayersComponent },
	    { path: 'tournaments/:year', component: tournaments_component_1.TournamentsComponent },
	    { path: 'roster/:year', component: roster_component_1.RosterComponent },
	    { path: 'history/:year', component: team_history_component_1.TeamHistoryComponent },
	    { path: 'awards', component: awards_component_1.AwardsComponent },
	    { path: 'results', component: results_component_1.ResultsComponent },
	    { path: '**', component: home_component_1.HomeComponent },
	];


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var history_year_data_1 = __webpack_require__(136);
	var router_1 = __webpack_require__(90);
	var TeamHistoryComponent = (function () {
	    // Inject the ActivatedRoute into our component
	    function TeamHistoryComponent(route) {
	        this.route = route;
	        // Results data to inject into our template
	        this.historyData = history_year_data_1.HISTORY_DATA;
	    }
	    TeamHistoryComponent.prototype.ngAfterViewInit = function () {
	        $(this.firstDropdown.nativeElement).dropdown({});
	        $(this.secondDropdown.nativeElement).dropdown({});
	        $(this.thirdDropdown.nativeElement).dropdown({});
	    };
	    /**
	     * Subscribe to our route parameters (tournament year).
	     */
	    TeamHistoryComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
	            // (+) converts string 'year' to a number
	            _this.year = +params['year'];
	        });
	    };
	    /**
	     * Unsubscribe to our route parameters (tournament year).
	     */
	    TeamHistoryComponent.prototype.ngOnDestroy = function () {
	        this.routeParamsSubscription.unsubscribe();
	    };
	    return TeamHistoryComponent;
	}());
	__decorate([
	    core_1.ViewChild('1994dropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], TeamHistoryComponent.prototype, "firstDropdown", void 0);
	__decorate([
	    core_1.ViewChild('2000dropdown'),
	    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
	], TeamHistoryComponent.prototype, "secondDropdown", void 0);
	__decorate([
	    core_1.ViewChild('2010dropdown'),
	    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
	], TeamHistoryComponent.prototype, "thirdDropdown", void 0);
	TeamHistoryComponent = __decorate([
	    core_1.Component({
	        selector: 'team-history',
	        template: __webpack_require__(137),
	        styles: [__webpack_require__(138)]
	    }),
	    __metadata("design:paramtypes", [typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object])
	], TeamHistoryComponent);
	exports.TeamHistoryComponent = TeamHistoryComponent;
	var _a, _b, _c, _d;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	"use strict";
	exports.HISTORY_DATA = [
	    {
	        year: 2017,
	        imagePath: './assets/team-photo-2017.jpg',
	        summaryMarkup: "\n            <p></p>\n        "
	    },
	    {
	        year: 2016,
	        imagePath: './assets/team-photo-2016.jpg',
	        summaryMarkup: "\n            <p>Illinois Ultimate came into the 2016 season with a taste of success and big shoes to fill. Returning captain Nick Prozorovsky and new captains Prayag Patel and Chris Buchta were tasked with the difficult prospect of replacing the 12 graduating players as well as coach Matt Stupca. Boomland coach Erik Huemiller and recent alum Matt West were able to fill the leadership void as the team looked to reload for another run at Nationals.</p>\n            <p>The tryouts for the team were very competitive, with the biggest incoming class in recent memory. The final roster included 7 rookies, 1 grad student, 5 former Boomland players, and 12 returners. The newest iteration of Illinois Ultimate tested themselves at Missouri Loves Company, but returned with shoulder injuries to seniors Nick Prozorovsky and Alex Guy that would hamper them for the rest of the season.</p>\n            <p>This spring season had the team heading to Florida, South Carolina, and Missouri in search of elite competition.</p>\n            <p>Mid February had the team flying south to compete at Warm Up. Unfortunately, the week prior had grad student Cody Gray breaking his hand in Irwin and senior Wilson Wang pulling his hamstring in the Armory, both big handler losses. On Saturday, the team started with 10-13 and 11-13 losses to Texas and Florida State. The third game of the day was against perennial powerhouse Pittsburgh. Illinois came out sloppy and was pressured into making many errors, resulting in a 1-7 score at half and an embarrassing 2-12 loss, finishing 0-4 on the day after another loss to BYU. Saturday started off better with a 13-5 win over host South Florida, but was followed by big losses to Virginia Tech and Auburn. Illinois finished the tournament 2-7, with a universe loss to in region rival Northwestern and only wins coming against South Florida.</p>\n            <p>With most of the team finally healthy, the team made the trip to Easterns for the second tournament of the season. The first game of the tournament was a rematch against Pittsburgh. This time, Illinois was prepared for the intensity and was able to make it a closer game, but still lost 12-15. Another rematch against Virginia Tech ended similarly, losing 11-14, and the team ended Saturday 0-4, with a 10-15 loss to UNC Darkside and an 11-13 loss to regional rival Michigan. On a wet, cold, and windy Sunday, Illinois was not able to come out with any fire and lost badly to James Madison and Connecticut, going 0-6 on the weekend.</p>\n            <p>The final regular season tournament of the year was Huck Finn and the boys from Illinois looked to bounce back from a so far unsuccessful regular season. With a mindset of improving for the series the Illini came out with a 7-0 lead at half on Indiana and closed it out with an 11-4 win. Dayton was the next game, which was a 13-4 win for the Illini which meant that they would play Maryland for the pool. Ankle injuries to Prayag Patel and Ben Foster meant that the O line was playing without two key contributors, but the team was able to tough out a 14-11 win, setting up a crossover game against Illinois State. In a very windy game, Illinois triumphed over their in state competitors in a 10-6 victory, securing a quarterfinals berth. The team closed out the tournament with losses to Arkansas and Purdue, and prepared themselves for Conferences.</p>\n            <p>Once again, Rantoul was host to Conferences, but this time there could be no complaints about the weather. Illinois started out strong with comfortable wins over the rest of the pool, including an 11-4 victory over UChicago. Winning the pool lined up a semifinal game against Illinois State, which was won handily 13-7 and set up a classic Illinois - Northwestern rematch. Unfortunately, the team struggled to find the endzone and for the second year in a row, lost to Northwestern at Conferences. In the 2nd place match against UChicago, Illinois was unable to find a groove and lost 9-11. With Regionals in two weeks and only one bid for the region, Illinois had a lot of work to do.</p>\n            <p>In a change of pace, Regionals was not hosted in Rockford, but in Fair Oaks, Indiana. The conditions were terrible, low temperatures coupled with heavy wind and rain meant that it would be difficult getting a good grip. In the first game against Kentucky, both O and D line were able to perform well, giving up no breaks and handing out a few of their own and finishing with a score of 12-6. The trend continued against Indiana, with Illinois winning 13-6. Next up was Notre Dame, a rematch of last year\u2019s finals, winner takes the pool and quarterfinals berth. A completely upwind/downwind game found the d line with opportunities to break, but never able to finish the job. With neither team being broken, Notre Dame won the flip and the game, 9-10. Illinois finished up the day with a 13-5 win over Michigan State to set up a quarterfinals matchup against Northwestern.</p>\n            <p>Conditions on Sunday were better and with a little support from Walden Nelson, the team was ready to avenge their recent losses. Illinois started on D and Northwestern came out with an break early in the game, but the team fought back and breaks were traded to have it be on serve at half. The second half commenced with more of a cleaner game, with both teams trading offensive holds. A chance at a break due to a Nick Pro sky was called back on a controversial observer ruling and the game reached softcap with the score 10-11. Chris Buchta tied up the score with a huck from Kevin Lin and the d line went out to try and break with the season on the line. After a turn from Northwestern, Illinois worked the disc down the field and rookie Jacob Cuthbert took a timeout outside of the endzone. One endzone set later, Prayag found Cuthbert for the win, sending Illinois to the semifinals.</p>\n            <p>Due to the loss in pool play, Illinois\u2019s matchup in the semifinals was Michigan. Despite the tough game before, Illinois had to come out hot if they wanted to win the game. Michigan came out of the gate fast, scoring on a huck. Illinois followed suit, and the two teams traded offensive holds until Michigan broke for 3-5. As the game went on, the defensive pressure from Michigan intensified and Illinois\u2019 o line was not able to match the goals that Michigan\u2019s o line was putting out. Coming out of half at 5-8, Illinois turned and was broken again. A late injury to Prayag pushed the hope of a comeback a little further out of reach and a senior d line was unable to keep Michigan from seizing the victory 10-15. Michigan went on to defeat Notre Dame 15-9 to take the bid to Nationals. Illinois finished the season with a 11-10 victory over Purdue for 3rd in the region.</p>\n            <p>Captain Nick Prozorovsky and John Saniat received 1st team All-Region honors and Captain Prayag Patel received 2nd team All-Region. Ben Sabourin and Jacob Cuthbert were voted All-Freshmen for the region, with Ben winning Freshman of the Year.</p>\n        "
	    },
	    {
	        year: 2015,
	        imagePath: './assets/team-photo-2015.jpg',
	        summaryMarkup: "\n            <p>After the worst regionals performance since 2006, Illinois entered the 2015 season with a new looking team and a new mindset. Major losses included long time coach Walden Nelson, as well as O-line stars Neal Phelps, Brian Rathunde, and Sean Hill. Marty Markenson returned as captain and was joined by first-timers Johnny Saniat and Nick Prozorovsky.</p>\n            <p>The major change to the team came in the form of returning coach, Matt Stupca. Matt coached the team from 2006-2009 and brought them to Nationals twice, finishing in 5th place in 2008. The experienced coach gave the team the necessary leadership needed to rebuild the club for a possible Nationals run again.</p>\n            <p>As always, the fall tryouts were competitive and exciting, with another strong rookie class and many B-teamers and outsiders joining the scene. When it was all said and done, the final roster consisted of 23 people. The roster included 2 rookies, 5 B-teamers, 15 returners, and 1 transfer student. New additions included Valparaiso stud, Matt West, basketball crossover Jarred Elliot, lovable spirit leader Eric Badger, and rookies Kevin Lin and Jacob Komenda.</p>\n            <p>Come end of fall, Illinois was re-armed and ready for another run for Nationals in the spring season.</p>\n            <p>The spring season schedule was perhaps one of Illinois' most busy. The team was scheduled to attend 3 of the highest level tournaments around the country, including tournaments in Texas, Florida, and South Carolina.</p>\n            <p>When February came around, it was time to head south to Tampa for the first spring tournament, Florida Warm-Up. For the first time, the team traveled by air to a tournament. Warm-Up, a three day tournament, proved to be a useful lesson to the team. On day one, the Illini went 1-3 with only one win in a night game vs. Cornell. It was a disappointing performance, but day two spelt different stories for Illinois. Saturday morning, The Illini would play the revered Nationals team UCF in a game that was recorded by Ultiworld. The Illini were no doubt underdogs, but fought hard to take a lead on the Dogs of War. Major plays included a Callahan by handler Prayag Patel and a huck break-score by Max Willis to rookie Jacob Komenda. The Dogs of War fought, but the Illini pulled through, winning the game 13-9 and claiming one of the biggest upsets of the tournament. Illinois would cruise to two more wins that day, finishing 3-0 for Saturday. With emotions high but legs tired, the Illini finished off the long weekend with a tough loss against Georgetown and a win against Wisconsin-Milwaukee on Sunday to end Florida Warm up. They finished 5-4 on the weekend.</p>\n            <p>The next big tournament was the famous Centex invite in Austin, Texas. The team was seeded 9th overall out of 20 after their impressive win against Central Florida back at Warm-Up. With high expectations, the Illini would jump right into it, playing one of the best teams of 2015, North-Carolina Wilmington. The first point of the game would prove to be somewhat of a theme for the Illini that weekend, as top cutter Nick Prozorovsky would go down with a knee injury. The Illini could not upset the big dog this time though, as Wilmington won comfortably at 11-3.</p>\n            <p>As the day went on, the injuries continued. Nearly half of the Illini squad would go down that day. The pain also showed in the scores, as the Illini would lose to Texas 12-5 and fall to two lower-seeded teams Arkansas and Iowa. They finished 0-4 on Saturday. </p>\n            <p>In the loser's bracket on Sunday, Illinois would go 3-0 with wins over California, Iowa State, and Wisconsin-Milwaukee. </p>\n            <p>The finale of the spring tournaments was the very competitive Easterns in North Myrtle Beach, South Carolina, which a year earlier was won by Great Lakes region rival Michigan. The Illini went into the tournament with a bit of a different look, as Boomland coach Erik Huemiller would fill in for coach Matt Stupca as well as numerous injured and absent players returning to the squad. They were seeded as the 20 seed, with nowhere to go but up.</p>\n            <p>In a highly competitive pool, the Illini would start off against the 2012-2013 national champions, Pittsburgh. Pitt had won every tournament up to this point. The Illini took advantage of Pitts many sloppy mistakes, but could not come away with another upset, falling 15-10. The troubles continued, with losses to Carleton College, UMass, and Georgia. This put the Illini's first day record at a troubling 1-12 on the season.</p>\n            <p>Sunday would prove to be an important day for the Illini. Despite the troubles on Day 1s, the Illini had played well the second day of tournaments all season, with a 6-0 record. As the last ranked seed at the tournament, they would fight to break seed against NC State, Colorado State, and 10-seeded Auburn.</p>\n            <p>With many different position changes, the Illini came out with a new fire, going 3-0 again on Sunday and taking out the competition handily. With this, the Illini spring regular season would come to an end. They would finish with a 10-12 record, with only one of those wins coming on day one of a tournament. This issue would be in the back of everyone's head going into the postseason.</p>\n            <p>Sectionals, as always, was held in Rantoul, IL. The Illini came in as the favorite, with Northwestern and UChicago sitting close behind. The Illini would rough out wins against Eastern Illinois and Southern Illinois before taking on UChicago, who had ended their 2014 season dramatically last year at regionals.</p>\n            <p>The game was up and down but eventually ended in another crushing loss for the Illini on universe point. This sent the Illini into Sunday with a first round match against other rival Northwestern, who the team hadn't played since last year. The game was close early on, but the upstate rivals pulled ahead and eventually took the game 15-9. It was the second very alarming loss in a row for the Illini, and for the first time in years, would eliminate them from winning sectionals.</p>\n            <p>Despite this news, the Illini took down Illinois State in the next game to ensure another game against UChicago for second place in the section. In the game that had a game to go atmosphere, the Illini finally were able to hit on all cylinders, blowing out their recent rivals 15-6 and taking second place at sectionals. It would prove to be somewhat of a weight lifted off everyone's back going into regionals, but there was still much work to be done.</p>\n            <p>Regionals was back at Rockford, a place of many emotions for most Illinois players. Illinois came in as the 3 seed; in a pool with Purdue, Grand Valley, and again, UChicago. The recent ups and downs of the Illinois season, as well as inspiring messages by coach Stupca and some of the players, had the team focused as ever.</p>\n            <p>The first game against Purdue saw the O-Line in cruise control with a level of consistency not seen before in the season. With a few breaks mixed in, the Illini took the first game of the day 11-8. With an easier 13-6 win against Grand Valley State, Illinois would play their final game of the day against UChicago. The game was played just a few fields away from where Chicago ended Illinois season one year prior. Emotions ran high again, but the Illini finally put UChicago to rest in an 11-5 victory. It was a big statement for Illinois and sent them into Sunday's championship bracket riding high.</p>\n            <p>Illinois went into Sunday still not having been broken yet, a true testament to their O-line's improved focus. The first game of the day was against last year's second Nationals team from the region, Eastern Michigan. The game was tight throughout with both O-lines trading, but the Illini pulled through to win the game 15-12. The game saw the Illini let up one break, which was the first break allowed all weekend.</p>\n            <p>This sent the team into semis against their athletic, Big 10 counterparts, Indiana. Indiana, for the most part, was completely unfamiliar to the Illini's play style going into the matchup. With the 'game to go' in the back of everyone's heads, the Illini poured on the points and won 15-5, claiming their biggest victory of the tournament. The D-Line shined this game, giving the O-line a much needed rest heading into the biggest game of the season.</p>\n            <p>The 'game to go' saw the Illini face up against a team they never would have expected. In surprising fashion, the scrappy and energized Notre Dame would stand as their last test of the season. The other side of the bracket would prove to be one to remember, as Notre Dame had beaten rival Michigan after Michigan had beaten Northwestern on double game point the game before. It was win or go home for the Illini.</p>\n            <p>The game was a spectacle, with many of the program's alumni and half the region watching. And with expectations set on Nationals, the Illini delivered, winning the game 15-7 and punching their ticket to Milwaukee for Nationals.</p>\n            <p>The victory was a huge one for the program and it proved to be a huge swing in the eventual Coach of the Year award won by Illinois coach, Matt Stupca. Illinois ended the weekend 6-0, and unbelievably, only allowed 1 break all weekend.</p>\n            <p>The Illini were headed to Nationals!!!</p>\n            <p>After failing to reach Nationals the year earlier, Illinois returned and were seeded 19th among the competition. The Illini, having struggled against top competition earlier in the season, were highly focused going into Nationals.</p>\n            <p>Unusual circumstances at other regionals put the Illini in what was considered one of the best Nationals pools ever, Pool C. Their pool included Maryland, Oregon, Florida State, and UNC. Illinois had not played any of those teams during the regular season.</p>\n            <p>The first game was against Maryland, whose star player and Callahan nominee, was brothers with one of Illinois' rookies. The game was heated though, with highlights including a wild sky by Tyler 'Dutch' DeNooyer and a handblock of Maryland's star by Prayag Patel.</p>\n            <p>The game came down to the wire, but saw the Illini as the slim victors 15-13, with former Nationals scoring top-lister Nick Prozorovsky catching the final point to put the Illini 1-0 on the weekend. It was a win for the Illini that spoke volumes to the idea that they truly belonged there.</p>\n            <p>The next matchup was under the lights on the big field against UNC. Illinois faced another top level player, the eventual Callahan winner, Jon Nethercutt. Nethercutt and his UNC Darkside squad had been one of the highest ranked teams going into the tournament and looked even stronger with the return of the mighty cutter, Ben Snell. </p>\n            <p>Considered the underdogs by far, Illinois jumped out to a quick 2-0 lead, breaking the seemingly unstoppable UNC O-line. The early start proved to be important as Darkside fought back and took the half by only one point. The game was closer than anyone could have predicted.</p>\n            <p>But it was not enough to take down the Atlantic Coast champs, as Darkside took the game 15-12. Nethercutt proved to be hyped correctly, but the Illini still played strong regardless.</p>\n            <p>Day 2 saw the Illini in a huge spotlight, facing Oregon Ego to start the day. The road to Nationals had been shaky for Ego, as their struggles at regionals were the sole reason they had even been placed into Pool C as the shocking 15 seed. They sat 0-2 on the weekend, and were in a do-or-die situation for their season. Fittingly, the Illini matched up against them with a chance to end their season, and a chance to end the college career of one of the games' most well-known players, Dylan Freechild.</p>\n            <p>Freechild and the amped up Ego squad came out strong, taking an early and commanding lead. There were some glimmers of hope for Illinois, but none proved strong enough to get them close, as Ego won the game handily 15-7. This put the Illini at 1-2, and kept the season alive for Oregon.</p>\n            <p>The final game of pool play came against Chris Laroque and Florida State. A year earlier, Illinois had lost a tough game on double game point against FSU at Easterns. Illinois yet again was a heavy underdog. They managed to keep it close for most the game, but FSU's star-studded team proved too strong as FSU took the game 15-11. It was another game very close at half for Illinois, which was promising. The loss would put Illinois out of contention to move into the next round of play.</p>\n            <p>In the final game of the season, Illinois would play Cincinnati. With a win, they would claim a tie for 13th place. With a loss, they would finish 17th at Nationals for the 5th time in a row, perhaps proving the 'curse of Illinois-th place' to be true.</p>\n            <p>But the Illini had no plans to settle for that, as they took the game 15-12 with a bit of a late surge. The game proved to be an Illini classic, with a goal line D by Mark Peterson and a bookends point from Kanzy. The win was topped off with Nick Prozorovsky catching the game winning catch, sending the fans home happy and ending an excellent Illinois season.</p>\n            <p>Illinois broke the 'curse' and finished 13th, their best Nationals performance since 2008.</p>\n            <p>Not surprisingly, three of the final four teams were from Pool C, and the championship saw UNC match up against Oregon. UNC would win again, blowing out Oregon 15-6. In the end, it was actually Illinois who had put the most points up on the eventual champions, with 12 points. Nick Prozorovsky finished pool play tied for the lead in goals scored at 24. Most importantly, Illinois broke seed, gaining the respect deserved and achieving their goals. The 13 seniors leaving were sent home happy.</p>\n            <p>Matt West and Nick Prozorovsky won 1st team all region honors. Kevin Lin won Freshman of the Region. The Matt Stupca deservedly won Coach of the year.</p>\n        "
	    }, {
	        year: 2014,
	        imagePath: './assets/team-photo-2014.jpg',
	        summaryMarkup: "\n            <p>Illinois entered the season hoping to return to Nationals. The team lost 3 time captain and Player of the Region, Ryan 'Kennedy' Smith. Returning captain and Machine star Neal Phelps was joined by first time junior captains Marty Markenson and Eric Bultman. The captaining team was young and inexperienced but Walden Nelson returned giving the team hope.</p>\n            <p>At MLC the team was able to exceed expectations by finishing in 2nd place, losing to the eventual National Champions Colorado Mamabird in the finals. This win in addition to the previous year's nationals birth gave the team a cockiness they were unable to shed.</p>\n            <p>The spring schedule was a weak one compared to years' past. The team only attended two tournaments, Huck Finn and Easterns. The team was able to easily win Kat Fight which further boosted the team's ego. At Easterns they fell short in Pool play losing to Pitt, Florida State, Luther, and Central Florida. But won 13th place with wins against Massachusetts and Luther.</p>\n            <p>Illinois was able to comfortable win the Illinois Conference Championships with a win in the finals over Northwestern. The Great Lakes earned two bids to nationals thanks to Northwestern and Michigan. Illinois won their pool and set themselves up for a shot at Nationals. Northwestern learned from their Conference loss and was able to adapt to slow down the Illinois offense forcing Illinois to fight through the backdoor. They next played Chicago in a windy game in which both teams attempted to score with 50/50 shots. These conditions stopped Illinois' high speed offense and gave Chicago a chance to have many opportunities on defense. Chicago finally finished the game with a stall 9 jump ball in the endzone finishing Illinois' season.</p>\n        "
	    }, {
	        year: 2013,
	        imagePath: './assets/team-photo-2013.jpg',
	        summaryMarkup: "\n            <p>After the disappointing and heartbreaking finish in 2012, Illinois lost a huge chunk of veteran talent and had to reload for 2013. Ryan Smith was captain for the 3rd year in a row and was joined by three first year captains in Neal Phelps, Colin Reid and Nathan Gibbons. The captains and the seniors on the team used the previous year's finish as motivation and set the tone at practices throughout the whole year.</p>    \n            <p>Tryouts were completed shockingly early for the 2nd year in a row. With so many open spots, Illinois was fortunate to receive a very deep and talented freshman class. Five freshman made the A-team, with three of them all coming from the same high school. A large chunk of the team were stepping into new roles or were new to college ultimate altogether. They would be forced to acclimate and adjust quickly if Illinois were to meet it's goals for the year.</p>    \n            <p>At Huck Finn, Illinois came in very over confident and were punished by the frisbee gods for their hubris. They thought they could walk into the tournament and do well. They got a huge wake up call on Saturday with three losses including a potential candidate for worst loss of the program. Another blemish on Coach Walden Nelson's coaching record. Illinois used their performance on Saturday of Huck Finn as cause for penance and toughed out an undefeated Sunday through atrocious weather conditions.</p>    \n            <p>The next weekend at Centex, Illinois came out with a renewed focus and sense of urgency. They gritted out a semifinals finish including splitting two universe point games against Harvard. This tournament gave people on the team reason to believe and showed what the team was capable of.</p>    \n            <p>Sectionals was held in Chicago. There were some tough games, but Illinois won their third consecutive conference championship. After winning the tournament, Illinois did hill sprints to help get mentally prepared for the bloodbath of a 1 bid region.</p>    \n            <p>Illinois came into Regionals as the #2 seed and knew what they had to do. Just like 2011, the format was pool play on Saturday with bracket play on Sunday. The first two games were comfortable victories. The third pool play game against Indiana was a back and forth affair. Indiana led late in the game, but on long turn-filled universe point, Illinois ground out a tough win.</p>    \n            <p>Sunday morning, Illinois came out very hot and played extremely well in a good win over up and coming Northwestern. In the first half of the Regional semi-final against MSU, Illinois could not continue their good play. The Oline struggled mightily with execution errors from the younger players on the line. The first half score was 5-8 MSU. Early in the second half, this worrying trend continued and the score went to 6-10 MSU. When things were looking dire, the soon to be graduating players refused to go down without a fight. Big plays from Preston Goulson and Tyler Anderson fueled a furious Illinois comeback highlighted by a big sky from Brian Rathunde. Illinois pulled out a stunning 14-11 win over MSU. This set up the classic Great Lake Regionals matchup between Illinois and Michigan. For the first time since 2008, this matchup would be for the Regional title and the sole bid to Nationals. Illinois maintained a very slim lead throughout the game. The Oline played very calmly even with increased pressure from Michigan. Late in the game, Illinois pulled out a couple breaks and ended the game on a d and subsequent score by Jon McKoy. Illinois returned to Nationals as the sole representative of the Great Lakes. Ryan Smith won Player of the Region honors, Neal Phelps, Nathan Gibbons earned First Team All-Region awards, Brad Bolliger earned a Second Team and Nick Prozorovsky, Johnny Saniat and Derek Yan earned Freshman team awards.</p>    \n            <p>Unfortunately at Nationals, Illinois could not break the 17th place curse. Some key players were unable to play. Illinois gamely tried to fight on but just could not overcome their depleted personnel. In a unsurprising turn of events, Illinois finished 17th at Nationals.</p>    \n        "
	    }, {
	        year: 2012,
	        imagePath: './assets/team-photo-2012.jpg',
	        summaryMarkup: "\n            <p>For the first time since 2008, Illinois returned a majority of the team and had high expectations going into the season. Major personnel losses included 2-time captain Austin Lien and 3-year O-line starter Chris Hidaka. Zach Frantz and Ryan Smith returned as captains and were joined by Kevin Bruns. With such a large number of returning A-teamers, tryouts were as competitive as ever and there were many people fighting for the few remaining spots. After following the Illinois tradition of making final cuts really late, 3 freshmen had made the A-team, which hadn't happened since 2009.</p>    \n            <p>For such a veteran team, focus and urgency was lacking during the season. There were many times where people would be going through the motions and not getting the most of the practice. Unlike past years, when the senior class would set the tone for all their younger teammates, this year saw a rift open up between the seniors and the younger members of the team. This rift manifested itself in many ways throughout the season, but it came to a head at Centex where a team meeting was held Saturday night after pool play and two juniors spoke to all the seniors and told them to get their act together.</p>    \n            <p>With high expectations going into the season, Illinois scheduled a more competitive tournament schedule than in 2011 and went to Easterns and Centex two tournaments with several Nationals contenders in addition to the early season tournament Free State Classic. With all the drama going on behind closed doors, Illinois had an up and down tournament performance with some uncharacteristic big losses. At Free State, Illinois struggled to play in the wind against Iowa and lost to them twice, once on Saturday and again in the Final. At Centex, Illinois played Iowa again and came out hot and took a 3-0 lead, but that quickly disappeared and Iowa won again in dominating fashion. This bled into the most dispiriting performance by Illinois in many years, as they proceeded to be blanked in the first half by Tufts. After play ended, the aforementioned team meeting was held. Sunday of Centex, Illinois came out reinvigorated and played a close game with Luther but eventually lost on universe. The following weekend at Easterns, Illinois played much more consistently and lost twice, once to eventual champions Pittsburgh and again on universe to Tufts. Buoyed by their Easterns results, Illinois looked ahead to the series and a return to Nationals.</p>    \n            <p>The third annual alumni game was held, and the alumni extended their winning streak to two games after a dismal performance by the college kids. After taking half 8-5, the college team seemed to think the game was over and did not try as hard as the older, more out of shape alumni. Unfortunately, the lessons from the alumni game would not be remembered later in the season.</p>    \n            <p>Sectionals once again were held in Rantoul and like every other tournament that has ever been held there, the weather was terrible. Saturday was cold, windy, and wet and Illinois took care of business winning every game handily. Sunday was sunny and very windy and after going up by a lot on Northwestern, Illinois lost their focus and let them back into the game. Illinois eventually closed it out and won by a few points.</p>    \n            <p>Like the past three years, Illinois was counting on being able to flip the switch and play their best ultimate of the season at Regionals. With two bids to Nationals, the best format and Regionals being held in Naperville, confidence was very high that Illinois would be able to get the job done and qualify for Nationals. It was a cold, windy, wet day on Saturday but Illinois won their first game comfortably. In a shocking turn of events, a lack of focus caused Illinois to come out flat against Eastern Illinois in the regional quarterfinals. Eastern Illinois came out and punched in four breaks in a row. Illinois fought back and tied the score at 5-5, but they could never get over the hump and take the lead. Eastern Illinois' Michael Schwenk carried the team to an upset with a 13-10 victory and gave Illinois their first loss at Regionals since 2008.</p>    \n            <p>With their backs against the wall, Illinois regrouped and took care of business on Saturday and stayed alive in the 2nd place bracket for Sunday. For the first time since 2007, Illinois was not in the Regional Final Sunday morning but instead in a fight for their season in the backdoor semi- finals. They dispatched Indiana 15-7 and had a rematch with Eastern Illinois in the backdoor final. Illinois did not take them lightly this time and came out with a rarely seen intensity and beat Eastern 15-2. However, the team's focus and execution was not there and multiple turnovers on every point culminated in the destruction of Coach Walden Nelson's clipboard. Illinois, after an arduous road, had finally made it to a game to go to Nationals against Michigan State. Illinois started the game out strong and fired up and came out with two quick breaks. MSU played a lot of zone in an effort to negate Ryan Smith's hucks. But Ryan did not take the bait and lead the offense to a clean no break first half and the defense got 3 breaks for an 8-5 halftime lead. Illinois smelled a Nationals berth and came out of half with 2 more points for a commanding 10-5 lead. This was when Michigan State held their ground and began a tenacious comeback. Staying with their zone, MSU began to force more and more turnovers from Illinois and began to convert them for breaks. A 10-5 lead quickly became 10-8 and MSU clawed slowly back from there to finally take the lead at 13-12. A lot of credit is to be given to MSU for never giving up and fighting their way back to the lead. But Illinois' lack of composure on offense coupled with a willingness to turn the disc over, as well as timeout mismanagement by Coach Walden Nelson did not help the cause. Even with all that being said, Illinois scored on offense to make it 13- 13 universe point with the winner going to Nationals. Illinois got the disc twice on universe and both times threw passes into the endzone that hit a receiver's hands, but alas both passes were dropped. After the second drop in the endzone MSU picked up the disc and immediately threw an 80 yard, more than full field huck for the game and the Nationals berth.</p>    \n            <p>This was not the ending to the 2012 season that Illinois imagined. For the first time since 2007, Illinois' graduating seniors did not get to end their careers at Nationals. With a huge graduating class, it will be up to the few returning A-teamers to pick up the pieces and return Illinois to Nationals.</p>    \n        "
	    }, {
	        year: 2011,
	        imagePath: './assets/team-photo-2011.jpg',
	        summaryMarkup: "\n            <p>The program lost several program mainstays such as 5-year A-teamer and 2-time captain Brian Phelan, Top 10 Callahan finisher and captain Walden Nelson, and Team Spirit Leader Kurt Zoellick among others. This required the large junior class to step up and meet the challenge. Juniors Zachary Frantz and Ryan Smith stepped up to become captains alongside returning captain Austin Lien. The captains surveyed the tryout pool and saw that it was one of the most competitive in recent history. Wanting to give everyone a fair look, final cuts weren't made until the end of January. After the smoke cleared, the final roster stood at 27 and after a 1 year hiatus of no freshman making the cut, 2 freshman found themselves on the team.</p>\n            <p>Even with a full roster, Illinois battled the injury bug throughout the season. Dline handler Adam Wright tore his acl at Rivalry Reheat and only returned for a few points at Nationals. Captain Zachary Frantz battled Plantar Fasciitis the whole year, missing every tournament besides Regionals and Nationals. 5th year cutter Chris Hidaka badly sprained his ankle in the 2nd game of the first tournament and never quite regained his old form. Seniors Suleyman Ahmad and Jonathan Hatcher had leg problems of their own and were in and out of the line up. Junior Ryan Kurnik broke his hand and missed the last half of the season. In addition there were numerous other injuries that kept people away from the field.</p>\n            <p>However there were still tournaments to be played and games to be won. Compared to past years, Illinois traveled to less competitive tournaments. Unfortunately this did not lead to more victories as Illinois struggled to maintain focus for whole games, often playing one good and one bad half. There were some benefits as several players were able to gain much needed experience playing new and more challenging roles than they were accustomed to. Illinois made semifinals of both the Freestate Classic and Huck Finn before losing to Central Region teams Iowa and Minnesota. Going into the series, Illinois hoped to follow the trends of the past two Illinois teams and play their best ultimate during the series.</p>\n            <p>Sectionals was held close by in Rantoul, Illinois as people still didn't get the memo not to have tournaments there in the Spring. Saturday was a windy and rainy day, Illinois took care of business and won every game by a comfortable margin. On Sunday, buoyed by the rare beautiful Rantoul weather, Illinois beat Northwestern and Eastern Illinois to repeat as Sectional Champions.</p>\n            <p>Just like 2010, Illinois had the 3rd seed going into Regionals. Unlike past years only 1 team would make it to Nationals, meaning 1 bad half and the season would be over. Another change was the format, with the format being pool play instead of a straight bracket. In a very windy Saturday, Illinois gutted out a close game against Loyola, winning on double game point. After that scare woke them up, they beat Western Michigan and Notre Dame handily. Everyone on the team was looking forward to facing Michigan in semis but first they would have to get through Indiana in the first game of the day on Sunday. Led by their senior leaders Ed Wu and Taylor Kraemer, Indiana gave Illinois all they could handle in a close back and forth game before Illinois pulled it out winning 15-13. This led to the semifinal showdown with Michigan for the third year in a row. However, this year would be different from the past two years as Illinois came out firing with an intensity that Michigan either could not or was unwilling to match. It was a total team effort as everyone contributed to a resounding 15-9 win. It was a great win, but people were too satisfied with that victory considering that the bid to Nationals was still up for grabs. Illinois still had to face a determined opponent in Michigan State who undoubtedly had plans for revenge from 2010. Fortunately for Illinois, Michigan State had several unforced errors in the first half of the game and Illinois took advantage going up several breaks in the first half. Michigan State tried to mount a comeback in the second half but the score difference was too great. Illinois won the region for the 3rd year in a row and took the regions only bid to Nationals with a 15-11 victory. Illinois had several players who played well during Regionals including but not limited to Dane Jorgensen, Brian Pierce, Austin Lien, Zachary Frantz, Ryan Smith and Neal Phelps. In a surprising turn of events, only Ryan Smith was a member of the All-Region team.</p>\n            <p>Going into Nationals, Illinois planned on breaking the curse of two straight 17th places. Ironically enough and deservedly so, Illinois had the 17th seed going in. Illinois was in a pool with overall #1 seed Pittsburgh and #12 seed and fan favorite Colorado College. In the first game of Nationals against Colorado College, Illinois battled nerves and had several unforced errors in the first half. However, led by Neal Phelps' stellar defense on Callahan candidate Nicky Spiva and Dane Jorgensen's aerial ability, Illinois fought and clawed back for a gritty 13-11 victory. This was Illinois' first Nationals pool play victory in 2 years and had them primed to take a spot in prequarters. After losing 15-10 to Pittsburgh highlighted by a break with several Nationals first timers and both rookies, Illinois only needed to win 1 of their next 2 games to take a spot in prequarters. Unfortunately, the issues that beguiled Illinois throughout the season came up once again. To put it simply, Illinois did not show up on Saturday of Nationals. Illinois looked lifeless and lost to Iowa 15-10. Even with that being said, Illinois simply had to win against Tufts to advance to the bracket. With their season on the line, Illinois gave a sad, disappointing effort both on the field and on the sidelines. Their effort was no where close to good enough and they got punished deservedly, 15-7, knocking them into the placement bracket for the 3rd year in a row. Illinois lost to Whitman 16-14 after leading most of the game and then in the game they have never lost, beat Florida and took 17th place for the 3rd year in a row. However there is hope for the future with 20 returning players and a talented incoming class, Illinois will look to break the curse of 17th.</p>\n        "
	    }, {
	        year: 2010,
	        imagePath: './assets/team-photo-2010.jpg',
	        summaryMarkup: "\n            <p>Illinois had to deal with several big losses from the year before but none bigger than the departure of longtime coach Matt Stupca who coached from 2004-2009. The captains Brian Phelan, Walden Nelson and Austin Lien, had to come to terms with the responsibilities and extra work that Matt Stupca provided, and carry a bigger load themselves. Dealing with the heavy losses from the year before, Illinois called up a number of players from the B-team and two from the C-team which was a program first. Illinois spent much of the season acclimating the new players so that they would be ready for Nationals level competition.</p>\n            <p>They had uneven results and growing pains throughout the year, with a highlight being making the finals of Mardis Gras before losing to Wisconsin by a substantial margin. It also included another shellacking by Michigan at Huck Finn as many players got their first taste of the regional rivalry. Illinois had several injuries throughout the year which made practice attendance an issue, however Illinois fought through them and went into the College Series mostly healthy.</p>\n            <p>At Sectionals Illinois held the 1 seed going in, but lost on Saturday of Sectionals for the first time since the Regions and Sections were redrawn. This gave them a 2 seed out of their pool and a first round match up with Notre Dame the 2 seed overall, with good seeding at Regionals on the line. Illinois went up big early but Notre Dame made a furious comeback to tie up late in the game, Illinois received going upwind and threw caution into the wind by throwing several close throws through and around the Notre Dame zone before punching it in and winning 14-13. Illinois then took care of business and made it to finals, exacting revenge on Purdue for the Saturday loss and beating them 15-5 and reclaiming the Sectional title.</p>\n            <p>Going into Regionals Illinois had the 3 seed going in behind Michigan State and Michigan. Illinois beat both Dayton and Purdue handily and advanced to semifinals before finding out that Regionals would be postponed for a week. Having a week to prepare and to heal, Illinois faced Michigan at Regionals as is the norm. In a heavy wind game, which saw several lead changes, but few breaks, and lots of great plays from both teams, Illinois was able to score on a gut-wrenching universe point and won the game 9-8.</p>\n            <p>This sent Illinois to its 3rd straight Regional final with a chance to repeat as Regional champions for the first time in the programs history. Illinois faced Michigan State with the Regional title on the line and prevailed in a close game with Illinois being able to pull away in the end, 15-10. Illinois repeated as Regional champions for the first time and had Brian Phelan and Walden Nelson win first team All-Region honors and had Ryan Smith win 2nd team All-Region, becoming the first sophomore in the programs history to win a regional award. Illinois was seeded 14th going into Nationals. They lost to Harvard handily but was still in contention for a prequarters berth if they were able to beat both UNCW and Iowa. However, in games possibly showing a lack of experience or the burden of captaining and coaching proving too great, Illinois lost late leads in both games and lost to UNCW 14-12 and to Iowa 16-14. Illinois then played Carleton in a much closer than expected 15-12 loss and lost to Wisconsin. Beating Kansas in the last game of the tournament gave Illinois its only win at Nationals and sent them home with another 17th place finish. Illinois did not graduate as many players as in years past, which makes Illinois in a prime position to continue its Nationals qualifying streak.</p>\n        "
	    }, {
	        year: 2009,
	        imagePath: './assets/team-photo-2009.jpg',
	        summaryMarkup: "\n            <p>2009 saw the departures of many fixtures of the Illinois program such as Joel Koehneman, Pat Stephens, Jake Segil and David Abram. In their place it was up to the class of 2005 to step up and lead the program. It was the first time in several years that there were 3 captains vacancies. They were filled by Denis Agniel, Brian Phelan and Charlie O'Brien. Like in 2006 when the team lost several impact players, the team was able to recruit a very deep class that rivals and may surpass the freshman class of 2006. This influx of freshman led to the 2nd year of the C- teams existence in the programs history.</p>    \n            <p>The regular season for Illinois was very rough, with the team trying to find people who would be able to fill the big holes left by the departed players. This led to several big losses throughout the year and poor tournament finishes, culminating in a 13-2 beatdown by regional rival Michigan at Huck Finn. Going into the postseason/the college series, Illinois had a lot of uncertainty. At Sectionals, Illinois took care of business on Saturday and beat a tough North Park team in semifinals and made Finals against Notre Dame. In a rainy, cold final, Illinois looked like they did throughout the season and lost 15-10. This gave Illinois a 4 seed going into Regionals and a definite longshot for one of the two Nationals bids.</p>\n            <p>Illinois faced tougher than expected games against Kenyon and North Park before meeting Michigan in Regional semifinals. Illinois came together in a way that had not been seen all season, and put forth their best effort of the season and beat Michigan in a tense hard fought game 12-9. This put Illinois in its second straight Regional final against Ohio State. The previous day's momentum carried over as Illinois beat Ohio State handily 15-11, taking home its first Regional championship since 2002.</p>\n            <p>Illinois placed Denis Agniel, Brian Phelan, Pavan Sarguru, and Walden Nelson on the Great Lakes 2nd Team All-Region, Coach Matt Stupca won the inaugural Coach of the Region award, and Ryan Smith won Freshman of the year. Winning the Region gave Illinois an 8 seed going into Nationals, however whatever magic Illinois had at Regionals was lost at Nationals, as Illinois lost several games by big margins except for one close pool play game against Tufts and the only win against Cal. They did so in good spirit, winning the 2009 Nationals Spirit Award and dubbed Zubair: The most spirited man in ultimate. Although, this performance gave Illinois a disappointing 17th place finish at Nationals and with several players graduating including captain Denis Agniel, the prospect of another rebuilding year loomed large.</p>\n        "
	    }, {
	        year: 2008,
	        imagePath: './assets/team-photo-2008.jpg',
	        summaryMarkup: "\n            <p>Using the loss at Regionals the previous year as motivation and determined to make Nationals in captains Joel Koehneman, Pat Stephans and David Abrams, final year. Many players on the team spent their summer and fall, going to tournaments together in an effort to get better. Illinois also got a key transfer student Denis Agniel, who created the team at Loyola University in Chicago. This was a very veteran team under coach Matt Stupca that was poised to make a run into Nationals.</p>    \n            <p>Throughout the season, Illinois had a chance to win every game that they played. The biggest margin of victory in Illinois' losses heading into Regionals was 3 points. Illinois suffered some key injuries before Sectionals but managed to persevere and hold of North Park in an exciting 17-16 Sectional Final. Like the previous year Illinois had a 2 seed going into Regionals. They took care of business on Saturday winning all 3 games and securing a spot in the Regional finals. In many people's first Regional final, Illinois played tentatively and lost 15-11 to Michigan putting them in the 2nd place game against Ohio State. In a reversal of the previous years game at Regionals, Illinois stormed out to a big lead and maintained it throughout and punched their first ticket to Nationals in 3 years.</p>    \n            <p>Pat Stephens and Joel Koehneman both won all-region honors. Nationals that year was in Boulder, Colorado and Illinois went into it holding an 8 seed and in a pool with Florida, North Texas and Delaware. Illinois beat Delaware to clinch a spot in prequarters, and lost to Florida and North Texas. In prequarters Illinois was matched up against Michigan, who they had lost to at Regionals and had not beaten since 2004. In a hard fought game led by the graduating players, Illinois prevailed 15-11 sending them into quarters against the hometown team Colorado. In an exciting game that saw several big plays, Illinois lost 15-12 to Colorado and ended their season having them tied for 5th which is the highest finish in the programs history. 2008 saw the departure of many mainstays for Illinois and the following years would show how well the recruiting efforts of 2005 paid off.</p>      \n        "
	    }, {
	        year: 2007,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Coming off of one the worst years in recent history, Illinois started to put the pieces in place to make a run at a Nationals berth. The leadership which added Jake Segil as a captain, joining Joel Koehneman and Brian Korbesmeyer and Matt Stupca as coach, continued to focus on recruiting, resulting in an another big influx of freshman. Resulting in the creation of the first C-team in the programs history. However, unlike the previous year, many of them stopped playing within a year.</p>    \n            <p>In order to gear up to make a run and to face stiffer competition, Illinois designed a much harder tournament schedule travelling to tournaments in Las Vegas and Austin, in addition to ones they had previously gone to in Baton Rouge and Atlanta. This benefited the team, as they were able to match up and see where they stood in relation to both Nationals finalists. As a result, the team was able to see that they were more than prepared to take a Nationals berth out of Regionals.</p>    \n            <p>Illinois steamrolled through Sectionals and reclaimed the Sectionals crown and had a 2-seed going into Regionals. Regionals was held in Rantoul, Illinois and was hosted by Illinois. Illinois took care of business early, beating Dayton and Notre Dame handily before squaring off against Indiana in Regional semifinals. In a very heavy upwind downwind game that saw very few breaks, Illinois received going downwind on universe point but was unable to punch it in and lost on a couple floaty upwind hucks. Out of the running for first, Illinois was now in the backdoor bracket having to win every game in order to advance to Nationals. They beat Northwestern and faced Ohio State, the #1 seed going into the tournament who had also lost in semis to Michigan. Perhaps showing a little bit of inexperience in a pressure filled game, Illinois went down big early, going down 5-0, however, they mounted a furious comeback and came close to negating the early deficit, but eventually succumbed 15-12 and ending their season without a Nationals berth for the 3rd year in a row. Illinois finished 4th at Regionals.</p>    \n            <p>Brian Korbesmeyer and Joel Koehneman both received all-region honors. However unlike the previous year, there were several graduating players most notably Brian Korbesmeyer, who had captained the team the previous 2 years and was a major player on offense. Finding players to step into the holes left by the graduating players was a major question going into the next year.</p>    \n        "
	    }, {
	        year: 2006,
	        imagePath: '',
	        summaryMarkup: "\n            <p>After coming so close to a Nationals berth the year before, 2006 was a rebuilding year for Illinois. After losing several starting players, the captains, Brian Korbesmeyer and Joel Koehneman and coach Matt Stupca, decided to focus their energies on recruiting and replenishing the program. This led to one of the deepest freshman classes in the programs history largely due to the efforts of Brian Korbesmeyer. In order to facilitate the rebuilding process, the leadership decided to go with a very small A-team roster of less than 20 guys, so that everyone would be able to play both on the A-team and on the B-team. The B-team with the services of coach Nick McDuffee was able to nurture the players and have them ready to take the next step onto the A-team. It was a season with very few bright spots, as Illinois did not make the Sectional final for one of the few times in modern history, finishing 4th at Sectionals, and did not even make Sunday of Regionals, finishing tied for 7th after losing in quarterfinals and getting eliminated in the backdoor bracket. However, there were encouraging signs for future years to come, Brian Phelan won freshman of the year for the Great Lakes Region and there were several talented players waiting in the wings, ready to make their mark on the program and the same core of players returning.</p>    \n        "
	    }, {
	        year: 2005,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Illinois advanced to the finals at Regionals and lost to Michigan on double game point, and had to immediately play Michigan State for second place and the chance to return to nationals. Coming out flat after the loss to Michigan Illinois went down 3-0. Battled back to double game point but again lost and were eliminated.</p>\n        "
	    }, {
	        year: 2004,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Illinois finished second at Regionals and advanced to Nationals in Seattle, Washington. Illinois lost a close game to North Carolina State in Prequarters and finished 9th.</p>\n        "
	    }, {
	        year: 2003,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Illinois started being invited to the major tournaments, including its first invite to Easterns. This helped prepare the team for the season. Seeded first at Regionals, Illinois lost in the finals to Ohio State and advanced to Nationals in Austin, TX. After beating Michigan and Georgia fairly handily in the first two games, Illinois beat North Carolina State 17-15 to win the pool. In quarters Illinois matched up with Colorado.They were 3 feet away from being up 14-13, pulling downwind, but victory eluded them, and ended up finishing tied for 5th.</p>\n        "
	    }, {
	        year: 2002,
	        imagePath: '',
	        summaryMarkup: "\n            <p>The program made a big jump forward under the coaching of Joe Ferrari. The team advanced to the Regional Final for the first time ever, the Final was against Michigan. There was a consistent wind of 25-35 mph with gusts of over 40. For a lot of the game it was upwind/downwind with the huck and zone strategy being employed. Then early in the second half we got a big break off and were able to work the disc up the backhand sideline all the way to the endzone for a score to take the lead. From there we maintained our lead up to 13-12. Michigan worked the disc upwind and called a timeout 5 yards out of the endzone on the forehand side. Out of the timeout they had a man break open on the force side. Alvin Wang was able to run past for the game saving d. We were able to score that point and the next downwinder in the back corner of the endzone to advance to our first Nationals. Illinois' first Nationals tournament was in Spokane, WA. We lost many close games early to Colorado and Carleton. We beat Colorado later in the tournament and finished 9th.</p>\n        "
	    }, {
	        year: 2001,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Bill Finn and Nick McDuffee joined the team this year, and the team was the strongest it had ever been with these two outstanding rookies. Many of the older returners now had 3-4 years of competitive ultimate under their belts, and the team was on the verge of breaking through. A Sectional final win over Indiana set up Illinois as the 3rd seed at Regionals behind Michigan and OSU (regional hosts). After beating a tough ND team in quarterfinals, Illinois faced Michigan in the semifinals. Despite being up by a few goals at half-time, Michigan's Nationals experience showed and they ended up winning a closely fought game. Sunday morning, Illinois lost to Oberlin, making it three straight years of semifinal losses at Regionals.</p>\n        "
	    }, {
	        year: 2000,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Illinois changed its name to FIST and had another good recruiting class with the likes of Greg Severin, Chris Hagen, Nels Overgaard-Cook, Kyle Eertmoed, Brian Fifarek, and Dave Draeger. Illinois went to the Stanford Invite for the first time. Regionals was at Purdue University that year, and Illinois lost to Dayton in semifinals, beat Oberlin Sunday morning, and then lost an elimination game to Notre Dame.</p>\n        "
	    }, {
	        year: 1999,
	        imagePath: '',
	        summaryMarkup: "\n            <p>1999 saw another surge in the team's development. More recruits like Alvin Wang, John Koltse, and Kevin Patterson joined the team. The College Regions were redrawn which meant that Illinois had a real opportunity to qualify for nationals in the newly formed Great Lakes Region. It was a great year for the team, which racked up many wins, including wins at Frozen Over in Bloomington, IN and the first Sectional Championship for the team. Coming into Regionals, Illinois was seeded second and hosted the tournament. The team lost a heartbreaker in semifinals to Oberlin College, and then lost an elimination game on Sunday morning to Notre Dame.</p>\n        "
	    }, {
	        year: 1998,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Was a transformational year for the program, as a great class of rookies joined Illinois. Jarrett Bialek, Xia Xi, Andy Zill, Kyle Romberg, and Jacob Dee were among the new players who helped push the team to towards becoming a more legitimate program. The team changed their name to 'Men From Mars', got uniforms, designed new discs, and actually started practicing a real offensive scheme and spent more time working out off the field. Illinois set the goal of qualifying for Regionals, and at that time the Central Region included every state from Minnesota to Illinois to Colorado. A 4th place finish at sectionals propelled them to their first Regionals birth in many years. At Regionals in Michigan, Illinois played Grinnell and Colorado State pool play, but were eliminated from competition on Saturday.</p>\n        "
	    }, {
	        year: 1997,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Tom Coffin aka Iron Man, an older player deserves credit for organizing the program and recruiting efforts. He moved to Champaign in the fall of 1996 and really helped lead the program in the right direction along with players like Joe Ferrari and Ryan Fehrenbacher and others. In the fall of 1996, the team was mostly filled with graduate students and older players, and had a 'serious' pick-up vibe where practices were mostly scrimmages with some occasional drills. Under Captain Ted Winrow, 'Big Red Ultimate' struggled to win many games, but traveled to tournaments in Baton Rouge, LA, Carbondale, IL, Madison, WI, amongst a few others. Key players included John Conour, Leo Wang, Jon Rasmussen, and David Fiske. Joe Ferrari and Matt Taylor were the only freshmen, who showed up consistently, and the year ended with a low finish at Sectionals and Illinois did not qualify for Regionals that year. BRU - the origin of this name comes from the practice on the team where if you got handblocked you had to chug a bottle of Big Red Soda, which had some significance.</p>\n        "
	    }, {
	        year: 1996,
	        imagePath: '',
	        summaryMarkup: "\n            <p>Illinois again hosted Sectionals and qualified for Regionals, finishing 3rd behind Notre Dame and Indiana. Our team by this point was more than half undergraduates; there were at most 14 at Regionals. The team was run at this time by Ted Winrow. Ted and Gary Ledonne were basically the entire team. Bill Branson was still playing, John Connour was in his first year, Leo Wang was in his first year alSophomore Gary Ledonne had to convince players to attend Regionals in West Lafayette. Illinois went 0-3 in pool play losing relatively close games to Colorado and Oberlin.</p>\n        "
	    }, {
	        year: 1995,
	        imagePath: '',
	        summaryMarkup: "\n            <p>After losing 2 of our top grad students Illinois lost in the game to go to Regionals to Ball State.</p>\n        "
	    }, {
	        year: 1994,
	        imagePath: '',
	        summaryMarkup: "\n            <p>In February of 1994, Illinois had winter practices in the Armory and the Bubble. The University would give us 1.5 hours a week Sunday night 10:30 to Midnight, we split use with the women's team. The makeup of the team was much different, there were had 17 players at Sectionals 4 were undergrads. Almost all grad students and most were in their late 20's. There was little to no recruiting effort. Practice generally consisted of some bad drills, but they were drills designed to learn how to throw in most cases, then we scrimmaged. Our level of athleticism was awful compared to today's game, but our older team was pretty strong throwing, at least for a college team at that time. Wind was our friend as it allowed us to run a zone. In any case the team was fairly solid. Tony Curtis, Mike Percy, and Bill Branson were some of the strong grad student throwers. Mike Fritz an old undergrad at 23, Ted Winrow and Gary Ledonne both sophomores were the contributing undergrads. The team hosted Sectionals and took 2nd to Purdue, our big win was beating Indiana who had been the strength of the Section. Regionals was in Grinnell, Iowa. It was the first year they had moved Colorado into our Region as they had lobbied for an easier Region. At Regionals Illinois went 3-1 in pool play, losing to Purdue, beating Colorado, Macalester, and Grinnell. In pre-quarters we beat Dayton making the top 8 double elimination for 3 spots. Lost to Carleton and Oberlin and that was it.</p>\n        "
	    }
	];


/***/ }),
/* 137 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Team History</h1>\n<div class=\"ui secondary pointing menu\">\n    <div #1994dropdown class=\"ui dropdown item\">\n        1994-1999<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/history/1994\" [routerLinkActive]=\"['active']\" class=\"item\">1994</div>\n            <div routerLink=\"/history/1995\" [routerLinkActive]=\"['active']\" class=\"item\">1995</div>\n            <div routerLink=\"/history/1996\" [routerLinkActive]=\"['active']\" class=\"item\">1996</div>\n            <div routerLink=\"/history/1997\" [routerLinkActive]=\"['active']\" class=\"item\">1997</div>\n            <div routerLink=\"/history/1998\" [routerLinkActive]=\"['active']\" class=\"item\">1998</div>\n            <div routerLink=\"/history/1999\" [routerLinkActive]=\"['active']\" class=\"item\">1999</div>\n        </div>\n    </div>\n    <div #2000dropdown class=\"ui dropdown item\">\n        2000-2009<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/history/2001\" [routerLinkActive]=\"['active']\" class=\"item\">2001</div>\n            <div routerLink=\"/history/2002\" [routerLinkActive]=\"['active']\" class=\"item\">2002</div>\n            <div routerLink=\"/history/2003\" [routerLinkActive]=\"['active']\" class=\"item\">2003</div>\n            <div routerLink=\"/history/2004\" [routerLinkActive]=\"['active']\" class=\"item\">2004</div>\n            <div routerLink=\"/history/2005\" [routerLinkActive]=\"['active']\" class=\"item\">2005</div>\n            <div routerLink=\"/history/2006\" [routerLinkActive]=\"['active']\" class=\"item\">2006</div>\n            <div routerLink=\"/history/2007\" [routerLinkActive]=\"['active']\" class=\"item\">2007</div>\n            <div routerLink=\"/history/2008\" [routerLinkActive]=\"['active']\" class=\"item\">2008</div>\n            <div routerLink=\"/history/2009\" [routerLinkActive]=\"['active']\" class=\"item\">2009</div>\n        </div>\n    </div>\n    <div #2010dropdown class=\"ui dropdown item\">\n        2010-2017<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/history/2010\" [routerLinkActive]=\"['active']\" class=\"item\">2010</div>\n            <div routerLink=\"/history/2011\" [routerLinkActive]=\"['active']\" class=\"item\">2011</div>\n            <div routerLink=\"/history/2012\" [routerLinkActive]=\"['active']\" class=\"item\">2012</div>\n            <div routerLink=\"/history/2013\" [routerLinkActive]=\"['active']\" class=\"item\">2013</div>\n            <div routerLink=\"/history/2014\" [routerLinkActive]=\"['active']\" class=\"item\">2014</div>\n            <div routerLink=\"/history/2015\" [routerLinkActive]=\"['active']\" class=\"item\">2015</div>\n            <div routerLink=\"/history/2016\" [routerLinkActive]=\"['active']\" class=\"item\">2016</div>\n            <div routerLink=\"/history/2017\" [routerLinkActive]=\"['active']\" class=\"item\">2017</div>\n\n        </div>\n    </div>\n</div>\n<h2 class=\"ui header\">{{year}}</h2>\n<ng-container *ngFor=\"let historyYear of historyData\">\n    <ng-container *ngIf=\"historyYear.year === year\">\n        <img *ngIf=\"historyYear.imagePath\" src=\"{{historyYear.imagePath}}\"/>\n        <div class=\"summary\" [innerHTML]=\"historyYear.summaryMarkup\"></div>\n    </ng-container>\n</ng-container>\n<!--Only show the previous and next button if they are within the bounds of our history summaries-->\n<a *ngIf=\"year > 1994\" routerLink=\"/history/{{year - 1}}\"><i class=\"angle double left icon\"></i></a>\n<a *ngIf=\"year < 2017\" routerLink=\"/history/{{year + 1}}\"><i class=\"angle double right icon\"></i></a>";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(139);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "img {\n  width: 75%;\n  border: 1px solid #00004D;\n  margin-bottom: 15px;\n  border-radius: 0.28571429em;\n}\ni {\n  font-size: 2em;\n}\ni.right {\n  float: right;\n}\ni.left {\n  float: left;\n}\n.summary {\n  text-align: left;\n  margin-bottom: 20px;\n}\n.ui.dropdown.item {\n  width: 121px;\n  height: 40px;\n}\n.ui.dropdown.item .active,\n.ui.dropdown.item:focus {\n  border: 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var awards_data_1 = __webpack_require__(141);
	var AwardsComponent = (function () {
	    function AwardsComponent() {
	        // Awards data to inject into our template
	        this.awardData = awards_data_1.AWARDS_DATA;
	    }
	    AwardsComponent.prototype.ngOnInit = function () { };
	    return AwardsComponent;
	}());
	AwardsComponent = __decorate([
	    core_1.Component({
	        selector: 'awards',
	        template: __webpack_require__(142),
	        styles: [__webpack_require__(143)]
	    }),
	    __metadata("design:paramtypes", [])
	], AwardsComponent);
	exports.AwardsComponent = AwardsComponent;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	"use strict";
	exports.AWARDS_DATA = [
	    {
	        year: 2016,
	        name: 'Nick Prozorovsky',
	        award: '1st Team'
	    },
	    {
	        year: 2016,
	        name: 'Johnny Saniat',
	        award: '1st Team'
	    },
	    {
	        year: 2016,
	        name: 'Prayag Patel',
	        award: '2nd Team'
	    },
	    {
	        year: 2016,
	        name: 'Ben Sabourin',
	        award: 'All-Freshman/FOTY'
	    },
	    {
	        year: 2016,
	        name: 'Jacob Cuthbert',
	        award: 'All-Freshman'
	    },
	    {
	        year: 2015,
	        name: 'Matt Stupca',
	        award: 'COTY'
	    },
	    {
	        year: 2015,
	        name: 'Nick Prozorovsky',
	        award: '1st Team'
	    },
	    {
	        year: 2015,
	        name: 'Matt West',
	        award: '1st Team'
	    },
	    {
	        year: 2015,
	        name: 'Kevin Lin',
	        award: 'All-Freshman/FOTY'
	    },
	    {
	        year: 2014,
	        name: 'Neal Phelps',
	        award: '1st Team'
	    },
	    {
	        year: 2014,
	        name: 'Nick Prozorovsky',
	        award: '2nd Team'
	    },
	    {
	        year: 2013,
	        name: 'Nathan Gibbons',
	        award: '1st Team'
	    },
	    {
	        year: 2013,
	        name: 'Neal Phelps',
	        award: '1st Team'
	    },
	    {
	        year: 2013,
	        name: 'Ryan Smith',
	        award: '1st Team/POTY'
	    },
	    {
	        year: 2013,
	        name: 'Brad Bollinger',
	        award: '2nd Team'
	    },
	    {
	        year: 2013,
	        name: 'Nick Prozorovsky',
	        award: 'All Freshman'
	    },
	    {
	        year: 2013,
	        name: 'Johnny Saniat',
	        award: 'All Freshman'
	    },
	    {
	        year: 2013,
	        name: 'Derek Yan',
	        award: 'All Freshman'
	    },
	    {
	        year: 2012,
	        name: 'Ryan Smith',
	        award: '1st Team'
	    },
	    {
	        year: 2012,
	        name: 'Dane Jorgensen',
	        award: '2nd Team'
	    },
	    {
	        year: 2011,
	        name: 'Ryan Smith',
	        award: '1st Team'
	    },
	    {
	        year: 2010,
	        name: 'Walden Nelson',
	        award: '1st Team'
	    },
	    {
	        year: 2010,
	        name: 'Brian Phelan',
	        award: '1st Team'
	    },
	    {
	        year: 2010,
	        name: 'Ryan Smith',
	        award: '2nd Team'
	    },
	    {
	        year: 2009,
	        name: 'Matt Stupca',
	        award: 'COTY'
	    },
	    {
	        year: 2009,
	        name: 'Denis Agniel',
	        award: '2nd Team'
	    },
	    {
	        year: 2009,
	        name: 'Walden Nelson',
	        award: '2nd Team'
	    },
	    {
	        year: 2009,
	        name: 'Pavan Sarguru',
	        award: '2nd Team'
	    },
	    {
	        year: 2009,
	        name: 'Ryan Smith',
	        award: 'FOTY'
	    },
	    {
	        year: 2008,
	        name: 'Joel Koehneman',
	        award: '1st Team'
	    },
	    {
	        year: 2008,
	        name: 'Pat Stephens',
	        award: '1st Team'
	    },
	    {
	        year: 2007,
	        name: 'Joel Koehneman',
	        award: '1st Team'
	    },
	    {
	        year: 2007,
	        name: 'Brian Korbesmeyer',
	        award: '1st Team'
	    },
	    {
	        year: 2006,
	        name: 'Brian Phelan',
	        award: 'FOTY'
	    },
	    {
	        year: 2005,
	        name: 'Nick McDuffee',
	        award: '1st Team'
	    },
	    {
	        year: 2005,
	        name: 'Mike Clark',
	        award: '1st Team'
	    },
	    {
	        year: 2005,
	        name: 'David Abram',
	        award: 'FOTY'
	    },
	    {
	        year: 2004,
	        name: 'Matt Welsh',
	        award: '1st Team'
	    },
	    {
	        year: 2004,
	        name: 'Nick McDuffee',
	        award: '1st Team'
	    },
	    {
	        year: 2004,
	        name: 'Pat Stephens',
	        award: 'FOTY'
	    },
	    {
	        year: 2003,
	        name: 'Nate Bosscher',
	        award: '1st Team'
	    },
	    {
	        year: 2002,
	        name: 'Xi Xia',
	        award: '1st Team'
	    },
	    {
	        year: 2002,
	        name: 'Dane Olsen',
	        award: 'FOTY'
	    }
	];


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Awards</h1>\n<table class=\"ui celled table\">\n    <thead>\n        <tr>\n            <th>Year</th>\n            <th>Name</th>\n            <th>Award</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let award of awardData\">\n            <td>{{award.year}}</td>\n            <td>{{award.name}}</td>\n            <td>{{award.award}}</td>\n        </tr>\n    </tbody>\n</table>\n<p>*All-Freshman team added in 2013, FOTY (Freshman of the Year) given to the All-Freshman member with the most 1st place votes</p>\n<p>*Player of the year award added in 2013, POTY (Player of the Year) given to the All-Region member with the most 1st place votes</p>\n<p>*COTY (Coach of the Year) added in 2009</p>\n<p>*2nd-Team All Region added in 2009</p>\n<p>*Awards first given out in 2002</p>";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(144);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "p {\n  text-align: left;\n  text-indent: 0;\n}\n", ""]);
	
	// exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var results_data_1 = __webpack_require__(146);
	var ResultsComponent = (function () {
	    function ResultsComponent() {
	        // Results data to inject into our template
	        this.resultData = results_data_1.RESULTS_DATA;
	    }
	    ResultsComponent.prototype.ngOnInit = function () { };
	    return ResultsComponent;
	}());
	ResultsComponent = __decorate([
	    core_1.Component({
	        selector: 'results',
	        template: __webpack_require__(147),
	        styles: [__webpack_require__(148)]
	    }),
	    __metadata("design:paramtypes", [])
	], ResultsComponent);
	exports.ResultsComponent = ResultsComponent;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

	"use strict";
	exports.RESULTS_DATA = [
	    {
	        year: 2017,
	        sectionals: '2nd',
	        regionals: '6th',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/events/teams/?EventTeamId=TIUxXrZ4pDNhNi4M3QA1J%2b9D8kAdNss8Ny4JyUUuZhg%3d'
	    },
	    {
	        year: 2016,
	        sectionals: '3rd',
	        regionals: '3rd',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/teams/events/Eventteam/?TeamId=nQzsCO0fKbUUEFZfKJ%2fOUotd%2f1PM6wo35HPaXJEMUC8%3d'
	    },
	    {
	        year: 2015,
	        sectionals: '2nd',
	        regionals: '1st',
	        nationals: '13th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/teams/events/Eventteam/?TeamId=T%2bV6D2XyLTlkLA%2fX2WpaiPGnYy6S3Dn%2fmcblfo08DNo%3d'
	    },
	    {
	        year: 2014,
	        sectionals: '1st',
	        regionals: '5th',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://play.usaultimate.org/teams/events/Eventteam/?TeamId=1z8hrygGYaDwJqk8F%2fmP4lOk9BD3%2fI%2bKW33IHo8qF9E%3d'
	    },
	    {
	        year: 2013,
	        sectionals: '1st',
	        regionals: '1st',
	        nationals: '17th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://scores.usaultimate.org/scores/#college-open/team/1794'
	    },
	    {
	        year: 2012,
	        sectionals: '1st',
	        regionals: '3rd',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://scores.usaultimate.org/scores2012/#college-open/team/1794'
	    },
	    {
	        year: 2011,
	        sectionals: '1st',
	        regionals: '1st',
	        nationals: '17th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://scores.usaultimate.org/scores2011/#college-open/team/1794'
	    },
	    {
	        year: 2010,
	        sectionals: '1st',
	        regionals: '1st',
	        nationals: '17th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://scores.usaultimate.org/scores2010/#college-open/team/1794'
	    },
	    {
	        year: 2009,
	        sectionals: '2nd',
	        regionals: '1st',
	        nationals: '13th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2009/scores.cgi?div=18&page=3&team=1794'
	    },
	    {
	        year: 2008,
	        sectionals: '1st',
	        regionals: '2nd',
	        nationals: '5th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2008/scores.cgi?div=18&page=3&team=1794'
	    },
	    {
	        year: 2007,
	        sectionals: '2st',
	        regionals: '4th',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2007/scores.cgi?div=18&page=3&team=1794'
	    },
	    {
	        year: 2006,
	        sectionals: '3rd',
	        regionals: '7th',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2006/scores.cgi?div=18&page=3&team=1794'
	    },
	    {
	        year: 2005,
	        sectionals: '2st',
	        regionals: '3rd',
	        nationals: '-',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2005/scores.cgi?div=18&page=3&team=1794'
	    },
	    {
	        year: 2004,
	        sectionals: '1st',
	        regionals: '2nd',
	        nationals: '17th',
	        teamPageLabel: 'USAU',
	        teamPageLink: 'http://ultimate.scorereport.net/2004/scores.cgi?div=18&page=3&team=1794'
	    }
	];


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	module.exports = "<h1 class=\"ui header\">Results</h1>\n<table class=\"ui celled table\">\n    <thead>\n    <tr>\n        <th>Year</th>\n        <th>Sectionals</th>\n        <th>Regionals</th>\n        <th>Nationals</th>\n        <th>Team Page</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let result of resultData\">\n        <td>{{result.year}}</td>\n        <td>{{result.sectionals}}</td>\n        <td>{{result.regionals}}</td>\n        <td>{{result.nationals}}</td>\n        <td><a target=\"_blank\" href=\"{{result.teamPageLink}}\">{{result.teamPageLabel}}</a></td>\n    </tr>\n    </tbody>\n</table>";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(149);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var platform_browser_1 = __webpack_require__(25);
	var router_1 = __webpack_require__(90);
	var team_history_component_1 = __webpack_require__(135);
	var awards_component_1 = __webpack_require__(140);
	var results_component_1 = __webpack_require__(145);
	var app_routes_1 = __webpack_require__(134);
	var HistoryModule = (function () {
	    function HistoryModule() {
	    }
	    return HistoryModule;
	}());
	HistoryModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            team_history_component_1.TeamHistoryComponent,
	            awards_component_1.AwardsComponent,
	            results_component_1.ResultsComponent
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], HistoryModule);
	exports.HistoryModule = HistoryModule;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(90);
	var menu_desktop_component_1 = __webpack_require__(152);
	var menu_mobile_component_1 = __webpack_require__(158);
	var left_sidebar_component_1 = __webpack_require__(162);
	var right_sidebar_component_1 = __webpack_require__(166);
	var page_frame_component_1 = __webpack_require__(173);
	var app_routes_1 = __webpack_require__(134);
	var footer_component_1 = __webpack_require__(177);
	var PageFrameModule = (function () {
	    function PageFrameModule() {
	    }
	    return PageFrameModule;
	}());
	PageFrameModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
	        ],
	        declarations: [
	            page_frame_component_1.PageFrameComponent,
	            menu_desktop_component_1.MenuDesktopComponent,
	            menu_mobile_component_1.MenuMobileComponent,
	            left_sidebar_component_1.LeftSidebarComponent,
	            right_sidebar_component_1.RightSidebarComponent,
	            footer_component_1.FooterComponent
	        ],
	        exports: [
	            page_frame_component_1.PageFrameComponent
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], PageFrameModule);
	exports.PageFrameModule = PageFrameModule;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var MenuDesktopComponent = (function () {
	    function MenuDesktopComponent() {
	    }
	    /**
	     * Initialize our mobile menu dropdown.
	     */
	    MenuDesktopComponent.prototype.ngAfterViewInit = function () {
	        $(this.teamDropdown.nativeElement).dropdown({});
	        $(this.historyDropdown.nativeElement).dropdown({});
	    };
	    return MenuDesktopComponent;
	}());
	__decorate([
	    core_1.ViewChild('teamDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], MenuDesktopComponent.prototype, "teamDropdown", void 0);
	__decorate([
	    core_1.ViewChild('historyDropdown'),
	    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
	], MenuDesktopComponent.prototype, "historyDropdown", void 0);
	MenuDesktopComponent = __decorate([
	    core_1.Component({
	        selector: 'menu-desktop',
	        template: __webpack_require__(153),
	        styles: [__webpack_require__(155)]
	    }),
	    __metadata("design:paramtypes", [])
	], MenuDesktopComponent);
	exports.MenuDesktopComponent = MenuDesktopComponent;
	var _a, _b;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<!--Header-->\n<div class=\"header\">\n    <a routerLink=\"/home\"><img class=\"crest\" src=\"" + __webpack_require__(154) + "\"/></a>\n    <a routerLink=\"/home\"><h1 class=\"header-text\">Illinois Ultimate</h1></a>\n</div>\n<!--Menu-->\n<div class=\"ui pointing stackable menu\">\n    <a routerLink=\"/home\"       [routerLinkActive]=\"['active']\" class=\"item active\"><i class=\"home icon\"></i>Home</a>\n    <a routerLink=\"/about\"      [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"info icon\"></i>About Us</a>\n    <a routerLink=\"/prospects\"  [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"child icon\"></i>Prospective Players</a>\n    <div #teamDropdown class=\"ui dropdown item\">\n        <i class=\"user icon\"></i>Team<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/practice\"          [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"soccer icon\"></i>Practice</div>\n            <div routerLink=\"/tournaments/2017\"  [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"calendar icon\"></i>Tournaments</div>\n            <div routerLink=\"/roster/2017\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"ordered list icon\"></i>Roster</div>\n            <div routerLink=\"/absent\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"remove icon\"></i>Absent Form</div>\n        </div>\n    </div>\n    <div #historyDropdown class=\"ui dropdown item\">\n        <i class=\"fast backward icon\"></i>History<i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <div routerLink=\"/history/2016\" [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"undo icon\"></i>Team History</div>\n            <div routerLink=\"/awards\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"trophy icon\"></i>Awards</div>\n            <div routerLink=\"/results\"      [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"archive icon\"></i>Past Results</div>\n        </div>\n    </div>\n    <a href=\"http://www.illiniulti.blogspot.com/\" target=\"_blank\" class=\"item\"><i class=\"comment icon\"></i>Blog</a>\n    <a routerLink=\"/contact\" [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"mail icon\"></i>Contact Us</a>\n</div>";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crest.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(156);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  width: 100%;\n  background-image: url(" + __webpack_require__(157) + ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header .header-text {\n  font-size: 72px;\n  font-family: 'Oswald', sans-serif;\n  color: #ff6226;\n  text-transform: uppercase;\n  padding: 25px;\n  margin: 0;\n  letter-spacing: 2px;\n  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;\n}\n.header .crest {\n  max-height: 80px;\n  max-width: 50px;\n}\n.ui.menu {\n  margin-top: 0;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n", ""]);
	
	// exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/header-background.jpg";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var MenuMobileComponent = (function () {
	    function MenuMobileComponent() {
	    }
	    /**
	     * Initialize our mobile menu dropdown.
	     */
	    MenuMobileComponent.prototype.ngAfterViewInit = function () {
	        // $(this.teamDropdown.nativeElement).dropdown({});
	        // $(this.historyDropdown.nativeElement).dropdown({});
	        $(this.mobileDropdown.nativeElement).dropdown({});
	    };
	    return MenuMobileComponent;
	}());
	__decorate([
	    core_1.ViewChild('teamDropdown'),
	    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
	], MenuMobileComponent.prototype, "teamDropdown", void 0);
	__decorate([
	    core_1.ViewChild('historyDropdown'),
	    __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
	], MenuMobileComponent.prototype, "historyDropdown", void 0);
	__decorate([
	    core_1.ViewChild('mobileDropdown'),
	    __metadata("design:type", typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object)
	], MenuMobileComponent.prototype, "mobileDropdown", void 0);
	MenuMobileComponent = __decorate([
	    core_1.Component({
	        selector: 'menu-mobile',
	        template: __webpack_require__(159),
	        styles: [__webpack_require__(160)]
	    }),
	    __metadata("design:paramtypes", [])
	], MenuMobileComponent);
	exports.MenuMobileComponent = MenuMobileComponent;
	var _a, _b, _c;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(130)))

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	module.exports = "<!--Header/Menu-->\n<div class=\"header\">\n    <div #mobileDropdown class=\"ui inline dropdown\">\n        <h1 class=\"header-text\">Illinois Ultimate</h1>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <a routerLink=\"/home\"               [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"home icon\"></i>Home</a>\n            <a routerLink=\"/about\"              [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"info icon\"></i>About Us</a>\n            <a routerLink=\"/prospects\"          [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"child icon\"></i>Prospective Players</a>\n            <a routerLink=\"/practice\"           [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"soccer icon\"></i>Practice</a>\n            <a routerLink=\"/tournaments/2017\"   [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"calendar icon\"></i>Tournaments</a>\n            <a routerLink=\"/roster/2017\"        [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"ordered list icon\"></i>Roster</a>\n            <a routerLink=\"/absent\"             [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"remove icon\"></i>Absent Form</a>\n            <a routerLink=\"/history/2016\"       [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"undo icon\"></i>Team History</a>\n            <a routerLink=\"/awards\"             [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"trophy icon\"></i>Awards</a>\n            <a routerLink=\"/results\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"archive icon\"></i>Past Results</a>\n            <a routerLink=\"/blog\"               [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"comment icon\"></i>Blog</a>\n            <a routerLink=\"/contact\"            [routerLinkActive]=\"['active']\" class=\"item\"><i class=\"mail icon\"></i>Contact Us</a>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(161);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".header {\n  width: 100%;\n  background-image: url(" + __webpack_require__(157) + ");\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.header .ui.dropdown {\n  text-align: center;\n}\n.header .header-text {\n  font-size: 72px;\n  font-family: 'Oswald', sans-serif;\n  color: #ff6226;\n  text-transform: uppercase;\n  padding: 10px;\n  margin: 0;\n  letter-spacing: 2px;\n  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;\n}\n.header .dropdown.icon {\n  font-size: 20px;\n  color: white;\n}\n.header .menu {\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var LeftSidebarComponent = (function () {
	    function LeftSidebarComponent() {
	    }
	    LeftSidebarComponent.prototype.ngAfterViewInit = function () {
	        this.initializeTwitterWidget();
	    };
	    /**
	     * Twitter script for initializing our Twitter Timeline widget
	     */
	    LeftSidebarComponent.prototype.initializeTwitterWidget = function () {
	        !function (d, s, id) {
	            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
	            if (!d.getElementById(id)) {
	                js = d.createElement(s);
	                js.id = id;
	                js.src = p + "://platform.twitter.com/widgets.js";
	                fjs.parentNode.insertBefore(js, fjs);
	            }
	        }(document, "script", "twitter-wjs");
	    };
	    return LeftSidebarComponent;
	}());
	LeftSidebarComponent = __decorate([
	    core_1.Component({
	        selector: 'left-sidebar',
	        template: __webpack_require__(163),
	        styles: [__webpack_require__(164)]
	    }),
	    __metadata("design:paramtypes", [])
	], LeftSidebarComponent);
	exports.LeftSidebarComponent = LeftSidebarComponent;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ui segment twitter-sidebar\">\n    <a class=\"twitter-timeline\" height=\"500px\" href=\"https://twitter.com/IlliniUlti\" data-widget-id=\"605414836369883136\">Tweets by @IlliniUlti</a>\n</div>";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(165);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".twitter-sidebar {\n  padding: 0;\n  max-width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);
	
	// exports


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var RightSidebarComponent = (function () {
	    function RightSidebarComponent() {
	    }
	    RightSidebarComponent.prototype.ngOnInit = function () { };
	    return RightSidebarComponent;
	}());
	RightSidebarComponent = __decorate([
	    core_1.Component({
	        selector: 'right-sidebar',
	        template: __webpack_require__(167),
	        styles: [__webpack_require__(171)]
	    }),
	    __metadata("design:paramtypes", [])
	], RightSidebarComponent);
	exports.RightSidebarComponent = RightSidebarComponent;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<!--Paypal Sidebar-->\n<div class=\"ui segment paypal-sidebar\">\n    <h2 class=\"ui header\">Help Out Illinois Ultimate!</h2>\n\n    <p>Illinois Ultimate is mostly student-funded, help us out by donating!</p>\n    <a href=\"https://www.paypal.me/illinoisUltimate\" target=\"_blank\">\n        <img class=\"paypal-donate hvr-grow\" src=\"" + __webpack_require__(168) + "\"/>\n    </a>\n</div>\n<!--Social Media Icons-->\n<a href=\"https://www.facebook.com/IllinoisUltimate\" target=\"_blank\">\n    <img class=\"social-media-button hvr-sink\" src=\"" + __webpack_require__(169) + "\"/>\n</a>\n<a href=\"https://twitter.com/illiniulti\" target=\"_blank\">\n    <img class=\"social-media-button hvr-sink\" src=\"" + __webpack_require__(170) + "\"/>\n</a>";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/paypal-donate.png";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/facebook-button.png";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/twitter-button.png";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(172);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".paypal-sidebar {\n  max-width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.paypal-sidebar p {\n  text-indent: 0;\n  margin-bottom: 0;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.paypal-donate {\n  width: 100px;\n}\n.ui.header {\n  margin-bottom: 0;\n}\n.social-media-button {\n  width: 40%;\n  max-width: 70px;\n  display: inline-block;\n  margin: 3px;\n  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);\n  border-radius: 0.28571429em;\n}\n", ""]);
	
	// exports


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var PageFrameComponent = (function () {
	    function PageFrameComponent() {
	    }
	    PageFrameComponent.prototype.ngOnInit = function () { };
	    return PageFrameComponent;
	}());
	PageFrameComponent = __decorate([
	    core_1.Component({
	        selector: 'page-frame',
	        template: __webpack_require__(174),
	        styles: [__webpack_require__(175)]
	    }),
	    __metadata("design:paramtypes", [])
	], PageFrameComponent);
	exports.PageFrameComponent = PageFrameComponent;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports = "<!--Header-->\n<menu-desktop class=\"menu-desktop\"></menu-desktop>\n<menu-mobile class=\"menu-mobile\"></menu-mobile>\n\n<!--Content-->\n<div class=\"main-container\">\n    <div class=\"left-sidebar\">\n        <left-sidebar></left-sidebar>\n    </div>\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"right-sidebar\">\n        <right-sidebar></right-sidebar>\n    </div>\n    <footer></footer>\n</div>";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(176);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".menu-desktop,\n.left-sidebar,\n.right-sidebar {\n  display: none;\n}\n.main-container {\n  margin-bottom: 50px;\n}\n@media screen and (min-width: 768px) {\n  .main-container {\n    display: flex;\n  }\n  .menu-mobile {\n    display: none;\n  }\n  .menu-desktop,\n  .left-sidebar,\n  .right-sidebar {\n    display: block;\n  }\n  .main-content {\n    padding: 0 10px;\n    width: 100%;\n  }\n  .left-sidebar {\n    margin-left: 10px;\n    flex: 0 0 200px;\n  }\n  .right-sidebar {\n    margin-right: 10px;\n    margin-left: auto;\n    flex: 0 0 150px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .main-content {\n    padding: 0 30px;\n  }\n  .left-sidebar {\n    margin-left: 50px;\n  }\n  .right-sidebar {\n    margin-right: 50px;\n    flex: 0 0 200px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .main-content {\n    padding: 0 50px;\n  }\n  .left-sidebar {\n    margin-left: 80px;\n  }\n  .right-sidebar {\n    margin-right: 80px;\n  }\n}\n", ""]);
	
	// exports


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(7);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent.prototype.ngAfterViewInit = function () { };
	    return FooterComponent;
	}());
	FooterComponent = __decorate([
	    core_1.Component({
	        selector: 'footer',
	        template: __webpack_require__(178),
	        styles: [__webpack_require__(179)]
	    }),
	    __metadata("design:paramtypes", [])
	], FooterComponent);
	exports.FooterComponent = FooterComponent;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ui menu\">\n    <p>For support or to report website issues, email the admin at wcjphoenix@gmail.com or the creator at nick.prozorovsky@gmail.com</p>\n</div>";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output
	
	// Get the styles
	var styles = __webpack_require__(180);
	
	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(38)();
	// imports
	
	
	// module
	exports.push([module.id, ".ui.menu {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n}\np {\n  margin: 0 auto;\n  font-size: 10px;\n}\n@media screen and (min-width: 768px) {\n  p {\n    font-size: 12px;\n  }\n}\n", ""]);
	
	// exports


/***/ })
]);