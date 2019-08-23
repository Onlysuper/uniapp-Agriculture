// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue?entry":
/*!**************************************************************************************!*\
  !*** /Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue?entry ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-loader!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-e9cfe928!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./category.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/script-loader!babel-loader!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=script&index=0!./category.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/template-compiler?id=data-v-e9cfe928!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=template&index=0!./category.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e9cfe928"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!/Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom') || {};var _default =
{
  data: function data() {
    return {
      city: '北京',
      subNVue: uni.getCurrentSubNVue(),
      iconSearch: "\uE628",
      iconLocation: "\uE611",
      iconTongzhi: "\uE729",
      headerHeight: 44,
      statusBarHeight: 0,
      showCategoryIndex: 0,
      stopAppear: false,
      //模板图片，使用模板时候应调用数据内数据
      imglist: [
      'https://ae01.alicdn.com/kf/HTB1Ns_ne.GF3KVjSZFmq6zqPXXaJ.jpg',
      'https://ae01.alicdn.com/kf/HTB1MzgAcfBj_uVjSZFpq6A0SXXaC.jpg',
      'https://ae01.alicdn.com/kf/HTB1ns_ne.GF3KVjSZFmq6zqPXXa6.jpg',
      'https://ae01.alicdn.com/kf/HTB1nRjte8Kw3KVjSZFOq6yrDVXaZ.jpg',
      'https://ae01.alicdn.com/kf/HTB1EBLweW5s3KVjSZFNq6AD3FXa9.jpg',
      'https://ae01.alicdn.com/kf/HTB1xYfSbMFY.1VjSZFnq6AFHXXaK.jpg',
      'https://ae01.alicdn.com/kf/HTB1jK2oe9SD3KVjSZFKq6z10VXap.jpg',
      'https://ae01.alicdn.com/kf/HTB1L0DweWWs3KVjSZFxq6yWUXXal.jpg',
      'https://ae01.alicdn.com/kf/HTB1Ak2qe8aE3KVjSZLeq6xsSFXan.jpg'],

      categoryList: [
      {
        id: 1, type: 'A',
        title: '家用电器',
        banner: 'https://ae01.alicdn.com/kf/HTB10Xrqe.uF3KVjSZK9q6zVtXXaZ.jpg',
        list: [
        { name: '冰箱' },
        { name: '电视' },
        { name: '空调' },
        { name: '洗衣机' },
        { name: '风扇' },
        { name: '燃气灶' },
        { name: '热水器' },
        { name: '电吹风' },
        { name: '电饭煲' }] },


      {
        id: 2, type: 'A',
        title: '办公用品',
        banner: 'https://ae01.alicdn.com/kf/HTB1_Wjpe3mH3KVjSZKzq6z2OXXab.jpg',
        list: [{ name: '打印机' }, { name: '路由器' }, { name: '扫描仪' }, { name: '投影仪' }, { name: '墨盒' }, { name: '纸类' }] },

      {
        id: 3, type: 'A',
        title: '日常用品',
        banner: 'https://ae01.alicdn.com/kf/HTB1wr_se7WE3KVjSZSyq6xocXXa4.jpg',
        list: [{ name: '茶具' }, { name: '花瓶' }, { name: '纸巾' }, { name: '毛巾' }, { name: '牙膏' }, { name: '保鲜膜' }, { name: '保鲜袋' }] },

      {
        id: 4, type: 'A',
        title: '蔬菜水果',
        banner: 'https://ae01.alicdn.com/kf/HTB17d_xe8Kw3KVjSZTEq6AuRpXaT.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 5, type: 'A',
        title: '手机数码',
        banner: 'https://ae01.alicdn.com/kf/HTB10KDqe9SD3KVjSZFKq6z10VXaS.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 6, type: 'A',
        title: '酒水饮料',
        banner: 'https://ae01.alicdn.com/kf/HTB1ypjpe4iH3KVjSZPfq6xBiVXaw.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 7, type: 'A',
        title: '母婴童装',
        banner: 'https://ae01.alicdn.com/kf/HTB1zdPue9WD3KVjSZSgq6ACxVXaE.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 8, type: 'A',
        title: '玩具乐器',
        banner: 'https://ae01.alicdn.com/kf/HTB1Hn_se8GE3KVjSZFhq6AkaFXaj.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 9, type: 'A',
        title: '医药保健',
        banner: 'https://ae01.alicdn.com/kf/HTB1CiHpe3aH3KVjSZFjq6AFWpXaS.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 10, type: 'A',
        title: '运动户外',
        banner: 'https://ae01.alicdn.com/kf/HTB1f_2UbMFY.1VjSZFnq6AFHXXaK.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 11, type: 'A',
        title: '汽车生活',
        banner: 'https://ae01.alicdn.com/kf/HTB1kbHre9SD3KVjSZFKq6z10VXa9.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 12, type: 'A',
        title: '家具厨具',
        banner: 'https://ae01.alicdn.com/kf/HTB1hlPzeW5s3KVjSZFNq6AD3FXaK.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 13, type: 'A',
        title: '生活旅行',
        banner: 'https://ae01.alicdn.com/kf/HTB1CcPye8Kw3KVjSZTEq6AuRpXaQ.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '图书文娱',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '礼品鲜花',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '宠物盛会',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '艺术邮币',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '家居家装',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] },

      {
        id: 14, type: 'A',
        title: '食品生鲜',
        banner: 'https://ae01.alicdn.com/kf/HTB1Eabte8GE3KVjSZFhq6AkaFXa3.jpg',
        list: [{ name: '苹果' }, { name: '芒果' }, { name: '椰子' }, { name: '橙子' }, { name: '奇异果' }, { name: '玉米' }, { name: '百香果' }] }],


      timer: null };

  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      fontFamily: 'iconfont',
      src: "url('https://at.alicdn.com/t/font_1087442_fe5vigfwr5m.ttf')" });

  },
  created: function created() {
    this.init();
  },
  methods: {
    toMsg: function toMsg() {
      uni.navigateTo({
        url: '../../msg/msg' });

    },
    init: function init() {var _this = this;
      uni.getSystemInfo({
        success: function success(res) {
          _this.statusBarHeight = res.statusBarHeight;
          _this.headerHeight += _this.statusBarHeight;
        } });

      this.nVueTitle = uni.getCurrentSubNVue();
      this.nVueTitle.onMessage(function (res) {
        var type = res.data.type;
        switch (type) {
          case 'location':
            _this.setCity(res.data.city);
            break;
          default:
            break;}

      });
    },
    setCity: function setCity(city) {
      this.city = city;
    },
    inputfocus: function inputfocus() {
      this.subNVue.postMessage({
        type: 'focus' });

    },
    toCategory: function toCategory(e) {
      uni.navigateTo({
        url: '../../goods/goods-list/goods-list?cid=' + e.id + '&name=' + e.name });

    },
    goToCategory: function goToCategory(event, refId, index) {var _this2 = this;
      if (this.showCategoryIndex == index) {return;}
      clearTimeout(this.timer);
      this.stopAppear = true;
      this.showCategoryIndex = index;

      var target = event.target;
      var ref = this.$refs[refId];
      this.leftScrollToElement(index, target);
      ref && dom.scrollToElement(ref[0], { offset: -69 });
      if (plus.os.name == 'Android') {
        this.timer = setTimeout(function () {
          _this2.stopAppear = false;
        }, 1000);
      } else {
        this.timer = setTimeout(function () {
          _this2.stopAppear = false;
        }, 300);
      }
    },
    ondisappear: function ondisappear($event, refId, index) {
      if ($event.direction == 'up') {
        this.checkScroll($event.direction, refId, index);
      }
    },
    onappear: function onappear($event, refId, index) {
      if ($event.direction == 'down') {
        this.checkScroll($event.direction, refId, index);
      }
    },
    checkScroll: function checkScroll(direction, refId, index) {
      if (this.stopAppear) {
        return false;
      }
      if (Math.abs(index - this.showCategoryIndex) > 1 && plus.os.name == 'iOS') {
        return;
      }
      var ref = this.$refs[refId];
      this.leftScrollToElement(index, ref[0]);
      if (direction == 'down') {
        this.showCategoryIndex = index;
      }
      if (direction == 'up') {
        this.showCategoryIndex = parseInt(index) + 1;
      }
    },
    leftScrollToElement: function leftScrollToElement(index, target) {
      if (plus.os.name == 'Android') {
        //安卓滚动的动画有回弹，左侧滚动体验不好，关闭动画
        index > 0 && dom.scrollToElement(target, { offset: -90, animated: false });
      } else {
        index > 0 && dom.scrollToElement(target, { offset: -90 });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["weexPlus"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!/Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "42"
  },
  "content": {
    "backgroundColor": "#ffffff",
    "flexDirection": "column"
  },
  "header": {
    "width": "750",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "top": 0,
    "zIndex": 99
  },
  "status-bar": {
    "width": "750"
  },
  "nav": {
    "width": "750",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "position": "relative",
    "height": "88",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "location": {
    "width": "60",
    "height": "88",
    "textAlign": "center",
    "lineHeight": "88",
    "left": "0",
    "color": "#ffc50a"
  },
  "tongzhi": {
    "width": "60",
    "height": "88",
    "textAlign": "center",
    "lineHeight": "88",
    "right": "0",
    "color": "#000000"
  },
  "location-city-text": {
    "width": "60",
    "height": "88",
    "lineHeight": "88",
    "fontSize": "26",
    "color": "#000000"
  },
  "input-box": {
    "width": "525",
    "marginLeft": "5",
    "height": 60,
    "borderRadius": "60",
    "backgroundColor": "#f5f5f5",
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "input-box-input": {
    "width": "330",
    "height": "60",
    "fontSize": "28",
    "marginLeft": "30",
    "placeholderColor": "#c0c0c0"
  },
  "search": {
    "width": "60",
    "fontSize": "34",
    "paddingRight": "30",
    "color": "#c0c0c0"
  },
  "place": {
    "backgroundColor": "#ffffff"
  },
  "category-list": {
    "position": "absolute",
    "width": "750",
    "bottom": 0
  },
  "left": {
    "position": "absolute",
    "width": "180",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#f2f2f2",
    "zIndex": 10
  },
  "left-row": {
    "width": "180",
    "height": "90",
    "alignItems": "center",
    "flexDirection": "row",
    "backgroundColor": "#f2f2f2"
  },
  "left-row-on": {
    "width": "180",
    "height": "90",
    "alignItems": "center",
    "flexDirection": "row",
    "backgroundColor": "#ffffff"
  },
  "left-text": {
    "width": "180",
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "left-text-text": {
    "textAlign": "center",
    "fontSize": 28,
    "color": "#3c3c3c"
  },
  "left-text-on": {
    "fontWeight": "600",
    "color": "#2d2d2d"
  },
  "left-block": {
    "position": "absolute",
    "width": "10",
    "top": "5",
    "bottom": "5",
    "left": 0,
    "backgroundColor": "#f2f2f2"
  },
  "left-block-on": {
    "backgroundColor": "#f06c7a"
  },
  "right": {
    "position": "absolute",
    "width": "570",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "zIndex": 10
  },
  "tab": {
    "width": "570",
    "height": "70",
    "paddingTop": 0,
    "paddingRight": "17",
    "paddingBottom": "10",
    "paddingLeft": "17",
    "flexDirection": "row",
    "alignItems": "flex-end",
    "backgroundColor": "#ffffff"
  },
  "category-title": {
    "fontSize": "28",
    "color": "#666666"
  },
  "category-title-min": {
    "marginLeft": "15",
    "fontSize": "20",
    "color": "#999999"
  },
  "right-category": {
    "width": "570",
    "paddingTop": 0,
    "paddingRight": "17",
    "paddingBottom": "20",
    "paddingLeft": "17",
    "marginTop": "20"
  },
  "right-banner": {
    "width": "536",
    "height": "182",
    "borderRadius": "10",
    "boxShadow": "0 0 5px rgba(0, 0, 0, 0.3)"
  },
  "right-banner-image": {
    "width": "536",
    "height": "182",
    "borderRadius": "10"
  },
  "right-list": {
    "marginTop": "40",
    "width": "536",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "right-box": {
    "width": "178",
    "marginBottom": "30",
    "justifyContent": "center",
    "alignItems": "center",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "right-box-image": {
    "width": "106",
    "height": "106",
    "marginTop": 0,
    "marginRight": "36",
    "marginBottom": 0,
    "marginLeft": "36"
  },
  "right-text": {
    "marginTop": "5",
    "width": "178",
    "textAlign": "center",
    "fontSize": "26"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../../../Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-e9cfe928!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!/Users/apple/Downloads/HM-mall_1.2.0/pages/tabBar/category/category.nvue ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["header"],
    style: {
      height: _vm.headerHeight + 'wx'
    }
  }, [_c('div', {
    staticClass: ["status-bar"],
    style: {
      height: _vm.statusBarHeight + 'wx'
    }
  }), _c('div', {
    staticClass: ["nav"]
  }, [_c('text', {
    staticClass: ["icon", "location"]
  }, [_vm._v(_vm._s(_vm.iconLocation))]), _c('text', {
    staticClass: ["location-city-text"]
  }, [_vm._v(_vm._s(_vm.city))]), _c('div', {
    staticClass: ["input-box"]
  }, [_c('input', {
    staticClass: ["input-box-input"],
    attrs: {
      "placeholder": "默认关键字"
    },
    on: {
      "focus": _vm.inputfocus
    }
  }), _c('text', {
    staticClass: ["icon", "search"]
  }, [_vm._v(_vm._s(_vm.iconSearch))])]), _c('text', {
    staticClass: ["icon", "tongzhi"],
    on: {
      "click": _vm.toMsg
    }
  }, [_vm._v(_vm._s(_vm.iconTongzhi))])])]), _c('div', {
    staticClass: ["category-list"],
    style: {
      top: _vm.headerHeight + 'wx'
    }
  }, [_c('list', {
    staticClass: ["left"],
    attrs: {
      "showScrollbar": false
    }
  }, _vm._l((_vm.categoryList), function(row, index) {
    return _c('cell', {
      key: index,
      ref: 'tab' + index,
      refInFor: true,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["left-row"],
      class: [index == _vm.showCategoryIndex ? 'left-row-on' : ''],
      on: {
        "click": function($event) {
          _vm.goToCategory($event, 'category' + index, index)
        }
      }
    }, [_c('div', {
      staticClass: ["left-text"]
    }, [_c('div', {
      staticClass: ["left-block"],
      class: [index == _vm.showCategoryIndex ? 'left-block-on' : '']
    }), _c('text', {
      staticClass: ["left-text-text"],
      class: [index == _vm.showCategoryIndex ? 'left-text-on' : '']
    }, [_vm._v(_vm._s(row.title))])])])])
  })), _c('list', {
    staticClass: ["right"]
  }, [_vm._l((_vm.categoryList), function(row, index) {
    return [_c('header', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["tab"]
    }, [_c('text', {
      staticClass: ["category-title"]
    }, [_vm._v(_vm._s(row.title))]), _c('text', {
      staticClass: ["category-title-min"]
    }, [_vm._v("全场5折起，疯抢100元优惠券")])])]), _c('cell', {
      key: index,
      ref: 'category' + index,
      refInFor: true,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "disappear": function($event) {
          _vm.ondisappear($event, 'tab' + index, index)
        },
        "appear": function($event) {
          _vm.onappear($event, 'tab' + index, index)
        }
      }
    }, [_c('div', {
      staticClass: ["right-category"]
    }, [_c('div', {
      staticClass: ["right-banner"]
    }, [_c('image', {
      staticClass: ["right-banner-image"],
      attrs: {
        "src": row.banner
      }
    })]), _c('div', {
      staticClass: ["right-list"]
    }, _vm._l((row.list), function(box, i) {
      return _c('div', {
        key: i,
        staticClass: ["right-box"],
        on: {
          "click": function($event) {
            _vm.toCategory(box)
          }
        }
      }, [_c('image', {
        staticClass: ["right-box-image"],
        attrs: {
          "src": _vm.imglist[i]
        }
      }), _c('text', {
        staticClass: ["right-text"]
      }, [_vm._v(_vm._s(box.name))])])
    }))])])]
  })], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });