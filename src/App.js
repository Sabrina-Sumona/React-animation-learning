import React, { Component } from 'react';
import './App.css';
// for anime transition is used
import { Transition } from 'react-transition-group';

class App extends Component {
  state = {
    show: true
  }
  render() {
    // const style = {
    //   // display: this.state.show ? "block" : "none",
    //   background: "black",
    //   color: "white",
    //   borderRadius: 4
    // }
    return (
      <div className="App" >
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
        {/* if in={true} its try to display, else hide*/}
        {/* timeout shows the running time of anime */}
        {/* 4 stages of transition:
            when true: 
            entering & entered,
            when false:
            exiting & exited */}
        <Transition in={this.state.show} timeout={1000}>
          {
            mode => (
              // <p>{mode}</p>
              <div style={{
                background: "black",
                color: "white",
                borderRadius: 4,
                transition: 'opacity 1s ease-out',
                // opacity: mode === "exiting" ? 0 : 1
                opacity: mode === "exited" ? 0 : 1
              }}>
                <p>This is Sabrina Sumona</p>
              </div>
            )
          }
        </Transition>
      </div >
    );
  }
}

export default App;
