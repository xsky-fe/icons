"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWorkgroup = function SvgWorkgroup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M27.6 18.9c.1-.6.1-1.1.1-1.7 0-4.4-2.5-8.3-6.4-10.3l-.8 1.4c3.3 1.8 5.5 5.2 5.5 8.9 0 .4 0 .7-.1 1.1h-.4c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4 3.4-1.5 3.4-3.4c.2-1.2-.4-2.2-1.3-2.8zm-1.9 4.5c-1 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7s1.7.7 1.7 1.7-.8 1.7-1.7 1.7zM11.3 8.1c.6.9 1.7 1.6 2.9 1.6 1.9 0 3.4-1.5 3.4-3.4C17.6 4.5 16 3 14.1 3s-3.4 1.5-3.4 3.4v.3c-4.2 1.8-6.9 6-6.9 10.6h1.7c-.1-4 2.2-7.5 5.8-9.2zm2.8-3.5c1 0 1.7.7 1.7 1.7 0 .9-.8 1.7-1.7 1.7s-1.7-.7-1.7-1.7.8-1.7 1.7-1.7zm1.7 22.7c-2.3 0-4.6-.7-6.4-2.1.3-.5.5-1 .5-1.7 0-1.9-1.5-3.4-3.4-3.4s-3.4 1.5-3.4 3.4 1.5 3.4 3.4 3.4c.7 0 1.2-.2 1.8-.5 2.1 1.7 4.8 2.6 7.5 2.6 2.2 0 4.4-.6 6.3-1.8l-.9-1.4c-1.6 1.1-3.5 1.5-5.4 1.5zm-9.5-2.1c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.7 1.7 1.7s-.7 1.7-1.7 1.7z"
  }), _react["default"].createElement("path", {
    d: "M12.5 15.4c0 1 .5 2 1.2 2.6-1.4.8-2.3 2.2-2.3 3.9H13c0-1.7 1.4-3 3-3 1.7 0 3 1.4 3 3h1.5c0-1.7-.9-3.1-2.3-3.9.7-.6 1.2-1.6 1.2-2.6 0-1.9-1.6-3.5-3.5-3.5s-3.4 1.6-3.4 3.5zm5.5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
  }));
};

var _default = SvgWorkgroup;
exports["default"] = _default;