"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgStorageClient = function SvgStorageClient(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M7.645 13.793L9.694 16c1.576-1.419 3.626-2.207 5.675-2.207 2.207 0 4.099.788 5.675 2.207l2.207-2.207c-2.207-2.049-4.887-3.153-7.882-3.153-2.837 0-5.675 1.103-7.724 3.153z"
  }), _react["default"].createElement("path", {
    d: "M5.911 11.429c2.522-2.522 5.99-3.941 9.773-3.941 3.626 0 7.094 1.419 9.773 4.099.158.158.158.158.315.158l2.049-2.049c0-.158-.158-.315-.315-.473-3.31-3.31-7.409-4.887-11.823-4.887-4.571-.158-8.67 1.576-11.823 4.729-.158.158-.315.315-.315.631l2.049 2.049s.158 0 .315-.315zm-6.147 7.093v9.143h32v-9.143h-32zm9.773 6.148H6.069v-2.365h.788v-.946h2.049v.946h.788v2.365h-.158zm5.517 0h-3.468v-2.365h.788v-.946h2.049v.946h.788v2.365h-.158zm9.143-.158c-.788 0-1.419-.631-1.419-1.419s.631-1.419 1.419-1.419 1.419.631 1.419 1.419-.631 1.419-1.419 1.419z"
  }));
};

var _default = SvgStorageClient;
exports["default"] = _default;