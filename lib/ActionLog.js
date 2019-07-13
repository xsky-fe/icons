"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgActionLog = function SvgActionLog(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M22.052 29.305c-4.468 0-8.101-3.634-8.101-8.101s3.634-8.101 8.101-8.101 8.101 3.634 8.101 8.101-3.634 8.101-8.101 8.101zm0-14.257c-3.394 0-6.155 2.762-6.155 6.155s2.762 6.155 6.155 6.155 6.155-2.762 6.155-6.155-2.762-6.155-6.155-6.155zM6.033 8.494h12.199v1.947H6.033V8.494z"
  }), _react["default"].createElement("path", {
    d: "M23.76 23.978a.9722.9722 0 0 1-.707-.304l-1.974-2.082v-3.977c0-.538.435-.974.974-.974s.974.435.974.974v3.201l1.44 1.52c.37.39.353 1.006-.037 1.376a.965.965 0 0 1-.669.267zm-8.901-10.09H6.034v1.947h7.232c.443-.72.978-1.374 1.593-1.947zm-2.864 5.393H6.034v1.947h5.863c-.009-.167-.025-.332-.025-.503-.001-.492.049-.973.123-1.444z"
  }), _react["default"].createElement("path", {
    d: "M12.792 25.517h-9V4.643h17.365v6.379c.296-.026.593-.046.896-.046.355 0 .706.019 1.052.054V2.696H1.847v24.768h12.137c-.467-.6-.866-1.251-1.191-1.946z"
  }));
};

var _default = SvgActionLog;
exports["default"] = _default;