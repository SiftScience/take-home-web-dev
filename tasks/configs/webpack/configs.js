var _ = require('underscore');
var paths = require('../path-builder');
var webpack = require('webpack');

var base = {
  module: {
    loaders: [
      { test: /\.modernizrrc$/, loader: 'modernizr' },
    ],
  },
  resolve: {
    root: paths.repoRoot,
    fallback: [paths.repoRoot + '/scripts'],
    alias: {
      helpers: paths.repoRoot + '/specs/spec_helpers',
      jelly: paths.repoRoot + '/jelly/lib/scripts',
      modernizr$: paths.repoRoot + '/.modernizrrc',
      vendors: paths.repoRoot + '/lib/scripts/vendors',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    // do not include all of moment's timezones
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

//////////////////////////////////////////////////
//
//                   Exports
//
//////////////////////////////////////////////////

var exports = {
  dev: _.extend({
    entry: `${paths.scripts}/index.js`,
    devtool: 'eval-source-map',
    watch: true,
    output: {
      path: `${paths.dist}scripts`,
      filename: 'bundle.js',
    },
  }, base),

  test: _.extend({
    entry: `${paths.specs}/spec-runner.js`,
    devtool: 'inline-source-map',
    output: {
      path: `${paths.specs}`,
      filename: 'spec-bundle.js',
    },
  }, base),

  prod: _.extend({
    plugins: _.union(base.plugins, [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: false,
      }),
    ]),
  }, base),
};

module.exports = exports;
