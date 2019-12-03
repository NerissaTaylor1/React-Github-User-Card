import React from 'react';
import axios from 'axios';
import './App.css';
import Users from "./components/Users";
import Followers from "./components/Followers";
class App extends React.Component {
  state = {
    userData: {},
    followers: []

  }
  componentDidMount() {
    axios.get('https://api.github.com/users/nerissaj')
      .then(res => {
        console.log(res.data);
        this.setState({ userData: res.data })
      })
  }
  componentDidUpdate() {
    axios.get('https://api.github.com/users/nerissaj/followers')
      .then(res => {
        console.log("followers");
        this.setState({ followers: res.data })
      })
  }
  render() {
    return (
      <div className="App">

        <Users user={this.state.userData} />
        <Followers followers={this.state.followers} />


      </div>
    );
  }
}
export default App;
