'use strict';

let may = require('../../may.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return may.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return may.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


