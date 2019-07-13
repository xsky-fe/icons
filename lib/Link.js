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
var SvgLink = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M20.825 15.975c-.229-3.461-3.179-6.648-7.475-6.648h-.057l-6.34.029c-1.789.008-3.464.714-4.717 1.988C.985 12.617.307 14.305.329 16.094c.022 1.778.737 3.449 2.013 4.705 1.269 1.246 2.939 1.932 4.707 1.932h.032l1.722-.008-.006-2-1.724.007h-.022c-1.241 0-2.415-.481-3.306-1.357-.897-.883-1.4-2.057-1.416-3.305-.015-1.252.458-2.432 1.333-3.322.876-.892 2.048-1.385 3.3-1.391l6.341-.029h.051c3.19 0 5.244 2.297 5.469 4.648l2.002.001z" }),
    react_1.default.createElement("path", { d: "M25.373 9.27h-.03l-1.755.01.008 2 1.756-.01h.021c2.498 0 4.265 1.914 4.299 4.664.017 1.253-.459 2.435-1.333 3.324-.876.891-2.048 1.385-3.3 1.391l-6.765.031c-1.784.025-3.195-.44-4.07-1.303-.62-.609-1.799-2.256-2.008-3.402h-2.009c.179 1.641 1.616 3.85 2.614 4.83 1.248 1.228 3.122 1.875 5.423 1.875h.061l6.764-.031c1.789-.01 3.465-.715 4.717-1.987 1.25-1.272 1.928-2.96 1.906-4.752-.05-3.853-2.695-6.64-6.299-6.64z" }))); };
exports.default = SvgLink;
