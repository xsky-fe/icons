"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVolume = function SvgVolume(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 2C9.226 2 1.368 3.535 1.368 7.961v16.077c0 4.335 7.858 5.961 14.632 5.961s14.632-1.535 14.632-5.961V7.961C30.632 3.535 22.774 2 16 2zm0 1.897c7.135 0 12.735 1.806 12.735 4.065s-5.6 4.065-12.735 4.065S3.265 10.221 3.265 7.962 8.865 3.897 16 3.897zm0 24.206c-7.135 0-12.735-1.806-12.735-4.065v-4.877c2.71 1.987 8.039 2.71 12.735 2.71s10.026-.723 12.735-2.71v4.877c0 2.258-5.6 4.065-12.735 4.065zm0-8.038c-7.135 0-12.735-1.806-12.735-4.065v-4.877c2.71 1.987 8.039 2.71 12.735 2.71s10.026-.723 12.735-2.71V16c0 2.258-5.6 4.065-12.735 4.065z"
  }));
};

var _default = SvgVolume;
exports["default"] = _default;