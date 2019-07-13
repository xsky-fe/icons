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
var SvgHistory = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16.2 8.847v7.651l5.053 4.861 1.457-1.486-4.51-4.387V8.847z" }),
    react_1.default.createElement("path", { d: "M17.93 2.025C10.222 2.025 3.952 8.293 3.952 16c0 .352.031.7.057 1.047H.29l4.664 4.66 4.66-4.66H6.009c-.03-.346-.057-.694-.057-1.047 0-6.603 5.372-11.975 11.978-11.975 6.603 0 11.975 5.372 11.975 11.975S24.533 27.975 17.93 27.975c-3.533 0-6.867-1.549-9.151-4.248l-1.527 1.291c2.665 3.15 6.556 4.957 10.678 4.957 7.706 0 13.975-6.27 13.975-13.975-.003-7.707-6.27-13.975-13.975-13.975z" }))); };
exports.default = SvgHistory;
