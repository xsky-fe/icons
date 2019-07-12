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
var SvgSnapshot = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 16zm-.1 12.1c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2c-.1 4.5-3.7 8.2-8.2 8.2zm0-14.4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c3.4 0 6.2-2.8 6.2-6.2-.1-3.4-2.8-6.2-6.2-6.2z" }),
    react_1.default.createElement("path", { d: "M32 28.2h-9v-2.1h7V9.9h-8.7l-.3-1-1.5-3h-7.3l-1.6 3.3-.2.7H2v16.2h6.6v2.1H0V7.8h9l2-4h9.7l2 4H32z" }),
    react_1.default.createElement("path", { d: "M13.5 20.2h-2c0-2.5 2.1-4.6 4.6-4.6v2c-1.4 0-2.6 1.1-2.6 2.6zm12.2-8.6h2.8v1.5h-2.8v-1.5z" }))); };
exports.default = SvgSnapshot;
