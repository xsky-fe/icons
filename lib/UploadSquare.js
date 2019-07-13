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
var SvgUploadSquare = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M9.196 15.708h4.428v6.12h4.603V15.69h4.369l-4.326-4.62 1.279-1.199 7.09 7.572h-6.66v6.139H11.87v-6.12H5.125L15.944 6.021l1.175 1.253z" }),
    react_1.default.createElement("path", { d: "M28.943 29.232H3.056V18.979h2v8.253h21.887v-8.253h2zm0-13.845h-2V4.768H5.056v10.619h-2V2.768h25.887z" }))); };
exports.default = SvgUploadSquare;
