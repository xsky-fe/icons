"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGroupCatalog = function SvgGroupCatalog(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M20 2.7v4.4h4.5zM8.9 8.4H20v1.7H8.9V8.4zm0 5H20v1.7H8.9v-1.7zm0 5H20v1.7H8.9v-1.7z"
  }), _react["default"].createElement("path", {
    d: "M26.1 11.4v16.4H9v-1.6h15.7v-18H23v16.4H5.9V4.2h13V2.5H4.2v23.7h3.1v3.3h20.5V11.4z"
  }));
};

var _default = SvgGroupCatalog;
exports["default"] = _default;