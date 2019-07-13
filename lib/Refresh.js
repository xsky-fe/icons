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
var SvgRefresh = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M16 28.153C9.298 28.153 3.847 22.701 3.847 16H5.55l-2.756-4.772L.039 16h1.703c0 7.862 6.396 14.258 14.258 14.258 4.536 0 8.697-2.084 11.417-5.718l-1.683-1.262c-2.321 3.098-5.869 4.875-9.734 4.875zM30.258 16c0-7.862-6.397-14.258-14.258-14.258-4.397 0-8.482 1.984-11.207 5.443l1.654 1.303C8.77 5.538 12.252 3.847 16 3.847c6.702 0 12.153 5.452 12.153 12.153h-1.704l2.757 4.772L31.961 16h-1.703z" }))); };
exports.default = SvgRefresh;
