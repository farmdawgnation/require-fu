# require-fu

**Require-fu** is a library designed to provide dependency injection style requires recursively
for directories.

## Introduction

Require-fu is based on the idea of dependency injection requiring. Take an express application as an example.
One way you might use an express app is to define an index.js in your routes directory that returns
a hash of things to wire into Express. For example:

```javascript
var routes = require('./routes');

app.get("/about", routes.about);
app.get("/home", routes.home);
```

This is less than ideal because information about how to access the code that processes the route
is separate from the route itself. I, instead, prefer an injection approach. Like so:

```javascript
require('./routes')(app);
```

The `app` parameter is passed in, and the route's index.js file is responsible for wiring everyone
up. Or, more likely, `routes/index.js` just requires a lot of other files that would do that. So,
I may define a `routes/index.js` like so:

```javascript
module.exports = function(app) {
  require('./about')(app);
  require('./home')(app);
}
```

Then, my actual route files will look like:

```javascript
module.exports = function(app) {
  app.get("/about", function(req, res) {
    // do things
  });
}
```

I like this style a lot, but with vanilla `require` it means you have to add one require line to `index.js`
for every handler you want to use. So, I wrote require-fu to provide an alternative.

## Usage

There are a few prerequisites to this working correctly. Specifically,

* You must pass the full path to the directory you want to include. (Example below.)
* All files under that directory *must* be requirable files. (e.g. no readme's or other documents)

To use require-fu in the example I presented above, trash `routes/index.js` and do the following in
your root-level `app.js`:

```javascript
var requireFu = require('require-fu');

requireFu(__dirname + '/routes')(app);
```

The routes folder will be recursively searched for modules, and they will be required with app injected
into them. Moreover, you can inject as many things as you'd like.

```javascript
var requireFu = require('require-fu');

requireFu(__dirname + '/routes')(app, jobs, db);
```

## About Me

My name is Matt Farmer. I'm a Software Engineer from Atlanta, GA. As of the time of this writing, By day I'm
a code bandit involved at Elemica and [Anchor Tab](http://acnhortab.com). By night, I'm drawing mad scientist
like diagrams on my whiteboard at home, thinking of new ways to take over the Internet and brew the perfect
cup of tea.

This was inspired in part by Declan de Wet's [Pragmatic Guide to Separating
Routes in Express](http://declandewet.com/blog/a-pragmatic-guide-to-separating-routes-in-express.html), that
got me thinking about applying this concept more generally.
