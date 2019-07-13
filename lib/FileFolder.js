"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFileFolder = function SvgFileFolder(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M21.196 2.906V7.79h4.988zM8.726 9.349h12.367v1.871H8.726V9.349zm0 5.612h12.367v1.871H8.726v-1.871zm0 5.612h8.002v1.871H8.726v-1.871zm19.849 1.351l-.831-1.455s-2.91.831-3.533-1.974h-1.663s-.52 2.806-3.533 1.974c-.831 1.455-.935 1.455-.935 1.455s2.39 1.663 0 3.845l.935 1.455s2.598-1.143 3.429 1.974h1.767s.52-2.806 3.429-1.974l.831-1.455s-2.182-1.871.104-3.845zm-5.301 4.468c-1.351 0-2.494-1.143-2.494-2.494s1.143-2.494 2.494-2.494 2.494 1.143 2.494 2.494c0 1.351-1.143 2.494-2.494 2.494z"
  }), _react["default"].createElement("path", {
    d: "M5.296 27.431V4.568h14.549V2.697H3.425v26.5h15.38c-.52-.52-1.039-1.143-1.351-1.871H5.295zm19.226-9.768c.624.104 1.247.312 1.871.52V9.038h-1.871v8.625z"
  }));
};

var _default = SvgFileFolder;
exports["default"] = _default;