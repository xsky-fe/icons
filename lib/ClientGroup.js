"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClientGroup = function SvgClientGroup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M.1 27.9h28.6V30H.1v-2.1zm31.8-14.8V2H7.6v5.4H2.3V25h24.3v-5.3h5.3v-2.1h-5.3V7.5H9.7V4.3h20.1v8.9h2.1zm-7.4-3.6v13.4H4.4V9.5h20.1z"
  }));
};

var _default = SvgClientGroup;
exports["default"] = _default;