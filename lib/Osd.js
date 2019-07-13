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
var SvgOsd = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M24.247 4.476H7.818L.635 17.088v10.436h24.997v-1.921H2.556V17.92h26.886v9.604h1.923V17.109L24.247 4.476zM3.424 16.001l5.568-9.86h14.043l5.569 9.86H3.424z" }),
    react_1.default.createElement("path", { d: "M13.119 20.801h5.762v1.921h-5.762v-1.921z" }))); };
exports.default = SvgOsd;
