"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStarO = function SvgStarO(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M25.739 30.311L16 23.255l-9.739 7.056 3.677-11.429L.1 11.727h12.124L16 .199l3.677 11.528h12.025l-9.739 7.155 3.776 11.429zM6.261 13.714l6.062 4.373-.398.994-1.988 6.062 5.068-3.677.994-.994.994.994 5.068 3.677-2.385-7.056.894-.596 5.068-3.776h-7.453l-.298-.994-1.988-6.062-2.286 6.957H6.259z"
  }));
};

var _default = SvgStarO;
exports["default"] = _default;