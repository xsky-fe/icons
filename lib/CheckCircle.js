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
var SvgCheckCircle = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16.016 32.008C7.176 32.008.008 24.841.008 16S7.176-.008 16.016-.008C24.857-.008 32.025 7.16 32.025 16s-7.167 16.008-16.009 16.008zm8.937-21.619L23.36 8.796a.7502.7502 0 0 0-1.061 0l-9.551 9.551-4.543-4.576c-.294-.293-.769-.293-1.062 0L5.55 15.364a.7502.7502 0 0 0 0 1.061l5.053 5.089c.007.008.009.018.015.025l1.094 1.093.263.265.001-.001.235.236c.294.293.769.293 1.062 0l11.68-11.68c.293-.294.293-.77 0-1.063z" }))); };
exports.default = SvgCheckCircle;
