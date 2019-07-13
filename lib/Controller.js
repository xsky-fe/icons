"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgController = function SvgController(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M26 4H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 21c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v18z"
  }), _react["default"].createElement("path", {
    d: "M13 16.2V8h-2v8.2c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8V24h2v-2.2c1.2-.4 2-1.5 2-2.8s-.8-2.4-2-2.8zM12 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm9-10.8V8h-2v2.2c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8V24h2v-8.2c1.2-.4 2-1.5 2-2.8s-.8-2.4-2-2.8zM20 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }));
};

var _default = SvgController;
exports["default"] = _default;