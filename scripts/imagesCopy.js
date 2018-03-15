const copy = require('recursive-copy')

copy('src/assets/img', 'dist/assets/img', {
  filter: '**/*'
})
  .then(() => console.log('Images copied!'))
  .catch(() => console.error('Error while copying images!'))
