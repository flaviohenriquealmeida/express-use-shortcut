# express-use-shortcut

Shortcut of Express `app.use`. 

## Installation

```
npm install express-use-shortcut --save
```

Example without shortcut:

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

With shortcut:

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

You can pass as many middlewares you need passing express instance once. 