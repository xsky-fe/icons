"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAccessToken = function SvgAccessToken(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M15.4 28.7l-.3.1h-.2c-9-3-10.4-7.4-10.4-19.8v-.8L6.2 8c2.7-.4 5.9-1.8 8.2-3.6l.7-.5.7.6c2.3 1.8 5.4 3.2 8.1 3.5l1.7.2V9c0 2 0 3.4-.1 5h2c.1-1.6.1-3 .1-5V6.4l-3.5-.5c-2.3-.3-5.1-1.5-7-3l-1.9-1.8-2.1 1.6C11 4.4 8.2 5.6 5.9 5.9l-3.4.5V9c0 13.1 1.8 18.4 11.9 21.8l.8.2.8-.3c7-2.3 9.9-5.7 11-12.1h-2c-1 5.4-3.6 8.1-9.6 10.1z"
  }), _react["default"].createElement("path", {
    d: "M29.5 14.3h-1.9v1.2h-2.3v-1.2h-1.9v1.2h-2.8c-.5-2.5-2.6-4.3-5.2-4.3-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3c2.6 0 4.8-1.9 5.2-4.3h8.9v-1h.1v-2.2zm-14.1 5.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.6 3.4-3.4 3.4z"
  }), _react["default"].createElement("path", {
    d: "M16.6 16.4c0 .663-.537 1.2-1.2 1.2s-1.2-.537-1.2-1.2c0-.663.537-1.2 1.2-1.2s1.2.537 1.2 1.2z"
  }));
};

var _default = SvgAccessToken;
exports["default"] = _default;