"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCapacity = function SvgCapacity(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 3.459c-6.655 0-13.392 1.863-13.392 5.425v15.024h.065c.658 3.203 7.024 4.877 13.327 4.877s12.669-1.674 13.327-4.876h.065V8.884c0-3.562-6.737-5.425-13.392-5.425zm0 1.759c6.953 0 11.389 2.027 11.389 3.423S22.953 12.063 16 12.063 4.611 10.035 4.611 8.64 9.047 5.218 16 5.218zm0 14.736c-7.369 0-11.389-2.015-11.389-3.05v-5.28C7.1 13.232 11.563 14.065 16 14.065s8.9-.833 11.389-2.441v5.28c0 1.035-4.02 3.05-11.389 3.05z"
  }));
};

var _default = SvgCapacity;
exports["default"] = _default;