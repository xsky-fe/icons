"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M16 2.087l3.279 9.938.099.398H30.21l-8.447 6.161-.298.199.099.398 3.18 9.938-8.447-6.162-.298-.199-.298.199-8.447 6.162 3.18-9.938.099-.398-.298-.199-8.447-6.162H12.62l.099-.398 3.28-9.938z"
  }));
};

var _default = SvgStar;
exports["default"] = _default;