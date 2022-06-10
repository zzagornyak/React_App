import { Component } from "react";
import EmployeesListItem from "../app-employees-list-item/app-employees-list-item"
import "./app-employees-list.css"

class EmployeesList extends Component {

    // constructor(props) {
    //     super(props)
    // }
    render() {
        const {data, onDelete, onToggleProp} = this.props
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)} 
                onToggleProp={(elem) => onToggleProp(id, elem.currentTarget.getAttribute("data-toggle"))}/>
            )
        })
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    }
}

export default EmployeesList


