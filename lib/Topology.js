"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTopology = function SvgTopology(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M30.6 21.1h-1.9V16c0-.8-.6-1.4-1.4-1.4H16.9v-4.5h1.9c.8 0 1.4-.6 1.4-1.4V3c0-.8-.6-1.4-1.4-1.4h-5.7c-.8 0-1.4.6-1.4 1.4v5.7c0 .8.6 1.4 1.4 1.4H15v4.5H4.6c-.8 0-1.4.6-1.4 1.4v5.1H1.3c-.8 0-1.4.6-1.4 1.4v5.7c0 .8.6 1.4 1.4 1.4H7c.8 0 1.4-.6 1.4-1.4v-5.7c0-.8-.6-1.4-1.4-1.4H5.1v-4.7h10v4.7h-1.9c-.8 0-1.4.6-1.4 1.4v5.7c0 .8.6 1.4 1.4 1.4h5.7c.8 0 1.4-.6 1.4-1.4v-5.7c0-.8-.6-1.4-1.4-1.4H17v-4.7h10v4.7h-1.9c-.8 0-1.4.6-1.4 1.4v5.7c0 .8.6 1.4 1.4 1.4h5.7c.8 0 1.4-.6 1.4-1.4v-5.7c-.2-.8-.8-1.4-1.6-1.4zm-17-17.6h4.9v4.9h-4.9V3.5zm-7 24.3H1.7v-4.9h4.9v4.9zm11.8 0h-4.9v-4.9h4.9v4.9zm11.8 0h-4.8v-4.9h4.8v4.9z"
  }));
};

var _default = SvgTopology;
exports["default"] = _default;