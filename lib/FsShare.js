"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFsShare = function SvgFsShare(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M21.4 3.2v4.7h4.9zM9.2 9.4h12.2v1.8H9.2V9.4zm0 5.4h12.2v1.8H9.2v-1.8zm0 5.4H13V22H9.2v-1.8z"
  }), _react["default"].createElement("path", {
    d: "M5.8 26.8v-22h14.3V3H4v25.6h13.7c.1 0 .1-.1.1-.1.1-.5.1-1.1.1-1.7H5.8zm18.9-12c.6.1 1.3 0 1.8.1V9.1h-1.8v5.7z"
  }), _react["default"].createElement("path", {
    d: "M26.1 23.9c-.8 0-1.4.4-1.8 1l-5.6-1.6v-.5l5.7-2.6c.4.3.8.5 1.3.5 1.2 0 2.1-.9 2.1-2.1 0-1.1-.9-2.1-2.1-2.1s-2.1.9-2.1 2.1c0 .2.1.5.1.7l-5.6 2.5c-.4-.4-.9-.7-1.6-.7-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1c.7 0 1.4-.4 1.8-.9L24 26c0 1.1.9 2.1 2.1 2.1s2.1-.9 2.1-2.1-.9-2.1-2.1-2.1z"
  }));
};

var _default = SvgFsShare;
exports["default"] = _default;