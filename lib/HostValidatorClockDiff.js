"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHostValidatorClockDiff = function SvgHostValidatorClockDiff(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.6 8.64h-1.87v8.47h6.72v-1.87H16.6v-6.6z"
  }), _react["default"].createElement("path", {
    d: "M16 27.55c-6.401 0-11.59-5.189-11.59-11.59S9.599 4.37 16 4.37s11.59 5.189 11.59 11.59v.042V16c-.028 6.381-5.205 11.544-11.589 11.55H16zm0-21.08h-.01c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5c5.236 0 9.483-4.236 9.5-9.468v-.032c0-5.243-4.248-9.494-9.489-9.5H16z"
  }));
};

var _default = SvgHostValidatorClockDiff;
exports["default"] = _default;