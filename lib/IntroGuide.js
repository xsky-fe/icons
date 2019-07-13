"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIntroGuide = function SvgIntroGuide(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M25.4 25.8c0-.3 4-9.8 4-9.8s-3.7-9.6-3.7-9.9C25.6 6 23 12.6 22 15h-2.6V7.8h-7.3V4H2.6v9.4H12V9.7h5.4v12.7H12v-3.8H2.6V28H12v-3.8h7.3V17H22c1 2.5 3.3 8.9 3.4 8.8zM10.2 11.5H4.5V5.9h5.6v5.6zm0 14.6H4.5v-5.6h5.6v5.6zm17.1-9.9c-.3.7-1.7 4.5-1.8 4.6-.3-.8-1.5-3.7-1.9-4.6h3.7z"
  }));
};

var _default = SvgIntroGuide;
exports["default"] = _default;