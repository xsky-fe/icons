"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowDown = function SvgArrowDown(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M23.6 18.5L22 20l-1.2 1.3-3.7 3.7V9h-2.2v16l-6.5-6.5L6.8 20l9.2 9.2 9.2-9.2zM14.9 4.7h2.2v2.1h-2.2V4.7z"
  }));
};

var _default = SvgArrowDown;
exports["default"] = _default;