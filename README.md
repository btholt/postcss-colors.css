# PostCSS Colors.css plugin

## What is this?

This a plugin for the awesome CSS preprocessor [PostCSS](https://github.com/postcss/postcss). PostCSS is a really simple preprocessor that allows you to write plugins for it that allow you define how your CSS gets processed.

[Colors.css](http://clrs.cc/) is a new set of default colors for the web by the [Adam Morse](https://github.com/mrmrs). It gives new, prettier defaults for colors.

This plugin lets you write `color: red` or `color: green` and have it reflect this new color palette instead of the default browser colors.

## Example

```css
.some-class {
  color: red;
  border: 3px solid orange;
}
```

becomes

```css
.some-class {
  color: #FF4136;
  border: 3px #FF851B orange;
}
```

## Basic setup example

```javascript
var postcss = require('postcss');
var colorsCss = require('./index');
var fs = require('fs');

var css = fs.readFileSync('./input.css');

var output = postcss()
  .use(colorsCss())
  .process(css)
  .css;

fs.writeFileSync('./output.css', output);
```

Alternatively, something like Gulp, Webpack, or Grunt would help too.

## Author

:heart: [Brian Holt](http://twitter.com/holtbt)
