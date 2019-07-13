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
var SvgClientGroup = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M.1 27.9h28.6V30H.1v-2.1zm31.8-14.8V2H7.6v5.4H2.3V25h24.3v-5.3h5.3v-2.1h-5.3V7.5H9.7V4.3h20.1v8.9h2.1zm-7.4-3.6v13.4H4.4V9.5h20.1z" }))); };
exports.default = SvgClientGroup;
