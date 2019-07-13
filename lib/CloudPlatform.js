"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCloudPlatform = function SvgCloudPlatform(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M24 26.7c4.4 0 8-3.6 8-8-.1-4.1-3.4-7.6-7.5-7.9-1.9-3.4-5.4-5.5-9.3-5.5-2.6 0-5.1.9-7 2.6-1.8 1.5-3 3.6-3.5 5.9-2.8.8-4.7 3.4-4.7 6.3 0 3.3 2.4 6 5.6 6.5zm-.1-1.7H6.4c-2.6 0-4.7-2.2-4.7-4.7 0-2.3 1.6-4.2 3.9-4.7l.6-.1.1-.7c.3-2.1 1.3-4 3-5.4C10.9 8 13 7.2 15.1 7.2c2.9 0 5.6 1.4 7.2 3.7-2 .4-3.7 1.5-4.9 3.1-.3.4-.2 1 .2 1.3s1 .2 1.3-.2c1.2-1.6 3-2.5 5-2.5 3.4 0 6.2 2.8 6.2 6.2S27.3 25 23.9 25z"
  }), _react["default"].createElement("path", {
    d: "M20.8 18.6c-.2 0-.3 0-.5-.2-.4-.3-.5-.8-.2-1.2.7-1.1 1.6-1.8 2.6-2.2.4-.2 1 0 1.1.5.2.4 0 1-.5 1.1-.7.3-1.3.8-1.8 1.6-.2.2-.5.4-.7.4zm5.1-1.9c-.1 0-.2 0-.4-.1h-.1c-.5-.2-.7-.7-.5-1.1.2-.5.7-.7 1.1-.5.2.1.3.1.3.1.4.2.6.7.4 1.2-.1.2-.4.4-.8.4z"
  }));
};

var _default = SvgCloudPlatform;
exports["default"] = _default;