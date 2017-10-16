import Mutate from 'src/MutationObserver'
import { createVM } from '../helpers/utils.js'

describe('Mutate', () => {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <mutate><h1>Hello World!</h1></mutate>
    `, { components: { Mutate }})
    vm.$el.querySelector('h1').textContent.should.eql('Hello World!')
  })
})
