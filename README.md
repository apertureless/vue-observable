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

- [`<intersect>`](./src/IntersectionObserver.js)
- [`<mutation>`](./src/MutationObserver.js)
- [`<resize>`](./src/ResizeObserver.js)

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueObservable from 'vue-observable'

Vue.use(VueObservable)
```

or

```js
import {Intersect, Mutation, Resize} from 'vue-observable'

export default {
  components: {Intersect, Mutation, Resize}
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

### IntersectionObserver - [`<intersect>`](/src/IntersectionnObserver.js)

The `<intersect>` component will detect if a given element is in the viewport. And emit an event.

#### Props

| Prop | Required | Default |
| --- | --- | --- |
| [root](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root) | no | null
| [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) | no | `0px 0px 0px 0px`|
| [threshold](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds) | no | `[0, 0.2]`|

#### Events

- `enter`
- `leave`
- `change`

#### Usage

```html
<intersect @enter="enterMethod" @leave="leaveMethod" @change="changeMethod">
  <some-component-or-node>
</intersect>
```

### MutationObserver - [`<Mutation>`](/src/MutationObserver.js)

#### Props

| Prop | Required | Default |
| --- | --- | --- |
| [attributeFilter](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeFilter) | no | null
| [attributeOldValue](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeOldValue) | no | null
| [attributes](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes) | no | false
| [characterData](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData) | no |null
| [characterDataOldValue](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterDataOldValue) | no |null
| [childList](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/childList) | no |false
| [subtree](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/subtree) | no |false

#### Events

- `mutation`

#### Usage

```html
<mutation @mutation="mutationMethod">
  <some-component-or-node>
</mutation>
```

### ResizeObserver - [`<resize>`](/src/ResizeObserver.js)

#### Props

N/A

#### Events

- `resize`

#### Usage

```html
<resize @resize="resizeMethod">
  <some-component-or-node>
</resize>
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


## Support

<a href="https://www.buymeacoffee.com/xcqjaytbl" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
