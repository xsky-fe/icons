"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStorageServer = function SvgStorageServer(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M-.236 4.65v9.143h32V4.65h-32zm21.911 5.36H3.705V8.434h17.97v1.576zm3.153.63c-.788 0-1.419-.631-1.419-1.419s.631-1.419 1.419-1.419 1.419.631 1.419 1.419-.631 1.419-1.419 1.419zM-.236 18.049v9.143h32v-9.143h-32zm21.911 5.518H3.705v-1.576h17.97v1.576zm3.153.472c-.788 0-1.419-.631-1.419-1.419s.631-1.419 1.419-1.419 1.419.631 1.419 1.419-.631 1.419-1.419 1.419z"
  }));
};

var _default = SvgStorageServer;
exports["default"] = _default;