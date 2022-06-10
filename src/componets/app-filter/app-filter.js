import { Component } from "react";
import "./app-filter.css";




class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEmployees: "btn btn-light",
            forPromotion: "btn btn-outline-light", 
            salaryMoreThen1000: "btn btn-outline-light"
        } 
    }
    render () {
        const {onFilter} = this.props
        return (
            <div className="btn-group">
                <button
                    data-filter="allEmployees"
                    className={this.state.allEmployees}
                    type="button"
                    onClick={(e) => onFilter(e)}>
                        Все сотрудники
                </button>
                <button
                    data-filter="onPromotion" 
                    className={this.state.forPromotion}
                    type="button"
                    onClick={(e) => onFilter(e)}>
                        На повышение
                </button>
                <button 
                    data-filter="salaryMoreThen1000$"
                    className={this.state.salaryMoreThen1000}
                    type="button"
                    onClick={(e) => onFilter(e)}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
    
}
export default AppFilter;

