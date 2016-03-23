vurl
====

Install
-------

`npm install --save vurl`

Example
-------

Using the `minimist` module:

```javascript
var vurl = require('vurl'),
    minimist = require('minimist');

//The current url
//mydomain.com/one/two?bla&color=blue&c
console.log(minimist(vurl()));
```

The output from running the above: `{_:['one', 'two'], bla: true, c: true, color: 'blue'}`

Raw output from calling `vurl`: `['one', 'two', '--bla', '--color', 'blue', '-c']`

About
-----

This is one attempt at making javascript act the same when in the command line, or the browser.

Facilities to parse `process.argv` are much more prevalent in the javascript ecosystem. Maybe when you have a webpage you can use those facilities too.

`vurl` uses the `pathname` as the positional arguments, and the query string as the flags.

When you call `vurl` in a browser environment it transforms the url into the same thing as if you called node on your script and did `process.argv.slice(2)` in that script.

In a node command line script `vurl` just does the `process.argv.slice(2)` for you.

`vurl` has no dependencies.
