'use strict';

/**
 * Adds commas to a number
 * @param {middlewares} express midlewares or arrays including path and middleware
 * @return {function} use function
 */
module.exports = (...middlewares) => app => 
    middlewares.forEach(middleware => {
        Array.isArray(middleware)
            ? app.use(...middleware)
            : app.use(middleware);
    });
        