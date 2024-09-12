import React from 'react';
import axios from 'axios';
import './App.css';
import Users from "./components/Users";
import FollowerList from "./components/FollowerList";
import GitHubCalendar from 'react-github-calendar';

class App extends React.Component {
  state = {
    userData: {},
    followers: [],
    username: "nerissaj",
    _isMounted: false

  }

  componentDidMount() {
    this._isMounted = true;

    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        if (this._isMounted) {
          // console.log(res.data);
          this.setState({ userData: res.data });
        }
      });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   
  componentWillUnmount() {
    this._isMounted = false;

  }

  render() {
    return (
      <div className="App">
        <div className="calendar">
          <GitHubCalendar username={`${this.state.username}`} fullYear={false} />
        </div>
        <Users user={this.state.userData} />
        <FollowerList />
      </div>
    );
  }
}
export default App;
