import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'app-child-two',
  styleUrl: 'app-child-two.css',
  shadow: true,
})

export class AppChildTwo {

  @State() text: string = 'placeholder...';

  @Method()
  async addText(newText) {
    this.text = newText;
  }

  render = () => (
    <div>
      <h2>Child 2</h2>
      <button onClick={() => this.addText('text from child 2')}>Click me I'm from child 2</button>

      <h2>Text Area that's in Child 2</h2>
      <div class='text-area'>
        {this.text}
      </div>
    </div>
  )

}