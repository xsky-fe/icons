"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFsClient = function SvgFsClient(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M9.306 8.344h1.997v2.069H9.306V8.344zm0 4.037h13.432v2.069H9.306v-2.069zm3.422-4.037h10.009v2.069H12.728V8.344zm-3.422 8.212h13.432v2.069H9.306v-2.069zM.001 26.11H32v2.186H.001V26.11z"
  }), _react["default"].createElement("path", {
    d: "M29.789 20.938V3.704H2.253v19.423l27.536-.003v-2.186zm-2.186 0l-23.163.003V5.889h23.164v15.048z"
  }));
};

var _default = SvgFsClient;
exports["default"] = _default;