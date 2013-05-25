# fadeAway

A tiny library for fading in and fading out elements based on scroll position.
Think of it as a crossfader for your html elements!

Check it out:
* Example 1
* Example 2

## Getting Started

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/lyaunzbe/fadeaway/master/fadeaway.min.js
[max]: https://raw.github.com/lyaunzbe/fadeaway/master/fadeaway.js

In your web page:

```html
<script src="dist/fadeaway.min.js"></script>
<script>
	var elements = [document.getElementById('a'),
                	document.getElementById('b'),
                	document.getElementById('c'),
                	document.getElementById('d')];

	fadeAway(elements, {begin:100, strength:1, easing: 'easeInOutCubic'});
</script>
```

## Documentation
### fadeAway(elements, [opts])
Elements can be one dom element object or an array of them.
Options:
**Begin
**Strength
**Easing
## Examples
_(Coming soon)_

## License
Copyright (c) 2013 Ben L.  
Licensed under the MIT license.
