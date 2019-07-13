"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgResoureRestore = function SvgResoureRestore(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16.3 12.3l-4-2.4-.1 1.3h-.3c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 4.9-4.3 5.1-4.8c.5-1.2 2-3.6 3.3-3.6 1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1c-.7 0-1.3-.2-2.1-.7L17 20.4c1 .8 2.1 1.2 3.3 1.2 2.9 0 5.2-2.3 5.2-5.2s-2.3-5.2-5.2-5.2-4.9 4.3-5.1 4.8c-.6 1.4-2.1 3.6-3.3 3.6-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1h.3l-.1 1.3 4.2-2.4z"
  }), _react["default"].createElement("path", {
    d: "M2.2 3v10.9h4c.3-.8.9-1.5 1.6-2.1H4.3V5.1h23.6V12h-3.3c.7.6 1.3 1.3 1.6 2.1h3.6v-11H2.2zm23.2 17.2h2.3v6.9H4.2v-6.9h2.7c-.5-.6-.9-1.3-1-2.1H2.2V29h27.6V18.1h-3.4c-.2.8-.5 1.4-1 2.1z"
  }));
};

var _default = SvgResoureRestore;
exports["default"] = _default;