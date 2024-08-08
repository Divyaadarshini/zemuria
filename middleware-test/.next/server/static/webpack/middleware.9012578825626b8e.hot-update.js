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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(req) {\n    const url = req.nextUrl.clone();\n    const cookie = req.cookies[\"ab-test-group\"];\n    if (!cookie) {\n        // Randomly assign user to group 'A' or 'B'\n        const group = Math.random() < 0.5 ? \"A\" : \"B\";\n        url.pathname = `/${group}${url.pathname}`;\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n        return response;\n    }\n    url.pathname = `/${cookie}${url.pathname}`;\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.rewrite(url);\n}\nconst config = {\n    matcher: [\n        \"/test-page\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsU0FBU0MsV0FBV0MsR0FBRztJQUM1QixNQUFNQyxNQUFNRCxJQUFJRSxPQUFPLENBQUNDLEtBQUs7SUFDN0IsTUFBTUMsU0FBU0osSUFBSUssT0FBTyxDQUFDLGdCQUFnQjtJQUUzQyxJQUFJLENBQUNELFFBQVE7UUFDWCwyQ0FBMkM7UUFDM0MsTUFBTUUsUUFBUUMsS0FBS0MsTUFBTSxLQUFLLE1BQU0sTUFBTTtRQUMxQ1AsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFSCxNQUFNLEVBQUVMLElBQUlRLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU1DLFdBQVdaLHFEQUFZQSxDQUFDYSxPQUFPLENBQUNWO1FBQ3RDLE9BQU9TO0lBQ1Q7SUFDQVQsSUFBSVEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFTCxPQUFPLEVBQUVILElBQUlRLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLE9BQU9YLHFEQUFZQSxDQUFDYSxPQUFPLENBQUNWO0FBQzlCO0FBRU8sTUFBTVcsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQWE7QUFDekIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgY29uc3QgdXJsID0gcmVxLm5leHRVcmwuY2xvbmUoKTtcbiAgY29uc3QgY29va2llID0gcmVxLmNvb2tpZXNbJ2FiLXRlc3QtZ3JvdXAnXTtcblxuICBpZiAoIWNvb2tpZSkge1xuICAgIC8vIFJhbmRvbWx5IGFzc2lnbiB1c2VyIHRvIGdyb3VwICdBJyBvciAnQidcbiAgICBjb25zdCBncm91cCA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnQScgOiAnQic7XG4gICAgdXJsLnBhdGhuYW1lID0gYC8ke2dyb3VwfSR7dXJsLnBhdGhuYW1lfWA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UucmV3cml0ZSh1cmwpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICB1cmwucGF0aG5hbWUgPSBgLyR7Y29va2llfSR7dXJsLnBhdGhuYW1lfWA7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UucmV3cml0ZSh1cmwpO1xufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbJy90ZXN0LXBhZ2UnXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInVybCIsIm5leHRVcmwiLCJjbG9uZSIsImNvb2tpZSIsImNvb2tpZXMiLCJncm91cCIsIk1hdGgiLCJyYW5kb20iLCJwYXRobmFtZSIsInJlc3BvbnNlIiwicmV3cml0ZSIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});