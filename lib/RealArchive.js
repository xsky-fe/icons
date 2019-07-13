"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRealArchive = function SvgRealArchive(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M23.5 11.9c-4.4 0-7.9 3.3-8.4 7.5h2.4l-2 2.1-1.9 1.9-3.9-3.9h3c.3-5.6 4.9-10.1 10.5-10.1 1.4 0 2.7.3 4 .8v-2c0-.9-.8-1.7-1.7-1.7H12.8L10.2 4H1.7C.8 4 0 4.7 0 5.6V26c0 .9.8 1.7 1.7 1.7h17.6c1.3.8 2.7 1.2 4.3 1.2 4.7 0 8.5-3.8 8.5-8.5s-3.9-8.5-8.6-8.5zm4.8 10.2h-6.2v-7.5h2.2v5.2h3.9v2.3z"
  }));
};

var _default = SvgRealArchive;
exports["default"] = _default;