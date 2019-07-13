"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgProtectionPolicy = function SvgProtectionPolicy(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.2 15.5v-3.6h-1.8v5.5h15.5v-1.9z"
  }), _react["default"].createElement("path", {
    d: "M13.2 11.4v-2c-3 .9-5.3 3.8-5.3 7 0 4.1 3.3 7.4 7.4 7.4 3.3 0 6.1-2.2 7-5.3h-2c-.8 2-2.8 3.3-5 3.3-3 0-5.5-2.5-5.5-5.5 0-2.1 1.4-4.1 3.4-4.9zm4.2 0c1.3.6 2.3 1.6 2.9 2.9h2c-.7-2.3-2.6-4.2-4.9-4.9v2z"
  }), _react["default"].createElement("path", {
    d: "M15.6 29.4l-.2.1h-.2C5.7 26.3 4.3 21.8 4.3 8.6v-.8l1.8-.2c2.8-.4 6.2-1.9 8.7-3.9l.6-.6.7.7c2.3 1.9 5.6 3.3 8.6 3.8l1.9.2v.8c0 2.1 0 4-.1 5.6h2.1c.1-1.8.1-3.6.1-5.6V5.9l-3.8-.5c-2.5-.4-5.4-1.6-7.4-3.2l-2-1.9-2.1 1.8c-2.2 1.8-5.2 3-7.6 3.4l-3.6.4v2.7c0 13.8 1.9 19.3 12.5 22.9l.9.2.8-.2c7.4-2.5 10.4-6 11.6-12.8h-2.1c-1.2 5.7-3.9 8.5-10.3 10.7z"
  }));
};

var _default = SvgProtectionPolicy;
exports["default"] = _default;