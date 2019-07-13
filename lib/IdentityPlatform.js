"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIdentityPlatform = function SvgIdentityPlatform(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M32 26.5H2v-21h27.9v17.6h2V3.4H0v25.2h32z"
  }), _react["default"].createElement("path", {
    d: "M6 21.5h1.7c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5h1.7c0-1.9-1-3.5-2.6-4.4.8-.7 1.4-1.8 1.4-3 0-2.2-1.8-3.9-3.9-3.9s-4 1.8-4 3.9c0 1.2.5 2.2 1.4 3C7 17.9 6 19.6 6 21.5zm2.9-7.4c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2zM19 11h6.4v1.7H19V11zm0 4.4h6.4v1.7H19v-1.7zm0 4.4h6.4v1.7H19v-1.7z"
  }));
};

var _default = SvgIdentityPlatform;
exports["default"] = _default;