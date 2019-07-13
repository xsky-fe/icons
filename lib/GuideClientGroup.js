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
var SvgGuideClientGroup = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M2.6 25.2h9.9v2.2H9.2v1.8h8.1v-1.8h-3.2v-2.2h9.7V9H2.6v16.2zm1.9-14.4H22v12.6H4.5V10.8z" }),
    react_1.default.createElement("path", { d: "M6.9 3.9V7h1.6V5.8h19.7v12.5h-2.4v1.8H30V3.9z" }))); };
exports.default = SvgGuideClientGroup;
