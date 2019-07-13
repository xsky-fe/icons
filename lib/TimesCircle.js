"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTimesCircle = function SvgTimesCircle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.016.075C7.222.075.091 7.206.091 16c0 8.795 7.13 15.925 15.925 15.925S31.942 24.796 31.942 16c0-8.794-7.13-15.925-15.926-15.925zm7.701 20.846c.773.773.773 2.039 0 2.812s-2.039.773-2.812 0l-4.921-4.921-4.921 4.921c-.773.773-2.039.773-2.812 0s-.773-2.039 0-2.812L13.171 16 8.25 11.078c-.773-.773-.773-2.039 0-2.812s2.039-.773 2.812 0l4.921 4.921 4.921-4.921c.773-.773 2.039-.773 2.812 0s.773 2.039 0 2.812L18.796 16l4.921 4.921z"
  }));
};

var _default = SvgTimesCircle;
exports["default"] = _default;