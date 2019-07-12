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
var SvgStar = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 2.087l3.279 9.938.099.398H30.21l-8.447 6.161-.298.199.099.398 3.18 9.938-8.447-6.162-.298-.199-.298.199-8.447 6.162 3.18-9.938.099-.398-.298-.199-8.447-6.162H12.62l.099-.398 3.28-9.938z" }))); };
exports.default = SvgStar;
