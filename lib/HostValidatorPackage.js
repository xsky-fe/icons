"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHostValidatorPackage = function SvgHostValidatorPackage(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M25 24.92H7V9.78h18zM8.77 23.13h14.47V11.56H8.77z"
  }), _react["default"].createElement("path", {
    d: "M15.11 13.71h1.78v6.48h-1.78v-6.48z"
  }), _react["default"].createElement("path", {
    d: "M16 21.81l-4.04-4.05 1.26-1.26L16 19.29l2.79-2.79 1.26 1.26L16 21.81zM8.28 11.08l-1.3-1.22 3.85-4.12h9.89l4.3 4.04-1.43 1.17L20 7.52h-8.39l-3.33 3.56z"
  }));
};

var _default = SvgHostValidatorPackage;
exports["default"] = _default;