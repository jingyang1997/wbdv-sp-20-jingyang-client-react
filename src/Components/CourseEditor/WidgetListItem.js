import React from "react";

const WidgetListItem = ({widget}) =>
    <li className="list-group-item">
        <input defaultValue={widget.title}/>
    </li>

export default WidgetListItem