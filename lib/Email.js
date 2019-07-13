"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEmail = function SvgEmail(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31.35 21.409V4.594H.651v22.812h30.645v-2H2.651V9.339L15.39 19.732c.169.138.375.205.579.205.202 0 .403-.064.571-.196L29.35 9.607v11.802h2zm-15.372-3.585L2.836 7.09c-.056-.045-.122-.066-.185-.095v-.401H29.35v.694c-.06.028-.121.045-.176.087l-1.393 1.103z"
  }));
};

var _default = SvgEmail;
exports["default"] = _default;