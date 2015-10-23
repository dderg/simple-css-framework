# simple css framework

Tested on IE8+, Opera 10+, Chrome14+, Firefox29+, Safari8+

<!-- [![Build Status](https://travis-ci.org/prog666/simple-css-framework.svg?branch=gh-pages)](https://travis-ci.org/prog666/simple-css-framework) -->

## Installation

```sh
bower install --save simple-css-framework
```

stylus:
```stylus
@require "../src/grid"
```

default options, set before including grid
```stylus
colsclassname = "cols"
rowclassname = "row"
default-cols = 12
maxWidth = 1000px
padding = 10px
mobile = "only screen and (max-width: 520px)"
not-mobile = "only screen and (min-width: 521px)"

```

by default grid is built for desktop and mobile, if you want to exclude it just set this variables before including the grid

to make custom cols use

```stylus
amount = 1
from = 5
suffix = 'md'
media only screen and (max-width: 1024px) and (min-width: 768px)
	cols(amount, divider, suffix)
```
will make class .cols-sm-1-5 which will be 20% wide on tablets


css:
```html
<link rel="stylesheet" href="./bower_components/simple-css-framework/grid.css">
```
