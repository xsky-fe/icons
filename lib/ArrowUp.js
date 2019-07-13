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
var SvgArrowUp = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M8.4 15.5l1.6-1.6 1.2-1.3.7-.7 3-2.9v15.9h2.2V9l6.5 6.5 1.6-1.6L16 4.7l-5.6 5.7-.7.7-1.3 1.2-1.6 1.6zm6.5 11.6h2.2v2.1h-2.2v-2.1z" }))); };
exports.default = SvgArrowUp;
