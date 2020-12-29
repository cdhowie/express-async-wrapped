# express-async-wrapped

Function that turns an async (promise) function into a function that can be
passed to express.js as a handler.  Rejections will get forwarded to express.

The function exported by this module can be used to wrap any express.js handler
type:

* Route handlers.
* Param handlers.
* Middleware.
* Error-handling middleware.
* Arrays of any of the above.

## Quick start

```js
const asyncWrap = require('express-async-wrapped');

router.get('/foo', asyncWrap(async (req, res) => {
    res.json(await getSomeData(req));
}));

router.use(asyncWrap(async (req, res, next) => {
    // await ...

    next();
}));

router.param('foo', asyncWrap(async (req, res, next, id) => {
    req.foo = await getTheFoo(id);
    next();
}));

router.use(asyncWrap(async (err, req, res, next) => {
    // await ...

    res.status(500).end();
}));
```
