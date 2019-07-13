"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlideLeft = function SvgSlideLeft(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M1.999 2.683h28.002v2.236H1.999V2.683zm0 24.397h28.002v2.236H1.999V27.08zm11.572-16.078h16.43v2.236h-16.43v-2.236zm0 8.078h16.43v2.236h-16.43V19.08zm-4.334 3.803l-7.238-7.239 7.238-7.237 1.414 1.414-5.824 5.823 5.824 5.825z"
  }));
};

var _default = SvgSlideLeft;
exports["default"] = _default;