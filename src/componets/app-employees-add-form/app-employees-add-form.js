import { Component } from "react";
import "./app-employees-add-form.css"

// import {data} from "../app/app"

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {onAdd} = this.props
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        placeholder="Имя сотрудника" 
                        required="required"/>
                    <input 
                        type="number"
                        name="salary"
                        value={salary}
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        placeholder="з/п в $ ?" />
    
                    <button onClick={(e) => {
                        e.preventDefault()
                        onAdd(name, salary)
                    }} 
                        type="submit"
                        className="btn btn-outline-light"
                        >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;