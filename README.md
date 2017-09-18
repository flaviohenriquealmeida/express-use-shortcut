# express-use-shortcut

Helper function that avoids calling `app.use` multiple times for middlewares. You can pass as many middlewares you need passing Express instance only once. 

## Installation

```
npm install express-use-shortcut
```

## Path less example

Path less example without shortcut:

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

Path less example With shortcut:

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

## Middleware with paths

You can pass the path and middleware within an array:

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



