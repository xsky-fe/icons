"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgObjectStorageBucket = function SvgObjectStorageBucket(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M30.297 12.536l.004-4.648-.017-.002c-.022-3.32-8.555-4.527-14.294-4.527-5.685 0-14.102 1.189-14.274 4.443h-.003v.03c-.001.024-.012.045-.012.068s.011.044.012.067l-.014 16.091c-.008 3.331 8.535 4.564 14.28 4.583h.131c5.741 0 14.163-1.189 14.177-4.498l.008-7.871-1.871-.002-.007 7.869c-.004.683-4.227 2.629-12.274 2.629h-.158C7.834 26.743 3.568 24.746 3.57 24.06l.012-13.786c2.836 1.553 8.323 2.17 12.409 2.17 4.097 0 9.605-.62 12.437-2.182l-.002 2.272 1.87.001zM15.991 5.23c7.971 0 12.222 1.893 12.409 2.619-.392.858-3.105 1.787-5.495 2.119-6.076 1.03-11.33.341-11.404.331-6.678-.751-7.777-2.202-7.914-2.439.145-.716 4.397-2.629 12.404-2.629z"
  }));
};

var _default = SvgObjectStorageBucket;
exports["default"] = _default;