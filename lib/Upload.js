"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgUpload = function SvgUpload(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M7.65 14.465h5.53v7.644h5.748v-7.666h5.458L18.98 8.672l1.601-1.497 8.855 9.459h-8.318v7.667H10.99v-7.647H2.564L16.078 2.365l1.467 1.567zm-5.08 13.17h26.829v2H2.57v-2z"
  }));
};

var _default = SvgUpload;
exports["default"] = _default;