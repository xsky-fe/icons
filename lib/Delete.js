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
var SvgDelete = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M25.004 32.162H6.994c-2.174 0-3.942-1.769-3.942-3.942V9.638H5.79V28.22c0 .664.539 1.205 1.204 1.205h18.01c.664 0 1.203-.541 1.203-1.205V9.812h2.736V28.22c0 2.174-1.767 3.942-3.939 3.942zM32 5.692h-9.895l-3.143-3.144h-5.924L9.895 5.692H0V2.955h8.762l2.499-2.5c.417-.416.971-.645 1.563-.645h6.319c.605 0 1.182.227 1.598.645l2.5 2.5H32v2.737z" }),
    react_1.default.createElement("path", { d: "M10.756 9.681h2.738v16.588h-2.738V9.681zm7.738 0h2.738v16.588h-2.738V9.681z" }))); };
exports.default = SvgDelete;
