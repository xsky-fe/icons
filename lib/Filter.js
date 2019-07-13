"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilter = function SvgFilter(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M29.48 24.917h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037 0-.414-.415-1.037-1.037-1.037zm0-5.806h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037 0-.415-.415-1.037-1.037-1.037zm0-5.6h-7.258c-.622 0-1.037.415-1.037 1.037s.415 1.037 1.037 1.037h7.258c.622 0 1.037-.415 1.037-1.037s-.415-1.037-1.037-1.037zM17.659 30.102c-.622 0-1.037-.415-1.037-1.037V12.889c0-.207 0-.622.207-.83l7.051-7.88H5.009l7.051 7.88c.207.207.207.415.207.83v9.747l1.659 1.452c.415.415.622 1.037.207 1.452s-1.037.622-1.452.207l-2.074-1.659c-.207-.207-.415-.415-.415-.83v-9.954l-8.295-9.54c-.414-.414-.414-.829-.414-1.244.208-.415.622-.622 1.037-.622h23.849c.415 0 .83.207 1.037.622s0 .83-.207 1.244l-8.295 9.54v15.761c-.001.622-.623 1.037-1.245 1.037z"
  }));
};

var _default = SvgFilter;
exports["default"] = _default;