module.exports = function(rootPath) {
  'use strict';

  return function() {
    var fs = require('fs'),
        applyArgs = arguments;

    function requirePath(file, targetPath) {
      var controller = file.substr(0, file.lastIndexOf('.'));

      try {
        fuDirectory(targetPath + "/" + file);
      } catch (error) {
        var module = require(targetPath + "/" + controller)
        module.apply(this, applyArgs);
      }
    }

    function fuDirectory(targetPath) {
      fs.readdirSync(targetPath).forEach(function(file) {
        requirePath(file, targetPath);
      });
    }

    fuDirectory(rootPath);
  }
};
