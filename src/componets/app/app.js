import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../app-employees-list/app-employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

import "./app.css"


class App extends Component{
    constructor (props) {
        super(props);
        this.stateValue = {
            data: [
                {name: "John Connor", salary: "800", increase: false, promotion: false, id:1},
                {name:"Lida Hamilton", salary: "1500", increase: false, promotion: false, id:2},
                {name:"Eughene Zahorniak", salary: "2500", increase: false, promotion: false, id:3}
            ]
        }
        this.state = {
            data: [
                {name: "John Connor", salary: "800", increase: false, promotion: false, id:1},
                {name:"Lida Hamilton", salary: "1500", increase: false, promotion: false, id:2},
                {name:"Eughene Zahorniak", salary: "2500", increase: false, promotion: false, id:3}
            ]
        }
        this.maxId = 4;
    }
    refreshStateData = () => {
        this.setState(() => {
            return {
                data : [...this.stateValue.data]
            }
        })    
    }
    
    onFilter = (e) => {
        const filterMethod = e.currentTarget.getAttribute("data-filter");
        if (filterMethod === "allEmployees") {
            return this.refreshStateData()
        }
        if (filterMethod === "salaryMoreThen1000$") {
            return this.setState(() => ({
                data : this.stateValue.data.filter((elem) => +elem.salary > 1000)
            }))
        }
        if (filterMethod === "onPromotion") {
            return this.setState(() => ({
                data : this.stateValue.data.filter((elem) => elem.promotion)
            }))
        }
    }

    onToggleProp = (id, prop) => {
        this.stateValue.data = 
            this.stateValue.data.map((elem) => {
                if (elem.id === id) {
                    return {...elem, [prop]: !elem[prop]}
                } else {
                    return elem
                }
            })

        this.refreshStateData()
    }
    
    
     addItem = (name, salary) => {
        if (name && salary) {
            this.stateValue.data.push({
                name: name, 
                salary: salary, 
                increase: false,
                promotion: false, 
                id: this.maxId++})
            this.refreshStateData()
        } else {
            alert("Для добавления нового сотрудника введите его имя и зарплату")
        }
        


    }
    deleteItem = (id) => {
        this.stateValue.data = this.stateValue.data.filter((item) => {
            return item.id !== id
        })

        this.refreshStateData()
    }


    render() {
        
        
        return ( 
            <div className="app">
                <AppInfo 
                allEmployees={this.state.data.length}
                increased={this.state.data.filter((elem) => {
                    return elem.increase
                }).length}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter
                        onFilter={this.onFilter}/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
                
            </div> 
        )
    }
}

export default App;