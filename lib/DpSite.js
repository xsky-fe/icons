"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDpSite = function SvgDpSite(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M12.2 7.8h2.1V4.6c0-.8-.6-1.3-1.3-1.3H4.6c-.8 0-1.3.6-1.3 1.3v8.5c0 .8.6 1.3 1.3 1.3h8.5c.8 0 1.3-.6 1.3-1.3V9.8h-2.1v2.5H5.4V5.4h6.8v2.4zm.9 9.8H4.6c-.8 0-1.3.6-1.3 1.3v8.5c0 .8.6 1.3 1.3 1.3h8.5c.8 0 1.3-.6 1.3-1.3V19c0-.8-.6-1.4-1.3-1.4zm-.9 2.4v6.6H5.4v-6.8h6.8v.2zm10-.2v-2.1H19c-.8 0-1.3.6-1.3 1.3v8.5c0 .8.6 1.3 1.3 1.3h8.5c.8 0 1.3-.6 1.3-1.3V19c0-.8-.6-1.3-1.3-1.3h-3.3v2.1h2.5v6.8h-6.8v-6.8h2.3zm5.5-14.2l-1.6 1.6c.2.4.4 1 .4 1.6 0 1.9-1.6 3.3-3.3 3.3-1.9 0-3.3-1.6-3.3-3.3s1.6-3.3 3.3-3.3c.6 0 1.1.2 1.7.4l1.6-1.6c-.9-.7-2-1-3.2-1-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c-.1-1.2-.4-2.3-1.1-3.2z"
  }));
};

var _default = SvgDpSite;
exports["default"] = _default;