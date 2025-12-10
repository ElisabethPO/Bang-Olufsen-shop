// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lNlDA":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "112721e41309efa1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dXtqq":[function(require,module,exports,__globalThis) {
// const catalogContainer = document.querySelector('.catalog-cntr');
// async function fetchProducts() {
//   try {
//     const response = await fetch('http://localhost:5000/api/products');
//     const products = await response.json();
//     renderProducts(products);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }
// function handleClickProduct () {
//   localStorage.setItem('product_id', id)
//   const productId = localStorage.getItem('product_id')
// }
// // function renderProducts(products) {
// //   catalogContainer.innerHTML = '';
// //   console.log(products)
// //   products.forEach((product) => {
// //     const productHTML = `
// //       <article class="product">
// //         ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
// //         <div class="product__top">
// //           <img src="data:image/jpeg;base64,${product.picture}"
// //                alt="${product.name}"
// //                class="product__image">
// //         </div>
// //         <h2 class="product__title">
// //           <a class="product-link" data-id="${product._id}">
// //             ${product.name}
// //           </a>
// //         </h2>
// //         <p class="product__code">Product code: ${product._id}</p>
// //         <div class="feedbacks">
// //           <div class="stars stars--${Math.round(product.rating)}">
// //             ${'<div class="stars__star"></div>'.repeat(5)}
// //           </div>
// //           <p class="feedbacks__review">Reviews: 0</p>
// //         </div>
// //         <p class="product__price">
// //           <span class="product__price-name">Price:</span>
// //           <span class="product__price-value">$${product.price}</span>
// //         </p>
// //         <a href="#" class="product__button" data-qa="product-hover">Buy</a>
// //       </article>`;
// //     catalogContainer.insertAdjacentHTML('beforeend', productHTML);
// //   });
// //   document.querySelectorAll('.product-link').forEach(productLink => {
// //     productLink.addEventListener('click', function () {
// //       const productId = productLink.getAttribute('data-id');
// //       localStorage.setItem('product_id', productId);
// //       console.log('Papa peva:', productId)
// //       // window.location.href = 'product.html';
// //     });
// //   });
// // }
// function renderProducts(products) {
//   catalogContainer.innerHTML = '';
//   products.forEach((product) => {
//     const productHTML = `
//       <article class="product">
//         ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
//         <div class="product__top">
//           <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
//                alt="${product.name}"
//                class="product__image">
//         </div>
//         <h2 class="product__title">
//           <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
//             ${product.name}
//           </a>
//         </h2>
//         <p class="product__code">Product code: ${product._id || 'N/A'}</p>
//         <p class="product__price">
//           <span class="product__price-name">Price:</span>
//           <span class="product__price-value">$${product.price || '0.00'}</span>
//         </p>
//       </article>`;
//     catalogContainer.insertAdjacentHTML('beforeend', productHTML);
//   });
// }
// fetchProducts();
// const catalogContainer = document.querySelector('.catalog-cntr');
// async function fetchProducts() {
//   try {
//     const response = await fetch('http://localhost:5000/api/products');
//     if (!response.ok) {
//       throw new Error(`Ошибка HTTP: ${response.status}`);
//     }
//     const products = await response.json();
//     renderProducts(products);
//   } catch (error) {
//     console.error('Ошибка загрузки списка товаров:', error);
//   }
// }
// function handleClickProduct(id) {
//   localStorage.setItem('product_id', id);
// }
// function renderProducts(products) {
//   if (!catalogContainer) {
//     console.error('Ошибка: контейнер .catalog-cntr не найден');
//     return;
//   }
//   catalogContainer.innerHTML = '';
//   products.forEach((product) => {
//     const productHTML = `
//       <article class="product">
//         ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
//         <div class="product__top">
//           <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
//                alt="${product.name}"
//                class="product__image">
//         </div>
//         <h2 class="product__title">
//           <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
//             ${product.name}
//           </a>
//         </h2>
//         <p class="product__code">Product code: ${product._id || 'N/A'}</p>
//         <p class="product__price">
//           <span class="product__price-name">Price:</span>
//           <span class="product__price-value">$${product.price || '0.00'}</span>
//         </p>
//       </article>`;
//     catalogContainer.insertAdjacentHTML('beforeend', productHTML);
//   });
//   // Добавляем обработчики кликов по товарам
//   document.querySelectorAll('.product-link').forEach(link => {
//     link.addEventListener('click', function (event) {
//       const productId = this.getAttribute('data-id');
//       handleClickProduct(productId);
//     });
//   });
// }
// document.addEventListener('DOMContentLoaded', fetchProducts);
const catalogContainer = document.querySelector('.catalog-cntr');
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error(`\u{41E}\u{448}\u{438}\u{431}\u{43A}\u{430} HTTP: ${response.status}`);
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432:", error);
    }
}
// function renderProducts(products) {
//   if (!catalogContainer) {
//     console.error('Ошибка: контейнер .catalog-cntr не найден');
//     return;
//   }
//   catalogContainer.innerHTML = '';
//   products.forEach((product) => {
//     const productHTML = `
//       <article class="product">
//         ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
//         <div class="product__top">
//           <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
//                alt="${product.name}"
//                class="product__image">
//         </div>
//         <h2 class="product__title">
//           <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
//             ${product.name}
//           </a>
//         </h2>
//         <p class="product__code">Product code: ${product._id || 'N/A'}</p>
//         <p class="product__price">
//           <span class="product__price-name">Price:</span>
//           <span class="product__price-value">$${product.price || '0.00'}</span>
//         </p>
//         <a href="#" class="product__button" data-qa="product-hover">Buy</a>
//       </article>`;
//     catalogContainer.insertAdjacentHTML('beforeend', productHTML);
//   });
//   // Добавляем обработчики кликов по товарам
//   document.querySelectorAll('.product-link').forEach(link => {
//     link.addEventListener('click', function (event) {
//       const productId = this.getAttribute('data-id');
//       localStorage.setItem('product_id', productId); // Обновляем ID в localStorage при каждом клике
//     });
//   });
// }
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex((item)=>item._id === product._id);
    if (existingProductIndex >= 0) cart[existingProductIndex].quantity += 1;
    else cart.push({
        ...product,
        quantity: 1
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}
function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item)=>sum + item.quantity, 0);
    const cartCounter = document.querySelector('.icon__quantity');
    if (cartCounter) cartCounter.textContent = totalItems;
}
function renderProducts(products) {
    const catalogContainer = document.querySelector('.catalog-cntr');
    if (!catalogContainer) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 .catalog-cntr \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
        return;
    }
    catalogContainer.innerHTML = '';
    products.forEach((product)=>{
        const productHTML = `
      <article class="product">
        ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
        <div class="product__top">
          <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
               alt="${product.name}"
               class="product__image">
        </div>
        <h2 class="product__title">
          <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
            ${product.name}
          </a>
        </h2>
        <p class="product__code">Product code: ${product._id || 'N/A'}</p>
        <p class="product__price">
          <span class="product__price-name">Price:</span>
          <span class="product__price-value">$${product.price || '0.00'}</span>
        </p>
        <button class="product__button buy-btn" data-product-id="${product._id}">Buy</button>
      </article>`;
        catalogContainer.insertAdjacentHTML('beforeend', productHTML);
    });
    // Добавляем обработчики кликов по товарам (сохранение ID в localStorage)
    document.querySelectorAll('.product-link').forEach((link)=>{
        link.addEventListener('click', function() {
            localStorage.setItem('product_id', this.getAttribute('data-id'));
        });
    });
    // Добавляем обработчики кликов для кнопок "Buy"
    document.querySelectorAll('.buy-btn').forEach((button)=>{
        button.addEventListener('click', async function() {
            const productId = this.getAttribute('data-product-id');
            try {
                const response = await fetch(`http://localhost:5000/api/products/${productId}`);
                const productData = await response.json();
                if (!response.ok) throw new Error('Product not found');
                addToCart(productData); // Добавляем товар в корзину
            } catch (error) {
                console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u043E\u0432\u0430\u0440\u0435:", error);
            }
        });
    });
    updateCartCounter(); // Обновляем счетчик при рендере
}
document.addEventListener('DOMContentLoaded', fetchProducts);
document.addEventListener("DOMContentLoaded", ()=>{
    const menuLinks = document.querySelectorAll(".menu__nav .nav__link");
    const productList = document.querySelector(".catalog-cntr");
    menuLinks.forEach((link)=>{
        link.addEventListener("click", async (event)=>{
            event.preventDefault();
            const category = link.dataset.category;
            try {
                // Отправка GET-запроса с параметром фильтрации
                const response = await fetch(`http://localhost:5000/api/products/filter?type=${category}`);
                const products = await response.json();
                // Очистка текущего списка товаров
                productList.innerHTML = "";
                // Генерация HTML для новых товаров
                products.forEach((product)=>{
                    const productHTML = `
            <article class="product">
              ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
                <div class="product__top">
                  <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                        alt="${product.name}"
                        class="product__image">
                </div>
                <h2 class="product__title">
                  <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
                    ${product.name}
                  </a>
                </h2>
                <p class="product__code">Product code: ${product._id || 'N/A'}</p>
                <p class="product__price">
                  <span class="product__price-name">Price:</span>
                  <span class="product__price-value">$${product.price || '0.00'}</span>
                </p>
                <a href="#" class="product__button" data-qa="product-hover">Buy</a>
            </article>`;
                    productList.insertAdjacentHTML("beforeend", productHTML);
                });
            } catch (error) {
                console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432:", error);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const filterItems = document.querySelectorAll(".catalog-filter__items .custom-checkbox__input");
    const productList = document.querySelector(".catalog-cntr");
    // Функция для получения выбранных фильтров
    const getSelectedFilters = ()=>{
        const filters = [];
        filterItems.forEach((item)=>{
            if (item.checked) {
                const subCategory = item.closest(".custom-checkbox").dataset.text;
                filters.push(subCategory);
            }
        });
        return filters;
    };
    // Функция для обновления списка товаров
    const updateProductList = async ()=>{
        const selectedFilters = getSelectedFilters();
        try {
            const query = selectedFilters.length ? `?subCategory=${selectedFilters.join(",")}` : "";
            const response = await fetch(`http://localhost:5000/api/products/filter${query}`);
            const products = await response.json();
            // Очистка текущего списка товаров
            productList.innerHTML = "";
            // Добавление новых товаров
            products.forEach((product)=>{
                const productHTML = `
            <article class="product">
              ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
                <div class="product__top">
                  <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                        alt="${product.name}"
                        class="product__image">
                </div>
                <h2 class="product__title">
                  <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
                    ${product.name}
                  </a>
                </h2>
                <p class="product__code">Product code: ${product._id || 'N/A'}</p>
                <p class="product__price">
                  <span class="product__price-name">Price:</span>
                  <span class="product__price-value">$${product.price || '0.00'}</span>
                </p>
                <a href="#" class="product__button" data-qa="product-hover">Buy</a>
            </article>`;
                productList.insertAdjacentHTML("beforeend", productHTML);
            });
        } catch (error) {
            console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432:", error);
        }
    };
    // Добавление обработчиков событий на чекбоксы
    filterItems.forEach((checkbox)=>{
        checkbox.addEventListener("change", updateProductList);
    });
    // Первоначальная загрузка всех товаров
    updateProductList();
});
document.addEventListener('DOMContentLoaded', ()=>{
    const colorFilter = document.getElementById('color-filter');
    const productContainer = document.querySelector('.catalog-cntr'); // Селектор для контейнера товаров
    colorFilter.addEventListener('change', async (event)=>{
        if (event.target.classList.contains('custom-checkbox__input')) {
            const selectedColors = Array.from(colorFilter.querySelectorAll('input:checked')).map((checkbox)=>checkbox.closest('label').dataset.text);
            try {
                const response = await fetch(`http://localhost:5000/api/products/filter?color=${selectedColors.join(',')}`);
                const products = await response.json();
                updateProducts(products);
            } catch (error) {
                console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438:", error);
            }
        }
    });
    function updateProducts(products) {
        productContainer.innerHTML = ''; // Очистить контейнер товаров
        products.forEach((product)=>{
            const productElement = `
            <article class="product">
              ${product.type === 'new' ? '<span class="product-prop product__prop new">New</span>' : ''}
                <div class="product__top">
                  <img src="${product.picture ? `data:image/jpeg;base64,${product.picture}` : 'placeholder.jpg'}"
                        alt="${product.name}"
                        class="product__image">
                </div>
                <h2 class="product__title">
                  <a href="product.html?id=${product._id}" class="product-link" data-id="${product._id}">
                    ${product.name}
                  </a>
                </h2>
                <p class="product__code">Product code: ${product._id || 'N/A'}</p>
                <p class="product__price">
                  <span class="product__price-name">Price:</span>
                  <span class="product__price-value">$${product.price || '0.00'}</span>
                </p>
                <a href="#" class="product__button" data-qa="product-hover">Buy</a>
            </article>`;
            productContainer.insertAdjacentHTML('beforeend', productElement);
        });
    }
});
async function fetchRelatedProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products/related-products');
        const products = await response.json();
        updateProductList(products); // Функция для обновления списка продуктов на странице
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u043E\u0432\u0430\u0440\u0430\u0445:", error);
    }
}
function updateProductList(products) {
    const relatedContainer = document.querySelector('.card-related__content');
    relatedContainer.innerHTML = ''; // Очищаем контейнер
    products.forEach((product)=>{
        const productCard = createProductCard(product); // Функция для создания карточки товара
        relatedContainer.appendChild(productCard);
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".product__buy-btn");
    buyButtons.forEach((button)=>{
        button.addEventListener("click", async (event)=>{
            const productId = event.target.getAttribute("data-product-id");
            try {
                const response = await fetch("http://localhost:5000/api/cart/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        productId
                    })
                });
                if (!response.ok) throw new Error("Error adding product to cart");
                updateCartUI(); // Обновляем интерфейс корзины
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        });
    });
    async function updateCartUI() {
        try {
            const response = await fetch("http://localhost:5000/api/cart");
            const cartItems = await response.json();
            const cartContainer = document.querySelector(".cart__items");
            cartContainer.innerHTML = "";
            cartItems.forEach((item)=>{
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart__item");
                cartItem.innerHTML = `
          <img src="${item.product.picture || 'default.jpg'}" class="cart__image">
          <div class="cart__details">
            <h2 class="cart__name">${item.product.name}</h2>
            <p class="cart__price">$${item.product.price}</p>
            <div class="cart__quantity">
              <button class="cart__btn cart__btn--decrease" data-id="${item.product._id}">-</button>
              <span class="cart__quantity-value">${item.quantity}</span>
              <button class="cart__btn cart__btn--increase" data-id="${item.product._id}">+</button>
            </div>
          </div>
        `;
                cartContainer.appendChild(cartItem);
            });
            const totalValue = cartItems.reduce((total, item)=>total + item.product.price * item.quantity, 0);
            document.querySelector(".cart__total-value").textContent = `$${totalValue.toFixed(2)}`;
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    }
}); // document.addEventListener('DOMContentLoaded', () => {
 //   const productLinks = document.querySelectorAll('.product-link');
 //   productLinks.forEach(link => {
 //     link.addEventListener('click', (event) => {
 //       event.preventDefault();
 //       const productId = link.getAttribute('data-id'); // Убедитесь, что data-id установлен!
 //       if (productId) {
 //         window.location.href = `product.html?id=${productId}`;
 //       } else {
 //         console.error('ID продукта отсутствует.');
 //       }
 //     });
 //   });
 // });
 // document.addEventListener('DOMContentLoaded', () => {
 //   // Извлечение параметра id из URL
 //   const params = new URLSearchParams(window.location.search);
 //   const productId = params.get('id'); // Извлекаем значение параметра id
 //   if (productId) {
 //     console.log(`ID продукта: ${productId}`); // Лог для проверки
 //     // Выполните запрос к серверу для получения данных о продукте
 //     fetch(`http://localhost:5000/api/products/${productId}`)
 //       .then(response => response.json())
 //       .then(product => {
 //         // Отобразите данные продукта на странице
 //         document.querySelector('.card-info__title').textContent = product.name;
 //         document.querySelector('.card-info__descr').textContent = product.description;
 //         document.querySelector('.info-price__current').textContent = `$${product.price}`;
 //         document.querySelector('.card-slider__main img').src = product.picture;
 //       })
 //       .catch(error => {
 //         console.error('Ошибка загрузки данных продукта:', error);
 //       });
 //   } else {
 //     console.error('ID продукта не указан.');
 //   }
 // });
 // document.getElementById('login-form').addEventListener('submit', (event) => {
 //   event.preventDefault();
 //   // Получаем данные формы
 //   const email = document.getElementById('email').value;
 //   const password = document.getElementById('password').value;
 //   // Отправляем запрос на сервер
 //   fetch('http://localhost:5000/api/login', {
 //     method: 'POST',
 //     headers: {
 //       'Content-Type': 'application/json',
 //     },
 //     body: JSON.stringify({ email, password }),
 //   })
 //     .then((response) => response.json())
 //     .then((data) => {
 //       if (data.token) {
 //         // Сохраняем токен в localStorage
 //         localStorage.setItem('token', data.token);
 //         // Перенаправляем пользователя на страницу кабинета
 //         window.location.href = '/cabinet.html';
 //       } else {
 //         // Показываем сообщение об ошибке
 //         alert(data.message || 'Login failed');
 //       }
 //     })
 //     .catch((error) => {
 //       console.error('Error:', error);
 //       alert('An error occurred. Please try again.');
 //     });
 // });
 // document.addEventListener('DOMContentLoaded', () => {
 //   const token = localStorage.getItem('token');
 //   // Проверка токена
 //   if (!token) {
 //     console.log('User is not logged in. Displaying login/registration forms.');
 //     document.getElementById('auth-forms').style.display = 'block'; // Показать формы входа
 //     return;
 //   }
 //   // Проверяем токен на сервере
 //   fetch('http://localhost:5000/api/user', {
 //     method: 'GET',
 //     headers: {
 //       Authorization: `Bearer ${token}`,
 //     },
 //   })
 //     .then((response) => {
 //       if (!response.ok) {
 //         throw new Error('User not found');
 //       }
 //       return response.json();
 //     })
 //     .then((data) => {
 //       console.log(`Welcome back, ${data.name}!`);
 //       document.getElementById('auth-forms').style.display = 'none'; // Скрыть формы входа
 //       document.getElementById('dashboard').style.display = 'block'; // Показать кабинет
 //     })
 //     .catch((error) => {
 //       console.error(error.message);
 //       alert('You are not authorized. Redirecting to login.');
 //       localStorage.removeItem('token'); // Удаляем недействительный токен
 //       document.getElementById('auth-forms').style.display = 'block'; // Показать формы входа
 //     });
 // });
 // document.getElementById('register-form').addEventListener('submit', (event) => {
 //   // Отменяем стандартное поведение отправки формы
 //   event.preventDefault();
 //   // Получаем значения всех полей
 //   const name = document.getElementById('name').value.trim();
 //   const email = document.getElementById('email').value.trim();
 //   const password = document.getElementById('password').value.trim();
 //   // Проверяем, чтобы все поля были заполнены
 //   if (name && email && password) {
 //     // Отправляем данные на сервер
 //     fetch('http://localhost:5000/api/register', {
 //       method: 'POST',
 //       headers: {
 //         'Content-Type': 'application/json',
 //       },
 //       body: JSON.stringify({ name, email, password }),
 //     })
 //     .then((data) => {
 //       if (data.token) {
 //         // Сохраняем токен в localStorage
 //         localStorage.setItem('token', data.token);
 //         // Перенаправляем пользователя на страницу cabinet.html
 //         window.location.href = 'cabinet.html';
 //       } else {
 //         // Показываем сообщение об ошибке
 //         alert(data.message || 'Registration failed');
 //       }
 //     })
 //   } else {
 //     // Если поля не заполнены, выводим сообщение
 //     alert('Please fill in all the fields');
 //   }
 // });

},{}]},["lNlDA","dXtqq"], "dXtqq", "parcelRequire94c2")

//# sourceMappingURL=cart.1309efa1.js.map
