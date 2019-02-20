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

Run this in node command line
```javascript
obj.waitHello(2222).then(() => /* do stuff here after delay */ console.log('world!'));
```


---

`cbHello(...)`

Now cbHello reuses waitHello to create a higher-order function so you can pass a function to call after the hello is displayed.

Run this in node command line
```javascript
foo = () => console.log('foobar');
obj.cbHello(2222, foo);
```

`asyncHello(...)`

Now asyncHello uses `async` and `await` to pause function execution, to allow simpler code writing without more indented async blocks

Run this in node command line
```javascript
foo = () => console.log('foobar');
obj.cbHello(2222, foo);
// Notice your foobar log is after the impatient log.
obj.asyncHello(2222, foo);
// Notice how your foobar log is first because the whole function waited for waitHello to resolve.
```


