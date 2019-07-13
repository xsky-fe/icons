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
var SvgSlideLeft = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M1.999 2.683h28.002v2.236H1.999V2.683zm0 24.397h28.002v2.236H1.999V27.08zm11.572-16.078h16.43v2.236h-16.43v-2.236zm0 8.078h16.43v2.236h-16.43V19.08zm-4.334 3.803l-7.238-7.239 7.238-7.237 1.414 1.414-5.824 5.823 5.824 5.825z" }))); };
exports.default = SvgSlideLeft;
