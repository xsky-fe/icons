"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUploadSquare = function SvgUploadSquare(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M9.196 15.708h4.428v6.12h4.603V15.69h4.369l-4.326-4.62 1.279-1.199 7.09 7.572h-6.66v6.139H11.87v-6.12H5.125L15.944 6.021l1.175 1.253z"
  }), _react["default"].createElement("path", {
    d: "M28.943 29.232H3.056V18.979h2v8.253h21.887v-8.253h2zm0-13.845h-2V4.768H5.056v10.619h-2V2.768h25.887z"
  }));
};

var _default = SvgUploadSquare;
exports["default"] = _default;