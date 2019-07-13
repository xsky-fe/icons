"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFsAccessGroup = function SvgFsAccessGroup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: "1em",
    height: "1em"
  }, props), _react["default"].createElement("path", {
    d: "M27.1 20.639V7.801H3.729v16.43H27.1v-3.592zm-1.852-1.852v3.592H5.581V9.652h19.668v9.135z"
  }), _react["default"].createElement("path", {
    d: "M7.679 3.667v2.817h1.852v-.965h19.667v12.726h-.85v1.852h2.702V3.667zM.95 26.481h28.991v1.852H.95v-1.852z"
  }), _react["default"].createElement("path", {
    d: "M14.867 20.132h.047c1.012-.01 1.958-.368 2.738-.987l1.98 1.951 1.004-1.018-2.004-1.975c.491-.743.751-1.613.742-2.523-.012-1.204-.492-2.33-1.351-3.173-.86-.842-1.988-1.325-3.2-1.287-1.204.012-2.33.492-3.172 1.352s-1.3 1.996-1.287 3.199c.012 1.204.492 2.33 1.351 3.173.849.831 1.967 1.288 3.152 1.288zm-2.196-6.659c.575-.587 1.344-.914 2.165-.923h.032c.811 0 1.573.312 2.152.879.587.575.914 1.344.923 2.165.008.821-.304 1.597-.879 2.184s-1.344.914-2.166.923h-.032c-.811 0-1.573-.311-2.152-.879-.587-.575-.914-1.344-.923-2.166-.007-.82.305-1.596.88-2.183z"
  }), _react["default"].createElement("path", {
    d: "M14.857 14.699l-.013-1.199c-1.172.012-2.116.976-2.104 2.148l1.199-.012c-.005-.511.406-.931.918-.937z"
  }));
};

var _default = SvgFsAccessGroup;
exports["default"] = _default;