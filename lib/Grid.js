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
var SvgGrid = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M14.029 29.102H2.897V17.973h11.132v11.129zm-9.044-2.088h6.955v-6.953H4.985v6.953zm24.119 2.088H17.971V17.973h11.133v4.845h-2.088v-2.757h-6.957v6.953h9.045v.15zM14.029 14.029H2.897V2.898h11.132v11.131zm-9.044-2.088h6.955V4.986H4.985v6.955zm24.119 2.088H17.971V2.898h11.133v11.131zm-9.045-2.088h6.957V4.986h-6.957v6.955z" }))); };
exports.default = SvgGrid;
