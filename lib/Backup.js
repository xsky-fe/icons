"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBackup = function SvgBackup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M20.607 30.25H2.634V9.465h17.974l-.001 20.785zM4.686 28.197h13.869v-16.68H4.686v16.68z"
  }), _react["default"].createElement("path", {
    d: "M29.365 22.536h-4.889v-2.053h2.837V3.802H13.446v1.803h-2.053V1.749h17.972z"
  }));
};

var _default = SvgBackup;
exports["default"] = _default;