"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCycle = function SvgCycle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M12.244 2.922L11.648 1C5.214 2.898.5 8.88.5 15.958c0 4.766 2.16 9.012 5.52 11.874L1.854 32h10V22l-4.412 4.412C4.438 23.92 2.5 20.172 2.5 15.958c0-6.176 4.124-11.394 9.744-13.036zm13.702 1.134L30 0H20v10l4.518-4.518c3.028 2.49 4.982 6.246 4.982 10.478 0 6.25-4.226 11.516-9.952 13.09l.484 1.952c6.596-1.794 11.466-7.848 11.466-15.042.002-4.786-2.17-9.046-5.552-11.904z"
  }));
};

var _default = SvgCycle;
exports["default"] = _default;