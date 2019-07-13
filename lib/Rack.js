"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRack = function SvgRack(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M6.9 0v32h18.2V0H6.9zm15.8 2.4v3.9H9.3V2.4h13.4zM9.3 20.3v-3.9h13.5v3.9H9.3zm13.4.8V25H9.3v-3.9h13.4zM9.3 15.6v-3.9h13.5v3.9H9.3zm0-4.7V7h13.5v3.9H9.3zm0 18.7v-3.9h13.5v3.9H9.3z"
  }));
};

var _default = SvgRack;
exports["default"] = _default;