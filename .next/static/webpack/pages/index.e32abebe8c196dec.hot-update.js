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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DiscountBanner\": function() { return /* binding */ DiscountBanner; }\n/* harmony export */ });\n/* harmony import */ var C_Users_hwapedro_Desktop_projects_nike_shop_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/ui */ \"./src/components/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\hwapedro\\\\Desktop\\\\projects\\\\nike-shop\\\\src\\\\sections\\\\home\\\\DiscountBanner\\\\DiscountBanner.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar items = [{\n  title: 'Up To 50% Off',\n  description: 'The End of Season Sale is on.',\n  link: {\n    label: 'Shop',\n    href: '/'\n  }\n}, {\n  title: 'Up To 50% Off',\n  description: 'The End of Season Sale is on.',\n  link: {\n    label: 'Shop',\n    href: '/'\n  }\n}];\nvar DISCOUNT_SHOWING_INTERVAL = 5000;\nvar DiscountBanner = function DiscountBanner() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),\n      _React$useState2 = (0,C_Users_hwapedro_Desktop_projects_nike_shop_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isFisrt = _React$useState2[0],\n      setIsFirst = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    var interval = setInterval(function () {\n      setIsFirst(function (prev) {\n        return !prev;\n      });\n    }, DISCOUNT_SHOWING_INTERVAL);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"flex bg-gray-100\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n      className: \"w-full translate-x-[\".concat(isFisrt ? '0' : '-100%', \"] whitespace-nowrap py-[0.4rem] text-center transition duration-1000\"),\n      children: items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"li\", {\n          className: \"inline-block w-full\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n            tag: \"span\",\n            variant: \"title-3\",\n            children: item.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"mt-[0.5rem]\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n              tag: \"p\",\n              variant: \"body-1\",\n              children: [item.description, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: item.link.href,\n                children: item.link.label\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 36\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DiscountBanner, \"y2BGOA5Q9RphBJ7Eps0VP+mmkAE=\");\n\n_c = DiscountBanner;\n\nvar _c;\n\n$RefreshReg$(_c, \"DiscountBanner\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvaG9tZS9EaXNjb3VudEJhbm5lci9EaXNjb3VudEJhbm5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1HLEtBQUssR0FBRyxDQUNaO0VBQ0VDLEtBQUssRUFBRSxlQURUO0VBRUVDLFdBQVcsRUFBRSwrQkFGZjtFQUdFQyxJQUFJLEVBQUU7SUFBRUMsS0FBSyxFQUFFLE1BQVQ7SUFBaUJDLElBQUksRUFBRTtFQUF2QjtBQUhSLENBRFksRUFNWjtFQUNFSixLQUFLLEVBQUUsZUFEVDtFQUVFQyxXQUFXLEVBQUUsK0JBRmY7RUFHRUMsSUFBSSxFQUFFO0lBQUVDLEtBQUssRUFBRSxNQUFUO0lBQWlCQyxJQUFJLEVBQUU7RUFBdkI7QUFIUixDQU5ZLENBQWQ7QUFhQSxJQUFNQyx5QkFBeUIsR0FBRyxJQUFsQztBQUNPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtFQUFBOztFQUNsQyxzQkFBOEJULHFEQUFBLENBQWUsSUFBZixDQUE5QjtFQUFBO0VBQUEsSUFBT1csT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFFQVosc0RBQUEsQ0FBZ0IsWUFBTTtJQUNwQixJQUFNYyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDSCxVQUFVLENBQUMsVUFBQ0ksSUFBRDtRQUFBLE9BQVUsQ0FBQ0EsSUFBWDtNQUFBLENBQUQsQ0FBVjtJQUNELENBRjJCLEVBRXpCUix5QkFGeUIsQ0FBNUI7SUFJQSxPQUFPO01BQUEsT0FBTVMsYUFBYSxDQUFDSCxRQUFELENBQW5CO0lBQUEsQ0FBUDtFQUNELENBTkQsRUFNRyxFQU5IO0VBUUEsb0JBQ0U7SUFBUyxTQUFTLEVBQUMsa0JBQW5CO0lBQUEsdUJBQ0U7TUFDRSxTQUFTLGdDQUNQSCxPQUFPLEdBQUcsR0FBSCxHQUFTLE9BRFQseUVBRFg7TUFBQSxVQUtHVCxLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQ0MsSUFBRDtRQUFBLG9CQUNUO1VBQUksU0FBUyxFQUFDLHFCQUFkO1VBQUEsd0JBQ0UsOERBQUMsMkNBQUQ7WUFBWSxHQUFHLEVBQUMsTUFBaEI7WUFBdUIsT0FBTyxFQUFDLFNBQS9CO1lBQUEsVUFDR0EsSUFBSSxDQUFDaEI7VUFEUjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFJRTtZQUFLLFNBQVMsRUFBQyxhQUFmO1lBQUEsdUJBQ0UsOERBQUMsMkNBQUQ7Y0FBWSxHQUFHLEVBQUMsR0FBaEI7Y0FBb0IsT0FBTyxFQUFDLFFBQTVCO2NBQUEsV0FDR2dCLElBQUksQ0FBQ2YsV0FEUixvQkFDcUIsOERBQUMsa0RBQUQ7Z0JBQU0sSUFBSSxFQUFFZSxJQUFJLENBQUNkLElBQUwsQ0FBVUUsSUFBdEI7Z0JBQUEsVUFBNkJZLElBQUksQ0FBQ2QsSUFBTCxDQUFVQztjQUF2QztnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBRHJCO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FKRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEUztNQUFBLENBQVY7SUFMSDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBc0JELENBakNNOztHQUFNRzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2hvbWUvRGlzY291bnRCYW5uZXIvRGlzY291bnRCYW5uZXIudHN4PzlmOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAL3VpJztcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnVXAgVG8gNTAlIE9mZicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBFbmQgb2YgU2Vhc29uIFNhbGUgaXMgb24uJyxcclxuICAgIGxpbms6IHsgbGFiZWw6ICdTaG9wJywgaHJlZjogJy8nIH1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVXAgVG8gNTAlIE9mZicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBFbmQgb2YgU2Vhc29uIFNhbGUgaXMgb24uJyxcclxuICAgIGxpbms6IHsgbGFiZWw6ICdTaG9wJywgaHJlZjogJy8nIH1cclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBESVNDT1VOVF9TSE9XSU5HX0lOVEVSVkFMID0gNTAwMDtcclxuZXhwb3J0IGNvbnN0IERpc2NvdW50QmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0Zpc3J0LCBzZXRJc0ZpcnN0XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldElzRmlyc3QoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIERJU0NPVU5UX1NIT1dJTkdfSU5URVJWQUwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggYmctZ3JheS0xMDAnPlxyXG4gICAgICA8dWxcclxuICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdHJhbnNsYXRlLXgtWyR7XHJcbiAgICAgICAgICBpc0Zpc3J0ID8gJzAnIDogJy0xMDAlJ1xyXG4gICAgICAgIH1dIHdoaXRlc3BhY2Utbm93cmFwIHB5LVswLjRyZW1dIHRleHQtY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMGB9XHJcbiAgICAgID5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdy1mdWxsJz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdGFnPSdzcGFuJyB2YXJpYW50PSd0aXRsZS0zJz5cclxuICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtWzAuNXJlbV0nPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRhZz0ncCcgdmFyaWFudD0nYm9keS0xJz5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufSA8TGluayBocmVmPXtpdGVtLmxpbmsuaHJlZn0+e2l0ZW0ubGluay5sYWJlbH08L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIlR5cG9ncmFwaHkiLCJpdGVtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibGFiZWwiLCJocmVmIiwiRElTQ09VTlRfU0hPV0lOR19JTlRFUlZBTCIsIkRpc2NvdW50QmFubmVyIiwidXNlU3RhdGUiLCJpc0Zpc3J0Iiwic2V0SXNGaXJzdCIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsIm1hcCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/home/DiscountBanner/DiscountBanner.tsx\n"));

/***/ })

});