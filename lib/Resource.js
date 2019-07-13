"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgResource = function SvgResource(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31.985 20.229c-.829-1.386-.816-1.412-.816-1.412s-2.867.804-3.402-1.944h-1.661s-.459 2.751-3.389 1.937c-.848 1.412-.875 1.456-.877 1.458.002.001 2.294 1.603 0 3.777l.892 1.464s2.53-1.093 3.359 1.892h1.683s.528-2.742 3.376-1.93c.811-1.387.824-1.398.824-1.398s-2.151-1.856.011-3.844zM26.9 24.075c-1.071 0-1.938-.87-1.938-1.939s.867-1.939 1.938-1.939c1.069 0 1.938.871 1.938 1.939.001 1.069-.868 1.939-1.938 1.939z"
  }), _react["default"].createElement("path", {
    d: "M20.068 23.96H2.643V8.607h22.37v6.706c.609-.168 1.237-.29 1.9-.29.253 0 .493.049.742.075V5.965H0v20.64h21.423a7.0186 7.0186 0 0 1-1.355-2.645z"
  }), _react["default"].createElement("path", {
    d: "M5.37 10.974h2.564v2.148H5.37v-2.148zm0 8.425h2.564v2.146H5.37v-2.146zm18.959-3.809H2.643v1.39h19.458c.645-.595 1.395-1.07 2.228-1.39z"
  }));
};

var _default = SvgResource;
exports["default"] = _default;