# simple css framework

Tested on IE8+, Opera 10+, Chrome14+, Firefox29+, Safari8+

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

css:
```html
<link rel="stylesheet" href="./bower_components/simple-css-framework/grid.css">
```
