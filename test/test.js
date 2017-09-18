'use strict';

const assert = require('assert')
    , express = require('express')
    , app = express()
    , request = require('supertest')(app)
    , useShortcut = require('../index');

describe('useShortcut', () => {

    useShortcut(
        (req, res, next) => {
    
            req.firstMiddleware = 'FIRST';
            next();
        },
        (req, res, next) => {
            req.secondMiddleware = 'SECOND';
            next();
        }
    )(app);
    
    app.get('/', (req, res) => 
        res.status(200)
            .end(`${req.firstMiddleware}-${req.secondMiddleware}`));
 
  it('should register two middlewares', () => 
        request
        .get('/')
        .expect(200)
        .then(response => 
                assert.equal(response.text, 'FIRST-SECOND')));   
});
