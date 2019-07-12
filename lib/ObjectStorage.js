"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SvgObjectStorage = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M28.6 9l-.5-.5-11.4-6-.3-.1c-.3-.1-.6-.1-.9 0L3.9 8.5l-.5.6v.2c0 .1-.1.2-.1.3v12.7c0 .6.3 1 .8 1.3l11.2 5.9.3.1c.1 0 .2.1.4.1.1 0 .3 0 .4-.1l11.5-6c.5-.2.8-.7.8-1.3L28.6 9zM16 4.4l9.6 5.1-9.6 5.3-9.7-5.3L16 4.4zM5.4 11.3l9.6 5.3V27l-9.6-5V11.3zM17 27V16.6l9.6-5.4V22L17 27z" }))); };
exports.default = SvgObjectStorage;
