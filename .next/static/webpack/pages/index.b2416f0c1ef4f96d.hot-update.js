"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar index = function(param) {\n    var countryList1 = param.countryList;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Counties\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, _this),\n            countryList1.map(function(countryList) {\n                console.log(countryList.name.common);\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: countryList.name.common\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, _this1)\n                }, countryList.id, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQVcxQixJQUFNQyxLQUFLLEdBQUcsZ0JBQXFCO1FBQWxCQyxZQUFXLFNBQVhBLFdBQVc7O0lBQzNCLHFCQUNDLDhEQUFDQyxLQUFHOzswQkFDSCw4REFBQ0MsSUFBRTswQkFBQyxjQUFZOzs7OztxQkFBSztZQUNwQkYsWUFBVyxDQUFDRyxHQUFHLENBQUMsU0FBQ0gsV0FBVyxFQUFLO2dCQUNqQ0ksT0FBTyxDQUFDQyxHQUFHLENBQUNMLFdBQVcsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs4QkFDckMsOERBQUNOLEtBQUc7OEJBQ0gsNEVBQUNPLElBQUU7a0NBQUVSLFdBQVcsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNOzs7Ozs4QkFBTTttQkFEekJQLFdBQVcsQ0FBQ1MsRUFBRTs7OzswQkFFbEIsQ0FBQzthQUNQLENBQUM7Ozs7OzthQUNHLENBQ0w7Q0FDRjs7QUFFRCwrREFBZVYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsJyk7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IGNvdW50cnlMaXN0OiBkYXRhIH0sXHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgY291bnRyeUxpc3QgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDE+QWxsIENvdW50aWVzPC9oMT5cclxuXHRcdFx0e2NvdW50cnlMaXN0Lm1hcCgoY291bnRyeUxpc3QpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjb3VudHJ5TGlzdC5uYW1lLmNvbW1vbik7XHJcblx0XHRcdFx0PGRpdiBrZXk9e2NvdW50cnlMaXN0LmlkfT5cclxuXHRcdFx0XHRcdDxoMz57Y291bnRyeUxpc3QubmFtZS5jb21tb259PC9oMz5cclxuXHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJpbmRleCIsImNvdW50cnlMaXN0IiwiZGl2IiwiaDEiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNvbW1vbiIsImgzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});