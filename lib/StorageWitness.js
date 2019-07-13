"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStorageWitness = function SvgStorageWitness(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M23.716 25.849c0 .74.619 1.338 1.376 1.336.759 0 1.374-.604 1.372-1.342-.002-.742-.62-1.342-1.38-1.338-.757.002-1.371.604-1.369 1.344zm-1.798.758l-.004-1.507-17.956.042.005 1.507 17.954-.042zM0 21.41l31.977-.076.023 8.99L.023 30.4 0 21.41zm11.493-4.383l-4.084-4.463c-.409-.448-.409-1.19.062-1.607l.64-.595c.215-.208.504-.319.8-.307s.576.145.775.369l4.082 4.463c.409.448.409 1.19-.059 1.607l-.642.595c-.456.414-1.151.387-1.575-.062zm5.453-13.473l4.082 4.463c.409.448.409 1.19-.059 1.607l-.642.595c-.439.417-1.166.417-1.575-.062l-4.08-4.461c-.409-.448-.409-1.19.057-1.607l.642-.595c.437-.417 1.138-.384 1.575.06zm5.465 14.289l.027 1.306-1.31-.238s-.524-.089-.933-.504l-3.716-4-.757.714-.96-1.101-.556.506-4.139-4.521 4.169-3.953 4.171 4.517-.612.568.96 1.099-.64.595 3.888 4.085c.409.421.409.925.409.925v.002z"
  }));
};

var _default = SvgStorageWitness;
exports["default"] = _default;