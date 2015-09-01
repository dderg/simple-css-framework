# flex-grid-styl

[![Join the chat at https://gitter.im/prog666/flex-grid-styl](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/prog666/flex-grid-styl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

grid based on flex-box, 100% custom

## Installation

```sh
bower install --save flex-grid-styl
```


## Setup
### Settings
here are defaults, if you want to change them just add any of theese before requiring the grid

``` stylus
colsclassname = "cols"
rowclassname = "row"
default-cols = 12
maxWidth = 1024px
padding = 15px
```

### Include grid

``` stylus
@require "bower_components/flex-grid-styl/grid"
```

### Basic grid
builds grid like in bootstrap or foundation

``` stylus
buildClasses()
buildBasicGrid()
```

#### Mobile classes, call from media query

``` stulus
buildBasicGrid('sm')
```

## Usage

``` jade
.row
    .cols-12
    .cols-6
    .cols-6
```

### Vertical Alignment

``` jade
.row.row_vertical_middle
    .cols-4
    .cols-4
    .cols-4
```


## changelog

### 1.3.2
---
* now when row inside flex with column layout it doesn't breakes it's width

### 1.3.0
---
* vertical alignment added

### 1.2.6
----
* mozilla fix for flexbox


<!-- ### Call the mixin
    cols(many, from, suffix)
    buildBasicGrid(suffix) -->
<!-- 
#### Examples
##### Simple
###### From default amount of total cols

``` stylus
cols(1)
```
    
######Yields:

``` css
.cols-1 {
  width: 8.3333%;
  *width: 8.3023%;
}
```

##### Custom amount of total cols

``` stylus
cols(1, 5)
```

###### Yields:

``` css
.cols-1-5 {
  width: 20%;
  *width: 19.969%;
}
```

##### mobile

``` stylus
@media screen and (max-width: 40em)
    cols(1, false, "sm")
    cols(1,5,"sm")
```

###### Yields:

``` css
@media screen and (max-width: 40em) {
    .cols-sm-1 {
      width: 8.3333%;
      *width: 8.3023%;
    }
}
```
  
##### No dublicated values created
  
``` stylus  
cols(1,4)
cols(3,12)
```

###### Yields:

``` css
.cols-1-4,
.cols-3-12 {
  width: 25%;
  *width: 24.969%;
}
```

##### Try

``` stylus
for num in (1..12)
	cols(num)
```
 -->