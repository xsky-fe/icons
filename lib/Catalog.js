"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCatalog = function SvgCatalog(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M26.124 7.661h-5.002V2.782zM8.774 9.178h12.349v1.865H8.774V9.178zm0 5.568h12.349v1.865H8.774v-1.865zm0 5.57h7.935v1.865H8.774v-1.865zm19.686 1.337c-.85-1.417-.837-1.444-.837-1.444s-2.935.823-3.481-1.99h-1.7s-.469 2.818-3.467 1.983c-.866 1.446-.896 1.491-.896 1.492 0 0 2.347 1.64 0 3.867l.91 1.498s2.592-1.117 3.441 1.936h1.72s.539-2.806 3.455-1.977c.829-1.417.844-1.43.844-1.43s-2.204-1.898.01-3.934zm-5.204 4.437c-1.372 0-2.484-1.112-2.484-2.484s1.112-2.484 2.484-2.484c1.372 0 2.484 1.112 2.484 2.484-.001 1.372-1.112 2.484-2.484 2.484z"
  }), _react["default"].createElement("path", {
    d: "M17.508 27.133H5.4V4.475h14.505V2.613H3.54v26.381h15.303c-.546-.536-.995-1.167-1.335-1.862zm8.849-9.192V8.892h-1.86v8.53c.653.085 1.277.262 1.86.519z"
  }));
};

var _default = SvgCatalog;
exports["default"] = _default;