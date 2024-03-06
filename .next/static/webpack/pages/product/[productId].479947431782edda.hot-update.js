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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/products */ \"./src/config/products.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ImagesView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImagesView */ \"./src/components/ImagesView.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Define color variables\nvar buttonBackgroundColor1 = \"bg-[#cd486b]\";\nvar buttonHoverColor1 = \"hover:bg-pink-500\";\nvar buttonBackgroundColor2 = \"bg-green-600\";\nvar buttonHoverColor2 = \"hover:bg-green-500\";\nvar VariantThumbnail = function(param) {\n    var imageUrl = param.imageUrl, variantId = param.variantId, variantLabel = param.variantLabel, defaultVariant = param.defaultVariant;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var queryParams = new URLSearchParams(router.query);\n    var variantFromQueryParams = queryParams.get(\"variant\") || defaultVariant;\n    var handleClick = function() {\n        // Construct new query parameter string\n        var queryParams = new URLSearchParams(router.query);\n        queryParams.set(\"variant\", variantId);\n        // Replace the current URL with the updated query parameter\n        router.push({\n            pathname: router.pathname,\n            query: queryParams.toString()\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:border border-gray-500 \".concat(variantId === variantFromQueryParams ? \"border-[#DE9151] border\" : \"\"),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageUrl,\n                    alt: \"Product Thumbnail\",\n                    className: \"w-full h-full object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: variantLabel\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(VariantThumbnail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = VariantThumbnail;\nvar VariantThumbnails = function(param) {\n    var products = param.products, defaultVariant = param.defaultVariant;\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex overflow-x-auto space-x-4 p-4\",\n        children: products.map(function(product, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnail, (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_5__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_6__._)({}, product), {\n                defaultVariant: defaultVariant\n            }), index, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = VariantThumbnails;\nvar ProductPage = function() {\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), product = _useState[0], setProduct = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), variant = _useState1[0], setVariant = _useState1[1];\n    console.log(\"productis\", product);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _product_variants;\n        var productId = router.query.productId;\n        var queryParams = new URLSearchParams(router.query);\n        var product = _config_products__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(function(param) {\n            var id = param.id;\n            return id + \"\" === productId;\n        }) || {};\n        setProduct(product);\n        var variantFromParam = queryParams.get(\"variant\");\n        setVariant(product === null || product === void 0 ? void 0 : (_product_variants = product.variants) === null || _product_variants === void 0 ? void 0 : _product_variants.find(function(param) {\n            var variantId = param.variantId;\n            return variantId === variantFromParam;\n        }));\n        console.log(\"variantis\", variant);\n    }, [\n        router.query\n    ]);\n    var handleBuyOnInstagram = function() {\n        // Generate a custom message with the product link\n        var message = \"I want to buy \".concat(product.name, \"! \").concat(window.location.href);\n        // Open Instagram in a new tab with the pre-written message\n        window.open(\"\".concat(product.instagramUrl), \"_blank\");\n    };\n    var handleSendWhatsappMessage = function() {\n        var phoneNumber = \"RECIPIENT_PHONE_NUMBER\"; // Replace with the recipient's phone number\n        var message = \"Hello, this is a test message!\"; // Replace with your desired message\n        var apiUrl = \"https://api.whatsapp.com/send?phone=\".concat(phoneNumber, \"&text=\").concat(encodeURIComponent(message));\n        // Open a new window or tab with the WhatsApp API URL\n        window.open(apiUrl, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImagesView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    product: variant || product\n                }, void 0, false, {\n                    fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-4\",\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mb-2 text-green-600 font-bold\",\n                        children: [\n                            \"₹\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    product.variants ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnails, {\n                        products: product.variants,\n                        defaultVariant: product.defaultVariant\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 91,\n                        columnNumber: 29\n                    }, _this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductDescription, {\n                        description: product.description\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleBuyOnInstagram,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor1, \" \").concat(buttonHoverColor1),\n                                children: \"Buy on Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendWhatsappMessage,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor2, \" \").concat(buttonHoverColor2),\n                                children: \"Buy on WhatsApp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ProductPage, \"i7j0+IuATHTVGcmCVlyCQ13fLLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"VariantThumbnail\");\n$RefreshReg$(_c1, \"VariantThumbnails\");\n$RefreshReg$(_c2, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEMsa0RBQVNBOzs7TUFKcEJnQztBQXNFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZHVjdC9bcHJvZHVjdElkXS5qcz85YmRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbmZpZy9wcm9kdWN0cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBJbWFnZXNWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1hZ2VzVmlldyc7XG5cbi8vIERlZmluZSBjb2xvciB2YXJpYWJsZXNcbmNvbnN0IGJ1dHRvbkJhY2tncm91bmRDb2xvcjEgPSBcImJnLVsjY2Q0ODZiXVwiO1xuY29uc3QgYnV0dG9uSG92ZXJDb2xvcjEgPSBcImhvdmVyOmJnLXBpbmstNTAwXCI7XG5jb25zdCBidXR0b25CYWNrZ3JvdW5kQ29sb3IyID0gXCJiZy1ncmVlbi02MDBcIjtcbmNvbnN0IGJ1dHRvbkhvdmVyQ29sb3IyID0gXCJob3ZlcjpiZy1ncmVlbi01MDBcIjtcblxuY29uc3QgVmFyaWFudFRodW1ibmFpbCA9ICh7IGltYWdlVXJsLCB2YXJpYW50SWQsIHZhcmlhbnRMYWJlbCwgZGVmYXVsdFZhcmlhbnQgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XG4gIGNvbnN0IHZhcmlhbnRGcm9tUXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5nZXQoJ3ZhcmlhbnQnKSB8fCBkZWZhdWx0VmFyaWFudDtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gQ29uc3RydWN0IG5ldyBxdWVyeSBwYXJhbWV0ZXIgc3RyaW5nXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSk7XG4gICAgcXVlcnlQYXJhbXMuc2V0KCd2YXJpYW50JywgdmFyaWFudElkKTtcblxuICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgVVJMIHdpdGggdGhlIHVwZGF0ZWQgcXVlcnkgcGFyYW1ldGVyXG4gICAgcm91dGVyLnB1c2goeyBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLCBxdWVyeTogcXVlcnlQYXJhbXMudG9TdHJpbmcoKSB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTE2IGgtMTYgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy1sZyBob3Zlcjpib3JkZXIgYm9yZGVyLWdyYXktNTAwICR7dmFyaWFudElkID09PSB2YXJpYW50RnJvbVF1ZXJ5UGFyYW1zID8gJ2JvcmRlci1bI0RFOTE1MV0gYm9yZGVyJyA6ICcnfWB9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJQcm9kdWN0IFRodW1ibmFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtYmxhY2snPnt2YXJpYW50TGFiZWx9PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFZhcmlhbnRUaHVtYm5haWxzID0gKHsgcHJvZHVjdHMsIGRlZmF1bHRWYXJpYW50IH0pID0+IHtcbiAgZGVidWdnZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBzcGFjZS14LTQgcC00XCI+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICA8VmFyaWFudFRodW1ibmFpbCBrZXk9e2luZGV4fSB7Li4ucHJvZHVjdH0gZGVmYXVsdFZhcmlhbnQ9e2RlZmF1bHRWYXJpYW50fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbdmFyaWFudCwgc2V0VmFyaWFudF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnNvbGUubG9nKCdwcm9kdWN0aXMnLCBwcm9kdWN0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocm91dGVyLnF1ZXJ5KTtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgoeyBpZCB9KSA9PiB7IHJldHVybiAoaWQgKyAnJyA9PT0gcHJvZHVjdElkKSB9KSB8fCB7fVxuICAgIHNldFByb2R1Y3QocHJvZHVjdCk7XG4gICAgY29uc3QgdmFyaWFudEZyb21QYXJhbSA9IHF1ZXJ5UGFyYW1zLmdldCgndmFyaWFudCcpO1xuICAgIHNldFZhcmlhbnQocHJvZHVjdD8udmFyaWFudHM/LmZpbmQoKHsgdmFyaWFudElkIH0pID0+IHsgcmV0dXJuICh2YXJpYW50SWQgPT09IHZhcmlhbnRGcm9tUGFyYW0pIH0pKTtcbiAgICBjb25zb2xlLmxvZygndmFyaWFudGlzJywgdmFyaWFudCk7XG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcblxuICBjb25zdCBoYW5kbGVCdXlPbkluc3RhZ3JhbSA9ICgpID0+IHtcbiAgICAvLyBHZW5lcmF0ZSBhIGN1c3RvbSBtZXNzYWdlIHdpdGggdGhlIHByb2R1Y3QgbGlua1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgSSB3YW50IHRvIGJ1eSAke3Byb2R1Y3QubmFtZX0hICR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YDtcblxuICAgIC8vIE9wZW4gSW5zdGFncmFtIGluIGEgbmV3IHRhYiB3aXRoIHRoZSBwcmUtd3JpdHRlbiBtZXNzYWdlXG4gICAgd2luZG93Lm9wZW4oYCR7cHJvZHVjdC5pbnN0YWdyYW1Vcmx9YCwgJ19ibGFuaycpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbmRXaGF0c2FwcE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSAnUkVDSVBJRU5UX1BIT05FX05VTUJFUic7ICAvLyBSZXBsYWNlIHdpdGggdGhlIHJlY2lwaWVudCdzIHBob25lIG51bWJlclxuICAgIGNvbnN0IG1lc3NhZ2UgPSAnSGVsbG8sIHRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UhJzsgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgbWVzc2FnZVxuXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSR7cGhvbmVOdW1iZXJ9JnRleHQ9JHtlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSl9YDtcblxuICAgIC8vIE9wZW4gYSBuZXcgd2luZG93IG9yIHRhYiB3aXRoIHRoZSBXaGF0c0FwcCBBUEkgVVJMXG4gICAgd2luZG93Lm9wZW4oYXBpVXJsLCAnX2JsYW5rJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgXCI+XG4gICAgICB7LyogTGVmdDogWm9vbWFibGUgSW1hZ2UgKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNFwiPlxuICAgICAgICA8SW1hZ2VzVmlldyBwcm9kdWN0PXt2YXJpYW50IHx8IHByb2R1Y3R9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFJpZ2h0OiBQcm9kdWN0IERldGFpbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTIgdGV4dC1ncmVlbi02MDAgZm9udC1ib2xkXCI+JiM4Mzc3O3twcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAge3Byb2R1Y3QudmFyaWFudHMgPyA8VmFyaWFudFRodW1ibmFpbHMgcHJvZHVjdHM9e3Byb2R1Y3QudmFyaWFudHN9IGRlZmF1bHRWYXJpYW50PXtwcm9kdWN0LmRlZmF1bHRWYXJpYW50fSAvPiA6IG51bGx9XG4gICAgICAgIDxQcm9kdWN0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00IGZsZXggZmxleC1jb2wgbGlzdC1kaXNjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LmRlc2NyaXB0aW9uIH19IC8+ICovfVxuICAgICAgICB7LyogQnV5IG9uIEluc3RhZ3JhbSBCdXR0b24gKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yJz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXlPbkluc3RhZ3JhbX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgJHtidXR0b25CYWNrZ3JvdW5kQ29sb3IxfSAke2J1dHRvbkhvdmVyQ29sb3IxfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnV5IG9uIEluc3RhZ3JhbVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZFdoYXRzYXBwTWVzc2FnZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgJHtidXR0b25CYWNrZ3JvdW5kQ29sb3IyfSAke2J1dHRvbkhvdmVyQ29sb3IyfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnV5IG9uIFdoYXRzQXBwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXYgPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwidXNlUm91dGVyIiwiSW1hZ2VzVmlldyIsImJ1dHRvbkJhY2tncm91bmRDb2xvcjEiLCJidXR0b25Ib3ZlckNvbG9yMSIsImJ1dHRvbkJhY2tncm91bmRDb2xvcjIiLCJidXR0b25Ib3ZlckNvbG9yMiIsIlZhcmlhbnRUaHVtYm5haWwiLCJpbWFnZVVybCIsInZhcmlhbnRJZCIsInZhcmlhbnRMYWJlbCIsImRlZmF1bHRWYXJpYW50Iiwicm91dGVyIiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJxdWVyeSIsInZhcmlhbnRGcm9tUXVlcnlQYXJhbXMiLCJnZXQiLCJoYW5kbGVDbGljayIsInNldCIsInB1c2giLCJwYXRobmFtZSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsIlZhcmlhbnRUaHVtYm5haWxzIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiUHJvZHVjdFBhZ2UiLCJzZXRQcm9kdWN0IiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdElkIiwiZmluZCIsImlkIiwidmFyaWFudEZyb21QYXJhbSIsInZhcmlhbnRzIiwiaGFuZGxlQnV5T25JbnN0YWdyYW0iLCJtZXNzYWdlIiwid2luZG93IiwibmFtZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJpbnN0YWdyYW1VcmwiLCJoYW5kbGVTZW5kV2hhdHNhcHBNZXNzYWdlIiwicGhvbmVOdW1iZXIiLCJhcGlVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoMSIsInAiLCJwcmljZSIsIlByb2R1Y3REZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/product/[productId].js\n"));

/***/ })

});