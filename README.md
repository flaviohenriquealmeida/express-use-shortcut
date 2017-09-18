# express-use-shortcut

Helper function that avoids calling `app.use` multiple times for middlewares. You can pass as many middlewares you need passing Express instance only once. 

## Installation

```
npm install express-use-shortcut
```

## The problem

The following code is very common in Express applications. It registers many middlewares:

```javascript
const express = require('express')
    , app = express()
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , passport = require('passport');

app.use(cookieParser());
app.use(session(
	{ secret: 'homem avestruz', 
	  resave: true, 
	  saveUninitialized: true 
	}
));
app.use(passport.initialize());
app.use(passport.session());
```

It's not too hard to figure out that we are calling `app.use` too many times. 

## express-use-shortcut usage 

Let's see the previous example with `express-use-shortcut`:

```javascript
const express = require('express')
    , app = express()
    , cookieParser = require('cookie-parser')
    , session = require('express-session')
    , passport = require('passport')
    , use = require('express-use-shortcut');

use(
    cookieParser(),
    session(
        { secret: 'homem avestruz', 
          resave: true, 
          saveUninitialized: true 
        }
    ),
    passport.session(),
)(app);
```

If a path is necessary, you can pass the path and the middleware within an array:

```javascript
use(
    ['/api', yourMiddleware],
    cookieParser(),
    session(
        { secret: 'homem avestruz', 
          resave: true, 
          saveUninitialized: true 
        }
    ),
    passport.session()
)(app);
```



