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
var SvgFsClient = function (props) { return (react_1.default.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    react_1.default.createElement("path", { d: "M9.306 8.344h1.997v2.069H9.306V8.344zm0 4.037h13.432v2.069H9.306v-2.069zm3.422-4.037h10.009v2.069H12.728V8.344zm-3.422 8.212h13.432v2.069H9.306v-2.069zM.001 26.11H32v2.186H.001V26.11z" }),
    react_1.default.createElement("path", { d: "M29.789 20.938V3.704H2.253v19.423l27.536-.003v-2.186zm-2.186 0l-23.163.003V5.889h23.164v15.048z" }))); };
exports.default = SvgFsClient;
