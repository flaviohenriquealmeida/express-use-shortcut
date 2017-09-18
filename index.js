'use strict';

/**
 * Adds commas to a number
 * @param {middlewares} express midlewares
 * @return {function} use function
 */
module.exports = (...middlewares) => app => 
    middlewares.forEach(middleware =>
        app.use(middleware));