# Implementing a custom Transformer

In this document we'll guide you through the steps necessary to implement a custom Transformer.
The transformer we'll implement will use [Babel](http://babeljs.io) to transpile ES2015/ES6 JavaScript to plain ES5 JavaScript that works in all Browsers.

## Overview

Custom transformers provide an easy way to extend the build functionality of *atscm*. Basically, a transformer implements two behaviours: How atvise server nodes are mapped to files (when running `atscm pull`) and vice versa (when running `atscm push`).

**Where to store transformers**

Basically, transformers can be stored anywhere inside your *atscm* project. When using a non-ES5 configuration language (such as ES2015 or TypeScript, chosen when running `atscm init`) transformers should also be written in this language. *atscm* will handle the transpilation of your transformer code automatically. If you plan to write multiple custom transformers for your project, it is recommended to create your transformers in an own directory, e.g `./atscm`.

## Step 0: Project setup

In order to have the same starting point, create a new *atscm* project to follow this tutorial. Run `atscm init` and **pick ES2015 as configuration language**.

As suggested above, we'll store our custom transformer inside a new directory, `./atscm`. Create the directory, enter it and create an empty file called *BabelTransformer.js*:

```bash
mkdir atscm
cd atscm
echo "" > BabelTransformer.js
```

By now you should have a project containing an `./Atviseproject.babel.js` and an empty `./atscm/BabelTransformer.js` file.

## Step 1: Import *PartialTransformer* class

As we don't want to implement things twice we'll subclass *atscm*'s [Transformer class](https://doc.esdoc.org/github.com/atSCM/atscm/class/src/lib/transform/Transformer.js~Transformer.html). As our transformer shall only be used for JavaScript source files we can even use the [PartialTransformer class](https://doc.esdoc.org/github.com/atSCM/atscm/class/src/lib/transform/PartialTransformer.js~PartialTransformer.html) which supports filtering source files out of the box. As both of these classes are exported from *atscm*'s main file, importing them is pretty straightforward. Inside the *BabelTransformer.js* file add:
 
```javascript
// BabelTransformer.js

import { PartialTransformer } from 'atscm';
```

## Step 2: Create the *BabelTransformer* class

The next step is to create and export out Transformer class:

```javascript
// BabelTransformer.js

import { PartialTransformer } from 'atscm';

export default class BabelTransformer extends PartialTransformer {
  
}
```

We just created a *PartialTransformer* subclass that is exported as the file's default export. For more detailed information on ES2015's module system [take a look at the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export). 
