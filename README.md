# vue-observable

[![npm](https://img.shields.io/npm/v/vue-observable.svg)](https://www.npmjs.com/package/vue-observable) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Abstract Vue Components to utilizing the IntersectionObserver, MutationObserver and ResizeObserver Browser APIs

🔥  Please keep in mind that you will need polyfills

## 🔧 Installation

```bash
npm install --save vue-observable
```

## 👈 Usage

### Componentlist

- [`<intersect>`]()
- [`<mutate>`]()
- [`<resize>`]()
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

## 📒 Components

### IntersectionObserver
The `<intersect>` component will detect if a given element is in the viewport. And emit an event.

#### Props

| Prop | Required | Url | Default |
| --- | --- | --- | --- |
| root | no | [url](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root) | null
| rootMargin | no | [url](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) | `0px 0px 0px 0px`|
| threshold | no | [url](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds) | `[0, 0.2]`|

#### Events
The `<intersect></intersect>` component emits following events:

- `enter`
- `leave`
- `change`

#### Usage

```html
<intersect @enter="someMethod()" @leave="someMethod()" @change="someMethod()">
  <some-component-or-node>
</intersect>
```
### MutationObserver

#### Props
#### Events
#### Usage

### ResizeObserver

#### Props
#### Events
#### Usage
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


## Support

<a href="https://www.buymeacoffee.com/xcqjaytbl" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
