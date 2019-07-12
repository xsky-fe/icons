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
var SvgBindDn = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M29.365 17.355v-2.783c0-2.186-1.778-3.964-3.964-3.964s-3.964 1.778-3.964 3.964v2.783h-2.332v8.216l-16.472.012V6.415h24.252v2.966c.701.225 1.334.591 1.859 1.083V4.557H.774v22.885l30.452-.001V17.355h-1.861zm-6.277-2.783c0-1.275 1.038-2.313 2.313-2.313s2.313 1.038 2.313 2.313v2.783h-4.626v-2.783zm6.279 11.011h-8.404v-6.37h8.404v6.37z" }),
    react_1.default.createElement("path", { d: "M25.059 22.941v1.277c0 .22.224.399.499.399.276 0 .499-.179.499-.399v-1.277c.41-.19.698-.599.698-1.081 0-.661-.536-1.198-1.198-1.198s-1.198.536-1.198 1.198c.002.482.29.891.7 1.081zM6.128 11.413h13.278v1.859H6.128v-1.859zm0 6.831h7.011v1.859H6.128v-1.859z" }))); };
exports.default = SvgBindDn;
