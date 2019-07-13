"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWarning = function SvgWarning(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.016.075C7.222.075.091 7.206.091 16c0 8.795 7.13 15.925 15.925 15.925S31.942 24.796 31.942 16c0-8.794-7.13-15.925-15.926-15.925zM14 8.092c0-1.092.908-1.978 2-1.978S18 7 18 8.091v9.885c0 1.092-.908 1.977-2 1.977s-2-.886-2-1.977V8.092zm1.998 17.793c-1.092 0-1.977-.885-1.977-1.977s.885-1.977 1.977-1.977 1.977.885 1.977 1.977-.885 1.977-1.977 1.977z"
  }));
};

var _default = SvgWarning;
exports["default"] = _default;