"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSlideRight = function SvgSlideRight(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M1.999 2.684h28.002V4.92H1.999V2.684zm0 24.396h28.002v2.236H1.999V27.08zM13.57 11.003h16.431v2.236H13.57v-2.236zm0 8.077h16.431v2.236H13.57V19.08zm-9.342 3.658l-1.415-1.414 5.67-5.667-5.67-5.67 1.415-1.414 7.084 7.084z"
  }));
};

var _default = SvgSlideRight;
exports["default"] = _default;