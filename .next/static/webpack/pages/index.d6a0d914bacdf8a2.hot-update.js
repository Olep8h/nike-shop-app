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

/***/ "./src/sections/home/DiscountBanner/DiscountBanner.tsx":
/*!*************************************************************!*\
  !*** ./src/sections/home/DiscountBanner/DiscountBanner.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DiscountBanner\": function() { return /* binding */ DiscountBanner; }\n/* harmony export */ });\n/* harmony import */ var C_Users_hwapedro_Desktop_projects_nike_shop_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui */ \"./src/components/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\hwapedro\\\\Desktop\\\\projects\\\\nike-shop\\\\src\\\\sections\\\\home\\\\DiscountBanner\\\\DiscountBanner.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar items = [{\n  title: 'sales',\n  description: 'sales',\n  link: {\n    label: 'join',\n    href: '/'\n  }\n}, {\n  title: 'sales',\n  description: 'sales',\n  link: {\n    label: 'join',\n    href: '/'\n  }\n}];\nvar DISCOUNT_SHOWING_INTERVAL = 5000;\nvar DiscountBanner = function DiscountBanner() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),\n      _React$useState2 = (0,C_Users_hwapedro_Desktop_projects_nike_shop_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isFisrt = _React$useState2[0],\n      setIsFirst = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    var interval = setInterval(function () {\n      setIsFirst(function (prev) {\n        return !prev;\n      });\n    }, DISCOUNT_SHOWING_INTERVAL);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"flex bg-gray-100\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n      className: \"w-full translate-x-[\".concat(isFisrt ? '0' : '-100%', \"] whitespace-nowrap py-[0.3rem] text-center transition duration-1000\"),\n      children: items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          className: \"inline-block w-full\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n            tag: \"span\",\n            variant: \"title-3\",\n            children: item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n              tag: \"p\",\n              variant: \"body-1\",\n              children: [item.description, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: item.link.href,\n                children: item.link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 36\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DiscountBanner, \"y2BGOA5Q9RphBJ7Eps0VP+mmkAE=\");\n\n_c = DiscountBanner;\n\nvar _c;\n\n$RefreshReg$(_c, \"DiscountBanner\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvaG9tZS9EaXNjb3VudEJhbm5lci9EaXNjb3VudEJhbm5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1HLEtBQUssR0FBRyxDQUNaO0VBQUVDLEtBQUssRUFBRSxPQUFUO0VBQWtCQyxXQUFXLEVBQUUsT0FBL0I7RUFBd0NDLElBQUksRUFBRTtJQUFFQyxLQUFLLEVBQUUsTUFBVDtJQUFpQkMsSUFBSSxFQUFFO0VBQXZCO0FBQTlDLENBRFksRUFFWjtFQUFFSixLQUFLLEVBQUUsT0FBVDtFQUFrQkMsV0FBVyxFQUFFLE9BQS9CO0VBQXdDQyxJQUFJLEVBQUU7SUFBRUMsS0FBSyxFQUFFLE1BQVQ7SUFBaUJDLElBQUksRUFBRTtFQUF2QjtBQUE5QyxDQUZZLENBQWQ7QUFLQSxJQUFNQyx5QkFBeUIsR0FBRyxJQUFsQztBQUNPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtFQUFBOztFQUNsQyxzQkFBOEJULHFEQUFBLENBQWUsSUFBZixDQUE5QjtFQUFBO0VBQUEsSUFBT1csT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFFQVosc0RBQUEsQ0FBZ0IsWUFBTTtJQUNwQixJQUFNYyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDSCxVQUFVLENBQUMsVUFBQ0ksSUFBRDtRQUFBLE9BQVUsQ0FBQ0EsSUFBWDtNQUFBLENBQUQsQ0FBVjtJQUNELENBRjJCLEVBRXpCUix5QkFGeUIsQ0FBNUI7SUFJQSxPQUFPO01BQUEsT0FBTVMsYUFBYSxDQUFDSCxRQUFELENBQW5CO0lBQUEsQ0FBUDtFQUNELENBTkQsRUFNRyxFQU5IO0VBUUEsb0JBQ0U7SUFBUyxTQUFTLEVBQUMsa0JBQW5CO0lBQUEsdUJBQ0U7TUFDRSxTQUFTLGdDQUNQSCxPQUFPLEdBQUcsR0FBSCxHQUFTLE9BRFQseUVBRFg7TUFBQSxVQUtHVCxLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtRQUFBLG9CQUNUO1VBQUksU0FBUyxFQUFDLHFCQUFkO1VBQUEsd0JBQ0UsOERBQUMsMkNBQUQ7WUFBWSxHQUFHLEVBQUMsTUFBaEI7WUFBdUIsT0FBTyxFQUFDLFNBQS9CO1lBQUEsVUFDR0EsSUFBSSxDQUFDaEI7VUFEUjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFJRTtZQUFBLHVCQUNFLDhEQUFDLDJDQUFEO2NBQVksR0FBRyxFQUFDLEdBQWhCO2NBQW9CLE9BQU8sRUFBQyxRQUE1QjtjQUFBLFdBQ0dnQixJQUFJLENBQUNmLFdBRFIsb0JBQ3FCLDhEQUFDLGtEQUFEO2dCQUFNLElBQUksRUFBRWUsSUFBSSxDQUFDZCxJQUFMLENBQVVFLElBQXRCO2dCQUFBLFVBQTZCWSxJQUFJLENBQUNkLElBQUwsQ0FBVUM7Y0FBdkM7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxTQURyQjtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBSkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFM7TUFBQSxDQUFWO0lBTEg7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQXNCRCxDQWpDTTs7R0FBTUc7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9ob21lL0Rpc2NvdW50QmFubmVyL0Rpc2NvdW50QmFubmVyLnRzeD85ZjlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQC91aSc7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7IHRpdGxlOiAnc2FsZXMnLCBkZXNjcmlwdGlvbjogJ3NhbGVzJywgbGluazogeyBsYWJlbDogJ2pvaW4nLCBocmVmOiAnLycgfSB9LFxyXG4gIHsgdGl0bGU6ICdzYWxlcycsIGRlc2NyaXB0aW9uOiAnc2FsZXMnLCBsaW5rOiB7IGxhYmVsOiAnam9pbicsIGhyZWY6ICcvJyB9IH1cclxuXTtcclxuXHJcbmNvbnN0IERJU0NPVU5UX1NIT1dJTkdfSU5URVJWQUwgPSA1MDAwO1xyXG5leHBvcnQgY29uc3QgRGlzY291bnRCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzRmlzcnQsIHNldElzRmlyc3RdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0SXNGaXJzdCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSwgRElTQ09VTlRfU0hPV0lOR19JTlRFUlZBTCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBiZy1ncmF5LTEwMCc+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCB0cmFuc2xhdGUteC1bJHtcclxuICAgICAgICAgIGlzRmlzcnQgPyAnMCcgOiAnLTEwMCUnXHJcbiAgICAgICAgfV0gd2hpdGVzcGFjZS1ub3dyYXAgcHktWzAuM3JlbV0gdGV4dC1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAwYH1cclxuICAgICAgPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3LWZ1bGwnPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB0YWc9J3NwYW4nIHZhcmlhbnQ9J3RpdGxlLTMnPlxyXG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdGFnPSdwJyB2YXJpYW50PSdib2R5LTEnPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259IDxMaW5rIGhyZWY9e2l0ZW0ubGluay5ocmVmfT57aXRlbS5saW5rLmxhYmVsfTwvTGluaz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiVHlwb2dyYXBoeSIsIml0ZW1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJsYWJlbCIsImhyZWYiLCJESVNDT1VOVF9TSE9XSU5HX0lOVEVSVkFMIiwiRGlzY291bnRCYW5uZXIiLCJ1c2VTdGF0ZSIsImlzRmlzcnQiLCJzZXRJc0ZpcnN0IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/home/DiscountBanner/DiscountBanner.tsx\n"));

/***/ })

});