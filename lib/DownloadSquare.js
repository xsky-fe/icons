"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDownloadSquare = function SvgDownloadSquare(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M22.9 16.295h-4.49v-6.207h-4.668v6.224H9.311L13.699 21 12.4 22.217l-7.189-7.682h6.753V8.31h8.224v6.207h6.841L16.057 26.121l-1.192-1.271z"
  }), _react["default"].createElement("path", {
    d: "M29.113 29.406H2.887V16.621h2v10.785h22.226V16.621h2zm0-16.426h-2V4.594H4.887v8.386h-2V2.594h26.226z"
  }));
};

var _default = SvgDownloadSquare;
exports["default"] = _default;