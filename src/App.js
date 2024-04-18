import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
      profession: "Software Engineer"
    },
    show: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);

    this.toggleInterval = setInterval(() => {
      this.toggleShow();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.toggleInterval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow} className="toggle-button">{show ? "Hide Profile" : "Show Profile"}</button>
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time interval since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;