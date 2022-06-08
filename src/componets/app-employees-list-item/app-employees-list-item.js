import { Component } from "react";

import "./app-employees-list-item.css"

class EmployeesListItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render() {
        const {name, salary} = this.props
        const {increase, like} = this.state 
        let liClassNames = "list-group-item d-flex justify-content-between"
        if (increase) {
            liClassNames += " increase"
        }

        let spanClassNames = "list-group-item-label"
        if (like) {
            liClassNames += " like"
        }


        return (
            <li className={liClassNames}>
                <span onClick={this.onLike} className={spanClassNames}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary+"$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        onClick={this.onIncrease} 
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button onClick={() => console.log("click")} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;