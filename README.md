# vue-observable

[![npm](https://img.shields.io/npm/v/vue-observable.svg)](https://www.npmjs.com/package/vue-observable) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Observer Utilities

## Installation

```bash
npm install --save vue-observable
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueObservable from 'vue-observable'

Vue.use(VueObservable)
```

or

```js
import {intersect, mutate} from 'vue-observable'

export default {
  components: {intersect, mutate}
}
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-observable/dist/vue-observable.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-observable"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
