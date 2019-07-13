"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIndicator = function SvgIndicator(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M23.645 24.733c-.014-.029-.231-.359-.231-.359L8 2.006l8.879 25.533s.172.473.183.495c.937 1.767 3.12 2.467 4.914 1.561 1.787-.903 2.521-3.063 1.669-4.862z"
  }));
};

var _default = SvgIndicator;
exports["default"] = _default;