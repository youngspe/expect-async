# expect-async
`expect-async` is a wrapper for [expect](https://github.com/mjackson/expect) that allows for use in asynchronous tests.

```js
var createExpect = require('expect-async').createExpect;

it('should open a file that contains "foo"', function(done) {
    //A test fails if an argument is passed to 'done'.
    var expect = createExpect(done);

    fs.readFile('file.txt', 'utf8', function(err, data) {
        expect(err).toNotExist();
        expect(data).toBe('foo');

        done();
    });
});
```

## Usage

```js
createExpect(reject)
```

### Params
`reject`: A function that accepts an `Error` argument. Will be called when an expectation fails.

### Returns
An `expect` object that behaves like [expect](https://github.com/mjackson/expect). When an expectation fails, `reject` will be called before an exception is thrown.
