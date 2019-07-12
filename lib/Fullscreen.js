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
var SvgFullscreen = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M14.6 16.7l-3.8 3.9v-3.3H9.4v5.6H15v-1.4h-3.3l3.9-3.8zm.4-6.3V9H9.4v5.5h1.4v-3.2l3.8 3.9 1-1-3.9-3.8zm6.9 10.2l-3.8-3.9-1 1 3.9 3.8h-3.2v1.4h5.5v-5.6h-1.4zm-4.1-10.2H21l-3.9 3.8 1 1 3.8-3.9v3.2h1.4V9h-5.5zm-2.6-8.5V.3C7 .7.5 7.3.2 15.5h1.7c.2-7.3 6-13.2 13.3-13.6zm14.9 13.6h1.6C31.5 7.3 25 .7 16.8.3v1.6c7.3.4 13.1 6.3 13.3 13.6zM1.9 17.1H.3c.6 7.9 7 14.2 14.9 14.6v-1.6c-7-.4-12.7-6-13.3-13zm14.9 13v1.6c7.9-.4 14.3-6.7 14.9-14.6h-1.6c-.6 7-6.2 12.6-13.3 13z" }),
    react_1.default.createElement("path", { d: "M29 16c0-7.2-5.8-13-13-13S3 8.8 3 16s5.8 13 13 13 13-5.8 13-13zM16 27.2c-6.2 0-11.2-5-11.2-11.2S9.8 4.8 16 4.8s11.2 5 11.2 11.2-5 11.2-11.2 11.2z" }))); };
exports.default = SvgFullscreen;
