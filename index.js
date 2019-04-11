import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  onClick = () => {
    this.count = this.count || 1
    toastr.options = {
      positionClass : 'toast-top-full-width',
      hideDuration: 300,
      timeOut: 60000
    }
    toastr.clear()
    setTimeout(() => toastr.success(`Settings updated ${this.count++}`), 300)
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happe :)
        </p>
        <button onClick={this.onClick}>click me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
