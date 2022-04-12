"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// First load data then render html\n// export async function getStaticProps() {\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://restcountries.com/v3.1/all\");\n    const data = await res.json();\n    return {\n        props: {\n            countryList: data\n        }\n    };\n};\nconst index = ({ countryList: countryList1  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Counties\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined),\n            countryList1.map((countryList)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: countryList.name.common\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQ3BDLE1BQU1DLGNBQWMsR0FBRyxVQUFZO0lBQ3pDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0NBQW9DLENBQUM7SUFDN0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQzdCLE9BQU87UUFDTkMsS0FBSyxFQUFFO1lBQUVDLFdBQVcsRUFBRUgsSUFBSTtTQUFFO0tBQzVCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTUksS0FBSyxHQUFHLENBQUMsRUFBRUQsV0FBVyxFQUFYQSxZQUFXLEdBQUUsR0FBSztJQUNsQyxxQkFDQyw4REFBQ0UsS0FBRzs7MEJBQ0gsOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7eUJBQUs7WUFDcEJILFlBQVcsQ0FBQ0ksR0FBRyxDQUFDLENBQUNKLFdBQVcsaUJBQzVCLDhEQUFDRSxLQUFHOzhCQUNILDRFQUFDRyxHQUFDO2tDQUNELDRFQUFDQyxJQUFFO3NDQUFFTixXQUFXLENBQUNPLElBQUksQ0FBQ0MsTUFBTTs7Ozs7cUNBQU07Ozs7O2lDQUMvQjs7Ozs7NkJBQ0M7WUFDTixDQUFDOzs7Ozs7aUJBQ0csQ0FDTDtDQUNGO0FBRUQsaUVBQWVQLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcHJhY3RpY2UtMi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gRmlyc3QgbG9hZCBkYXRhIHRoZW4gcmVuZGVyIGh0bWxcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbGwnKTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgY291bnRyeUxpc3Q6IGRhdGEgfSxcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyBjb3VudHJ5TGlzdCB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMT5BbGwgQ291bnRpZXM8L2gxPlxyXG5cdFx0XHR7Y291bnRyeUxpc3QubWFwKChjb3VudHJ5TGlzdCkgPT4gKFxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PGgzPntjb3VudHJ5TGlzdC5uYW1lLmNvbW1vbn08L2gzPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJjb3VudHJ5TGlzdCIsImluZGV4IiwiZGl2IiwiaDEiLCJtYXAiLCJhIiwiaDMiLCJuYW1lIiwiY29tbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();