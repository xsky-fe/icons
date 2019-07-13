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
var SvgMonitor = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M31.323 16.977V4.347H.677v23.307h30.646v-6.678h-2v4.678H17.036l5.626-8.678h8.661zM2.677 25.652v-7.678h6.844l2.588-4.375 4.684 12.053H2.677zm18.898-10.676l-4.243 6.545-4.851-12.482-4.101 6.937H2.677V6.347h26.646v8.629h-7.748z" }))); };
exports.default = SvgMonitor;
