import { Component } from "react";
import EmployeesListItem from "../app-employees-list-item/app-employees-list-item"
import "./app-employees-list.css"

class EmployeesList extends Component /* ({data}) => */ {

    render() {
        const {data} = this.props
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem key={id} {...itemProps}/>
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


