# Exception Handling

## Sources:

[MDN-JS throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

[MDN-JS try-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

[SocketIO Github](https://github.com/socketio/socket.io/tree/master/lib)

## Throw

Statement that allows to raise an exception of our like. We can create our own exception object.

```js
let CustomException(message) = {
    this.message = message
    this.name = 'CustomException'
}

if (!isDefined){
    throw new CustomException('xxx not defined');
}
```

## Try-Catch

The try block allow to try out the scoped statements and in case of error throw an exception and execute the catch clause.

```js
try
{
    //suspicious code
}
catch (e)
{
    //do on error
}
```

In this example we're catching any type of exception. In case we want to do something specific for a certain type of exception we should use conditionals, checking the use of the binary operator [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

```javascript
try
{
    //suspicious code
}
catch(e)
{
    if(e instanceof XError){
        //do on error XError
    }
    else if (e instanceof YError){
        //do on YError
    }
}
```

## Socket IO  examples

There are few try-catch clauses in the repo, it looks like most of the "checking" is done by validating [duck typing](https://en.wikipedia.org/wiki/Duck_typing) with `if` blocks.

`client.js`

```javascript
Client.prototype.ondata = function(data){
  // try/catch is needed for protocol violations (GH-1880)
  try {
    this.decoder.add(data);
  } catch(e) {
    this.onerror(e);
  }
};
```

`index.js`

```javascript
Server.prototype.serveClient = function(v){
  if (!arguments.length) return this._serveClient;
  this._serveClient = v;
  var resolvePath = function(file){
    var filepath = path.resolve(__dirname, './../../', file);
    if (exists(filepath)) {
      return filepath;
    }
    return require.resolve(file);
  };
  if (v && !clientSource) {
    clientSource = read(resolvePath( 'socket.io-client/dist/socket.io.js'), 'utf-8');
    try {
      clientSourceMap = read(resolvePath( 'socket.io-client/dist/socket.io.js.map'), 'utf-8');
    } catch(err) {
      debug('could not load sourcemap file');
    }
  }
  return this;
};

```


