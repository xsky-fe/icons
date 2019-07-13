"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHostValidatorHostMemory = function SvgHostValidatorHostMemory(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M5.5 5.5h21v21h-21v-21zm2.1 2.1v16.8h16.8V7.6H7.6z"
  }), _react["default"].createElement("path", {
    d: "M11.8 7.6v6.3h8.4V7.6h2.1V16H9.7V7.6h2.1z"
  }), _react["default"].createElement("path", {
    d: "M16 7.6h2.1v2.1H16V7.6z"
  }));
};

var _default = SvgHostValidatorHostMemory;
exports["default"] = _default;