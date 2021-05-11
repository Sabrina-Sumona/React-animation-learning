import React, { Component } from 'react';
import './App.css';
// for anime transition is used
// import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
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
    const animateTime = {
      enter: 1000,
      exit: 500
    }
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
        {/* <Transition */}
        <CSSTransition
          in={this.state.show}
          // timeout={1000}
          timeout={animateTime}
          mountOnEnter
          unmountOnExit
          // onEnter={() => console.log("onEnter")}
          // onEntering={() => console.log("onEntering")}
          // onEntered={() => console.log("onEntered")}
          // onExit={() => console.log("onExit")}
          // onExited={() => console.log("onExited")}
          // onExiting={() => console.log("onExiting")}
          // CSSTransition class
          classNames="myClass"

        >
          {
            mode => (
              // <p>{mode}</p>
              <div style={{
                background: "black",
                color: "white",
                borderRadius: 4,
                // // transition timeout & ease-out must be the same
                // transition: 'opacity 1s ease-out',
                // // opacity: mode === "exiting" ? 0 : 1
                // // opacity: mode === "exited" ? 0 : 1
                // opacity: mode === "exiting" || mode === "entering" ? 0 : 1
              }}>
                <p>This is Sabrina Sumona</p>
              </div>
            )
          }
          {/* </Transition> */}
        </CSSTransition>
        <p>I love coding</p>
      </div >
    );
  }
}

export default App;
