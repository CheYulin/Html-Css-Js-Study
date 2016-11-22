//alert(require('./bear.js') + 'it still works for server')

//async loading
require(['./bear.js'], function(bear) {
  document.body.appendChild(bear[0]);
})
