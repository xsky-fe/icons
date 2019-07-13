"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWarningTriangle = function SvgWarningTriangle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31.2 25.8l-4.9-8.5-3.5-6.1-4.9-8.5c-1-1.7-2.5-1.7-3.5 0l-4.9 8.5L6 17.3l-4.9 8.5c-1 1.7-.2 3.1 1.8 3.1h26.8c1.7 0 2.5-1.4 1.5-3.1zm-13.4-1.1h-3.5v-2.9h3.5v2.9zm0-6.1h-3.5v-7h3.5v7z"
  }));
};

var _default = SvgWarningTriangle;
exports["default"] = _default;