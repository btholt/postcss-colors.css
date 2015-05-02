var helpers = require("postcss-message-helpers");
var intersection = require('lodash/array/intersection');
var postCss = require('postcss');
var colors = require('colors.css');
var colorsKeys = Object.keys(colors);

module.exports = postCss.plugin('colors.css', function plugin(opts) {
  return function(style) {
    style.eachDecl(function transformDecl(decl) {
      helpers.try(function() {
        var stringArray = decl.value.toLowerCase().split(' ');
        var colorsToReplace = intersection(stringArray, colorsKeys);
        if (colorsToReplace.length > 0) {
          colorsToReplace.map(function(el) {
            decl.value = decl.value.replace( new RegExp(el, 'ig'), colors[el] );
          });
        }
      }, decl.source);
    });
  };
});
