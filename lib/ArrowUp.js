"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowUp = function SvgArrowUp(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M8.4 15.5l1.6-1.6 1.2-1.3.7-.7 3-2.9v15.9h2.2V9l6.5 6.5 1.6-1.6L16 4.7l-5.6 5.7-.7.7-1.3 1.2-1.6 1.6zm6.5 11.6h2.2v2.1h-2.2v-2.1z"
  }));
};

var _default = SvgArrowUp;
exports["default"] = _default;