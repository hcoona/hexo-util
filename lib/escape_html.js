'use strict';

var htmlEntityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;'
};

module.exports = function(str){
  if (typeof str !== 'string') throw new TypeError('str must be a string!');

  // http://stackoverflow.com/a/12034334
  return str.replace(/[&<>"'\/]/g, function(a){
    return htmlEntityMap[a];
  });
};
