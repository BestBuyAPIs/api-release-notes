'use strict';
var fs = require('fs');
var path = require('path');

console.log('Building Changelog...');
var notesPath = path.join('notes');

var notes = fs.readdirSync(notesPath);

var changelogHeader = '';
var changelogData = '';

console.log('Processing ' + notes.length + ' files.');

notes.sort().reverse().forEach(function (note) {
  console.log('\t' + path.parse(note).name);
  if (path.parse(note).name === '_header') {
    changelogHeader = fs.readFileSync(path.join(notesPath, note), 'utf8') + '\n\n';
  } else {
    var changelogEntry = fs.readFileSync(path.join(notesPath, note), 'utf8');
    var firstLine = changelogEntry.split('\n')[0];
    if (/^## R[\d\.]+\s\-\s\d\d\d\d-\d\d-\d\d$/.test(firstLine) === false) {
      console.warn('First line of ' + note + ' does not match appropriate format');
      process.exit(1);
    }
    changelogData += '<div class="log-entry">\n\n';
    changelogData += changelogEntry + '\n';
    changelogData += '</div>\n';
  }
});
fs.writeFileSync('CHANGELOG.md', changelogHeader + changelogData, 'utf8');

console.log('Done!');
