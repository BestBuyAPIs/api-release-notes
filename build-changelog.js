'use strict';
var fs = require('fs');
var path = require('path');

function convertTitleToId (title) {
  return title.toLowerCase().replace(/[^\w]+/g, ' ').trim().replace(/\s/g, '-');
}

console.log('Building Changelog...');
var notesPath = path.join('notes');

var notes = fs.readdirSync(notesPath);

var changelogHeader = '';
var changelogEntries = [];
var changelogTOC = '';
var changelogData = '';
var changelogEntry = '';
var firstLine = '';
var firstLineRegex = /^## \[R[\d\.]+\]\s-\s\d\d\d\d-\d\d-\d\d$/;

console.log('Processing ' + notes.length + ' files.');

notes.sort().reverse().forEach(function (note) {
  console.log('\t' + path.parse(note).name);
  if (path.parse(note).name === '_header') {
    changelogHeader = fs.readFileSync(path.join(notesPath, note), 'utf8') + '\n\n';
  } else {
    changelogEntry = fs.readFileSync(path.join(notesPath, note), 'utf8');
    firstLine = changelogEntry.split('\n')[0];
    if (firstLineRegex.test(firstLine) === false) {
      console.warn('First line of ' + note + ' does not match appropriate format');
      process.exit(1);
    }
    changelogEntries.push(changelogEntry.split('\n')[0].substring(3));
    changelogData += '<div class="log-entry">\n\n';
    changelogData += changelogEntry + '\n';
    changelogData += '</div>\n';
  }
});

changelogTOC = '<div class="log-toc">\n\n';
changelogTOC += '## Releases\n';
changelogEntries.forEach(function (entry) {
  changelogTOC += ' - [' + entry + '](#user-content-' + convertTitleToId(entry) + ')\n';
});
changelogTOC += '</div>\n';

fs.writeFileSync('CHANGELOG.md', changelogHeader + changelogTOC + changelogData, 'utf8');

console.log('Done!');
