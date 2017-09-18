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
        },
        ['/test', (req, res, next) => {
            req.pathLessMiddleware  = 'PATHLESS';
            next();
        }]
    )(app);

    
    
    app.get('/', (req, res) => 
        res.status(200)
            .end(`${req.firstMiddleware}-${req.secondMiddleware}`));
     
    app.get('/test', (req, res) => 
         res.status(200)
            .end(`${req.pathLessMiddleware}`));
          
    it('should register two path less middlewares', () => 
        request
        .get('/')
        .expect(200)
        .then(response => 
            assert.equal(response.text, 'FIRST-SECOND'))); 
 
    it('should register a full path middleware', () => 
        request
        .get('/test')
        .expect(200)
        .then(response => 
                assert.equal(response.text, 'PATHLESS')));                 
});
