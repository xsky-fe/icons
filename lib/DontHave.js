"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDontHave = function SvgDontHave(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M12.4 26.4h-6c-.1 0-.2-.1-.2-.2V3.7c0-.1.1-.2.2-.2h16.7c.1 0 .2.1.2.2v10.5l1.9 1.9V3.7c0-1.1-.9-2.1-2.1-2.1H6.4c-1.1 0-2.1.9-2.1 2.1v22.5c0 1.1.9 2.1 2.1 2.1h8.2l-1.9-1.9h-.3z"
  }), _react["default"].createElement("path", {
    d: "M29.3 30l-4.2-4.2c.7-1 1.2-2.3 1.2-3.7 0-3.5-2.9-6.4-6.4-6.4s-6.4 2.9-6.4 6.4c0 3.5 2.9 6.4 6.4 6.4 1.5 0 2.8-.5 3.9-1.4l3.7 3.7c.2.1.4.2.6.2.3 0 .5-.1.7-.3l.6-.6-.1-.1zM20 26.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c0 2.4-2 4.5-4.5 4.5z"
  }));
};

var _default = SvgDontHave;
exports["default"] = _default;