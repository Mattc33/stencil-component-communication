import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-child-one',
  styleUrl: 'app-child-one.css',
  shadow: true,
})

export class AppChildOne {

  @Prop() parentClickHandler: Function;

  render = () => (
    <div>
      <h2>Child 1</h2>
      <button onClick={() => this.parentClickHandler('text from child 1')}>Click me i'm from child 1</button>
    </div>
  )

}
