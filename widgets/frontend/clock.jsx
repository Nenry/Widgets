import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  compnentWillUnmount() {
    clearInterval(this.intervalID);
  }

  componentDidMount(){
    this.intervalID = setInterval(this.tick.bind(this),1000);
  }

  tick () {
    this.setState({time: new Date()});
  }

  render() {
    const currentDate = this.state.time;
    let timeString = currentDate.toLocaleTimeString();
    let dateString = currentDate.toDateString();
    return(
      <div id = "clock">
        <p>{timeString}</p>
        <p>{dateString}</p>
      </div>
    );

  }
}



export default Clock;
