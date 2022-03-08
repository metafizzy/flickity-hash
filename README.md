# Flickity hash

_Select Flickity slides with links_

## Features

+ Connect hash links to select Flickity slides. `<a href="#cell2">View cell 2</a>`
+ Use URLs for slides: `https://example.com/#cell2`
+ Change page hash to match selected slide.

## Install

Add `hash.js` to your scripts.

### Download

+ [hash.js](https://unpkg.com/flickity-hash@2/hash.js)

### CDN

``` html
<script src="https://unpkg.com/flickity-hash@2/hash.js"></script>
```

### Package managers

npm: `npm install flickity-hash`

Yarn: `yarn add flickity-hash`

## Usage

Enable hash behavior by setting `hash: true` in Flickity options.

``` js
// jQuery
let $carousel = $('.carousel').flickity({
  hash: true,
});
```

``` js
// vanilla JS
let flkty = new Flickity( '.carousel', {
  hash: true,
});
```

``` html
<!-- HTML -->
<div class="carousel" data-flickity='{ "hash": true }'>
  ...
</div>
```

### HTML

Add `id` attributes to cell elements.

``` html
<div class="carousel">
  <div class="carousel-cell" id="carousel-cell1">...</div>
  <div class="carousel-cell" id="carousel-cell2">...</div>
  <div class="carousel-cell" id="carousel-cell3">...</div>
</div>
```

Hash links will select slides on click.

``` html
<a href="#carousel-cell2">View cell 2</a>
```

### Webpack

``` js
const Flickity = require('flickity');
require('flickity-hash');

let flkty = new Flickity( '.carousel', {
  hash: true,
});
```

---

By [Metafizzy](https://metafizzy.co) 🌈🐻
