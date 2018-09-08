// var ssi = require('browsersync-ssi');

module.exports = {
    "ui": false,
    "files": "./src/**/*.css, ./src/**/*.js, ./src/**/*.html",
    "server": {
        baseDir: "./src/",
        index: "index.html"
    },
    "proxy": false,
    "port": 3000
    // "middleware": ssi({
    //     baseDir: "./src",
    //     ext: ".html",
    //     version: "1.4.0"
    // })
}
