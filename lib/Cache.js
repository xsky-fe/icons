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
var SvgCache = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 17.9L0 10.1l16-7.6 16 7.7-16 7.7zM5.1 10.1L16 15.4l10.9-5.2L16 5 5.1 10.1z" }),
    react_1.default.createElement("path", { d: "M29.4 14.5L16 21 2.6 14.5.1 15.7 16 23.5l16-7.7z" }),
    react_1.default.createElement("path", { d: "M29.4 19.9L16 26.3 2.6 19.8.1 21 16 28.8l16-7.7z" }))); };
exports.default = SvgCache;
