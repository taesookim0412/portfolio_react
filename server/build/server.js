"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var path_1 = __importDefault(require("path"));
// Create a new express application instance
var app = express();
var getMainDirectory = function (folderName) {
    var currpath = process.cwd().replace(/\\/g, "/");
    var strs = currpath.split("/");
    //Outside of repo directory, into keys directory.
    if (strs.includes("build")) {
        return path_1.default.join(process.cwd(), "..", "..", folderName);
    }
    else {
        return path_1.default.join(process.cwd(), "..", folderName);
    }
};
app.use(express.static(getMainDirectory("assets")));
app.use(express.static(getMainDirectory("build")));
app.use("*", express.static(getMainDirectory("build")));
app.listen(8000, function () {
    console.log('Listening on port 8000');
});
