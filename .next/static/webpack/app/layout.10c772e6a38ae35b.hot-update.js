"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0a3fa079e688\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2VlZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwYTNmYTA3OWU2ODhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/ScrollButton.jsx":
/*!*************************************!*\
  !*** ./components/ScrollButton.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/ScrollButtons.jsx (Client Component)\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ScrollButtons = ()=>{\n    _s();\n    const [isAtTop, setIsAtTop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isAtBottom, setIsAtBottom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle scroll behavior to toggle visibility of the buttons\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            // Check if the user is at the top\n            setIsAtTop(window.scrollY < 100);\n            // Check if the user is at the bottom\n            const bottomThreshold = 50; // You can adjust this value\n            const hasReachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - bottomThreshold;\n            setIsAtBottom(hasReachedBottom);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Cleanup listener on unmount\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" z-10 fixed bottom-5 right-5 space-y-4 flex flex-col \",\n        children: [\n            !isAtTop && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>window.scrollTo({\n                        top: 0,\n                        behavior: \"smooth\"\n                    }),\n                className: \" animate-bounce bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6 inline-block\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    stroke: \"currentColor\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M5 15l7-7 7 7\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            !isAtBottom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>window.scrollTo({\n                        top: document.body.scrollHeight,\n                        behavior: \"smooth\"\n                    }),\n                className: \"  animate-bounce bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6 inline-block\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    stroke: \"currentColor\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: \"2\",\n                        d: \"M19 9l-7 7-7-7\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/ScrollButton.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollButtons, \"F6YYm8BrJi05W43275JGVW/MwxI=\");\n_c = ScrollButtons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollButtons);\nvar _c;\n$RefreshReg$(_c, \"ScrollButtons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2Nyb2xsQnV0dG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0RBQWtEOzs7QUFHTjtBQUU1QyxNQUFNRSxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsNkRBQTZEO0lBQzdEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGVBQWU7WUFDbkIsa0NBQWtDO1lBQ2xDSCxXQUFXSSxPQUFPQyxPQUFPLEdBQUc7WUFFNUIscUNBQXFDO1lBQ3JDLE1BQU1DLGtCQUFrQixJQUFJLDRCQUE0QjtZQUN4RCxNQUFNQyxtQkFDSkgsT0FBT0ksV0FBVyxHQUFHSixPQUFPQyxPQUFPLElBQ25DSSxTQUFTQyxJQUFJLENBQUNDLFlBQVksR0FBR0w7WUFDL0JKLGNBQWNLO1FBQ2hCO1FBRUFILE9BQU9RLGdCQUFnQixDQUFDLFVBQVVUO1FBRWxDLDhCQUE4QjtRQUM5QixPQUFPO1lBQ0xDLE9BQU9TLG1CQUFtQixDQUFDLFVBQVVWO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7O1lBRVosQ0FBQ2hCLHlCQUNBLDhEQUFDaUI7Z0JBQ0NDLFNBQVMsSUFBTWIsT0FBT2MsUUFBUSxDQUFDO3dCQUFFQyxLQUFLO3dCQUFHQyxVQUFVO29CQUFTO2dCQUM1REwsV0FBVTswQkFFViw0RUFBQ007b0JBQ0NOLFdBQVU7b0JBQ1ZPLE9BQU07b0JBQ05DLE1BQUs7b0JBQ0xDLFNBQVE7b0JBQ1JDLFFBQU87OEJBRVAsNEVBQUNDO3dCQUNDQyxlQUFjO3dCQUNkQyxnQkFBZTt3QkFDZkMsYUFBWTt3QkFDWkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztZQU9ULENBQUM3Qiw0QkFDQSw4REFBQ2U7Z0JBQ0NDLFNBQVMsSUFDUGIsT0FBT2MsUUFBUSxDQUFDO3dCQUNkQyxLQUFLVixTQUFTQyxJQUFJLENBQUNDLFlBQVk7d0JBQy9CUyxVQUFVO29CQUNaO2dCQUVGTCxXQUFVOzBCQUVWLDRFQUFDTTtvQkFDQ04sV0FBVTtvQkFDVk8sT0FBTTtvQkFDTkMsTUFBSztvQkFDTEMsU0FBUTtvQkFDUkMsUUFBTzs4QkFFUCw0RUFBQ0M7d0JBQ0NDLGVBQWM7d0JBQ2RDLGdCQUFlO3dCQUNmQyxhQUFZO3dCQUNaQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hCO0dBaEZNaEM7S0FBQUE7QUFrRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY3JvbGxCdXR0b24uanN4PzljZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9TY3JvbGxCdXR0b25zLmpzeCAoQ2xpZW50IENvbXBvbmVudClcblwidXNlIGNsaWVudFwiOyAvLyBNYXJrIHRoaXMgYXMgYSBDbGllbnQgQ29tcG9uZW50IHRvIHVzZSBldmVudCBoYW5kbGVyc1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNjcm9sbEJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0F0VG9wLCBzZXRJc0F0VG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNBdEJvdHRvbSwgc2V0SXNBdEJvdHRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gSGFuZGxlIHNjcm9sbCBiZWhhdmlvciB0byB0b2dnbGUgdmlzaWJpbGl0eSBvZiB0aGUgYnV0dG9uc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIGlzIGF0IHRoZSB0b3BcbiAgICAgIHNldElzQXRUb3Aod2luZG93LnNjcm9sbFkgPCAxMDApO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBpcyBhdCB0aGUgYm90dG9tXG4gICAgICBjb25zdCBib3R0b21UaHJlc2hvbGQgPSA1MDsgLy8gWW91IGNhbiBhZGp1c3QgdGhpcyB2YWx1ZVxuICAgICAgY29uc3QgaGFzUmVhY2hlZEJvdHRvbSA9XG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gYm90dG9tVGhyZXNob2xkO1xuICAgICAgc2V0SXNBdEJvdHRvbShoYXNSZWFjaGVkQm90dG9tKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIC8vIENsZWFudXAgbGlzdGVuZXIgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHotMTAgZml4ZWQgYm90dG9tLTUgcmlnaHQtNSBzcGFjZS15LTQgZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgIHsvKiBTY3JvbGwgdG8gVG9wIEJ1dHRvbiAoc2hvd24gd2hlbiBub3QgYXQgdGhlIHRvcCkgKi99XG4gICAgICB7IWlzQXRUb3AgJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCIgYW5pbWF0ZS1ib3VuY2UgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTMgcHgtNiByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgIGQ9XCJNNSAxNWw3LTcgNyA3XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cblxuICAgICAgey8qIFNjcm9sbCB0byBCb3R0b20gQnV0dG9uIChoaWRkZW4gYXQgdGhlIGJvdHRvbSkgKi99XG4gICAgICB7IWlzQXRCb3R0b20gJiYgKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIHRvcDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiICBhbmltYXRlLWJvdW5jZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC02IHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgZD1cIk0xOSA5bC03IDctNy03XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJ1dHRvbnM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTY3JvbGxCdXR0b25zIiwiaXNBdFRvcCIsInNldElzQXRUb3AiLCJpc0F0Qm90dG9tIiwic2V0SXNBdEJvdHRvbSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJib3R0b21UaHJlc2hvbGQiLCJoYXNSZWFjaGVkQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ScrollButton.jsx\n"));

/***/ })

});