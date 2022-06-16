import {src, dest, lastRun } from 'gulp';
import gulpWebpack from 'webpack-stream';
import webpack from 'webpack';
import { webpackDevConfig } from '../config/webpack.dev';
import { paths } from '../config/paths';
import plumber from 'gulp-plumber';
import rename from "gulp-rename";
import through from 'through';
import path from "path";
import debug from 'gulp-debug';

export const transpileJavaScriptPages = () => {
  return src(paths.src.scripts.javascriptPages, { since: lastRun(transpileJavaScriptPages) })
    .pipe(debug({title: 'transpileJavaScriptPages :'}))
    .pipe(plumber())
    .pipe(through(function(file) {
      const relative = path.relative(".", file.path).split(".");
      relative.pop();
      file.named = relative.join(".");
      this.queue(file);
    }))
    .pipe(gulpWebpack( webpackDevConfig, webpack))
    .pipe(rename((file) => {
      file.dirname = `/javascript/pages`;
    }))
    .pipe(dest(paths.dist.dir));
};
