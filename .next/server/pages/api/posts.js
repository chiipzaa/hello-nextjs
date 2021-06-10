(function() {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 6214:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ([{
  id: 1,
  title: 'Post #1',
  content: 'lorem ipsum 1'
}, {
  id: 2,
  title: 'Post #2',
  content: 'lorem ipsum 2'
}]);

/***/ }),

/***/ 4428:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_posts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6214);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.json({
    posts: _mock_posts_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4428));
module.exports = __webpack_exports__;

})();