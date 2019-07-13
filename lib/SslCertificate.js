"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSslCertificate = function SvgSslCertificate(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M28.221 17.239v-2.545c0-1.999-1.626-3.625-3.624-3.625-1.999 0-3.625 1.626-3.625 3.625v2.545h-2.134v7.513l-15.061.011V7.235h22.177v2.712c.641.206 1.22.54 1.699.991V5.537H2.077v20.927l27.845-.001v-9.224h-1.701zm-5.739-2.545c0-1.166.949-2.115 2.115-2.115s2.114.949 2.114 2.115v2.545h-4.229v-2.545zm5.741 10.069h-7.685v-5.825h7.685v5.825z"
  }), _react["default"].createElement("path", {
    d: "M24.284 22.347v1.168c0 .201.204.365.457.365.252 0 .457-.163.457-.365v-1.168c.375-.174.639-.548.639-.989 0-.605-.49-1.095-1.095-1.095s-1.095.49-1.095 1.095c-.001.441.262.815.637.989zM6.973 11.805h12.142v1.699H6.973v-1.699zm0 6.247h6.411v1.699H6.973v-1.699z"
  }));
};

var _default = SvgSslCertificate;
exports["default"] = _default;