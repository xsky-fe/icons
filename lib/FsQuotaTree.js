"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFsQuotaTree = function SvgFsQuotaTree(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 28 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M24.512 28.266H2.89v-25h15.509v1.763H4.654v21.473h18.094V9.215h1.764v19.051zm-.23-20.377h-4.74V3.266l4.74 4.623zM12.49 9.761h7.568v1.371H12.49v.756H9.747v-.756H7.272V9.761h2.475V8.95h2.743v.811zm.038 11.373h7.57v1.371h-7.57v.669H9.785v-.669H7.312v-1.371h2.473v-.898h2.743v.898zm4.879-5.739h2.671v1.371h-2.671v.713h-2.743v-.713H7.292v-1.371h7.372v-.854h2.743v.854z"
  }));
};

var _default = SvgFsQuotaTree;
exports["default"] = _default;