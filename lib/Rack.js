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
var SvgRack = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M6.9 0v32h18.2V0H6.9zm15.8 2.4v3.9H9.3V2.4h13.4zM9.3 20.3v-3.9h13.5v3.9H9.3zm13.4.8V25H9.3v-3.9h13.4zM9.3 15.6v-3.9h13.5v3.9H9.3zm0-4.7V7h13.5v3.9H9.3zm0 18.7v-3.9h13.5v3.9H9.3z" }))); };
exports.default = SvgRack;
