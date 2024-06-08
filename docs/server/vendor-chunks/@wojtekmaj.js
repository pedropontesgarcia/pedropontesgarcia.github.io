"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@wojtekmaj";
exports.ids = ["vendor-chunks/@wojtekmaj"];
exports.modules = {

/***/ "(ssr)/./node_modules/@wojtekmaj/react-hooks/dist/esm/useResizeObserver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wojtekmaj/react-hooks/dist/esm/useResizeObserver.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useResizeObserver)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n/**\n * Observes a given element using ResizeObserver.\n *\n * @param {Element} [element] Element to attach ResizeObserver to\n * @param {ResizeObserverOptions} [options] ResizeObserver options. WARNING! If you define the\n *   object in component body, make sure to memoize it.\n * @param {ResizeObserverCallback} observerCallback ResizeObserver callback. WARNING! If you define\n *   the function in component body, make sure to memoize it.\n * @returns {void}\n */\nfunction useResizeObserver(element, options, observerCallback) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (!element || !('ResizeObserver' in window)) {\n            return undefined;\n        }\n        const observer = new ResizeObserver(observerCallback);\n        observer.observe(element, options);\n        return () => {\n            observer.disconnect();\n        };\n    }, [element, options, observerCallback]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHdvanRla21hai9yZWFjdC1ob29rcy9kaXN0L2VzbS91c2VSZXNpemVPYnNlcnZlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQztBQUNBLGFBQWE7QUFDYjtBQUNlO0FBQ2YsSUFBSSxnREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZWRyb3Mtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ad29qdGVrbWFqL3JlYWN0LWhvb2tzL2Rpc3QvZXNtL3VzZVJlc2l6ZU9ic2VydmVyLmpzP2ZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBPYnNlcnZlcyBhIGdpdmVuIGVsZW1lbnQgdXNpbmcgUmVzaXplT2JzZXJ2ZXIuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBbZWxlbWVudF0gRWxlbWVudCB0byBhdHRhY2ggUmVzaXplT2JzZXJ2ZXIgdG9cbiAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJPcHRpb25zfSBbb3B0aW9uc10gUmVzaXplT2JzZXJ2ZXIgb3B0aW9ucy4gV0FSTklORyEgSWYgeW91IGRlZmluZSB0aGVcbiAqICAgb2JqZWN0IGluIGNvbXBvbmVudCBib2R5LCBtYWtlIHN1cmUgdG8gbWVtb2l6ZSBpdC5cbiAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gb2JzZXJ2ZXJDYWxsYmFjayBSZXNpemVPYnNlcnZlciBjYWxsYmFjay4gV0FSTklORyEgSWYgeW91IGRlZmluZVxuICogICB0aGUgZnVuY3Rpb24gaW4gY29tcG9uZW50IGJvZHksIG1ha2Ugc3VyZSB0byBtZW1vaXplIGl0LlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlc2l6ZU9ic2VydmVyKGVsZW1lbnQsIG9wdGlvbnMsIG9ic2VydmVyQ2FsbGJhY2spIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgISgnUmVzaXplT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH07XG4gICAgfSwgW2VsZW1lbnQsIG9wdGlvbnMsIG9ic2VydmVyQ2FsbGJhY2tdKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@wojtekmaj/react-hooks/dist/esm/useResizeObserver.js\n");

/***/ })

};
;