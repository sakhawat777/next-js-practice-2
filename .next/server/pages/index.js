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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// getStaticProps()\n// export async function getStaticProps() {\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://restcountries.com/v3.1/all\");\n    const data = await res.json();\n    return {\n        props: {\n            countryList: data\n        }\n    };\n};\nconst index = ({ countryList: countryList1  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Counties\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined),\n            countryList1.map((countryList)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: countryList.name.common\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Web Development\\\\Next JS Projects\\\\next-js-practice-2\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQ3BDLE1BQU1DLGNBQWMsR0FBRyxVQUFZO0lBQ3pDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsb0NBQW9DLENBQUM7SUFDN0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQzdCLE9BQU87UUFDTkMsS0FBSyxFQUFFO1lBQUVDLFdBQVcsRUFBRUgsSUFBSTtTQUFFO0tBQzVCLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTUksS0FBSyxHQUFHLENBQUMsRUFBRUQsV0FBVyxFQUFYQSxZQUFXLEdBQUUsR0FBSztJQUNsQyxxQkFDQyw4REFBQ0UsS0FBRzs7MEJBQ0gsOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7eUJBQUs7WUFDcEJILFlBQVcsQ0FBQ0ksR0FBRyxDQUFDLENBQUNKLFdBQVcsaUJBQzVCLDhEQUFDRSxLQUFHOzhCQUNILDRFQUFDRyxHQUFDO2tDQUNELDRFQUFDQyxJQUFFO3NDQUFFTixXQUFXLENBQUNPLElBQUksQ0FBQ0MsTUFBTTs7Ozs7cUNBQU07Ozs7O2lDQUMvQjs7Ozs7NkJBQ0M7WUFDTixDQUFDOzs7Ozs7aUJBQ0csQ0FDTDtDQUNGO0FBRUQsaUVBQWVQLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtcHJhY3RpY2UtMi8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gZ2V0U3RhdGljUHJvcHMoKVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbCcpO1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBjb3VudHJ5TGlzdDogZGF0YSB9LFxyXG5cdH07XHJcbn07XHJcblxyXG5jb25zdCBpbmRleCA9ICh7IGNvdW50cnlMaXN0IH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgxPkFsbCBDb3VudGllczwvaDE+XHJcblx0XHRcdHtjb3VudHJ5TGlzdC5tYXAoKGNvdW50cnlMaXN0KSA9PiAoXHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8aDM+e2NvdW50cnlMaXN0Lm5hbWUuY29tbW9ufTwvaDM+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsImNvdW50cnlMaXN0IiwiaW5kZXgiLCJkaXYiLCJoMSIsIm1hcCIsImEiLCJoMyIsIm5hbWUiLCJjb21tb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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