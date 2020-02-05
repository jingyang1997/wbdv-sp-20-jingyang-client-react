import React from "react";
import {updateCourse} from "../services/CourseService";
import '../css/style.css'
import '../css/tablestyle.css'

class CourseTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course,
        currID: this.props.course._id
    }

    render() {
        return(
            <tr className="wbdv-row wbdv-course">
            <td>
                <span className="wbdv-row wbdv-icon"><i className="fa fa-fw fa-file"></i></span>
                <span className="wbdv-row wbdv-title">
                {   !this.state.editing &&
                <a href="#" onClick={this.props.showCourseEditor}>
                    {this.state.course.title}
                </a>
                }
                {
                    this.state.editing &&
                    <input
                        onChange={(e) => this.setState({
                            course: {
                                title: e.target.value
                            }
                        })}
                        value={this.state.course.title}/>
                }
                </span>
            </td>
            <td className="wbdv-small">
              <span className="wbdv-row wbdv-owner">me</span>
            </td>
            <td className="wbdv-middle">
              <span className="wbdv-row">
                  <time>2/5/2020</time>
              </span>
            </td>
            <td>
                <div id="out">
                <div className="inner">
                    <button onClick={() => this.props.deleteCourse(this.props.course)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
                <div className="inner">
                <button 
                    onClick={() => {
                        this.setState({editing: true
                        })
                    }}>
                    <i className="fa fa-pencil"></i>
                </button>
                </div>
                <div className="inner">
                <button onClick={(e) => {
                    updateCourse(this.state.currID, this.state.course).then(status => {})
                    this.setState({
                        currID: this.state.course._id,
                        editing: false
                    })
                }}>
                    <i className="fa fa-save"></i>
                </button>
                </div>
                </div>
            </td>
            </tr>
        )
    }
}


export default CourseTableRow
