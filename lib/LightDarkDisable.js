"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLightDarkDisable = function SvgLightDarkDisable(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M10.953 22.248h9.145v.75h-9.145v-.75zm0 1.479h9.145v.75h-9.145v-.75zm0 1.453v1.078s1.453 2.172 3.75 2.516h1.359s2.452-.125 3.952-2.516V25.18zm13.436-12.921c0-2.132-.742-4.088-1.979-5.633L9.708 19.329c.337.347 1.199 1.32 1.182 2.21h9.417s-.107-1.43.844-2.352h-.004c1.98-1.656 3.242-4.144 3.242-6.928zM8.982 18.641L21.746 5.876c-1.633-1.636-3.893-2.648-6.387-2.648-4.988 0-9.031 4.044-9.031 9.031 0 2.495 1.018 4.748 2.654 6.382z"
  }));
};

var _default = SvgLightDarkDisable;
exports["default"] = _default;