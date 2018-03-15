const copy = require('recursive-copy')

copy('src/assets/js', 'dist/assets/js', {
  filter: '**/*'
})
  .then(() => console.log('JS copied!'))
  .catch(() => console.error('Error while copying JS!'))
