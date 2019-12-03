import React from 'react'

export default function Users(props) {
    return (
        <div>
            <h1>{props.user.login}</h1>
            <img src={props.user.avatar_url} alt="me" />
            <p>{props.user.location}</p>
            <p>{props.user.followers}</p>
            <p>{props.user.following}</p>
        </div>
    )
}
