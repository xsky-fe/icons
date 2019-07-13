"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgObjectSearch = function SvgObjectSearch(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M13 15.7c0 .4.1.9.3 1.3l1.3-.6c-.1-.2-.1-.4-.1-.7 0-.9.7-1.6 1.6-1.6v-1.5c-1.7.1-3.1 1.4-3.1 3.1z"
  }), _react["default"].createElement("path", {
    d: "M21.1 19c.6-.9 1-2.1 1-3.3 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.3 0 2.4-.4 3.4-1.1l2.1 2.1 1.2-1.2-2.1-2.1c.3-.2.4-.4.4-.4zm-5 1.1c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3c0 2.3-1.9 4.3-4.3 4.3z"
  }), _react["default"].createElement("path", {
    d: "M28.9 9c0-3.9-6.9-5.3-12.9-5.3C10.1 3.7 3.1 5.1 3.1 9c0 .3 0 .6.1.8l2 13.2c0 3.4 3.8 5.3 10.8 5.3s10.8-1.9 10.8-5.3l2-13.2c0-.3.1-.5.1-.8zm-4 13.8v.3c0 2.1-3.3 3.4-8.9 3.4S7.1 25.2 7.1 23L5.5 12.3c1 .6 2.4 1 3.8 1.3.2-.6.5-1.2.8-1.8-2.9-.6-4.9-1.6-5.1-2.7v-.2c.1-1.9 5-3.4 11-3.4S26.9 7 27 8.9v.2c-.2 1.1-2.1 2.1-4.9 2.7.4.5.6 1.1.8 1.7 1.4-.3 2.6-.7 3.6-1.3l-1.6 10.6z"
  }));
};

var _default = SvgObjectSearch;
exports["default"] = _default;