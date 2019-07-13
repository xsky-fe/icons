"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOsd = function SvgOsd(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M24.247 4.476H7.818L.635 17.088v10.436h24.997v-1.921H2.556V17.92h26.886v9.604h1.923V17.109L24.247 4.476zM3.424 16.001l5.568-9.86h14.043l5.569 9.86H3.424z"
  }), _react["default"].createElement("path", {
    d: "M13.119 20.801h5.762v1.921h-5.762v-1.921z"
  }));
};

var _default = SvgOsd;
exports["default"] = _default;