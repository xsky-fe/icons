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
var SvgHost = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M26.147 8.067c0 .509-.413.922-.922.922s-.922-.413-.922-.922c0-.509.413-.923.922-.923s.922.413.922.923z" }),
    react_1.default.createElement("path", { d: "M1.24 4.1v8.21h29.427V4.1H1.24zm27.49 6.181H3.269V6.038H28.73v4.243zm-2.583 8.394c0 .509-.413.922-.922.922s-.922-.413-.922-.922c0-.509.413-.922.922-.922s.922.413.922.922z" }),
    react_1.default.createElement("path", { d: "M1.24 22.826h13.837v3.044H9.542l-2.029 2.029h16.974l-2.029-2.029h-5.443v-4.981H3.27v-4.243h25.461v4.243h-7.657v1.937h9.594v-8.21H1.241z" }))); };
exports.default = SvgHost;
