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
var SvgCapacity = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 3.459c-6.655 0-13.392 1.863-13.392 5.425v15.024h.065c.658 3.203 7.024 4.877 13.327 4.877s12.669-1.674 13.327-4.876h.065V8.884c0-3.562-6.737-5.425-13.392-5.425zm0 1.759c6.953 0 11.389 2.027 11.389 3.423S22.953 12.063 16 12.063 4.611 10.035 4.611 8.64 9.047 5.218 16 5.218zm0 14.736c-7.369 0-11.389-2.015-11.389-3.05v-5.28C7.1 13.232 11.563 14.065 16 14.065s8.9-.833 11.389-2.441v5.28c0 1.035-4.02 3.05-11.389 3.05z" }))); };
exports.default = SvgCapacity;
