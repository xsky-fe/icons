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
var SvgUpload = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M7.65 14.465h5.53v7.644h5.748v-7.666h5.458L18.98 8.672l1.601-1.497 8.855 9.459h-8.318v7.667H10.99v-7.647H2.564L16.078 2.365l1.467 1.567zm-5.08 13.17h26.829v2H2.57v-2z" }))); };
exports.default = SvgUpload;
