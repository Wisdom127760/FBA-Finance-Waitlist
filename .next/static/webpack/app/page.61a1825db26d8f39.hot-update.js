"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/VideoSection.jsx":
/*!*************************************!*\
  !*** ./components/VideoSection.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction VideoSection() {\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (videoRef.current) {\n            videoRef.current.play().catch((error)=>{\n                console.error(\"Error attempting to play video: \", error);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            ref: videoRef,\n            autoPlay: true,\n            loop: true,\n            muted: true,\n            playsInline: true,\n            className: \"animate-fade-up object-contain grow mt-4 w-full aspect-[0] max-md:mt-10 max-md:max-w-full rounded-3xl overflow-hidden\",\n            poster: \"/assets/images/laptopveiw1.png\" // Use your original image as a fallback\n            ,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/assets/videos/FBAFinanceVideo(1).mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/VideoSection.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/assets/videos/FBAFinanceVideo(1).webm\",\n                    type: \"video/webm\"\n                }, void 0, false, {\n                    fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/VideoSection.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                \"Your browser does not support the video tag.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/VideoSection.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wiszy/Documents/Wisdom/Coding/nextjs/components/VideoSection.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(VideoSection, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = VideoSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoSection);\nvar _c;\n$RefreshReg$(_c, \"VideoSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVmlkZW9TZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFaUQ7QUFFakQsU0FBU0c7O0lBQ1AsTUFBTUMsV0FBV0gsNkNBQU1BLENBQUM7SUFFeEJDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUUsU0FBU0MsT0FBTyxFQUFFO1lBQ3BCRCxTQUFTQyxPQUFPLENBQUNDLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUNDO2dCQUM3QkMsUUFBUUQsS0FBSyxDQUFDLG9DQUFvQ0E7WUFDcEQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFRQyxXQUFVO2tCQUVqQiw0RUFBQ0M7WUFDQ0MsS0FBS1Q7WUFDTFUsUUFBUTtZQUNSQyxJQUFJO1lBQ0pDLEtBQUs7WUFDTEMsV0FBVztZQUNYTixXQUFVO1lBQ1ZPLFFBQU8saUNBQWlDLHdDQUF3Qzs7OzhCQUVoRiw4REFBQ0M7b0JBQU9DLEtBQUk7b0JBQXdDQyxNQUFLOzs7Ozs7OEJBQ3pELDhEQUFDRjtvQkFDQ0MsS0FBSTtvQkFDSkMsTUFBSzs7Ozs7O2dCQUNMOzs7Ozs7Ozs7Ozs7QUFNVjtHQWpDU2xCO0tBQUFBO0FBbUNULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9TZWN0aW9uLmpzeD80M2RjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gVmlkZW9TZWN0aW9uKCkge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XG4gICAgICB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGF0dGVtcHRpbmcgdG8gcGxheSB2aWRlbzogXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC01IHctWzU1JV0gbWF4LW1kOm1sLTAgbWF4LW1kOnctZnVsbFwiPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1cIj4gKi99XG4gICAgICA8dmlkZW9cbiAgICAgICAgcmVmPXt2aWRlb1JlZn1cbiAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgbG9vcFxuICAgICAgICBtdXRlZFxuICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGUtdXAgb2JqZWN0LWNvbnRhaW4gZ3JvdyBtdC00IHctZnVsbCBhc3BlY3QtWzBdIG1heC1tZDptdC0xMCBtYXgtbWQ6bWF4LXctZnVsbCByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICBwb3N0ZXI9XCIvYXNzZXRzL2ltYWdlcy9sYXB0b3B2ZWl3MS5wbmdcIiAvLyBVc2UgeW91ciBvcmlnaW5hbCBpbWFnZSBhcyBhIGZhbGxiYWNrXG4gICAgICA+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL2Fzc2V0cy92aWRlb3MvRkJBRmluYW5jZVZpZGVvKDEpLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICA8c291cmNlXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy92aWRlb3MvRkJBRmluYW5jZVZpZGVvKDEpLndlYm1cIlxuICAgICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcbiAgICAgICAgLz5cbiAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgIDwvdmlkZW8+XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9TZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVmlkZW9TZWN0aW9uIiwidmlkZW9SZWYiLCJjdXJyZW50IiwicGxheSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInZpZGVvIiwicmVmIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJwbGF5c0lubGluZSIsInBvc3RlciIsInNvdXJjZSIsInNyYyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/VideoSection.jsx\n"));

/***/ })

});