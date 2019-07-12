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
var SvgTime = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 29.267c-7.391 0-13.404-6.014-13.404-13.404 0-6.069 4.096-11.396 9.961-12.955l.586 2.204c-4.867 1.293-8.267 5.714-8.267 10.751 0 6.133 4.99 11.124 11.124 11.124s11.124-4.99 11.124-11.124c0-5.257-3.737-9.84-8.885-10.897l.458-2.233c6.204 1.273 10.706 6.795 10.706 13.13-.001 7.391-6.015 13.404-13.405 13.404z" }),
    react_1.default.createElement("path", { d: "M17.013 7.317h-2.28V17.64l8.188-.001v-2.281h-5.908z" }))); };
exports.default = SvgTime;
