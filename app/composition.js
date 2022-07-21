'use strict';

const composer = require('openwhisk-composer');

module.exports = composer.parallel(
    composer.action('hello-world'),
    composer.action('product-price'),
    composer.action('product-name'),
    composer.action('product-url'),
    composer.action('group'),
);

