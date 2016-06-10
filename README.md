# only-target-loader

A loader that returns only for specified targets (others will be nullified).

This allow to skip part of dependency tree for specific builds.

``` javascript
var server = require('only-target?target=node!./server');
var client = require('only-target?target=web!./client');
```
