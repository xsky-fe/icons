"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBindDn = function SvgBindDn(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M29.365 17.355v-2.783c0-2.186-1.778-3.964-3.964-3.964s-3.964 1.778-3.964 3.964v2.783h-2.332v8.216l-16.472.012V6.415h24.252v2.966c.701.225 1.334.591 1.859 1.083V4.557H.774v22.885l30.452-.001V17.355h-1.861zm-6.277-2.783c0-1.275 1.038-2.313 2.313-2.313s2.313 1.038 2.313 2.313v2.783h-4.626v-2.783zm6.279 11.011h-8.404v-6.37h8.404v6.37z"
  }), _react["default"].createElement("path", {
    d: "M25.059 22.941v1.277c0 .22.224.399.499.399.276 0 .499-.179.499-.399v-1.277c.41-.19.698-.599.698-1.081 0-.661-.536-1.198-1.198-1.198s-1.198.536-1.198 1.198c.002.482.29.891.7 1.081zM6.128 11.413h13.278v1.859H6.128v-1.859zm0 6.831h7.011v1.859H6.128v-1.859z"
  }));
};

var _default = SvgBindDn;
exports["default"] = _default;