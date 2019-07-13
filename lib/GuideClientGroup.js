"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGuideClientGroup = function SvgGuideClientGroup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M2.6 25.2h9.9v2.2H9.2v1.8h8.1v-1.8h-3.2v-2.2h9.7V9H2.6v16.2zm1.9-14.4H22v12.6H4.5V10.8z"
  }), _react["default"].createElement("path", {
    d: "M6.9 3.9V7h1.6V5.8h19.7v12.5h-2.4v1.8H30V3.9z"
  }));
};

var _default = SvgGuideClientGroup;
exports["default"] = _default;