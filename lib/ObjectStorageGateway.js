"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgObjectStorageGateway = function SvgObjectStorageGateway(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M30.735 22.539v-9.762H1.264v9.762h13.262v2.579H8.079l-2.118 1.934h18.972l-2.118-1.934H16.46v-2.579h14.275zM3.199 14.803h25.603v5.894H3.199v-5.894zm7.367-5.066l1.381 1.381c1.013-.921 2.302-1.381 3.592-1.381 1.381 0 2.671.46 3.592 1.381l1.381-1.381c-1.381-1.289-3.131-1.934-4.973-1.934-1.842-.092-3.684.645-4.973 1.934z"
  }), _react["default"].createElement("path", {
    d: "M9.461 8.264c1.658-1.658 3.776-2.579 6.171-2.579 2.21 0 4.513.921 6.171 2.671.092.092.092.092.184.092l1.289-1.289c0-.092-.092-.184-.184-.276-2.026-2.026-4.697-3.131-7.46-3.131-2.855-.092-5.434 1.105-7.552 3.039-.092.092-.184.184-.184.368l1.289 1.289c.092-.092.184-.092.276-.184zm-3.96 8.473h1.75v1.75h-1.75v-1.75zm3.039 0h1.75v1.75H8.54v-1.75z"
  }));
};

var _default = SvgObjectStorageGateway;
exports["default"] = _default;