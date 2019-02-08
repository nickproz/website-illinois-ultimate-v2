/******/ (function(modules) {
    // webpackBootstrap
    /******/ // install a JSONP callback for chunk loading
    /******/ var parentJsonpFunction = window['webpackJsonp'];
    /******/ window['webpackJsonp'] = function webpackJsonpCallback(chunkIds, moreModules) {
        /******/ // add "moreModules" to the modules object,
        /******/ // then flag all "chunkIds" as loaded and fire callback
        /******/ var moduleId,
            chunkId,
            i = 0,
            callbacks = [];
        /******/ for (; i < chunkIds.length; i++) {
            /******/ chunkId = chunkIds[i];
            /******/ if (installedChunks[chunkId]) /******/ callbacks.push.apply(callbacks, installedChunks[chunkId]);
            /******/ installedChunks[chunkId] = 0;
            /******/
        }
        /******/ for (moduleId in moreModules) {
            /******/ if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                /******/ modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/ if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
        /******/ while (callbacks.length) /******/ callbacks.shift().call(null, __webpack_require__);
        /******/ if (moreModules[0]) {
            /******/ installedModules[0] = 0;
            /******/ return __webpack_require__(0);
            /******/
        }
        /******/
    }; // The module cache
    /******/
    /******/ /******/ var installedModules = {}; // object to store loaded and loading chunks // "0" means "already loaded" // Array means "loading", array contains callbacks
    /******/
    /******/ /******/ /******/ /******/ var installedChunks = {
        /******/ 1: 0
        /******/
    }; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)
        /******/
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ exports: {},
            /******/ id: moduleId,
            /******/ loaded: false
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
        /******/
        /******/ /******/ module.loaded = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // This file contains only the entry chunk. // The chunk loading function for additional chunks
    /******/
    /******/ /******/ /******/ __webpack_require__.e = function requireEnsure(chunkId, callback) {
        /******/ // "0" is the signal for "already loaded"
        /******/ if (installedChunks[chunkId] === 0) /******/ return callback.call(null, __webpack_require__); // an array means "currently loading".
        /******/
        /******/ /******/ if (installedChunks[chunkId] !== undefined) {
            /******/ installedChunks[chunkId].push(callback);
            /******/
        } else {
            /******/ // start chunk loading
            /******/ installedChunks[chunkId] = [callback];
            /******/ var head = document.getElementsByTagName('head')[0];
            /******/ var script = document.createElement('script');
            /******/ script.type = 'text/javascript';
            /******/ script.charset = 'utf-8';
            /******/ script.async = true;
            /******/
            /******/ script.src = __webpack_require__.p + '' + chunkId + '.chunk.js';
            /******/ head.appendChild(script);
            /******/
        }
        /******/
    }; // expose the modules object (__webpack_modules__)
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = 'http://localhost:3000/'; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__(0);
    /******/
})(
    /************************************************************************/
    /******/ [
        /* 0 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(process) {
                'use strict';
                __webpack_require__(183);
                __webpack_require__(439);
                __webpack_require__(451);
                /*
	 Standard polyfills we require to run Angular applications in modern browsers
	*/
                if (process.env.ENV === 'prod') {
                } else {
                    // Development
                    // Stack trace tools
                    Error['stackTraceLimit'] = Infinity;
                    __webpack_require__(452);
                }

                /* WEBPACK VAR INJECTION */
            }.call(exports, __webpack_require__(5)));

            /***/
        },
        ,
        ,
        ,
        ,
        /* 1 */ /* 2 */ /* 3 */ /* 4 */ /* 5 */
        /***/ function(module, exports) {
            // shim for using process in browser
            var process = (module.exports = {});

            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.

            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function() {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }

            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;

            process.listeners = function(name) {
                return [];
            };

            process.binding = function(name) {
                throw new Error('process.binding is not supported');
            };

            process.cwd = function() {
                return '/';
            };
            process.chdir = function(dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function() {
                return 0;
            };

            /***/
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        /* 6 */ /* 7 */ /* 8 */ /* 9 */ /* 10 */ /* 11 */ /* 12 */ /* 13 */ /* 14 */ /* 15 */ /* 16 */ /* 17 */ /* 18 */ /* 19 */ /* 20 */ /* 21 */ /* 22 */ /* 23 */ /* 24 */ /* 25 */ /* 26 */ /* 27 */ /* 28 */ /* 29 */ /* 30 */ /* 31 */ /* 32 */ /* 33 */ /* 34 */ /* 35 */ /* 36 */ /* 37 */ /* 38 */ /* 39 */ /* 40 */ /* 41 */ /* 42 */ /* 43 */ /* 44 */ /* 45 */ /* 46 */ /* 47 */ /* 48 */ /* 49 */ /* 50 */ /* 51 */ /* 52 */ /* 53 */ /* 54 */ /* 55 */ /* 56 */ /* 57 */ /* 58 */ /* 59 */ /* 60 */ /* 61 */ /* 62 */ /* 63 */ /* 64 */ /* 65 */ /* 66 */ /* 67 */ /* 68 */ /* 69 */ /* 70 */ /* 71 */ /* 72 */ /* 73 */ /* 74 */ /* 75 */ /* 76 */ /* 77 */ /* 78 */ /* 79 */ /* 80 */ /* 81 */ /* 82 */ /* 83 */ /* 84 */ /* 85 */ /* 86 */ /* 87 */ /* 88 */ /* 89 */ /* 90 */ /* 91 */ /* 92 */ /* 93 */ /* 94 */ /* 95 */ /* 96 */ /* 97 */ /* 98 */ /* 99 */ /* 100 */ /* 101 */ /* 102 */ /* 103 */ /* 104 */ /* 105 */ /* 106 */ /* 107 */ /* 108 */ /* 109 */ /* 110 */ /* 111 */ /* 112 */ /* 113 */ /* 114 */ /* 115 */ /* 116 */ /* 117 */ /* 118 */ /* 119 */ /* 120 */ /* 121 */ /* 122 */ /* 123 */ /* 124 */ /* 125 */ /* 126 */ /* 127 */ /* 128 */ /* 129 */ /* 130 */ /* 131 */ /* 132 */ /* 133 */ /* 134 */ /* 135 */ /* 136 */ /* 137 */ /* 138 */ /* 139 */ /* 140 */ /* 141 */ /* 142 */ /* 143 */ /* 144 */ /* 145 */ /* 146 */ /* 147 */ /* 148 */ /* 149 */ /* 150 */ /* 151 */ /* 152 */ /* 153 */ /* 154 */ /* 155 */ /* 156 */ /* 157 */ /* 158 */ /* 159 */ /* 160 */ /* 161 */ /* 162 */ /* 163 */ /* 164 */ /* 165 */ /* 166 */ /* 167 */ /* 168 */ /* 169 */ /* 170 */ /* 171 */ /* 172 */ /* 173 */ /* 174 */ /* 175 */ /* 176 */ /* 177 */ /* 178 */ /* 179 */ /* 180 */ /* 181 */ /* 182 */ /* 183 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(184);
            __webpack_require__(232);
            __webpack_require__(233);
            __webpack_require__(234);
            __webpack_require__(235);
            __webpack_require__(237);
            __webpack_require__(240);
            __webpack_require__(241);
            __webpack_require__(242);
            __webpack_require__(243);
            __webpack_require__(244);
            __webpack_require__(245);
            __webpack_require__(246);
            __webpack_require__(247);
            __webpack_require__(248);
            __webpack_require__(250);
            __webpack_require__(252);
            __webpack_require__(254);
            __webpack_require__(256);
            __webpack_require__(259);
            __webpack_require__(260);
            __webpack_require__(261);
            __webpack_require__(265);
            __webpack_require__(267);
            __webpack_require__(269);
            __webpack_require__(272);
            __webpack_require__(273);
            __webpack_require__(274);
            __webpack_require__(275);
            __webpack_require__(277);
            __webpack_require__(278);
            __webpack_require__(279);
            __webpack_require__(280);
            __webpack_require__(281);
            __webpack_require__(282);
            __webpack_require__(283);
            __webpack_require__(285);
            __webpack_require__(286);
            __webpack_require__(287);
            __webpack_require__(289);
            __webpack_require__(290);
            __webpack_require__(291);
            __webpack_require__(293);
            __webpack_require__(295);
            __webpack_require__(296);
            __webpack_require__(297);
            __webpack_require__(298);
            __webpack_require__(299);
            __webpack_require__(300);
            __webpack_require__(301);
            __webpack_require__(302);
            __webpack_require__(303);
            __webpack_require__(304);
            __webpack_require__(305);
            __webpack_require__(306);
            __webpack_require__(307);
            __webpack_require__(312);
            __webpack_require__(313);
            __webpack_require__(317);
            __webpack_require__(318);
            __webpack_require__(319);
            __webpack_require__(320);
            __webpack_require__(322);
            __webpack_require__(323);
            __webpack_require__(324);
            __webpack_require__(325);
            __webpack_require__(326);
            __webpack_require__(327);
            __webpack_require__(328);
            __webpack_require__(329);
            __webpack_require__(330);
            __webpack_require__(331);
            __webpack_require__(332);
            __webpack_require__(333);
            __webpack_require__(334);
            __webpack_require__(335);
            __webpack_require__(336);
            __webpack_require__(338);
            __webpack_require__(339);
            __webpack_require__(341);
            __webpack_require__(342);
            __webpack_require__(348);
            __webpack_require__(349);
            __webpack_require__(351);
            __webpack_require__(352);
            __webpack_require__(353);
            __webpack_require__(357);
            __webpack_require__(358);
            __webpack_require__(359);
            __webpack_require__(360);
            __webpack_require__(361);
            __webpack_require__(363);
            __webpack_require__(364);
            __webpack_require__(365);
            __webpack_require__(366);
            __webpack_require__(369);
            __webpack_require__(371);
            __webpack_require__(372);
            __webpack_require__(373);
            __webpack_require__(375);
            __webpack_require__(377);
            __webpack_require__(379);
            __webpack_require__(381);
            __webpack_require__(382);
            __webpack_require__(383);
            __webpack_require__(387);
            __webpack_require__(388);
            __webpack_require__(389);
            __webpack_require__(391);
            __webpack_require__(401);
            __webpack_require__(405);
            __webpack_require__(406);
            __webpack_require__(408);
            __webpack_require__(409);
            __webpack_require__(413);
            __webpack_require__(414);
            __webpack_require__(416);
            __webpack_require__(417);
            __webpack_require__(418);
            __webpack_require__(419);
            __webpack_require__(420);
            __webpack_require__(421);
            __webpack_require__(422);
            __webpack_require__(423);
            __webpack_require__(424);
            __webpack_require__(425);
            __webpack_require__(426);
            __webpack_require__(427);
            __webpack_require__(428);
            __webpack_require__(429);
            __webpack_require__(430);
            __webpack_require__(431);
            __webpack_require__(432);
            __webpack_require__(433);
            __webpack_require__(434);
            __webpack_require__(436);
            __webpack_require__(437);
            __webpack_require__(438);
            module.exports = __webpack_require__(190);

            /***/
        },
        /* 184 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // ECMAScript 6 symbols shim
            var global = __webpack_require__(185);
            var has = __webpack_require__(186);
            var DESCRIPTORS = __webpack_require__(187);
            var $export = __webpack_require__(189);
            var redefine = __webpack_require__(199);
            var META = __webpack_require__(203).KEY;
            var $fails = __webpack_require__(188);
            var shared = __webpack_require__(204);
            var setToStringTag = __webpack_require__(206);
            var uid = __webpack_require__(200);
            var wks = __webpack_require__(207);
            var wksExt = __webpack_require__(208);
            var wksDefine = __webpack_require__(209);
            var enumKeys = __webpack_require__(210);
            var isArray = __webpack_require__(225);
            var anObject = __webpack_require__(193);
            var isObject = __webpack_require__(194);
            var toIObject = __webpack_require__(213);
            var toPrimitive = __webpack_require__(197);
            var createDesc = __webpack_require__(198);
            var _create = __webpack_require__(226);
            var gOPNExt = __webpack_require__(229);
            var $GOPD = __webpack_require__(231);
            var $DP = __webpack_require__(192);
            var $keys = __webpack_require__(211);
            var gOPD = $GOPD.f;
            var dP = $DP.f;
            var gOPN = gOPNExt.f;
            var $Symbol = global.Symbol;
            var $JSON = global.JSON;
            var _stringify = $JSON && $JSON.stringify;
            var PROTOTYPE = 'prototype';
            var HIDDEN = wks('_hidden');
            var TO_PRIMITIVE = wks('toPrimitive');
            var isEnum = {}.propertyIsEnumerable;
            var SymbolRegistry = shared('symbol-registry');
            var AllSymbols = shared('symbols');
            var OPSymbols = shared('op-symbols');
            var ObjectProto = Object[PROTOTYPE];
            var USE_NATIVE = typeof $Symbol == 'function';
            var QObject = global.QObject;
            // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
            var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

            // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
            var setSymbolDesc =
                DESCRIPTORS &&
                $fails(function() {
                    return (
                        _create(
                            dP({}, 'a', {
                                get: function() {
                                    return dP(this, 'a', { value: 7 }).a;
                                }
                            })
                        ).a != 7
                    );
                })
                    ? function(it, key, D) {
                          var protoDesc = gOPD(ObjectProto, key);
                          if (protoDesc) delete ObjectProto[key];
                          dP(it, key, D);
                          if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
                      }
                    : dP;

            var wrap = function(tag) {
                var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
                sym._k = tag;
                return sym;
            };

            var isSymbol =
                USE_NATIVE && typeof $Symbol.iterator == 'symbol'
                    ? function(it) {
                          return typeof it == 'symbol';
                      }
                    : function(it) {
                          return it instanceof $Symbol;
                      };

            var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                    if (!D.enumerable) {
                        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                        it[HIDDEN][key] = true;
                    } else {
                        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                        D = _create(D, { enumerable: createDesc(0, false) });
                    }
                    return setSymbolDesc(it, key, D);
                }
                return dP(it, key, D);
            };
            var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys((P = toIObject(P)));
                var i = 0;
                var l = keys.length;
                var key;
                while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
                return it;
            };
            var $create = function create(it, P) {
                return P === undefined ? _create(it) : $defineProperties(_create(it), P);
            };
            var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, (key = toPrimitive(key, true)));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                return E || !has(this, key) || !has(AllSymbols, key) || (has(this, HIDDEN) && this[HIDDEN][key]) ? E : true;
            };
            var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                return D;
            };
            var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                    if (!has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META) result.push(key);
                }
                return result;
            };
            var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto;
                var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                    if (has(AllSymbols, (key = names[i++])) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
                }
                return result;
            };

            // 19.4.1.1 Symbol([description])
            if (!USE_NATIVE) {
                $Symbol = function Symbol() {
                    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                    var $set = function(value) {
                        if (this === ObjectProto) $set.call(OPSymbols, value);
                        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                        setSymbolDesc(this, tag, createDesc(1, value));
                    };
                    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
                    return wrap(tag);
                };
                redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                    return this._k;
                });

                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                __webpack_require__(230).f = gOPNExt.f = $getOwnPropertyNames;
                __webpack_require__(224).f = $propertyIsEnumerable;
                __webpack_require__(223).f = $getOwnPropertySymbols;

                if (DESCRIPTORS && !__webpack_require__(205)) {
                    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                }

                wksExt.f = function(name) {
                    return wrap(wks(name));
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

            for (
                var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),
                    j = 0;
                es6Symbols.length > j;

            )
                wks(es6Symbols[j++]);

            for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);

            $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                // 19.4.2.1 Symbol.for(key)
                for: function(key) {
                    return has(SymbolRegistry, (key += '')) ? SymbolRegistry[key] : (SymbolRegistry[key] = $Symbol(key));
                },
                // 19.4.2.5 Symbol.keyFor(sym)
                keyFor: function keyFor(sym) {
                    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
                },
                useSetter: function() {
                    setter = true;
                },
                useSimple: function() {
                    setter = false;
                }
            });

            $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                // 19.1.2.2 Object.create(O [, Properties])
                create: $create,
                // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                defineProperty: $defineProperty,
                // 19.1.2.3 Object.defineProperties(O, Properties)
                defineProperties: $defineProperties,
                // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                // 19.1.2.7 Object.getOwnPropertyNames(O)
                getOwnPropertyNames: $getOwnPropertyNames,
                // 19.1.2.8 Object.getOwnPropertySymbols(O)
                getOwnPropertySymbols: $getOwnPropertySymbols
            });

            // 24.3.2 JSON.stringify(value [, replacer [, space]])
            $JSON &&
                $export(
                    $export.S +
                        $export.F *
                            (!USE_NATIVE ||
                                $fails(function() {
                                    var S = $Symbol();
                                    // MS Edge converts symbol values to JSON as {}
                                    // WebKit converts symbol values to JSON as null
                                    // V8 throws on boxed symbols
                                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                                })),
                    'JSON',
                    {
                        stringify: function stringify(it) {
                            var args = [it];
                            var i = 1;
                            var replacer, $replacer;
                            while (arguments.length > i) args.push(arguments[i++]);
                            $replacer = replacer = args[1];
                            if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
                            if (!isArray(replacer))
                                replacer = function(key, value) {
                                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                                    if (!isSymbol(value)) return value;
                                };
                            args[1] = replacer;
                            return _stringify.apply($JSON, args);
                        }
                    }
                );

            // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(191)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            // 19.4.3.5 Symbol.prototype[@@toStringTag]
            setToStringTag($Symbol, 'Symbol');
            // 20.2.1.9 Math[@@toStringTag]
            setToStringTag(Math, 'Math', true);
            // 24.3.3 JSON[@@toStringTag]
            setToStringTag(global.JSON, 'JSON', true);

            /***/
        },
        /* 185 */
        /***/ function(module, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = (module.exports =
                typeof window != 'undefined' && window.Math == Math
                    ? window
                    : typeof self != 'undefined' && self.Math == Math
                    ? self
                    : // eslint-disable-next-line no-new-func
                      Function('return this')());
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

            /***/
        },
        /* 186 */
        /***/ function(module, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };

            /***/
        },
        /* 187 */
        /***/ function(module, exports, __webpack_require__) {
            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(188)(function() {
                return (
                    Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a != 7
                );
            });

            /***/
        },
        /* 188 */
        /***/ function(module, exports) {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };

            /***/
        },
        /* 189 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var core = __webpack_require__(190);
            var hide = __webpack_require__(191);
            var redefine = __webpack_require__(199);
            var ctx = __webpack_require__(201);
            var PROTOTYPE = 'prototype';

            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                var key, own, out, exp;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    // export native or passed
                    out = (own ? target : source)[key];
                    // bind timers to global for call from export context
                    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // extend global
                    if (target) redefine(target, key, out, type & $export.U);
                    // export
                    if (exports[key] != out) hide(exports, key, exp);
                    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                }
            };
            global.core = core;
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;

            /***/
        },
        /* 190 */
        /***/ function(module, exports) {
            var core = (module.exports = { version: '2.6.3' });
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

            /***/
        },
        /* 191 */
        /***/ function(module, exports, __webpack_require__) {
            var dP = __webpack_require__(192);
            var createDesc = __webpack_require__(198);
            module.exports = __webpack_require__(187)
                ? function(object, key, value) {
                      return dP.f(object, key, createDesc(1, value));
                  }
                : function(object, key, value) {
                      object[key] = value;
                      return object;
                  };

            /***/
        },
        /* 192 */
        /***/ function(module, exports, __webpack_require__) {
            var anObject = __webpack_require__(193);
            var IE8_DOM_DEFINE = __webpack_require__(195);
            var toPrimitive = __webpack_require__(197);
            var dP = Object.defineProperty;

            exports.f = __webpack_require__(187)
                ? Object.defineProperty
                : function defineProperty(O, P, Attributes) {
                      anObject(O);
                      P = toPrimitive(P, true);
                      anObject(Attributes);
                      if (IE8_DOM_DEFINE)
                          try {
                              return dP(O, P, Attributes);
                          } catch (e) {
                              /* empty */
                          }
                      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                      if ('value' in Attributes) O[P] = Attributes.value;
                      return O;
                  };

            /***/
        },
        /* 193 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(194);
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };

            /***/
        },
        /* 194 */
        /***/ function(module, exports) {
            module.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };

            /***/
        },
        /* 195 */
        /***/ function(module, exports, __webpack_require__) {
            module.exports =
                !__webpack_require__(187) &&
                !__webpack_require__(188)(function() {
                    return (
                        Object.defineProperty(__webpack_require__(196)('div'), 'a', {
                            get: function() {
                                return 7;
                            }
                        }).a != 7
                    );
                });

            /***/
        },
        /* 196 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(194);
            var document = __webpack_require__(185).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {};
            };

            /***/
        },
        /* 197 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(194);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject((val = fn.call(it)))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject((val = fn.call(it)))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject((val = fn.call(it)))) return val;
                throw TypeError("Can't convert object to primitive value");
            };

            /***/
        },
        /* 198 */
        /***/ function(module, exports) {
            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };

            /***/
        },
        /* 199 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var hide = __webpack_require__(191);
            var has = __webpack_require__(186);
            var SRC = __webpack_require__(200)('src');
            var TO_STRING = 'toString';
            var $toString = Function[TO_STRING];
            var TPL = ('' + $toString).split(TO_STRING);

            __webpack_require__(190).inspectSource = function(it) {
                return $toString.call(it);
            };

            (module.exports = function(O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction) has(val, 'name') || hide(val, 'name', key);
                if (O[key] === val) return;
                if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                if (O === global) {
                    O[key] = val;
                } else if (!safe) {
                    delete O[key];
                    hide(O, key, val);
                } else if (O[key]) {
                    O[key] = val;
                } else {
                    hide(O, key, val);
                }
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return (typeof this == 'function' && this[SRC]) || $toString.call(this);
            });

            /***/
        },
        /* 200 */
        /***/ function(module, exports) {
            var id = 0;
            var px = Math.random();
            module.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };

            /***/
        },
        /* 201 */
        /***/ function(module, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(202);
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function(/* ...args */) {
                    return fn.apply(that, arguments);
                };
            };

            /***/
        },
        /* 202 */
        /***/ function(module, exports) {
            module.exports = function(it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };

            /***/
        },
        /* 203 */
        /***/ function(module, exports, __webpack_require__) {
            var META = __webpack_require__(200)('meta');
            var isObject = __webpack_require__(194);
            var has = __webpack_require__(186);
            var setDesc = __webpack_require__(192).f;
            var id = 0;
            var isExtensible =
                Object.isExtensible ||
                function() {
                    return true;
                };
            var FREEZE = !__webpack_require__(188)(function() {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    }
                });
            };
            var fastKey = function(it, create) {
                // return primitive with prefix
                if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }
                return it[META].i;
            };
            var getWeak = function(it, create) {
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }
                return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                return it;
            };
            var meta = (module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            });

            /***/
        },
        /* 204 */
        /***/ function(module, exports, __webpack_require__) {
            var core = __webpack_require__(190);
            var global = __webpack_require__(185);
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});

            (module.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })('versions', []).push({
                version: core.version,
                mode: __webpack_require__(205) ? 'pure' : 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });

            /***/
        },
        /* 205 */
        /***/ function(module, exports) {
            module.exports = false;

            /***/
        },
        /* 206 */
        /***/ function(module, exports, __webpack_require__) {
            var def = __webpack_require__(192).f;
            var has = __webpack_require__(186);
            var TAG = __webpack_require__(207)('toStringTag');

            module.exports = function(it, tag, stat) {
                if (it && !has((it = stat ? it : it.prototype), TAG)) def(it, TAG, { configurable: true, value: tag });
            };

            /***/
        },
        /* 207 */
        /***/ function(module, exports, __webpack_require__) {
            var store = __webpack_require__(204)('wks');
            var uid = __webpack_require__(200);
            var Symbol = __webpack_require__(185).Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = (module.exports = function(name) {
                return store[name] || (store[name] = (USE_SYMBOL && Symbol[name]) || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            });

            $exports.store = store;

            /***/
        },
        /* 208 */
        /***/ function(module, exports, __webpack_require__) {
            exports.f = __webpack_require__(207);

            /***/
        },
        /* 209 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var core = __webpack_require__(190);
            var LIBRARY = __webpack_require__(205);
            var wksExt = __webpack_require__(208);
            var defineProperty = __webpack_require__(192).f;
            module.exports = function(name) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
            };

            /***/
        },
        /* 210 */
        /***/ function(module, exports, __webpack_require__) {
            // all enumerable object keys, includes symbols
            var getKeys = __webpack_require__(211);
            var gOPS = __webpack_require__(223);
            var pIE = __webpack_require__(224);
            module.exports = function(it) {
                var result = getKeys(it);
                var getSymbols = gOPS.f;
                if (getSymbols) {
                    var symbols = getSymbols(it);
                    var isEnum = pIE.f;
                    var i = 0;
                    var key;
                    while (symbols.length > i) if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
                }
                return result;
            };

            /***/
        },
        /* 211 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__(212);
            var enumBugKeys = __webpack_require__(222);

            module.exports =
                Object.keys ||
                function keys(O) {
                    return $keys(O, enumBugKeys);
                };

            /***/
        },
        /* 212 */
        /***/ function(module, exports, __webpack_require__) {
            var has = __webpack_require__(186);
            var toIObject = __webpack_require__(213);
            var arrayIndexOf = __webpack_require__(217)(false);
            var IE_PROTO = __webpack_require__(221)('IE_PROTO');

            module.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while (names.length > i)
                    if (has(O, (key = names[i++]))) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                return result;
            };

            /***/
        },
        /* 213 */
        /***/ function(module, exports, __webpack_require__) {
            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(214);
            var defined = __webpack_require__(216);
            module.exports = function(it) {
                return IObject(defined(it));
            };

            /***/
        },
        /* 214 */
        /***/ function(module, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(215);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0)
                ? Object
                : function(it) {
                      return cof(it) == 'String' ? it.split('') : Object(it);
                  };

            /***/
        },
        /* 215 */
        /***/ function(module, exports) {
            var toString = {}.toString;

            module.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };

            /***/
        },
        /* 216 */
        /***/ function(module, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };

            /***/
        },
        /* 217 */
        /***/ function(module, exports, __webpack_require__) {
            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(213);
            var toLength = __webpack_require__(218);
            var toAbsoluteIndex = __webpack_require__(220);
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        }
                    else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                    return !IS_INCLUDES && -1;
                };
            };

            /***/
        },
        /* 218 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.15 ToLength
            var toInteger = __webpack_require__(219);
            var min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };

            /***/
        },
        /* 219 */
        /***/ function(module, exports) {
            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function(it) {
                return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
            };

            /***/
        },
        /* 220 */
        /***/ function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(219);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };

            /***/
        },
        /* 221 */
        /***/ function(module, exports, __webpack_require__) {
            var shared = __webpack_require__(204)('keys');
            var uid = __webpack_require__(200);
            module.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
            };

            /***/
        },
        /* 222 */
        /***/ function(module, exports) {
            // IE 8- don't enum bug keys
            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

            /***/
        },
        /* 223 */
        /***/ function(module, exports) {
            exports.f = Object.getOwnPropertySymbols;

            /***/
        },
        /* 224 */
        /***/ function(module, exports) {
            exports.f = {}.propertyIsEnumerable;

            /***/
        },
        /* 225 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(215);
            module.exports =
                Array.isArray ||
                function isArray(arg) {
                    return cof(arg) == 'Array';
                };

            /***/
        },
        /* 226 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__(193);
            var dPs = __webpack_require__(227);
            var enumBugKeys = __webpack_require__(222);
            var IE_PROTO = __webpack_require__(221)('IE_PROTO');
            var Empty = function() {
                /* empty */
            };
            var PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__(196)('iframe');
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__(228).appendChild(iframe);
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

            module.exports =
                Object.create ||
                function create(O, Properties) {
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

            /***/
        },
        /* 227 */
        /***/ function(module, exports, __webpack_require__) {
            var dP = __webpack_require__(192);
            var anObject = __webpack_require__(193);
            var getKeys = __webpack_require__(211);

            module.exports = __webpack_require__(187)
                ? Object.defineProperties
                : function defineProperties(O, Properties) {
                      anObject(O);
                      var keys = getKeys(Properties);
                      var length = keys.length;
                      var i = 0;
                      var P;
                      while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
                      return O;
                  };

            /***/
        },
        /* 228 */
        /***/ function(module, exports, __webpack_require__) {
            var document = __webpack_require__(185).document;
            module.exports = document && document.documentElement;

            /***/
        },
        /* 229 */
        /***/ function(module, exports, __webpack_require__) {
            // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
            var toIObject = __webpack_require__(213);
            var gOPN = __webpack_require__(230).f;
            var toString = {}.toString;

            var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

            var getWindowNames = function(it) {
                try {
                    return gOPN(it);
                } catch (e) {
                    return windowNames.slice();
                }
            };

            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
            };

            /***/
        },
        /* 230 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var $keys = __webpack_require__(212);
            var hiddenKeys = __webpack_require__(222).concat('length', 'prototype');

            exports.f =
                Object.getOwnPropertyNames ||
                function getOwnPropertyNames(O) {
                    return $keys(O, hiddenKeys);
                };

            /***/
        },
        /* 231 */
        /***/ function(module, exports, __webpack_require__) {
            var pIE = __webpack_require__(224);
            var createDesc = __webpack_require__(198);
            var toIObject = __webpack_require__(213);
            var toPrimitive = __webpack_require__(197);
            var has = __webpack_require__(186);
            var IE8_DOM_DEFINE = __webpack_require__(195);
            var gOPD = Object.getOwnPropertyDescriptor;

            exports.f = __webpack_require__(187)
                ? gOPD
                : function getOwnPropertyDescriptor(O, P) {
                      O = toIObject(O);
                      P = toPrimitive(P, true);
                      if (IE8_DOM_DEFINE)
                          try {
                              return gOPD(O, P);
                          } catch (e) {
                              /* empty */
                          }
                      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
                  };

            /***/
        },
        /* 232 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            $export($export.S, 'Object', { create: __webpack_require__(226) });

            /***/
        },
        /* 233 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
            $export($export.S + $export.F * !__webpack_require__(187), 'Object', { defineProperty: __webpack_require__(192).f });

            /***/
        },
        /* 234 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
            $export($export.S + $export.F * !__webpack_require__(187), 'Object', { defineProperties: __webpack_require__(227) });

            /***/
        },
        /* 235 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            var toIObject = __webpack_require__(213);
            var $getOwnPropertyDescriptor = __webpack_require__(231).f;

            __webpack_require__(236)('getOwnPropertyDescriptor', function() {
                return function getOwnPropertyDescriptor(it, key) {
                    return $getOwnPropertyDescriptor(toIObject(it), key);
                };
            });

            /***/
        },
        /* 236 */
        /***/ function(module, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(189);
            var core = __webpack_require__(190);
            var fails = __webpack_require__(188);
            module.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY];
                var exp = {};
                exp[KEY] = exec(fn);
                $export(
                    $export.S +
                        $export.F *
                            fails(function() {
                                fn(1);
                            }),
                    'Object',
                    exp
                );
            };

            /***/
        },
        /* 237 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.9 Object.getPrototypeOf(O)
            var toObject = __webpack_require__(238);
            var $getPrototypeOf = __webpack_require__(239);

            __webpack_require__(236)('getPrototypeOf', function() {
                return function getPrototypeOf(it) {
                    return $getPrototypeOf(toObject(it));
                };
            });

            /***/
        },
        /* 238 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(216);
            module.exports = function(it) {
                return Object(defined(it));
            };

            /***/
        },
        /* 239 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__(186);
            var toObject = __webpack_require__(238);
            var IE_PROTO = __webpack_require__(221)('IE_PROTO');
            var ObjectProto = Object.prototype;

            module.exports =
                Object.getPrototypeOf ||
                function(O) {
                    O = toObject(O);
                    if (has(O, IE_PROTO)) return O[IE_PROTO];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };

            /***/
        },
        /* 240 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(238);
            var $keys = __webpack_require__(211);

            __webpack_require__(236)('keys', function() {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });

            /***/
        },
        /* 241 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            __webpack_require__(236)('getOwnPropertyNames', function() {
                return __webpack_require__(229).f;
            });

            /***/
        },
        /* 242 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.5 Object.freeze(O)
            var isObject = __webpack_require__(194);
            var meta = __webpack_require__(203).onFreeze;

            __webpack_require__(236)('freeze', function($freeze) {
                return function freeze(it) {
                    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
                };
            });

            /***/
        },
        /* 243 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(194);
            var meta = __webpack_require__(203).onFreeze;

            __webpack_require__(236)('seal', function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(meta(it)) : it;
                };
            });

            /***/
        },
        /* 244 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.15 Object.preventExtensions(O)
            var isObject = __webpack_require__(194);
            var meta = __webpack_require__(203).onFreeze;

            __webpack_require__(236)('preventExtensions', function($preventExtensions) {
                return function preventExtensions(it) {
                    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
                };
            });

            /***/
        },
        /* 245 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.12 Object.isFrozen(O)
            var isObject = __webpack_require__(194);

            __webpack_require__(236)('isFrozen', function($isFrozen) {
                return function isFrozen(it) {
                    return isObject(it) ? ($isFrozen ? $isFrozen(it) : false) : true;
                };
            });

            /***/
        },
        /* 246 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.13 Object.isSealed(O)
            var isObject = __webpack_require__(194);

            __webpack_require__(236)('isSealed', function($isSealed) {
                return function isSealed(it) {
                    return isObject(it) ? ($isSealed ? $isSealed(it) : false) : true;
                };
            });

            /***/
        },
        /* 247 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.11 Object.isExtensible(O)
            var isObject = __webpack_require__(194);

            __webpack_require__(236)('isExtensible', function($isExtensible) {
                return function isExtensible(it) {
                    return isObject(it) ? ($isExtensible ? $isExtensible(it) : true) : false;
                };
            });

            /***/
        },
        /* 248 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.3.1 Object.assign(target, source)
            var $export = __webpack_require__(189);

            $export($export.S + $export.F, 'Object', { assign: __webpack_require__(249) });

            /***/
        },
        /* 249 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 19.1.2.1 Object.assign(target, source, ...)
            var getKeys = __webpack_require__(211);
            var gOPS = __webpack_require__(223);
            var pIE = __webpack_require__(224);
            var toObject = __webpack_require__(238);
            var IObject = __webpack_require__(214);
            var $assign = Object.assign;

            // should work with symbols and should have deterministic property order (V8 bug)
            module.exports =
                !$assign ||
                __webpack_require__(188)(function() {
                    var A = {};
                    var B = {};
                    // eslint-disable-next-line no-undef
                    var S = Symbol();
                    var K = 'abcdefghijklmnopqrst';
                    A[S] = 7;
                    K.split('').forEach(function(k) {
                        B[k] = k;
                    });
                    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
                })
                    ? function assign(target, source) {
                          // eslint-disable-line no-unused-vars
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
                              while (length > j) if (isEnum.call(S, (key = keys[j++]))) T[key] = S[key];
                          }
                          return T;
                      }
                    : $assign;

            /***/
        },
        /* 250 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.3.10 Object.is(value1, value2)
            var $export = __webpack_require__(189);
            $export($export.S, 'Object', { is: __webpack_require__(251) });

            /***/
        },
        /* 251 */
        /***/ function(module, exports) {
            // 7.2.9 SameValue(x, y)
            module.exports =
                Object.is ||
                function is(x, y) {
                    // eslint-disable-next-line no-self-compare
                    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
                };

            /***/
        },
        /* 252 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.1.3.19 Object.setPrototypeOf(O, proto)
            var $export = __webpack_require__(189);
            $export($export.S, 'Object', { setPrototypeOf: __webpack_require__(253).set });

            /***/
        },
        /* 253 */
        /***/ function(module, exports, __webpack_require__) {
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */
            var isObject = __webpack_require__(194);
            var anObject = __webpack_require__(193);
            var check = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
            };
            module.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {} // eslint-disable-line
                        ? (function(test, buggy, set) {
                              try {
                                  set = __webpack_require__(201)(Function.call, __webpack_require__(231).f(Object.prototype, '__proto__').set, 2);
                                  set(test, []);
                                  buggy = !(test instanceof Array);
                              } catch (e) {
                                  buggy = true;
                              }
                              return function setPrototypeOf(O, proto) {
                                  check(O, proto);
                                  if (buggy) O.__proto__ = proto;
                                  else set(O, proto);
                                  return O;
                              };
                          })({}, false)
                        : undefined),
                check: check
            };

            /***/
        },
        /* 254 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 19.1.3.6 Object.prototype.toString()
            var classof = __webpack_require__(255);
            var test = {};
            test[__webpack_require__(207)('toStringTag')] = 'z';
            if (test + '' != '[object z]') {
                __webpack_require__(199)(
                    Object.prototype,
                    'toString',
                    function toString() {
                        return '[object ' + classof(this) + ']';
                    },
                    true
                );
            }

            /***/
        },
        /* 255 */
        /***/ function(module, exports, __webpack_require__) {
            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__(215);
            var TAG = __webpack_require__(207)('toStringTag');
            // ES3 wrong here
            var ARG =
                cof(
                    (function() {
                        return arguments;
                    })()
                ) == 'Arguments';

            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (e) {
                    /* empty */
                }
            };

            module.exports = function(it) {
                var O, T, B;
                return it === undefined
                    ? 'Undefined'
                    : it === null
                    ? 'Null'
                    : // @@toStringTag case
                    typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
                    ? T
                    : // builtinTag case
                    ARG
                    ? cof(O)
                    : // ES3 arguments fallback
                    (B = cof(O)) == 'Object' && typeof O.callee == 'function'
                    ? 'Arguments'
                    : B;
            };

            /***/
        },
        /* 256 */
        /***/ function(module, exports, __webpack_require__) {
            // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
            var $export = __webpack_require__(189);

            $export($export.P, 'Function', { bind: __webpack_require__(257) });

            /***/
        },
        /* 257 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var aFunction = __webpack_require__(202);
            var isObject = __webpack_require__(194);
            var invoke = __webpack_require__(258);
            var arraySlice = [].slice;
            var factories = {};

            var construct = function(F, len, args) {
                if (!(len in factories)) {
                    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                    // eslint-disable-next-line no-new-func
                    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
                }
                return factories[len](F, args);
            };

            module.exports =
                Function.bind ||
                function bind(that /* , ...args */) {
                    var fn = aFunction(this);
                    var partArgs = arraySlice.call(arguments, 1);
                    var bound = function(/* args... */) {
                        var args = partArgs.concat(arraySlice.call(arguments));
                        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
                    };
                    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
                    return bound;
                };

            /***/
        },
        /* 258 */
        /***/ function(module, exports) {
            // fast apply, http://jsperf.lnkit.com/fast-apply/5
            module.exports = function(fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                    case 0:
                        return un ? fn() : fn.call(that);
                    case 1:
                        return un ? fn(args[0]) : fn.call(that, args[0]);
                    case 2:
                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                    case 3:
                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                    case 4:
                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                }
                return fn.apply(that, args);
            };

            /***/
        },
        /* 259 */
        /***/ function(module, exports, __webpack_require__) {
            var dP = __webpack_require__(192).f;
            var FProto = Function.prototype;
            var nameRE = /^\s*function ([^ (]*)/;
            var NAME = 'name';

            // 19.2.4.2 name
            NAME in FProto ||
                (__webpack_require__(187) &&
                    dP(FProto, NAME, {
                        configurable: true,
                        get: function() {
                            try {
                                return ('' + this).match(nameRE)[1];
                            } catch (e) {
                                return '';
                            }
                        }
                    }));

            /***/
        },
        /* 260 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var isObject = __webpack_require__(194);
            var getPrototypeOf = __webpack_require__(239);
            var HAS_INSTANCE = __webpack_require__(207)('hasInstance');
            var FunctionProto = Function.prototype;
            // 19.2.3.6 Function.prototype[@@hasInstance](V)
            if (!(HAS_INSTANCE in FunctionProto))
                __webpack_require__(192).f(FunctionProto, HAS_INSTANCE, {
                    value: function(O) {
                        if (typeof this != 'function' || !isObject(O)) return false;
                        if (!isObject(this.prototype)) return O instanceof this;
                        // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
                        while ((O = getPrototypeOf(O))) if (this.prototype === O) return true;
                        return false;
                    }
                });

            /***/
        },
        /* 261 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var $parseInt = __webpack_require__(262);
            // 18.2.5 parseInt(string, radix)
            $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

            /***/
        },
        /* 262 */
        /***/ function(module, exports, __webpack_require__) {
            var $parseInt = __webpack_require__(185).parseInt;
            var $trim = __webpack_require__(263).trim;
            var ws = __webpack_require__(264);
            var hex = /^[-+]?0[xX]/;

            module.exports =
                $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22
                    ? function parseInt(str, radix) {
                          var string = $trim(String(str), 3);
                          return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
                      }
                    : $parseInt;

            /***/
        },
        /* 263 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var defined = __webpack_require__(216);
            var fails = __webpack_require__(188);
            var spaces = __webpack_require__(264);
            var space = '[' + spaces + ']';
            var non = '\u200b\u0085';
            var ltrim = RegExp('^' + space + space + '*');
            var rtrim = RegExp(space + space + '*$');

            var exporter = function(KEY, exec, ALIAS) {
                var exp = {};
                var FORCE = fails(function() {
                    return !!spaces[KEY]() || non[KEY]() != non;
                });
                var fn = (exp[KEY] = FORCE ? exec(trim) : spaces[KEY]);
                if (ALIAS) exp[ALIAS] = fn;
                $export($export.P + $export.F * FORCE, 'String', exp);
            };

            // 1 -> String#trimLeft
            // 2 -> String#trimRight
            // 3 -> String#trim
            var trim = (exporter.trim = function(string, TYPE) {
                string = String(defined(string));
                if (TYPE & 1) string = string.replace(ltrim, '');
                if (TYPE & 2) string = string.replace(rtrim, '');
                return string;
            });

            module.exports = exporter;

            /***/
        },
        /* 264 */
        /***/ function(module, exports) {
            module.exports =
                '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
                '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

            /***/
        },
        /* 265 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var $parseFloat = __webpack_require__(266);
            // 18.2.4 parseFloat(string)
            $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

            /***/
        },
        /* 266 */
        /***/ function(module, exports, __webpack_require__) {
            var $parseFloat = __webpack_require__(185).parseFloat;
            var $trim = __webpack_require__(263).trim;

            module.exports =
                1 / $parseFloat(__webpack_require__(264) + '-0') !== -Infinity
                    ? function parseFloat(str) {
                          var string = $trim(String(str), 3);
                          var result = $parseFloat(string);
                          return result === 0 && string.charAt(0) == '-' ? -0 : result;
                      }
                    : $parseFloat;

            /***/
        },
        /* 267 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(185);
            var has = __webpack_require__(186);
            var cof = __webpack_require__(215);
            var inheritIfRequired = __webpack_require__(268);
            var toPrimitive = __webpack_require__(197);
            var fails = __webpack_require__(188);
            var gOPN = __webpack_require__(230).f;
            var gOPD = __webpack_require__(231).f;
            var dP = __webpack_require__(192).f;
            var $trim = __webpack_require__(263).trim;
            var NUMBER = 'Number';
            var $Number = global[NUMBER];
            var Base = $Number;
            var proto = $Number.prototype;
            // Opera ~12 has broken Object#toString
            var BROKEN_COF = cof(__webpack_require__(226)(proto)) == NUMBER;
            var TRIM = 'trim' in String.prototype;

            // 7.1.3 ToNumber(argument)
            var toNumber = function(argument) {
                var it = toPrimitive(argument, false);
                if (typeof it == 'string' && it.length > 2) {
                    it = TRIM ? it.trim() : $trim(it, 3);
                    var first = it.charCodeAt(0);
                    var third, radix, maxCode;
                    if (first === 43 || first === 45) {
                        third = it.charCodeAt(2);
                        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                    } else if (first === 48) {
                        switch (it.charCodeAt(1)) {
                            case 66:
                            case 98:
                                radix = 2;
                                maxCode = 49;
                                break; // fast equal /^0b[01]+$/i
                            case 79:
                            case 111:
                                radix = 8;
                                maxCode = 55;
                                break; // fast equal /^0o[0-7]+$/i
                            default:
                                return +it;
                        }
                        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                            code = digits.charCodeAt(i);
                            // parseInt parses a string to a first unavailable symbol
                            // but ToNumber should return NaN if a string contains unavailable symbols
                            if (code < 48 || code > maxCode) return NaN;
                        }
                        return parseInt(digits, radix);
                    }
                }
                return +it;
            };

            if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
                $Number = function Number(value) {
                    var it = arguments.length < 1 ? 0 : value;
                    var that = this;
                    return that instanceof $Number &&
                        // check on 1..constructor(foo) case
                        (BROKEN_COF
                            ? fails(function() {
                                  proto.valueOf.call(that);
                              })
                            : cof(that) != NUMBER)
                        ? inheritIfRequired(new Base(toNumber(it)), that, $Number)
                        : toNumber(it);
                };
                for (
                    var keys = __webpack_require__(187)
                            ? gOPN(Base)
                            : // ES3:
                              (
                                  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                                  // ES6 (in case, if modules with ES6 Number statics required before):
                                  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                                  'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                              ).split(','),
                        j = 0,
                        key;
                    keys.length > j;
                    j++
                ) {
                    if (has(Base, (key = keys[j])) && !has($Number, key)) {
                        dP($Number, key, gOPD(Base, key));
                    }
                }
                $Number.prototype = proto;
                proto.constructor = $Number;
                __webpack_require__(199)(global, NUMBER, $Number);
            }

            /***/
        },
        /* 268 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(194);
            var setPrototypeOf = __webpack_require__(253).set;
            module.exports = function(that, target, C) {
                var S = target.constructor;
                var P;
                if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                    setPrototypeOf(that, P);
                }
                return that;
            };

            /***/
        },
        /* 269 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var toInteger = __webpack_require__(219);
            var aNumberValue = __webpack_require__(270);
            var repeat = __webpack_require__(271);
            var $toFixed = (1.0).toFixed;
            var floor = Math.floor;
            var data = [0, 0, 0, 0, 0, 0];
            var ERROR = 'Number.toFixed: incorrect invocation!';
            var ZERO = '0';

            var multiply = function(n, c) {
                var i = -1;
                var c2 = c;
                while (++i < 6) {
                    c2 += n * data[i];
                    data[i] = c2 % 1e7;
                    c2 = floor(c2 / 1e7);
                }
            };
            var divide = function(n) {
                var i = 6;
                var c = 0;
                while (--i >= 0) {
                    c += data[i];
                    data[i] = floor(c / n);
                    c = (c % n) * 1e7;
                }
            };
            var numToString = function() {
                var i = 6;
                var s = '';
                while (--i >= 0) {
                    if (s !== '' || i === 0 || data[i] !== 0) {
                        var t = String(data[i]);
                        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
                    }
                }
                return s;
            };
            var pow = function(x, n, acc) {
                return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
            };
            var log = function(x) {
                var n = 0;
                var x2 = x;
                while (x2 >= 4096) {
                    n += 12;
                    x2 /= 4096;
                }
                while (x2 >= 2) {
                    n += 1;
                    x2 /= 2;
                }
                return n;
            };

            $export(
                $export.P +
                    $export.F *
                        ((!!$toFixed &&
                            ((0.00008).toFixed(3) !== '0.000' ||
                                (0.9).toFixed(0) !== '1' ||
                                (1.255).toFixed(2) !== '1.25' ||
                                (1000000000000000128.0).toFixed(0) !== '1000000000000000128')) ||
                            !__webpack_require__(188)(function() {
                                // V8 ~ Android 4.3-
                                $toFixed.call({});
                            })),
                'Number',
                {
                    toFixed: function toFixed(fractionDigits) {
                        var x = aNumberValue(this, ERROR);
                        var f = toInteger(fractionDigits);
                        var s = '';
                        var m = ZERO;
                        var e, z, j, k;
                        if (f < 0 || f > 20) throw RangeError(ERROR);
                        // eslint-disable-next-line no-self-compare
                        if (x != x) return 'NaN';
                        if (x <= -1e21 || x >= 1e21) return String(x);
                        if (x < 0) {
                            s = '-';
                            x = -x;
                        }
                        if (x > 1e-21) {
                            e = log(x * pow(2, 69, 1)) - 69;
                            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
                            z *= 0x10000000000000;
                            e = 52 - e;
                            if (e > 0) {
                                multiply(0, z);
                                j = f;
                                while (j >= 7) {
                                    multiply(1e7, 0);
                                    j -= 7;
                                }
                                multiply(pow(10, j, 1), 0);
                                j = e - 1;
                                while (j >= 23) {
                                    divide(1 << 23);
                                    j -= 23;
                                }
                                divide(1 << j);
                                multiply(1, 1);
                                divide(2);
                                m = numToString();
                            } else {
                                multiply(0, z);
                                multiply(1 << -e, 0);
                                m = numToString() + repeat.call(ZERO, f);
                            }
                        }
                        if (f > 0) {
                            k = m.length;
                            m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
                        } else {
                            m = s + m;
                        }
                        return m;
                    }
                }
            );

            /***/
        },
        /* 270 */
        /***/ function(module, exports, __webpack_require__) {
            var cof = __webpack_require__(215);
            module.exports = function(it, msg) {
                if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
                return +it;
            };

            /***/
        },
        /* 271 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var toInteger = __webpack_require__(219);
            var defined = __webpack_require__(216);

            module.exports = function repeat(count) {
                var str = String(defined(this));
                var res = '';
                var n = toInteger(count);
                if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
                for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
                return res;
            };

            /***/
        },
        /* 272 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $fails = __webpack_require__(188);
            var aNumberValue = __webpack_require__(270);
            var $toPrecision = (1.0).toPrecision;

            $export(
                $export.P +
                    $export.F *
                        ($fails(function() {
                            // IE7-
                            return $toPrecision.call(1, undefined) !== '1';
                        }) ||
                            !$fails(function() {
                                // V8 ~ Android 4.3-
                                $toPrecision.call({});
                            })),
                'Number',
                {
                    toPrecision: function toPrecision(precision) {
                        var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
                        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
                    }
                }
            );

            /***/
        },
        /* 273 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.1 Number.EPSILON
            var $export = __webpack_require__(189);

            $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

            /***/
        },
        /* 274 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.2 Number.isFinite(number)
            var $export = __webpack_require__(189);
            var _isFinite = __webpack_require__(185).isFinite;

            $export($export.S, 'Number', {
                isFinite: function isFinite(it) {
                    return typeof it == 'number' && _isFinite(it);
                }
            });

            /***/
        },
        /* 275 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.3 Number.isInteger(number)
            var $export = __webpack_require__(189);

            $export($export.S, 'Number', { isInteger: __webpack_require__(276) });

            /***/
        },
        /* 276 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.3 Number.isInteger(number)
            var isObject = __webpack_require__(194);
            var floor = Math.floor;
            module.exports = function isInteger(it) {
                return !isObject(it) && isFinite(it) && floor(it) === it;
            };

            /***/
        },
        /* 277 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.4 Number.isNaN(number)
            var $export = __webpack_require__(189);

            $export($export.S, 'Number', {
                isNaN: function isNaN(number) {
                    // eslint-disable-next-line no-self-compare
                    return number != number;
                }
            });

            /***/
        },
        /* 278 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.5 Number.isSafeInteger(number)
            var $export = __webpack_require__(189);
            var isInteger = __webpack_require__(276);
            var abs = Math.abs;

            $export($export.S, 'Number', {
                isSafeInteger: function isSafeInteger(number) {
                    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
                }
            });

            /***/
        },
        /* 279 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.6 Number.MAX_SAFE_INTEGER
            var $export = __webpack_require__(189);

            $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

            /***/
        },
        /* 280 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.1.2.10 Number.MIN_SAFE_INTEGER
            var $export = __webpack_require__(189);

            $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

            /***/
        },
        /* 281 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var $parseFloat = __webpack_require__(266);
            // 20.1.2.12 Number.parseFloat(string)
            $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

            /***/
        },
        /* 282 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var $parseInt = __webpack_require__(262);
            // 20.1.2.13 Number.parseInt(string, radix)
            $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

            /***/
        },
        /* 283 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.3 Math.acosh(x)
            var $export = __webpack_require__(189);
            var log1p = __webpack_require__(284);
            var sqrt = Math.sqrt;
            var $acosh = Math.acosh;

            $export(
                $export.S +
                    $export.F *
                        !(
                            $acosh &&
                            // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
                            Math.floor($acosh(Number.MAX_VALUE)) == 710 &&
                            // Tor Browser bug: Math.acosh(Infinity) -> NaN
                            $acosh(Infinity) == Infinity
                        ),
                'Math',
                {
                    acosh: function acosh(x) {
                        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
                    }
                }
            );

            /***/
        },
        /* 284 */
        /***/ function(module, exports) {
            // 20.2.2.20 Math.log1p(x)
            module.exports =
                Math.log1p ||
                function log1p(x) {
                    return (x = +x) > -1e-8 && x < 1e-8 ? x - (x * x) / 2 : Math.log(1 + x);
                };

            /***/
        },
        /* 285 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.5 Math.asinh(x)
            var $export = __webpack_require__(189);
            var $asinh = Math.asinh;

            function asinh(x) {
                return !isFinite((x = +x)) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
            }

            // Tor Browser bug: Math.asinh(0) -> -0
            $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

            /***/
        },
        /* 286 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.7 Math.atanh(x)
            var $export = __webpack_require__(189);
            var $atanh = Math.atanh;

            // Tor Browser bug: Math.atanh(-0) -> 0
            $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
                atanh: function atanh(x) {
                    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
                }
            });

            /***/
        },
        /* 287 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.9 Math.cbrt(x)
            var $export = __webpack_require__(189);
            var sign = __webpack_require__(288);

            $export($export.S, 'Math', {
                cbrt: function cbrt(x) {
                    return sign((x = +x)) * Math.pow(Math.abs(x), 1 / 3);
                }
            });

            /***/
        },
        /* 288 */
        /***/ function(module, exports) {
            // 20.2.2.28 Math.sign(x)
            module.exports =
                Math.sign ||
                function sign(x) {
                    // eslint-disable-next-line no-self-compare
                    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
                };

            /***/
        },
        /* 289 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.11 Math.clz32(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', {
                clz32: function clz32(x) {
                    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
                }
            });

            /***/
        },
        /* 290 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.12 Math.cosh(x)
            var $export = __webpack_require__(189);
            var exp = Math.exp;

            $export($export.S, 'Math', {
                cosh: function cosh(x) {
                    return (exp((x = +x)) + exp(-x)) / 2;
                }
            });

            /***/
        },
        /* 291 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.14 Math.expm1(x)
            var $export = __webpack_require__(189);
            var $expm1 = __webpack_require__(292);

            $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

            /***/
        },
        /* 292 */
        /***/ function(module, exports) {
            // 20.2.2.14 Math.expm1(x)
            var $expm1 = Math.expm1;
            module.exports =
                !$expm1 ||
                // Old FF bug
                $expm1(10) > 22025.465794806719 ||
                $expm1(10) < 22025.4657948067165168 ||
                // Tor Browser bug
                $expm1(-2e-17) != -2e-17
                    ? function expm1(x) {
                          return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + (x * x) / 2 : Math.exp(x) - 1;
                      }
                    : $expm1;

            /***/
        },
        /* 293 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.16 Math.fround(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', { fround: __webpack_require__(294) });

            /***/
        },
        /* 294 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.16 Math.fround(x)
            var sign = __webpack_require__(288);
            var pow = Math.pow;
            var EPSILON = pow(2, -52);
            var EPSILON32 = pow(2, -23);
            var MAX32 = pow(2, 127) * (2 - EPSILON32);
            var MIN32 = pow(2, -126);

            var roundTiesToEven = function(n) {
                return n + 1 / EPSILON - 1 / EPSILON;
            };

            module.exports =
                Math.fround ||
                function fround(x) {
                    var $abs = Math.abs(x);
                    var $sign = sign(x);
                    var a, result;
                    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
                    a = (1 + EPSILON32 / EPSILON) * $abs;
                    result = a - (a - $abs);
                    // eslint-disable-next-line no-self-compare
                    if (result > MAX32 || result != result) return $sign * Infinity;
                    return $sign * result;
                };

            /***/
        },
        /* 295 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
            var $export = __webpack_require__(189);
            var abs = Math.abs;

            $export($export.S, 'Math', {
                hypot: function hypot(value1, value2) {
                    // eslint-disable-line no-unused-vars
                    var sum = 0;
                    var i = 0;
                    var aLen = arguments.length;
                    var larg = 0;
                    var arg, div;
                    while (i < aLen) {
                        arg = abs(arguments[i++]);
                        if (larg < arg) {
                            div = larg / arg;
                            sum = sum * div * div + 1;
                            larg = arg;
                        } else if (arg > 0) {
                            div = arg / larg;
                            sum += div * div;
                        } else sum += arg;
                    }
                    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
                }
            });

            /***/
        },
        /* 296 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.18 Math.imul(x, y)
            var $export = __webpack_require__(189);
            var $imul = Math.imul;

            // some WebKit versions fails with big numbers, some has wrong arity
            $export(
                $export.S +
                    $export.F *
                        __webpack_require__(188)(function() {
                            return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
                        }),
                'Math',
                {
                    imul: function imul(x, y) {
                        var UINT16 = 0xffff;
                        var xn = +x;
                        var yn = +y;
                        var xl = UINT16 & xn;
                        var yl = UINT16 & yn;
                        return 0 | (xl * yl + ((((UINT16 & (xn >>> 16)) * yl + xl * (UINT16 & (yn >>> 16))) << 16) >>> 0));
                    }
                }
            );

            /***/
        },
        /* 297 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.21 Math.log10(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', {
                log10: function log10(x) {
                    return Math.log(x) * Math.LOG10E;
                }
            });

            /***/
        },
        /* 298 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.20 Math.log1p(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', { log1p: __webpack_require__(284) });

            /***/
        },
        /* 299 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.22 Math.log2(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', {
                log2: function log2(x) {
                    return Math.log(x) / Math.LN2;
                }
            });

            /***/
        },
        /* 300 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.28 Math.sign(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', { sign: __webpack_require__(288) });

            /***/
        },
        /* 301 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.30 Math.sinh(x)
            var $export = __webpack_require__(189);
            var expm1 = __webpack_require__(292);
            var exp = Math.exp;

            // V8 near Chromium 38 has a problem with very small numbers
            $export(
                $export.S +
                    $export.F *
                        __webpack_require__(188)(function() {
                            return !Math.sinh(-2e-17) != -2e-17;
                        }),
                'Math',
                {
                    sinh: function sinh(x) {
                        return Math.abs((x = +x)) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
                    }
                }
            );

            /***/
        },
        /* 302 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.33 Math.tanh(x)
            var $export = __webpack_require__(189);
            var expm1 = __webpack_require__(292);
            var exp = Math.exp;

            $export($export.S, 'Math', {
                tanh: function tanh(x) {
                    var a = expm1((x = +x));
                    var b = expm1(-x);
                    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
                }
            });

            /***/
        },
        /* 303 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.2.2.34 Math.trunc(x)
            var $export = __webpack_require__(189);

            $export($export.S, 'Math', {
                trunc: function trunc(it) {
                    return (it > 0 ? Math.floor : Math.ceil)(it);
                }
            });

            /***/
        },
        /* 304 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var toAbsoluteIndex = __webpack_require__(220);
            var fromCharCode = String.fromCharCode;
            var $fromCodePoint = String.fromCodePoint;

            // length should be 1, old FF problem
            $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
                // 21.1.2.2 String.fromCodePoint(...codePoints)
                fromCodePoint: function fromCodePoint(x) {
                    // eslint-disable-line no-unused-vars
                    var res = [];
                    var aLen = arguments.length;
                    var i = 0;
                    var code;
                    while (aLen > i) {
                        code = +arguments[i++];
                        if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00));
                    }
                    return res.join('');
                }
            });

            /***/
        },
        /* 305 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var toIObject = __webpack_require__(213);
            var toLength = __webpack_require__(218);

            $export($export.S, 'String', {
                // 21.1.2.4 String.raw(callSite, ...substitutions)
                raw: function raw(callSite) {
                    var tpl = toIObject(callSite.raw);
                    var len = toLength(tpl.length);
                    var aLen = arguments.length;
                    var res = [];
                    var i = 0;
                    while (len > i) {
                        res.push(String(tpl[i++]));
                        if (i < aLen) res.push(String(arguments[i]));
                    }
                    return res.join('');
                }
            });

            /***/
        },
        /* 306 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 21.1.3.25 String.prototype.trim()
            __webpack_require__(263)('trim', function($trim) {
                return function trim() {
                    return $trim(this, 3);
                };
            });

            /***/
        },
        /* 307 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $at = __webpack_require__(308)(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(309)(
                String,
                'String',
                function(iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                },
                function() {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length) return { value: undefined, done: true };
                    point = $at(O, index);
                    this._i += point.length;
                    return { value: point, done: false };
                }
            );

            /***/
        },
        /* 308 */
        /***/ function(module, exports, __webpack_require__) {
            var toInteger = __webpack_require__(219);
            var defined = __webpack_require__(216);
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
                        ? TO_STRING
                            ? s.charAt(i)
                            : a
                        : TO_STRING
                        ? s.slice(i, i + 2)
                        : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
                };
            };

            /***/
        },
        /* 309 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var LIBRARY = __webpack_require__(205);
            var $export = __webpack_require__(189);
            var redefine = __webpack_require__(199);
            var hide = __webpack_require__(191);
            var Iterators = __webpack_require__(310);
            var $iterCreate = __webpack_require__(311);
            var setToStringTag = __webpack_require__(206);
            var getPrototypeOf = __webpack_require__(239);
            var ITERATOR = __webpack_require__(207)('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';

            var returnThis = function() {
                return this;
            };

            module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator';
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod('entries')) : undefined;
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
                    $default = function values() {
                        return $native.call(this);
                    };
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
                    if (FORCED)
                        for (key in methods) {
                            if (!(key in proto)) redefine(proto, key, methods[key]);
                        }
                    else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };

            /***/
        },
        /* 310 */
        /***/ function(module, exports) {
            module.exports = {};

            /***/
        },
        /* 311 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var create = __webpack_require__(226);
            var descriptor = __webpack_require__(198);
            var setToStringTag = __webpack_require__(206);
            var IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(191)(IteratorPrototype, __webpack_require__(207)('iterator'), function() {
                return this;
            });

            module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };

            /***/
        },
        /* 312 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $at = __webpack_require__(308)(false);
            $export($export.P, 'String', {
                // 21.1.3.3 String.prototype.codePointAt(pos)
                codePointAt: function codePointAt(pos) {
                    return $at(this, pos);
                }
            });

            /***/
        },
        /* 313 */
        /***/ function(module, exports, __webpack_require__) {
            // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
            'use strict';
            var $export = __webpack_require__(189);
            var toLength = __webpack_require__(218);
            var context = __webpack_require__(314);
            var ENDS_WITH = 'endsWith';
            var $endsWith = ''[ENDS_WITH];

            $export($export.P + $export.F * __webpack_require__(316)(ENDS_WITH), 'String', {
                endsWith: function endsWith(searchString /* , endPosition = @length */) {
                    var that = context(this, searchString, ENDS_WITH);
                    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
                    var len = toLength(that.length);
                    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
                    var search = String(searchString);
                    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
                }
            });

            /***/
        },
        /* 314 */
        /***/ function(module, exports, __webpack_require__) {
            // helper for String#{startsWith, endsWith, includes}
            var isRegExp = __webpack_require__(315);
            var defined = __webpack_require__(216);

            module.exports = function(that, searchString, NAME) {
                if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
                return String(defined(that));
            };

            /***/
        },
        /* 315 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.2.8 IsRegExp(argument)
            var isObject = __webpack_require__(194);
            var cof = __webpack_require__(215);
            var MATCH = __webpack_require__(207)('match');
            module.exports = function(it) {
                var isRegExp;
                return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
            };

            /***/
        },
        /* 316 */
        /***/ function(module, exports, __webpack_require__) {
            var MATCH = __webpack_require__(207)('match');
            module.exports = function(KEY) {
                var re = /./;
                try {
                    '/./'[KEY](re);
                } catch (e) {
                    try {
                        re[MATCH] = false;
                        return !'/./'[KEY](re);
                    } catch (f) {
                        /* empty */
                    }
                }
                return true;
            };

            /***/
        },
        /* 317 */
        /***/ function(module, exports, __webpack_require__) {
            // 21.1.3.7 String.prototype.includes(searchString, position = 0)
            'use strict';
            var $export = __webpack_require__(189);
            var context = __webpack_require__(314);
            var INCLUDES = 'includes';

            $export($export.P + $export.F * __webpack_require__(316)(INCLUDES), 'String', {
                includes: function includes(searchString /* , position = 0 */) {
                    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                }
            });

            /***/
        },
        /* 318 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);

            $export($export.P, 'String', {
                // 21.1.3.13 String.prototype.repeat(count)
                repeat: __webpack_require__(271)
            });

            /***/
        },
        /* 319 */
        /***/ function(module, exports, __webpack_require__) {
            // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
            'use strict';
            var $export = __webpack_require__(189);
            var toLength = __webpack_require__(218);
            var context = __webpack_require__(314);
            var STARTS_WITH = 'startsWith';
            var $startsWith = ''[STARTS_WITH];

            $export($export.P + $export.F * __webpack_require__(316)(STARTS_WITH), 'String', {
                startsWith: function startsWith(searchString /* , position = 0 */) {
                    var that = context(this, searchString, STARTS_WITH);
                    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
                    var search = String(searchString);
                    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
                }
            });

            /***/
        },
        /* 320 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.2 String.prototype.anchor(name)
            __webpack_require__(321)('anchor', function(createHTML) {
                return function anchor(name) {
                    return createHTML(this, 'a', 'name', name);
                };
            });

            /***/
        },
        /* 321 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            var fails = __webpack_require__(188);
            var defined = __webpack_require__(216);
            var quot = /"/g;
            // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
            var createHTML = function(string, tag, attribute, value) {
                var S = String(defined(string));
                var p1 = '<' + tag;
                if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
                return p1 + '>' + S + '</' + tag + '>';
            };
            module.exports = function(NAME, exec) {
                var O = {};
                O[NAME] = exec(createHTML);
                $export(
                    $export.P +
                        $export.F *
                            fails(function() {
                                var test = ''[NAME]('"');
                                return test !== test.toLowerCase() || test.split('"').length > 3;
                            }),
                    'String',
                    O
                );
            };

            /***/
        },
        /* 322 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.3 String.prototype.big()
            __webpack_require__(321)('big', function(createHTML) {
                return function big() {
                    return createHTML(this, 'big', '', '');
                };
            });

            /***/
        },
        /* 323 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.4 String.prototype.blink()
            __webpack_require__(321)('blink', function(createHTML) {
                return function blink() {
                    return createHTML(this, 'blink', '', '');
                };
            });

            /***/
        },
        /* 324 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.5 String.prototype.bold()
            __webpack_require__(321)('bold', function(createHTML) {
                return function bold() {
                    return createHTML(this, 'b', '', '');
                };
            });

            /***/
        },
        /* 325 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.6 String.prototype.fixed()
            __webpack_require__(321)('fixed', function(createHTML) {
                return function fixed() {
                    return createHTML(this, 'tt', '', '');
                };
            });

            /***/
        },
        /* 326 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.7 String.prototype.fontcolor(color)
            __webpack_require__(321)('fontcolor', function(createHTML) {
                return function fontcolor(color) {
                    return createHTML(this, 'font', 'color', color);
                };
            });

            /***/
        },
        /* 327 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.8 String.prototype.fontsize(size)
            __webpack_require__(321)('fontsize', function(createHTML) {
                return function fontsize(size) {
                    return createHTML(this, 'font', 'size', size);
                };
            });

            /***/
        },
        /* 328 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.9 String.prototype.italics()
            __webpack_require__(321)('italics', function(createHTML) {
                return function italics() {
                    return createHTML(this, 'i', '', '');
                };
            });

            /***/
        },
        /* 329 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.10 String.prototype.link(url)
            __webpack_require__(321)('link', function(createHTML) {
                return function link(url) {
                    return createHTML(this, 'a', 'href', url);
                };
            });

            /***/
        },
        /* 330 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.11 String.prototype.small()
            __webpack_require__(321)('small', function(createHTML) {
                return function small() {
                    return createHTML(this, 'small', '', '');
                };
            });

            /***/
        },
        /* 331 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.12 String.prototype.strike()
            __webpack_require__(321)('strike', function(createHTML) {
                return function strike() {
                    return createHTML(this, 'strike', '', '');
                };
            });

            /***/
        },
        /* 332 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.13 String.prototype.sub()
            __webpack_require__(321)('sub', function(createHTML) {
                return function sub() {
                    return createHTML(this, 'sub', '', '');
                };
            });

            /***/
        },
        /* 333 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // B.2.3.14 String.prototype.sup()
            __webpack_require__(321)('sup', function(createHTML) {
                return function sup() {
                    return createHTML(this, 'sup', '', '');
                };
            });

            /***/
        },
        /* 334 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.3.3.1 / 15.9.4.4 Date.now()
            var $export = __webpack_require__(189);

            $export($export.S, 'Date', {
                now: function() {
                    return new Date().getTime();
                }
            });

            /***/
        },
        /* 335 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var toObject = __webpack_require__(238);
            var toPrimitive = __webpack_require__(197);

            $export(
                $export.P +
                    $export.F *
                        __webpack_require__(188)(function() {
                            return (
                                new Date(NaN).toJSON() !== null ||
                                Date.prototype.toJSON.call({
                                    toISOString: function() {
                                        return 1;
                                    }
                                }) !== 1
                            );
                        }),
                'Date',
                {
                    // eslint-disable-next-line no-unused-vars
                    toJSON: function toJSON(key) {
                        var O = toObject(this);
                        var pv = toPrimitive(O);
                        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
                    }
                }
            );

            /***/
        },
        /* 336 */
        /***/ function(module, exports, __webpack_require__) {
            // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
            var $export = __webpack_require__(189);
            var toISOString = __webpack_require__(337);

            // PhantomJS / old WebKit has a broken implementations
            $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
                toISOString: toISOString
            });

            /***/
        },
        /* 337 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
            var fails = __webpack_require__(188);
            var getTime = Date.prototype.getTime;
            var $toISOString = Date.prototype.toISOString;

            var lz = function(num) {
                return num > 9 ? num : '0' + num;
            };

            // PhantomJS / old WebKit has a broken implementations
            module.exports =
                fails(function() {
                    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
                }) ||
                !fails(function() {
                    $toISOString.call(new Date(NaN));
                })
                    ? function toISOString() {
                          if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
                          var d = this;
                          var y = d.getUTCFullYear();
                          var m = d.getUTCMilliseconds();
                          var s = y < 0 ? '-' : y > 9999 ? '+' : '';
                          return (
                              s +
                              ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
                              '-' +
                              lz(d.getUTCMonth() + 1) +
                              '-' +
                              lz(d.getUTCDate()) +
                              'T' +
                              lz(d.getUTCHours()) +
                              ':' +
                              lz(d.getUTCMinutes()) +
                              ':' +
                              lz(d.getUTCSeconds()) +
                              '.' +
                              (m > 99 ? m : '0' + lz(m)) +
                              'Z'
                          );
                      }
                    : $toISOString;

            /***/
        },
        /* 338 */
        /***/ function(module, exports, __webpack_require__) {
            var DateProto = Date.prototype;
            var INVALID_DATE = 'Invalid Date';
            var TO_STRING = 'toString';
            var $toString = DateProto[TO_STRING];
            var getTime = DateProto.getTime;
            if (new Date(NaN) + '' != INVALID_DATE) {
                __webpack_require__(199)(DateProto, TO_STRING, function toString() {
                    var value = getTime.call(this);
                    // eslint-disable-next-line no-self-compare
                    return value === value ? $toString.call(this) : INVALID_DATE;
                });
            }

            /***/
        },
        /* 339 */
        /***/ function(module, exports, __webpack_require__) {
            var TO_PRIMITIVE = __webpack_require__(207)('toPrimitive');
            var proto = Date.prototype;

            if (!(TO_PRIMITIVE in proto)) __webpack_require__(191)(proto, TO_PRIMITIVE, __webpack_require__(340));

            /***/
        },
        /* 340 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var anObject = __webpack_require__(193);
            var toPrimitive = __webpack_require__(197);
            var NUMBER = 'number';

            module.exports = function(hint) {
                if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
                return toPrimitive(anObject(this), hint != NUMBER);
            };

            /***/
        },
        /* 341 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
            var $export = __webpack_require__(189);

            $export($export.S, 'Array', { isArray: __webpack_require__(225) });

            /***/
        },
        /* 342 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var ctx = __webpack_require__(201);
            var $export = __webpack_require__(189);
            var toObject = __webpack_require__(238);
            var call = __webpack_require__(343);
            var isArrayIter = __webpack_require__(344);
            var toLength = __webpack_require__(218);
            var createProperty = __webpack_require__(345);
            var getIterFn = __webpack_require__(346);

            $export(
                $export.S +
                    $export.F *
                        !__webpack_require__(347)(function(iter) {
                            Array.from(iter);
                        }),
                'Array',
                {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                        var O = toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = getIterFn(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                }
            );

            /***/
        },
        /* 343 */
        /***/ function(module, exports, __webpack_require__) {
            // call something on iterator step with safe closing on error
            var anObject = __webpack_require__(193);
            module.exports = function(iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                    // 7.4.6 IteratorClose(iterator, completion)
                } catch (e) {
                    var ret = iterator['return'];
                    if (ret !== undefined) anObject(ret.call(iterator));
                    throw e;
                }
            };

            /***/
        },
        /* 344 */
        /***/ function(module, exports, __webpack_require__) {
            // check on default Array iterator
            var Iterators = __webpack_require__(310);
            var ITERATOR = __webpack_require__(207)('iterator');
            var ArrayProto = Array.prototype;

            module.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };

            /***/
        },
        /* 345 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $defineProperty = __webpack_require__(192);
            var createDesc = __webpack_require__(198);

            module.exports = function(object, index, value) {
                if (index in object) $defineProperty.f(object, index, createDesc(0, value));
                else object[index] = value;
            };

            /***/
        },
        /* 346 */
        /***/ function(module, exports, __webpack_require__) {
            var classof = __webpack_require__(255);
            var ITERATOR = __webpack_require__(207)('iterator');
            var Iterators = __webpack_require__(310);
            module.exports = __webpack_require__(190).getIteratorMethod = function(it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };

            /***/
        },
        /* 347 */
        /***/ function(module, exports, __webpack_require__) {
            var ITERATOR = __webpack_require__(207)('iterator');
            var SAFE_CLOSING = false;

            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function() {
                    SAFE_CLOSING = true;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(riter, function() {
                    throw 2;
                });
            } catch (e) {
                /* empty */
            }

            module.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7];
                    var iter = arr[ITERATOR]();
                    iter.next = function() {
                        return { done: (safe = true) };
                    };
                    arr[ITERATOR] = function() {
                        return iter;
                    };
                    exec(arr);
                } catch (e) {
                    /* empty */
                }
                return safe;
            };

            /***/
        },
        /* 348 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var createProperty = __webpack_require__(345);

            // WebKit Array.of isn't generic
            $export(
                $export.S +
                    $export.F *
                        __webpack_require__(188)(function() {
                            function F() {
                                /* empty */
                            }
                            return !(Array.of.call(F) instanceof F);
                        }),
                'Array',
                {
                    // 22.1.2.3 Array.of( ...items)
                    of: function of(/* ...args */) {
                        var index = 0;
                        var aLen = arguments.length;
                        var result = new (typeof this == 'function' ? this : Array)(aLen);
                        while (aLen > index) createProperty(result, index, arguments[index++]);
                        result.length = aLen;
                        return result;
                    }
                }
            );

            /***/
        },
        /* 349 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 22.1.3.13 Array.prototype.join(separator)
            var $export = __webpack_require__(189);
            var toIObject = __webpack_require__(213);
            var arrayJoin = [].join;

            // fallback for not array-like strings
            $export($export.P + $export.F * (__webpack_require__(214) != Object || !__webpack_require__(350)(arrayJoin)), 'Array', {
                join: function join(separator) {
                    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
                }
            });

            /***/
        },
        /* 350 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var fails = __webpack_require__(188);

            module.exports = function(method, arg) {
                return (
                    !!method &&
                    fails(function() {
                        // eslint-disable-next-line no-useless-call
                        arg
                            ? method.call(
                                  null,
                                  function() {
                                      /* empty */
                                  },
                                  1
                              )
                            : method.call(null);
                    })
                );
            };

            /***/
        },
        /* 351 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var html = __webpack_require__(228);
            var cof = __webpack_require__(215);
            var toAbsoluteIndex = __webpack_require__(220);
            var toLength = __webpack_require__(218);
            var arraySlice = [].slice;

            // fallback for not array-like ES3 strings and DOM objects
            $export(
                $export.P +
                    $export.F *
                        __webpack_require__(188)(function() {
                            if (html) arraySlice.call(html);
                        }),
                'Array',
                {
                    slice: function slice(begin, end) {
                        var len = toLength(this.length);
                        var klass = cof(this);
                        end = end === undefined ? len : end;
                        if (klass == 'Array') return arraySlice.call(this, begin, end);
                        var start = toAbsoluteIndex(begin, len);
                        var upTo = toAbsoluteIndex(end, len);
                        var size = toLength(upTo - start);
                        var cloned = new Array(size);
                        var i = 0;
                        for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
                        return cloned;
                    }
                }
            );

            /***/
        },
        /* 352 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var aFunction = __webpack_require__(202);
            var toObject = __webpack_require__(238);
            var fails = __webpack_require__(188);
            var $sort = [].sort;
            var test = [1, 2, 3];

            $export(
                $export.P +
                    $export.F *
                        (fails(function() {
                            // IE8-
                            test.sort(undefined);
                        }) ||
                            !fails(function() {
                                // V8 bug
                                test.sort(null);
                                // Old WebKit
                            }) ||
                            !__webpack_require__(350)($sort)),
                'Array',
                {
                    // 22.1.3.25 Array.prototype.sort(comparefn)
                    sort: function sort(comparefn) {
                        return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
                    }
                }
            );

            /***/
        },
        /* 353 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $forEach = __webpack_require__(354)(0);
            var STRICT = __webpack_require__(350)([].forEach, true);

            $export($export.P + $export.F * !STRICT, 'Array', {
                // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
                forEach: function forEach(callbackfn /* , thisArg */) {
                    return $forEach(this, callbackfn, arguments[1]);
                }
            });

            /***/
        },
        /* 354 */
        /***/ function(module, exports, __webpack_require__) {
            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex
            var ctx = __webpack_require__(201);
            var IObject = __webpack_require__(214);
            var toObject = __webpack_require__(238);
            var toLength = __webpack_require__(218);
            var asc = __webpack_require__(355);
            module.exports = function(TYPE, $create) {
                var IS_MAP = TYPE == 1;
                var IS_FILTER = TYPE == 2;
                var IS_SOME = TYPE == 3;
                var IS_EVERY = TYPE == 4;
                var IS_FIND_INDEX = TYPE == 6;
                var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                var create = $create || asc;
                return function($this, callbackfn, that) {
                    var O = toObject($this);
                    var self = IObject(O);
                    var f = ctx(callbackfn, that, 3);
                    var length = toLength(self.length);
                    var index = 0;
                    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                    var val, res;
                    for (; length > index; index++)
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res;
                                // map
                                else if (res)
                                    switch (TYPE) {
                                        case 3:
                                            return true; // some
                                        case 5:
                                            return val; // find
                                        case 6:
                                            return index; // findIndex
                                        case 2:
                                            result.push(val); // filter
                                    }
                                else if (IS_EVERY) return false; // every
                            }
                        }
                    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                };
            };

            /***/
        },
        /* 355 */
        /***/ function(module, exports, __webpack_require__) {
            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
            var speciesConstructor = __webpack_require__(356);

            module.exports = function(original, length) {
                return new (speciesConstructor(original))(length);
            };

            /***/
        },
        /* 356 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(194);
            var isArray = __webpack_require__(225);
            var SPECIES = __webpack_require__(207)('species');

            module.exports = function(original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    // cross-realm fallback
                    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined;
                    }
                }
                return C === undefined ? Array : C;
            };

            /***/
        },
        /* 357 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $map = __webpack_require__(354)(1);

            $export($export.P + $export.F * !__webpack_require__(350)([].map, true), 'Array', {
                // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
                map: function map(callbackfn /* , thisArg */) {
                    return $map(this, callbackfn, arguments[1]);
                }
            });

            /***/
        },
        /* 358 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $filter = __webpack_require__(354)(2);

            $export($export.P + $export.F * !__webpack_require__(350)([].filter, true), 'Array', {
                // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
                filter: function filter(callbackfn /* , thisArg */) {
                    return $filter(this, callbackfn, arguments[1]);
                }
            });

            /***/
        },
        /* 359 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $some = __webpack_require__(354)(3);

            $export($export.P + $export.F * !__webpack_require__(350)([].some, true), 'Array', {
                // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
                some: function some(callbackfn /* , thisArg */) {
                    return $some(this, callbackfn, arguments[1]);
                }
            });

            /***/
        },
        /* 360 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $every = __webpack_require__(354)(4);

            $export($export.P + $export.F * !__webpack_require__(350)([].every, true), 'Array', {
                // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
                every: function every(callbackfn /* , thisArg */) {
                    return $every(this, callbackfn, arguments[1]);
                }
            });

            /***/
        },
        /* 361 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $reduce = __webpack_require__(362);

            $export($export.P + $export.F * !__webpack_require__(350)([].reduce, true), 'Array', {
                // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
                reduce: function reduce(callbackfn /* , initialValue */) {
                    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
                }
            });

            /***/
        },
        /* 362 */
        /***/ function(module, exports, __webpack_require__) {
            var aFunction = __webpack_require__(202);
            var toObject = __webpack_require__(238);
            var IObject = __webpack_require__(214);
            var toLength = __webpack_require__(218);

            module.exports = function(that, callbackfn, aLen, memo, isRight) {
                aFunction(callbackfn);
                var O = toObject(that);
                var self = IObject(O);
                var length = toLength(O.length);
                var index = isRight ? length - 1 : 0;
                var i = isRight ? -1 : 1;
                if (aLen < 2)
                    for (;;) {
                        if (index in self) {
                            memo = self[index];
                            index += i;
                            break;
                        }
                        index += i;
                        if (isRight ? index < 0 : length <= index) {
                            throw TypeError('Reduce of empty array with no initial value');
                        }
                    }
                for (; isRight ? index >= 0 : length > index; index += i)
                    if (index in self) {
                        memo = callbackfn(memo, self[index], index, O);
                    }
                return memo;
            };

            /***/
        },
        /* 363 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $reduce = __webpack_require__(362);

            $export($export.P + $export.F * !__webpack_require__(350)([].reduceRight, true), 'Array', {
                // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
                reduceRight: function reduceRight(callbackfn /* , initialValue */) {
                    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
                }
            });

            /***/
        },
        /* 364 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $indexOf = __webpack_require__(217)(false);
            var $native = [].indexOf;
            var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

            $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(350)($native)), 'Array', {
                // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
                indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
                    return NEGATIVE_ZERO
                        ? // convert -0 to +0
                          $native.apply(this, arguments) || 0
                        : $indexOf(this, searchElement, arguments[1]);
                }
            });

            /***/
        },
        /* 365 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var toIObject = __webpack_require__(213);
            var toInteger = __webpack_require__(219);
            var toLength = __webpack_require__(218);
            var $native = [].lastIndexOf;
            var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

            $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(350)($native)), 'Array', {
                // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
                lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
                    // convert -0 to +0
                    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
                    var O = toIObject(this);
                    var length = toLength(O.length);
                    var index = length - 1;
                    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
                    if (index < 0) index = length + index;
                    for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
                    return -1;
                }
            });

            /***/
        },
        /* 366 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
            var $export = __webpack_require__(189);

            $export($export.P, 'Array', { copyWithin: __webpack_require__(367) });

            __webpack_require__(368)('copyWithin');

            /***/
        },
        /* 367 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
            'use strict';
            var toObject = __webpack_require__(238);
            var toAbsoluteIndex = __webpack_require__(220);
            var toLength = __webpack_require__(218);

            module.exports =
                [].copyWithin ||
                function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
                    var O = toObject(this);
                    var len = toLength(O.length);
                    var to = toAbsoluteIndex(target, len);
                    var from = toAbsoluteIndex(start, len);
                    var end = arguments.length > 2 ? arguments[2] : undefined;
                    var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
                    var inc = 1;
                    if (from < to && to < from + count) {
                        inc = -1;
                        from += count - 1;
                        to += count - 1;
                    }
                    while (count-- > 0) {
                        if (from in O) O[to] = O[from];
                        else delete O[to];
                        to += inc;
                        from += inc;
                    }
                    return O;
                };

            /***/
        },
        /* 368 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.31 Array.prototype[@@unscopables]
            var UNSCOPABLES = __webpack_require__(207)('unscopables');
            var ArrayProto = Array.prototype;
            if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(191)(ArrayProto, UNSCOPABLES, {});
            module.exports = function(key) {
                ArrayProto[UNSCOPABLES][key] = true;
            };

            /***/
        },
        /* 369 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
            var $export = __webpack_require__(189);

            $export($export.P, 'Array', { fill: __webpack_require__(370) });

            __webpack_require__(368)('fill');

            /***/
        },
        /* 370 */
        /***/ function(module, exports, __webpack_require__) {
            // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
            'use strict';
            var toObject = __webpack_require__(238);
            var toAbsoluteIndex = __webpack_require__(220);
            var toLength = __webpack_require__(218);
            module.exports = function fill(value /* , start = 0, end = @length */) {
                var O = toObject(this);
                var length = toLength(O.length);
                var aLen = arguments.length;
                var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
                var end = aLen > 2 ? arguments[2] : undefined;
                var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
                while (endPos > index) O[index++] = value;
                return O;
            };

            /***/
        },
        /* 371 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
            var $export = __webpack_require__(189);
            var $find = __webpack_require__(354)(5);
            var KEY = 'find';
            var forced = true;
            // Shouldn't skip holes
            if (KEY in [])
                Array(1)[KEY](function() {
                    forced = false;
                });
            $export($export.P + $export.F * forced, 'Array', {
                find: function find(callbackfn /* , that = undefined */) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__(368)(KEY);

            /***/
        },
        /* 372 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
            var $export = __webpack_require__(189);
            var $find = __webpack_require__(354)(6);
            var KEY = 'findIndex';
            var forced = true;
            // Shouldn't skip holes
            if (KEY in [])
                Array(1)[KEY](function() {
                    forced = false;
                });
            $export($export.P + $export.F * forced, 'Array', {
                findIndex: function findIndex(callbackfn /* , that = undefined */) {
                    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                }
            });
            __webpack_require__(368)(KEY);

            /***/
        },
        /* 373 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(374)('Array');

            /***/
        },
        /* 374 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(185);
            var dP = __webpack_require__(192);
            var DESCRIPTORS = __webpack_require__(187);
            var SPECIES = __webpack_require__(207)('species');

            module.exports = function(KEY) {
                var C = global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES])
                    dP.f(C, SPECIES, {
                        configurable: true,
                        get: function() {
                            return this;
                        }
                    });
            };

            /***/
        },
        /* 375 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var addToUnscopables = __webpack_require__(368);
            var step = __webpack_require__(376);
            var Iterators = __webpack_require__(310);
            var toIObject = __webpack_require__(213);

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(309)(
                Array,
                'Array',
                function(iterated, kind) {
                    this._t = toIObject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                },
                function() {
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
                },
                'values'
            );

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');

            /***/
        },
        /* 376 */
        /***/ function(module, exports) {
            module.exports = function(done, value) {
                return { value: value, done: !!done };
            };

            /***/
        },
        /* 377 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var inheritIfRequired = __webpack_require__(268);
            var dP = __webpack_require__(192).f;
            var gOPN = __webpack_require__(230).f;
            var isRegExp = __webpack_require__(315);
            var $flags = __webpack_require__(378);
            var $RegExp = global.RegExp;
            var Base = $RegExp;
            var proto = $RegExp.prototype;
            var re1 = /a/g;
            var re2 = /a/g;
            // "new" creates a new object, old webkit buggy here
            var CORRECT_NEW = new $RegExp(re1) !== re1;

            if (
                __webpack_require__(187) &&
                (!CORRECT_NEW ||
                    __webpack_require__(188)(function() {
                        re2[__webpack_require__(207)('match')] = false;
                        // RegExp constructor can alter flags and IsRegExp works correct with @@match
                        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
                    }))
            ) {
                $RegExp = function RegExp(p, f) {
                    var tiRE = this instanceof $RegExp;
                    var piRE = isRegExp(p);
                    var fiU = f === undefined;
                    return !tiRE && piRE && p.constructor === $RegExp && fiU
                        ? p
                        : inheritIfRequired(
                              CORRECT_NEW
                                  ? new Base(piRE && !fiU ? p.source : p, f)
                                  : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f),
                              tiRE ? this : proto,
                              $RegExp
                          );
                };
                var proxy = function(key) {
                    key in $RegExp ||
                        dP($RegExp, key, {
                            configurable: true,
                            get: function() {
                                return Base[key];
                            },
                            set: function(it) {
                                Base[key] = it;
                            }
                        });
                };
                for (var keys = gOPN(Base), i = 0; keys.length > i; ) proxy(keys[i++]);
                proto.constructor = $RegExp;
                $RegExp.prototype = proto;
                __webpack_require__(199)(global, 'RegExp', $RegExp);
            }

            __webpack_require__(374)('RegExp');

            /***/
        },
        /* 378 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 21.2.5.3 get RegExp.prototype.flags
            var anObject = __webpack_require__(193);
            module.exports = function() {
                var that = anObject(this);
                var result = '';
                if (that.global) result += 'g';
                if (that.ignoreCase) result += 'i';
                if (that.multiline) result += 'm';
                if (that.unicode) result += 'u';
                if (that.sticky) result += 'y';
                return result;
            };

            /***/
        },
        /* 379 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var regexpExec = __webpack_require__(380);
            __webpack_require__(189)(
                {
                    target: 'RegExp',
                    proto: true,
                    forced: regexpExec !== /./.exec
                },
                {
                    exec: regexpExec
                }
            );

            /***/
        },
        /* 380 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var regexpFlags = __webpack_require__(378);

            var nativeExec = RegExp.prototype.exec;
            // This always refers to the native implementation, because the
            // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
            // which loads this file before patching the method.
            var nativeReplace = String.prototype.replace;

            var patchedExec = nativeExec;

            var LAST_INDEX = 'lastIndex';

            var UPDATES_LAST_INDEX_WRONG = (function() {
                var re1 = /a/,
                    re2 = /b*/g;
                nativeExec.call(re1, 'a');
                nativeExec.call(re2, 'a');
                return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
            })();

            // nonparticipating capturing group, copied from es5-shim's String#split patch.
            var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

            var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

            if (PATCH) {
                patchedExec = function exec(str) {
                    var re = this;
                    var lastIndex, reCopy, match, i;

                    if (NPCG_INCLUDED) {
                        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                    }
                    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                    match = nativeExec.call(re, str);

                    if (UPDATES_LAST_INDEX_WRONG && match) {
                        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                    }
                    if (NPCG_INCLUDED && match && match.length > 1) {
                        // Fix browsers whose `exec` methods don't consistently return `undefined`
                        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                        // eslint-disable-next-line no-loop-func
                        nativeReplace.call(match[0], reCopy, function() {
                            for (i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === undefined) match[i] = undefined;
                            }
                        });
                    }

                    return match;
                };
            }

            module.exports = patchedExec;

            /***/
        },
        /* 381 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(382);
            var anObject = __webpack_require__(193);
            var $flags = __webpack_require__(378);
            var DESCRIPTORS = __webpack_require__(187);
            var TO_STRING = 'toString';
            var $toString = /./[TO_STRING];

            var define = function(fn) {
                __webpack_require__(199)(RegExp.prototype, TO_STRING, fn, true);
            };

            // 21.2.5.14 RegExp.prototype.toString()
            if (
                __webpack_require__(188)(function() {
                    return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
                })
            ) {
                define(function toString() {
                    var R = anObject(this);
                    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
                });
                // FF44- RegExp#toString has a wrong name
            } else if ($toString.name != TO_STRING) {
                define(function toString() {
                    return $toString.call(this);
                });
            }

            /***/
        },
        /* 382 */
        /***/ function(module, exports, __webpack_require__) {
            // 21.2.5.3 get RegExp.prototype.flags()
            if (__webpack_require__(187) && /./g.flags != 'g')
                __webpack_require__(192).f(RegExp.prototype, 'flags', {
                    configurable: true,
                    get: __webpack_require__(378)
                });

            /***/
        },
        /* 383 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var anObject = __webpack_require__(193);
            var toLength = __webpack_require__(218);
            var advanceStringIndex = __webpack_require__(384);
            var regExpExec = __webpack_require__(385);

            // @@match logic
            __webpack_require__(386)('match', 1, function(defined, MATCH, $match, maybeCallNative) {
                return [
                    // `String.prototype.match` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.match
                    function match(regexp) {
                        var O = defined(this);
                        var fn = regexp == undefined ? undefined : regexp[MATCH];
                        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                    },
                    // `RegExp.prototype[@@match]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
                    function(regexp) {
                        var res = maybeCallNative($match, regexp, this);
                        if (res.done) return res.value;
                        var rx = anObject(regexp);
                        var S = String(this);
                        if (!rx.global) return regExpExec(rx, S);
                        var fullUnicode = rx.unicode;
                        rx.lastIndex = 0;
                        var A = [];
                        var n = 0;
                        var result;
                        while ((result = regExpExec(rx, S)) !== null) {
                            var matchStr = String(result[0]);
                            A[n] = matchStr;
                            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                            n++;
                        }
                        return n === 0 ? null : A;
                    }
                ];
            });

            /***/
        },
        /* 384 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var at = __webpack_require__(308)(true);

            // `AdvanceStringIndex` abstract operation
            // https://tc39.github.io/ecma262/#sec-advancestringindex
            module.exports = function(S, index, unicode) {
                return index + (unicode ? at(S, index).length : 1);
            };

            /***/
        },
        /* 385 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var classof = __webpack_require__(255);
            var builtinExec = RegExp.prototype.exec;

            // `RegExpExec` abstract operation
            // https://tc39.github.io/ecma262/#sec-regexpexec
            module.exports = function(R, S) {
                var exec = R.exec;
                if (typeof exec === 'function') {
                    var result = exec.call(R, S);
                    if (typeof result !== 'object') {
                        throw new TypeError('RegExp exec method returned something other than an Object or null');
                    }
                    return result;
                }
                if (classof(R) !== 'RegExp') {
                    throw new TypeError('RegExp#exec called on incompatible receiver');
                }
                return builtinExec.call(R, S);
            };

            /***/
        },
        /* 386 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            __webpack_require__(379);
            var redefine = __webpack_require__(199);
            var hide = __webpack_require__(191);
            var fails = __webpack_require__(188);
            var defined = __webpack_require__(216);
            var wks = __webpack_require__(207);
            var regexpExec = __webpack_require__(380);

            var SPECIES = wks('species');

            var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                // #replace needs built-in support for named groups.
                // #match works fine because it just return the exec results, even if it has
                // a "grops" property.
                var re = /./;
                re.exec = function() {
                    var result = [];
                    result.groups = { a: '7' };
                    return result;
                };
                return ''.replace(re, '$<a>') !== '7';
            });

            var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function() {
                // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                var re = /(?:)/;
                var originalExec = re.exec;
                re.exec = function() {
                    return originalExec.apply(this, arguments);
                };
                var result = 'ab'.split(re);
                return result.length === 2 && result[0] === 'a' && result[1] === 'b';
            })();

            module.exports = function(KEY, length, exec) {
                var SYMBOL = wks(KEY);

                var DELEGATES_TO_SYMBOL = !fails(function() {
                    // String methods call symbol-named RegEp methods
                    var O = {};
                    O[SYMBOL] = function() {
                        return 7;
                    };
                    return ''[KEY](O) != 7;
                });

                var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL
                    ? !fails(function() {
                          // Symbol-named RegExp methods call .exec
                          var execCalled = false;
                          var re = /a/;
                          re.exec = function() {
                              execCalled = true;
                              return null;
                          };
                          if (KEY === 'split') {
                              // RegExp[@@split] doesn't call the regex's exec method, but first creates
                              // a new one. We need to return the patched regex when creating the new one.
                              re.constructor = {};
                              re.constructor[SPECIES] = function() {
                                  return re;
                              };
                          }
                          re[SYMBOL]('');
                          return !execCalled;
                      })
                    : undefined;

                if (
                    !DELEGATES_TO_SYMBOL ||
                    !DELEGATES_TO_EXEC ||
                    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
                ) {
                    var nativeRegExpMethod = /./[SYMBOL];
                    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        if (regexp.exec === regexpExec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                // The native String method already delegates to @@method (this
                                // polyfilled function), leasing to infinite recursion.
                                // We avoid it by directly calling the native @@method method.
                                return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                            }
                            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
                        }
                        return { done: false };
                    });
                    var strfn = fns[0];
                    var rxfn = fns[1];

                    redefine(String.prototype, KEY, strfn);
                    hide(
                        RegExp.prototype,
                        SYMBOL,
                        length == 2
                            ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                              // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                              function(string, arg) {
                                  return rxfn.call(string, this, arg);
                              }
                            : // 21.2.5.6 RegExp.prototype[@@match](string)
                              // 21.2.5.9 RegExp.prototype[@@search](string)
                              function(string) {
                                  return rxfn.call(string, this);
                              }
                    );
                }
            };

            /***/
        },
        /* 387 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var anObject = __webpack_require__(193);
            var toObject = __webpack_require__(238);
            var toLength = __webpack_require__(218);
            var toInteger = __webpack_require__(219);
            var advanceStringIndex = __webpack_require__(384);
            var regExpExec = __webpack_require__(385);
            var max = Math.max;
            var min = Math.min;
            var floor = Math.floor;
            var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
            var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

            var maybeToString = function(it) {
                return it === undefined ? it : String(it);
            };

            // @@replace logic
            __webpack_require__(386)('replace', 2, function(defined, REPLACE, $replace, maybeCallNative) {
                return [
                    // `String.prototype.replace` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                    function replace(searchValue, replaceValue) {
                        var O = defined(this);
                        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
                    },
                    // `RegExp.prototype[@@replace]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                    function(regexp, replaceValue) {
                        var res = maybeCallNative($replace, regexp, this, replaceValue);
                        if (res.done) return res.value;

                        var rx = anObject(regexp);
                        var S = String(this);
                        var functionalReplace = typeof replaceValue === 'function';
                        if (!functionalReplace) replaceValue = String(replaceValue);
                        var global = rx.global;
                        if (global) {
                            var fullUnicode = rx.unicode;
                            rx.lastIndex = 0;
                        }
                        var results = [];
                        while (true) {
                            var result = regExpExec(rx, S);
                            if (result === null) break;
                            results.push(result);
                            if (!global) break;
                            var matchStr = String(result[0]);
                            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        }
                        var accumulatedResult = '';
                        var nextSourcePosition = 0;
                        for (var i = 0; i < results.length; i++) {
                            result = results[i];
                            var matched = String(result[0]);
                            var position = max(min(toInteger(result.index), S.length), 0);
                            var captures = [];
                            // NOTE: This is equivalent to
                            //   captures = result.slice(1).map(maybeToString)
                            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                            for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
                            var namedCaptures = result.groups;
                            if (functionalReplace) {
                                var replacerArgs = [matched].concat(captures, position, S);
                                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                var replacement = String(replaceValue.apply(undefined, replacerArgs));
                            } else {
                                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                            }
                            if (position >= nextSourcePosition) {
                                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                nextSourcePosition = position + matched.length;
                            }
                        }
                        return accumulatedResult + S.slice(nextSourcePosition);
                    }
                ];

                // https://tc39.github.io/ecma262/#sec-getsubstitution
                function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                    var tailPos = position + matched.length;
                    var m = captures.length;
                    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                    if (namedCaptures !== undefined) {
                        namedCaptures = toObject(namedCaptures);
                        symbols = SUBSTITUTION_SYMBOLS;
                    }
                    return $replace.call(replacement, symbols, function(match, ch) {
                        var capture;
                        switch (ch.charAt(0)) {
                            case '$':
                                return '$';
                            case '&':
                                return matched;
                            case '`':
                                return str.slice(0, position);
                            case "'":
                                return str.slice(tailPos);
                            case '<':
                                capture = namedCaptures[ch.slice(1, -1)];
                                break;
                            default:
                                // \d\d?
                                var n = +ch;
                                if (n === 0) return match;
                                if (n > m) {
                                    var f = floor(n / 10);
                                    if (f === 0) return match;
                                    if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                    return match;
                                }
                                capture = captures[n - 1];
                        }
                        return capture === undefined ? '' : capture;
                    });
                }
            });

            /***/
        },
        /* 388 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var anObject = __webpack_require__(193);
            var sameValue = __webpack_require__(251);
            var regExpExec = __webpack_require__(385);

            // @@search logic
            __webpack_require__(386)('search', 1, function(defined, SEARCH, $search, maybeCallNative) {
                return [
                    // `String.prototype.search` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.search
                    function search(regexp) {
                        var O = defined(this);
                        var fn = regexp == undefined ? undefined : regexp[SEARCH];
                        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                    },
                    // `RegExp.prototype[@@search]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
                    function(regexp) {
                        var res = maybeCallNative($search, regexp, this);
                        if (res.done) return res.value;
                        var rx = anObject(regexp);
                        var S = String(this);
                        var previousLastIndex = rx.lastIndex;
                        if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                        var result = regExpExec(rx, S);
                        if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                        return result === null ? -1 : result.index;
                    }
                ];
            });

            /***/
        },
        /* 389 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';

            var isRegExp = __webpack_require__(315);
            var anObject = __webpack_require__(193);
            var speciesConstructor = __webpack_require__(390);
            var advanceStringIndex = __webpack_require__(384);
            var toLength = __webpack_require__(218);
            var callRegExpExec = __webpack_require__(385);
            var regexpExec = __webpack_require__(380);
            var fails = __webpack_require__(188);
            var $min = Math.min;
            var $push = [].push;
            var $SPLIT = 'split';
            var LENGTH = 'length';
            var LAST_INDEX = 'lastIndex';
            var MAX_UINT32 = 0xffffffff;

            // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
            var SUPPORTS_Y = !fails(function() {
                RegExp(MAX_UINT32, 'y');
            });

            // @@split logic
            __webpack_require__(386)('split', 2, function(defined, SPLIT, $split, maybeCallNative) {
                var internalSplit;
                if (
                    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
                    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
                    ''[$SPLIT](/.?/)[LENGTH]
                ) {
                    // based on es5-shim implementation, need to rework it
                    internalSplit = function(separator, limit) {
                        var string = String(this);
                        if (separator === undefined && limit === 0) return [];
                        // If `separator` is not a regex, use native split
                        if (!isRegExp(separator)) return $split.call(string, separator, limit);
                        var output = [];
                        var flags =
                            (separator.ignoreCase ? 'i' : '') +
                            (separator.multiline ? 'm' : '') +
                            (separator.unicode ? 'u' : '') +
                            (separator.sticky ? 'y' : '');
                        var lastLastIndex = 0;
                        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                        // Make `global` and avoid `lastIndex` issues by working with a copy
                        var separatorCopy = new RegExp(separator.source, flags + 'g');
                        var match, lastIndex, lastLength;
                        while ((match = regexpExec.call(separatorCopy, string))) {
                            lastIndex = separatorCopy[LAST_INDEX];
                            if (lastIndex > lastLastIndex) {
                                output.push(string.slice(lastLastIndex, match.index));
                                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                                lastLength = match[0][LENGTH];
                                lastLastIndex = lastIndex;
                                if (output[LENGTH] >= splitLimit) break;
                            }
                            if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                        }
                        if (lastLastIndex === string[LENGTH]) {
                            if (lastLength || !separatorCopy.test('')) output.push('');
                        } else output.push(string.slice(lastLastIndex));
                        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                    };
                    // Chakra, V8
                } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
                    internalSplit = function(separator, limit) {
                        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                    };
                } else {
                    internalSplit = $split;
                }

                return [
                    // `String.prototype.split` method
                    // https://tc39.github.io/ecma262/#sec-string.prototype.split
                    function split(separator, limit) {
                        var O = defined(this);
                        var splitter = separator == undefined ? undefined : separator[SPLIT];
                        return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
                    },
                    // `RegExp.prototype[@@split]` method
                    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                    //
                    // NOTE: This cannot be properly polyfilled in engines that don't support
                    // the 'y' flag.
                    function(regexp, limit) {
                        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                        if (res.done) return res.value;

                        var rx = anObject(regexp);
                        var S = String(this);
                        var C = speciesConstructor(rx, RegExp);

                        var unicodeMatching = rx.unicode;
                        var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

                        // ^(? + rx + ) is needed, in combination with some S slicing, to
                        // simulate the 'y' flag.
                        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                        if (lim === 0) return [];
                        if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                        var p = 0;
                        var q = 0;
                        var A = [];
                        while (q < S.length) {
                            splitter.lastIndex = SUPPORTS_Y ? q : 0;
                            var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                            var e;
                            if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                                q = advanceStringIndex(S, q, unicodeMatching);
                            } else {
                                A.push(S.slice(p, q));
                                if (A.length === lim) return A;
                                for (var i = 1; i <= z.length - 1; i++) {
                                    A.push(z[i]);
                                    if (A.length === lim) return A;
                                }
                                q = p = e;
                            }
                        }
                        A.push(S.slice(p));
                        return A;
                    }
                ];
            });

            /***/
        },
        /* 390 */
        /***/ function(module, exports, __webpack_require__) {
            // 7.3.20 SpeciesConstructor(O, defaultConstructor)
            var anObject = __webpack_require__(193);
            var aFunction = __webpack_require__(202);
            var SPECIES = __webpack_require__(207)('species');
            module.exports = function(O, D) {
                var C = anObject(O).constructor;
                var S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };

            /***/
        },
        /* 391 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var LIBRARY = __webpack_require__(205);
            var global = __webpack_require__(185);
            var ctx = __webpack_require__(201);
            var classof = __webpack_require__(255);
            var $export = __webpack_require__(189);
            var isObject = __webpack_require__(194);
            var aFunction = __webpack_require__(202);
            var anInstance = __webpack_require__(392);
            var forOf = __webpack_require__(393);
            var speciesConstructor = __webpack_require__(390);
            var task = __webpack_require__(394).set;
            var microtask = __webpack_require__(395)();
            var newPromiseCapabilityModule = __webpack_require__(396);
            var perform = __webpack_require__(397);
            var userAgent = __webpack_require__(398);
            var promiseResolve = __webpack_require__(399);
            var PROMISE = 'Promise';
            var TypeError = global.TypeError;
            var process = global.process;
            var versions = process && process.versions;
            var v8 = (versions && versions.v8) || '';
            var $Promise = global[PROMISE];
            var isNode = classof(process) == 'process';
            var empty = function() {
                /* empty */
            };
            var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
            var newPromiseCapability = (newGenericPromiseCapability = newPromiseCapabilityModule.f);

            var USE_NATIVE = !!(function() {
                try {
                    // correct subclassing with @@species support
                    var promise = $Promise.resolve(1);
                    var FakePromise = ((promise.constructor = {})[__webpack_require__(207)('species')] = function(exec) {
                        exec(empty, empty);
                    });
                    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                    return (
                        (isNode || typeof PromiseRejectionEvent == 'function') &&
                        promise.then(empty) instanceof FakePromise &&
                        // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                        // we can't detect it synchronously, so just check versions
                        v8.indexOf('6.6') !== 0 &&
                        userAgent.indexOf('Chrome/66') === -1
                    );
                } catch (e) {
                    /* empty */
                }
            })();

            // helpers
            var isThenable = function(it) {
                var then;
                return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
            };
            var notify = function(promise, isReject) {
                if (promise._n) return;
                promise._n = true;
                var chain = promise._c;
                microtask(function() {
                    var value = promise._v;
                    var ok = promise._s == 1;
                    var i = 0;
                    var run = function(reaction) {
                        var handler = ok ? reaction.ok : reaction.fail;
                        var resolve = reaction.resolve;
                        var reject = reaction.reject;
                        var domain = reaction.domain;
                        var result, then, exited;
                        try {
                            if (handler) {
                                if (!ok) {
                                    if (promise._h == 2) onHandleUnhandled(promise);
                                    promise._h = 1;
                                }
                                if (handler === true) result = value;
                                else {
                                    if (domain) domain.enter();
                                    result = handler(value); // may throw
                                    if (domain) {
                                        domain.exit();
                                        exited = true;
                                    }
                                }
                                if (result === reaction.promise) {
                                    reject(TypeError('Promise-chain cycle'));
                                } else if ((then = isThenable(result))) {
                                    then.call(result, resolve, reject);
                                } else resolve(result);
                            } else reject(value);
                        } catch (e) {
                            if (domain && !exited) domain.exit();
                            reject(e);
                        }
                    };
                    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                    promise._c = [];
                    promise._n = false;
                    if (isReject && !promise._h) onUnhandled(promise);
                });
            };
            var onUnhandled = function(promise) {
                task.call(global, function() {
                    var value = promise._v;
                    var unhandled = isUnhandled(promise);
                    var result, handler, console;
                    if (unhandled) {
                        result = perform(function() {
                            if (isNode) {
                                process.emit('unhandledRejection', value, promise);
                            } else if ((handler = global.onunhandledrejection)) {
                                handler({ promise: promise, reason: value });
                            } else if ((console = global.console) && console.error) {
                                console.error('Unhandled promise rejection', value);
                            }
                        });
                        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                    }
                    promise._a = undefined;
                    if (unhandled && result.e) throw result.v;
                });
            };
            var isUnhandled = function(promise) {
                return promise._h !== 1 && (promise._a || promise._c).length === 0;
            };
            var onHandleUnhandled = function(promise) {
                task.call(global, function() {
                    var handler;
                    if (isNode) {
                        process.emit('rejectionHandled', promise);
                    } else if ((handler = global.onrejectionhandled)) {
                        handler({ promise: promise, reason: promise._v });
                    }
                });
            };
            var $reject = function(value) {
                var promise = this;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                promise._v = value;
                promise._s = 2;
                if (!promise._a) promise._a = promise._c.slice();
                notify(promise, true);
            };
            var $resolve = function(value) {
                var promise = this;
                var then;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                try {
                    if (promise === value) throw TypeError("Promise can't be resolved itself");
                    if ((then = isThenable(value))) {
                        microtask(function() {
                            var wrapper = { _w: promise, _d: false }; // wrap
                            try {
                                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                            } catch (e) {
                                $reject.call(wrapper, e);
                            }
                        });
                    } else {
                        promise._v = value;
                        promise._s = 1;
                        notify(promise, false);
                    }
                } catch (e) {
                    $reject.call({ _w: promise, _d: false }, e); // wrap
                }
            };

            // constructor polyfill
            if (!USE_NATIVE) {
                // 25.4.3.1 Promise(executor)
                $Promise = function Promise(executor) {
                    anInstance(this, $Promise, PROMISE, '_h');
                    aFunction(executor);
                    Internal.call(this);
                    try {
                        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                    } catch (err) {
                        $reject.call(this, err);
                    }
                };
                // eslint-disable-next-line no-unused-vars
                Internal = function Promise(executor) {
                    this._c = []; // <- awaiting reactions
                    this._a = undefined; // <- checked in isUnhandled reactions
                    this._s = 0; // <- state
                    this._d = false; // <- done
                    this._v = undefined; // <- value
                    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                    this._n = false; // <- notify
                };
                Internal.prototype = __webpack_require__(400)($Promise.prototype, {
                    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                    then: function then(onFulfilled, onRejected) {
                        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                        reaction.fail = typeof onRejected == 'function' && onRejected;
                        reaction.domain = isNode ? process.domain : undefined;
                        this._c.push(reaction);
                        if (this._a) this._a.push(reaction);
                        if (this._s) notify(this, false);
                        return reaction.promise;
                    },
                    // 25.4.5.1 Promise.prototype.catch(onRejected)
                    catch: function(onRejected) {
                        return this.then(undefined, onRejected);
                    }
                });
                OwnPromiseCapability = function() {
                    var promise = new Internal();
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
                newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
                    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            __webpack_require__(206)($Promise, PROMISE);
            __webpack_require__(374)(PROMISE);
            Wrapper = __webpack_require__(190)[PROMISE];

            // statics
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                // 25.4.4.5 Promise.reject(r)
                reject: function reject(r) {
                    var capability = newPromiseCapability(this);
                    var $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                // 25.4.4.6 Promise.resolve(x)
                resolve: function resolve(x) {
                    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
                }
            });
            $export(
                $export.S +
                    $export.F *
                        !(
                            USE_NATIVE &&
                            __webpack_require__(347)(function(iter) {
                                $Promise.all(iter)['catch'](empty);
                            })
                        ),
                PROMISE,
                {
                    // 25.4.4.1 Promise.all(iterable)
                    all: function all(iterable) {
                        var C = this;
                        var capability = newPromiseCapability(C);
                        var resolve = capability.resolve;
                        var reject = capability.reject;
                        var result = perform(function() {
                            var values = [];
                            var index = 0;
                            var remaining = 1;
                            forOf(iterable, false, function(promise) {
                                var $index = index++;
                                var alreadyCalled = false;
                                values.push(undefined);
                                remaining++;
                                C.resolve(promise).then(function(value) {
                                    if (alreadyCalled) return;
                                    alreadyCalled = true;
                                    values[$index] = value;
                                    --remaining || resolve(values);
                                }, reject);
                            });
                            --remaining || resolve(values);
                        });
                        if (result.e) reject(result.v);
                        return capability.promise;
                    },
                    // 25.4.4.4 Promise.race(iterable)
                    race: function race(iterable) {
                        var C = this;
                        var capability = newPromiseCapability(C);
                        var reject = capability.reject;
                        var result = perform(function() {
                            forOf(iterable, false, function(promise) {
                                C.resolve(promise).then(capability.resolve, reject);
                            });
                        });
                        if (result.e) reject(result.v);
                        return capability.promise;
                    }
                }
            );

            /***/
        },
        /* 392 */
        /***/ function(module, exports) {
            module.exports = function(it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                    throw TypeError(name + ': incorrect invocation!');
                }
                return it;
            };

            /***/
        },
        /* 393 */
        /***/ function(module, exports, __webpack_require__) {
            var ctx = __webpack_require__(201);
            var call = __webpack_require__(343);
            var isArrayIter = __webpack_require__(344);
            var anObject = __webpack_require__(193);
            var toLength = __webpack_require__(218);
            var getIterFn = __webpack_require__(346);
            var BREAK = {};
            var RETURN = {};
            var exports = (module.exports = function(iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR
                    ? function() {
                          return iterable;
                      }
                    : getIterFn(iterable);
                var f = ctx(fn, that, entries ? 2 : 1);
                var index = 0;
                var length, step, iterator, result;
                if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                // fast case for arrays with default iterator
                if (isArrayIter(iterFn))
                    for (length = toLength(iterable.length); length > index; index++) {
                        result = entries ? f(anObject((step = iterable[index]))[0], step[1]) : f(iterable[index]);
                        if (result === BREAK || result === RETURN) return result;
                    }
                else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN) return result;
                    }
            });
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;

            /***/
        },
        /* 394 */
        /***/ function(module, exports, __webpack_require__) {
            var ctx = __webpack_require__(201);
            var invoke = __webpack_require__(258);
            var html = __webpack_require__(228);
            var cel = __webpack_require__(196);
            var global = __webpack_require__(185);
            var process = global.process;
            var setTask = global.setImmediate;
            var clearTask = global.clearImmediate;
            var MessageChannel = global.MessageChannel;
            var Dispatch = global.Dispatch;
            var counter = 0;
            var queue = {};
            var ONREADYSTATECHANGE = 'onreadystatechange';
            var defer, channel, port;
            var run = function() {
                var id = +this;
                // eslint-disable-next-line no-prototype-builtins
                if (queue.hasOwnProperty(id)) {
                    var fn = queue[id];
                    delete queue[id];
                    fn();
                }
            };
            var listener = function(event) {
                run.call(event.data);
            };
            // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
            if (!setTask || !clearTask) {
                setTask = function setImmediate(fn) {
                    var args = [];
                    var i = 1;
                    while (arguments.length > i) args.push(arguments[i++]);
                    queue[++counter] = function() {
                        // eslint-disable-next-line no-new-func
                        invoke(typeof fn == 'function' ? fn : Function(fn), args);
                    };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) {
                    delete queue[id];
                };
                // Node.js 0.8-
                if (__webpack_require__(215)(process) == 'process') {
                    defer = function(id) {
                        process.nextTick(ctx(run, id, 1));
                    };
                    // Sphere (JS game engine) Dispatch API
                } else if (Dispatch && Dispatch.now) {
                    defer = function(id) {
                        Dispatch.now(ctx(run, id, 1));
                    };
                    // Browsers with MessageChannel, includes WebWorkers
                } else if (MessageChannel) {
                    channel = new MessageChannel();
                    port = channel.port2;
                    channel.port1.onmessage = listener;
                    defer = ctx(port.postMessage, port, 1);
                    // Browsers with postMessage, skip WebWorkers
                    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
                } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                    defer = function(id) {
                        global.postMessage(id + '', '*');
                    };
                    global.addEventListener('message', listener, false);
                    // IE8-
                } else if (ONREADYSTATECHANGE in cel('script')) {
                    defer = function(id) {
                        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                            html.removeChild(this);
                            run.call(id);
                        };
                    };
                    // Rest old browsers
                } else {
                    defer = function(id) {
                        setTimeout(ctx(run, id, 1), 0);
                    };
                }
            }
            module.exports = {
                set: setTask,
                clear: clearTask
            };

            /***/
        },
        /* 395 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var macrotask = __webpack_require__(394).set;
            var Observer = global.MutationObserver || global.WebKitMutationObserver;
            var process = global.process;
            var Promise = global.Promise;
            var isNode = __webpack_require__(215)(process) == 'process';

            module.exports = function() {
                var head, last, notify;

                var flush = function() {
                    var parent, fn;
                    if (isNode && (parent = process.domain)) parent.exit();
                    while (head) {
                        fn = head.fn;
                        head = head.next;
                        try {
                            fn();
                        } catch (e) {
                            if (head) notify();
                            else last = undefined;
                            throw e;
                        }
                    }
                    last = undefined;
                    if (parent) parent.enter();
                };

                // Node.js
                if (isNode) {
                    notify = function() {
                        process.nextTick(flush);
                    };
                    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
                } else if (Observer && !(global.navigator && global.navigator.standalone)) {
                    var toggle = true;
                    var node = document.createTextNode('');
                    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                    notify = function() {
                        node.data = toggle = !toggle;
                    };
                    // environments with maybe non-completely correct, but existent Promise
                } else if (Promise && Promise.resolve) {
                    // Promise.resolve without an argument throws an error in LG WebOS 2
                    var promise = Promise.resolve(undefined);
                    notify = function() {
                        promise.then(flush);
                    };
                    // for other environments - macrotask based on:
                    // - setImmediate
                    // - MessageChannel
                    // - window.postMessag
                    // - onreadystatechange
                    // - setTimeout
                } else {
                    notify = function() {
                        // strange IE + webpack dev server bug - use .call(global)
                        macrotask.call(global, flush);
                    };
                }

                return function(fn) {
                    var task = { fn: fn, next: undefined };
                    if (last) last.next = task;
                    if (!head) {
                        head = task;
                        notify();
                    }
                    last = task;
                };
            };

            /***/
        },
        /* 396 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 25.4.1.5 NewPromiseCapability(C)
            var aFunction = __webpack_require__(202);

            function PromiseCapability(C) {
                var resolve, reject;
                this.promise = new C(function($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            }

            module.exports.f = function(C) {
                return new PromiseCapability(C);
            };

            /***/
        },
        /* 397 */
        /***/ function(module, exports) {
            module.exports = function(exec) {
                try {
                    return { e: false, v: exec() };
                } catch (e) {
                    return { e: true, v: e };
                }
            };

            /***/
        },
        /* 398 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var navigator = global.navigator;

            module.exports = (navigator && navigator.userAgent) || '';

            /***/
        },
        /* 399 */
        /***/ function(module, exports, __webpack_require__) {
            var anObject = __webpack_require__(193);
            var isObject = __webpack_require__(194);
            var newPromiseCapability = __webpack_require__(396);

            module.exports = function(C, x) {
                anObject(C);
                if (isObject(x) && x.constructor === C) return x;
                var promiseCapability = newPromiseCapability.f(C);
                var resolve = promiseCapability.resolve;
                resolve(x);
                return promiseCapability.promise;
            };

            /***/
        },
        /* 400 */
        /***/ function(module, exports, __webpack_require__) {
            var redefine = __webpack_require__(199);
            module.exports = function(target, src, safe) {
                for (var key in src) redefine(target, key, src[key], safe);
                return target;
            };

            /***/
        },
        /* 401 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var strong = __webpack_require__(402);
            var validate = __webpack_require__(403);
            var MAP = 'Map';

            // 23.1 Map Objects
            module.exports = __webpack_require__(404)(
                MAP,
                function(get) {
                    return function Map() {
                        return get(this, arguments.length > 0 ? arguments[0] : undefined);
                    };
                },
                {
                    // 23.1.3.6 Map.prototype.get(key)
                    get: function get(key) {
                        var entry = strong.getEntry(validate(this, MAP), key);
                        return entry && entry.v;
                    },
                    // 23.1.3.9 Map.prototype.set(key, value)
                    set: function set(key, value) {
                        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
                    }
                },
                strong,
                true
            );

            /***/
        },
        /* 402 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var dP = __webpack_require__(192).f;
            var create = __webpack_require__(226);
            var redefineAll = __webpack_require__(400);
            var ctx = __webpack_require__(201);
            var anInstance = __webpack_require__(392);
            var forOf = __webpack_require__(393);
            var $iterDefine = __webpack_require__(309);
            var step = __webpack_require__(376);
            var setSpecies = __webpack_require__(374);
            var DESCRIPTORS = __webpack_require__(187);
            var fastKey = __webpack_require__(203).fastKey;
            var validate = __webpack_require__(403);
            var SIZE = DESCRIPTORS ? '_s' : 'size';

            var getEntry = function(that, key) {
                // fast case
                var index = fastKey(key);
                var entry;
                if (index !== 'F') return that._i[index];
                // frozen object case
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key) return entry;
                }
            };

            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._t = NAME; // collection type
                        that._i = create(null); // index
                        that._f = undefined; // first entry
                        that._l = undefined; // last entry
                        that[SIZE] = 0; // size
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.1.3.1 Map.prototype.clear()
                        // 23.2.3.2 Set.prototype.clear()
                        clear: function clear() {
                            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                                entry.r = true;
                                if (entry.p) entry.p = entry.p.n = undefined;
                                delete data[entry.i];
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0;
                        },
                        // 23.1.3.3 Map.prototype.delete(key)
                        // 23.2.3.4 Set.prototype.delete(value)
                        delete: function(key) {
                            var that = validate(this, NAME);
                            var entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n;
                                var prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev) prev.n = next;
                                if (next) next.p = prev;
                                if (that._f == entry) that._f = next;
                                if (that._l == entry) that._l = prev;
                                that[SIZE]--;
                            }
                            return !!entry;
                        },
                        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                        forEach: function forEach(callbackfn /* , that = undefined */) {
                            validate(this, NAME);
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                            var entry;
                            while ((entry = entry ? entry.n : this._f)) {
                                f(entry.v, entry.k, this);
                                // revert to the last existing entry
                                while (entry && entry.r) entry = entry.p;
                            }
                        },
                        // 23.1.3.7 Map.prototype.has(key)
                        // 23.2.3.7 Set.prototype.has(value)
                        has: function has(key) {
                            return !!getEntry(validate(this, NAME), key);
                        }
                    });
                    if (DESCRIPTORS)
                        dP(C.prototype, 'size', {
                            get: function() {
                                return validate(this, NAME)[SIZE];
                            }
                        });
                    return C;
                },
                def: function(that, key, value) {
                    var entry = getEntry(that, key);
                    var prev, index;
                    // change existing entry
                    if (entry) {
                        entry.v = value;
                        // create new entry
                    } else {
                        that._l = entry = {
                            i: (index = fastKey(key, true)), // <- index
                            k: key, // <- key
                            v: value, // <- value
                            p: (prev = that._l), // <- previous entry
                            n: undefined, // <- next entry
                            r: false // <- removed
                        };
                        if (!that._f) that._f = entry;
                        if (prev) prev.n = entry;
                        that[SIZE]++;
                        // add to index
                        if (index !== 'F') that._i[index] = entry;
                    }
                    return that;
                },
                getEntry: getEntry,
                setStrong: function(C, NAME, IS_MAP) {
                    // add .keys, .values, .entries, [@@iterator]
                    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                    $iterDefine(
                        C,
                        NAME,
                        function(iterated, kind) {
                            this._t = validate(iterated, NAME); // target
                            this._k = kind; // kind
                            this._l = undefined; // previous
                        },
                        function() {
                            var that = this;
                            var kind = that._k;
                            var entry = that._l;
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                            // get next entry
                            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                                // or finish the iteration
                                that._t = undefined;
                                return step(1);
                            }
                            // return step by kind
                            if (kind == 'keys') return step(0, entry.k);
                            if (kind == 'values') return step(0, entry.v);
                            return step(0, [entry.k, entry.v]);
                        },
                        IS_MAP ? 'entries' : 'values',
                        !IS_MAP,
                        true
                    );

                    // add [@@species], 23.1.2.2, 23.2.2.2
                    setSpecies(NAME);
                }
            };

            /***/
        },
        /* 403 */
        /***/ function(module, exports, __webpack_require__) {
            var isObject = __webpack_require__(194);
            module.exports = function(it, TYPE) {
                if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
                return it;
            };

            /***/
        },
        /* 404 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(185);
            var $export = __webpack_require__(189);
            var redefine = __webpack_require__(199);
            var redefineAll = __webpack_require__(400);
            var meta = __webpack_require__(203);
            var forOf = __webpack_require__(393);
            var anInstance = __webpack_require__(392);
            var isObject = __webpack_require__(194);
            var fails = __webpack_require__(188);
            var $iterDetect = __webpack_require__(347);
            var setToStringTag = __webpack_require__(206);
            var inheritIfRequired = __webpack_require__(268);

            module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME];
                var C = Base;
                var ADDER = IS_MAP ? 'set' : 'add';
                var proto = C && C.prototype;
                var O = {};
                var fixMethod = function(KEY) {
                    var fn = proto[KEY];
                    redefine(
                        proto,
                        KEY,
                        KEY == 'delete'
                            ? function(a) {
                                  return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'has'
                            ? function has(a) {
                                  return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'get'
                            ? function get(a) {
                                  return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                              }
                            : KEY == 'add'
                            ? function add(a) {
                                  fn.call(this, a === 0 ? 0 : a);
                                  return this;
                              }
                            : function set(a, b) {
                                  fn.call(this, a === 0 ? 0 : a, b);
                                  return this;
                              }
                    );
                };
                if (
                    typeof C != 'function' ||
                    !(
                        IS_WEAK ||
                        (proto.forEach &&
                            !fails(function() {
                                new C().entries().next();
                            }))
                    )
                ) {
                    // create collection constructor
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true;
                } else {
                    var instance = new C();
                    // early implementations not supports chaining
                    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                    var THROWS_ON_PRIMITIVES = fails(function() {
                        instance.has(1);
                    });
                    // most early implementations doesn't supports iterables, most modern - not close it correctly
                    var ACCEPT_ITERABLES = $iterDetect(function(iter) {
                        new C(iter);
                    }); // eslint-disable-line no-new
                    // for early implementations -0 and +0 not the same
                    var BUGGY_ZERO =
                        !IS_WEAK &&
                        fails(function() {
                            // V8 ~ Chromium 42- fails only with 5+ elements
                            var $instance = new C();
                            var index = 5;
                            while (index--) $instance[ADDER](index, index);
                            return !$instance.has(-0);
                        });
                    if (!ACCEPT_ITERABLES) {
                        C = wrapper(function(target, iterable) {
                            anInstance(target, C, NAME);
                            var that = inheritIfRequired(new Base(), target, C);
                            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                            return that;
                        });
                        C.prototype = proto;
                        proto.constructor = C;
                    }
                    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                        fixMethod('delete');
                        fixMethod('has');
                        IS_MAP && fixMethod('get');
                    }
                    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                    // weak collections should not contains .clear method
                    if (IS_WEAK && proto.clear) delete proto.clear;
                }

                setToStringTag(C, NAME);

                O[NAME] = C;
                $export($export.G + $export.W + $export.F * (C != Base), O);

                if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

                return C;
            };

            /***/
        },
        /* 405 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var strong = __webpack_require__(402);
            var validate = __webpack_require__(403);
            var SET = 'Set';

            // 23.2 Set Objects
            module.exports = __webpack_require__(404)(
                SET,
                function(get) {
                    return function Set() {
                        return get(this, arguments.length > 0 ? arguments[0] : undefined);
                    };
                },
                {
                    // 23.2.3.1 Set.prototype.add(value)
                    add: function add(value) {
                        return strong.def(validate(this, SET), (value = value === 0 ? 0 : value), value);
                    }
                },
                strong
            );

            /***/
        },
        /* 406 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var each = __webpack_require__(354)(0);
            var redefine = __webpack_require__(199);
            var meta = __webpack_require__(203);
            var assign = __webpack_require__(249);
            var weak = __webpack_require__(407);
            var isObject = __webpack_require__(194);
            var fails = __webpack_require__(188);
            var validate = __webpack_require__(403);
            var WEAK_MAP = 'WeakMap';
            var getWeak = meta.getWeak;
            var isExtensible = Object.isExtensible;
            var uncaughtFrozenStore = weak.ufstore;
            var tmp = {};
            var InternalMap;

            var wrapper = function(get) {
                return function WeakMap() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            };

            var methods = {
                // 23.3.3.3 WeakMap.prototype.get(key)
                get: function get(key) {
                    if (isObject(key)) {
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
                        return data ? data[this._i] : undefined;
                    }
                },
                // 23.3.3.5 WeakMap.prototype.set(key, value)
                set: function set(key, value) {
                    return weak.def(validate(this, WEAK_MAP), key, value);
                }
            };

            // 23.3 WeakMap Objects
            var $WeakMap = (module.exports = __webpack_require__(404)(WEAK_MAP, wrapper, methods, weak, true, true));

            // IE11 WeakMap frozen keys fix
            if (
                fails(function() {
                    return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
                })
            ) {
                InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
                assign(InternalMap.prototype, methods);
                meta.NEED = true;
                each(['delete', 'has', 'get', 'set'], function(key) {
                    var proto = $WeakMap.prototype;
                    var method = proto[key];
                    redefine(proto, key, function(a, b) {
                        // store frozen objects on internal weakmap shim
                        if (isObject(a) && !isExtensible(a)) {
                            if (!this._f) this._f = new InternalMap();
                            var result = this._f[key](a, b);
                            return key == 'set' ? this : result;
                            // store all the rest on native weakmap
                        }
                        return method.call(this, a, b);
                    });
                });
            }

            /***/
        },
        /* 407 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var redefineAll = __webpack_require__(400);
            var getWeak = __webpack_require__(203).getWeak;
            var anObject = __webpack_require__(193);
            var isObject = __webpack_require__(194);
            var anInstance = __webpack_require__(392);
            var forOf = __webpack_require__(393);
            var createArrayMethod = __webpack_require__(354);
            var $has = __webpack_require__(186);
            var validate = __webpack_require__(403);
            var arrayFind = createArrayMethod(5);
            var arrayFindIndex = createArrayMethod(6);
            var id = 0;

            // fallback for uncaught frozen keys
            var uncaughtFrozenStore = function(that) {
                return that._l || (that._l = new UncaughtFrozenStore());
            };
            var UncaughtFrozenStore = function() {
                this.a = [];
            };
            var findUncaughtFrozen = function(store, key) {
                return arrayFind(store.a, function(it) {
                    return it[0] === key;
                });
            };
            UncaughtFrozenStore.prototype = {
                get: function(key) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) return entry[1];
                },
                has: function(key) {
                    return !!findUncaughtFrozen(this, key);
                },
                set: function(key, value) {
                    var entry = findUncaughtFrozen(this, key);
                    if (entry) entry[1] = value;
                    else this.a.push([key, value]);
                },
                delete: function(key) {
                    var index = arrayFindIndex(this.a, function(it) {
                        return it[0] === key;
                    });
                    if (~index) this.a.splice(index, 1);
                    return !!~index;
                }
            };

            module.exports = {
                getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function(that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._t = NAME; // collection type
                        that._i = id++; // collection id
                        that._l = undefined; // leak store for uncaught frozen objects
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.3.3.2 WeakMap.prototype.delete(key)
                        // 23.4.3.3 WeakSet.prototype.delete(value)
                        delete: function(key) {
                            if (!isObject(key)) return false;
                            var data = getWeak(key);
                            if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
                            return data && $has(data, this._i) && delete data[this._i];
                        },
                        // 23.3.3.4 WeakMap.prototype.has(key)
                        // 23.4.3.4 WeakSet.prototype.has(value)
                        has: function has(key) {
                            if (!isObject(key)) return false;
                            var data = getWeak(key);
                            if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                            return data && $has(data, this._i);
                        }
                    });
                    return C;
                },
                def: function(that, key, value) {
                    var data = getWeak(anObject(key), true);
                    if (data === true) uncaughtFrozenStore(that).set(key, value);
                    else data[that._i] = value;
                    return that;
                },
                ufstore: uncaughtFrozenStore
            };

            /***/
        },
        /* 408 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var weak = __webpack_require__(407);
            var validate = __webpack_require__(403);
            var WEAK_SET = 'WeakSet';

            // 23.4 WeakSet Objects
            __webpack_require__(404)(
                WEAK_SET,
                function(get) {
                    return function WeakSet() {
                        return get(this, arguments.length > 0 ? arguments[0] : undefined);
                    };
                },
                {
                    // 23.4.3.1 WeakSet.prototype.add(value)
                    add: function add(value) {
                        return weak.def(validate(this, WEAK_SET), value, true);
                    }
                },
                weak,
                false,
                true
            );

            /***/
        },
        /* 409 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var $export = __webpack_require__(189);
            var $typed = __webpack_require__(410);
            var buffer = __webpack_require__(411);
            var anObject = __webpack_require__(193);
            var toAbsoluteIndex = __webpack_require__(220);
            var toLength = __webpack_require__(218);
            var isObject = __webpack_require__(194);
            var ArrayBuffer = __webpack_require__(185).ArrayBuffer;
            var speciesConstructor = __webpack_require__(390);
            var $ArrayBuffer = buffer.ArrayBuffer;
            var $DataView = buffer.DataView;
            var $isView = $typed.ABV && ArrayBuffer.isView;
            var $slice = $ArrayBuffer.prototype.slice;
            var VIEW = $typed.VIEW;
            var ARRAY_BUFFER = 'ArrayBuffer';

            $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

            $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
                // 24.1.3.1 ArrayBuffer.isView(arg)
                isView: function isView(it) {
                    return ($isView && $isView(it)) || (isObject(it) && VIEW in it);
                }
            });

            $export(
                $export.P +
                    $export.U +
                    $export.F *
                        __webpack_require__(188)(function() {
                            return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
                        }),
                ARRAY_BUFFER,
                {
                    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
                    slice: function slice(start, end) {
                        if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
                        var len = anObject(this).byteLength;
                        var first = toAbsoluteIndex(start, len);
                        var fin = toAbsoluteIndex(end === undefined ? len : end, len);
                        var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
                        var viewS = new $DataView(this);
                        var viewT = new $DataView(result);
                        var index = 0;
                        while (first < fin) {
                            viewT.setUint8(index++, viewS.getUint8(first++));
                        }
                        return result;
                    }
                }
            );

            __webpack_require__(374)(ARRAY_BUFFER);

            /***/
        },
        /* 410 */
        /***/ function(module, exports, __webpack_require__) {
            var global = __webpack_require__(185);
            var hide = __webpack_require__(191);
            var uid = __webpack_require__(200);
            var TYPED = uid('typed_array');
            var VIEW = uid('view');
            var ABV = !!(global.ArrayBuffer && global.DataView);
            var CONSTR = ABV;
            var i = 0;
            var l = 9;
            var Typed;

            var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
                ','
            );

            while (i < l) {
                if ((Typed = global[TypedArrayConstructors[i++]])) {
                    hide(Typed.prototype, TYPED, true);
                    hide(Typed.prototype, VIEW, true);
                } else CONSTR = false;
            }

            module.exports = {
                ABV: ABV,
                CONSTR: CONSTR,
                TYPED: TYPED,
                VIEW: VIEW
            };

            /***/
        },
        /* 411 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var global = __webpack_require__(185);
            var DESCRIPTORS = __webpack_require__(187);
            var LIBRARY = __webpack_require__(205);
            var $typed = __webpack_require__(410);
            var hide = __webpack_require__(191);
            var redefineAll = __webpack_require__(400);
            var fails = __webpack_require__(188);
            var anInstance = __webpack_require__(392);
            var toInteger = __webpack_require__(219);
            var toLength = __webpack_require__(218);
            var toIndex = __webpack_require__(412);
            var gOPN = __webpack_require__(230).f;
            var dP = __webpack_require__(192).f;
            var arrayFill = __webpack_require__(370);
            var setToStringTag = __webpack_require__(206);
            var ARRAY_BUFFER = 'ArrayBuffer';
            var DATA_VIEW = 'DataView';
            var PROTOTYPE = 'prototype';
            var WRONG_LENGTH = 'Wrong length!';
            var WRONG_INDEX = 'Wrong index!';
            var $ArrayBuffer = global[ARRAY_BUFFER];
            var $DataView = global[DATA_VIEW];
            var Math = global.Math;
            var RangeError = global.RangeError;
            // eslint-disable-next-line no-shadow-restricted-names
            var Infinity = global.Infinity;
            var BaseBuffer = $ArrayBuffer;
            var abs = Math.abs;
            var pow = Math.pow;
            var floor = Math.floor;
            var log = Math.log;
            var LN2 = Math.LN2;
            var BUFFER = 'buffer';
            var BYTE_LENGTH = 'byteLength';
            var BYTE_OFFSET = 'byteOffset';
            var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
            var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
            var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

            // IEEE754 conversions based on https://github.com/feross/ieee754
            function packIEEE754(value, mLen, nBytes) {
                var buffer = new Array(nBytes);
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
                var i = 0;
                var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
                var e, m, c;
                value = abs(value);
                // eslint-disable-next-line no-self-compare
                if (value != value || value === Infinity) {
                    // eslint-disable-next-line no-self-compare
                    m = value != value ? 1 : 0;
                    e = eMax;
                } else {
                    e = floor(log(value) / LN2);
                    if (value * (c = pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * pow(2, eBias - 1) * pow(2, mLen);
                        e = 0;
                    }
                }
                for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
                e = (e << mLen) | m;
                eLen += mLen;
                for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
                buffer[--i] |= s * 128;
                return buffer;
            }
            function unpackIEEE754(buffer, mLen, nBytes) {
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = eLen - 7;
                var i = nBytes - 1;
                var s = buffer[i--];
                var e = s & 127;
                var m;
                s >>= 7;
                for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
                m = e & ((1 << -nBits) - 1);
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : s ? -Infinity : Infinity;
                } else {
                    m = m + pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * pow(2, e - mLen);
            }

            function unpackI32(bytes) {
                return (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0];
            }
            function packI8(it) {
                return [it & 0xff];
            }
            function packI16(it) {
                return [it & 0xff, (it >> 8) & 0xff];
            }
            function packI32(it) {
                return [it & 0xff, (it >> 8) & 0xff, (it >> 16) & 0xff, (it >> 24) & 0xff];
            }
            function packF64(it) {
                return packIEEE754(it, 52, 8);
            }
            function packF32(it) {
                return packIEEE754(it, 23, 4);
            }

            function addGetter(C, key, internal) {
                dP(C[PROTOTYPE], key, {
                    get: function() {
                        return this[internal];
                    }
                });
            }

            function get(view, bytes, index, isLittleEndian) {
                var numIndex = +index;
                var intIndex = toIndex(numIndex);
                if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
                var store = view[$BUFFER]._b;
                var start = intIndex + view[$OFFSET];
                var pack = store.slice(start, start + bytes);
                return isLittleEndian ? pack : pack.reverse();
            }
            function set(view, bytes, index, conversion, value, isLittleEndian) {
                var numIndex = +index;
                var intIndex = toIndex(numIndex);
                if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
                var store = view[$BUFFER]._b;
                var start = intIndex + view[$OFFSET];
                var pack = conversion(+value);
                for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
            }

            if (!$typed.ABV) {
                $ArrayBuffer = function ArrayBuffer(length) {
                    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                    var byteLength = toIndex(length);
                    this._b = arrayFill.call(new Array(byteLength), 0);
                    this[$LENGTH] = byteLength;
                };

                $DataView = function DataView(buffer, byteOffset, byteLength) {
                    anInstance(this, $DataView, DATA_VIEW);
                    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                    var bufferLength = buffer[$LENGTH];
                    var offset = toInteger(byteOffset);
                    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
                    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
                    this[$BUFFER] = buffer;
                    this[$OFFSET] = offset;
                    this[$LENGTH] = byteLength;
                };

                if (DESCRIPTORS) {
                    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
                    addGetter($DataView, BUFFER, '_b');
                    addGetter($DataView, BYTE_LENGTH, '_l');
                    addGetter($DataView, BYTE_OFFSET, '_o');
                }

                redefineAll($DataView[PROTOTYPE], {
                    getInt8: function getInt8(byteOffset) {
                        return (get(this, 1, byteOffset)[0] << 24) >> 24;
                    },
                    getUint8: function getUint8(byteOffset) {
                        return get(this, 1, byteOffset)[0];
                    },
                    getInt16: function getInt16(byteOffset /* , littleEndian */) {
                        var bytes = get(this, 2, byteOffset, arguments[1]);
                        return (((bytes[1] << 8) | bytes[0]) << 16) >> 16;
                    },
                    getUint16: function getUint16(byteOffset /* , littleEndian */) {
                        var bytes = get(this, 2, byteOffset, arguments[1]);
                        return (bytes[1] << 8) | bytes[0];
                    },
                    getInt32: function getInt32(byteOffset /* , littleEndian */) {
                        return unpackI32(get(this, 4, byteOffset, arguments[1]));
                    },
                    getUint32: function getUint32(byteOffset /* , littleEndian */) {
                        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
                    },
                    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
                        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
                    },
                    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
                        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
                    },
                    setInt8: function setInt8(byteOffset, value) {
                        set(this, 1, byteOffset, packI8, value);
                    },
                    setUint8: function setUint8(byteOffset, value) {
                        set(this, 1, byteOffset, packI8, value);
                    },
                    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
                        set(this, 2, byteOffset, packI16, value, arguments[2]);
                    },
                    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
                        set(this, 2, byteOffset, packI16, value, arguments[2]);
                    },
                    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
                        set(this, 4, byteOffset, packI32, value, arguments[2]);
                    },
                    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
                        set(this, 4, byteOffset, packI32, value, arguments[2]);
                    },
                    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
                        set(this, 4, byteOffset, packF32, value, arguments[2]);
                    },
                    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
                        set(this, 8, byteOffset, packF64, value, arguments[2]);
                    }
                });
            } else {
                if (
                    !fails(function() {
                        $ArrayBuffer(1);
                    }) ||
                    !fails(function() {
                        new $ArrayBuffer(-1); // eslint-disable-line no-new
                    }) ||
                    fails(function() {
                        new $ArrayBuffer(); // eslint-disable-line no-new
                        new $ArrayBuffer(1.5); // eslint-disable-line no-new
                        new $ArrayBuffer(NaN); // eslint-disable-line no-new
                        return $ArrayBuffer.name != ARRAY_BUFFER;
                    })
                ) {
                    $ArrayBuffer = function ArrayBuffer(length) {
                        anInstance(this, $ArrayBuffer);
                        return new BaseBuffer(toIndex(length));
                    };
                    var ArrayBufferProto = ($ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE]);
                    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ) {
                        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
                    }
                    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
                }
                // iOS Safari 7.x bug
                var view = new $DataView(new $ArrayBuffer(2));
                var $setInt8 = $DataView[PROTOTYPE].setInt8;
                view.setInt8(0, 2147483648);
                view.setInt8(1, 2147483649);
                if (view.getInt8(0) || !view.getInt8(1))
                    redefineAll(
                        $DataView[PROTOTYPE],
                        {
                            setInt8: function setInt8(byteOffset, value) {
                                $setInt8.call(this, byteOffset, (value << 24) >> 24);
                            },
                            setUint8: function setUint8(byteOffset, value) {
                                $setInt8.call(this, byteOffset, (value << 24) >> 24);
                            }
                        },
                        true
                    );
            }
            setToStringTag($ArrayBuffer, ARRAY_BUFFER);
            setToStringTag($DataView, DATA_VIEW);
            hide($DataView[PROTOTYPE], $typed.VIEW, true);
            exports[ARRAY_BUFFER] = $ArrayBuffer;
            exports[DATA_VIEW] = $DataView;

            /***/
        },
        /* 412 */
        /***/ function(module, exports, __webpack_require__) {
            // https://tc39.github.io/ecma262/#sec-toindex
            var toInteger = __webpack_require__(219);
            var toLength = __webpack_require__(218);
            module.exports = function(it) {
                if (it === undefined) return 0;
                var number = toInteger(it);
                var length = toLength(number);
                if (number !== length) throw RangeError('Wrong length!');
                return length;
            };

            /***/
        },
        /* 413 */
        /***/ function(module, exports, __webpack_require__) {
            var $export = __webpack_require__(189);
            $export($export.G + $export.W + $export.F * !__webpack_require__(410).ABV, {
                DataView: __webpack_require__(411).DataView
            });

            /***/
        },
        /* 414 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Int8', 1, function(init) {
                return function Int8Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 415 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            if (__webpack_require__(187)) {
                var LIBRARY = __webpack_require__(205);
                var global = __webpack_require__(185);
                var fails = __webpack_require__(188);
                var $export = __webpack_require__(189);
                var $typed = __webpack_require__(410);
                var $buffer = __webpack_require__(411);
                var ctx = __webpack_require__(201);
                var anInstance = __webpack_require__(392);
                var propertyDesc = __webpack_require__(198);
                var hide = __webpack_require__(191);
                var redefineAll = __webpack_require__(400);
                var toInteger = __webpack_require__(219);
                var toLength = __webpack_require__(218);
                var toIndex = __webpack_require__(412);
                var toAbsoluteIndex = __webpack_require__(220);
                var toPrimitive = __webpack_require__(197);
                var has = __webpack_require__(186);
                var classof = __webpack_require__(255);
                var isObject = __webpack_require__(194);
                var toObject = __webpack_require__(238);
                var isArrayIter = __webpack_require__(344);
                var create = __webpack_require__(226);
                var getPrototypeOf = __webpack_require__(239);
                var gOPN = __webpack_require__(230).f;
                var getIterFn = __webpack_require__(346);
                var uid = __webpack_require__(200);
                var wks = __webpack_require__(207);
                var createArrayMethod = __webpack_require__(354);
                var createArrayIncludes = __webpack_require__(217);
                var speciesConstructor = __webpack_require__(390);
                var ArrayIterators = __webpack_require__(375);
                var Iterators = __webpack_require__(310);
                var $iterDetect = __webpack_require__(347);
                var setSpecies = __webpack_require__(374);
                var arrayFill = __webpack_require__(370);
                var arrayCopyWithin = __webpack_require__(367);
                var $DP = __webpack_require__(192);
                var $GOPD = __webpack_require__(231);
                var dP = $DP.f;
                var gOPD = $GOPD.f;
                var RangeError = global.RangeError;
                var TypeError = global.TypeError;
                var Uint8Array = global.Uint8Array;
                var ARRAY_BUFFER = 'ArrayBuffer';
                var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
                var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
                var PROTOTYPE = 'prototype';
                var ArrayProto = Array[PROTOTYPE];
                var $ArrayBuffer = $buffer.ArrayBuffer;
                var $DataView = $buffer.DataView;
                var arrayForEach = createArrayMethod(0);
                var arrayFilter = createArrayMethod(2);
                var arraySome = createArrayMethod(3);
                var arrayEvery = createArrayMethod(4);
                var arrayFind = createArrayMethod(5);
                var arrayFindIndex = createArrayMethod(6);
                var arrayIncludes = createArrayIncludes(true);
                var arrayIndexOf = createArrayIncludes(false);
                var arrayValues = ArrayIterators.values;
                var arrayKeys = ArrayIterators.keys;
                var arrayEntries = ArrayIterators.entries;
                var arrayLastIndexOf = ArrayProto.lastIndexOf;
                var arrayReduce = ArrayProto.reduce;
                var arrayReduceRight = ArrayProto.reduceRight;
                var arrayJoin = ArrayProto.join;
                var arraySort = ArrayProto.sort;
                var arraySlice = ArrayProto.slice;
                var arrayToString = ArrayProto.toString;
                var arrayToLocaleString = ArrayProto.toLocaleString;
                var ITERATOR = wks('iterator');
                var TAG = wks('toStringTag');
                var TYPED_CONSTRUCTOR = uid('typed_constructor');
                var DEF_CONSTRUCTOR = uid('def_constructor');
                var ALL_CONSTRUCTORS = $typed.CONSTR;
                var TYPED_ARRAY = $typed.TYPED;
                var VIEW = $typed.VIEW;
                var WRONG_LENGTH = 'Wrong length!';

                var $map = createArrayMethod(1, function(O, length) {
                    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
                });

                var LITTLE_ENDIAN = fails(function() {
                    // eslint-disable-next-line no-undef
                    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
                });

                var FORCED_SET =
                    !!Uint8Array &&
                    !!Uint8Array[PROTOTYPE].set &&
                    fails(function() {
                        new Uint8Array(1).set({});
                    });

                var toOffset = function(it, BYTES) {
                    var offset = toInteger(it);
                    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
                    return offset;
                };

                var validate = function(it) {
                    if (isObject(it) && TYPED_ARRAY in it) return it;
                    throw TypeError(it + ' is not a typed array!');
                };

                var allocate = function(C, length) {
                    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                        throw TypeError('It is not a typed array constructor!');
                    }
                    return new C(length);
                };

                var speciesFromList = function(O, list) {
                    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
                };

                var fromList = function(C, list) {
                    var index = 0;
                    var length = list.length;
                    var result = allocate(C, length);
                    while (length > index) result[index] = list[index++];
                    return result;
                };

                var addGetter = function(it, key, internal) {
                    dP(it, key, {
                        get: function() {
                            return this._d[internal];
                        }
                    });
                };

                var $from = function from(source /* , mapfn, thisArg */) {
                    var O = toObject(source);
                    var aLen = arguments.length;
                    var mapfn = aLen > 1 ? arguments[1] : undefined;
                    var mapping = mapfn !== undefined;
                    var iterFn = getIterFn(O);
                    var i, length, values, result, step, iterator;
                    if (iterFn != undefined && !isArrayIter(iterFn)) {
                        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                            values.push(step.value);
                        }
                        O = values;
                    }
                    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
                    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
                        result[i] = mapping ? mapfn(O[i], i) : O[i];
                    }
                    return result;
                };

                var $of = function of(/* ...items */) {
                    var index = 0;
                    var length = arguments.length;
                    var result = allocate(this, length);
                    while (length > index) result[index] = arguments[index++];
                    return result;
                };

                // iOS Safari 6.x fails here
                var TO_LOCALE_BUG =
                    !!Uint8Array &&
                    fails(function() {
                        arrayToLocaleString.call(new Uint8Array(1));
                    });

                var $toLocaleString = function toLocaleString() {
                    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
                };

                var proto = {
                    copyWithin: function copyWithin(target, start /* , end */) {
                        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                    },
                    every: function every(callbackfn /* , thisArg */) {
                        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    fill: function fill(value /* , start, end */) {
                        // eslint-disable-line no-unused-vars
                        return arrayFill.apply(validate(this), arguments);
                    },
                    filter: function filter(callbackfn /* , thisArg */) {
                        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
                    },
                    find: function find(predicate /* , thisArg */) {
                        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    findIndex: function findIndex(predicate /* , thisArg */) {
                        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    forEach: function forEach(callbackfn /* , thisArg */) {
                        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    indexOf: function indexOf(searchElement /* , fromIndex */) {
                        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    includes: function includes(searchElement /* , fromIndex */) {
                        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    join: function join(separator) {
                        // eslint-disable-line no-unused-vars
                        return arrayJoin.apply(validate(this), arguments);
                    },
                    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
                        // eslint-disable-line no-unused-vars
                        return arrayLastIndexOf.apply(validate(this), arguments);
                    },
                    map: function map(mapfn /* , thisArg */) {
                        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    reduce: function reduce(callbackfn /* , initialValue */) {
                        // eslint-disable-line no-unused-vars
                        return arrayReduce.apply(validate(this), arguments);
                    },
                    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
                        // eslint-disable-line no-unused-vars
                        return arrayReduceRight.apply(validate(this), arguments);
                    },
                    reverse: function reverse() {
                        var that = this;
                        var length = validate(that).length;
                        var middle = Math.floor(length / 2);
                        var index = 0;
                        var value;
                        while (index < middle) {
                            value = that[index];
                            that[index++] = that[--length];
                            that[length] = value;
                        }
                        return that;
                    },
                    some: function some(callbackfn /* , thisArg */) {
                        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                    },
                    sort: function sort(comparefn) {
                        return arraySort.call(validate(this), comparefn);
                    },
                    subarray: function subarray(begin, end) {
                        var O = validate(this);
                        var length = O.length;
                        var $begin = toAbsoluteIndex(begin, length);
                        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
                            O.buffer,
                            O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
                            toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
                        );
                    }
                };

                var $slice = function slice(start, end) {
                    return speciesFromList(this, arraySlice.call(validate(this), start, end));
                };

                var $set = function set(arrayLike /* , offset */) {
                    validate(this);
                    var offset = toOffset(arguments[1], 1);
                    var length = this.length;
                    var src = toObject(arrayLike);
                    var len = toLength(src.length);
                    var index = 0;
                    if (len + offset > length) throw RangeError(WRONG_LENGTH);
                    while (index < len) this[offset + index] = src[index++];
                };

                var $iterators = {
                    entries: function entries() {
                        return arrayEntries.call(validate(this));
                    },
                    keys: function keys() {
                        return arrayKeys.call(validate(this));
                    },
                    values: function values() {
                        return arrayValues.call(validate(this));
                    }
                };

                var isTAIndex = function(target, key) {
                    return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
                };
                var $getDesc = function getOwnPropertyDescriptor(target, key) {
                    return isTAIndex(target, (key = toPrimitive(key, true))) ? propertyDesc(2, target[key]) : gOPD(target, key);
                };
                var $setDesc = function defineProperty(target, key, desc) {
                    if (
                        isTAIndex(target, (key = toPrimitive(key, true))) &&
                        isObject(desc) &&
                        has(desc, 'value') &&
                        !has(desc, 'get') &&
                        !has(desc, 'set') &&
                        // TODO: add validation descriptor w/o calling accessors
                        !desc.configurable &&
                        (!has(desc, 'writable') || desc.writable) &&
                        (!has(desc, 'enumerable') || desc.enumerable)
                    ) {
                        target[key] = desc.value;
                        return target;
                    }
                    return dP(target, key, desc);
                };

                if (!ALL_CONSTRUCTORS) {
                    $GOPD.f = $getDesc;
                    $DP.f = $setDesc;
                }

                $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
                    getOwnPropertyDescriptor: $getDesc,
                    defineProperty: $setDesc
                });

                if (
                    fails(function() {
                        arrayToString.call({});
                    })
                ) {
                    arrayToString = arrayToLocaleString = function toString() {
                        return arrayJoin.call(this);
                    };
                }

                var $TypedArrayPrototype$ = redefineAll({}, proto);
                redefineAll($TypedArrayPrototype$, $iterators);
                hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
                redefineAll($TypedArrayPrototype$, {
                    slice: $slice,
                    set: $set,
                    constructor: function() {
                        /* noop */
                    },
                    toString: arrayToString,
                    toLocaleString: $toLocaleString
                });
                addGetter($TypedArrayPrototype$, 'buffer', 'b');
                addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
                addGetter($TypedArrayPrototype$, 'byteLength', 'l');
                addGetter($TypedArrayPrototype$, 'length', 'e');
                dP($TypedArrayPrototype$, TAG, {
                    get: function() {
                        return this[TYPED_ARRAY];
                    }
                });

                // eslint-disable-next-line max-statements
                module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
                    CLAMPED = !!CLAMPED;
                    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
                    var GETTER = 'get' + KEY;
                    var SETTER = 'set' + KEY;
                    var TypedArray = global[NAME];
                    var Base = TypedArray || {};
                    var TAC = TypedArray && getPrototypeOf(TypedArray);
                    var FORCED = !TypedArray || !$typed.ABV;
                    var O = {};
                    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
                    var getter = function(that, index) {
                        var data = that._d;
                        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                    };
                    var setter = function(that, index, value) {
                        var data = that._d;
                        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
                        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                    };
                    var addElement = function(that, index) {
                        dP(that, index, {
                            get: function() {
                                return getter(this, index);
                            },
                            set: function(value) {
                                return setter(this, index, value);
                            },
                            enumerable: true
                        });
                    };
                    if (FORCED) {
                        TypedArray = wrapper(function(that, data, $offset, $length) {
                            anInstance(that, TypedArray, NAME, '_d');
                            var index = 0;
                            var offset = 0;
                            var buffer, byteLength, length, klass;
                            if (!isObject(data)) {
                                length = toIndex(data);
                                byteLength = length * BYTES;
                                buffer = new $ArrayBuffer(byteLength);
                            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                                buffer = data;
                                offset = toOffset($offset, BYTES);
                                var $len = data.byteLength;
                                if ($length === undefined) {
                                    if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                                    byteLength = $len - offset;
                                    if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                                } else {
                                    byteLength = toLength($length) * BYTES;
                                    if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                                }
                                length = byteLength / BYTES;
                            } else if (TYPED_ARRAY in data) {
                                return fromList(TypedArray, data);
                            } else {
                                return $from.call(TypedArray, data);
                            }
                            hide(that, '_d', {
                                b: buffer,
                                o: offset,
                                l: byteLength,
                                e: length,
                                v: new $DataView(buffer)
                            });
                            while (index < length) addElement(that, index++);
                        });
                        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                        hide(TypedArrayPrototype, 'constructor', TypedArray);
                    } else if (
                        !fails(function() {
                            TypedArray(1);
                        }) ||
                        !fails(function() {
                            new TypedArray(-1); // eslint-disable-line no-new
                        }) ||
                        !$iterDetect(function(iter) {
                            new TypedArray(); // eslint-disable-line no-new
                            new TypedArray(null); // eslint-disable-line no-new
                            new TypedArray(1.5); // eslint-disable-line no-new
                            new TypedArray(iter); // eslint-disable-line no-new
                        }, true)
                    ) {
                        TypedArray = wrapper(function(that, data, $offset, $length) {
                            anInstance(that, TypedArray, NAME);
                            var klass;
                            // `ws` module bug, temporarily remove validation length for Uint8Array
                            // https://github.com/websockets/ws/pull/645
                            if (!isObject(data)) return new Base(toIndex(data));
                            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                                return $length !== undefined
                                    ? new Base(data, toOffset($offset, BYTES), $length)
                                    : $offset !== undefined
                                    ? new Base(data, toOffset($offset, BYTES))
                                    : new Base(data);
                            }
                            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                            return $from.call(TypedArray, data);
                        });
                        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
                        });
                        TypedArray[PROTOTYPE] = TypedArrayPrototype;
                        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
                    }
                    var $nativeIterator = TypedArrayPrototype[ITERATOR];
                    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
                    var $iterator = $iterators.values;
                    hide(TypedArray, TYPED_CONSTRUCTOR, true);
                    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
                    hide(TypedArrayPrototype, VIEW, true);
                    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

                    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                        dP(TypedArrayPrototype, TAG, {
                            get: function() {
                                return NAME;
                            }
                        });
                    }

                    O[NAME] = TypedArray;

                    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

                    $export($export.S, NAME, {
                        BYTES_PER_ELEMENT: BYTES
                    });

                    $export(
                        $export.S +
                            $export.F *
                                fails(function() {
                                    Base.of.call(TypedArray, 1);
                                }),
                        NAME,
                        {
                            from: $from,
                            of: $of
                        }
                    );

                    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

                    $export($export.P, NAME, proto);

                    setSpecies(NAME);

                    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

                    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

                    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

                    $export(
                        $export.P +
                            $export.F *
                                fails(function() {
                                    new TypedArray(1).slice();
                                }),
                        NAME,
                        { slice: $slice }
                    );

                    $export(
                        $export.P +
                            $export.F *
                                (fails(function() {
                                    return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
                                }) ||
                                    !fails(function() {
                                        TypedArrayPrototype.toLocaleString.call([1, 2]);
                                    })),
                        NAME,
                        { toLocaleString: $toLocaleString }
                    );

                    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
                    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
                };
            } else
                module.exports = function() {
                    /* empty */
                };

            /***/
        },
        /* 416 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Uint8', 1, function(init) {
                return function Uint8Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 417 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)(
                'Uint8',
                1,
                function(init) {
                    return function Uint8ClampedArray(data, byteOffset, length) {
                        return init(this, data, byteOffset, length);
                    };
                },
                true
            );

            /***/
        },
        /* 418 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Int16', 2, function(init) {
                return function Int16Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 419 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Uint16', 2, function(init) {
                return function Uint16Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 420 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Int32', 4, function(init) {
                return function Int32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 421 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Uint32', 4, function(init) {
                return function Uint32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 422 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Float32', 4, function(init) {
                return function Float32Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 423 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(415)('Float64', 8, function(init) {
                return function Float64Array(data, byteOffset, length) {
                    return init(this, data, byteOffset, length);
                };
            });

            /***/
        },
        /* 424 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
            var $export = __webpack_require__(189);
            var aFunction = __webpack_require__(202);
            var anObject = __webpack_require__(193);
            var rApply = (__webpack_require__(185).Reflect || {}).apply;
            var fApply = Function.apply;
            // MS Edge argumentsList argument is optional
            $export(
                $export.S +
                    $export.F *
                        !__webpack_require__(188)(function() {
                            rApply(function() {
                                /* empty */
                            });
                        }),
                'Reflect',
                {
                    apply: function apply(target, thisArgument, argumentsList) {
                        var T = aFunction(target);
                        var L = anObject(argumentsList);
                        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
                    }
                }
            );

            /***/
        },
        /* 425 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
            var $export = __webpack_require__(189);
            var create = __webpack_require__(226);
            var aFunction = __webpack_require__(202);
            var anObject = __webpack_require__(193);
            var isObject = __webpack_require__(194);
            var fails = __webpack_require__(188);
            var bind = __webpack_require__(257);
            var rConstruct = (__webpack_require__(185).Reflect || {}).construct;

            // MS Edge supports only 2 arguments and argumentsList argument is optional
            // FF Nightly sets third argument as `new.target`, but does not create `this` from it
            var NEW_TARGET_BUG = fails(function() {
                function F() {
                    /* empty */
                }
                return !(
                    rConstruct(
                        function() {
                            /* empty */
                        },
                        [],
                        F
                    ) instanceof F
                );
            });
            var ARGS_BUG = !fails(function() {
                rConstruct(function() {
                    /* empty */
                });
            });

            $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
                construct: function construct(Target, args /* , newTarget */) {
                    aFunction(Target);
                    anObject(args);
                    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
                    if (Target == newTarget) {
                        // w/o altered newTarget, optimization for 0-4 arguments
                        switch (args.length) {
                            case 0:
                                return new Target();
                            case 1:
                                return new Target(args[0]);
                            case 2:
                                return new Target(args[0], args[1]);
                            case 3:
                                return new Target(args[0], args[1], args[2]);
                            case 4:
                                return new Target(args[0], args[1], args[2], args[3]);
                        }
                        // w/o altered newTarget, lot of arguments case
                        var $args = [null];
                        $args.push.apply($args, args);
                        return new (bind.apply(Target, $args))();
                    }
                    // with altered newTarget, not support built-in constructors
                    var proto = newTarget.prototype;
                    var instance = create(isObject(proto) ? proto : Object.prototype);
                    var result = Function.apply.call(Target, instance, args);
                    return isObject(result) ? result : instance;
                }
            });

            /***/
        },
        /* 426 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
            var dP = __webpack_require__(192);
            var $export = __webpack_require__(189);
            var anObject = __webpack_require__(193);
            var toPrimitive = __webpack_require__(197);

            // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
            $export(
                $export.S +
                    $export.F *
                        __webpack_require__(188)(function() {
                            // eslint-disable-next-line no-undef
                            Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
                        }),
                'Reflect',
                {
                    defineProperty: function defineProperty(target, propertyKey, attributes) {
                        anObject(target);
                        propertyKey = toPrimitive(propertyKey, true);
                        anObject(attributes);
                        try {
                            dP.f(target, propertyKey, attributes);
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                }
            );

            /***/
        },
        /* 427 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.4 Reflect.deleteProperty(target, propertyKey)
            var $export = __webpack_require__(189);
            var gOPD = __webpack_require__(231).f;
            var anObject = __webpack_require__(193);

            $export($export.S, 'Reflect', {
                deleteProperty: function deleteProperty(target, propertyKey) {
                    var desc = gOPD(anObject(target), propertyKey);
                    return desc && !desc.configurable ? false : delete target[propertyKey];
                }
            });

            /***/
        },
        /* 428 */
        /***/ function(module, exports, __webpack_require__) {
            'use strict';
            // 26.1.5 Reflect.enumerate(target)
            var $export = __webpack_require__(189);
            var anObject = __webpack_require__(193);
            var Enumerate = function(iterated) {
                this._t = anObject(iterated); // target
                this._i = 0; // next index
                var keys = (this._k = []); // keys
                var key;
                for (key in iterated) keys.push(key);
            };
            __webpack_require__(311)(Enumerate, 'Object', function() {
                var that = this;
                var keys = that._k;
                var key;
                do {
                    if (that._i >= keys.length) return { value: undefined, done: true };
                } while (!((key = keys[that._i++]) in that._t));
                return { value: key, done: false };
            });

            $export($export.S, 'Reflect', {
                enumerate: function enumerate(target) {
                    return new Enumerate(target);
                }
            });

            /***/
        },
        /* 429 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.6 Reflect.get(target, propertyKey [, receiver])
            var gOPD = __webpack_require__(231);
            var getPrototypeOf = __webpack_require__(239);
            var has = __webpack_require__(186);
            var $export = __webpack_require__(189);
            var isObject = __webpack_require__(194);
            var anObject = __webpack_require__(193);

            function get(target, propertyKey /* , receiver */) {
                var receiver = arguments.length < 3 ? target : arguments[2];
                var desc, proto;
                if (anObject(target) === receiver) return target[propertyKey];
                if ((desc = gOPD.f(target, propertyKey)))
                    return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
                if (isObject((proto = getPrototypeOf(target)))) return get(proto, propertyKey, receiver);
            }

            $export($export.S, 'Reflect', { get: get });

            /***/
        },
        /* 430 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
            var gOPD = __webpack_require__(231);
            var $export = __webpack_require__(189);
            var anObject = __webpack_require__(193);

            $export($export.S, 'Reflect', {
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                    return gOPD.f(anObject(target), propertyKey);
                }
            });

            /***/
        },
        /* 431 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.8 Reflect.getPrototypeOf(target)
            var $export = __webpack_require__(189);
            var getProto = __webpack_require__(239);
            var anObject = __webpack_require__(193);

            $export($export.S, 'Reflect', {
                getPrototypeOf: function getPrototypeOf(target) {
                    return getProto(anObject(target));
                }
            });

            /***/
        },
        /* 432 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.9 Reflect.has(target, propertyKey)
            var $export = __webpack_require__(189);

            $export($export.S, 'Reflect', {
                has: function has(target, propertyKey) {
                    return propertyKey in target;
                }
            });

            /***/
        },
        /* 433 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.10 Reflect.isExtensible(target)
            var $export = __webpack_require__(189);
            var anObject = __webpack_require__(193);
            var $isExtensible = Object.isExtensible;

            $export($export.S, 'Reflect', {
                isExtensible: function isExtensible(target) {
                    anObject(target);
                    return $isExtensible ? $isExtensible(target) : true;
                }
            });

            /***/
        },
        /* 434 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.11 Reflect.ownKeys(target)
            var $export = __webpack_require__(189);

            $export($export.S, 'Reflect', { ownKeys: __webpack_require__(435) });

            /***/
        },
        /* 435 */
        /***/ function(module, exports, __webpack_require__) {
            // all object keys, includes non-enumerable and symbols
            var gOPN = __webpack_require__(230);
            var gOPS = __webpack_require__(223);
            var anObject = __webpack_require__(193);
            var Reflect = __webpack_require__(185).Reflect;
            module.exports =
                (Reflect && Reflect.ownKeys) ||
                function ownKeys(it) {
                    var keys = gOPN.f(anObject(it));
                    var getSymbols = gOPS.f;
                    return getSymbols ? keys.concat(getSymbols(it)) : keys;
                };

            /***/
        },
        /* 436 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.12 Reflect.preventExtensions(target)
            var $export = __webpack_require__(189);
            var anObject = __webpack_require__(193);
            var $preventExtensions = Object.preventExtensions;

            $export($export.S, 'Reflect', {
                preventExtensions: function preventExtensions(target) {
                    anObject(target);
                    try {
                        if ($preventExtensions) $preventExtensions(target);
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
            });

            /***/
        },
        /* 437 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
            var dP = __webpack_require__(192);
            var gOPD = __webpack_require__(231);
            var getPrototypeOf = __webpack_require__(239);
            var has = __webpack_require__(186);
            var $export = __webpack_require__(189);
            var createDesc = __webpack_require__(198);
            var anObject = __webpack_require__(193);
            var isObject = __webpack_require__(194);

            function set(target, propertyKey, V /* , receiver */) {
                var receiver = arguments.length < 4 ? target : arguments[3];
                var ownDesc = gOPD.f(anObject(target), propertyKey);
                var existingDescriptor, proto;
                if (!ownDesc) {
                    if (isObject((proto = getPrototypeOf(target)))) {
                        return set(proto, propertyKey, V, receiver);
                    }
                    ownDesc = createDesc(0);
                }
                if (has(ownDesc, 'value')) {
                    if (ownDesc.writable === false || !isObject(receiver)) return false;
                    if ((existingDescriptor = gOPD.f(receiver, propertyKey))) {
                        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
                        existingDescriptor.value = V;
                        dP.f(receiver, propertyKey, existingDescriptor);
                    } else dP.f(receiver, propertyKey, createDesc(0, V));
                    return true;
                }
                return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
            }

            $export($export.S, 'Reflect', { set: set });

            /***/
        },
        /* 438 */
        /***/ function(module, exports, __webpack_require__) {
            // 26.1.14 Reflect.setPrototypeOf(target, proto)
            var $export = __webpack_require__(189);
            var setProto = __webpack_require__(253);

            if (setProto)
                $export($export.S, 'Reflect', {
                    setPrototypeOf: function setPrototypeOf(target, proto) {
                        setProto.check(target, proto);
                        try {
                            setProto.set(target, proto);
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                });

            /***/
        },
        /* 439 */
        /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(440);
            __webpack_require__(442);
            __webpack_require__(443);
            __webpack_require__(444);
            __webpack_require__(446);
            __webpack_require__(447);
            __webpack_require__(448);
            __webpack_require__(449);
            __webpack_require__(450);
            module.exports = __webpack_require__(190).Reflect;

            /***/
        },
        /* 440 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var toMetaKey = metadata.key;
            var ordinaryDefineOwnMetadata = metadata.set;

            metadata.exp({
                defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
                    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
                }
            });

            /***/
        },
        /* 441 */
        /***/ function(module, exports, __webpack_require__) {
            var Map = __webpack_require__(401);
            var $export = __webpack_require__(189);
            var shared = __webpack_require__(204)('metadata');
            var store = shared.store || (shared.store = new (__webpack_require__(406))());

            var getOrCreateMetadataMap = function(target, targetKey, create) {
                var targetMetadata = store.get(target);
                if (!targetMetadata) {
                    if (!create) return undefined;
                    store.set(target, (targetMetadata = new Map()));
                }
                var keyMetadata = targetMetadata.get(targetKey);
                if (!keyMetadata) {
                    if (!create) return undefined;
                    targetMetadata.set(targetKey, (keyMetadata = new Map()));
                }
                return keyMetadata;
            };
            var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
                var metadataMap = getOrCreateMetadataMap(O, P, false);
                return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
            };
            var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
                var metadataMap = getOrCreateMetadataMap(O, P, false);
                return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
            };
            var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
                getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
            };
            var ordinaryOwnMetadataKeys = function(target, targetKey) {
                var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
                var keys = [];
                if (metadataMap)
                    metadataMap.forEach(function(_, key) {
                        keys.push(key);
                    });
                return keys;
            };
            var toMetaKey = function(it) {
                return it === undefined || typeof it == 'symbol' ? it : String(it);
            };
            var exp = function(O) {
                $export($export.S, 'Reflect', O);
            };

            module.exports = {
                store: store,
                map: getOrCreateMetadataMap,
                has: ordinaryHasOwnMetadata,
                get: ordinaryGetOwnMetadata,
                set: ordinaryDefineOwnMetadata,
                keys: ordinaryOwnMetadataKeys,
                key: toMetaKey,
                exp: exp
            };

            /***/
        },
        /* 442 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var toMetaKey = metadata.key;
            var getOrCreateMetadataMap = metadata.map;
            var store = metadata.store;

            metadata.exp({
                deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
                    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
                    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
                    if (metadataMap.size) return true;
                    var targetMetadata = store.get(target);
                    targetMetadata['delete'](targetKey);
                    return !!targetMetadata.size || store['delete'](target);
                }
            });

            /***/
        },
        /* 443 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var getPrototypeOf = __webpack_require__(239);
            var ordinaryHasOwnMetadata = metadata.has;
            var ordinaryGetOwnMetadata = metadata.get;
            var toMetaKey = metadata.key;

            var ordinaryGetMetadata = function(MetadataKey, O, P) {
                var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = getPrototypeOf(O);
                return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
            };

            metadata.exp({
                getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
                    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });

            /***/
        },
        /* 444 */
        /***/ function(module, exports, __webpack_require__) {
            var Set = __webpack_require__(405);
            var from = __webpack_require__(445);
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var getPrototypeOf = __webpack_require__(239);
            var ordinaryOwnMetadataKeys = metadata.keys;
            var toMetaKey = metadata.key;

            var ordinaryMetadataKeys = function(O, P) {
                var oKeys = ordinaryOwnMetadataKeys(O, P);
                var parent = getPrototypeOf(O);
                if (parent === null) return oKeys;
                var pKeys = ordinaryMetadataKeys(parent, P);
                return pKeys.length ? (oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys) : oKeys;
            };

            metadata.exp({
                getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
                    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
                }
            });

            /***/
        },
        /* 445 */
        /***/ function(module, exports, __webpack_require__) {
            var forOf = __webpack_require__(393);

            module.exports = function(iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };

            /***/
        },
        /* 446 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var ordinaryGetOwnMetadata = metadata.get;
            var toMetaKey = metadata.key;

            metadata.exp({
                getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
                    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });

            /***/
        },
        /* 447 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var ordinaryOwnMetadataKeys = metadata.keys;
            var toMetaKey = metadata.key;

            metadata.exp({
                getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
                    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
                }
            });

            /***/
        },
        /* 448 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var getPrototypeOf = __webpack_require__(239);
            var ordinaryHasOwnMetadata = metadata.has;
            var toMetaKey = metadata.key;

            var ordinaryHasMetadata = function(MetadataKey, O, P) {
                var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return true;
                var parent = getPrototypeOf(O);
                return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
            };

            metadata.exp({
                hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
                    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });

            /***/
        },
        /* 449 */
        /***/ function(module, exports, __webpack_require__) {
            var metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var ordinaryHasOwnMetadata = metadata.has;
            var toMetaKey = metadata.key;

            metadata.exp({
                hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
                    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
                }
            });

            /***/
        },
        /* 450 */
        /***/ function(module, exports, __webpack_require__) {
            var $metadata = __webpack_require__(441);
            var anObject = __webpack_require__(193);
            var aFunction = __webpack_require__(202);
            var toMetaKey = $metadata.key;
            var ordinaryDefineOwnMetadata = $metadata.set;

            $metadata.exp({
                metadata: function metadata(metadataKey, metadataValue) {
                    return function decorator(target, targetKey) {
                        ordinaryDefineOwnMetadata(
                            metadataKey,
                            metadataValue,
                            (targetKey !== undefined ? anObject : aFunction)(target),
                            toMetaKey(targetKey)
                        );
                    };
                }
            });

            /***/
        },
        /* 451 */
        /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global, process) {
                /**
                 * @license
                 * Copyright Google Inc. All Rights Reserved.
                 *
                 * Use of this source code is governed by an MIT-style license that can be
                 * found in the LICENSE file at https://angular.io/license
                 */
                (function(global, factory) {
                    true ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
                })(this, function() {
                    'use strict';

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */

                    var Zone$1 = (function(global) {
                        if (global.Zone) {
                            throw new Error('Zone already loaded.');
                        }
                        var Zone = (function() {
                            function Zone(parent, zoneSpec) {
                                this._properties = null;
                                this._parent = parent;
                                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                                this._properties = (zoneSpec && zoneSpec.properties) || {};
                                this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
                            }
                            Zone.assertZonePatched = function() {
                                if (global.Promise !== ZoneAwarePromise) {
                                    throw new Error(
                                        'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                                            'has been overwritten.\n' +
                                            'Most likely cause is that a Promise polyfill has been loaded ' +
                                            'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                                            'If you must load one, do so before loading zone.js.)'
                                    );
                                }
                            };
                            Object.defineProperty(Zone, 'current', {
                                get: function() {
                                    return _currentZone;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(Zone, 'currentTask', {
                                get: function() {
                                    return _currentTask;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(Zone.prototype, 'parent', {
                                get: function() {
                                    return this._parent;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(Zone.prototype, 'name', {
                                get: function() {
                                    return this._name;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Zone.prototype.get = function(key) {
                                var zone = this.getZoneWith(key);
                                if (zone) return zone._properties[key];
                            };
                            Zone.prototype.getZoneWith = function(key) {
                                var current = this;
                                while (current) {
                                    if (current._properties.hasOwnProperty(key)) {
                                        return current;
                                    }
                                    current = current._parent;
                                }
                                return null;
                            };
                            Zone.prototype.fork = function(zoneSpec) {
                                if (!zoneSpec) throw new Error('ZoneSpec required!');
                                return this._zoneDelegate.fork(this, zoneSpec);
                            };
                            Zone.prototype.wrap = function(callback, source) {
                                if (typeof callback !== 'function') {
                                    throw new Error('Expecting function got: ' + callback);
                                }
                                var _callback = this._zoneDelegate.intercept(this, callback, source);
                                var zone = this;
                                return function() {
                                    return zone.runGuarded(_callback, this, arguments, source);
                                };
                            };
                            Zone.prototype.run = function(callback, applyThis, applyArgs, source) {
                                if (applyThis === void 0) {
                                    applyThis = null;
                                }
                                if (applyArgs === void 0) {
                                    applyArgs = null;
                                }
                                if (source === void 0) {
                                    source = null;
                                }
                                var oldZone = _currentZone;
                                _currentZone = this;
                                try {
                                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                                } finally {
                                    _currentZone = oldZone;
                                }
                            };
                            Zone.prototype.runGuarded = function(callback, applyThis, applyArgs, source) {
                                if (applyThis === void 0) {
                                    applyThis = null;
                                }
                                if (applyArgs === void 0) {
                                    applyArgs = null;
                                }
                                if (source === void 0) {
                                    source = null;
                                }
                                var oldZone = _currentZone;
                                _currentZone = this;
                                try {
                                    try {
                                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                                    } catch (error) {
                                        if (this._zoneDelegate.handleError(this, error)) {
                                            throw error;
                                        }
                                    }
                                } finally {
                                    _currentZone = oldZone;
                                }
                            };
                            Zone.prototype.runTask = function(task, applyThis, applyArgs) {
                                task.runCount++;
                                if (task.zone != this)
                                    throw new Error(
                                        'A task can only be run in the zone which created it! (Creation: ' +
                                            task.zone.name +
                                            '; Execution: ' +
                                            this.name +
                                            ')'
                                    );
                                var previousTask = _currentTask;
                                _currentTask = task;
                                var oldZone = _currentZone;
                                _currentZone = this;
                                try {
                                    if (task.type == 'macroTask' && task.data && !task.data.isPeriodic) {
                                        task.cancelFn = null;
                                    }
                                    try {
                                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                                    } catch (error) {
                                        if (this._zoneDelegate.handleError(this, error)) {
                                            throw error;
                                        }
                                    }
                                } finally {
                                    _currentZone = oldZone;
                                    _currentTask = previousTask;
                                }
                            };
                            Zone.prototype.scheduleMicroTask = function(source, callback, data, customSchedule) {
                                return this._zoneDelegate.scheduleTask(
                                    this,
                                    new ZoneTask('microTask', this, source, callback, data, customSchedule, null)
                                );
                            };
                            Zone.prototype.scheduleMacroTask = function(source, callback, data, customSchedule, customCancel) {
                                return this._zoneDelegate.scheduleTask(
                                    this,
                                    new ZoneTask('macroTask', this, source, callback, data, customSchedule, customCancel)
                                );
                            };
                            Zone.prototype.scheduleEventTask = function(source, callback, data, customSchedule, customCancel) {
                                return this._zoneDelegate.scheduleTask(
                                    this,
                                    new ZoneTask('eventTask', this, source, callback, data, customSchedule, customCancel)
                                );
                            };
                            Zone.prototype.cancelTask = function(task) {
                                var value = this._zoneDelegate.cancelTask(this, task);
                                task.runCount = -1;
                                task.cancelFn = null;
                                return value;
                            };
                            Zone.__symbol__ = __symbol__;
                            return Zone;
                        })();

                        var ZoneDelegate = (function() {
                            function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                                this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 };
                                this.zone = zone;
                                this._parentDelegate = parentDelegate;
                                this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                                this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                                this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                                this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                                this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                                this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                                this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                                this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                                this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                                this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                                this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                                this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                                this._hasTaskZS = zoneSpec && (zoneSpec.onHasTask ? zoneSpec : parentDelegate._hasTaskZS);
                                this._hasTaskDlgt = zoneSpec && (zoneSpec.onHasTask ? parentDelegate : parentDelegate._hasTaskDlgt);
                            }
                            ZoneDelegate.prototype.fork = function(targetZone, zoneSpec) {
                                return this._forkZS
                                    ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec)
                                    : new Zone(targetZone, zoneSpec);
                            };
                            ZoneDelegate.prototype.intercept = function(targetZone, callback, source) {
                                return this._interceptZS
                                    ? this._interceptZS.onIntercept(this._interceptDlgt, this.zone, targetZone, callback, source)
                                    : callback;
                            };
                            ZoneDelegate.prototype.invoke = function(targetZone, callback, applyThis, applyArgs, source) {
                                return this._invokeZS
                                    ? this._invokeZS.onInvoke(this._invokeDlgt, this.zone, targetZone, callback, applyThis, applyArgs, source)
                                    : callback.apply(applyThis, applyArgs);
                            };
                            ZoneDelegate.prototype.handleError = function(targetZone, error) {
                                return this._handleErrorZS
                                    ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this.zone, targetZone, error)
                                    : true;
                            };
                            ZoneDelegate.prototype.scheduleTask = function(targetZone, task) {
                                try {
                                    if (this._scheduleTaskZS) {
                                        return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this.zone, targetZone, task);
                                    } else if (task.scheduleFn) {
                                        task.scheduleFn(task);
                                    } else if (task.type == 'microTask') {
                                        scheduleMicroTask(task);
                                    } else {
                                        throw new Error('Task is missing scheduleFn.');
                                    }
                                    return task;
                                } finally {
                                    if (targetZone == this.zone) {
                                        this._updateTaskCount(task.type, 1);
                                    }
                                }
                            };
                            ZoneDelegate.prototype.invokeTask = function(targetZone, task, applyThis, applyArgs) {
                                try {
                                    return this._invokeTaskZS
                                        ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this.zone, targetZone, task, applyThis, applyArgs)
                                        : task.callback.apply(applyThis, applyArgs);
                                } finally {
                                    if (targetZone == this.zone && task.type != 'eventTask' && !(task.data && task.data.isPeriodic)) {
                                        this._updateTaskCount(task.type, -1);
                                    }
                                }
                            };
                            ZoneDelegate.prototype.cancelTask = function(targetZone, task) {
                                var value;
                                if (this._cancelTaskZS) {
                                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this.zone, targetZone, task);
                                } else if (!task.cancelFn) {
                                    throw new Error('Task does not support cancellation, or is already canceled.');
                                } else {
                                    value = task.cancelFn(task);
                                }
                                if (targetZone == this.zone) {
                                    // this should not be in the finally block, because exceptions assume not canceled.
                                    this._updateTaskCount(task.type, -1);
                                }
                                return value;
                            };
                            ZoneDelegate.prototype.hasTask = function(targetZone, isEmpty) {
                                return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this.zone, targetZone, isEmpty);
                            };
                            ZoneDelegate.prototype._updateTaskCount = function(type, count) {
                                var counts = this._taskCounts;
                                var prev = counts[type];
                                var next = (counts[type] = prev + count);
                                if (next < 0) {
                                    throw new Error('More tasks executed then were scheduled.');
                                }
                                if (prev == 0 || next == 0) {
                                    var isEmpty = {
                                        microTask: counts.microTask > 0,
                                        macroTask: counts.macroTask > 0,
                                        eventTask: counts.eventTask > 0,
                                        change: type
                                    };
                                    try {
                                        this.hasTask(this.zone, isEmpty);
                                    } finally {
                                        if (this._parentDelegate) {
                                            this._parentDelegate._updateTaskCount(type, count);
                                        }
                                    }
                                }
                            };
                            return ZoneDelegate;
                        })();
                        var ZoneTask = (function() {
                            function ZoneTask(type, zone, source, callback, options, scheduleFn, cancelFn) {
                                this.runCount = 0;
                                this.type = type;
                                this.zone = zone;
                                this.source = source;
                                this.data = options;
                                this.scheduleFn = scheduleFn;
                                this.cancelFn = cancelFn;
                                this.callback = callback;
                                var self = this;
                                this.invoke = function() {
                                    _numberOfNestedTaskFrames++;
                                    try {
                                        return zone.runTask(self, this, arguments);
                                    } finally {
                                        if (_numberOfNestedTaskFrames == 1) {
                                            drainMicroTaskQueue();
                                        }
                                        _numberOfNestedTaskFrames--;
                                    }
                                };
                            }
                            ZoneTask.prototype.toString = function() {
                                if (this.data && typeof this.data.handleId !== 'undefined') {
                                    return this.data.handleId;
                                } else {
                                    return Object.prototype.toString.call(this);
                                }
                            };
                            return ZoneTask;
                        })();
                        function __symbol__(name) {
                            return '__zone_symbol__' + name;
                        }

                        var symbolSetTimeout = __symbol__('setTimeout');
                        var symbolPromise = __symbol__('Promise');
                        var symbolThen = __symbol__('then');
                        var _currentZone = new Zone(null, null);
                        var _currentTask = null;
                        var _microTaskQueue = [];
                        var _isDrainingMicrotaskQueue = false;
                        var _uncaughtPromiseErrors = [];
                        var _numberOfNestedTaskFrames = 0;
                        function scheduleQueueDrain() {
                            // if we are not running in any task, and there has not been anything scheduled
                            // we must bootstrap the initial task creation by manually scheduling the drain
                            if (_numberOfNestedTaskFrames == 0 && _microTaskQueue.length == 0) {
                                // We are not running in Task, so we need to kickstart the microtask queue.
                                if (global[symbolPromise]) {
                                    global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
                                } else {
                                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                                }
                            }
                        }
                        function scheduleMicroTask(task) {
                            scheduleQueueDrain();
                            _microTaskQueue.push(task);
                        }
                        function consoleError(e) {
                            var rejection = e && e.rejection;
                            if (rejection) {
                                console.error(
                                    'Unhandled Promise rejection:',
                                    rejection instanceof Error ? rejection.message : rejection,
                                    '; Zone:',
                                    e.zone.name,
                                    '; Task:',
                                    e.task && e.task.source,
                                    '; Value:',
                                    rejection,
                                    rejection instanceof Error ? rejection.stack : undefined
                                );
                            }
                            console.error(e);
                        }
                        function drainMicroTaskQueue() {
                            if (!_isDrainingMicrotaskQueue) {
                                _isDrainingMicrotaskQueue = true;
                                while (_microTaskQueue.length) {
                                    var queue = _microTaskQueue;
                                    _microTaskQueue = [];
                                    for (var i = 0; i < queue.length; i++) {
                                        var task = queue[i];
                                        try {
                                            task.zone.runTask(task, null, null);
                                        } catch (e) {
                                            consoleError(e);
                                        }
                                    }
                                }
                                while (_uncaughtPromiseErrors.length) {
                                    var _loop_1 = function() {
                                        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                                        try {
                                            uncaughtPromiseError.zone.runGuarded(function() {
                                                throw uncaughtPromiseError;
                                            });
                                        } catch (e) {
                                            consoleError(e);
                                        }
                                    };
                                    while (_uncaughtPromiseErrors.length) {
                                        _loop_1();
                                    }
                                }
                                _isDrainingMicrotaskQueue = false;
                            }
                        }
                        function isThenable(value) {
                            return value && value.then;
                        }
                        function forwardResolution(value) {
                            return value;
                        }
                        function forwardRejection(rejection) {
                            return ZoneAwarePromise.reject(rejection);
                        }
                        var symbolState = __symbol__('state');
                        var symbolValue = __symbol__('value');
                        var source = 'Promise.then';
                        var UNRESOLVED = null;
                        var RESOLVED = true;
                        var REJECTED = false;
                        var REJECTED_NO_CATCH = 0;
                        function makeResolver(promise, state) {
                            return function(v) {
                                resolvePromise(promise, state, v);
                                // Do not return value or you will break the Promise spec.
                            };
                        }
                        function resolvePromise(promise, state, value) {
                            if (promise[symbolState] === UNRESOLVED) {
                                if (value instanceof ZoneAwarePromise && value[symbolState] !== UNRESOLVED) {
                                    clearRejectedNoCatch(value);
                                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                                } else if (isThenable(value)) {
                                    value.then(makeResolver(promise, state), makeResolver(promise, false));
                                } else {
                                    promise[symbolState] = state;
                                    var queue = promise[symbolValue];
                                    promise[symbolValue] = value;
                                    for (var i = 0; i < queue.length; ) {
                                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                                    }
                                    if (queue.length == 0 && state == REJECTED) {
                                        promise[symbolState] = REJECTED_NO_CATCH;
                                        try {
                                            throw new Error('Uncaught (in promise): ' + value + (value && value.stack ? '\n' + value.stack : ''));
                                        } catch (e) {
                                            var error_1 = e;
                                            error_1.rejection = value;
                                            error_1.promise = promise;
                                            error_1.zone = Zone.current;
                                            error_1.task = Zone.currentTask;
                                            _uncaughtPromiseErrors.push(error_1);
                                            scheduleQueueDrain();
                                        }
                                    }
                                }
                            }
                            // Resolving an already resolved promise is a noop.
                            return promise;
                        }
                        function clearRejectedNoCatch(promise) {
                            if (promise[symbolState] === REJECTED_NO_CATCH) {
                                promise[symbolState] = REJECTED;
                                for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                                    if (promise === _uncaughtPromiseErrors[i].promise) {
                                        _uncaughtPromiseErrors.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                        }
                        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
                            clearRejectedNoCatch(promise);
                            var delegate = promise[symbolState] ? onFulfilled || forwardResolution : onRejected || forwardRejection;
                            zone.scheduleMicroTask(source, function() {
                                try {
                                    resolvePromise(chainPromise, true, zone.run(delegate, null, [promise[symbolValue]]));
                                } catch (error) {
                                    resolvePromise(chainPromise, false, error);
                                }
                            });
                        }
                        var ZoneAwarePromise = (function() {
                            function ZoneAwarePromise(executor) {
                                var promise = this;
                                if (!(promise instanceof ZoneAwarePromise)) {
                                    throw new Error('Must be an instanceof Promise.');
                                }
                                promise[symbolState] = UNRESOLVED;
                                promise[symbolValue] = []; // queue;
                                try {
                                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                                } catch (e) {
                                    resolvePromise(promise, false, e);
                                }
                            }
                            ZoneAwarePromise.resolve = function(value) {
                                return resolvePromise(new this(null), RESOLVED, value);
                            };
                            ZoneAwarePromise.reject = function(error) {
                                return resolvePromise(new this(null), REJECTED, error);
                            };
                            ZoneAwarePromise.race = function(values) {
                                var resolve;
                                var reject;
                                var promise = new this(function(res, rej) {
                                    (_a = [res, rej]), (resolve = _a[0]), (reject = _a[1]);
                                    var _a;
                                });
                                function onResolve(value) {
                                    promise && (promise = null || resolve(value));
                                }
                                function onReject(error) {
                                    promise && (promise = null || reject(error));
                                }
                                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                                    var value = values_1[_i];
                                    if (!isThenable(value)) {
                                        value = this.resolve(value);
                                    }
                                    value.then(onResolve, onReject);
                                }
                                return promise;
                            };
                            ZoneAwarePromise.all = function(values) {
                                var resolve;
                                var reject;
                                var promise = new this(function(res, rej) {
                                    resolve = res;
                                    reject = rej;
                                });
                                var count = 0;
                                var resolvedValues = [];
                                for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                                    var value = values_2[_i];
                                    if (!isThenable(value)) {
                                        value = this.resolve(value);
                                    }
                                    value.then(
                                        (function(index) {
                                            return function(value) {
                                                resolvedValues[index] = value;
                                                count--;
                                                if (!count) {
                                                    resolve(resolvedValues);
                                                }
                                            };
                                        })(count),
                                        reject
                                    );
                                    count++;
                                }
                                if (!count) resolve(resolvedValues);
                                return promise;
                            };
                            ZoneAwarePromise.prototype.then = function(onFulfilled, onRejected) {
                                var chainPromise = new this.constructor(null);
                                var zone = Zone.current;
                                if (this[symbolState] == UNRESOLVED) {
                                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                                } else {
                                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                                }
                                return chainPromise;
                            };
                            ZoneAwarePromise.prototype.catch = function(onRejected) {
                                return this.then(null, onRejected);
                            };
                            return ZoneAwarePromise;
                        })();
                        // Protect against aggressive optimizers dropping seemingly unused properties.
                        // E.g. Closure Compiler in advanced mode.
                        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
                        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
                        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
                        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
                        var NativePromise = (global[__symbol__('Promise')] = global.Promise);
                        global.Promise = ZoneAwarePromise;
                        function patchThen(NativePromise) {
                            var NativePromiseProtototype = NativePromise.prototype;
                            var NativePromiseThen = (NativePromiseProtototype[__symbol__('then')] = NativePromiseProtototype.then);
                            NativePromiseProtototype.then = function(onResolve, onReject) {
                                var nativePromise = this;
                                return new ZoneAwarePromise(function(resolve, reject) {
                                    NativePromiseThen.call(nativePromise, resolve, reject);
                                }).then(onResolve, onReject);
                            };
                        }
                        if (NativePromise) {
                            patchThen(NativePromise);
                            if (typeof global['fetch'] !== 'undefined') {
                                var fetchPromise = void 0;
                                try {
                                    // In MS Edge this throws
                                    fetchPromise = global['fetch']();
                                } catch (e) {
                                    // In Chrome this throws instead.
                                    fetchPromise = global['fetch']('about:blank');
                                }
                                // ignore output to prevent error;
                                fetchPromise.then(
                                    function() {
                                        return null;
                                    },
                                    function() {
                                        return null;
                                    }
                                );
                                if (fetchPromise.constructor != NativePromise && fetchPromise.constructor != ZoneAwarePromise) {
                                    patchThen(fetchPromise.constructor);
                                }
                            }
                        }
                        // This is not part of public API, but it is usefull for tests, so we expose it.
                        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
                        return (global.Zone = Zone);
                    })((typeof window === 'object' && window) || (typeof self === 'object' && self) || global);

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var zoneSymbol = Zone['__symbol__'];
                    var _global$1 = (typeof window === 'object' && window) || (typeof self === 'object' && self) || global;
                    function bindArguments(args, source) {
                        for (var i = args.length - 1; i >= 0; i--) {
                            if (typeof args[i] === 'function') {
                                args[i] = Zone.current.wrap(args[i], source + '_' + i);
                            }
                        }
                        return args;
                    }

                    function patchPrototype(prototype, fnNames) {
                        var source = prototype.constructor['name'];
                        var _loop_1 = function(i) {
                            var name_1 = fnNames[i];
                            var delegate = prototype[name_1];
                            if (delegate) {
                                prototype[name_1] = (function(delegate) {
                                    return function() {
                                        return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                                    };
                                })(delegate);
                            }
                        };
                        for (var i = 0; i < fnNames.length; i++) {
                            _loop_1(i);
                        }
                    }

                    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
                    var isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
                    var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
                    function patchProperty(obj, prop) {
                        var desc = Object.getOwnPropertyDescriptor(obj, prop) || { enumerable: true, configurable: true };
                        // A property descriptor cannot have getter/setter and be writable
                        // deleting the writable and value properties avoids this error:
                        //
                        // TypeError: property descriptors must not specify a value or be writable when a
                        // getter or setter has been specified
                        delete desc.writable;
                        delete desc.value;
                        // substr(2) cuz 'onclick' -> 'click', etc
                        var eventName = prop.substr(2);
                        var _prop = '_' + prop;
                        desc.set = function(fn) {
                            if (this[_prop]) {
                                this.removeEventListener(eventName, this[_prop]);
                            }
                            if (typeof fn === 'function') {
                                var wrapFn = function(event) {
                                    var result;
                                    result = fn.apply(this, arguments);
                                    if (result != undefined && !result) event.preventDefault();
                                };
                                this[_prop] = wrapFn;
                                this.addEventListener(eventName, wrapFn, false);
                            } else {
                                this[_prop] = null;
                            }
                        };
                        // The getter would return undefined for unassigned properties but the default value of an
                        // unassigned property is null
                        desc.get = function() {
                            return this[_prop] || null;
                        };
                        Object.defineProperty(obj, prop, desc);
                    }

                    function patchOnProperties(obj, properties) {
                        var onProperties = [];
                        for (var prop in obj) {
                            if (prop.substr(0, 2) == 'on') {
                                onProperties.push(prop);
                            }
                        }
                        for (var j = 0; j < onProperties.length; j++) {
                            patchProperty(obj, onProperties[j]);
                        }
                        if (properties) {
                            for (var i = 0; i < properties.length; i++) {
                                patchProperty(obj, 'on' + properties[i]);
                            }
                        }
                    }

                    var EVENT_TASKS = zoneSymbol('eventTasks');
                    // For EventTarget
                    var ADD_EVENT_LISTENER = 'addEventListener';
                    var REMOVE_EVENT_LISTENER = 'removeEventListener';
                    function findExistingRegisteredTask(target, handler, name, capture, remove) {
                        var eventTasks = target[EVENT_TASKS];
                        if (eventTasks) {
                            for (var i = 0; i < eventTasks.length; i++) {
                                var eventTask = eventTasks[i];
                                var data = eventTask.data;
                                if (data.handler === handler && data.useCapturing === capture && data.eventName === name) {
                                    if (remove) {
                                        eventTasks.splice(i, 1);
                                    }
                                    return eventTask;
                                }
                            }
                        }
                        return null;
                    }
                    function attachRegisteredEvent(target, eventTask) {
                        var eventTasks = target[EVENT_TASKS];
                        if (!eventTasks) {
                            eventTasks = target[EVENT_TASKS] = [];
                        }
                        eventTasks.push(eventTask);
                    }
                    function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates) {
                        if (useCapturingParam === void 0) {
                            useCapturingParam = true;
                        }
                        if (allowDuplicates === void 0) {
                            allowDuplicates = false;
                        }
                        var addFnSymbol = zoneSymbol(addFnName);
                        var removeFnSymbol = zoneSymbol(removeFnName);
                        var defaultUseCapturing = useCapturingParam ? false : undefined;
                        function scheduleEventListener(eventTask) {
                            var meta = eventTask.data;
                            attachRegisteredEvent(meta.target, eventTask);
                            return meta.target[addFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
                        }
                        function cancelEventListener(eventTask) {
                            var meta = eventTask.data;
                            findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.useCapturing, true);
                            meta.target[removeFnSymbol](meta.eventName, eventTask.invoke, meta.useCapturing);
                        }
                        return function zoneAwareAddListener(self, args) {
                            var eventName = args[0];
                            var handler = args[1];
                            var useCapturing = args[2] || defaultUseCapturing;
                            // - Inside a Web Worker, `this` is undefined, the context is `global`
                            // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
                            // see https://github.com/angular/zone.js/issues/190
                            var target = self || _global$1;
                            var delegate = null;
                            if (typeof handler == 'function') {
                                delegate = handler;
                            } else if (handler && handler.handleEvent) {
                                delegate = function(event) {
                                    return handler.handleEvent(event);
                                };
                            }
                            var validZoneHandler = false;
                            try {
                                // In cross site contexts (such as WebDriver frameworks like Selenium),
                                // accessing the handler object here will cause an exception to be thrown which
                                // will fail tests prematurely.
                                validZoneHandler = handler && handler.toString() === '[object FunctionWrapper]';
                            } catch (e) {
                                // Returning nothing here is fine, because objects in a cross-site context are unusable
                                return;
                            }
                            // Ignore special listeners of IE11 & Edge dev tools, see
                            // https://github.com/angular/zone.js/issues/150
                            if (!delegate || validZoneHandler) {
                                return target[addFnSymbol](eventName, handler, useCapturing);
                            }
                            if (!allowDuplicates) {
                                var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, false);
                                if (eventTask) {
                                    // we already registered, so this will have noop.
                                    return target[addFnSymbol](eventName, eventTask.invoke, useCapturing);
                                }
                            }
                            var zone = Zone.current;
                            var source = target.constructor['name'] + '.' + addFnName + ':' + eventName;
                            var data = {
                                target: target,
                                eventName: eventName,
                                name: eventName,
                                useCapturing: useCapturing,
                                handler: handler
                            };
                            zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
                        };
                    }
                    function makeZoneAwareRemoveListener(fnName, useCapturingParam) {
                        if (useCapturingParam === void 0) {
                            useCapturingParam = true;
                        }
                        var symbol = zoneSymbol(fnName);
                        var defaultUseCapturing = useCapturingParam ? false : undefined;
                        return function zoneAwareRemoveListener(self, args) {
                            var eventName = args[0];
                            var handler = args[1];
                            var useCapturing = args[2] || defaultUseCapturing;
                            // - Inside a Web Worker, `this` is undefined, the context is `global`
                            // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
                            // see https://github.com/angular/zone.js/issues/190
                            var target = self || _global$1;
                            var eventTask = findExistingRegisteredTask(target, handler, eventName, useCapturing, true);
                            if (eventTask) {
                                eventTask.zone.cancelTask(eventTask);
                            } else {
                                target[symbol](eventName, handler, useCapturing);
                            }
                        };
                    }

                    var zoneAwareAddEventListener = makeZoneAwareAddListener(ADD_EVENT_LISTENER, REMOVE_EVENT_LISTENER);
                    var zoneAwareRemoveEventListener = makeZoneAwareRemoveListener(REMOVE_EVENT_LISTENER);
                    function patchEventTargetMethods(obj) {
                        if (obj && obj.addEventListener) {
                            patchMethod(obj, ADD_EVENT_LISTENER, function() {
                                return zoneAwareAddEventListener;
                            });
                            patchMethod(obj, REMOVE_EVENT_LISTENER, function() {
                                return zoneAwareRemoveEventListener;
                            });
                            return true;
                        } else {
                            return false;
                        }
                    }
                    var originalInstanceKey = zoneSymbol('originalInstance');
                    // wrap some native API on `window`
                    function patchClass(className) {
                        var OriginalClass = _global$1[className];
                        if (!OriginalClass) return;
                        _global$1[className] = function() {
                            var a = bindArguments(arguments, className);
                            switch (a.length) {
                                case 0:
                                    this[originalInstanceKey] = new OriginalClass();
                                    break;
                                case 1:
                                    this[originalInstanceKey] = new OriginalClass(a[0]);
                                    break;
                                case 2:
                                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                                    break;
                                case 3:
                                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                                    break;
                                case 4:
                                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                                    break;
                                default:
                                    throw new Error('Arg list too long.');
                            }
                        };
                        var instance = new OriginalClass(function() {});
                        var prop;
                        for (prop in instance) {
                            // https://bugs.webkit.org/show_bug.cgi?id=44721
                            if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
                            (function(prop) {
                                if (typeof instance[prop] === 'function') {
                                    _global$1[className].prototype[prop] = function() {
                                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                                    };
                                } else {
                                    Object.defineProperty(_global$1[className].prototype, prop, {
                                        set: function(fn) {
                                            if (typeof fn === 'function') {
                                                this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
                                            } else {
                                                this[originalInstanceKey][prop] = fn;
                                            }
                                        },
                                        get: function() {
                                            return this[originalInstanceKey][prop];
                                        }
                                    });
                                }
                            })(prop);
                        }
                        for (prop in OriginalClass) {
                            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                                _global$1[className][prop] = OriginalClass[prop];
                            }
                        }
                    }

                    function createNamedFn(name, delegate) {
                        try {
                            return Function('f', 'return function ' + name + '(){return f(this, arguments)}')(delegate);
                        } catch (e) {
                            // if we fail, we must be CSP, just return delegate.
                            return function() {
                                return delegate(this, arguments);
                            };
                        }
                    }
                    function patchMethod(target, name, patchFn) {
                        var proto = target;
                        while (proto && Object.getOwnPropertyNames(proto).indexOf(name) === -1) {
                            proto = Object.getPrototypeOf(proto);
                        }
                        if (!proto && target[name]) {
                            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                            proto = target;
                        }
                        var delegateName = zoneSymbol(name);
                        var delegate;
                        if (proto && !(delegate = proto[delegateName])) {
                            delegate = proto[delegateName] = proto[name];
                            proto[name] = createNamedFn(name, patchFn(delegate, delegateName, name));
                        }
                        return delegate;
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    function patchTimer(window, setName, cancelName, nameSuffix) {
                        var setNative = null;
                        var clearNative = null;
                        setName += nameSuffix;
                        cancelName += nameSuffix;
                        var tasksByHandleId = {};
                        function scheduleTask(task) {
                            var data = task.data;
                            data.args[0] = function() {
                                task.invoke.apply(this, arguments);
                                delete tasksByHandleId[data.handleId];
                            };
                            data.handleId = setNative.apply(window, data.args);
                            tasksByHandleId[data.handleId] = task;
                            return task;
                        }
                        function clearTask(task) {
                            delete tasksByHandleId[task.data.handleId];
                            return clearNative(task.data.handleId);
                        }
                        setNative = patchMethod(window, setName, function(delegate) {
                            return function(self, args) {
                                if (typeof args[0] === 'function') {
                                    var zone = Zone.current;
                                    var options = {
                                        handleId: null,
                                        isPeriodic: nameSuffix === 'Interval',
                                        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : null,
                                        args: args
                                    };
                                    var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
                                    if (!task) {
                                        return task;
                                    }
                                    // Node.js must additionally support the ref and unref functions.
                                    var handle = task.data.handleId;
                                    if (handle.ref && handle.unref) {
                                        task.ref = handle.ref.bind(handle);
                                        task.unref = handle.unref.bind(handle);
                                    }
                                    return task;
                                } else {
                                    // cause an error by calling it directly.
                                    return delegate.apply(window, args);
                                }
                            };
                        });
                        clearNative = patchMethod(window, cancelName, function(delegate) {
                            return function(self, args) {
                                var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
                                if (task && typeof task.type === 'string') {
                                    if ((task.cancelFn && task.data.isPeriodic) || task.runCount === 0) {
                                        // Do not cancel already canceled functions
                                        task.zone.cancelTask(task);
                                    }
                                } else {
                                    // cause an error by calling it directly.
                                    delegate.apply(window, args);
                                }
                            };
                        });
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    /*
                     * This is necessary for Chrome and Chrome mobile, to enable
                     * things like redefining `createdCallback` on an element.
                     */
                    var _defineProperty = (Object[zoneSymbol('defineProperty')] = Object.defineProperty);
                    var _getOwnPropertyDescriptor = (Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor);
                    var _create = Object.create;
                    var unconfigurablesKey = zoneSymbol('unconfigurables');
                    function propertyPatch() {
                        Object.defineProperty = function(obj, prop, desc) {
                            if (isUnconfigurable(obj, prop)) {
                                throw new TypeError("Cannot assign to read only property '" + prop + "' of " + obj);
                            }
                            var originalConfigurableFlag = desc.configurable;
                            if (prop !== 'prototype') {
                                desc = rewriteDescriptor(obj, prop, desc);
                            }
                            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
                        };
                        Object.defineProperties = function(obj, props) {
                            Object.keys(props).forEach(function(prop) {
                                Object.defineProperty(obj, prop, props[prop]);
                            });
                            return obj;
                        };
                        Object.create = function(obj, proto) {
                            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                                Object.keys(proto).forEach(function(prop) {
                                    proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                                });
                            }
                            return _create(obj, proto);
                        };
                        Object.getOwnPropertyDescriptor = function(obj, prop) {
                            var desc = _getOwnPropertyDescriptor(obj, prop);
                            if (isUnconfigurable(obj, prop)) {
                                desc.configurable = false;
                            }
                            return desc;
                        };
                    }

                    function _redefineProperty(obj, prop, desc) {
                        var originalConfigurableFlag = desc.configurable;
                        desc = rewriteDescriptor(obj, prop, desc);
                        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
                    }

                    function isUnconfigurable(obj, prop) {
                        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
                    }
                    function rewriteDescriptor(obj, prop, desc) {
                        desc.configurable = true;
                        if (!desc.configurable) {
                            if (!obj[unconfigurablesKey]) {
                                _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
                            }
                            obj[unconfigurablesKey][prop] = true;
                        }
                        return desc;
                    }
                    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
                        try {
                            return _defineProperty(obj, prop, desc);
                        } catch (e) {
                            if (desc.configurable) {
                                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                                // retry with the original flag value
                                if (typeof originalConfigurableFlag == 'undefined') {
                                    delete desc.configurable;
                                } else {
                                    desc.configurable = originalConfigurableFlag;
                                }
                                try {
                                    return _defineProperty(obj, prop, desc);
                                } catch (e) {
                                    var descJson = null;
                                    try {
                                        descJson = JSON.stringify(desc);
                                    } catch (e) {
                                        descJson = descJson.toString();
                                    }
                                    console.log(
                                        "Attempting to configure '" +
                                            prop +
                                            "' with descriptor '" +
                                            descJson +
                                            "' on object '" +
                                            obj +
                                            "' and got error, giving up: " +
                                            e
                                    );
                                }
                            } else {
                                throw e;
                            }
                        }
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var WTF_ISSUE_555 =
                        'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
                    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex'.split(
                        ','
                    );
                    var EVENT_TARGET = 'EventTarget';
                    function eventTargetPatch(_global) {
                        var apis = [];
                        var isWtf = _global['wtf'];
                        if (isWtf) {
                            // Workaround for: https://github.com/google/tracing-framework/issues/555
                            apis = WTF_ISSUE_555.split(',')
                                .map(function(v) {
                                    return 'HTML' + v + 'Element';
                                })
                                .concat(NO_EVENT_TARGET);
                        } else if (_global[EVENT_TARGET]) {
                            apis.push(EVENT_TARGET);
                        } else {
                            // Note: EventTarget is not available in all browsers,
                            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
                            apis = NO_EVENT_TARGET;
                        }
                        for (var i = 0; i < apis.length; i++) {
                            var type = _global[apis[i]];
                            patchEventTargetMethods(type && type.prototype);
                        }
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    // we have to patch the instance since the proto is non-configurable
                    function apply(_global) {
                        var WS = _global.WebSocket;
                        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
                        // On older Chrome, no need since EventTarget was already patched
                        if (!_global.EventTarget) {
                            patchEventTargetMethods(WS.prototype);
                        }
                        _global.WebSocket = function(a, b) {
                            var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
                            var proxySocket;
                            // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
                            var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
                            if (onmessageDesc && onmessageDesc.configurable === false) {
                                proxySocket = Object.create(socket);
                                ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function(propName) {
                                    proxySocket[propName] = function() {
                                        return socket[propName].apply(socket, arguments);
                                    };
                                });
                            } else {
                                // we can patch the real socket
                                proxySocket = socket;
                            }
                            patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
                            return proxySocket;
                        };
                        for (var prop in WS) {
                            _global.WebSocket[prop] = WS[prop];
                        }
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(
                        ' '
                    );
                    function propertyDescriptorPatch(_global) {
                        if (isNode) {
                            return;
                        }
                        var supportsWebSocket = typeof WebSocket !== 'undefined';
                        if (canPatchViaPropertyDescriptor()) {
                            // for browsers that we can patch the descriptor:  Chrome & Firefox
                            if (isBrowser) {
                                patchOnProperties(HTMLElement.prototype, eventNames);
                            }
                            patchOnProperties(XMLHttpRequest.prototype, null);
                            if (typeof IDBIndex !== 'undefined') {
                                patchOnProperties(IDBIndex.prototype, null);
                                patchOnProperties(IDBRequest.prototype, null);
                                patchOnProperties(IDBOpenDBRequest.prototype, null);
                                patchOnProperties(IDBDatabase.prototype, null);
                                patchOnProperties(IDBTransaction.prototype, null);
                                patchOnProperties(IDBCursor.prototype, null);
                            }
                            if (supportsWebSocket) {
                                patchOnProperties(WebSocket.prototype, null);
                            }
                        } else {
                            // Safari, Android browsers (Jelly Bean)
                            patchViaCapturingAllTheEvents();
                            patchClass('XMLHttpRequest');
                            if (supportsWebSocket) {
                                apply(_global);
                            }
                        }
                    }
                    function canPatchViaPropertyDescriptor() {
                        if (isBrowser && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
                            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
                            // IDL interface attributes are not configurable
                            var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
                            if (desc && !desc.configurable) return false;
                        }
                        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
                            get: function() {
                                return true;
                            }
                        });
                        var req = new XMLHttpRequest();
                        var result = !!req.onreadystatechange;
                        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {});
                        return result;
                    }

                    var unboundKey = zoneSymbol('unbound');
                    // Whenever any eventListener fires, we check the eventListener target and all parents
                    // for `onwhatever` properties and replace them with zone-bound functions
                    // - Chrome (for now)
                    function patchViaCapturingAllTheEvents() {
                        var _loop_1 = function(i) {
                            var property = eventNames[i];
                            var onproperty = 'on' + property;
                            self.addEventListener(
                                property,
                                function(event) {
                                    var elt = event.target,
                                        bound,
                                        source;
                                    if (elt) {
                                        source = elt.constructor['name'] + '.' + onproperty;
                                    } else {
                                        source = 'unknown.' + onproperty;
                                    }
                                    while (elt) {
                                        if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                                            bound = Zone.current.wrap(elt[onproperty], source);
                                            bound[unboundKey] = elt[onproperty];
                                            elt[onproperty] = bound;
                                        }
                                        elt = elt.parentElement;
                                    }
                                },
                                true
                            );
                        };
                        for (var i = 0; i < eventNames.length; i++) {
                            _loop_1(i);
                        }
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    function registerElementPatch(_global) {
                        if (!isBrowser || !('registerElement' in _global.document)) {
                            return;
                        }
                        var _registerElement = document.registerElement;
                        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
                        document.registerElement = function(name, opts) {
                            if (opts && opts.prototype) {
                                callbacks.forEach(function(callback) {
                                    var source = 'Document.registerElement::' + callback;
                                    if (opts.prototype.hasOwnProperty(callback)) {
                                        var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
                                        if (descriptor && descriptor.value) {
                                            descriptor.value = Zone.current.wrap(descriptor.value, source);
                                            _redefineProperty(opts.prototype, callback, descriptor);
                                        } else {
                                            opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                                        }
                                    } else if (opts.prototype[callback]) {
                                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                                    }
                                });
                            }
                            return _registerElement.apply(document, [name, opts]);
                        };
                    }

                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var set = 'set';
                    var clear = 'clear';
                    var blockingMethods = ['alert', 'prompt', 'confirm'];
                    var _global = (typeof window === 'object' && window) || (typeof self === 'object' && self) || global;
                    patchTimer(_global, set, clear, 'Timeout');
                    patchTimer(_global, set, clear, 'Interval');
                    patchTimer(_global, set, clear, 'Immediate');
                    patchTimer(_global, 'request', 'cancel', 'AnimationFrame');
                    patchTimer(_global, 'mozRequest', 'mozCancel', 'AnimationFrame');
                    patchTimer(_global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
                    for (var i = 0; i < blockingMethods.length; i++) {
                        var name = blockingMethods[i];
                        patchMethod(_global, name, function(delegate, symbol, name) {
                            return function(s, args) {
                                return Zone.current.run(delegate, _global, args, name);
                            };
                        });
                    }
                    eventTargetPatch(_global);
                    propertyDescriptorPatch(_global);
                    patchClass('MutationObserver');
                    patchClass('WebKitMutationObserver');
                    patchClass('FileReader');
                    propertyPatch();
                    registerElementPatch(_global);
                    // Treat XMLHTTPRequest as a macrotask.
                    patchXHR(_global);
                    var XHR_TASK = zoneSymbol('xhrTask');
                    var XHR_SYNC = zoneSymbol('xhrSync');
                    function patchXHR(window) {
                        function findPendingTask(target) {
                            var pendingTask = target[XHR_TASK];
                            return pendingTask;
                        }
                        function scheduleTask(task) {
                            var data = task.data;
                            data.target.addEventListener('readystatechange', function() {
                                if (data.target.readyState === data.target.DONE) {
                                    if (!data.aborted) {
                                        task.invoke();
                                    }
                                }
                            });
                            var storedTask = data.target[XHR_TASK];
                            if (!storedTask) {
                                data.target[XHR_TASK] = task;
                            }
                            sendNative.apply(data.target, data.args);
                            return task;
                        }
                        function placeholderCallback() {}
                        function clearTask(task) {
                            var data = task.data;
                            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                            // to prevent it from firing. So instead, we store info for the event listener.
                            data.aborted = true;
                            return abortNative.apply(data.target, data.args);
                        }
                        var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function() {
                            return function(self, args) {
                                self[XHR_SYNC] = args[2] == false;
                                return openNative.apply(self, args);
                            };
                        });
                        var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function() {
                            return function(self, args) {
                                var zone = Zone.current;
                                if (self[XHR_SYNC]) {
                                    // if the XHR is sync there is no task to schedule, just execute the code.
                                    return sendNative.apply(self, args);
                                } else {
                                    var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
                                    return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
                                }
                            };
                        });
                        var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function(delegate) {
                            return function(self, args) {
                                var task = findPendingTask(self);
                                if (task && typeof task.type == 'string') {
                                    // If the XHR has already completed, do nothing.
                                    if (task.cancelFn == null) {
                                        return;
                                    }
                                    task.zone.cancelTask(task);
                                }
                                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no task
                                // to cancel. Do nothing.
                            };
                        });
                    }
                    /// GEO_LOCATION
                    if (_global['navigator'] && _global['navigator'].geolocation) {
                        patchPrototype(_global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
                    }
                });

                /* WEBPACK VAR INJECTION */
            }.call(
                exports,
                (function() {
                    return this;
                })(),
                __webpack_require__(5)
            ));

            /***/
        },
        /* 452 */
        /***/ function(module, exports, __webpack_require__) {
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            (function(global, factory) {
                true ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
            })(this, function() {
                'use strict';

                /**
                 * @license
                 * Copyright Google Inc. All Rights Reserved.
                 *
                 * Use of this source code is governed by an MIT-style license that can be
                 * found in the LICENSE file at https://angular.io/license
                 */
                var NEWLINE = '\n';
                var SEP = '  -------------  ';
                var IGNORE_FRAMES = [];
                var creationTrace = '__creationTrace__';
                var LongStackTrace = (function() {
                    function LongStackTrace() {
                        this.error = getStacktrace();
                        this.timestamp = new Date();
                    }
                    return LongStackTrace;
                })();
                function getStacktraceWithUncaughtError() {
                    return new Error('STACKTRACE TRACKING');
                }
                function getStacktraceWithCaughtError() {
                    try {
                        throw getStacktraceWithUncaughtError();
                    } catch (e) {
                        return e;
                    }
                }
                // Some implementations of exception handling don't create a stack trace if the exception
                // isn't thrown, however it's faster not to actually throw the exception.
                var error = getStacktraceWithUncaughtError();
                var coughtError = getStacktraceWithCaughtError();
                var getStacktrace = error.stack
                    ? getStacktraceWithUncaughtError
                    : coughtError.stack
                    ? getStacktraceWithCaughtError
                    : getStacktraceWithUncaughtError;
                function getFrames(error) {
                    return error.stack ? error.stack.split(NEWLINE) : [];
                }
                function addErrorStack(lines, error) {
                    var trace = getFrames(error);
                    for (var i = 0; i < trace.length; i++) {
                        var frame = trace[i];
                        // Filter out the Frames which are part of stack capturing.
                        if (!(i < IGNORE_FRAMES.length && IGNORE_FRAMES[i] === frame)) {
                            lines.push(trace[i]);
                        }
                    }
                }
                function renderLongStackTrace(frames, stack) {
                    var longTrace = [stack];
                    if (frames) {
                        var timestamp = new Date().getTime();
                        for (var i = 0; i < frames.length; i++) {
                            var traceFrames = frames[i];
                            var lastTime = traceFrames.timestamp;
                            longTrace.push(SEP + ' Elapsed: ' + (timestamp - lastTime.getTime()) + ' ms; At: ' + lastTime + ' ' + SEP);
                            addErrorStack(longTrace, traceFrames.error);
                            timestamp = lastTime.getTime();
                        }
                    }
                    return longTrace.join(NEWLINE);
                }
                Zone['longStackTraceZoneSpec'] = {
                    name: 'long-stack-trace',
                    longStackTraceLimit: 10,
                    onScheduleTask: function(parentZoneDelegate, currentZone, targetZone, task) {
                        var currentTask = Zone.currentTask;
                        var trace = (currentTask && currentTask.data && currentTask.data[creationTrace]) || [];
                        trace = [new LongStackTrace()].concat(trace);
                        if (trace.length > this.longStackTraceLimit) {
                            trace.length = this.longStackTraceLimit;
                        }
                        if (!task.data) task.data = {};
                        task.data[creationTrace] = trace;
                        return parentZoneDelegate.scheduleTask(targetZone, task);
                    },
                    onHandleError: function(parentZoneDelegate, currentZone, targetZone, error) {
                        var parentTask = Zone.currentTask || error.task;
                        if (error instanceof Error && parentTask) {
                            var stackSetSucceded = null;
                            try {
                                var descriptor = Object.getOwnPropertyDescriptor(error, 'stack');
                                if (descriptor && descriptor.configurable) {
                                    var delegateGet_1 = descriptor.get;
                                    var value_1 = descriptor.value;
                                    descriptor = {
                                        get: function() {
                                            return renderLongStackTrace(
                                                parentTask.data && parentTask.data[creationTrace],
                                                delegateGet_1 ? delegateGet_1.apply(this) : value_1
                                            );
                                        }
                                    };
                                    Object.defineProperty(error, 'stack', descriptor);
                                    stackSetSucceded = true;
                                }
                            } catch (e) {}
                            var longStack = stackSetSucceded
                                ? null
                                : renderLongStackTrace(parentTask.data && parentTask.data[creationTrace], error.stack);
                            if (!stackSetSucceded) {
                                try {
                                    stackSetSucceded = error.stack = longStack;
                                } catch (e) {}
                            }
                            if (!stackSetSucceded) {
                                try {
                                    stackSetSucceded = error.longStack = longStack;
                                } catch (e) {}
                            }
                        }
                        return parentZoneDelegate.handleError(targetZone, error);
                    }
                };
                function captureStackTraces(stackTraces, count) {
                    if (count > 0) {
                        stackTraces.push(getFrames(new LongStackTrace().error));
                        captureStackTraces(stackTraces, count - 1);
                    }
                }
                function computeIgnoreFrames() {
                    var frames = [];
                    captureStackTraces(frames, 2);
                    var frames1 = frames[0];
                    var frames2 = frames[1];
                    for (var i = 0; i < frames1.length; i++) {
                        var frame1 = frames1[i];
                        var frame2 = frames2[i];
                        if (frame1 === frame2) {
                            IGNORE_FRAMES.push(frame1);
                        } else {
                            break;
                        }
                    }
                }
                computeIgnoreFrames();
            });

            /***/
        }
        /******/
    ]
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VjM2Y4ZDA5ZmQ2NGRiMzk2OGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy13cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3BhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtbG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWZyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RhdGUtdG8taXNvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kYXRlLXRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpY3QtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktcmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UtcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi13ZWFrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9lczcvcmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi96b25lLmpzL2Rpc3Qvem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3pvbmUuanMvZGlzdC9sb25nLXN0YWNrLXRyYWNlLXpvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzlGQSwwQkFBcUI7QUFDckIsMEJBQTZCO0FBQzdCLG9CQUFPLENBQUMsR0FBbUIsQ0FBQyxDQUFDO0FBRTdCOztHQUVFO0FBQ0YsR0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVqQyxFQUFDO0FBQUMsS0FBSSxDQUFDLENBQUM7S0FDSixjQUFjO0tBRWQsb0JBQW9CO0tBQ3BCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQztLQUNwQyxtQkFBTyxDQUFDLEdBQW9DLENBQUMsQ0FBQztBQUNsRCxFQUFDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEIsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQzs7Ozs7OztBQ2pIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLE1BQU07QUFDZDtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSx1QkFBc0I7QUFDdEIsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ2pCRDtBQUNBOztBQUVBLCtCQUE4Qiw0QkFBNEI7Ozs7Ozs7QUNIMUQ7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ05EO0FBQ0E7O0FBRUEsNkJBQTRCLG1CQUFtQiw2QkFBNkIsRUFBRSxFQUFFOzs7Ozs7O0FDSGhGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBbUMsMkJBQTJCLFVBQVUsRUFBRSxFQUFFO0FBQzVFLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDOzs7Ozs7O0FDUkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQXFDLHdCQUF3QiwwQkFBMEIsWUFBWSxFQUFFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDSkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3ZDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLFNBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsV0FBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxTQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBeUQsNkNBQTZDLEVBQUU7O0FBRXhHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTCxvREFBbUQ7QUFDbkQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTCxxQ0FBb0M7QUFDcEM7QUFDQSxNQUFLO0FBQ0wseUVBQXdFO0FBQ3hFO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsK0RBQThEO0FBQzlEO0FBQ0EsTUFBSztBQUNMLHlFQUF3RTtBQUN4RTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUErQixXQUFXOzs7Ozs7O0FDaEMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7QUFDZDtBQUNBLEVBQUMsRUFBRTs7Ozs7OztBQ1BIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCxnQkFBZ0IsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFQUFFOzs7Ozs7O0FDZEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBd0gsd0JBQXdCLG9DQUFvQztBQUNwTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtEQUE4RCwwQkFBMEI7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxFQUFFO0FBQ1o7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVUsRUFBRTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELDBCQUEwQixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMEQsK0JBQStCLEVBQUU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLDZFQUE0RTtBQUM1RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLG9CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQSxPQUFNLEVBQUU7QUFDUix3RkFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxPQUFNLEVBQUU7QUFDUixrR0FBaUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDajVDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxxQkFBcUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBLHlGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUMiLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRpZihtb3JlTW9kdWxlc1swXSkge1xuIFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbMF0gPSAwO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2VjM2Y4ZDA5ZmQ2NGRiMzk2OGYiLCJpbXBvcnQgJ2NvcmUtanMvZXM2JztcbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5yZXF1aXJlKCd6b25lLmpzL2Rpc3Qvem9uZScpO1xuXG4vKlxuIFN0YW5kYXJkIHBvbHlmaWxscyB3ZSByZXF1aXJlIHRvIHJ1biBBbmd1bGFyIGFwcGxpY2F0aW9ucyBpbiBtb2Rlcm4gYnJvd3NlcnNcbiovXG5pZiAocHJvY2Vzcy5lbnYuRU5WID09PSAncHJvZCcpIHtcbiAgICAvLyBQcm9kdWN0aW9uXG59IGVsc2Uge1xuICAgIC8vIERldmVsb3BtZW50XG5cbiAgICAvLyBTdGFjayB0cmFjZSB0b29sc1xuICAgIEVycm9yWydzdGFja1RyYWNlTGltaXQnXSA9IEluZmluaXR5O1xuICAgIHJlcXVpcmUoJ3pvbmUuanMvZGlzdC9sb25nLXN0YWNrLXRyYWNlLXpvbmUnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vc3JjL3BvbHlmaWxscy50cyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmJpbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguYWNvc2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguYXNpbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguYXRhbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguY2JydCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jbHozMicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5jb3NoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5oeXBvdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5pbXVsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWF0aC5zaW5oJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXRoLnRhbmgnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJpZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcubGluaycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuZGF0ZS50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5qb2luJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5zbGljZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc29ydCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5zb21lJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UtcmlnaHQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZmlsbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LndlYWstc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmRhdGEtdmlldycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM2L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAyMThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDIyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnRpZXM6IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JykuZjtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uICgkZnJlZXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbiAoJHNlYWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpIHtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uICgkcHJldmVudEV4dGVuc2lvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KSB7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc0Zyb3plbicsIGZ1bmN0aW9uICgkaXNGcm96ZW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0Zyb3plbiA/ICRpc0Zyb3plbihpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uICgkaXNTZWFsZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24gKCRpc0V4dGVuc2libGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCkge1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBpczogcmVxdWlyZSgnLi9fc2FtZS12YWx1ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc2FtZS12YWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7IGJpbmQ6IHJlcXVpcmUoJy4vX2JpbmQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmJpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEYsIGxlbiwgYXJncykge1xuICBpZiAoIShsZW4gaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKykgbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmQgPSBmdW5jdGlvbiAoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fYmluZC5qc1xuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBIQVNfSU5TVEFOQ0UgPSByZXF1aXJlKCcuL193a3MnKSgnaGFzSW5zdGFuY2UnKTtcbnZhciBGdW5jdGlvblByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gMTkuMi4zLjYgRnVuY3Rpb24ucHJvdG90eXBlW0BAaGFzSW5zdGFuY2VdKFYpXG5pZiAoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7IHZhbHVlOiBmdW5jdGlvbiAoTykge1xuICBpZiAodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpIHJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcbiAgd2hpbGUgKE8gPSBnZXRQcm90b3R5cGVPZihPKSkgaWYgKHRoaXMucHJvdG90eXBlID09PSBPKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fcGFyc2UtaW50Jyk7XG4vLyAxOC4yLjUgcGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5GICogKHBhcnNlSW50ICE9ICRwYXJzZUludCksIHsgcGFyc2VJbnQ6ICRwYXJzZUludCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWludC5qc1xuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5wYXJzZUludDtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4vX3N0cmluZy10cmltJykudHJpbTtcbnZhciB3cyA9IHJlcXVpcmUoJy4vX3N0cmluZy13cycpO1xudmFyIGhleCA9IC9eWy0rXT8wW3hYXS87XG5cbm1vZHVsZS5leHBvcnRzID0gJHBhcnNlSW50KHdzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdzICsgJzB4MTYnKSAhPT0gMjIgPyBmdW5jdGlvbiBwYXJzZUludChzdHIsIHJhZGl4KSB7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gIHJldHVybiAkcGFyc2VJbnQoc3RyaW5nLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChzdHJpbmcpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3BhcnNlLWludC5qc1xuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc3BhY2VzID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJyk7XG52YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG52YXIgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEFMSUFTKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctdHJpbS5qc1xuLy8gbW9kdWxlIGlkID0gMjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy13cy5qc1xuLy8gbW9kdWxlIGlkID0gMjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuL19wYXJzZS1mbG9hdCcpO1xuLy8gMTguMi40IHBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksIHsgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1mbG9hdC5qc1xuLy8gbW9kdWxlIGlkID0gMjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLnBhcnNlRmxvYXQ7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW07XG5cbm1vZHVsZS5leHBvcnRzID0gMSAvICRwYXJzZUZsb2F0KHJlcXVpcmUoJy4vX3N0cmluZy13cycpICsgJy0wJykgIT09IC1JbmZpbml0eSA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyKSB7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMyk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdChzdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qc1xuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyICROdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBCYXNlID0gJE51bWJlcjtcbnZhciBwcm90byA9ICROdW1iZXIucHJvdG90eXBlO1xuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NPRiA9IGNvZihyZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykocHJvdG8pKSA9PSBOVU1CRVI7XG52YXIgVFJJTSA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmICghJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpIHtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUE4oQmFzZSkgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpIHtcbiAgICAgIGRQKCROdW1iZXIsIGtleSwgZ09QRChCYXNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMjY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgdGFyZ2V0LCBDKSB7XG4gIHZhciBTID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xuICB2YXIgUDtcbiAgaWYgKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2YpIHtcbiAgICBzZXRQcm90b3R5cGVPZih0aGF0LCBQKTtcbiAgfSByZXR1cm4gdGhhdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgYU51bWJlclZhbHVlID0gcmVxdWlyZSgnLi9fYS1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jyk7XG52YXIgJHRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbnZhciBFUlJPUiA9ICdOdW1iZXIudG9GaXhlZDogaW5jb3JyZWN0IGludm9jYXRpb24hJztcbnZhciBaRVJPID0gJzAnO1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAobiwgYykge1xuICB2YXIgaSA9IC0xO1xuICB2YXIgYzIgPSBjO1xuICB3aGlsZSAoKytpIDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAobikge1xuICB2YXIgaSA9IDY7XG4gIHZhciBjID0gMDtcbiAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG52YXIgbnVtVG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpID0gNjtcbiAgdmFyIHMgPSAnJztcbiAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgaWYgKHMgIT09ICcnIHx8IGkgPT09IDAgfHwgZGF0YVtpXSAhPT0gMCkge1xuICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpXSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKFpFUk8sIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCEhJHRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gICR0b0ZpeGVkLmNhbGwoe30pO1xufSkpLCAnTnVtYmVyJywge1xuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSB7XG4gICAgdmFyIHggPSBhTnVtYmVyVmFsdWUodGhpcywgRVJST1IpO1xuICAgIHZhciBmID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgcyA9ICcnO1xuICAgIHZhciBtID0gWkVSTztcbiAgICB2YXIgZSwgeiwgaiwgaztcbiAgICBpZiAoZiA8IDAgfHwgZiA+IDIwKSB0aHJvdyBSYW5nZUVycm9yKEVSUk9SKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKHggIT0geCkgcmV0dXJuICdOYU4nO1xuICAgIGlmICh4IDw9IC0xZTIxIHx8IHggPj0gMWUyMSkgcmV0dXJuIFN0cmluZyh4KTtcbiAgICBpZiAoeCA8IDApIHtcbiAgICAgIHMgPSAnLSc7XG4gICAgICB4ID0gLXg7XG4gICAgfVxuICAgIGlmICh4ID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2coeCAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG4gICAgICB6ID0gZSA8IDAgPyB4ICogcG93KDIsIC1lLCAxKSA6IHggLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZjtcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIG0gPSBudW1Ub1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKFpFUk8sIGYpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZiA+IDApIHtcbiAgICAgIGsgPSBtLmxlbmd0aDtcbiAgICAgIG0gPSBzICsgKGsgPD0gZiA/ICcwLicgKyByZXBlYXQuY2FsbChaRVJPLCBmIC0gaykgKyBtIDogbS5zbGljZSgwLCBrIC0gZikgKyAnLicgKyBtLnNsaWNlKGsgLSBmKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBzICsgbTtcbiAgICB9IHJldHVybiBtO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBtc2cpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnbnVtYmVyJyAmJiBjb2YoaXQpICE9ICdOdW1iZXInKSB0aHJvdyBUeXBlRXJyb3IobXNnKTtcbiAgcmV0dXJuICtpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hLW51bWJlci12YWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKTtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanNcbi8vIG1vZHVsZSBpZCA9IDI3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgYU51bWJlclZhbHVlID0gcmVxdWlyZSgnLi9fYS1udW1iZXItdmFsdWUnKTtcbnZhciAkdG9QcmVjaXNpb24gPSAxLjAudG9QcmVjaXNpb247XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKCRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIElFNy1cbiAgcmV0dXJuICR0b1ByZWNpc2lvbi5jYWxsKDEsIHVuZGVmaW5lZCkgIT09ICcxJztcbn0pIHx8ICEkZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9QcmVjaXNpb24uY2FsbCh7fSk7XG59KSksICdOdW1iZXInLCB7XG4gIHRvUHJlY2lzaW9uOiBmdW5jdGlvbiB0b1ByZWNpc2lvbihwcmVjaXNpb24pIHtcbiAgICB2YXIgdGhhdCA9IGFOdW1iZXJWYWx1ZSh0aGlzLCAnTnVtYmVyI3RvUHJlY2lzaW9uOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgICByZXR1cm4gcHJlY2lzaW9uID09PSB1bmRlZmluZWQgPyAkdG9QcmVjaXNpb24uY2FsbCh0aGF0KSA6ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQsIHByZWNpc2lvbik7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLXByZWNpc2lvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHsgRVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgX2lzRmluaXRlID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuaXNGaW5pdGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7IGlzSW50ZWdlcjogcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qc1xuLy8gbW9kdWxlIGlkID0gMjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpO1xudmFyIGFicyA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpIHtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywgeyBNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkcGFyc2VGbG9hdCA9IHJlcXVpcmUoJy4vX3BhcnNlLWZsb2F0Jyk7XG4vLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTnVtYmVyLnBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQpLCAnTnVtYmVyJywgeyBwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qc1xuLy8gbW9kdWxlIGlkID0gMjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fcGFyc2UtaW50Jyk7XG4vLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VJbnQgIT0gJHBhcnNlSW50KSwgJ051bWJlcicsIHsgcGFyc2VJbnQ6ICRwYXJzZUludCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGxvZzFwID0gcmVxdWlyZSgnLi9fbWF0aC1sb2cxcCcpO1xudmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG52YXIgJGFjb3NoID0gTWF0aC5hY29zaDtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhY29zaFxuICAvLyBWOCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNTA5XG4gICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTBcbiAgLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmFjb3NoKEluZmluaXR5KSAtPiBOYU5cbiAgJiYgJGFjb3NoKEluZmluaXR5KSA9PSBJbmZpbml0eVxuKSwgJ01hdGgnLCB7XG4gIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KSB7XG4gICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IHggPiA5NDkwNjI2NS42MjQyNTE1NlxuICAgICAgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yXG4gICAgICA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qc1xuLy8gbW9kdWxlIGlkID0gMjgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCkge1xuICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1sb2cxcC5qc1xuLy8gbW9kdWxlIGlkID0gMjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGFzaW5oID0gTWF0aC5hc2luaDtcblxuZnVuY3Rpb24gYXNpbmgoeCkge1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbi8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hc2luaCgwKSAtPiAtMFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhc2luaCAmJiAxIC8gJGFzaW5oKDApID4gMCksICdNYXRoJywgeyBhc2luaDogYXNpbmggfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzXG4vLyBtb2R1bGUgaWQgPSAyODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkYXRhbmggPSBNYXRoLmF0YW5oO1xuXG4vLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXRhbmgoLTApIC0+IDBcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYXRhbmggJiYgMSAvICRhdGFuaCgtMCkgPCAwKSwgJ01hdGgnLCB7XG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KSB7XG4gICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogTWF0aC5sb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzXG4vLyBtb2R1bGUgaWQgPSAyODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHNpZ24gPSByZXF1aXJlKCcuL19tYXRoLXNpZ24nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpIHtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanNcbi8vIG1vZHVsZSBpZCA9IDI4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpIHtcbiAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qc1xuLy8gbW9kdWxlIGlkID0gMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZXhwID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY29zaDogZnVuY3Rpb24gY29zaCh4KSB7XG4gICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNvc2guanNcbi8vIG1vZHVsZSBpZCA9IDI5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZXhwbTEgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCRleHBtMSAhPSBNYXRoLmV4cG0xKSwgJ01hdGgnLCB7IGV4cG0xOiAkZXhwbTEgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbnZhciAkZXhwbTEgPSBNYXRoLmV4cG0xO1xubW9kdWxlLmV4cG9ydHMgPSAoISRleHBtMVxuICAvLyBPbGQgRkYgYnVnXG4gIHx8ICRleHBtMSgxMCkgPiAyMjAyNS40NjU3OTQ4MDY3MTkgfHwgJGV4cG0xKDEwKSA8IDIyMDI1LjQ2NTc5NDgwNjcxNjUxNjhcbiAgLy8gVG9yIEJyb3dzZXIgYnVnXG4gIHx8ICRleHBtMSgtMmUtMTcpICE9IC0yZS0xN1xuKSA/IGZ1bmN0aW9uIGV4cG0xKHgpIHtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbn0gOiAkZXhwbTE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWV4cG0xLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IGZyb3VuZDogcmVxdWlyZSgnLi9fbWF0aC1mcm91bmQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xudmFyIHBvdyA9IE1hdGgucG93O1xudmFyIEVQU0lMT04gPSBwb3coMiwgLTUyKTtcbnZhciBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKTtcbnZhciBNQVgzMiA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpO1xudmFyIE1JTjMyID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuICB2YXIgJGFicyA9IE1hdGguYWJzKHgpO1xuICB2YXIgJHNpZ24gPSBzaWduKHgpO1xuICB2YXIgYSwgcmVzdWx0O1xuICBpZiAoJGFicyA8IE1JTjMyKSByZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIGlmIChyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KSByZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgcmV0dXJuICRzaWduICogcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtZnJvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFicyA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHN1bSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbGFyZyA9IDA7XG4gICAgdmFyIGFyZywgZGl2O1xuICAgIHdoaWxlIChpIDwgYUxlbikge1xuICAgICAgYXJnID0gYWJzKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgIGlmIChsYXJnIDwgYXJnKSB7XG4gICAgICAgIGRpdiA9IGxhcmcgLyBhcmc7XG4gICAgICAgIHN1bSA9IHN1bSAqIGRpdiAqIGRpdiArIDE7XG4gICAgICAgIGxhcmcgPSBhcmc7XG4gICAgICB9IGVsc2UgaWYgKGFyZyA+IDApIHtcbiAgICAgICAgZGl2ID0gYXJnIC8gbGFyZztcbiAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcbiAgICAgIH0gZWxzZSBzdW0gKz0gYXJnO1xuICAgIH1cbiAgICByZXR1cm4gbGFyZyA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmcgKiBNYXRoLnNxcnQoc3VtKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzXG4vLyBtb2R1bGUgaWQgPSAyOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW11bCA9IE1hdGguaW11bDtcblxuLy8gc29tZSBXZWJLaXQgdmVyc2lvbnMgZmFpbHMgd2l0aCBiaWcgbnVtYmVycywgc29tZSBoYXMgd3JvbmcgYXJpdHlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KSB7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZjtcbiAgICB2YXIgeG4gPSAreDtcbiAgICB2YXIgeW4gPSAreTtcbiAgICB2YXIgeGwgPSBVSU5UMTYgJiB4bjtcbiAgICB2YXIgeWwgPSBVSU5UMTYgJiB5bjtcbiAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qc1xuLy8gbW9kdWxlIGlkID0gMjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KSB7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpICogTWF0aC5MT0cxMEU7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qc1xuLy8gbW9kdWxlIGlkID0gMjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IGxvZzFwOiByZXF1aXJlKCcuL19tYXRoLWxvZzFwJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjIyIE1hdGgubG9nMih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cyOiBmdW5jdGlvbiBsb2cyKHgpIHtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanNcbi8vIG1vZHVsZSBpZCA9IDI5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IHNpZ246IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBleHBtMSA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKTtcbnZhciBleHAgPSBNYXRoLmV4cDtcblxuLy8gVjggbmVhciBDaHJvbWl1bSAzOCBoYXMgYSBwcm9ibGVtIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtcbiAgc2luaDogZnVuY3Rpb24gc2luaCh4KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHggPSAreCkgPCAxXG4gICAgICA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyXG4gICAgICA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaC5qc1xuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZXhwbTEgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJyk7XG52YXIgZXhwID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KSB7XG4gICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpO1xuICAgIHZhciBiID0gZXhwbTEoLXgpO1xuICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KSB7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qc1xuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyICRmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbi8vIGxlbmd0aCBzaG91bGQgYmUgMSwgb2xkIEZGIHByb2JsZW1cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxuICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciByZXMgPSBbXTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjb2RlO1xuICAgIHdoaWxlIChhTGVuID4gaSkge1xuICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcbiAgICAgIGlmICh0b0Fic29sdXRlSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKSB0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG4gICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcbiAgICAgICk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDMwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgcmF3OiBmdW5jdGlvbiByYXcoY2FsbFNpdGUpIHtcbiAgICB2YXIgdHBsID0gdG9JT2JqZWN0KGNhbGxTaXRlLnJhdyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpO1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgcmVzID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChsZW4gPiBpKSB7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmIChpIDwgYUxlbikgcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMS4zLjI1IFN0cmluZy5wcm90b3R5cGUudHJpbSgpXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltJywgZnVuY3Rpb24gKCR0cmltKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanNcbi8vIG1vZHVsZSBpZCA9IDMwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDMwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKSB7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpO1xudmFyIEVORFNfV0lUSCA9ICdlbmRzV2l0aCc7XG52YXIgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKSB7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKTtcbiAgICB2YXIgZW5kUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpO1xuICAgIHZhciBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xuICAgIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSkge1xuICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanNcbi8vIG1vZHVsZSBpZCA9IDMxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgTUFUQ0ggPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2ggKGYpIHsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMzE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvbnRleHQgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpO1xudmFyIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscy1pcy1yZWdleHAnKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiByZXF1aXJlKCcuL19zdHJpbmctcmVwZWF0Jylcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qc1xuLy8gbW9kdWxlIGlkID0gMzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4vX3N0cmluZy1jb250ZXh0Jyk7XG52YXIgU1RBUlRTX1dJVEggPSAnc3RhcnRzV2l0aCc7XG52YXIgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKTtcbiAgICB2YXIgaW5kZXggPSB0b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKTtcbiAgICB2YXIgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRzdGFydHNXaXRoXG4gICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2FuY2hvcicsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhbmNob3IobmFtZSkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ25hbWUnLCBuYW1lKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qc1xuLy8gbW9kdWxlIGlkID0gMzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgcXVvdCA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCBleGVjKSB7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KSwgJ1N0cmluZycsIE8pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMyBTdHJpbmcucHJvdG90eXBlLmJpZygpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdiaWcnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYmlnKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiaWcnLCAnJywgJycpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNCBTdHJpbmcucHJvdG90eXBlLmJsaW5rKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JsaW5rJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJsaW5rKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdibGluaycsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ibGluay5qc1xuLy8gbW9kdWxlIGlkID0gMzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjUgU3RyaW5nLnByb3RvdHlwZS5ib2xkKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JvbGQnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYicsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5ib2xkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNiBTdHJpbmcucHJvdG90eXBlLmZpeGVkKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZpeGVkJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZpeGVkKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5maXhlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjcgU3RyaW5nLnByb3RvdHlwZS5mb250Y29sb3IoY29sb3IpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdmb250Y29sb3InLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2ZvbnQnLCAnY29sb3InLCBjb2xvcik7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250Y29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDMyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy44IFN0cmluZy5wcm90b3R5cGUuZm9udHNpemUoc2l6ZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRzaXplJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdzaXplJywgc2l6ZSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mb250c2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjkgU3RyaW5nLnByb3RvdHlwZS5pdGFsaWNzKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2l0YWxpY3MnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnaScsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTAgU3RyaW5nLnByb3RvdHlwZS5saW5rKHVybClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2xpbmsnLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gbGluayh1cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmxpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDMyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMSBTdHJpbmcucHJvdG90eXBlLnNtYWxsKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3NtYWxsJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzbWFsbCcsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMzMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEyIFN0cmluZy5wcm90b3R5cGUuc3RyaWtlKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3N0cmlrZScsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzdHJpa2UoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N0cmlrZScsICcnLCAnJyk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdHJpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5zdXAoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc3VwJywgZnVuY3Rpb24gKGNyZWF0ZUhUTUwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3VwJywgJycsICcnKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN1cC5qc1xuLy8gbW9kdWxlIGlkID0gMzMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywgeyBub3c6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS5ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDMzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKE5hTikudG9KU09OKCkgIT09IG51bGxcbiAgICB8fCBEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7IHRvSVNPU3RyaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9IH0pICE9PSAxO1xufSksICdEYXRlJywge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oa2V5KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgcHYgPSB0b1ByaW1pdGl2ZShPKTtcbiAgICByZXR1cm4gdHlwZW9mIHB2ID09ICdudW1iZXInICYmICFpc0Zpbml0ZShwdikgPyBudWxsIDogTy50b0lTT1N0cmluZygpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSVNPU3RyaW5nID0gcmVxdWlyZSgnLi9fZGF0ZS10by1pc28tc3RyaW5nJyk7XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgIT09IHRvSVNPU3RyaW5nKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiB0b0lTT1N0cmluZ1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcbnZhciAkdG9JU09TdHJpbmcgPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGx6ID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xubW9kdWxlLmV4cG9ydHMgPSAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHRvSVNPU3RyaW5nLmNhbGwobmV3IERhdGUoLTVlMTMgLSAxKSkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAkdG9JU09TdHJpbmcuY2FsbChuZXcgRGF0ZShOYU4pKTtcbn0pKSA/IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICBpZiAoIWlzRmluaXRlKGdldFRpbWUuY2FsbCh0aGlzKSkpIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB2YXIgZCA9IHRoaXM7XG4gIHZhciB5ID0gZC5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gIHZhciBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXG4gICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xufSA6ICR0b0lTT1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RhdGUtdG8taXNvLXN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBEYXRlUHJvdG8gPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IERhdGVQcm90b1tUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFRPX1BSSU1JVElWRSA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1ByaW1pdGl2ZScpO1xudmFyIHByb3RvID0gRGF0ZS5wcm90b3R5cGU7XG5cbmlmICghKFRPX1BSSU1JVElWRSBpbiBwcm90bykpIHJlcXVpcmUoJy4vX2hpZGUnKShwcm90bywgVE9fUFJJTUlUSVZFLCByZXF1aXJlKCcuL19kYXRlLXRvLXByaW1pdGl2ZScpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBOVU1CRVIgPSAnbnVtYmVyJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGludCkge1xuICBpZiAoaGludCAhPT0gJ3N0cmluZycgJiYgaGludCAhPT0gTlVNQkVSICYmIGhpbnQgIT09ICdkZWZhdWx0JykgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaGludCcpO1xuICByZXR1cm4gdG9QcmltaXRpdmUoYW5PYmplY3QodGhpcyksIGhpbnQgIT0gTlVNQkVSKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19kYXRlLXRvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5JywgeyBpc0FycmF5OiByZXF1aXJlKCcuL19pcy1hcnJheScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDM0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMzQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gMzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLykge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuICAgIHdoaWxlIChhTGVuID4gaW5kZXgpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGFMZW47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMzQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUuam9pbihzZXBhcmF0b3IpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUpvaW4gPSBbXS5qb2luO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2Ugc3RyaW5nc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAocmVxdWlyZSgnLi9faW9iamVjdCcpICE9IE9iamVjdCB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKGFycmF5Sm9pbikpLCAnQXJyYXknLCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRvSU9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmpvaW4uanNcbi8vIG1vZHVsZSBpZCA9IDM0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmljdC1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDM1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgaWYgKGh0bWwpIGFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKTtcbiAgICB2YXIga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYgKGtsYXNzID09ICdBcnJheScpIHJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgdmFyIHN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KGJlZ2luLCBsZW4pO1xuICAgIHZhciB1cFRvID0gdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuKTtcbiAgICB2YXIgc2l6ZSA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydCk7XG4gICAgdmFyIGNsb25lZCA9IG5ldyBBcnJheShzaXplKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBzaXplOyBpKyspIGNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkc29ydCA9IFtdLnNvcnQ7XG52YXIgdGVzdCA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciBTVFJJQ1QgPSByZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uZm9yRWFjaCwgdHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIVNUUklDVCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFzYyA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDEpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ubWFwLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDIpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uZmlsdGVyLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRzb21lID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDMpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10uc29tZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJHNvbWUodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb21lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZXZlcnkgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNCk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5ldmVyeSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5LXJlZHVjZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoW10ucmVkdWNlLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDM2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhTGVuLCBtZW1vLCBpc1JpZ2h0KSB7XG4gIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICB2YXIgaW5kZXggPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDA7XG4gIHZhciBpID0gaXNSaWdodCA/IC0xIDogMTtcbiAgaWYgKGFMZW4gPCAyKSBmb3IgKDs7KSB7XG4gICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaW5kZXggKz0gaTtcbiAgICBpZiAoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgfVxuICB9XG4gIGZvciAoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgfVxuICByZXR1cm4gbWVtbztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1yZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDM2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIHRydWUpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qc1xuLy8gbW9kdWxlIGlkID0gMzYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciAkbmF0aXZlID0gW10uaW5kZXhPZjtcbnZhciBORUdBVElWRV9aRVJPID0gISEkbmF0aXZlICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgJG5hdGl2ZSA9IFtdLmxhc3RJbmRleE9mO1xudmFyIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xNCAvIDE1LjQuNC4xNSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IEBbKi0xXSAqLykge1xuICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICBpZiAoTkVHQVRJVkVfWkVSTykgcmV0dXJuICRuYXRpdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwO1xuICAgIHZhciBPID0gdG9JT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihhcmd1bWVudHNbMV0pKTtcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGZvciAoO2luZGV4ID49IDA7IGluZGV4LS0pIGlmIChpbmRleCBpbiBPKSBpZiAoT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpIHJldHVybiBpbmRleCB8fCAwO1xuICAgIHJldHVybiAtMTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5JywgeyBjb3B5V2l0aGluOiByZXF1aXJlKCcuL19hcnJheS1jb3B5LXdpdGhpbicpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnY29weVdpdGhpbicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanNcbi8vIG1vZHVsZSBpZCA9IDM2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0IC8qID0gMCAqLywgc3RhcnQgLyogPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciB0byA9IHRvQWJzb2x1dGVJbmRleCh0YXJnZXQsIGxlbik7XG4gIHZhciBmcm9tID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICB2YXIgZW5kID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pO1xuICB2YXIgaW5jID0gMTtcbiAgaWYgKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCkge1xuICAgIGluYyA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICs9IGNvdW50IC0gMTtcbiAgfVxuICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgdG8gKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9IHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHsgZmlsbDogcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpIH0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gMzY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlIChlbmRQb3MgPiBpbmRleCkgT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1maWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg1KTtcbnZhciBLRVkgPSAnZmluZCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDM3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNik7XG52YXIgS0VZID0gJ2ZpbmRJbmRleCc7XG52YXIgZm9yY2VkID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnQXJyYXknKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMzc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBCYXNlID0gJFJlZ0V4cDtcbnZhciBwcm90byA9ICRSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcbi8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxudmFyIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZTJbcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKSB7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZikge1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHA7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKTtcbiAgICB2YXIgZmlVID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhdGlSRSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBpbmhlcml0SWZSZXF1aXJlZChDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZilcbiAgICAgICwgdGlSRSA/IHRoaXMgOiBwcm90bywgJFJlZ0V4cCk7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IGdPUE4oQmFzZSksIGkgPSAwOyBrZXlzLmxlbmd0aCA+IGk7KSBwcm94eShrZXlzW2krK10pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mbGFncy5qc1xuLy8gbW9kdWxlIGlkID0gMzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZXhlYy5qc1xuLy8gbW9kdWxlIGlkID0gMzc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzXG4vLyBtb2R1bGUgaWQgPSAzODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzODFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDM4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMzgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cbiAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qc1xuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4vX3NhbWUtdmFsdWUnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHNlYXJjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanNcbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRtaW4gPSBNYXRoLm1pbjtcbnZhciAkcHVzaCA9IFtdLnB1c2g7XG52YXIgJFNQTElUID0gJ3NwbGl0JztcbnZhciBMRU5HVEggPSAnbGVuZ3RoJztcbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG52YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IFJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0J1skU1BMSVRdKC8oPzopLywgLTEpW0xFTkdUSF0gIT0gNCB8fFxuICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICcuJ1skU1BMSVRdKC8oKSgpLylbTEVOR1RIXSA+IDEgfHxcbiAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogJHNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gJHNwbGl0O1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09ICRzcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9ICRtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanNcbi8vIG1vZHVsZSBpZCA9IDM4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpXG4gICAgICAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2VcbiAgICAgIC8vIHY4IDYuNiAoTm9kZSAxMCBhbmQgQ2hyb21lIDY2KSBoYXZlIGEgYnVnIHdpdGggcmVzb2x2aW5nIGN1c3RvbSB0aGVuYWJsZXNcbiAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgICAgLy8gd2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgICAgICYmIHY4LmluZGV4T2YoJzYuNicpICE9PSAwXG4gICAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDM5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsLm5hdmlnYXRvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3VzZXItYWdlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDM5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gNDAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi9faW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSykge1xuICB2YXIgQmFzZSA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIEMgPSBCYXNlO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlO1xuICB2YXIgTyA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSkgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmICh0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24gKGl0ZXIpIHsgbmV3IEMoaXRlcik7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSgpLCB0YXJnZXQsIEMpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBwcm90by5jbGVhcikgZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyk7XG52YXIgd2VhayA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFdFQUtfTUFQID0gJ1dlYWtNYXAnO1xudmFyIGdldFdlYWsgPSBtZXRhLmdldFdlYWs7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gd2Vhay51ZnN0b3JlO1xudmFyIHRtcCA9IHt9O1xudmFyIEludGVybmFsTWFwO1xuXG52YXIgd3JhcHBlciA9IGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gIH07XG59O1xuXG52YXIgbWV0aG9kcyA9IHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgIHZhciBkYXRhID0gZ2V0V2VhayhrZXkpO1xuICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIFdFQUtfTUFQKSkuZ2V0KGtleSk7XG4gICAgICByZXR1cm4gZGF0YSA/IGRhdGFbdGhpcy5faV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih2YWxpZGF0ZSh0aGlzLCBXRUFLX01BUCksIGtleSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoV0VBS19NQVAsIHdyYXBwZXIsIG1ldGhvZHMsIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZiAoZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNzsgfSkpIHtcbiAgSW50ZXJuYWxNYXAgPSB3ZWFrLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIFdFQUtfTUFQKTtcbiAgYXNzaWduKEludGVybmFsTWFwLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIG1ldGEuTkVFRCA9IHRydWU7XG4gIGVhY2goWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm90byA9ICRXZWFrTWFwLnByb3RvdHlwZTtcbiAgICB2YXIgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZiAoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSkge1xuICAgICAgICBpZiAoIXRoaXMuX2YpIHRoaXMuX2YgPSBuZXcgSW50ZXJuYWxNYXAoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZ2V0V2VhayA9IHJlcXVpcmUoJy4vX21ldGEnKS5nZXRXZWFrO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpO1xudmFyICRoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBhcnJheUZpbmQgPSBjcmVhdGVBcnJheU1ldGhvZCg1KTtcbnZhciBhcnJheUZpbmRJbmRleCA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpO1xudmFyIGlkID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIHVuY2F1Z2h0IGZyb3plbiBrZXlzXG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uICh0aGF0KSB7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUoKSk7XG59O1xudmFyIFVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kVW5jYXVnaHRGcm96ZW4gPSBmdW5jdGlvbiAoc3RvcmUsIGtleSkge1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5VbmNhdWdodEZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSByZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhIWZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZmluZFVuY2F1Z2h0RnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYgKGVudHJ5KSBlbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYgKH5pbmRleCkgdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qoa2V5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRydWUpIHJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHZhbGlkYXRlKHRoaXMsIE5BTUUpKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBkYXRhID0gZ2V0V2Vhayhhbk9iamVjdChrZXkpLCB0cnVlKTtcbiAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkgdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgZWxzZSBkYXRhW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIHVmc3RvcmU6IHVuY2F1Z2h0RnJvemVuU3RvcmVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanNcbi8vIG1vZHVsZSBpZCA9IDQwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgd2VhayA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIFdFQUtfU0VUID0gJ1dlYWtTZXQnO1xuXG4vLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFdFQUtfU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgIHJldHVybiB3ZWFrLmRlZih2YWxpZGF0ZSh0aGlzLCBXRUFLX1NFVCksIHZhbHVlLCB0cnVlKTtcbiAgfVxufSwgd2VhaywgZmFsc2UsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR0eXBlZCA9IHJlcXVpcmUoJy4vX3R5cGVkJyk7XG52YXIgYnVmZmVyID0gcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLkFycmF5QnVmZmVyO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciAkQXJyYXlCdWZmZXIgPSBidWZmZXIuQXJyYXlCdWZmZXI7XG52YXIgJERhdGFWaWV3ID0gYnVmZmVyLkRhdGFWaWV3O1xudmFyICRpc1ZpZXcgPSAkdHlwZWQuQUJWICYmIEFycmF5QnVmZmVyLmlzVmlldztcbnZhciAkc2xpY2UgPSAkQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlO1xudmFyIFZJRVcgPSAkdHlwZWQuVklFVztcbnZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChBcnJheUJ1ZmZlciAhPT0gJEFycmF5QnVmZmVyKSwgeyBBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyIH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEkdHlwZWQuQ09OU1RSLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS4zLjEgQXJyYXlCdWZmZXIuaXNWaWV3KGFyZylcbiAgaXNWaWV3OiBmdW5jdGlvbiBpc1ZpZXcoaXQpIHtcbiAgICByZXR1cm4gJGlzVmlldyAmJiAkaXNWaWV3KGl0KSB8fCBpc09iamVjdChpdCkgJiYgVklFVyBpbiBpdDtcbiAgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5VICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhbmV3ICRBcnJheUJ1ZmZlcigyKS5zbGljZSgxLCB1bmRlZmluZWQpLmJ5dGVMZW5ndGg7XG59KSwgQVJSQVlfQlVGRkVSLCB7XG4gIC8vIDI0LjEuNC4zIEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZShzdGFydCwgZW5kKVxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIGlmICgkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuICRzbGljZS5jYWxsKGFuT2JqZWN0KHRoaXMpLCBzdGFydCk7IC8vIEZGIGZpeFxuICAgIHZhciBsZW4gPSBhbk9iamVjdCh0aGlzKS5ieXRlTGVuZ3RoO1xuICAgIHZhciBmaXJzdCA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pO1xuICAgIHZhciByZXN1bHQgPSBuZXcgKHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkQXJyYXlCdWZmZXIpKSh0b0xlbmd0aChmaW4gLSBmaXJzdCkpO1xuICAgIHZhciB2aWV3UyA9IG5ldyAkRGF0YVZpZXcodGhpcyk7XG4gICAgdmFyIHZpZXdUID0gbmV3ICREYXRhVmlldyhyZXN1bHQpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgd2hpbGUgKGZpcnN0IDwgZmluKSB7XG4gICAgICB2aWV3VC5zZXRVaW50OChpbmRleCsrLCB2aWV3Uy5nZXRVaW50OChmaXJzdCsrKSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShBUlJBWV9CVUZGRVIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgVFlQRUQgPSB1aWQoJ3R5cGVkX2FycmF5Jyk7XG52YXIgVklFVyA9IHVpZCgndmlldycpO1xudmFyIEFCViA9ICEhKGdsb2JhbC5BcnJheUJ1ZmZlciAmJiBnbG9iYWwuRGF0YVZpZXcpO1xudmFyIENPTlNUUiA9IEFCVjtcbnZhciBpID0gMDtcbnZhciBsID0gOTtcbnZhciBUeXBlZDtcblxudmFyIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnMgPSAoXG4gICdJbnQ4QXJyYXksVWludDhBcnJheSxVaW50OENsYW1wZWRBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheSdcbikuc3BsaXQoJywnKTtcblxud2hpbGUgKGkgPCBsKSB7XG4gIGlmIChUeXBlZCA9IGdsb2JhbFtUeXBlZEFycmF5Q29uc3RydWN0b3JzW2krK11dKSB7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFRZUEVELCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkLnByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gIH0gZWxzZSBDT05TVFIgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFCVjogQUJWLFxuICBDT05TVFI6IENPTlNUUixcbiAgVFlQRUQ6IFRZUEVELFxuICBWSUVXOiBWSUVXXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJHR5cGVkID0gcmVxdWlyZSgnLi9fdHlwZWQnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXggPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGFycmF5RmlsbCA9IHJlcXVpcmUoJy4vX2FycmF5LWZpbGwnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcbnZhciBEQVRBX1ZJRVcgPSAnRGF0YVZpZXcnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFdST05HX0xFTkdUSCA9ICdXcm9uZyBsZW5ndGghJztcbnZhciBXUk9OR19JTkRFWCA9ICdXcm9uZyBpbmRleCEnO1xudmFyICRBcnJheUJ1ZmZlciA9IGdsb2JhbFtBUlJBWV9CVUZGRVJdO1xudmFyICREYXRhVmlldyA9IGdsb2JhbFtEQVRBX1ZJRVddO1xudmFyIE1hdGggPSBnbG9iYWwuTWF0aDtcbnZhciBSYW5nZUVycm9yID0gZ2xvYmFsLlJhbmdlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93LXJlc3RyaWN0ZWQtbmFtZXNcbnZhciBJbmZpbml0eSA9IGdsb2JhbC5JbmZpbml0eTtcbnZhciBCYXNlQnVmZmVyID0gJEFycmF5QnVmZmVyO1xudmFyIGFicyA9IE1hdGguYWJzO1xudmFyIHBvdyA9IE1hdGgucG93O1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBsb2cgPSBNYXRoLmxvZztcbnZhciBMTjIgPSBNYXRoLkxOMjtcbnZhciBCVUZGRVIgPSAnYnVmZmVyJztcbnZhciBCWVRFX0xFTkdUSCA9ICdieXRlTGVuZ3RoJztcbnZhciBCWVRFX09GRlNFVCA9ICdieXRlT2Zmc2V0JztcbnZhciAkQlVGRkVSID0gREVTQ1JJUFRPUlMgPyAnX2InIDogQlVGRkVSO1xudmFyICRMRU5HVEggPSBERVNDUklQVE9SUyA/ICdfbCcgOiBCWVRFX0xFTkdUSDtcbnZhciAkT0ZGU0VUID0gREVTQ1JJUFRPUlMgPyAnX28nIDogQllURV9PRkZTRVQ7XG5cbi8vIElFRUU3NTQgY29udmVyc2lvbnMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pZWVlNzU0XG5mdW5jdGlvbiBwYWNrSUVFRTc1NCh2YWx1ZSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBidWZmZXIgPSBuZXcgQXJyYXkobkJ5dGVzKTtcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDE7XG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxO1xuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDE7XG4gIHZhciBydCA9IG1MZW4gPT09IDIzID8gcG93KDIsIC0yNCkgLSBwb3coMiwgLTc3KSA6IDA7XG4gIHZhciBpID0gMDtcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCA/IDEgOiAwO1xuICB2YXIgZSwgbSwgYztcbiAgdmFsdWUgPSBhYnModmFsdWUpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIGlmICh2YWx1ZSAhPSB2YWx1ZSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgbSA9IHZhbHVlICE9IHZhbHVlID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IGZsb29yKGxvZyh2YWx1ZSkgLyBMTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gcG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIHBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBwb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBwb3coMiwgZUJpYXMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbaSsrXSA9IG0gJiAyNTUsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuICBlID0gZSA8PCBtTGVuIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltpKytdID0gZSAmIDI1NSwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG4gIGJ1ZmZlclstLWldIHw9IHMgKiAxMjg7XG4gIHJldHVybiBidWZmZXI7XG59XG5mdW5jdGlvbiB1bnBhY2tJRUVFNzU0KGJ1ZmZlciwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxO1xuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMTtcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxO1xuICB2YXIgbkJpdHMgPSBlTGVuIC0gNztcbiAgdmFyIGkgPSBuQnl0ZXMgLSAxO1xuICB2YXIgcyA9IGJ1ZmZlcltpLS1dO1xuICB2YXIgZSA9IHMgJiAxMjc7XG4gIHZhciBtO1xuICBzID4+PSA3O1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgbSA9IGUgJiAoMSA8PCAtbkJpdHMpIC0gMTtcbiAgZSA+Pj0gLW5CaXRzO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6IHMgPyAtSW5maW5pdHkgOiBJbmZpbml0eTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIHBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9IHJldHVybiAocyA/IC0xIDogMSkgKiBtICogcG93KDIsIGUgLSBtTGVuKTtcbn1cblxuZnVuY3Rpb24gdW5wYWNrSTMyKGJ5dGVzKSB7XG4gIHJldHVybiBieXRlc1szXSA8PCAyNCB8IGJ5dGVzWzJdIDw8IDE2IHwgYnl0ZXNbMV0gPDwgOCB8IGJ5dGVzWzBdO1xufVxuZnVuY3Rpb24gcGFja0k4KGl0KSB7XG4gIHJldHVybiBbaXQgJiAweGZmXTtcbn1cbmZ1bmN0aW9uIHBhY2tJMTYoaXQpIHtcbiAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmXTtcbn1cbmZ1bmN0aW9uIHBhY2tJMzIoaXQpIHtcbiAgcmV0dXJuIFtpdCAmIDB4ZmYsIGl0ID4+IDggJiAweGZmLCBpdCA+PiAxNiAmIDB4ZmYsIGl0ID4+IDI0ICYgMHhmZl07XG59XG5mdW5jdGlvbiBwYWNrRjY0KGl0KSB7XG4gIHJldHVybiBwYWNrSUVFRTc1NChpdCwgNTIsIDgpO1xufVxuZnVuY3Rpb24gcGFja0YzMihpdCkge1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDIzLCA0KTtcbn1cblxuZnVuY3Rpb24gYWRkR2V0dGVyKEMsIGtleSwgaW50ZXJuYWwpIHtcbiAgZFAoQ1tQUk9UT1RZUEVdLCBrZXksIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzW2ludGVybmFsXTsgfSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0KHZpZXcsIGJ5dGVzLCBpbmRleCwgaXNMaXR0bGVFbmRpYW4pIHtcbiAgdmFyIG51bUluZGV4ID0gK2luZGV4O1xuICB2YXIgaW50SW5kZXggPSB0b0luZGV4KG51bUluZGV4KTtcbiAgaWYgKGludEluZGV4ICsgYnl0ZXMgPiB2aWV3WyRMRU5HVEhdKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYjtcbiAgdmFyIHN0YXJ0ID0gaW50SW5kZXggKyB2aWV3WyRPRkZTRVRdO1xuICB2YXIgcGFjayA9IHN0b3JlLnNsaWNlKHN0YXJ0LCBzdGFydCArIGJ5dGVzKTtcbiAgcmV0dXJuIGlzTGl0dGxlRW5kaWFuID8gcGFjayA6IHBhY2sucmV2ZXJzZSgpO1xufVxuZnVuY3Rpb24gc2V0KHZpZXcsIGJ5dGVzLCBpbmRleCwgY29udmVyc2lvbiwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKSB7XG4gIHZhciBudW1JbmRleCA9ICtpbmRleDtcbiAgdmFyIGludEluZGV4ID0gdG9JbmRleChudW1JbmRleCk7XG4gIGlmIChpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19JTkRFWCk7XG4gIHZhciBzdG9yZSA9IHZpZXdbJEJVRkZFUl0uX2I7XG4gIHZhciBzdGFydCA9IGludEluZGV4ICsgdmlld1skT0ZGU0VUXTtcbiAgdmFyIHBhY2sgPSBjb252ZXJzaW9uKCt2YWx1ZSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXM7IGkrKykgc3RvcmVbc3RhcnQgKyBpXSA9IHBhY2tbaXNMaXR0bGVFbmRpYW4gPyBpIDogYnl0ZXMgLSBpIC0gMV07XG59XG5cbmlmICghJHR5cGVkLkFCVikge1xuICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IHRvSW5kZXgobGVuZ3RoKTtcbiAgICB0aGlzLl9iID0gYXJyYXlGaWxsLmNhbGwobmV3IEFycmF5KGJ5dGVMZW5ndGgpLCAwKTtcbiAgICB0aGlzWyRMRU5HVEhdID0gYnl0ZUxlbmd0aDtcbiAgfTtcblxuICAkRGF0YVZpZXcgPSBmdW5jdGlvbiBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICREYXRhVmlldywgREFUQV9WSUVXKTtcbiAgICBhbkluc3RhbmNlKGJ1ZmZlciwgJEFycmF5QnVmZmVyLCBEQVRBX1ZJRVcpO1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBidWZmZXJbJExFTkdUSF07XG4gICAgdmFyIG9mZnNldCA9IHRvSW50ZWdlcihieXRlT2Zmc2V0KTtcbiAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgPiBidWZmZXJMZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG4gICAgaWYgKG9mZnNldCArIGJ5dGVMZW5ndGggPiBidWZmZXJMZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB0aGlzWyRCVUZGRVJdID0gYnVmZmVyO1xuICAgIHRoaXNbJE9GRlNFVF0gPSBvZmZzZXQ7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgYWRkR2V0dGVyKCRBcnJheUJ1ZmZlciwgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJVRkZFUiwgJ19iJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9MRU5HVEgsICdfbCcpO1xuICAgIGFkZEdldHRlcigkRGF0YVZpZXcsIEJZVEVfT0ZGU0VULCAnX28nKTtcbiAgfVxuXG4gIHJlZGVmaW5lQWxsKCREYXRhVmlld1tQUk9UT1RZUEVdLCB7XG4gICAgZ2V0SW50ODogZnVuY3Rpb24gZ2V0SW50OChieXRlT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gZ2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQpWzBdIDw8IDI0ID4+IDI0O1xuICAgIH0sXG4gICAgZ2V0VWludDg6IGZ1bmN0aW9uIGdldFVpbnQ4KGJ5dGVPZmZzZXQpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF07XG4gICAgfSxcbiAgICBnZXRJbnQxNjogZnVuY3Rpb24gZ2V0SW50MTYoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgdmFyIGJ5dGVzID0gZ2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gKGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXSkgPDwgMTYgPj4gMTY7XG4gICAgfSxcbiAgICBnZXRVaW50MTY6IGZ1bmN0aW9uIGdldFVpbnQxNihieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBnZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiBieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF07XG4gICAgfSxcbiAgICBnZXRJbnQzMjogZnVuY3Rpb24gZ2V0SW50MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSk7XG4gICAgfSxcbiAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0IC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICByZXR1cm4gdW5wYWNrSTMyKGdldCh0aGlzLCA0LCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pKSA+Pj4gMDtcbiAgICB9LFxuICAgIGdldEZsb2F0MzI6IGZ1bmN0aW9uIGdldEZsb2F0MzIoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDIzLCA0KTtcbiAgICB9LFxuICAgIGdldEZsb2F0NjQ6IGZ1bmN0aW9uIGdldEZsb2F0NjQoYnl0ZU9mZnNldCAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDUyLCA4KTtcbiAgICB9LFxuICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpIHtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0SW50MTY6IGZ1bmN0aW9uIHNldEludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgMiwgYnl0ZU9mZnNldCwgcGFja0kxNiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MTY6IGZ1bmN0aW9uIHNldFVpbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0SW50MzI6IGZ1bmN0aW9uIHNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qICwgbGl0dGxlRW5kaWFuICovKSB7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRVaW50MzI6IGZ1bmN0aW9uIHNldFVpbnQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQzMjogZnVuY3Rpb24gc2V0RmxvYXQzMihieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiAsIGxpdHRsZUVuZGlhbiAqLykge1xuICAgICAgc2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIHBhY2tGNjQsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICBpZiAoIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAkQXJyYXlCdWZmZXIoMSk7XG4gIH0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3ICRBcnJheUJ1ZmZlcigtMSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIH0pIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgJEFycmF5QnVmZmVyKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbmV3ICRBcnJheUJ1ZmZlcigxLjUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoTmFOKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICByZXR1cm4gJEFycmF5QnVmZmVyLm5hbWUgIT0gQVJSQVlfQlVGRkVSO1xuICB9KSkge1xuICAgICRBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uIEFycmF5QnVmZmVyKGxlbmd0aCkge1xuICAgICAgYW5JbnN0YW5jZSh0aGlzLCAkQXJyYXlCdWZmZXIpO1xuICAgICAgcmV0dXJuIG5ldyBCYXNlQnVmZmVyKHRvSW5kZXgobGVuZ3RoKSk7XG4gICAgfTtcbiAgICB2YXIgQXJyYXlCdWZmZXJQcm90byA9ICRBcnJheUJ1ZmZlcltQUk9UT1RZUEVdID0gQmFzZUJ1ZmZlcltQUk9UT1RZUEVdO1xuICAgIGZvciAodmFyIGtleXMgPSBnT1BOKEJhc2VCdWZmZXIpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7KSB7XG4gICAgICBpZiAoISgoa2V5ID0ga2V5c1tqKytdKSBpbiAkQXJyYXlCdWZmZXIpKSBoaWRlKCRBcnJheUJ1ZmZlciwga2V5LCBCYXNlQnVmZmVyW2tleV0pO1xuICAgIH1cbiAgICBpZiAoIUxJQlJBUlkpIEFycmF5QnVmZmVyUHJvdG8uY29uc3RydWN0b3IgPSAkQXJyYXlCdWZmZXI7XG4gIH1cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB2aWV3ID0gbmV3ICREYXRhVmlldyhuZXcgJEFycmF5QnVmZmVyKDIpKTtcbiAgdmFyICRzZXRJbnQ4ID0gJERhdGFWaWV3W1BST1RPVFlQRV0uc2V0SW50ODtcbiAgdmlldy5zZXRJbnQ4KDAsIDIxNDc0ODM2NDgpO1xuICB2aWV3LnNldEludDgoMSwgMjE0NzQ4MzY0OSk7XG4gIGlmICh2aWV3LmdldEludDgoMCkgfHwgIXZpZXcuZ2V0SW50OCgxKSkgcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKSB7XG4gICAgICAkc2V0SW50OC5jYWxsKHRoaXMsIGJ5dGVPZmZzZXQsIHZhbHVlIDw8IDI0ID4+IDI0KTtcbiAgICB9LFxuICAgIHNldFVpbnQ4OiBmdW5jdGlvbiBzZXRVaW50OChieXRlT2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgJHNldEludDguY2FsbCh0aGlzLCBieXRlT2Zmc2V0LCB2YWx1ZSA8PCAyNCA+PiAyNCk7XG4gICAgfVxuICB9LCB0cnVlKTtcbn1cbnNldFRvU3RyaW5nVGFnKCRBcnJheUJ1ZmZlciwgQVJSQVlfQlVGRkVSKTtcbnNldFRvU3RyaW5nVGFnKCREYXRhVmlldywgREFUQV9WSUVXKTtcbmhpZGUoJERhdGFWaWV3W1BST1RPVFlQRV0sICR0eXBlZC5WSUVXLCB0cnVlKTtcbmV4cG9ydHNbQVJSQVlfQlVGRkVSXSA9ICRBcnJheUJ1ZmZlcjtcbmV4cG9ydHNbREFUQV9WSUVXXSA9ICREYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW5kZXhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgdmFyIG51bWJlciA9IHRvSW50ZWdlcihpdCk7XG4gIHZhciBsZW5ndGggPSB0b0xlbmd0aChudW1iZXIpO1xuICBpZiAobnVtYmVyICE9PSBsZW5ndGgpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIGxlbmd0aCEnKTtcbiAgcmV0dXJuIGxlbmd0aDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL190eXBlZCcpLkFCViwge1xuICBEYXRhVmlldzogcmVxdWlyZSgnLi9fdHlwZWQtYnVmZmVyJykuRGF0YVZpZXdcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50OCcsIDEsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50OC1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpKSB7XG4gIHZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xuICB2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG4gIHZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG4gIHZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4gIHZhciAkdHlwZWQgPSByZXF1aXJlKCcuL190eXBlZCcpO1xuICB2YXIgJGJ1ZmZlciA9IHJlcXVpcmUoJy4vX3R5cGVkLWJ1ZmZlcicpO1xuICB2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG4gIHZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbiAgdmFyIHByb3BlcnR5RGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbiAgdmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4gIHZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xuICB2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xuICB2YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbiAgdmFyIHRvSW5kZXggPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xuICB2YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbiAgdmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG4gIHZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbiAgdmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG4gIHZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuICB2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbiAgdmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xuICB2YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xuICB2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG4gIHZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xuICB2YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiAgdmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xuICB2YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4gIHZhciBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKTtcbiAgdmFyIGNyZWF0ZUFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpO1xuICB2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuICB2YXIgQXJyYXlJdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xuICB2YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG4gIHZhciAkaXRlckRldGVjdCA9IHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0Jyk7XG4gIHZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKTtcbiAgdmFyIGFycmF5RmlsbCA9IHJlcXVpcmUoJy4vX2FycmF5LWZpbGwnKTtcbiAgdmFyIGFycmF5Q29weVdpdGhpbiA9IHJlcXVpcmUoJy4vX2FycmF5LWNvcHktd2l0aGluJyk7XG4gIHZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbiAgdmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbiAgdmFyIGRQID0gJERQLmY7XG4gIHZhciBnT1BEID0gJEdPUEQuZjtcbiAgdmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbiAgdmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG4gIHZhciBVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXk7XG4gIHZhciBBUlJBWV9CVUZGRVIgPSAnQXJyYXlCdWZmZXInO1xuICB2YXIgU0hBUkVEX0JVRkZFUiA9ICdTaGFyZWQnICsgQVJSQVlfQlVGRkVSO1xuICB2YXIgQllURVNfUEVSX0VMRU1FTlQgPSAnQllURVNfUEVSX0VMRU1FTlQnO1xuICB2YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXlbUFJPVE9UWVBFXTtcbiAgdmFyICRBcnJheUJ1ZmZlciA9ICRidWZmZXIuQXJyYXlCdWZmZXI7XG4gIHZhciAkRGF0YVZpZXcgPSAkYnVmZmVyLkRhdGFWaWV3O1xuICB2YXIgYXJyYXlGb3JFYWNoID0gY3JlYXRlQXJyYXlNZXRob2QoMCk7XG4gIHZhciBhcnJheUZpbHRlciA9IGNyZWF0ZUFycmF5TWV0aG9kKDIpO1xuICB2YXIgYXJyYXlTb21lID0gY3JlYXRlQXJyYXlNZXRob2QoMyk7XG4gIHZhciBhcnJheUV2ZXJ5ID0gY3JlYXRlQXJyYXlNZXRob2QoNCk7XG4gIHZhciBhcnJheUZpbmQgPSBjcmVhdGVBcnJheU1ldGhvZCg1KTtcbiAgdmFyIGFycmF5RmluZEluZGV4ID0gY3JlYXRlQXJyYXlNZXRob2QoNik7XG4gIHZhciBhcnJheUluY2x1ZGVzID0gY3JlYXRlQXJyYXlJbmNsdWRlcyh0cnVlKTtcbiAgdmFyIGFycmF5SW5kZXhPZiA9IGNyZWF0ZUFycmF5SW5jbHVkZXMoZmFsc2UpO1xuICB2YXIgYXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9ycy52YWx1ZXM7XG4gIHZhciBhcnJheUtleXMgPSBBcnJheUl0ZXJhdG9ycy5rZXlzO1xuICB2YXIgYXJyYXlFbnRyaWVzID0gQXJyYXlJdGVyYXRvcnMuZW50cmllcztcbiAgdmFyIGFycmF5TGFzdEluZGV4T2YgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mO1xuICB2YXIgYXJyYXlSZWR1Y2UgPSBBcnJheVByb3RvLnJlZHVjZTtcbiAgdmFyIGFycmF5UmVkdWNlUmlnaHQgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0O1xuICB2YXIgYXJyYXlKb2luID0gQXJyYXlQcm90by5qb2luO1xuICB2YXIgYXJyYXlTb3J0ID0gQXJyYXlQcm90by5zb3J0O1xuICB2YXIgYXJyYXlTbGljZSA9IEFycmF5UHJvdG8uc2xpY2U7XG4gIHZhciBhcnJheVRvU3RyaW5nID0gQXJyYXlQcm90by50b1N0cmluZztcbiAgdmFyIGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBBcnJheVByb3RvLnRvTG9jYWxlU3RyaW5nO1xuICB2YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBUQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG4gIHZhciBUWVBFRF9DT05TVFJVQ1RPUiA9IHVpZCgndHlwZWRfY29uc3RydWN0b3InKTtcbiAgdmFyIERFRl9DT05TVFJVQ1RPUiA9IHVpZCgnZGVmX2NvbnN0cnVjdG9yJyk7XG4gIHZhciBBTExfQ09OU1RSVUNUT1JTID0gJHR5cGVkLkNPTlNUUjtcbiAgdmFyIFRZUEVEX0FSUkFZID0gJHR5cGVkLlRZUEVEO1xuICB2YXIgVklFVyA9ICR0eXBlZC5WSUVXO1xuICB2YXIgV1JPTkdfTEVOR1RIID0gJ1dyb25nIGxlbmd0aCEnO1xuXG4gIHZhciAkbWFwID0gY3JlYXRlQXJyYXlNZXRob2QoMSwgZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICAgIHJldHVybiBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcbiAgfSk7XG5cbiAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ldyBVaW50MTZBcnJheShbMV0pLmJ1ZmZlcilbMF0gPT09IDE7XG4gIH0pO1xuXG4gIHZhciBGT1JDRURfU0VUID0gISFVaW50OEFycmF5ICYmICEhVWludDhBcnJheVtQUk9UT1RZUEVdLnNldCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFVpbnQ4QXJyYXkoMSkuc2V0KHt9KTtcbiAgfSk7XG5cbiAgdmFyIHRvT2Zmc2V0ID0gZnVuY3Rpb24gKGl0LCBCWVRFUykge1xuICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoaXQpO1xuICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCAlIEJZVEVTKSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBvZmZzZXQhJyk7XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfTtcblxuICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXNPYmplY3QoaXQpICYmIFRZUEVEX0FSUkFZIGluIGl0KSByZXR1cm4gaXQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSB0eXBlZCBhcnJheSEnKTtcbiAgfTtcblxuICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbiAoQywgbGVuZ3RoKSB7XG4gICAgaWYgKCEoaXNPYmplY3QoQykgJiYgVFlQRURfQ09OU1RSVUNUT1IgaW4gQykpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSXQgaXMgbm90IGEgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IhJyk7XG4gICAgfSByZXR1cm4gbmV3IEMobGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgc3BlY2llc0Zyb21MaXN0ID0gZnVuY3Rpb24gKE8sIGxpc3QpIHtcbiAgICByZXR1cm4gZnJvbUxpc3Qoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxpc3QpO1xuICB9O1xuXG4gIHZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uIChDLCBsaXN0KSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IGFsbG9jYXRlKEMsIGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSByZXN1bHRbaW5kZXhdID0gbGlzdFtpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBhZGRHZXR0ZXIgPSBmdW5jdGlvbiAoaXQsIGtleSwgaW50ZXJuYWwpIHtcbiAgICBkUChpdCwga2V5LCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZFtpbnRlcm5hbF07IH0gfSk7XG4gIH07XG5cbiAgdmFyICRmcm9tID0gZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBmbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3Qoc291cmNlKTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGksIGxlbmd0aCwgdmFsdWVzLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICFpc0FycmF5SXRlcihpdGVyRm4pKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHZhbHVlcyA9IFtdLCBpID0gMDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goc3RlcC52YWx1ZSk7XG4gICAgICB9IE8gPSB2YWx1ZXM7XG4gICAgfVxuICAgIGlmIChtYXBwaW5nICYmIGFMZW4gPiAyKSBtYXBmbiA9IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCksIHJlc3VsdCA9IGFsbG9jYXRlKHRoaXMsIGxlbmd0aCk7IGxlbmd0aCA+IGk7IGkrKykge1xuICAgICAgcmVzdWx0W2ldID0gbWFwcGluZyA/IG1hcGZuKE9baV0sIGkpIDogT1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgJG9mID0gZnVuY3Rpb24gb2YoLyogLi4uaXRlbXMgKi8pIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGggPiBpbmRleCkgcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIGlPUyBTYWZhcmkgNi54IGZhaWxzIGhlcmVcbiAgdmFyIFRPX0xPQ0FMRV9CVUcgPSAhIVVpbnQ4QXJyYXkgJiYgZmFpbHMoZnVuY3Rpb24gKCkgeyBhcnJheVRvTG9jYWxlU3RyaW5nLmNhbGwobmV3IFVpbnQ4QXJyYXkoMSkpOyB9KTtcblxuICB2YXIgJHRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcoKSB7XG4gICAgcmV0dXJuIGFycmF5VG9Mb2NhbGVTdHJpbmcuYXBwbHkoVE9fTE9DQUxFX0JVRyA/IGFycmF5U2xpY2UuY2FsbCh2YWxpZGF0ZSh0aGlzKSkgOiB2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgcHJvdG8gPSB7XG4gICAgY29weVdpdGhpbjogZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0IC8qICwgZW5kICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5V2l0aGluLmNhbGwodmFsaWRhdGUodGhpcyksIHRhcmdldCwgc3RhcnQsIGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuIGFycmF5RXZlcnkodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyogLCBzdGFydCwgZW5kICovKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUZpbGwuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheUZpbHRlcih2YWxpZGF0ZSh0aGlzKSwgY2FsbGJhY2tmbixcbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpKTtcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgcmV0dXJuIGFycmF5RmluZCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUgLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlGaW5kSW5kZXgodmFsaWRhdGUodGhpcyksIHByZWRpY2F0ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgICAgYXJyYXlGb3JFYWNoKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggKi8pIHtcbiAgICAgIHJldHVybiBhcnJheUluZGV4T2YodmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ICovKSB7XG4gICAgICByZXR1cm4gYXJyYXlJbmNsdWRlcyh2YWxpZGF0ZSh0aGlzKSwgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ICovKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheUxhc3RJbmRleE9mLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiBtYXAobWFwZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gJG1hcCh2YWxpZGF0ZSh0aGlzKSwgbWFwZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlUmlnaHQuYXBwbHkodmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGxlbmd0aCA9IHZhbGlkYXRlKHRoYXQpLmxlbmd0aDtcbiAgICAgIHZhciBtaWRkbGUgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHdoaWxlIChpbmRleCA8IG1pZGRsZSkge1xuICAgICAgICB2YWx1ZSA9IHRoYXRbaW5kZXhdO1xuICAgICAgICB0aGF0W2luZGV4KytdID0gdGhhdFstLWxlbmd0aF07XG4gICAgICAgIHRoYXRbbGVuZ3RoXSA9IHZhbHVlO1xuICAgICAgfSByZXR1cm4gdGhhdDtcbiAgICB9LFxuICAgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICAgIHJldHVybiBhcnJheVNvbWUodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG4gICAgfSxcbiAgICBzdWJhcnJheTogZnVuY3Rpb24gc3ViYXJyYXkoYmVnaW4sIGVuZCkge1xuICAgICAgdmFyIE8gPSB2YWxpZGF0ZSh0aGlzKTtcbiAgICAgIHZhciBsZW5ndGggPSBPLmxlbmd0aDtcbiAgICAgIHZhciAkYmVnaW4gPSB0b0Fic29sdXRlSW5kZXgoYmVnaW4sIGxlbmd0aCk7XG4gICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoXG4gICAgICAgIE8uYnVmZmVyLFxuICAgICAgICBPLmJ5dGVPZmZzZXQgKyAkYmVnaW4gKiBPLkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICB0b0xlbmd0aCgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW5ndGgpKSAtICRiZWdpbilcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHZhciAkc2xpY2UgPSBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcyksIHN0YXJ0LCBlbmQpKTtcbiAgfTtcblxuICB2YXIgJHNldCA9IGZ1bmN0aW9uIHNldChhcnJheUxpa2UgLyogLCBvZmZzZXQgKi8pIHtcbiAgICB2YWxpZGF0ZSh0aGlzKTtcbiAgICB2YXIgb2Zmc2V0ID0gdG9PZmZzZXQoYXJndW1lbnRzWzFdLCAxKTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgdmFyIHNyYyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKHNyYy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgaWYgKGxlbiArIG9mZnNldCA+IGxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgIHdoaWxlIChpbmRleCA8IGxlbikgdGhpc1tvZmZzZXQgKyBpbmRleF0gPSBzcmNbaW5kZXgrK107XG4gIH07XG5cbiAgdmFyICRpdGVyYXRvcnMgPSB7XG4gICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICAgIHJldHVybiBhcnJheUVudHJpZXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgcmV0dXJuIGFycmF5S2V5cy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIGFycmF5VmFsdWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNUQUluZGV4ID0gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRhcmdldClcbiAgICAgICYmIHRhcmdldFtUWVBFRF9BUlJBWV1cbiAgICAgICYmIHR5cGVvZiBrZXkgIT0gJ3N5bWJvbCdcbiAgICAgICYmIGtleSBpbiB0YXJnZXRcbiAgICAgICYmIFN0cmluZygra2V5KSA9PSBTdHJpbmcoa2V5KTtcbiAgfTtcbiAgdmFyICRnZXREZXNjID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSB7XG4gICAgcmV0dXJuIGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG4gICAgICA/IHByb3BlcnR5RGVzYygyLCB0YXJnZXRba2V5XSlcbiAgICAgIDogZ09QRCh0YXJnZXQsIGtleSk7XG4gIH07XG4gIHZhciAkc2V0RGVzYyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgaWYgKGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG4gICAgICAmJiBpc09iamVjdChkZXNjKVxuICAgICAgJiYgaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgICAmJiAhaGFzKGRlc2MsICdnZXQnKVxuICAgICAgJiYgIWhhcyhkZXNjLCAnc2V0JylcbiAgICAgIC8vIFRPRE86IGFkZCB2YWxpZGF0aW9uIGRlc2NyaXB0b3Igdy9vIGNhbGxpbmcgYWNjZXNzb3JzXG4gICAgICAmJiAhZGVzYy5jb25maWd1cmFibGVcbiAgICAgICYmICghaGFzKGRlc2MsICd3cml0YWJsZScpIHx8IGRlc2Mud3JpdGFibGUpXG4gICAgICAmJiAoIWhhcyhkZXNjLCAnZW51bWVyYWJsZScpIHx8IGRlc2MuZW51bWVyYWJsZSlcbiAgICApIHtcbiAgICAgIHRhcmdldFtrZXldID0gZGVzYy52YWx1ZTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSByZXR1cm4gZFAodGFyZ2V0LCBrZXksIGRlc2MpO1xuICB9O1xuXG4gIGlmICghQUxMX0NPTlNUUlVDVE9SUykge1xuICAgICRHT1BELmYgPSAkZ2V0RGVzYztcbiAgICAkRFAuZiA9ICRzZXREZXNjO1xuICB9XG5cbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhQUxMX0NPTlNUUlVDVE9SUywgJ09iamVjdCcsIHtcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXREZXNjLFxuICAgIGRlZmluZVByb3BlcnR5OiAkc2V0RGVzY1xuICB9KTtcblxuICBpZiAoZmFpbHMoZnVuY3Rpb24gKCkgeyBhcnJheVRvU3RyaW5nLmNhbGwoe30pOyB9KSkge1xuICAgIGFycmF5VG9TdHJpbmcgPSBhcnJheVRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciAkVHlwZWRBcnJheVByb3RvdHlwZSQgPSByZWRlZmluZUFsbCh7fSwgcHJvdG8pO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsICRpdGVyYXRvcnMpO1xuICBoaWRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgSVRFUkFUT1IsICRpdGVyYXRvcnMudmFsdWVzKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCB7XG4gICAgc2xpY2U6ICRzbGljZSxcbiAgICBzZXQ6ICRzZXQsXG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uICgpIHsgLyogbm9vcCAqLyB9LFxuICAgIHRvU3RyaW5nOiBhcnJheVRvU3RyaW5nLFxuICAgIHRvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmdcbiAgfSk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdidWZmZXInLCAnYicpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZU9mZnNldCcsICdvJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlTGVuZ3RoJywgJ2wnKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2xlbmd0aCcsICdlJyk7XG4gIGRQKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgVEFHLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzW1RZUEVEX0FSUkFZXTsgfVxuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBCWVRFUywgd3JhcHBlciwgQ0xBTVBFRCkge1xuICAgIENMQU1QRUQgPSAhIUNMQU1QRUQ7XG4gICAgdmFyIE5BTUUgPSBLRVkgKyAoQ0xBTVBFRCA/ICdDbGFtcGVkJyA6ICcnKSArICdBcnJheSc7XG4gICAgdmFyIEdFVFRFUiA9ICdnZXQnICsgS0VZO1xuICAgIHZhciBTRVRURVIgPSAnc2V0JyArIEtFWTtcbiAgICB2YXIgVHlwZWRBcnJheSA9IGdsb2JhbFtOQU1FXTtcbiAgICB2YXIgQmFzZSA9IFR5cGVkQXJyYXkgfHwge307XG4gICAgdmFyIFRBQyA9IFR5cGVkQXJyYXkgJiYgZ2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheSk7XG4gICAgdmFyIEZPUkNFRCA9ICFUeXBlZEFycmF5IHx8ICEkdHlwZWQuQUJWO1xuICAgIHZhciBPID0ge307XG4gICAgdmFyIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5ICYmIFR5cGVkQXJyYXlbUFJPVE9UWVBFXTtcbiAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4KSB7XG4gICAgICB2YXIgZGF0YSA9IHRoYXQuX2Q7XG4gICAgICByZXR1cm4gZGF0YS52W0dFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgTElUVExFX0VORElBTik7XG4gICAgfTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHRoYXQsIGluZGV4LCB2YWx1ZSkge1xuICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuICAgICAgaWYgKENMQU1QRUQpIHZhbHVlID0gKHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSkpIDwgMCA/IDAgOiB2YWx1ZSA+IDB4ZmYgPyAweGZmIDogdmFsdWUgJiAweGZmO1xuICAgICAgZGF0YS52W1NFVFRFUl0oaW5kZXggKiBCWVRFUyArIGRhdGEubywgdmFsdWUsIExJVFRMRV9FTkRJQU4pO1xuICAgIH07XG4gICAgdmFyIGFkZEVsZW1lbnQgPSBmdW5jdGlvbiAodGhhdCwgaW5kZXgpIHtcbiAgICAgIGRQKHRoYXQsIGluZGV4LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhpcywgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzZXR0ZXIodGhpcywgaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSB7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCkge1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUsICdfZCcpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIGJ1ZmZlciwgYnl0ZUxlbmd0aCwgbGVuZ3RoLCBrbGFzcztcbiAgICAgICAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgICAgICAgIGxlbmd0aCA9IHRvSW5kZXgoZGF0YSk7XG4gICAgICAgICAgYnl0ZUxlbmd0aCA9IGxlbmd0aCAqIEJZVEVTO1xuICAgICAgICAgIGJ1ZmZlciA9IG5ldyAkQXJyYXlCdWZmZXIoYnl0ZUxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mICRBcnJheUJ1ZmZlciB8fCAoa2xhc3MgPSBjbGFzc29mKGRhdGEpKSA9PSBBUlJBWV9CVUZGRVIgfHwga2xhc3MgPT0gU0hBUkVEX0JVRkZFUikge1xuICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgICAgb2Zmc2V0ID0gdG9PZmZzZXQoJG9mZnNldCwgQllURVMpO1xuICAgICAgICAgIHZhciAkbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIGlmICgkbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICgkbGVuICUgQllURVMpIHRocm93IFJhbmdlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSAkbGVuIC0gb2Zmc2V0O1xuICAgICAgICAgICAgaWYgKGJ5dGVMZW5ndGggPCAwKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuICAgICAgICAgICAgaWYgKGJ5dGVMZW5ndGggKyBvZmZzZXQgPiAkbGVuKSB0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxlbmd0aCA9IGJ5dGVMZW5ndGggLyBCWVRFUztcbiAgICAgICAgfSBlbHNlIGlmIChUWVBFRF9BUlJBWSBpbiBkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIGZyb21MaXN0KFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGhpZGUodGhhdCwgJ19kJywge1xuICAgICAgICAgIGI6IGJ1ZmZlcixcbiAgICAgICAgICBvOiBvZmZzZXQsXG4gICAgICAgICAgbDogYnl0ZUxlbmd0aCxcbiAgICAgICAgICBlOiBsZW5ndGgsXG4gICAgICAgICAgdjogbmV3ICREYXRhVmlldyhidWZmZXIpXG4gICAgICAgIH0pO1xuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIGFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBjcmVhdGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkKTtcbiAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG4gICAgfSBlbHNlIGlmICghZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgVHlwZWRBcnJheSgxKTtcbiAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgbmV3IFR5cGVkQXJyYXkoLTEpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0pIHx8ICEkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikge1xuICAgICAgbmV3IFR5cGVkQXJyYXkoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KG51bGwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgbmV3IFR5cGVkQXJyYXkoMS41KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIG5ldyBUeXBlZEFycmF5KGl0ZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIH0sIHRydWUpKSB7XG4gICAgICBUeXBlZEFycmF5ID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCkge1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUpO1xuICAgICAgICB2YXIga2xhc3M7XG4gICAgICAgIC8vIGB3c2AgbW9kdWxlIGJ1ZywgdGVtcG9yYXJpbHkgcmVtb3ZlIHZhbGlkYXRpb24gbGVuZ3RoIGZvciBVaW50OEFycmF5XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJzb2NrZXRzL3dzL3B1bGwvNjQ1XG4gICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHJldHVybiBuZXcgQmFzZSh0b0luZGV4KGRhdGEpKTtcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpIHtcbiAgICAgICAgICByZXR1cm4gJGxlbmd0aCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG5ldyBCYXNlKGRhdGEsIHRvT2Zmc2V0KCRvZmZzZXQsIEJZVEVTKSwgJGxlbmd0aClcbiAgICAgICAgICAgIDogJG9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpKVxuICAgICAgICAgICAgICA6IG5ldyBCYXNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUWVBFRF9BUlJBWSBpbiBkYXRhKSByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgfSk7XG4gICAgICBhcnJheUZvckVhY2goVEFDICE9PSBGdW5jdGlvbi5wcm90b3R5cGUgPyBnT1BOKEJhc2UpLmNvbmNhdChnT1BOKFRBQykpIDogZ09QTihCYXNlKSwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIShrZXkgaW4gVHlwZWRBcnJheSkpIGhpZGUoVHlwZWRBcnJheSwga2V5LCBCYXNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgICBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBUeXBlZEFycmF5UHJvdG90eXBlO1xuICAgICAgaWYgKCFMSUJSQVJZKSBUeXBlZEFycmF5UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcbiAgICB9XG4gICAgdmFyICRuYXRpdmVJdGVyYXRvciA9IFR5cGVkQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdO1xuICAgIHZhciBDT1JSRUNUX0lURVJfTkFNRSA9ICEhJG5hdGl2ZUl0ZXJhdG9yXG4gICAgICAmJiAoJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gJ3ZhbHVlcycgfHwgJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gdW5kZWZpbmVkKTtcbiAgICB2YXIgJGl0ZXJhdG9yID0gJGl0ZXJhdG9ycy52YWx1ZXM7XG4gICAgaGlkZShUeXBlZEFycmF5LCBUWVBFRF9DT05TVFJVQ1RPUiwgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBUWVBFRF9BUlJBWSwgTkFNRSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBWSUVXLCB0cnVlKTtcbiAgICBoaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIERFRl9DT05TVFJVQ1RPUiwgVHlwZWRBcnJheSk7XG5cbiAgICBpZiAoQ0xBTVBFRCA/IG5ldyBUeXBlZEFycmF5KDEpW1RBR10gIT0gTkFNRSA6ICEoVEFHIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKSB7XG4gICAgICBkUChUeXBlZEFycmF5UHJvdG90eXBlLCBUQUcsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBOQU1FOyB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPW05BTUVdID0gVHlwZWRBcnJheTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsIE5BTUUsIHtcbiAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFU1xuICAgIH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IEJhc2Uub2YuY2FsbChUeXBlZEFycmF5LCAxKTsgfSksIE5BTUUsIHtcbiAgICAgIGZyb206ICRmcm9tLFxuICAgICAgb2Y6ICRvZlxuICAgIH0pO1xuXG4gICAgaWYgKCEoQllURVNfUEVSX0VMRU1FTlQgaW4gVHlwZWRBcnJheVByb3RvdHlwZSkpIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgQllURVNfUEVSX0VMRU1FTlQsIEJZVEVTKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QLCBOQU1FLCBwcm90byk7XG5cbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRURfU0VULCBOQU1FLCB7IHNldDogJHNldCB9KTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIUNPUlJFQ1RfSVRFUl9OQU1FLCBOQU1FLCAkaXRlcmF0b3JzKTtcblxuICAgIGlmICghTElCUkFSWSAmJiBUeXBlZEFycmF5UHJvdG90eXBlLnRvU3RyaW5nICE9IGFycmF5VG9TdHJpbmcpIFR5cGVkQXJyYXlQcm90b3R5cGUudG9TdHJpbmcgPSBhcnJheVRvU3RyaW5nO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICBuZXcgVHlwZWRBcnJheSgxKS5zbGljZSgpO1xuICAgIH0pLCBOQU1FLCB7IHNsaWNlOiAkc2xpY2UgfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gWzEsIDJdLnRvTG9jYWxlU3RyaW5nKCkgIT0gbmV3IFR5cGVkQXJyYXkoWzEsIDJdKS50b0xvY2FsZVN0cmluZygpO1xuICAgIH0pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICBUeXBlZEFycmF5UHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nLmNhbGwoWzEsIDJdKTtcbiAgICB9KSksIE5BTUUsIHsgdG9Mb2NhbGVTdHJpbmc6ICR0b0xvY2FsZVN0cmluZyB9KTtcblxuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IENPUlJFQ1RfSVRFUl9OQU1FID8gJG5hdGl2ZUl0ZXJhdG9yIDogJGl0ZXJhdG9yO1xuICAgIGlmICghTElCUkFSWSAmJiAhQ09SUkVDVF9JVEVSX05BTUUpIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgSVRFUkFUT1IsICRpdGVyYXRvcik7XG4gIH07XG59IGVsc2UgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQ4JywgMSwgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50OCcsIDEsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OENsYW1wZWRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSwgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1jbGFtcGVkLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MTYnLCAyLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gSW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQzMicsIDQsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBJbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDMyJywgNCwgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gRmxvYXQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdGbG9hdDY0JywgOCwgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0NjRBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDY0LWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHJBcHBseSA9IChyZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0IHx8IHt9KS5hcHBseTtcbnZhciBmQXBwbHkgPSBGdW5jdGlvbi5hcHBseTtcbi8vIE1TIEVkZ2UgYXJndW1lbnRzTGlzdCBhcmd1bWVudCBpcyBvcHRpb25hbFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJBcHBseShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSksICdSZWZsZWN0Jywge1xuICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpIHtcbiAgICB2YXIgVCA9IGFGdW5jdGlvbih0YXJnZXQpO1xuICAgIHZhciBMID0gYW5PYmplY3QoYXJndW1lbnRzTGlzdCk7XG4gICAgcmV0dXJuIHJBcHBseSA/IHJBcHBseShULCB0aGlzQXJndW1lbnQsIEwpIDogZkFwcGx5LmNhbGwoVCwgdGhpc0FyZ3VtZW50LCBMKTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vX2JpbmQnKTtcbnZhciByQ29uc3RydWN0ID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmNvbnN0cnVjdDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzIGFuZCBhcmd1bWVudHNMaXN0IGFyZ3VtZW50IGlzIG9wdGlvbmFsXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG52YXIgTkVXX1RBUkdFVF9CVUcgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuICEockNvbnN0cnVjdChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSk7XG52YXIgQVJHU19CVUcgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByQ29uc3RydWN0KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTkVXX1RBUkdFVF9CVUcgfHwgQVJHU19CVUcpLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qICwgbmV3VGFyZ2V0ICovKSB7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgYW5PYmplY3QoYXJncyk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYgKEFSR1NfQlVHICYmICFORVdfVEFSR0VUX0JVRykgcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmIChUYXJnZXQgPT0gbmV3VGFyZ2V0KSB7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKSgpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gPSBuZXdUYXJnZXQucHJvdG90eXBlO1xuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpO1xuICAgIHZhciByZXN1bHQgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanNcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcblxuLy8gTVMgRWRnZSBoYXMgYnJva2VuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkgLSB0aHJvd2luZyBpbnN0ZWFkIG9mIHJldHVybmluZyBmYWxzZVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZFAuZih7fSwgMSwgeyB2YWx1ZTogMSB9KSwgMSwgeyB2YWx1ZTogMiB9KTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpIHtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUocHJvcGVydHlLZXksIHRydWUpO1xuICAgIGFuT2JqZWN0KGF0dHJpYnV0ZXMpO1xuICAgIHRyeSB7XG4gICAgICBkUC5mKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIHZhciBkZXNjID0gZ09QRChhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHZhciBrZXlzID0gdGhpcy5fayA9IFtdOyAgICAgIC8vIGtleXNcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gaXRlcmF0ZWQpIGtleXMucHVzaChrZXkpO1xufTtcbnJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBrZXlzID0gdGhhdC5faztcbiAgdmFyIGtleTtcbiAgZG8ge1xuICAgIGlmICh0aGF0Ll9pID49IGtleXMubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH0gd2hpbGUgKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4geyB2YWx1ZToga2V5LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSAvKiAsIHJlY2VpdmVyICovKSB7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdO1xuICB2YXIgZGVzYywgcHJvdG87XG4gIGlmIChhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcikgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIGlmIChkZXNjID0gZ09QRC5mKHRhcmdldCwgcHJvcGVydHlLZXkpKSByZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgPyBkZXNjLnZhbHVlXG4gICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgaWYgKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpIHJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHsgZ2V0OiBnZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICByZXR1cm4gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZ2V0UHJvdG8gPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCkge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHsgb3duS2V5czogcmVxdWlyZSgnLi9fb3duLWtleXMnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBSZWZsZWN0ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdPUE4uZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX293bi1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCkge1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICgkcHJldmVudEV4dGVuc2lvbnMpICRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIC8qICwgcmVjZWl2ZXIgKi8pIHtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM107XG4gIHZhciBvd25EZXNjID0gZ09QRC5mKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgdmFyIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XG4gIGlmICghb3duRGVzYykge1xuICAgIGlmIChpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZiAoaGFzKG93bkRlc2MsICd2YWx1ZScpKSB7XG4gICAgaWYgKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZXhpc3RpbmdEZXNjcmlwdG9yID0gZ09QRC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkpIHtcbiAgICAgIGlmIChleGlzdGluZ0Rlc2NyaXB0b3IuZ2V0IHx8IGV4aXN0aW5nRGVzY3JpcHRvci5zZXQgfHwgZXhpc3RpbmdEZXNjcmlwdG9yLndyaXRhYmxlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAgIGRQLmYocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIH0gZWxzZSBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgY3JlYXRlRGVzYygwLCBWKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHsgc2V0OiBzZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gNDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBzZXRQcm90byA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpO1xuXG5pZiAoc2V0UHJvdG8pICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pIHtcbiAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICB0cnkge1xuICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDQzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5SZWZsZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvZXM3L3JlZmxlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xudmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5zZXQ7XG5cbm1ldGFkYXRhLmV4cCh7IGRlZmluZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgYW5PYmplY3QodGFyZ2V0KSwgdG9NZXRhS2V5KHRhcmdldEtleSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVmaW5lLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIE1hcCA9IHJlcXVpcmUoJy4vZXM2Lm1hcCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbWV0YWRhdGEnKTtcbnZhciBzdG9yZSA9IHNoYXJlZC5zdG9yZSB8fCAoc2hhcmVkLnN0b3JlID0gbmV3IChyZXF1aXJlKCcuL2VzNi53ZWFrLW1hcCcpKSgpKTtcblxudmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSkge1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgaWYgKCF0YXJnZXRNZXRhZGF0YSkge1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHN0b3JlLnNldCh0YXJnZXQsIHRhcmdldE1ldGFkYXRhID0gbmV3IE1hcCgpKTtcbiAgfVxuICB2YXIga2V5TWV0YWRhdGEgPSB0YXJnZXRNZXRhZGF0YS5nZXQodGFyZ2V0S2V5KTtcbiAgaWYgKCFrZXlNZXRhZGF0YSkge1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHRhcmdldE1ldGFkYXRhLnNldCh0YXJnZXRLZXksIGtleU1ldGFkYXRhID0gbmV3IE1hcCgpKTtcbiAgfSByZXR1cm4ga2V5TWV0YWRhdGE7XG59O1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgZmFsc2UpO1xuICByZXR1cm4gbWV0YWRhdGFNYXAgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG59O1xudmFyIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcbiAgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCB0cnVlKS5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xufTtcbnZhciBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSkge1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIHZhciBrZXlzID0gW107XG4gIGlmIChtZXRhZGF0YU1hcCkgbWV0YWRhdGFNYXAuZm9yRWFjaChmdW5jdGlvbiAoXywga2V5KSB7IGtleXMucHVzaChrZXkpOyB9KTtcbiAgcmV0dXJuIGtleXM7XG59O1xudmFyIHRvTWV0YUtleSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xudmFyIGV4cCA9IGZ1bmN0aW9uIChPKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIE8pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0b3JlOiBzdG9yZSxcbiAgbWFwOiBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwLFxuICBoYXM6IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEsXG4gIGdldDogb3JkaW5hcnlHZXRPd25NZXRhZGF0YSxcbiAgc2V0OiBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhLFxuICBrZXlzOiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyxcbiAga2V5OiB0b01ldGFLZXksXG4gIGV4cDogZXhwXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9fbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xudmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBtZXRhZGF0YS5tYXA7XG52YXIgc3RvcmUgPSBtZXRhZGF0YS5zdG9yZTtcblxubWV0YWRhdGEuZXhwKHsgZGVsZXRlTWV0YWRhdGE6IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSk7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIGlmIChtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChtZXRhZGF0YU1hcC5zaXplKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG4gIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZGVsZXRlLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXM7XG52YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldDtcbnZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeUdldE1ldGFkYXRhID0gZnVuY3Rpb24gKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgaWYgKGhhc093bikgcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xufTtcblxubWV0YWRhdGEuZXhwKHsgZ2V0TWV0YWRhdGE6IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vZXM2LnNldCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG52YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5TWV0YWRhdGFLZXlzID0gZnVuY3Rpb24gKE8sIFApIHtcbiAgdmFyIG9LZXlzID0gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbCkgcmV0dXJuIG9LZXlzO1xuICB2YXIgcEtleXMgPSBvcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICByZXR1cm4gcEtleXMubGVuZ3RoID8gb0tleXMubGVuZ3RoID8gZnJvbShuZXcgU2V0KG9LZXlzLmNvbmNhdChwS2V5cykpKSA6IHBLZXlzIDogb0tleXM7XG59O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRNZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5TWV0YWRhdGFLZXlzKGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1sxXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgb3JkaW5hcnlHZXRPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmdldDtcbnZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7IGdldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG4gIHJldHVybiBvcmRpbmFyeUdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbk9iamVjdCh0YXJnZXQpXG4gICAgLCBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgb3JkaW5hcnlPd25NZXRhZGF0YUtleXMgPSBtZXRhZGF0YS5rZXlzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHsgZ2V0T3duTWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG4gIHJldHVybiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZiAoaGFzT3duKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHBhcmVudCA9IGdldFByb3RvdHlwZU9mKE8pO1xuICByZXR1cm4gcGFyZW50ICE9PSBudWxsID8gb3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKSA6IGZhbHNlO1xufTtcblxubWV0YWRhdGEuZXhwKHsgaGFzTWV0YWRhdGE6IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXM7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoeyBoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyICRtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgdG9NZXRhS2V5ID0gJG1ldGFkYXRhLmtleTtcbnZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gJG1ldGFkYXRhLnNldDtcblxuJG1ldGFkYXRhLmV4cCh7IG1ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShcbiAgICAgIG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLFxuICAgICAgKHRhcmdldEtleSAhPT0gdW5kZWZpbmVkID8gYW5PYmplY3QgOiBhRnVuY3Rpb24pKHRhcmdldCksXG4gICAgICB0b01ldGFLZXkodGFyZ2V0S2V5KVxuICAgICk7XG4gIH07XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG52YXIgWm9uZSQxID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICBpZiAoZ2xvYmFsLlpvbmUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICAgIH1cbiAgICB2YXIgWm9uZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmUocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gem9uZVNwZWMgPyB6b25lU3BlYy5uYW1lIHx8ICd1bm5hbWVkJyA6ICc8cm9vdD4nO1xuICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG4gICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUgPVxuICAgICAgICAgICAgICAgIG5ldyBab25lRGVsZWdhdGUodGhpcywgdGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC5fem9uZURlbGVnYXRlLCB6b25lU3BlYyk7XG4gICAgICAgIH1cbiAgICAgICAgWm9uZS5hc3NlcnRab25lUGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWwuUHJvbWlzZSAhPT0gWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFRhc2tcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzLmdldFpvbmVXaXRoKGtleSk7XG4gICAgICAgICAgICBpZiAoem9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5nZXRab25lV2l0aCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuX3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICBpZiAoIXpvbmVTcGVjKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBmdW5jdGlvbiBnb3Q6ICcgKyBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhcHBseUFyZ3MgPT09IHZvaWQgMCkgeyBhcHBseUFyZ3MgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoc291cmNlID09PSB2b2lkIDApIHsgc291cmNlID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIG9sZFpvbmUgPSBfY3VycmVudFpvbmU7XG4gICAgICAgICAgICBfY3VycmVudFpvbmUgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmUgPSBvbGRab25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5ydW5HdWFyZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFwcGx5QXJncyA9PT0gdm9pZCAwKSB7IGFwcGx5QXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHZvaWQgMCkgeyBzb3VyY2UgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgd2hpY2ggY3JlYXRlZCBpdCEgKENyZWF0aW9uOiAnICsgdGFzay56b25lLm5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVGFzayA9IF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG4gICAgICAgICAgICB2YXIgb2xkWm9uZSA9IF9jdXJyZW50Wm9uZTtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnR5cGUgPT0gJ21hY3JvVGFzaycgJiYgdGFzay5kYXRhICYmICF0YXNrLmRhdGEuaXNQZXJpb2RpYykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZSA9IG9sZFpvbmU7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgbmV3IFpvbmVUYXNrKCdtaWNyb1Rhc2snLCB0aGlzLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgbnVsbCkpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1hY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCBuZXcgWm9uZVRhc2soJ21hY3JvVGFzaycsIHRoaXMsIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVFdmVudFRhc2sgPSBmdW5jdGlvbiAoc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGhpcywgbmV3IFpvbmVUYXNrKCdldmVudFRhc2snLCB0aGlzLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fem9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICB0YXNrLnJ1bkNvdW50ID0gLTE7XG4gICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcbiAgICAgICAgcmV0dXJuIFpvbmU7XG4gICAgfSgpKTtcbiAgICBcbiAgICB2YXIgWm9uZURlbGVnYXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZURlbGVnYXRlKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgbWljcm9UYXNrOiAwLCBtYWNyb1Rhc2s6IDAsIGV2ZW50VGFzazogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yWlMpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYXNUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYXNUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza0RsZ3QpO1xuICAgICAgICB9XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB6b25lU3BlYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZvcmtaUyA/IHRoaXMuX2ZvcmtaUy5vbkZvcmsodGhpcy5fZm9ya0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgem9uZVNwZWMpIDpcbiAgICAgICAgICAgICAgICBuZXcgWm9uZSh0YXJnZXRab25lLCB6b25lU3BlYyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmNlcHRaUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgP1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVpTLm9uSW52b2tlKHRoaXMuX2ludm9rZURsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA6XG4gICAgICAgICAgICAgICAgdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlVGFza1pTLm9uU2NoZWR1bGVUYXNrKHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QsIHRoaXMuem9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2suc2NoZWR1bGVGbikge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnNjaGVkdWxlRm4odGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PSAnbWljcm9UYXNrJykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLnR5cGUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZva2VUYXNrWlMgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMub25JbnZva2VUYXNrKHRoaXMuX2ludm9rZVRhc2tEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSA6XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lICYmICh0YXNrLnR5cGUgIT0gJ2V2ZW50VGFzaycpICYmXG4gICAgICAgICAgICAgICAgICAgICEodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCAtMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0YXNrLmNhbmNlbEZuKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGRvZXMgbm90IHN1cHBvcnQgY2FuY2VsbGF0aW9uLCBvciBpcyBhbHJlYWR5IGNhbmNlbGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0YXNrLmNhbmNlbEZuKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldFpvbmUgPT0gdGhpcy56b25lKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgbm90IGJlIGluIHRoZSBmaW5hbGx5IGJsb2NrLCBiZWNhdXNlIGV4Y2VwdGlvbnMgYXNzdW1lIG5vdCBjYW5jZWxlZC5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFzVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzVGFza1pTICYmXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5fdXBkYXRlVGFza0NvdW50ID0gZnVuY3Rpb24gKHR5cGUsIGNvdW50KSB7XG4gICAgICAgICAgICB2YXIgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgIHZhciBwcmV2ID0gY291bnRzW3R5cGVdO1xuICAgICAgICAgICAgdmFyIG5leHQgPSBjb3VudHNbdHlwZV0gPSBwcmV2ICsgY291bnQ7XG4gICAgICAgICAgICBpZiAobmV4dCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGFza3MgZXhlY3V0ZWQgdGhlbiB3ZXJlIHNjaGVkdWxlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRW1wdHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzLm1pY3JvVGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzLm1hY3JvVGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzazogY291bnRzLmV2ZW50VGFzayA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50RGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlLl91cGRhdGVUYXNrQ291bnQodHlwZSwgY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgIH0oKSk7XG4gICAgdmFyIFpvbmVUYXNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZVRhc2sodHlwZSwgem9uZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcbiAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcysrO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB6b25lLnJ1blRhc2soc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWluTWljcm9UYXNrUXVldWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhICYmIHR5cGVvZiB0aGlzLmRhdGEuaGFuZGxlSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5oYW5kbGVJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICB9KCkpO1xuICAgIGZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICAgICAgICByZXR1cm4gJ19fem9uZV9zeW1ib2xfXycgKyBuYW1lO1xuICAgIH1cbiAgICBcbiAgICB2YXIgc3ltYm9sU2V0VGltZW91dCA9IF9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKTtcbiAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICB2YXIgX2N1cnJlbnRab25lID0gbmV3IFpvbmUobnVsbCwgbnVsbCk7XG4gICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdmFyIF9taWNyb1Rhc2tRdWV1ZSA9IFtdO1xuICAgIHZhciBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gZmFsc2U7XG4gICAgdmFyIF91bmNhdWdodFByb21pc2VFcnJvcnMgPSBbXTtcbiAgICB2YXIgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9IDA7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVRdWV1ZURyYWluKCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbm90IHJ1bm5pbmcgaW4gYW55IHRhc2ssIGFuZCB0aGVyZSBoYXMgbm90IGJlZW4gYW55dGhpbmcgc2NoZWR1bGVkXG4gICAgICAgIC8vIHdlIG11c3QgYm9vdHN0cmFwIHRoZSBpbml0aWFsIHRhc2sgY3JlYXRpb24gYnkgbWFudWFsbHkgc2NoZWR1bGluZyB0aGUgZHJhaW5cbiAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApW3N5bWJvbFRoZW5dKGRyYWluTWljcm9UYXNrUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGRyYWluTWljcm9UYXNrUXVldWUsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAgICAgc2NoZWR1bGVRdWV1ZURyYWluKCk7XG4gICAgICAgIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb25zb2xlRXJyb3IoZSkge1xuICAgICAgICB2YXIgcmVqZWN0aW9uID0gZSAmJiBlLnJlamVjdGlvbjtcbiAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLm1lc3NhZ2UgOiByZWplY3Rpb24sICc7IFpvbmU6JywgZS56b25lLm5hbWUsICc7IFRhc2s6JywgZS50YXNrICYmIGUudGFzay5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbiwgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24uc3RhY2sgOiB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRyYWluTWljcm9UYXNrUXVldWUoKSB7XG4gICAgICAgIGlmICghX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSkge1xuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAoX21pY3JvVGFza1F1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IF9taWNyb1Rhc2tRdWV1ZTtcbiAgICAgICAgICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcndhcmRSZXNvbHV0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7XG4gICAgfVxuICAgIHZhciBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgdmFyIHN5bWJvbFZhbHVlID0gX19zeW1ib2xfXygndmFsdWUnKTtcbiAgICB2YXIgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuICAgIHZhciBSRVNPTFZFRCA9IHRydWU7XG4gICAgdmFyIFJFSkVDVEVEID0gZmFsc2U7XG4gICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiYgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpLCBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgZmFsc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT0gMCAmJiBzdGF0ZSA9PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSk6ICcgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlICYmIHZhbHVlLnN0YWNrID8gJ1xcbicgKyB2YWx1ZS5zdGFjayA6ICcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcl8xID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucmVqZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS50YXNrID0gWm9uZS5jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIF91bmNhdWdodFByb21pc2VFcnJvcnMucHVzaChlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUXVldWVEcmFpbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSkge1xuICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb21pc2Vbc3ltYm9sU3RhdGVdID8gb25GdWxmaWxsZWQgfHwgZm9yd2FyZFJlc29sdXRpb24gOiBvblJlamVjdGVkIHx8IGZvcndhcmRSZWplY3Rpb247XG4gICAgICAgIHpvbmUuc2NoZWR1bGVNaWNyb1Rhc2soc291cmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgdHJ1ZSwgem9uZS5ydW4oZGVsZWdhdGUsIG51bGwsIFtwcm9taXNlW3N5bWJvbFZhbHVlXV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGluc3RhbmNlb2YgUHJvbWlzZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gVU5SRVNPTFZFRDtcbiAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBleGVjdXRvciAmJiBleGVjdXRvcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVTT0xWRUQpLCBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVKRUNURUQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgIHZhciByZWplY3Q7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgIF9hID0gW3JlcywgcmVqXSwgcmVzb2x2ZSA9IF9hWzBdLCByZWplY3QgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgKHByb21pc2UgPSBudWxsIHx8IHJlc29sdmUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiAocHJvbWlzZSA9IG51bGwgfHwgcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzIgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKChmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9OyB9KShjb3VudCksIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgdmFyIGNoYWluUHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG51bGwpO1xuICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgIH0oKSk7XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgdmFyIE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbX19zeW1ib2xfXygnUHJvbWlzZScpXSA9IGdsb2JhbC5Qcm9taXNlO1xuICAgIGdsb2JhbC5Qcm9taXNlID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICBmdW5jdGlvbiBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICB2YXIgTmF0aXZlUHJvbWlzZVByb3RvdG90eXBlID0gTmF0aXZlUHJvbWlzZS5wcm90b3R5cGU7XG4gICAgICAgIHZhciBOYXRpdmVQcm9taXNlVGhlbiA9IE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZVtfX3N5bWJvbF9fKCd0aGVuJyldID1cbiAgICAgICAgICAgIE5hdGl2ZVByb21pc2VQcm90b3RvdHlwZS50aGVuO1xuICAgICAgICBOYXRpdmVQcm9taXNlUHJvdG90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgbmF0aXZlUHJvbWlzZSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIE5hdGl2ZVByb21pc2VUaGVuLmNhbGwobmF0aXZlUHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIHBhdGNoVGhlbihOYXRpdmVQcm9taXNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWxbJ2ZldGNoJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hQcm9taXNlID0gdm9pZCAwO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBJbiBNUyBFZGdlIHRoaXMgdGhyb3dzXG4gICAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlID0gZ2xvYmFsWydmZXRjaCddKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIEluIENocm9tZSB0aGlzIHRocm93cyBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGZldGNoUHJvbWlzZSA9IGdsb2JhbFsnZmV0Y2gnXSgnYWJvdXQ6YmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlnbm9yZSBvdXRwdXQgdG8gcHJldmVudCBlcnJvcjtcbiAgICAgICAgICAgIGZldGNoUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0pO1xuICAgICAgICAgICAgaWYgKGZldGNoUHJvbWlzZS5jb25zdHJ1Y3RvciAhPSBOYXRpdmVQcm9taXNlICYmXG4gICAgICAgICAgICAgICAgZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yICE9IFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRoZW4oZmV0Y2hQcm9taXNlLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWxsIGZvciB0ZXN0cywgc28gd2UgZXhwb3NlIGl0LlxuICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgIHJldHVybiBnbG9iYWwuWm9uZSA9IFpvbmU7XG59KSh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIHpvbmVTeW1ib2wgPSBab25lWydfX3N5bWJvbF9fJ107XG52YXIgX2dsb2JhbCQxID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbmZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSA9IGFyZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzW2ldID0gWm9uZS5jdXJyZW50LndyYXAoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuICAgIHZhciBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXzFdO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIHByb3RvdHlwZVtuYW1lXzFdID0gKGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgc291cmNlICsgJy4nICsgbmFtZV8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKGRlbGVnYXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9sb29wXzEoaSk7XG4gICAgfVxufVxuXG52YXIgaXNXZWJXb3JrZXIgPSAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpO1xudmFyIGlzTm9kZSA9ICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbnZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKSB8fCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9O1xuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgLy8gc3Vic3RyKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gICAgdmFyIGV2ZW50TmFtZSA9IHByb3Auc3Vic3RyKDIpO1xuICAgIHZhciBfcHJvcCA9ICdfJyArIHByb3A7XG4gICAgZGVzYy5zZXQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHRoaXNbX3Byb3BdKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzW19wcm9wXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9IHVuZGVmaW5lZCAmJiAhcmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXNbX3Byb3BdID0gd3JhcEZuO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW19wcm9wXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICAgIGRlc2MuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tfcHJvcF0gfHwgbnVsbDtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xufVxuXG5mdW5jdGlvbiBwYXRjaE9uUHJvcGVydGllcyhvYmosIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgb25Qcm9wZXJ0aWVzID0gW107XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgaWYgKHByb3Auc3Vic3RyKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgICAgIG9uUHJvcGVydGllcy5wdXNoKHByb3ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0pO1xuICAgIH1cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCAnb24nICsgcHJvcGVydGllc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBFVkVOVF9UQVNLUyA9IHpvbmVTeW1ib2woJ2V2ZW50VGFza3MnKTtcbi8vIEZvciBFdmVudFRhcmdldFxudmFyIEFERF9FVkVOVF9MSVNURU5FUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbnZhciBSRU1PVkVfRVZFTlRfTElTVEVORVIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5mdW5jdGlvbiBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIG5hbWUsIGNhcHR1cmUsIHJlbW92ZSkge1xuICAgIHZhciBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXTtcbiAgICBpZiAoZXZlbnRUYXNrcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhc2sgPSBldmVudFRhc2tzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZGF0YS51c2VDYXB0dXJpbmcgPT09IGNhcHR1cmUgJiYgZGF0YS5ldmVudE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gYXR0YWNoUmVnaXN0ZXJlZEV2ZW50KHRhcmdldCwgZXZlbnRUYXNrKSB7XG4gICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuICAgIGlmICghZXZlbnRUYXNrcykge1xuICAgICAgICBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXSA9IFtdO1xuICAgIH1cbiAgICBldmVudFRhc2tzLnB1c2goZXZlbnRUYXNrKTtcbn1cbmZ1bmN0aW9uIG1ha2Vab25lQXdhcmVBZGRMaXN0ZW5lcihhZGRGbk5hbWUsIHJlbW92ZUZuTmFtZSwgdXNlQ2FwdHVyaW5nUGFyYW0sIGFsbG93RHVwbGljYXRlcykge1xuICAgIGlmICh1c2VDYXB0dXJpbmdQYXJhbSA9PT0gdm9pZCAwKSB7IHVzZUNhcHR1cmluZ1BhcmFtID0gdHJ1ZTsgfVxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZXMgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZXMgPSBmYWxzZTsgfVxuICAgIHZhciBhZGRGblN5bWJvbCA9IHpvbmVTeW1ib2woYWRkRm5OYW1lKTtcbiAgICB2YXIgcmVtb3ZlRm5TeW1ib2wgPSB6b25lU3ltYm9sKHJlbW92ZUZuTmFtZSk7XG4gICAgdmFyIGRlZmF1bHRVc2VDYXB0dXJpbmcgPSB1c2VDYXB0dXJpbmdQYXJhbSA/IGZhbHNlIDogdW5kZWZpbmVkO1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlRXZlbnRMaXN0ZW5lcihldmVudFRhc2spIHtcbiAgICAgICAgdmFyIG1ldGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgYXR0YWNoUmVnaXN0ZXJlZEV2ZW50KG1ldGEudGFyZ2V0LCBldmVudFRhc2spO1xuICAgICAgICByZXR1cm4gbWV0YS50YXJnZXRbYWRkRm5TeW1ib2xdKG1ldGEuZXZlbnROYW1lLCBldmVudFRhc2suaW52b2tlLCBtZXRhLnVzZUNhcHR1cmluZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhbmNlbEV2ZW50TGlzdGVuZXIoZXZlbnRUYXNrKSB7XG4gICAgICAgIHZhciBtZXRhID0gZXZlbnRUYXNrLmRhdGE7XG4gICAgICAgIGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKG1ldGEudGFyZ2V0LCBldmVudFRhc2suaW52b2tlLCBtZXRhLmV2ZW50TmFtZSwgbWV0YS51c2VDYXB0dXJpbmcsIHRydWUpO1xuICAgICAgICBtZXRhLnRhcmdldFtyZW1vdmVGblN5bWJvbF0obWV0YS5ldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIG1ldGEudXNlQ2FwdHVyaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHpvbmVBd2FyZUFkZExpc3RlbmVyKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBoYW5kbGVyID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHVzZUNhcHR1cmluZyA9IGFyZ3NbMl0gfHwgZGVmYXVsdFVzZUNhcHR1cmluZztcbiAgICAgICAgLy8gLSBJbnNpZGUgYSBXZWIgV29ya2VyLCBgdGhpc2AgaXMgdW5kZWZpbmVkLCB0aGUgY29udGV4dCBpcyBgZ2xvYmFsYFxuICAgICAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgICAgICB2YXIgdGFyZ2V0ID0gc2VsZiB8fCBfZ2xvYmFsJDE7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA9IGhhbmRsZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gaGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkWm9uZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEluIGNyb3NzIHNpdGUgY29udGV4dHMgKHN1Y2ggYXMgV2ViRHJpdmVyIGZyYW1ld29ya3MgbGlrZSBTZWxlbml1bSksXG4gICAgICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlIGhhbmRsZXIgb2JqZWN0IGhlcmUgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIGZhaWwgdGVzdHMgcHJlbWF0dXJlbHkuXG4gICAgICAgICAgICB2YWxpZFpvbmVIYW5kbGVyID0gaGFuZGxlciAmJiBoYW5kbGVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uV3JhcHBlcl0nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5pbmcgbm90aGluZyBoZXJlIGlzIGZpbmUsIGJlY2F1c2Ugb2JqZWN0cyBpbiBhIGNyb3NzLXNpdGUgY29udGV4dCBhcmUgdW51c2FibGVcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZ25vcmUgc3BlY2lhbCBsaXN0ZW5lcnMgb2YgSUUxMSAmIEVkZ2UgZGV2IHRvb2xzLCBzZWVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTUwXG4gICAgICAgIGlmICghZGVsZWdhdGUgfHwgdmFsaWRab25lSGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFthZGRGblN5bWJvbF0oZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dEdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRUYXNrID0gZmluZEV4aXN0aW5nUmVnaXN0ZXJlZFRhc2sodGFyZ2V0LCBoYW5kbGVyLCBldmVudE5hbWUsIHVzZUNhcHR1cmluZywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFzaykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFscmVhZHkgcmVnaXN0ZXJlZCwgc28gdGhpcyB3aWxsIGhhdmUgbm9vcC5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2FkZEZuU3ltYm9sXShldmVudE5hbWUsIGV2ZW50VGFzay5pbnZva2UsIHVzZUNhcHR1cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXSArICcuJyArIGFkZEZuTmFtZSArICc6JyArIGV2ZW50TmFtZTtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgdXNlQ2FwdHVyaW5nOiB1c2VDYXB0dXJpbmcsXG4gICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgICAgIH07XG4gICAgICAgIHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgc2NoZWR1bGVFdmVudExpc3RlbmVyLCBjYW5jZWxFdmVudExpc3RlbmVyKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWFrZVpvbmVBd2FyZVJlbW92ZUxpc3RlbmVyKGZuTmFtZSwgdXNlQ2FwdHVyaW5nUGFyYW0pIHtcbiAgICBpZiAodXNlQ2FwdHVyaW5nUGFyYW0gPT09IHZvaWQgMCkgeyB1c2VDYXB0dXJpbmdQYXJhbSA9IHRydWU7IH1cbiAgICB2YXIgc3ltYm9sID0gem9uZVN5bWJvbChmbk5hbWUpO1xuICAgIHZhciBkZWZhdWx0VXNlQ2FwdHVyaW5nID0gdXNlQ2FwdHVyaW5nUGFyYW0gPyBmYWxzZSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gem9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIoc2VsZiwgYXJncykge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgdXNlQ2FwdHVyaW5nID0gYXJnc1syXSB8fCBkZWZhdWx0VXNlQ2FwdHVyaW5nO1xuICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG4gICAgICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciB0YXJnZXQgPSBzZWxmIHx8IF9nbG9iYWwkMTtcbiAgICAgICAgdmFyIGV2ZW50VGFzayA9IGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKHRhcmdldCwgaGFuZGxlciwgZXZlbnROYW1lLCB1c2VDYXB0dXJpbmcsIHRydWUpO1xuICAgICAgICBpZiAoZXZlbnRUYXNrKSB7XG4gICAgICAgICAgICBldmVudFRhc2suem9uZS5jYW5jZWxUYXNrKGV2ZW50VGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbc3ltYm9sXShldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG52YXIgem9uZUF3YXJlQWRkRXZlbnRMaXN0ZW5lciA9IG1ha2Vab25lQXdhcmVBZGRMaXN0ZW5lcihBRERfRVZFTlRfTElTVEVORVIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUik7XG52YXIgem9uZUF3YXJlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IG1ha2Vab25lQXdhcmVSZW1vdmVMaXN0ZW5lcihSRU1PVkVfRVZFTlRfTElTVEVORVIpO1xuZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBwYXRjaE1ldGhvZChvYmosIEFERF9FVkVOVF9MSVNURU5FUiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gem9uZUF3YXJlQWRkRXZlbnRMaXN0ZW5lcjsgfSk7XG4gICAgICAgIHBhdGNoTWV0aG9kKG9iaiwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSLCBmdW5jdGlvbiAoKSB7IHJldHVybiB6b25lQXdhcmVSZW1vdmVFdmVudExpc3RlbmVyOyB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSB6b25lU3ltYm9sKCdvcmlnaW5hbEluc3RhbmNlJyk7XG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB2YXIgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWwkMVtjbGFzc05hbWVdO1xuICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIF9nbG9iYWwkMVtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBjbGFzc05hbWUpO1xuICAgICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FyZyBsaXN0IHRvbyBsb25nLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7IH0pO1xuICAgIHZhciBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBpbnN0YW5jZSkge1xuICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ3MjFcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfZ2xvYmFsJDFbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZ2xvYmFsJDFbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gWm9uZS5jdXJyZW50LndyYXAoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0ocHJvcCkpO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScgJiYgT3JpZ2luYWxDbGFzcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgX2dsb2JhbCQxW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYW1lZEZuKG5hbWUsIGRlbGVnYXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChGdW5jdGlvbignZicsIFwicmV0dXJuIGZ1bmN0aW9uIFwiICsgbmFtZSArIFwiKCl7cmV0dXJuIGYodGhpcywgYXJndW1lbnRzKX1cIikpKGRlbGVnYXRlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWYgd2UgZmFpbCwgd2UgbXVzdCBiZSBDU1AsIGp1c3QgcmV0dXJuIGRlbGVnYXRlLlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlKHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gICAgdmFyIHByb3RvID0gdGFyZ2V0O1xuICAgIHdoaWxlIChwcm90byAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bykuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgIHByb3RvID0gdGFyZ2V0O1xuICAgIH1cbiAgICB2YXIgZGVsZWdhdGVOYW1lID0gem9uZVN5bWJvbChuYW1lKTtcbiAgICB2YXIgZGVsZWdhdGU7XG4gICAgaWYgKHByb3RvICYmICEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSkge1xuICAgICAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVOYW1lZEZuKG5hbWUsIHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZWdhdGU7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IG51bGw7XG4gICAgdmFyIGNsZWFyTmF0aXZlID0gbnVsbDtcbiAgICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgY2FuY2VsTmFtZSArPSBuYW1lU3VmZml4O1xuICAgIHZhciB0YXNrc0J5SGFuZGxlSWQgPSB7fTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbZGF0YS5oYW5kbGVJZF07XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgICAgICB0YXNrc0J5SGFuZGxlSWRbZGF0YS5oYW5kbGVJZF0gPSB0YXNrO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFt0YXNrLmRhdGEuaGFuZGxlSWRdO1xuICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUodGFzay5kYXRhLmhhbmRsZUlkKTtcbiAgICB9XG4gICAgc2V0TmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBzZXROYW1lLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRhc2sgPSB6b25lLnNjaGVkdWxlTWFjcm9UYXNrKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHRhc2suZGF0YS5oYW5kbGVJZDtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5yZWYgPSBoYW5kbGUucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay51bnJlZiA9IGhhbmRsZS51bnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG4gICAgY2xlYXJOYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIGNhbmNlbE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInID8gdGFza3NCeUhhbmRsZUlkW2FyZ3NbMF1dIDogYXJnc1swXTtcbiAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgQ2hyb21lIGFuZCBDaHJvbWUgbW9iaWxlLCB0byBlbmFibGVcbiAqIHRoaW5ncyBsaWtlIHJlZGVmaW5pbmcgYGNyZWF0ZWRDYWxsYmFja2Agb24gYW4gZWxlbWVudC5cbiAqL1xudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sKCdkZWZpbmVQcm9wZXJ0eScpXSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0W3pvbmVTeW1ib2woJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicpXSA9XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB6b25lU3ltYm9sKCd1bmNvbmZpZ3VyYWJsZXMnKTtcbmZ1bmN0aW9uIHByb3BlcnR5UGF0Y2goKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eSBcXCcnICsgcHJvcCArICdcXCcgb2YgJyArIG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICBpZiAocHJvcCAhPT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgICAgICAgIGRlc2MgPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgICAgICBpZiAodHlwZW9mIHByb3RvID09PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3RvKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvdG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBwcm90b1twcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgcHJvdG9bcHJvcF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gICAgfTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzYztcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgICB2YXIgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnID0gZGVzYy5jb25maWd1cmFibGU7XG4gICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgcmV0dXJuIF90cnlEZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MsIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYykge1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgICAgICB9XG4gICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2M7XG59XG5mdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSBvZiBlcnJvcnMsIHdoZW4gdGhlIGNvbmZpZ3VyYWJsZSBmbGFnIHdhcyBsaWtlbHkgc2V0IGJ5IHJld3JpdGVEZXNjcmlwdG9yKCksIGxldCdzXG4gICAgICAgICAgICAvLyByZXRyeSB3aXRoIHRoZSBvcmlnaW5hbCBmbGFnIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gb3JpZ2luYWxDb25maWd1cmFibGVGbGFnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjSnNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBKU09OLnN0cmluZ2lmeShkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjSnNvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29uZmlndXJlICdcIiArIHByb3AgKyBcIicgd2l0aCBkZXNjcmlwdG9yICdcIiArIGRlc2NKc29uICsgXCInIG9uIG9iamVjdCAnXCIgKyBvYmogKyBcIicgYW5kIGdvdCBlcnJvciwgZ2l2aW5nIHVwOiBcIiArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFdURl9JU1NVRV81NTUgPSAnQW5jaG9yLEFyZWEsQXVkaW8sQlIsQmFzZSxCYXNlRm9udCxCb2R5LEJ1dHRvbixDYW52YXMsQ29udGVudCxETGlzdCxEaXJlY3RvcnksRGl2LEVtYmVkLEZpZWxkU2V0LEZvbnQsRm9ybSxGcmFtZSxGcmFtZVNldCxIUixIZWFkLEhlYWRpbmcsSHRtbCxJRnJhbWUsSW1hZ2UsSW5wdXQsS2V5Z2VuLExJLExhYmVsLExlZ2VuZCxMaW5rLE1hcCxNYXJxdWVlLE1lZGlhLE1lbnUsTWV0YSxNZXRlcixNb2QsT0xpc3QsT2JqZWN0LE9wdEdyb3VwLE9wdGlvbixPdXRwdXQsUGFyYWdyYXBoLFByZSxQcm9ncmVzcyxRdW90ZSxTY3JpcHQsU2VsZWN0LFNvdXJjZSxTcGFuLFN0eWxlLFRhYmxlQ2FwdGlvbixUYWJsZUNlbGwsVGFibGVDb2wsVGFibGUsVGFibGVSb3csVGFibGVTZWN0aW9uLFRleHRBcmVhLFRpdGxlLFRyYWNrLFVMaXN0LFVua25vd24sVmlkZW8nO1xudmFyIE5PX0VWRU5UX1RBUkdFVCA9ICdBcHBsaWNhdGlvbkNhY2hlLEV2ZW50U291cmNlLEZpbGVSZWFkZXIsSW5wdXRNZXRob2RDb250ZXh0LE1lZGlhQ29udHJvbGxlcixNZXNzYWdlUG9ydCxOb2RlLFBlcmZvcm1hbmNlLFNWR0VsZW1lbnRJbnN0YW5jZSxTaGFyZWRXb3JrZXIsVGV4dFRyYWNrLFRleHRUcmFja0N1ZSxUZXh0VHJhY2tMaXN0LFdlYktpdE5hbWVkRmxvdyxXaW5kb3csV29ya2VyLFdvcmtlckdsb2JhbFNjb3BlLFhNTEh0dHBSZXF1ZXN0LFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsWE1MSHR0cFJlcXVlc3RVcGxvYWQsSURCUmVxdWVzdCxJREJPcGVuREJSZXF1ZXN0LElEQkRhdGFiYXNlLElEQlRyYW5zYWN0aW9uLElEQkN1cnNvcixEQkluZGV4J1xuICAgIC5zcGxpdCgnLCcpO1xudmFyIEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG5mdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwpIHtcbiAgICB2YXIgYXBpcyA9IFtdO1xuICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgIGlmIChpc1d0Zikge1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoX2dsb2JhbFtFVkVOVF9UQVJHRVRdKSB7XG4gICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHR5cGUgJiYgdHlwZS5wcm90b3R5cGUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmZ1bmN0aW9uIGFwcGx5KF9nbG9iYWwpIHtcbiAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIF9nbG9iYWwuV2ViU29ja2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuICAgICAgICB2YXIgcHJveHlTb2NrZXQ7XG4gICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBPYmplY3QuY3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICBbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBjYW4gcGF0Y2ggdGhlIHJlYWwgc29ja2V0XG4gICAgICAgICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydjbG9zZScsICdlcnJvcicsICdtZXNzYWdlJywgJ29wZW4nXSk7XG4gICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgICB9O1xuICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgX2dsb2JhbC5XZWJTb2NrZXRbcHJvcF0gPSBXU1twcm9wXTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBldmVudE5hbWVzID0gJ2NvcHkgY3V0IHBhc3RlIGFib3J0IGJsdXIgZm9jdXMgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBjaGFuZ2UgY2xpY2sgY29udGV4dG1lbnUgZGJsY2xpY2sgZHJhZyBkcmFnZW5kIGRyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJhZ3N0YXJ0IGRyb3AgZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmRlZCBpbnB1dCBpbnZhbGlkIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbG9hZCBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBtZXNzYWdlIG1vdXNlZG93biBtb3VzZWVudGVyIG1vdXNlbGVhdmUgbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwIHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHJlc2V0IHNjcm9sbCBzZWVrZWQgc2Vla2luZyBzZWxlY3Qgc2hvdyBzdGFsbGVkIHN1Ym1pdCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmcgbW96ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuZXJyb3IgbW96cG9pbnRlcmxvY2tjaGFuZ2UgbW96cG9pbnRlcmxvY2tlcnJvciBlcnJvciB3ZWJnbGNvbnRleHRyZXN0b3JlZCB3ZWJnbGNvbnRleHRsb3N0IHdlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InXG4gICAgLnNwbGl0KCcgJyk7XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChfZ2xvYmFsKSB7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpKSB7XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHdlIGNhbiBwYXRjaCB0aGUgZGVzY3JpcHRvcjogIENocm9tZSAmIEZpcmVmb3hcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICBpZiAodHlwZW9mIElEQkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQlJlcXVlc3QucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQk9wZW5EQlJlcXVlc3QucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUsIG51bGwpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCQ3Vyc29yLnByb3RvdHlwZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhXZWJTb2NrZXQucHJvdG90eXBlLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gU2FmYXJpLCBBbmRyb2lkIGJyb3dzZXJzIChKZWxseSBCZWFuKVxuICAgICAgICBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cygpO1xuICAgICAgICBwYXRjaENsYXNzKCdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIGFwcGx5KF9nbG9iYWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJykgJiZcbiAgICAgICAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFdlYktpdCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0MzY0XG4gICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJyk7XG4gICAgICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgcmVzdWx0ID0gISFyZXEub25yZWFkeXN0YXRlY2hhbmdlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7fSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHVuYm91bmRLZXkgPSB6b25lU3ltYm9sKCd1bmJvdW5kJyk7XG4vLyBXaGVuZXZlciBhbnkgZXZlbnRMaXN0ZW5lciBmaXJlcywgd2UgY2hlY2sgdGhlIGV2ZW50TGlzdGVuZXIgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cygpIHtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgdmFyIG9ucHJvcGVydHkgPSAnb24nICsgcHJvcGVydHk7XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZCwgc291cmNlO1xuICAgICAgICAgICAgaWYgKGVsdCkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVsdC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9ICd1bmtub3duLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGVsdCkge1xuICAgICAgICAgICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZCA9IFpvbmUuY3VycmVudC53cmFwKGVsdFtvbnByb3BlcnR5XSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRbdW5ib3VuZEtleV0gPSBlbHRbb25wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG4gICAgXG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudFBhdGNoKF9nbG9iYWwpIHtcbiAgICBpZiAoIWlzQnJvd3NlciB8fCAhKCdyZWdpc3RlckVsZW1lbnQnIGluIF9nbG9iYWwuZG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9yZWdpc3RlckVsZW1lbnQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICdEb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ6OicgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gWm9uZS5jdXJyZW50LndyYXAoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBab25lLmN1cnJlbnQud3JhcChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSA9IFpvbmUuY3VycmVudC53cmFwKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlZ2lzdGVyRWxlbWVudC5hcHBseShkb2N1bWVudCwgW25hbWUsIG9wdHNdKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgc2V0ID0gJ3NldCc7XG52YXIgY2xlYXIgPSAnY2xlYXInO1xudmFyIGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbnZhciBfZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbDtcbnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ1RpbWVvdXQnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG5wYXRjaFRpbWVyKF9nbG9iYWwsIHNldCwgY2xlYXIsICdJbW1lZGlhdGUnKTtcbnBhdGNoVGltZXIoX2dsb2JhbCwgJ3JlcXVlc3QnLCAnY2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG5wYXRjaFRpbWVyKF9nbG9iYWwsICdtb3pSZXF1ZXN0JywgJ21vekNhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xucGF0Y2hUaW1lcihfZ2xvYmFsLCAnd2Via2l0UmVxdWVzdCcsICd3ZWJraXRDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbmZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tpbmdNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBibG9ja2luZ01ldGhvZHNbaV07XG4gICAgcGF0Y2hNZXRob2QoX2dsb2JhbCwgbmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgX2dsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5ldmVudFRhcmdldFBhdGNoKF9nbG9iYWwpO1xucHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goX2dsb2JhbCk7XG5wYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG5wYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG5wYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG5wcm9wZXJ0eVBhdGNoKCk7XG5yZWdpc3RlckVsZW1lbnRQYXRjaChfZ2xvYmFsKTtcbi8vIFRyZWF0IFhNTEhUVFBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxucGF0Y2hYSFIoX2dsb2JhbCk7XG52YXIgWEhSX1RBU0sgPSB6b25lU3ltYm9sKCd4aHJUYXNrJyk7XG52YXIgWEhSX1NZTkMgPSB6b25lU3ltYm9sKCd4aHJTeW5jJyk7XG5mdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICBmdW5jdGlvbiBmaW5kUGVuZGluZ1Rhc2sodGFyZ2V0KSB7XG4gICAgICAgIHZhciBwZW5kaW5nVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIHJldHVybiBwZW5kaW5nVGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGRhdGEudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQucmVhZHlTdGF0ZSA9PT0gZGF0YS50YXJnZXQuRE9ORSkge1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0b3JlZFRhc2sgPSBkYXRhLnRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgZGF0YS50YXJnZXRbWEhSX1RBU0tdID0gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgIGZ1bmN0aW9uIGNsZWFyVGFzayh0YXNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBmaXJpbmcuIFNvIGluc3RlYWQsIHdlIHN0b3JlIGluZm8gZm9yIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgZGF0YS5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgIH1cbiAgICB2YXIgb3Blbk5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvcGVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgc2VsZltYSFJfU1lOQ10gPSBhcmdzWzJdID09IGZhbHNlO1xuICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9OyB9KTtcbiAgICB2YXIgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHRhcmdldDogc2VsZiwgaXNQZXJpb2RpYzogZmFsc2UsIGRlbGF5OiBudWxsLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgcmV0dXJuIHpvbmUuc2NoZWR1bGVNYWNyb1Rhc2soJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgIH1cbiAgICB9OyB9KTtcbiAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZCh3aW5kb3cuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCAnYWJvcnQnLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgIGlmICh0YXNrLmNhbmNlbEZuID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm8gdGFza1xuICAgICAgICAvLyB0byBjYW5jZWwuIERvIG5vdGhpbmcuXG4gICAgfTsgfSk7XG59XG4vLy8gR0VPX0xPQ0FUSU9OXG5pZiAoX2dsb2JhbFsnbmF2aWdhdG9yJ10gJiYgX2dsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICBwYXRjaFByb3RvdHlwZShfZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbn1cblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi96b25lLmpzL2Rpc3Qvem9uZS5qc1xuLy8gbW9kdWxlIGlkID0gNDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBORVdMSU5FID0gJ1xcbic7XG52YXIgU0VQID0gJyAgLS0tLS0tLS0tLS0tLSAgJztcbnZhciBJR05PUkVfRlJBTUVTID0gW107XG52YXIgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG52YXIgTG9uZ1N0YWNrVHJhY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvbmdTdGFja1RyYWNlKCkge1xuICAgICAgICB0aGlzLmVycm9yID0gZ2V0U3RhY2t0cmFjZSgpO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBMb25nU3RhY2tUcmFjZTtcbn0oKSk7XG5mdW5jdGlvbiBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignU1RBQ0tUUkFDRSBUUkFDS0lORycpO1xufVxuZnVuY3Rpb24gZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvcigpIHtcbiAgICB0cnkge1xuICAgICAgICB0aHJvdyBnZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufVxuLy8gU29tZSBpbXBsZW1lbnRhdGlvbnMgb2YgZXhjZXB0aW9uIGhhbmRsaW5nIGRvbid0IGNyZWF0ZSBhIHN0YWNrIHRyYWNlIGlmIHRoZSBleGNlcHRpb25cbi8vIGlzbid0IHRocm93biwgaG93ZXZlciBpdCdzIGZhc3RlciBub3QgdG8gYWN0dWFsbHkgdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbnZhciBlcnJvciA9IGdldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvcigpO1xudmFyIGNvdWdodEVycm9yID0gZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvcigpO1xudmFyIGdldFN0YWNrdHJhY2UgPSBlcnJvci5zdGFjayA/XG4gICAgZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yIDpcbiAgICAoY291Z2h0RXJyb3Iuc3RhY2sgPyBnZXRTdGFja3RyYWNlV2l0aENhdWdodEVycm9yIDogZ2V0U3RhY2t0cmFjZVdpdGhVbmNhdWdodEVycm9yKTtcbmZ1bmN0aW9uIGdldEZyYW1lcyhlcnJvcikge1xuICAgIHJldHVybiBlcnJvci5zdGFjayA/IGVycm9yLnN0YWNrLnNwbGl0KE5FV0xJTkUpIDogW107XG59XG5mdW5jdGlvbiBhZGRFcnJvclN0YWNrKGxpbmVzLCBlcnJvcikge1xuICAgIHZhciB0cmFjZSA9IGdldEZyYW1lcyhlcnJvcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZnJhbWUgPSB0cmFjZVtpXTtcbiAgICAgICAgLy8gRmlsdGVyIG91dCB0aGUgRnJhbWVzIHdoaWNoIGFyZSBwYXJ0IG9mIHN0YWNrIGNhcHR1cmluZy5cbiAgICAgICAgaWYgKCEoaSA8IElHTk9SRV9GUkFNRVMubGVuZ3RoICYmIElHTk9SRV9GUkFNRVNbaV0gPT09IGZyYW1lKSkge1xuICAgICAgICAgICAgbGluZXMucHVzaCh0cmFjZVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW5kZXJMb25nU3RhY2tUcmFjZShmcmFtZXMsIHN0YWNrKSB7XG4gICAgdmFyIGxvbmdUcmFjZSA9IFtzdGFja107XG4gICAgaWYgKGZyYW1lcykge1xuICAgICAgICB2YXIgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHJhY2VGcmFtZXMgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgbGFzdFRpbWUgPSB0cmFjZUZyYW1lcy50aW1lc3RhbXA7XG4gICAgICAgICAgICBsb25nVHJhY2UucHVzaChTRVAgKyBcIiBFbGFwc2VkOiBcIiArICh0aW1lc3RhbXAgLSBsYXN0VGltZS5nZXRUaW1lKCkpICsgXCIgbXM7IEF0OiBcIiArIGxhc3RUaW1lICsgXCIgXCIgKyBTRVApO1xuICAgICAgICAgICAgYWRkRXJyb3JTdGFjayhsb25nVHJhY2UsIHRyYWNlRnJhbWVzLmVycm9yKTtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IGxhc3RUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9uZ1RyYWNlLmpvaW4oTkVXTElORSk7XG59XG5ab25lWydsb25nU3RhY2tUcmFjZVpvbmVTcGVjJ10gPSB7XG4gICAgbmFtZTogJ2xvbmctc3RhY2stdHJhY2UnLFxuICAgIGxvbmdTdGFja1RyYWNlTGltaXQ6IDEwLFxuICAgIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbiAocGFyZW50Wm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICB2YXIgY3VycmVudFRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICB2YXIgdHJhY2UgPSBjdXJyZW50VGFzayAmJiBjdXJyZW50VGFzay5kYXRhICYmIGN1cnJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV0gfHwgW107XG4gICAgICAgIHRyYWNlID0gW25ldyBMb25nU3RhY2tUcmFjZSgpXS5jb25jYXQodHJhY2UpO1xuICAgICAgICBpZiAodHJhY2UubGVuZ3RoID4gdGhpcy5sb25nU3RhY2tUcmFjZUxpbWl0KSB7XG4gICAgICAgICAgICB0cmFjZS5sZW5ndGggPSB0aGlzLmxvbmdTdGFja1RyYWNlTGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXNrLmRhdGEpXG4gICAgICAgICAgICB0YXNrLmRhdGEgPSB7fTtcbiAgICAgICAgdGFzay5kYXRhW2NyZWF0aW9uVHJhY2VdID0gdHJhY2U7XG4gICAgICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICAgIH0sXG4gICAgb25IYW5kbGVFcnJvcjogZnVuY3Rpb24gKHBhcmVudFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSB7XG4gICAgICAgIHZhciBwYXJlbnRUYXNrID0gWm9uZS5jdXJyZW50VGFzayB8fCBlcnJvci50YXNrO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBwYXJlbnRUYXNrKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2tTZXRTdWNjZWRlZCA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlcnJvciwgJ3N0YWNrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlR2V0XzEgPSBkZXNjcmlwdG9yLmdldDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlXzEgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxvbmdTdGFja1RyYWNlKHBhcmVudFRhc2suZGF0YSAmJiBwYXJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV0sIGRlbGVnYXRlR2V0XzEgPyBkZWxlZ2F0ZUdldF8xLmFwcGx5KHRoaXMpIDogdmFsdWVfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrU2V0U3VjY2VkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbG9uZ1N0YWNrID0gc3RhY2tTZXRTdWNjZWRlZCA/XG4gICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgcmVuZGVyTG9uZ1N0YWNrVHJhY2UocGFyZW50VGFzay5kYXRhICYmIHBhcmVudFRhc2suZGF0YVtjcmVhdGlvblRyYWNlXSwgZXJyb3Iuc3RhY2spO1xuICAgICAgICAgICAgaWYgKCFzdGFja1NldFN1Y2NlZGVkKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tTZXRTdWNjZWRlZCA9IGVycm9yLnN0YWNrID0gbG9uZ1N0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhY2tTZXRTdWNjZWRlZCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrU2V0U3VjY2VkZWQgPSBlcnJvci5sb25nU3RhY2sgPSBsb25nU3RhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyb3IpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZXMoc3RhY2tUcmFjZXMsIGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBzdGFja1RyYWNlcy5wdXNoKGdldEZyYW1lcygobmV3IExvbmdTdGFja1RyYWNlKCkpLmVycm9yKSk7XG4gICAgICAgIGNhcHR1cmVTdGFja1RyYWNlcyhzdGFja1RyYWNlcywgY291bnQgLSAxKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb21wdXRlSWdub3JlRnJhbWVzKCkge1xuICAgIHZhciBmcmFtZXMgPSBbXTtcbiAgICBjYXB0dXJlU3RhY2tUcmFjZXMoZnJhbWVzLCAyKTtcbiAgICB2YXIgZnJhbWVzMSA9IGZyYW1lc1swXTtcbiAgICB2YXIgZnJhbWVzMiA9IGZyYW1lc1sxXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lczEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZyYW1lMSA9IGZyYW1lczFbaV07XG4gICAgICAgIHZhciBmcmFtZTIgPSBmcmFtZXMyW2ldO1xuICAgICAgICBpZiAoZnJhbWUxID09PSBmcmFtZTIpIHtcbiAgICAgICAgICAgIElHTk9SRV9GUkFNRVMucHVzaChmcmFtZTEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb21wdXRlSWdub3JlRnJhbWVzKCk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vem9uZS5qcy9kaXN0L2xvbmctc3RhY2stdHJhY2Utem9uZS5qc1xuLy8gbW9kdWxlIGlkID0gNDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=
