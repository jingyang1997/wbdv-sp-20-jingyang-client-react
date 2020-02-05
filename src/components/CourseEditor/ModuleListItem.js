import React from "react";

const ModuleListItem = ({module}) =>
    <li className="list-group-item">
        {module.title}
        <button className="float-right">
            <i className="fa fa-trash"></i>
        </button>
    </li>

export default ModuleListItem
