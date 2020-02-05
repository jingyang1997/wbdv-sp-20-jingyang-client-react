import React from "react";
import ModuleList from "./ModuleList";
import './CourseEditor.css'
import LessonTab from "./LessonTab";
import TopicPill from './TopicPill'
import WidgetList from './WidgetList'
const CourseEditor = ({hideCourseEditor}) =>
    <div>
        <button onClick={hideCourseEditor}>Close</button>
        <h2>Course Editor</h2>
        <div className="row">
            <div className="col-4">
                <h4>Module List</h4>
                <ModuleList modules={[
                    {_id: "123", title: "CSS"},
                    {_id: "234", title: "HTML"},
                    {_id: "345", title: "Javascript"},
                    {_id: "456", title: "JQuery"},
                    {_id: "567", title: "React JS"},
                ]}/>
            </div>
            <div className="col-8">
                <div>
                    <h4>Lesson Tabs</h4>
                    <LessonTab lessons={
                        [
                            {_id:"1234", title: "Build"},
                            {_id:"2345", title: "Pages"},
                            {_id:"2345", title: "Theme"}
                        ]
                    }
                    />
                </div>
                <div>
                    <h4>Topic Pills</h4>
                    <TopicPill topics={
                        [
                            {_id:"11", title:"Topic1"},
                            {_id:"22", title:"Topic2"},
                            {_id:"33", title:"Topic3"}

                        ]
                    }
                    />
                </div>
                <div>
                    <h4>
                        Heading Widget 
                        <div className="float-right">
                        <i className="fa fa-arrow-up"></i> 
                        <i className="fa fa-arrow-down"></i>
                        <button><i className="fa fa-sort"></i></button>
                        <button><i className="fa fa-window-close"></i></button>
                        </div>
                    </h4>
                    <WidgetList widgets={
                        [
                            {_id:"1", title:"widget1"},
                            {_id:"2", title:"widget2"},
                        ]
                    }
                    />
                    
                </div>
            </div>
        </div>
    </div>

export default CourseEditor
