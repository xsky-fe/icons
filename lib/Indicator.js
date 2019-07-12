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
var SvgIndicator = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M23.645 24.733c-.014-.029-.231-.359-.231-.359L8 2.006l8.879 25.533s.172.473.183.495c.937 1.767 3.12 2.467 4.914 1.561 1.787-.903 2.521-3.063 1.669-4.862z" }))); };
exports.default = SvgIndicator;
