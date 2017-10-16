import Intersect from 'src/IntersectionObserver'
import { createVM } from '../helpers/utils.js'

describe('Intersect', () => {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <intersect><h1>Hello World!</h1></intersect>
    `, { components: { Intersect }})
    vm.$el.querySelector('h1').textContent.should.eql('Hello World!')
  })
})
