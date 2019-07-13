"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCache = function SvgCache(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 17.9L0 10.1l16-7.6 16 7.7-16 7.7zM5.1 10.1L16 15.4l10.9-5.2L16 5 5.1 10.1z"
  }), _react["default"].createElement("path", {
    d: "M29.4 14.5L16 21 2.6 14.5.1 15.7 16 23.5l16-7.7z"
  }), _react["default"].createElement("path", {
    d: "M29.4 19.9L16 26.3 2.6 19.8.1 21 16 28.8l16-7.7z"
  }));
};

var _default = SvgCache;
exports["default"] = _default;