"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDeletePolicy = function SvgDeletePolicy(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M10.1 5.1h4.7l2.4 2.4h7.5V5.4h-6.8L16 3.5c-.2-.4-.7-.5-1.2-.5H9.9c-.5 0-.8.1-1.2.5L6.8 5.4H0v2.1h7.8l2.3-2.4zm3.5 18.2v2h-2.1V13.1h2.1v3.6c1.1-3.3 3.9-6.1 7.4-6.9h-.6l-18-.1v16.2c0 1.7 1.4 3.1 3.1 3.1h12.8c-2.2-1.3-3.9-3.3-4.7-5.7zm-5.5 2H6V13.1h2.1v12.2z"
  }), _react["default"].createElement("path", {
    d: "M23.6 11.7c-4.7 0-8.4 3.7-8.4 8.4s3.7 8.4 8.4 8.4 8.4-3.7 8.4-8.4-3.7-8.4-8.4-8.4zm4.9 9.3h-5.9v-6.2h2.1v4.1h3.8V21z"
  }));
};

var _default = SvgDeletePolicy;
exports["default"] = _default;