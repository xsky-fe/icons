"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLight = function SvgLight(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M17.309 5.967zm-1.686 0zm4.847 15.342h-9.015l.01-.51c.012-.627-.764-1.494-1.035-1.748l-.019-.017a9.4695 9.4695 0 0 1-.62-.579l-.252-.27c-1.407-1.576-2.195-3.616-2.195-5.759 0-4.772 3.883-8.656 8.656-8.656s8.656 3.884 8.656 8.656c0 2.142-.787 4.182-2.195 5.758h.002l-.014.013c-.264.295-.55.574-.856.834l-.013.013c-.675.653-.612 1.719-.611 1.729l.035.533-.534.003zm-8.067-1h7.583c.033-.309.111-.715.299-1.124l.622-.884c1.747-1.461 2.749-3.602 2.749-5.874 0-4.222-3.435-7.656-7.656-7.656s-7.656 3.435-7.656 7.656c0 2.272 1.002 4.413 2.75 5.874l.764.884c.227.325.443.714.545 1.124zm-.809 1.775h9.146v.75h-9.146v-.75zm0 1.478h9.146v.75h-9.146v-.75zm0 1.454v1.078s1.453 2.172 3.75 2.516h1.359s2.453-.125 3.953-2.516v-1.078z"
  }), _react["default"].createElement("path", {
    d: "M10.029 13.571a.4584.4584 0 0 1-.459-.459c0-3.849 3.131-6.981 6.981-6.981.254 0 .459.205.459.459s-.205.459-.459.459c-3.344 0-6.062 2.721-6.062 6.063a.4605.4605 0 0 1-.46.459z"
  }));
};

var _default = SvgLight;
exports["default"] = _default;