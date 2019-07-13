"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDelete = function SvgDelete(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M25.004 32.162H6.994c-2.174 0-3.942-1.769-3.942-3.942V9.638H5.79V28.22c0 .664.539 1.205 1.204 1.205h18.01c.664 0 1.203-.541 1.203-1.205V9.812h2.736V28.22c0 2.174-1.767 3.942-3.939 3.942zM32 5.692h-9.895l-3.143-3.144h-5.924L9.895 5.692H0V2.955h8.762l2.499-2.5c.417-.416.971-.645 1.563-.645h6.319c.605 0 1.182.227 1.598.645l2.5 2.5H32v2.737z"
  }), _react["default"].createElement("path", {
    d: "M10.756 9.681h2.738v16.588h-2.738V9.681zm7.738 0h2.738v16.588h-2.738V9.681z"
  }));
};

var _default = SvgDelete;
exports["default"] = _default;