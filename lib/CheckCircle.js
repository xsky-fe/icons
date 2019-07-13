"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheckCircle = function SvgCheckCircle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.016 32.008C7.176 32.008.008 24.841.008 16S7.176-.008 16.016-.008C24.857-.008 32.025 7.16 32.025 16s-7.167 16.008-16.009 16.008zm8.937-21.619L23.36 8.796a.7502.7502 0 0 0-1.061 0l-9.551 9.551-4.543-4.576c-.294-.293-.769-.293-1.062 0L5.55 15.364a.7502.7502 0 0 0 0 1.061l5.053 5.089c.007.008.009.018.015.025l1.094 1.093.263.265.001-.001.235.236c.294.293.769.293 1.062 0l11.68-11.68c.293-.294.293-.77 0-1.063z"
  }));
};

var _default = SvgCheckCircle;
exports["default"] = _default;