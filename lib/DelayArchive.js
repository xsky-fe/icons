"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDelayArchive = function SvgDelayArchive(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M23.3 9.7c1.4 0 2.8.3 4 .8V8.4c0-.9-.8-1.7-1.7-1.7H12.8l-2.6-2.6H1.8C.8 4.2 0 5 0 5.9v20.5c0 .9.8 1.6 1.7 1.6H16c-2.1-1.9-3.5-4.7-3.5-7.8.2-5.8 4.9-10.5 10.8-10.5z"
  }), _react["default"].createElement("path", {
    d: "M23.3 11.8c-4.7 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6 8.6-3.8 8.6-8.6-3.8-8.6-8.6-8.6zm5 9.6h-6V14h2.2v5.3h3.8v2.1z"
  }));
};

var _default = SvgDelayArchive;
exports["default"] = _default;