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
var SvgGroupCatalog = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M20 2.7v4.4h4.5zM8.9 8.4H20v1.7H8.9V8.4zm0 5H20v1.7H8.9v-1.7zm0 5H20v1.7H8.9v-1.7z" }),
    react_1.default.createElement("path", { d: "M26.1 11.4v16.4H9v-1.6h15.7v-18H23v16.4H5.9V4.2h13V2.5H4.2v23.7h3.1v3.3h20.5V11.4z" }))); };
exports.default = SvgGroupCatalog;
