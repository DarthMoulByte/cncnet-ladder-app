"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var handler = require("serve-handler");
var http = require("http");
var exec = require("child_process").exec;
var sass = require("gulp-sass");

gulp.task('default', ['webpack', 'sass', 'server', 'build'], function () 
{
    gulp.watch("./src/sass/*/*.scss", ["sass"]);
    gulp.watch("./src/app/**/*.***", ["webpack"]);
});

gulp.task("build", function (cb)
{
    exec("npm run build", function (err, stdout, stderr)
    {
        cb(err, stdout, stderr);
    });
});

gulp.task("server", function ()
{
    var port = 3000;
    var server = http.createServer((request, response) =>
    {
        return handler(request, response, {
            public: "dist"
        });
    });
    server.listen(port, () =>
    {
        console.log("Running at http://localhost:" + port);
    });
});

gulp.task("webpack", function (callback) 
{
    webpack(require("./webpack.config.js"), function (err, stats) 
    {
        if (err)
        {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task("sass", function () 
{
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
