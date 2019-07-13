"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHistory = function SvgHistory(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.2 8.847v7.651l5.053 4.861 1.457-1.486-4.51-4.387V8.847z"
  }), _react["default"].createElement("path", {
    d: "M17.93 2.025C10.222 2.025 3.952 8.293 3.952 16c0 .352.031.7.057 1.047H.29l4.664 4.66 4.66-4.66H6.009c-.03-.346-.057-.694-.057-1.047 0-6.603 5.372-11.975 11.978-11.975 6.603 0 11.975 5.372 11.975 11.975S24.533 27.975 17.93 27.975c-3.533 0-6.867-1.549-9.151-4.248l-1.527 1.291c2.665 3.15 6.556 4.957 10.678 4.957 7.706 0 13.975-6.27 13.975-13.975-.003-7.707-6.27-13.975-13.975-13.975z"
  }));
};

var _default = SvgHistory;
exports["default"] = _default;