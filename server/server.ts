// lib/app.ts
import express = require('express');
import path from "path";

// Create a new express application instance
const app: express.Application = express();


let getMainDirectory = (folderName: string) => {
    const currpath = process.cwd().replace(/\\/g, "/")
    const strs = currpath.split("/")
    //Outside of repo directory, into keys directory.
    if (strs.includes("build")) {
        return path.join(process.cwd(), "..", "..", folderName)
    } else {
        return path.join(process.cwd(), "..", folderName)
    }
}
app.use(express.static(getMainDirectory("assets")));
app.use(express.static(getMainDirectory("build")));

app.use("*", express.static(getMainDirectory("build")));


app.listen(8000, function () {
    console.log('Listening on port 8000');
});
