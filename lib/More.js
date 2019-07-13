"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMore = function SvgMore(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M26.244 2.701H5.756c-1.687 0-3.055 1.368-3.055 3.055v20.488c0 1.687 1.368 3.055 3.055 3.055h20.488c1.687 0 3.055-1.368 3.055-3.055V5.756c0-1.687-1.368-3.055-3.055-3.055zM9.889 17.523c-.841 0-1.523-.682-1.523-1.523s.682-1.523 1.523-1.523 1.523.682 1.523 1.523-.682 1.523-1.523 1.523zm6.111 0c-.841 0-1.523-.682-1.523-1.523s.682-1.523 1.523-1.523 1.523.682 1.523 1.523-.682 1.523-1.523 1.523zm6.111 0c-.841 0-1.523-.682-1.523-1.523s.682-1.523 1.523-1.523 1.523.682 1.523 1.523-.682 1.523-1.523 1.523z"
  }));
};

var _default = SvgMore;
exports["default"] = _default;