"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMigration = function SvgMigration(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M8.799 0C5.458 0 1.581.877 1.581 3.406v9.186C1.581 15.07 5.458 16 8.799 16c3.342 0 7.219-.88 7.219-3.408V3.408C16.018.878 12.141 0 8.797 0zm-.011 1.344c3.123 0 5.938.773 5.938 2.064 0 1.29-3.12 1.978-5.926 1.978s-5.947-.688-5.947-1.979c0-1.29 2.816-2.064 5.936-2.064zm.011 12.994c-3.52 0-5.966-1.032-5.966-2.323v-1.757c1.338 1.136 3.651 1.549 5.968 1.549 2.315 0 4.56-.414 5.896-1.549v1.757c0 1.291-2.378 2.323-5.898 2.323zm-.025-4.197c-3.52 0-5.957-1.229-5.957-2.141V5.629c1.336 1.136 4.659 1.339 5.957 1.339 1.296 0 4.621-.205 5.957-1.339V8c0 .912-2.437 2.141-5.957 2.141zM23.199 16c-3.341 0-7.218.877-7.218 3.406v9.187c0 2.477 3.877 3.406 7.218 3.406 3.342 0 7.219-.878 7.219-3.408v-9.184c0-2.528-3.877-3.406-7.219-3.406zm-.011 1.344c3.123 0 5.938.771 5.938 2.064 0 1.29-3.12 1.978-5.926 1.978s-5.947-.688-5.947-1.979c0-1.29 2.816-2.064 5.936-2.064zm.011 12.994c-3.52 0-5.966-1.032-5.966-2.323v-1.757c1.338 1.136 3.651 1.549 5.968 1.549 2.315 0 4.56-.414 5.896-1.549v1.757c0 1.291-2.378 2.323-5.898 2.323zm-.025-4.197c-3.52 0-5.957-1.227-5.957-2.141v-2.371c1.336 1.136 4.502 1.376 5.957 1.376 1.453 0 4.621-.24 5.957-1.376V24c0 .912-2.437 2.141-5.957 2.141zM5.967 18.816l1.541-.432c.844 2.918 3.077 5.176 5.917 6.041l.063.016-.451 1.536c-3.431-1.041-6.07-3.711-7.049-7.086l-.018-.074zm20.117-5.296l-1.555.379c-.812-3.21-3.306-5.683-6.466-6.453l-.06-.012.368-1.558c3.807.925 6.753 3.849 7.697 7.571l.015.072z"
  }));
};

var _default = SvgMigration;
exports["default"] = _default;