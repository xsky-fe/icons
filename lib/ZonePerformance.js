"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgZonePerformance = function SvgZonePerformance(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M8.571 10.868H2.857v15.698h5.714V10.868zm10.286-5.434h-5.714v21.132h5.714V5.434zM29.143 0h-5.714v26.566h5.714V0zM0 28.981V32h32v-3.019H0z"
  }));
};

var _default = SvgZonePerformance;
exports["default"] = _default;