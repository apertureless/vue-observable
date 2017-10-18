export default {
  name: 'mutate',
  abstract: true,
  props: {
    /**
     * Set to true if additions and removals of the target
     * node's child elements (including text nodes) are to be observed.
     */
    childList: {
      type: Boolean,
      default: true
    },
    /**
     * Set to true if mutations to target's data are to be observed.
     */
    characterData: {
      type: Boolean,
      default: true
    },
    /**
     * Set to true if mutations to target's attributes are to be observed.
     */
    attributes: {
      type: Boolean,
      default: true
    },
    /**
     * Set to true if mutations to target and target's descendants
     * are to be observed.
     */
    subtree: {
      type: Boolean,
      default: true
    },
    /**
     * Set to true if attributes is set to true and
     * target's attribute value before the mutation needs to be recorded.
     */
    attributeOldValue: {
      type: Boolean,
      default: false
    },
    /**
     * Set to true if characterData is set to true and target's data
     * before the mutation needs to be recorded.
     */
    characterDataOldValue: {
      type: Boolean,
      default: false
    },
    /**
     * Set to an array of attribute local names
     * (without namespace) if not all attribute mutations need to be observed.
     */
    attributeFilter: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      _observer: null
    }
  },
  created () {
    if ('MutationObserver' in window) {
      this.$data._observer = new MutationObserver((mutations) => { // eslint-disable-line no-undef
        mutations.forEach((mutation) => {
          this.$emit('mutation', [mutation])
        })
      })
    } else {
      console.warn('[✋ VueObservables] You need to polyfill MutationObserver')
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$slots.default && this.$slots.default.length > 1) {
        console.warn('[✋ VueObservables] You may only wrap one element in a <muatate> component.')
      } else if (!this.$slots.default || this.$slots.default.length < 1) {
        console.warn('[✋ VueObservables] You must have one child inside a <mutate> component.')
        return
      }
      this.$data._observer.observe(this.$slots.default[0].elm, this.$props)
    })
  },
  destroyed () {
    this.$data._observer.disconnect()
  },
  render () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
