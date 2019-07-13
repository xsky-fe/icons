"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTime = function SvgTime(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 29.267c-7.391 0-13.404-6.014-13.404-13.404 0-6.069 4.096-11.396 9.961-12.955l.586 2.204c-4.867 1.293-8.267 5.714-8.267 10.751 0 6.133 4.99 11.124 11.124 11.124s11.124-4.99 11.124-11.124c0-5.257-3.737-9.84-8.885-10.897l.458-2.233c6.204 1.273 10.706 6.795 10.706 13.13-.001 7.391-6.015 13.404-13.405 13.404z"
  }), _react["default"].createElement("path", {
    d: "M17.013 7.317h-2.28V17.64l8.188-.001v-2.281h-5.908z"
  }));
};

var _default = SvgTime;
exports["default"] = _default;