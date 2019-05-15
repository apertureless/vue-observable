export default {
  name: 'resize',
  abstract: true,
  props: {

  },
  data () {
    return {
      _observer: null
    }
  },
  created () {
    if ('ResizeObserver' in window) {
      this.$data._observer = new ResizeObserver((entries) => { // eslint-disable-line no-undef
        this.$emit('resize', [entries[0]])
      })
    } else {
      console.warn('[✋ VueObservables] You need to polyfill ResizeObserver')
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$slots.default && this.$slots.default.length > 1) {
        console.warn('[✋ VueObservables] You may only wrap one element in a <resize> component.')
      } else if (!this.$slots.default || this.$slots.default.length < 1) {
        console.warn('[✋ VueObservables] You must have one child inside a <resize> component.')
        return
      }
      this.$data._observer.observe(this.$slots.default[0].elm)
    })
  },
  destroyed () {
    this.$data._observer.disconnect()
  },
  render () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
