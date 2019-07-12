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
var SvgController = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M26 4H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 21c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v18z" }),
    react_1.default.createElement("path", { d: "M13 16.2V8h-2v8.2c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8V24h2v-2.2c1.2-.4 2-1.5 2-2.8s-.8-2.4-2-2.8zM12 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm9-10.8V8h-2v2.2c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8V24h2v-8.2c1.2-.4 2-1.5 2-2.8s-.8-2.4-2-2.8zM20 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" }))); };
exports.default = SvgController;
