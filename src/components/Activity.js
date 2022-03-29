import React from 'react';
import './components.css'

const Activity = ({ activity }) => {
    const sentence = ["", "", ""]
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (activity.activityType.includes("avourite")) sentence[2] = "favorites"
    else if (activity.activityType.includes("atchLater")) sentence[2] = "watch later"
    if (activity.activityType.includes("remove")) {
        sentence[0] = "removed"
        sentence[1] = "from"
    } else {
        sentence[0] = "added"
        sentence[1] = "to"
    }
    return (
        <li className="activity">
            <p>
                <b>{activity.user.username}</b>&nbsp;
                {sentence[0]}&nbsp;
                <b>{activity.title.title}</b>&nbsp;
                {sentence[1]}&nbsp;
                {sentence[2]} -&nbsp;
                <em>{new Date(activity.createdAt).toLocaleDateString("en-us", options)}</em>
            </p>
        </li>
    );
}

export default Activity;
