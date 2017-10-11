import React, { Component } from 'react'

export default class App extends Component {
  clickHandler() {
    const hello = 'hello'
    console.log('somehing')
  }

  render() {
    return (
      <div>
        <button id="addNewObserver" onClick={this.clickHandler}>
          Add New Observer checkbox
        </button>
        <input id="mainCheckbox" type="checkbox" />
        <div id="observersContainer" />
      </div>
    )
  }
}
