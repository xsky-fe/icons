"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMasterObjectStorageBucket = function SvgMasterObjectStorageBucket(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31 21.3v-7h-1.7v7.1c0 .2-.9.7-2.7 1.3 0 .5-.1 1.2 0 1.7 2.3-.6 4.4-1.6 4.4-3.1z"
  }), _react["default"].createElement("path", {
    d: "M31.1 11V6.8c0-3-7.8-4-12.8-4-5.2 0-12.7 1-12.8 3.9v.7C3 8 1.1 9.1 1.1 10.6v14.6c0 3 7.7 4 12.8 4h.1c5.1 0 12.7-1.1 12.7-4v-7H25v7.1c0 .6-3.8 2.4-11 2.4h-.1c-7.2 0-11.1-1.8-11.1-2.4V12.8c.2.1 1.5.5 2.2.7 3.4.8 5.7 1.1 8.9 1.1s5.7-.2 8.9-1.1c.3-.1 1.8-.6 2.2-.8v2h1.8v-4.2c0-.2 0-.4-.1-.7.9-.2 1.8-.5 2.8-.8v2h1.6zm-11 1.5c-5.4 1-9.8.2-10.2.2-6-.7-6.9-1.9-7-2.1.1-.6 4-2.4 11.1-2.4s11 1.7 11.1 2.4c-.5.6-2.8 1.5-5 1.9zm5.1-4c-2.5-1.5-7.5-2-11.2-2-2 0-4.5.2-6.7.6-.2-.2-.2-.2-.2-.4.1-1.2 4-2.4 11.4-2.6 7.2.2 10.8 2.1 10.9 2.7-.4.7-2.3 1.4-4.2 1.7z"
  }));
};

var _default = SvgMasterObjectStorageBucket;
exports["default"] = _default;