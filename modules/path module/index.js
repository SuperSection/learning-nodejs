const path = require("path");

const baseName = path.basename("/foo/bar/baz/asdf/quux.html");
const baseNameWithoutSuffix = path.basename("/foo/bar/baz/asdf/quux.html", ".html");
const directoryName = path.dirname("/foo/bar/baz/asdf/quux.html");
const extensionName = path.extname("/foo/bar/baz/asdf/quux.html");

console.log("With suffix: " + baseName, "   Without suffix: " + baseNameWithoutSuffix);
console.log(directoryName);
console.log(extensionName);
