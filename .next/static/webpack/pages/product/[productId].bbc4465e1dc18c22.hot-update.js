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

/***/ "./src/pages/product/[productId].js":
/*!******************************************!*\
  !*** ./src/pages/product/[productId].js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/products */ \"./src/config/products.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ImagesView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImagesView */ \"./src/components/ImagesView.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Define color variables\nvar buttonBackgroundColor1 = \"bg-[#cd486b]\";\nvar buttonHoverColor1 = \"hover:bg-pink-500\";\nvar buttonBackgroundColor2 = \"bg-green-600\";\nvar buttonHoverColor2 = \"hover:bg-green-500\";\nvar VariantThumbnail = function(param) {\n    var imageUrl = param.imageUrl, variantId = param.variantId, variantLabel = param.variantLabel;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var queryParams = new URLSearchParams(router.query);\n    var variantFromQueryParams = queryParams.get(\"variant\");\n    var handleClick = function() {\n        // Construct new query parameter string\n        var queryParams = new URLSearchParams(router.query);\n        queryParams.set(\"variant\", variantId);\n        // Replace the current URL with the updated query parameter\n        router.push({\n            pathname: router.pathname,\n            query: queryParams.toString()\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:border border-gray-500 \".concat(variantId === variantFromQueryParams ? \"border-[#DE9151] border\" : \"\"),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Product Thumbnail\",\n                    className: \"w-full h-full object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-[#BC5D2E]\",\n                children: variantLabel\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(VariantThumbnail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = VariantThumbnail;\nvar VariantThumbnails = function(param) {\n    var products = param.products;\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex overflow-x-auto space-x-4 p-4\",\n        children: products.map(function(product, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnail, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, product), index, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = VariantThumbnails;\nvar ProductPage = function() {\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), product = _useState[0], setProduct = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), variant = _useState1[0], setVariant = _useState1[1];\n    console.log(\"productis\", product);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _product_variants;\n        var productId = router.query.productId;\n        var queryParams = new URLSearchParams(router.query);\n        var product = _config_products__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(function(param) {\n            var id = param.id;\n            return id + \"\" === productId;\n        }) || {};\n        setProduct(product);\n        var variantFromParam = queryParams.get(\"variant\");\n        setVariant(product === null || product === void 0 ? void 0 : (_product_variants = product.variants) === null || _product_variants === void 0 ? void 0 : _product_variants.find(function(param) {\n            var variantId = param.variantId;\n            return variantId === variantFromParam;\n        }));\n        console.log(\"variantis\", variant);\n    }, [\n        router.query\n    ]);\n    var handleBuyOnInstagram = function() {\n        // Generate a custom message with the product link\n        var message = \"I want to buy \".concat(product.name, \"! \").concat(window.location.href);\n        // Open Instagram in a new tab with the pre-written message\n        window.open(\"\".concat(product.instagramUrl), \"_blank\");\n    };\n    var handleSendWhatsappMessage = function() {\n        var phoneNumber = \"RECIPIENT_PHONE_NUMBER\"; // Replace with the recipient's phone number\n        var message = \"Hello, this is a test message!\"; // Replace with your desired message\n        var apiUrl = \"https://api.whatsapp.com/send?phone=\".concat(phoneNumber, \"&text=\").concat(encodeURIComponent(message));\n        // Open a new window or tab with the WhatsApp API URL\n        window.open(apiUrl, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImagesView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    product: variant || product\n                }, void 0, false, {\n                    fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-4\",\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mb-2 text-green-600 font-bold\",\n                        children: [\n                            \"₹\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    product.variants ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnails, {\n                        products: product.variants\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 91,\n                        columnNumber: 29\n                    }, _this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"text-gray-600 mb-4 flex flex-col list-disc\",\n                        dangerouslySetInnerHTML: {\n                            __html: product.description\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleBuyOnInstagram,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor1, \" \").concat(buttonHoverColor1),\n                                children: \"Buy on Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendWhatsappMessage,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor2, \" \").concat(buttonHoverColor2),\n                                children: \"Buy on WhatsApp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ProductPage, \"i7j0+IuATHTVGcmCVlyCQ13fLLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"VariantThumbnail\");\n$RefreshReg$(_c1, \"VariantThumbnails\");\n$RefreshReg$(_c2, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvW3Byb2R1Y3RJZF0uanM/OWJkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi8uLi9jb25maWcvcHJvZHVjdHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSW1hZ2VzVmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlc1ZpZXcnO1xuXG4vLyBEZWZpbmUgY29sb3IgdmFyaWFibGVzXG5jb25zdCBidXR0b25CYWNrZ3JvdW5kQ29sb3IxID0gXCJiZy1bI2NkNDg2Yl1cIjtcbmNvbnN0IGJ1dHRvbkhvdmVyQ29sb3IxID0gXCJob3ZlcjpiZy1waW5rLTUwMFwiO1xuY29uc3QgYnV0dG9uQmFja2dyb3VuZENvbG9yMiA9IFwiYmctZ3JlZW4tNjAwXCI7XG5jb25zdCBidXR0b25Ib3ZlckNvbG9yMiA9IFwiaG92ZXI6YmctZ3JlZW4tNTAwXCI7XG5cbmNvbnN0IFZhcmlhbnRUaHVtYm5haWwgPSAoeyBpbWFnZVVybCwgdmFyaWFudElkLCB2YXJpYW50TGFiZWwgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XG4gIGNvbnN0IHZhcmlhbnRGcm9tUXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5nZXQoJ3ZhcmlhbnQnKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gQ29uc3RydWN0IG5ldyBxdWVyeSBwYXJhbWV0ZXIgc3RyaW5nXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XG4gICAgcXVlcnlQYXJhbXMuc2V0KCd2YXJpYW50JywgdmFyaWFudElkKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgVVJMIHdpdGggdGhlIHVwZGF0ZWQgcXVlcnkgcGFyYW1ldGVyXG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogcXVlcnlQYXJhbXMudG9TdHJpbmcoKSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTE2IGgtMTYgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy1sZyBob3Zlcjpib3JkZXIgYm9yZGVyLWdyYXktNTAwICR7dmFyaWFudElkID09PSB2YXJpYW50RnJvbVF1ZXJ5UGFyYW1zID8gJ2JvcmRlci1bI0RFOTE1MV0gYm9yZGVyJyA6ICcnfWB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJQcm9kdWN0IFRodW1ibmFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtWyNCQzVEMkVdJz57dmFyaWFudExhYmVsfTwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jb25zdCBWYXJpYW50VGh1bWJuYWlscyA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgZGVidWdnZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBzcGFjZS14LTQgcC00XCI+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8VmFyaWFudFRodW1ibmFpbCBrZXk9e2luZGV4fSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3ZhcmlhbnQsIHNldFZhcmlhbnRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zb2xlLmxvZygncHJvZHVjdGlzJywgcHJvZHVjdCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgcHJvZHVjdElkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmZpbmQoKHsgaWQgfSkgPT4geyByZXR1cm4gKGlkICsgJycgPT09IHByb2R1Y3RJZCkgfSkgfHwge31cbiAgICBzZXRQcm9kdWN0KHByb2R1Y3QpO1xuICAgIGNvbnN0IHZhcmlhbnRGcm9tUGFyYW0gPSBxdWVyeVBhcmFtcy5nZXQoJ3ZhcmlhbnQnKTtcbiAgICBzZXRWYXJpYW50KHByb2R1Y3Q/LnZhcmlhbnRzPy5maW5kKCh7IHZhcmlhbnRJZCB9KSA9PiB7IHJldHVybiAodmFyaWFudElkID09PSB2YXJpYW50RnJvbVBhcmFtKSB9KSk7XG4gICAgY29uc29sZS5sb2coJ3ZhcmlhbnRpcycsIHZhcmlhbnQpO1xuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XG5cbiAgY29uc3QgaGFuZGxlQnV5T25JbnN0YWdyYW0gPSAoKSA9PiB7XG4gICAgLy8gR2VuZXJhdGUgYSBjdXN0b20gbWVzc2FnZSB3aXRoIHRoZSBwcm9kdWN0IGxpbmtcbiAgICBjb25zdCBtZXNzYWdlID0gYEkgd2FudCB0byBidXkgJHtwcm9kdWN0Lm5hbWV9ISAke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XG5cbiAgICAvLyBPcGVuIEluc3RhZ3JhbSBpbiBhIG5ldyB0YWIgd2l0aCB0aGUgcHJlLXdyaXR0ZW4gbWVzc2FnZVxuICAgIHdpbmRvdy5vcGVuKGAke3Byb2R1Y3QuaW5zdGFncmFtVXJsfWAsICdfYmxhbmsnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZW5kV2hhdHNhcHBNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gJ1JFQ0lQSUVOVF9QSE9ORV9OVU1CRVInOyAgLy8gUmVwbGFjZSB3aXRoIHRoZSByZWNpcGllbnQncyBwaG9uZSBudW1iZXJcbiAgICBjb25zdCBtZXNzYWdlID0gJ0hlbGxvLCB0aGlzIGlzIGEgdGVzdCBtZXNzYWdlISc7ICAvLyBSZXBsYWNlIHdpdGggeW91ciBkZXNpcmVkIG1lc3NhZ2VcblxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0ke3Bob25lTnVtYmVyfSZ0ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UpfWA7XG5cbiAgICAvLyBPcGVuIGEgbmV3IHdpbmRvdyBvciB0YWIgd2l0aCB0aGUgV2hhdHNBcHAgQVBJIFVSTFxuICAgIHdpbmRvdy5vcGVuKGFwaVVybCwgJ19ibGFuaycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IFwiPlxuICAgICAgey8qIExlZnQ6IFpvb21hYmxlIEltYWdlICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTRcIj5cbiAgICAgICAgPEltYWdlc1ZpZXcgcHJvZHVjdD17dmFyaWFudCB8fCBwcm9kdWN0fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSaWdodDogUHJvZHVjdCBEZXRhaWxzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPntwcm9kdWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0yIHRleHQtZ3JlZW4tNjAwIGZvbnQtYm9sZFwiPiYjODM3Nzt7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgIHtwcm9kdWN0LnZhcmlhbnRzID8gPFZhcmlhbnRUaHVtYm5haWxzIHByb2R1Y3RzPXtwcm9kdWN0LnZhcmlhbnRzfSAvPiA6IG51bGx9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTQgZmxleCBmbGV4LWNvbCBsaXN0LWRpc2NcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb2R1Y3QuZGVzY3JpcHRpb24gfX0gLz5cbiAgICAgICAgey8qIEJ1eSBvbiBJbnN0YWdyYW0gQnV0dG9uICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMic+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQnV5T25JbnN0YWdyYW19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWZ1bGwgZm9udC1ib2xkICR7YnV0dG9uQmFja2dyb3VuZENvbG9yMX0gJHtidXR0b25Ib3ZlckNvbG9yMX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1eSBvbiBJbnN0YWdyYW1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRXaGF0c2FwcE1lc3NhZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTYgcHktMyByb3VuZGVkLWZ1bGwgZm9udC1ib2xkICR7YnV0dG9uQmFja2dyb3VuZENvbG9yMn0gJHtidXR0b25Ib3ZlckNvbG9yMn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1eSBvbiBXaGF0c0FwcFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2ID5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInVzZVJvdXRlciIsIkltYWdlc1ZpZXciLCJidXR0b25CYWNrZ3JvdW5kQ29sb3IxIiwiYnV0dG9uSG92ZXJDb2xvcjEiLCJidXR0b25CYWNrZ3JvdW5kQ29sb3IyIiwiYnV0dG9uSG92ZXJDb2xvcjIiLCJWYXJpYW50VGh1bWJuYWlsIiwiaW1hZ2VVcmwiLCJ2YXJpYW50SWQiLCJ2YXJpYW50TGFiZWwiLCJyb3V0ZXIiLCJxdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInF1ZXJ5IiwidmFyaWFudEZyb21RdWVyeVBhcmFtcyIsImdldCIsImhhbmRsZUNsaWNrIiwic2V0IiwicHVzaCIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiVmFyaWFudFRodW1ibmFpbHMiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJQcm9kdWN0UGFnZSIsInNldFByb2R1Y3QiLCJ2YXJpYW50Iiwic2V0VmFyaWFudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0SWQiLCJmaW5kIiwiaWQiLCJ2YXJpYW50RnJvbVBhcmFtIiwidmFyaWFudHMiLCJoYW5kbGVCdXlPbkluc3RhZ3JhbSIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJuYW1lIiwibG9jYXRpb24iLCJocmVmIiwib3BlbiIsImluc3RhZ3JhbVVybCIsImhhbmRsZVNlbmRXaGF0c2FwcE1lc3NhZ2UiLCJwaG9uZU51bWJlciIsImFwaVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImgxIiwicCIsInByaWNlIiwidWwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/product/[productId].js\n"));

/***/ })

});