"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgList = function SvgList(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M3.729 4.037h2.875v2.621H3.729V4.037zm6.751 0h17.79v2.621H10.48V4.037zM3.729 14.689h2.875v2.622H3.729v-2.622zm6.751 0h17.79v2.622H10.48v-2.622zM3.729 25.342h2.875v2.621H3.729v-2.621zm6.751 0h17.79v2.621H10.48v-2.621z"
  }));
};

var _default = SvgList;
exports["default"] = _default;