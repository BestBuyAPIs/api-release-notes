'use strict';
/**
 * This is just a copy of the marky-markdown binary
 * except that it doesn't sanitize the output.
 **/
var fs = require('fs');
var path = require('path');
var marky = require('marky-markdown');

if (process.argv.length < 3) {
  console.log('Usage:\n\nmarky-markdown some.md > some.html');
  process.exit();
}

var filePath = path.resolve(process.cwd(), process.argv[2]);

fs.readFile(filePath, function (err, data) {
  if (err) {
    throw err;
  }
  var $ = marky(data.toString(), {sanitize: false});
  process.stdout.write($.html());
});
