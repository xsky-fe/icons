"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEditSquare = function SvgEditSquare(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M22.714 11.598L20.75 9.549c-.109-.115-.338-.093-.479.05l-10.035 9.887-2.687 4.83c-.081.14-.074.297.021.388.055.053.136.078.226.067.057-.006.116-.028.169-.062l4.762-2.786.064-.052 9.864-9.803c.147-.144.173-.349.059-.47zM12.4 21.417L10.036 22.9c-.49-.115-.643-.502-.684-.773l1.366-2.279-.005.01 1.631 1.613.056-.054z"
  }), _react["default"].createElement("path", {
    d: "M29.443 29.443H2.75v-2h24.693V4.556H4.557v18.88h-2V2.556h26.886z"
  }));
};

var _default = SvgEditSquare;
exports["default"] = _default;