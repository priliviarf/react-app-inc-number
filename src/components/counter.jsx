import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 1
  }

  // custom styles
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  }

  // custom function
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-center m-5">
          <button onClick={this.handleDecrement} className={this.addDeButtonClass()}> Decrement</button>
          <span style={this.styles}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className="mx-5 btn btn-primary"> Increment</button>
        </div>
      </React.Fragment>
    );
  }

  addDeButtonClass() {
    let addDe = "mx-5 btn btn-de ";
    addDe += (this.state.count <= 0) ? "disabled" : "btn-primary";
    return addDe;
  }

  formatCount() {
    const count = this.state.count
    return count === 0 ? 'Zero' : count
  }
}

export default Counter