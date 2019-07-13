"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDownload = function SvgDownload(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M24.35 12.701h-5.53V5.056h-5.748v7.667H7.614l5.405 5.771-1.6 1.498-8.855-9.46h8.318V2.865H21.01v7.646h8.426l-13.514 14.29-1.467-1.567zM2.57 27.135h26.829v2H2.57v-2z"
  }));
};

var _default = SvgDownload;
exports["default"] = _default;