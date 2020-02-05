import React from "react";
import LessonTabItem from "./LessonTabItem";

const LessonTab = ({lessons}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <LessonTabItem
                    key={lesson._id}
                    lesson={lesson}/>
            )
        }
        <li className="nav-item">
            <button>
                <i className="fa fa-plus"></i>
            </button>
        </li>
    </ul>

export default LessonTab
