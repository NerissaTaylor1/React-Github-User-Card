import React from 'react'
export default function Users(props) {
    return (
        <div className="container">
            <div className="user">

                <h1>{props.user.login}</h1>

                <img src={props.user.avatar_url} alt="me" />
                <p>Location:{props.user.location}</p><br />
                <p>Followers:{props.user.followers}</p><br />
                <p>Following:{props.user.following}</p><br />
            </div>
        </div>
    )
}
