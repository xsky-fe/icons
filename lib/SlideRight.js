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
var SvgSlideRight = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M1.999 2.684h28.002V4.92H1.999V2.684zm0 24.396h28.002v2.236H1.999V27.08zM13.57 11.003h16.431v2.236H13.57v-2.236zm0 8.077h16.431v2.236H13.57V19.08zm-9.342 3.658l-1.415-1.414 5.67-5.667-5.67-5.67 1.415-1.414 7.084 7.084z" }))); };
exports.default = SvgSlideRight;
