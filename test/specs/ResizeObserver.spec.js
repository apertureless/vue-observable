import Resize from 'src/ResizeObserver'
import { createVM } from '../helpers/utils.js'

describe('Resize', () => {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <resize><h1>Hello World!</h1></resize>
    `, { components: { Resize }})
    vm.$el.querySelector('h1').textContent.should.eql('Hello World!')
  })
})
