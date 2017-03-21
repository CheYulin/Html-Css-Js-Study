require('es6-promise').polyfill();

var $ = require('jquery');

var css = require('css-loader!./bear.css')

console.log(css);

module.exports = $('<div/>').html('grizzly growl!')
