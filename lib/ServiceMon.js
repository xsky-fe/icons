"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgServiceMon = function SvgServiceMon(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M31.688 23.169h-3.429v-16c0-.416-.312-.727-.727-.727H4.675c-.416 0-.727.312-.727.727v16H.312c-.208 0-.312.104-.312.312v.935c0 .208.104.312.312.312h31.376c.208 0 .312-.104.312-.312v-.935c0-.208-.104-.312-.312-.312zM5.403 8.312c0-.208.104-.312.312-.312H26.39c.208 0 .312.104.312.312v13.299c0 .208-.104.312-.312.312H5.715c-.208 0-.312-.104-.312-.312V8.312z"
  }), _react["default"].createElement("path", {
    d: "M14.13 13.922l2.805 3.013 3.429-4.364.831.727-.208-2.078-2.078.208.935.727-3.013 3.74-2.805-3.117-2.078 3.429.519.416zm-2.701 3.117h10.805v.623H11.429v-.623z"
  }));
};

var _default = SvgServiceMon;
exports["default"] = _default;