import React from "react";

const TopicPillItem = ({topic}) =>
    <li className="nav-item">
        <a className="nav-link" href="#">{topic.title}</a>
    </li>

export default TopicPillItem