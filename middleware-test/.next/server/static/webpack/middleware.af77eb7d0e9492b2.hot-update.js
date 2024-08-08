"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    const cookie = req.cookies[\"ab-test-group\"];\n    if (!cookie) {\n        // Randomly assign user to group 'A' or 'B'\n        const group = Math.random() < 0.5 ? \"A\" : \"B\";\n        url.pathname = `/${group}${url.pathname}`;\n        // Create a response and set the cookie header manually\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n        return response;\n    }\n    // Redirect based on the existing cookie\n    url.pathname = `/${cookie}${url.pathname}`;\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n}\nconst config = {\n    matcher: [\n        \"/test-page\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsV0FBV0MsR0FBRztJQUM1QixNQUFNQyxNQUFNRCxJQUFJRSxPQUFPLENBQUNDLEtBQUs7SUFDN0IsTUFBTUMsU0FBU0osSUFBSUssT0FBTyxDQUFDLGdCQUFnQjtJQUUzQyxJQUFJLENBQUNELFFBQVE7UUFDWCwyQ0FBMkM7UUFDM0MsTUFBTUUsUUFBUUMsS0FBS0MsTUFBTSxLQUFLLE1BQU0sTUFBTTtRQUMxQ1AsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFSCxNQUFNLEVBQUVMLElBQUlRLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLHVEQUF1RDtRQUN2RCxNQUFNQyxXQUFXWixxREFBWUEsQ0FBQ2EsT0FBTyxDQUFDVjtRQUN0QyxPQUFPUztJQUNUO0lBRUEsd0NBQXdDO0lBQ3hDVCxJQUFJUSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUVMLE9BQU8sRUFBRUgsSUFBSVEsUUFBUSxDQUFDLENBQUM7SUFDMUMsT0FBT1gscURBQVlBLENBQUNhLE9BQU8sQ0FBQ1Y7QUFDOUI7QUFFTyxNQUFNVyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBYTtBQUN6QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUuanM/M2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xuICBjb25zdCB1cmwgPSByZXEubmV4dFVybC5jbG9uZSgpO1xuICBjb25zdCBjb29raWUgPSByZXEuY29va2llc1snYWItdGVzdC1ncm91cCddO1xuXG4gIGlmICghY29va2llKSB7XG4gICAgLy8gUmFuZG9tbHkgYXNzaWduIHVzZXIgdG8gZ3JvdXAgJ0EnIG9yICdCJ1xuICAgIGNvbnN0IGdyb3VwID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdBJyA6ICdCJztcbiAgICB1cmwucGF0aG5hbWUgPSBgLyR7Z3JvdXB9JHt1cmwucGF0aG5hbWV9YDtcblxuICAgIC8vIENyZWF0ZSBhIHJlc3BvbnNlIGFuZCBzZXQgdGhlIGNvb2tpZSBoZWFkZXIgbWFudWFsbHlcbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5yZXdyaXRlKHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLy8gUmVkaXJlY3QgYmFzZWQgb24gdGhlIGV4aXN0aW5nIGNvb2tpZVxuICB1cmwucGF0aG5hbWUgPSBgLyR7Y29va2llfSR7dXJsLnBhdGhuYW1lfWA7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZSh1cmwpO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy90ZXN0LXBhZ2UnXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsImNvb2tpZSIsImNvb2tpZXMiLCJncm91cCIsIk1hdGgiLCJyYW5kb20iLCJwYXRobmFtZSIsInJlc3BvbnNlIiwicmV3cml0ZSIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});