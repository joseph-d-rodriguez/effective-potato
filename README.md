#### Try stuff out

Open Node

`node`

Then import the basic util

`obj = require('./index');`

And try out the function.

`obj.delayedHello(2222)`;

---

`waitHello(...)`

Now you can use the waitHello **Promise** verion like so

```javascript
obj.waitHello(2222).then(() => /* do stuff here after delay */ console.log('world!'));