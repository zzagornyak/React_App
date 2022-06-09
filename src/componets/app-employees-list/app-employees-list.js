import { Component } from "react";
import EmployeesListItem from "../app-employees-list-item/app-employees-list-item"
import "./app-employees-list.css"

class EmployeesList extends Component {

    // constructor(props) {
    //     super(props)
    // }
    render() {
        const {data, onDelete, onToggleIncrease, onTogglePromotion} = this.props
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)} 
                onToggleIncrease={() => onToggleIncrease(id)}
                onTogglePromotion={() => onTogglePromotion(id)}/>
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


