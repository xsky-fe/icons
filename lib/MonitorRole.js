"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMonitorRole = function SvgMonitorRole(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M.608 17.418v11.949c0 .81.81 1.62 1.62 1.62h28.76c.81 0 1.62-.81 1.62-1.62V17.418h-32zm23.088 7.898H5.873v-1.823h17.62v1.823zm3.443 0c-.608 0-1.013-.405-1.013-1.013s.405-1.013 1.013-1.013 1.013.405 1.013 1.013c0 .608-.405 1.013-1.013 1.013zM18.025 15.19h14.582V8.912H21.468zm-6.683-3.241H.608v3.241h16.405L14.38 6.076z"
  }), _react["default"].createElement("path", {
    d: "M14.582 1.62H2.228c-.81 0-1.62.81-1.62 1.62v6.684h9.519l4.456-8.304zm5.671 5.266h12.152V3.24c0-.81-.81-1.62-1.62-1.62H15.19l2.633 9.316 2.43-4.051z"
  }));
};

var _default = SvgMonitorRole;
exports["default"] = _default;