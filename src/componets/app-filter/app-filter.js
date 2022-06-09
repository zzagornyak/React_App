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
                    className={this.state.allEmployees}
                    type="button"
                    onClick={() => onFilter("gg")}>
                        Все сотрудники
                </button>
                <button 
                    className={this.state.forPromotion}
                    type="button">
                        На повышение
                </button>
                <button 
                    className={this.state.salaryMoreThen1000}
                    type="button">
                        З/П больше 1000$
                </button>
            </div>
        )
    }
    
}
export default AppFilter;

