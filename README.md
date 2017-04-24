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
