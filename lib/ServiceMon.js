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
var SvgServiceMon = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M31.688 23.169h-3.429v-16c0-.416-.312-.727-.727-.727H4.675c-.416 0-.727.312-.727.727v16H.312c-.208 0-.312.104-.312.312v.935c0 .208.104.312.312.312h31.376c.208 0 .312-.104.312-.312v-.935c0-.208-.104-.312-.312-.312zM5.403 8.312c0-.208.104-.312.312-.312H26.39c.208 0 .312.104.312.312v13.299c0 .208-.104.312-.312.312H5.715c-.208 0-.312-.104-.312-.312V8.312z" }),
    react_1.default.createElement("path", { d: "M14.13 13.922l2.805 3.013 3.429-4.364.831.727-.208-2.078-2.078.208.935.727-3.013 3.74-2.805-3.117-2.078 3.429.519.416zm-2.701 3.117h10.805v.623H11.429v-.623z" }))); };
exports.default = SvgServiceMon;
