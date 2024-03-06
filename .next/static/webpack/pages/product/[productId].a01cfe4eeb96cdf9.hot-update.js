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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/products */ \"./src/config/products.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ImagesView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImagesView */ \"./src/components/ImagesView.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Define color variables\nvar buttonBackgroundColor1 = \"bg-[#cd486b]\";\nvar buttonHoverColor1 = \"hover:bg-pink-500\";\nvar buttonBackgroundColor2 = \"bg-green-600\";\nvar buttonHoverColor2 = \"hover:bg-green-500\";\nvar VariantThumbnail = function(param) {\n    var imageUrl = param.imageUrl, variantId = param.variantId, variantLabel = param.variantLabel;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var queryParams = new URLSearchParams(router.query);\n    var variantFromQueryParams = queryParams.get(\"variant\");\n    var handleClick = function() {\n        // Construct new query parameter string\n        var queryParams = new URLSearchParams(router.query);\n        queryParams.set(\"variant\", variantId);\n        // Replace the current URL with the updated query parameter\n        router.push({\n            pathname: router.pathname,\n            query: queryParams.toString()\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shadow-md mr-4 cursor-pointer hover:shadow-lg hover:border border-gray-500 \".concat(variantId === variantFromQueryParams ? \"border-[#DE9151] border\" : \"\"),\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                alt: \"Product Thumbnail\",\n                className: \"w-full h-full object-cover\"\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: variantLabel\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(VariantThumbnail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = VariantThumbnail;\nvar VariantThumbnails = function(param) {\n    var products = param.products;\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex overflow-x-auto space-x-4 p-4\",\n        children: products.map(function(product, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnail, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, product), index, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = VariantThumbnails;\nvar ProductPage = function() {\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), product = _useState[0], setProduct = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), 2), variant = _useState1[0], setVariant = _useState1[1];\n    console.log(\"productis\", product);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _product_variants;\n        var productId = router.query.productId;\n        var queryParams = new URLSearchParams(router.query);\n        var product = _config_products__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(function(param) {\n            var id = param.id;\n            return id + \"\" === productId;\n        }) || {};\n        setProduct(product);\n        var variantFromParam = queryParams.get(\"variant\");\n        setVariant(product === null || product === void 0 ? void 0 : (_product_variants = product.variants) === null || _product_variants === void 0 ? void 0 : _product_variants.find(function(param) {\n            var variantId = param.variantId;\n            return variantId === variantFromParam;\n        }));\n        console.log(\"variantis\", variant);\n    }, [\n        router.query\n    ]);\n    var handleBuyOnInstagram = function() {\n        // Generate a custom message with the product link\n        var message = \"I want to buy \".concat(product.name, \"! \").concat(window.location.href);\n        // Open Instagram in a new tab with the pre-written message\n        window.open(\"\".concat(product.instagramUrl), \"_blank\");\n    };\n    var handleSendWhatsappMessage = function() {\n        var phoneNumber = \"RECIPIENT_PHONE_NUMBER\"; // Replace with the recipient's phone number\n        var message = \"Hello, this is a test message!\"; // Replace with your desired message\n        var apiUrl = \"https://api.whatsapp.com/send?phone=\".concat(phoneNumber, \"&text=\").concat(encodeURIComponent(message));\n        // Open a new window or tab with the WhatsApp API URL\n        window.open(apiUrl, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col lg:flex-row \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImagesView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    product: variant || product\n                }, void 0, false, {\n                    fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-4\",\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl mb-2 text-green-600 font-bold\",\n                        children: [\n                            \"₹\",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    product.variants ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VariantThumbnails, {\n                        products: product.variants\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 88,\n                        columnNumber: 29\n                    }, _this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"text-gray-600 mb-4 flex flex-col list-disc\",\n                        dangerouslySetInnerHTML: {\n                            __html: product.description\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleBuyOnInstagram,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor1, \" \").concat(buttonHoverColor1),\n                                children: \"Buy on Instagram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendWhatsappMessage,\n                                className: \"text-white px-6 py-3 rounded-full font-bold \".concat(buttonBackgroundColor2, \" \").concat(buttonHoverColor2),\n                                children: \"Buy on WhatsApp\"\n                            }, void 0, false, {\n                                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/debatra/mfm/made-for-musicians/src/pages/product/[productId].js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ProductPage, \"i7j0+IuATHTVGcmCVlyCQ13fLLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"VariantThumbnail\");\n$RefreshReg$(_c1, \"VariantThumbnails\");\n$RefreshReg$(_c2, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1twcm9kdWN0SWRdLmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vLi4vY29uZmlnL3Byb2R1Y3RzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEltYWdlc1ZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbWFnZXNWaWV3JztcblxuLy8gRGVmaW5lIGNvbG9yIHZhcmlhYmxlc1xuY29uc3QgYnV0dG9uQmFja2dyb3VuZENvbG9yMSA9IFwiYmctWyNjZDQ4NmJdXCI7XG5jb25zdCBidXR0b25Ib3ZlckNvbG9yMSA9IFwiaG92ZXI6YmctcGluay01MDBcIjtcbmNvbnN0IGJ1dHRvbkJhY2tncm91bmRDb2xvcjIgPSBcImJnLWdyZWVuLTYwMFwiO1xuY29uc3QgYnV0dG9uSG92ZXJDb2xvcjIgPSBcImhvdmVyOmJnLWdyZWVuLTUwMFwiO1xuXG5jb25zdCBWYXJpYW50VGh1bWJuYWlsID0gKHsgaW1hZ2VVcmwsIHZhcmlhbnRJZCwgdmFyaWFudExhYmVsIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhyb3V0ZXIucXVlcnkpO1xuICBjb25zdCB2YXJpYW50RnJvbVF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuZ2V0KCd2YXJpYW50Jyk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIENvbnN0cnVjdCBuZXcgcXVlcnkgcGFyYW1ldGVyIHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhyb3V0ZXIucXVlcnkpO1xuICAgIHF1ZXJ5UGFyYW1zLnNldCgndmFyaWFudCcsIHZhcmlhbnRJZCk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IFVSTCB3aXRoIHRoZSB1cGRhdGVkIHF1ZXJ5IHBhcmFtZXRlclxuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSwgcXVlcnk6IHF1ZXJ5UGFyYW1zLnRvU3RyaW5nKCkgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIG1yLTQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmJvcmRlciBib3JkZXItZ3JheS01MDAgJHt2YXJpYW50SWQgPT09IHZhcmlhbnRGcm9tUXVlcnlQYXJhbXMgPyAnYm9yZGVyLVsjREU5MTUxXSBib3JkZXInIDogJyd9YH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJQcm9kdWN0IFRodW1ibmFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz57dmFyaWFudExhYmVsfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVmFyaWFudFRodW1ibmFpbHMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGRlYnVnZ2VyO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG8gc3BhY2UteC00IHAtNFwiPlxuICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPFZhcmlhbnRUaHVtYm5haWwga2V5PXtpbmRleH0gey4uLnByb2R1Y3R9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt2YXJpYW50LCBzZXRWYXJpYW50XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc29sZS5sb2coJ3Byb2R1Y3RpcycsIHByb2R1Y3QpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhyb3V0ZXIucXVlcnkpO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKCh7IGlkIH0pID0+IHsgcmV0dXJuIChpZCArICcnID09PSBwcm9kdWN0SWQpIH0pIHx8IHt9XG4gICAgc2V0UHJvZHVjdChwcm9kdWN0KTtcbiAgICBjb25zdCB2YXJpYW50RnJvbVBhcmFtID0gcXVlcnlQYXJhbXMuZ2V0KCd2YXJpYW50Jyk7XG4gICAgc2V0VmFyaWFudChwcm9kdWN0Py52YXJpYW50cz8uZmluZCgoeyB2YXJpYW50SWQgfSkgPT4geyByZXR1cm4gKHZhcmlhbnRJZCA9PT0gdmFyaWFudEZyb21QYXJhbSkgfSkpO1xuICAgIGNvbnNvbGUubG9nKCd2YXJpYW50aXMnLCB2YXJpYW50KTtcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUJ1eU9uSW5zdGFncmFtID0gKCkgPT4ge1xuICAgIC8vIEdlbmVyYXRlIGEgY3VzdG9tIG1lc3NhZ2Ugd2l0aCB0aGUgcHJvZHVjdCBsaW5rXG4gICAgY29uc3QgbWVzc2FnZSA9IGBJIHdhbnQgdG8gYnV5ICR7cHJvZHVjdC5uYW1lfSEgJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gO1xuXG4gICAgLy8gT3BlbiBJbnN0YWdyYW0gaW4gYSBuZXcgdGFiIHdpdGggdGhlIHByZS13cml0dGVuIG1lc3NhZ2VcbiAgICB3aW5kb3cub3BlbihgJHtwcm9kdWN0Lmluc3RhZ3JhbVVybH1gLCAnX2JsYW5rJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZFdoYXRzYXBwTWVzc2FnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9ICdSRUNJUElFTlRfUEhPTkVfTlVNQkVSJzsgIC8vIFJlcGxhY2Ugd2l0aCB0aGUgcmVjaXBpZW50J3MgcGhvbmUgbnVtYmVyXG4gICAgY29uc3QgbWVzc2FnZSA9ICdIZWxsbywgdGhpcyBpcyBhIHRlc3QgbWVzc2FnZSEnOyAgLy8gUmVwbGFjZSB3aXRoIHlvdXIgZGVzaXJlZCBtZXNzYWdlXG5cbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9JHtwaG9uZU51bWJlcn0mdGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKX1gO1xuXG4gICAgLy8gT3BlbiBhIG5ldyB3aW5kb3cgb3IgdGFiIHdpdGggdGhlIFdoYXRzQXBwIEFQSSBVUkxcbiAgICB3aW5kb3cub3BlbihhcGlVcmwsICdfYmxhbmsnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBcIj5cbiAgICAgIHsvKiBMZWZ0OiBab29tYWJsZSBJbWFnZSAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC00XCI+XG4gICAgICAgIDxJbWFnZXNWaWV3IHByb2R1Y3Q9e3ZhcmlhbnQgfHwgcHJvZHVjdH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmlnaHQ6IFByb2R1Y3QgRGV0YWlscyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj57cHJvZHVjdC5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbWItMiB0ZXh0LWdyZWVuLTYwMCBmb250LWJvbGRcIj4mIzgzNzc7e3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICB7cHJvZHVjdC52YXJpYW50cyA/IDxWYXJpYW50VGh1bWJuYWlscyBwcm9kdWN0cz17cHJvZHVjdC52YXJpYW50c30gLz4gOiBudWxsfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00IGZsZXggZmxleC1jb2wgbGlzdC1kaXNjXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9kdWN0LmRlc2NyaXB0aW9uIH19IC8+XG4gICAgICAgIHsvKiBCdXkgb24gSW5zdGFncmFtIEJ1dHRvbiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTInPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1eU9uSW5zdGFncmFtfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCAke2J1dHRvbkJhY2tncm91bmRDb2xvcjF9ICR7YnV0dG9uSG92ZXJDb2xvcjF9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCdXkgb24gSW5zdGFncmFtXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kV2hhdHNhcHBNZXNzYWdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBweC02IHB5LTMgcm91bmRlZC1mdWxsIGZvbnQtYm9sZCAke2J1dHRvbkJhY2tncm91bmRDb2xvcjJ9ICR7YnV0dG9uSG92ZXJDb2xvcjJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCdXkgb24gV2hhdHNBcHBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2RpdiA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJ1c2VSb3V0ZXIiLCJJbWFnZXNWaWV3IiwiYnV0dG9uQmFja2dyb3VuZENvbG9yMSIsImJ1dHRvbkhvdmVyQ29sb3IxIiwiYnV0dG9uQmFja2dyb3VuZENvbG9yMiIsImJ1dHRvbkhvdmVyQ29sb3IyIiwiVmFyaWFudFRodW1ibmFpbCIsImltYWdlVXJsIiwidmFyaWFudElkIiwidmFyaWFudExhYmVsIiwicm91dGVyIiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJxdWVyeSIsInZhcmlhbnRGcm9tUXVlcnlQYXJhbXMiLCJnZXQiLCJoYW5kbGVDbGljayIsInNldCIsInB1c2giLCJwYXRobmFtZSIsInRvU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsIlZhcmlhbnRUaHVtYm5haWxzIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiUHJvZHVjdFBhZ2UiLCJzZXRQcm9kdWN0IiwidmFyaWFudCIsInNldFZhcmlhbnQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdElkIiwiZmluZCIsImlkIiwidmFyaWFudEZyb21QYXJhbSIsInZhcmlhbnRzIiwiaGFuZGxlQnV5T25JbnN0YWdyYW0iLCJtZXNzYWdlIiwid2luZG93IiwibmFtZSIsImxvY2F0aW9uIiwiaHJlZiIsIm9wZW4iLCJpbnN0YWdyYW1VcmwiLCJoYW5kbGVTZW5kV2hhdHNhcHBNZXNzYWdlIiwicGhvbmVOdW1iZXIiLCJhcGlVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoMSIsInAiLCJwcmljZSIsInVsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/product/[productId].js\n"));

/***/ })

});