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
var SvgInstaller = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M31.366 17.497l-.016-.087c-.016-.188-.047-.363-.097-.506l-.006-.025-.344-.675L24.687 5.07c-.216-.406-.494-.594-.962-.594h-2.922v1.906h2.438l5.363 9.619H3.426l5.347-9.616h6.269v4.684l-4.247-3.55-1.231 1.475 6.441 5.378 6.378-5.381-1.238-1.466-4.181 3.528V4.478H8.289c-.469 0-.747.188-.963.594L.898 16.575l-.037.113c-.084.144-.144.313-.178.506l-.044.125.022.009c-.012.113-.022.225-.022.353l.009 8.403c-.009.991.472 1.441 1.431 1.441h27.85c.975 0 1.441-.481 1.441-1.409v-8.434c0-.066-.006-.119-.012-.178l.009-.006zm-1.925 8.106H2.557v-7.684h26.887l-.003 7.684z" }),
    react_1.default.createElement("path", { d: "M13.119 20.8h5.763v1.922H13.12V20.8z" }))); };
exports.default = SvgInstaller;
