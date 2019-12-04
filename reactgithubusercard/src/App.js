import React from 'react';
import axios from 'axios';
import './App.css';
import Users from "./components/Users";
import Followers from "./components/Followers";
import GitHubCalendar from 'react-github-calendar';

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
    username: "nerissaj"

  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        // console.log(res.data);
        this.setState({ userData: res.data })
      })

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.followers !== this.state.followers) {
    //     console.log("new followers");

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data })
      });

  }

  render() {
    return (
      <div className="App">
        <GitHubCalendar username={`${this.state.username}`} fullYear={false} />

        <Users user={this.state.userData} />
        {/* <Followers followers={this.state.followers} /> */}


      </div>
    );
  }
}
export default App;
