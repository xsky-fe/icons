"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInfo = function SvgInfo(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 31.963C7.182 31.963.008 24.789.008 15.971S7.182-.021 16-.021c8.818 0 15.992 7.174 15.992 15.992 0 3.414-1.062 6.674-3.07 9.427l-2.376-1.736c1.638-2.244 2.503-4.904 2.503-7.69 0-7.195-5.853-13.049-13.048-13.049S2.952 8.777 2.952 15.972C2.952 23.167 8.806 29.02 16 29.02c2.82 0 5.501-.884 7.76-2.559l1.752 2.366c-2.769 2.051-6.057 3.136-9.512 3.136z"
  }), _react["default"].createElement("path", {
    d: "M14.529 8.907h2.942v2.737h-2.942V8.907zm0 4.98h2.942v10.541h-2.942V13.887z"
  }));
};

var _default = SvgInfo;
exports["default"] = _default;