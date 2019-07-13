"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHost = function SvgHost(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M26.147 8.067c0 .509-.413.922-.922.922s-.922-.413-.922-.922c0-.509.413-.923.922-.923s.922.413.922.923z"
  }), _react["default"].createElement("path", {
    d: "M1.24 4.1v8.21h29.427V4.1H1.24zm27.49 6.181H3.269V6.038H28.73v4.243zm-2.583 8.394c0 .509-.413.922-.922.922s-.922-.413-.922-.922c0-.509.413-.922.922-.922s.922.413.922.922z"
  }), _react["default"].createElement("path", {
    d: "M1.24 22.826h13.837v3.044H9.542l-2.029 2.029h16.974l-2.029-2.029h-5.443v-4.981H3.27v-4.243h25.461v4.243h-7.657v1.937h9.594v-8.21H1.241z"
  }));
};

var _default = SvgHost;
exports["default"] = _default;