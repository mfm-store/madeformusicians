"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[productId]",{

/***/ "./src/config/products.js":
/*!********************************!*\
  !*** ./src/config/products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar CATEGORIES = {\n    CAPOS: \"capos\",\n    STRINGS: \"strings\",\n    STRAPS: \"straps\",\n    PICKS: \"picks\",\n    TUNERS: \"tuners\",\n    STRING_WINDER_CUTTER: \"stringWinderCutter\",\n    KALIMBAS: \"kalimba\"\n};\nvar products = [\n    {\n        id: 123,\n        name: \"Guitar Capo Heavy duty Metal with Pin Remover\",\n        price: \"329\",\n        description: \"\\n    <li><strong>This Capo is one of the Most Popular QUICK- CHANGE CAPO DESIGNS.</strong> Not only Quickly Change Between Frets; but also can Pull Out the String Nail More Easily</li>\\n          <li><strong>Guitar Capo Quick Change Acoustic Guitar Accessories</strong> With free 5pcs Guitar Picks</li>\\n          <li><strong>Capo works on acoustic guitar, electric guitar, mandolin, banjo, ukulele, folk Guitars and mandolin</strong></li>\\n          <li><strong>CAN IT BE USED for YOUR INSTRUMENT</strong> - Obviously; this Capo Work Perfectly with Your Instrument.Guitar Capo is Suitable for ACOUSTIC or ELECTRIC GUITARS; UKULELE; BANJO; MANDOLIN</li>\",\n        imageUrl: \"/products/capo/silver.jpeg\",\n        secondaryImageUrls: [\n            \"/products/capo/black.jpeg\",\n            \"/products/capo/grey.jpeg\",\n            \"/products/capo/gold.jpeg\"\n        ],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 5,\n        productGroudId: \"capo-123\",\n        category: CATEGORIES.CAPOS,\n        variants: variantCapos,\n        defaultVariant: \"silver\"\n    },\n    {\n        id: 456,\n        name: \"Kalimba\",\n        price: \"1099\",\n        description: \"Kalimba lelo\",\n        imageUrl: \"/products/kalimba/deerkalimba/1.jpeg\",\n        secondaryImageUrls: [\n            \"/products/kalimba/deerkalimba/2.jpeg\",\n            \"/products/kalimba/deerkalimba/3.jpeg\",\n            \"/products/kalimba/deerkalimba/4.jpeg\",\n            \"/products/kalimba/deerkalimba/5.jpeg\"\n        ],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 2,\n        category: CATEGORIES.TUNERS,\n        variants: variantKalimba\n    },\n    {\n        id: 123213,\n        name: \"Guitar Straps\",\n        price: \"$99.99\",\n        description: \"High Quality Wooven Guitar Straps\",\n        imageUrl: \"/products/Straps/1.jpeg\",\n        secondaryImageUrls: [\n            \"/products/Straps/blue/2.jpeg\",\n            \"/products/Straps/blue/3.jpeg\"\n        ],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 3,\n        category: CATEGORIES.PICKS\n    },\n    {\n        id: 234234,\n        name: \"String Cutter Winder\",\n        price: \"200\",\n        description: \"String Cutter Winder\",\n        imageUrl: \"/products/cutterWinder/1.jpeg\",\n        secondaryImageUrls: [],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 4,\n        category: CATEGORIES.TUNERS\n    },\n    {\n        id: 43534534,\n        name: \"Guitar Tuners\",\n        price: \"$99.99\",\n        description: \"Tuner by Kaspar\",\n        imageUrl: \"/products/tuners/1.jpeg\",\n        secondaryImageUrls: [\n            \"/products/tuners/2.jpeg\",\n            \"/products/tuners/3.jpeg\",\n            \"/products/tuners/4.jpeg\"\n        ],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 1,\n        category: CATEGORIES.TUNERS\n    },\n    {\n        id: 234555,\n        name: \"Guitar Strings\",\n        price: \"320\",\n        description: \"Strings by Kaspar\",\n        imageUrl: \"/products/strings/1.jpeg\",\n        secondaryImageUrls: [\n            \"/products/strings/2.jpeg\"\n        ],\n        instagramUrl: \"https://www.instagram.com/direct/t/101734417898343/\",\n        rank: 1,\n        category: CATEGORIES.TUNERS\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (products);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFNQSxhQUFhO0lBQ2pCQyxPQUFPO0lBQ1BDLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsc0JBQXNCO0lBQ3RCQyxVQUFVO0FBQ1o7QUFFQSxJQUFNQyxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFBYztRQUtkQyxVQUFVO1FBQ1ZDLG9CQUFvQjtZQUFDO1lBQTZCO1lBQTRCO1NBQTJCO1FBQ3pHQyxjQUFjO1FBQ2RDLE1BQU07UUFDTkMsZ0JBQWdCO1FBQ2hCQyxVQUFVbEIsV0FBV0MsS0FBSztRQUMxQmtCLFVBQVVDO1FBQ1ZDLGdCQUFnQjtJQUNsQjtJQUNBO1FBQ0VaLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxvQkFBb0I7WUFBQztZQUF3QztZQUF3QztZQUF3QztTQUF1QztRQUNwTEMsY0FBYztRQUNkQyxNQUFNO1FBQ05FLFVBQVVsQixXQUFXSyxNQUFNO1FBQzNCYyxVQUFVRztJQUNaO0lBQ0E7UUFDRWIsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO1FBRVZDLG9CQUFvQjtZQUFDO1lBQWdDO1NBQStCO1FBQ3BGQyxjQUFjO1FBQ2RDLE1BQU07UUFDTkUsVUFBVWxCLFdBQVdJLEtBQUs7SUFDNUI7SUFDQTtRQUNFSyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFVBQVU7UUFDVkMsb0JBQW9CLEVBQUU7UUFDdEJDLGNBQWM7UUFDZEMsTUFBTTtRQUNORSxVQUFVbEIsV0FBV0ssTUFBTTtJQUM3QjtJQUNBO1FBQ0VJLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsVUFBVTtRQUNWQyxvQkFBb0I7WUFBQztZQUEyQjtZQUEyQjtTQUEwQjtRQUNyR0MsY0FBYztRQUNkQyxNQUFNO1FBQ05FLFVBQVVsQixXQUFXSyxNQUFNO0lBQzdCO0lBQ0E7UUFDRUksSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxVQUFVO1FBQ1ZDLG9CQUFvQjtZQUFDO1NBQTJCO1FBQ2hEQyxjQUFjO1FBQ2RDLE1BQU07UUFDTkUsVUFBVWxCLFdBQVdLLE1BQU07SUFDN0I7Q0FDRDtBQUVELCtEQUFlRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25maWcvcHJvZHVjdHMuanM/MTA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQVRFR09SSUVTID0ge1xuICBDQVBPUzogJ2NhcG9zJyxcbiAgU1RSSU5HUzogJ3N0cmluZ3MnLFxuICBTVFJBUFM6ICdzdHJhcHMnLFxuICBQSUNLUzogJ3BpY2tzJyxcbiAgVFVORVJTOiAndHVuZXJzJyxcbiAgU1RSSU5HX1dJTkRFUl9DVVRURVI6ICdzdHJpbmdXaW5kZXJDdXR0ZXInLFxuICBLQUxJTUJBUzogJ2thbGltYmEnLFxufTtcblxuY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogMTIzLFxuICAgIG5hbWU6ICdHdWl0YXIgQ2FwbyBIZWF2eSBkdXR5IE1ldGFsIHdpdGggUGluIFJlbW92ZXInLFxuICAgIHByaWNlOiAnMzI5JyxcbiAgICBkZXNjcmlwdGlvbjogYFxuICAgIDxsaT48c3Ryb25nPlRoaXMgQ2FwbyBpcyBvbmUgb2YgdGhlIE1vc3QgUG9wdWxhciBRVUlDSy0gQ0hBTkdFIENBUE8gREVTSUdOUy48L3N0cm9uZz4gTm90IG9ubHkgUXVpY2tseSBDaGFuZ2UgQmV0d2VlbiBGcmV0czsgYnV0IGFsc28gY2FuIFB1bGwgT3V0IHRoZSBTdHJpbmcgTmFpbCBNb3JlIEVhc2lseTwvbGk+XG4gICAgICAgICAgPGxpPjxzdHJvbmc+R3VpdGFyIENhcG8gUXVpY2sgQ2hhbmdlIEFjb3VzdGljIEd1aXRhciBBY2Nlc3Nvcmllczwvc3Ryb25nPiBXaXRoIGZyZWUgNXBjcyBHdWl0YXIgUGlja3M8L2xpPlxuICAgICAgICAgIDxsaT48c3Ryb25nPkNhcG8gd29ya3Mgb24gYWNvdXN0aWMgZ3VpdGFyLCBlbGVjdHJpYyBndWl0YXIsIG1hbmRvbGluLCBiYW5qbywgdWt1bGVsZSwgZm9sayBHdWl0YXJzIGFuZCBtYW5kb2xpbjwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgPGxpPjxzdHJvbmc+Q0FOIElUIEJFIFVTRUQgZm9yIFlPVVIgSU5TVFJVTUVOVDwvc3Ryb25nPiAtIE9idmlvdXNseTsgdGhpcyBDYXBvIFdvcmsgUGVyZmVjdGx5IHdpdGggWW91ciBJbnN0cnVtZW50Lkd1aXRhciBDYXBvIGlzIFN1aXRhYmxlIGZvciBBQ09VU1RJQyBvciBFTEVDVFJJQyBHVUlUQVJTOyBVS1VMRUxFOyBCQU5KTzsgTUFORE9MSU48L2xpPmAsXG4gICAgaW1hZ2VVcmw6ICcvcHJvZHVjdHMvY2Fwby9zaWx2ZXIuanBlZycsXG4gICAgc2Vjb25kYXJ5SW1hZ2VVcmxzOiBbJy9wcm9kdWN0cy9jYXBvL2JsYWNrLmpwZWcnLCAnL3Byb2R1Y3RzL2NhcG8vZ3JleS5qcGVnJywgJy9wcm9kdWN0cy9jYXBvL2dvbGQuanBlZyddLFxuICAgIGluc3RhZ3JhbVVybDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGlyZWN0L3QvMTAxNzM0NDE3ODk4MzQzLycsXG4gICAgcmFuazogNSxcbiAgICBwcm9kdWN0R3JvdWRJZDogJ2NhcG8tMTIzJyxcbiAgICBjYXRlZ29yeTogQ0FURUdPUklFUy5DQVBPUyxcbiAgICB2YXJpYW50czogdmFyaWFudENhcG9zLFxuICAgIGRlZmF1bHRWYXJpYW50OiAnc2lsdmVyJ1xuICB9LFxuICB7XG4gICAgaWQ6IDQ1NixcbiAgICBuYW1lOiAnS2FsaW1iYScsXG4gICAgcHJpY2U6ICcxMDk5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0thbGltYmEgbGVsbycsXG4gICAgaW1hZ2VVcmw6ICcvcHJvZHVjdHMva2FsaW1iYS9kZWVya2FsaW1iYS8xLmpwZWcnLFxuICAgIHNlY29uZGFyeUltYWdlVXJsczogWycvcHJvZHVjdHMva2FsaW1iYS9kZWVya2FsaW1iYS8yLmpwZWcnLCAnL3Byb2R1Y3RzL2thbGltYmEvZGVlcmthbGltYmEvMy5qcGVnJywgJy9wcm9kdWN0cy9rYWxpbWJhL2RlZXJrYWxpbWJhLzQuanBlZycsICcvcHJvZHVjdHMva2FsaW1iYS9kZWVya2FsaW1iYS81LmpwZWcnXSxcbiAgICBpbnN0YWdyYW1Vcmw6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RpcmVjdC90LzEwMTczNDQxNzg5ODM0My8nLFxuICAgIHJhbms6IDIsXG4gICAgY2F0ZWdvcnk6IENBVEVHT1JJRVMuVFVORVJTLFxuICAgIHZhcmlhbnRzOiB2YXJpYW50S2FsaW1iYSxcbiAgfSxcbiAge1xuICAgIGlkOiAxMjMyMTMsXG4gICAgbmFtZTogJ0d1aXRhciBTdHJhcHMnLFxuICAgIHByaWNlOiAnJDk5Ljk5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZ2ggUXVhbGl0eSBXb292ZW4gR3VpdGFyIFN0cmFwcycsXG4gICAgaW1hZ2VVcmw6ICcvcHJvZHVjdHMvU3RyYXBzLzEuanBlZycsXG5cbiAgICBzZWNvbmRhcnlJbWFnZVVybHM6IFsnL3Byb2R1Y3RzL1N0cmFwcy9ibHVlLzIuanBlZycsICcvcHJvZHVjdHMvU3RyYXBzL2JsdWUvMy5qcGVnJ10sXG4gICAgaW5zdGFncmFtVXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kaXJlY3QvdC8xMDE3MzQ0MTc4OTgzNDMvJyxcbiAgICByYW5rOiAzLFxuICAgIGNhdGVnb3J5OiBDQVRFR09SSUVTLlBJQ0tTLFxuICB9LFxuICB7XG4gICAgaWQ6IDIzNDIzNCxcbiAgICBuYW1lOiAnU3RyaW5nIEN1dHRlciBXaW5kZXInLFxuICAgIHByaWNlOiAnMjAwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1N0cmluZyBDdXR0ZXIgV2luZGVyJyxcbiAgICBpbWFnZVVybDogJy9wcm9kdWN0cy9jdXR0ZXJXaW5kZXIvMS5qcGVnJyxcbiAgICBzZWNvbmRhcnlJbWFnZVVybHM6IFtdLFxuICAgIGluc3RhZ3JhbVVybDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGlyZWN0L3QvMTAxNzM0NDE3ODk4MzQzLycsXG4gICAgcmFuazogNCxcbiAgICBjYXRlZ29yeTogQ0FURUdPUklFUy5UVU5FUlMsXG4gIH0sXG4gIHtcbiAgICBpZDogNDM1MzQ1MzQsXG4gICAgbmFtZTogJ0d1aXRhciBUdW5lcnMnLFxuICAgIHByaWNlOiAnJDk5Ljk5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1R1bmVyIGJ5IEthc3BhcicsXG4gICAgaW1hZ2VVcmw6ICcvcHJvZHVjdHMvdHVuZXJzLzEuanBlZycsXG4gICAgc2Vjb25kYXJ5SW1hZ2VVcmxzOiBbJy9wcm9kdWN0cy90dW5lcnMvMi5qcGVnJywgJy9wcm9kdWN0cy90dW5lcnMvMy5qcGVnJywgJy9wcm9kdWN0cy90dW5lcnMvNC5qcGVnJ10sXG4gICAgaW5zdGFncmFtVXJsOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kaXJlY3QvdC8xMDE3MzQ0MTc4OTgzNDMvJyxcbiAgICByYW5rOiAxLFxuICAgIGNhdGVnb3J5OiBDQVRFR09SSUVTLlRVTkVSUyxcbiAgfSxcbiAge1xuICAgIGlkOiAyMzQ1NTUsXG4gICAgbmFtZTogJ0d1aXRhciBTdHJpbmdzJyxcbiAgICBwcmljZTogJzMyMCcsXG4gICAgZGVzY3JpcHRpb246ICdTdHJpbmdzIGJ5IEthc3BhcicsXG4gICAgaW1hZ2VVcmw6ICcvcHJvZHVjdHMvc3RyaW5ncy8xLmpwZWcnLFxuICAgIHNlY29uZGFyeUltYWdlVXJsczogWycvcHJvZHVjdHMvc3RyaW5ncy8yLmpwZWcnXSxcbiAgICBpbnN0YWdyYW1Vcmw6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2RpcmVjdC90LzEwMTczNDQxNzg5ODM0My8nLFxuICAgIHJhbms6IDEsXG4gICAgY2F0ZWdvcnk6IENBVEVHT1JJRVMuVFVORVJTLFxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0czsiXSwibmFtZXMiOlsiQ0FURUdPUklFUyIsIkNBUE9TIiwiU1RSSU5HUyIsIlNUUkFQUyIsIlBJQ0tTIiwiVFVORVJTIiwiU1RSSU5HX1dJTkRFUl9DVVRURVIiLCJLQUxJTUJBUyIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwic2Vjb25kYXJ5SW1hZ2VVcmxzIiwiaW5zdGFncmFtVXJsIiwicmFuayIsInByb2R1Y3RHcm91ZElkIiwiY2F0ZWdvcnkiLCJ2YXJpYW50cyIsInZhcmlhbnRDYXBvcyIsImRlZmF1bHRWYXJpYW50IiwidmFyaWFudEthbGltYmEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/products.js\n"));

/***/ })

});