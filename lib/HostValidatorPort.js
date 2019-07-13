"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHostValidatorPort = function SvgHostValidatorPort(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M26.91 25.41H6.67v-16h5.53v2H8.67v12h16.24v-12h-3.53v-2h5.53v16z"
  }), _react["default"].createElement("path", {
    d: "M21.65 11.41h-1.28V7.27h-7.16v4.14h-1.59v-1h-.41V5.27h11.16v5.14h-.72v1zM11.4 15.16h2v4.5h-2v-4.5zm4.39 0h2v4.5h-2v-4.5zm4.39 0h2v4.5h-2v-4.5z"
  }));
};

var _default = SvgHostValidatorPort;
exports["default"] = _default;