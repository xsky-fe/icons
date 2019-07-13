"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStandardDn = function SvgStandardDn(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M7.261 11.756h17.633v1.882H7.261v-1.882zm0 6.916h17.633v1.882H7.261v-1.882z"
  }), _react["default"].createElement("path", {
    d: "M28.278 27.986h1.882V4.815H1.84v23.171h26.437zM3.722 26.103V6.695h24.556V26.09l-24.556.013z"
  }));
};

var _default = SvgStandardDn;
exports["default"] = _default;