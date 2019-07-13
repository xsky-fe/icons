"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOsSearch = function SvgOsSearch(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M11.9 16c0-.9.3-1.8 1-2.5l-1.5-1.4c-1 1.1-1.5 2.4-1.5 3.9h2z"
  }), _react["default"].createElement("path", {
    d: "M28.7 22.9l-5-2.9c.6-1.2.9-2.6.9-4 0-1.3-.3-2.5-.7-3.6l2.3-1.3 2-1.1V8.9l-.5-.5L16 2.1c-.3-.1-.6-.1-.9 0L3.6 8.2l-.7.7v.2c0 .1-.1.2-.1.3v13c0 .6.3 1.1.8 1.3l11.2 6 .3.1c.1 0 .2.1.4.1.1 0 .3 0 .4-.1l.7-.4v-4.6c1.1-.1 2.2-.5 3.2-1 .5-.3.7-.9.4-1.4s-.9-.7-1.4-.4c-1 .5-2.1.8-3.3.8-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7c0 1.3-.4 2.6-1 3.7l-.7 1 6.8 4c.5.3 1.1.1 1.4-.4.3-.3.1-.9-.3-1.2zM14.5 25v2.3l-9.6-5.2V11.2l2.3 1.3c-.5 1.1-.7 2.3-.7 3.5 0 4.6 3.5 8.5 8 9zm1-18.1c-3 0-5.7 1.5-7.3 3.8L5.8 9.4l9.7-5.2 9.6 5.2-2.3 1.3c-1.6-2.3-4.3-3.8-7.3-3.8z"
  }));
};

var _default = SvgOsSearch;
exports["default"] = _default;