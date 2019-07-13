"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgObjectStorage = function SvgObjectStorage(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M28.6 9l-.5-.5-11.4-6-.3-.1c-.3-.1-.6-.1-.9 0L3.9 8.5l-.5.6v.2c0 .1-.1.2-.1.3v12.7c0 .6.3 1 .8 1.3l11.2 5.9.3.1c.1 0 .2.1.4.1.1 0 .3 0 .4-.1l11.5-6c.5-.2.8-.7.8-1.3L28.6 9zM16 4.4l9.6 5.1-9.6 5.3-9.7-5.3L16 4.4zM5.4 11.3l9.6 5.3V27l-9.6-5V11.3zM17 27V16.6l9.6-5.4V22L17 27z"
  }));
};

var _default = SvgObjectStorage;
exports["default"] = _default;