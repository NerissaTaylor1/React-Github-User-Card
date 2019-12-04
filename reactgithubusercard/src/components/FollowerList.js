import React from 'react';
import axios from "axios";



class FollowerList extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {

        axios.get(`https://api.github.com/users/nerissaj/followers`)
            .then(res => {

                console.log(res.data);
                this.setState({ followers: res.data });
            })
            .catch(err => console.log('follower not found'))

    }

    render() {



        return (
            <div className="container">
                <div className="followers">
                    {this.state.followers.map((follower, index) => {
                        return (
                            <div key={index}>
                                <h2>My Follower:{follower.login}</h2>
                                <img src={follower.avatar_url} alt="follower's avatar" /><br />

                                <a href={follower.url}>Url</a>


                            </div>


                        )

                    })}

                </div>
            </div>

        )
    }
}





export default FollowerList;