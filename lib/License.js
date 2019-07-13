"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLicense = function SvgLicense(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M2.319 12.19h1.147V9.118h-.994v-.799c.581-.11.958-.255 1.336-.487h.951v4.358h.973v1.046H2.319V12.19zm-.261 14.423c1.351-1.229 2.259-2.209 2.259-2.994 0-.492-.276-.762-.705-.762-.371 0-.661.246-.915.522l-.705-.696c.53-.562 1.024-.836 1.794-.836 1.045 0 1.771.668 1.771 1.698 0 .931-.798 1.955-1.626 2.789.269-.034.64-.07.879-.07h.995v1.09H2.058v-.741zm27.95 1.807H7.943v-2h20.065v-6.592H9.998v2.662h-2v-4.662h22.01zm0-14.249H7.943v-2h20.065V5.58H9.998v2.661h-2V3.58h22.01z"
  }));
};

var _default = SvgLicense;
exports["default"] = _default;