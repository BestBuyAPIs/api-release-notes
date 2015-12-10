'use strict'
var fs = require('fs')

var path = require('path')

console.log('Building Changelog...')
var notesPath = path.join('notes')

var notes = fs.readdirSync(notesPath)

var changelogHeader = ''
var changelogData = ''

console.log('Processing ' + notes.length + ' files.')

notes.reverse().forEach(function (note) {
  console.log(path.parse(note).name)
  if (path.parse(note).name === '_header') {
    changelogHeader = fs.readFileSync(path.join(notesPath, note), 'utf8') + '\n\n'
  } else {
    changelogData += fs.readFileSync(path.join(notesPath, note), 'utf8') + '\n'
  }
})

fs.writeFileSync('CHANGELOG.md', changelogHeader + changelogData, 'utf8')

console.log('Done!')
