'use strict';

let may = require('wikijs').default().page('may');

module.exports = {
	data : () => may.then(page => page.content()),
	images : () => may.then(page => page.images())
};