# connect-trim-body

Connect/Express middleware to trim parameters in request body. Works recursively.

## Dependencies

Requires [body-parser](https://github.com/expressjs/body-parser) middleware.

## Usage

```javascript
var express = require('express')
  , bodyParser = require('body-parser')
  , trimBody = require('connect-trim-body')
  ;

var app = express();

app.use(bodyParser()); // body-parser first
app.use(trimBody());

app.post('/products', function (req, res) {
  res.json(req.body);
});

app.listen(3000);
```

```javascript
{
  "brand": "HP",
  "model": "EliteBook",
  "description": "   some stuff    "
}

// becomes

{
  "brand": "HP",
  "model": "EliteBook",
  "description": "some stuff"
}
```

## License

MIT