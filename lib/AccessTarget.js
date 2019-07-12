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
var SvgAccessTarget = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M32 17.1v-2.3h-3.4c-.5-6-5.3-10.8-11.2-11.4V0h-2.3v3.3C8.9 3.8 4 8.6 3.4 14.8H.1v2.3h3.3c.6 6.1 5.5 11 11.7 11.5V32h2.3v-3.4c4.3-.5 8-3.1 9.9-7l-2.1-1c-1.6 3.1-4.6 5.2-8.1 5.6-.4 0-.8.1-1.2.1-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4 5.4 0 9.9 4.2 10.3 9.5v2.1H32z" }),
    react_1.default.createElement("path", { d: "M16 21c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1S18.8 21 16 21zm0-7.9c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7s-1.2-2.7-2.7-2.7z" }))); };
exports.default = SvgAccessTarget;
