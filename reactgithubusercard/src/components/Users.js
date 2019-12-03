import React from 'react'
import GitHubCalendar from 'react-github-calendar';
export default function Users(props) {
    return (
        <div>
            <GitHubCalendar username="nerissaj" fullYear={false} />
            <h1>{props.user.login}</h1>

            <img src={props.user.avatar_url} alt="me" />
            <p>{props.user.location}</p>
            <p>{props.user.followers}</p>
            <p>{props.user.following}</p>
        </div>
    )
}
