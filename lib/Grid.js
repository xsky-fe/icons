"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGrid = function SvgGrid(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M14.029 29.102H2.897V17.973h11.132v11.129zm-9.044-2.088h6.955v-6.953H4.985v6.953zm24.119 2.088H17.971V17.973h11.133v4.845h-2.088v-2.757h-6.957v6.953h9.045v.15zM14.029 14.029H2.897V2.898h11.132v11.131zm-9.044-2.088h6.955V4.986H4.985v6.955zm24.119 2.088H17.971V2.898h11.133v11.131zm-9.045-2.088h6.957V4.986h-6.957v6.955z"
  }));
};

var _default = SvgGrid;
exports["default"] = _default;