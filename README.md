# require-fu

This isn't quite working yet, but the idea here is to try and implement a better solution
for requiring directories. Inspired in part by Declan de Wet's [Pragmatic Guide to Separating
Routes in Express](http://declandewet.com/blog/a-pragmatic-guide-to-separating-routes-in-express.html),
the goal of this little project is to try and implement a version of require that will recursively
apply to a directory. Such that if you say...

```javascript
requirefu('./somedir')(bacon);
```

That `somedir` is searched recursively, and every module under that path should export a function at the
top level that accepts `bacon` as an argument. The idea is to nuke the need for index.js garbage. I've seen
a variation of this idea in [node-require-directory](https://github.com/TroyGoode/node-require-directory),
but I'd prefer the controllers in my Express application to set their own URLs. I also need to inject other
relevant things into their context (e.g. the database), so using the injection-style require makes sense for
me. YMMV.

## About Me

My name is Matt Farmer. I'm a Software Engineer from Atlanta, GA. As of the time of this writing, By day I'm
a code bandit involved at Elemica and [Anchor Tab](http://acnhortab.com). By night, I'm drawing mad scientist
like diagrams on my whiteboard at home, thinking of new ways to take over the Internet and brew the perfect
cup of tea.
