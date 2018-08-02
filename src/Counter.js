import React from 'react';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(prevState=>{
      return {
        counter: prevState.counter + 1
      }
    })
  }
  render(){
    const { counter} = this.state;
    return(
      <div>
          Counter: {counter}<br />
          <button onClick={this.increment} >Increment </button>
      </div>
    )
  }
}