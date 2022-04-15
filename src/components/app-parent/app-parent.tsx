import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-parent',
  styleUrl: 'app-parent.css',
  shadow: true,
})

export class AppParent {

  @State() childTwoRef;

  parentClickHandler(newText) {
    this.childTwoRef?.addText(newText);
  }

  render = () => (
    <div>
        <h2>Parent</h2>
        <button onClick={() => this.parentClickHandler('text from parent')}>Click me I'm from the Parent</button>
        <hr/>
        <app-child-one parentClickHandler={newText => this.parentClickHandler(newText)}></app-child-one>
        <hr/>
        <app-child-two ref={el => (this.childTwoRef = el)}></app-child-two>
    </div>
  )

}