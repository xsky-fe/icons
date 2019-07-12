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
var SvgMonitorRole = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M.608 17.418v11.949c0 .81.81 1.62 1.62 1.62h28.76c.81 0 1.62-.81 1.62-1.62V17.418h-32zm23.088 7.898H5.873v-1.823h17.62v1.823zm3.443 0c-.608 0-1.013-.405-1.013-1.013s.405-1.013 1.013-1.013 1.013.405 1.013 1.013c0 .608-.405 1.013-1.013 1.013zM18.025 15.19h14.582V8.912H21.468zm-6.683-3.241H.608v3.241h16.405L14.38 6.076z" }),
    react_1.default.createElement("path", { d: "M14.582 1.62H2.228c-.81 0-1.62.81-1.62 1.62v6.684h9.519l4.456-8.304zm5.671 5.266h12.152V3.24c0-.81-.81-1.62-1.62-1.62H15.19l2.633 9.316 2.43-4.051z" }))); };
exports.default = SvgMonitorRole;
