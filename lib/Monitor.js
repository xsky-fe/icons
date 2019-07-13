"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMonitor = function SvgMonitor(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31.323 16.977V4.347H.677v23.307h30.646v-6.678h-2v4.678H17.036l5.626-8.678h8.661zM2.677 25.652v-7.678h6.844l2.588-4.375 4.684 12.053H2.677zm18.898-10.676l-4.243 6.545-4.851-12.482-4.101 6.937H2.677V6.347h26.646v8.629h-7.748z"
  }));
};

var _default = SvgMonitor;
exports["default"] = _default;