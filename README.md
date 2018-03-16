# Flickity hash

_Enable hash navigation for Flickity_

## Features

Connect hash links (i.e. `href="#cell2"`) to select Flickity slides.

``` html
<a href="#cell2">View cell 2</a>
```

Use URLs for slides: `https://example.com/#cell2`

Change page hash to match selected slide.

## Install

### Manual

+ Add `hash.js` to your scripts

### Package managers

npm: `npm install flickity-hash`

Bower: `bower install flickity-hash`

## Initialize

Enable hash behavior by setting `hash: true` in Flickity options.

``` js
// jQuery
var $carousel = $('.carousel').flickity({
  hash: true,
});
```

``` js
// vanilla JS
var flkty = $('.carousel').flickity({
  hash: true,
});
```

``` html
<!-- HTML -->
<div class="carousel" data-flickity='{ "hash": true }'>
  ...
</div>
```

## HTML

Add `id` attributes to cell elements.

``` html
<div class="carousel">
  <div class="carousel-cell" id="cell1">...</div>
  <div class="carousel-cell" id="cell2">...</div>
  <div class="carousel-cell" id="cell3">...</div>
</div>
```

---

By [Metafizzy](https://metafizzy.co) 🌈🐻
