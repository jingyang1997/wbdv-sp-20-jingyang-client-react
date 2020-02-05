import React from "react";
import WidgetListItem from './WidgetListItem'

const WidgetList = ({widgets}) =>
    <ul className="list-group">
        {
            widgets.map(widget =>
                <WidgetListItem
                    key={widget._id}
                    widget={widget}/>
            )
        }
        <li className="list-group-item">
            <button className="float-right">
                <li className="fa fa-plus"></li>
            </button>
        </li>
    </ul>

export default WidgetList