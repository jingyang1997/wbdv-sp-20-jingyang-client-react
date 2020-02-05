import React from "react";
import TopicPillItem from './TopicPillItem'

const TopicPill = ({topics}) =>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <TopicPillItem
                    key={topic._id}
                    topic={topic}/>
            )
        }
        <li className="nav-item">
            <button>
                <i className="fa fa-plus"></i>
            </button>
        </li>
    </ul>

export default TopicPill