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
var SvgArrowDown = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M23.6 18.5L22 20l-1.2 1.3-3.7 3.7V9h-2.2v16l-6.5-6.5L6.8 20l9.2 9.2 9.2-9.2zM14.9 4.7h2.2v2.1h-2.2V4.7z" }))); };
exports.default = SvgArrowDown;
