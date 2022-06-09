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
        
        
        // this.data = [
        //     {name: "John Connor", salary: "800", increase: false, id:1},
        //     {name:"Lida Hamilton", salary: "1500", increase: false, id:2},
        //     {name:"Eughene Zahorniak", salary: "2500", increase: false, id:3}
        // ]

        
        this.state = {
            data: [
                {name: "John Connor", salary: "800", increase: false, promotion: false, id:1},
                {name:"Lida Hamilton", salary: "1500", increase: false, promotion: false, id:2},
                {name:"Eughene Zahorniak", salary: "2500", increase: false, promotion: false, id:3}
            ]
        }
    }
    
    onFilter = (filterMethod) => {
        // "allEmployees"
        // "salaryMoreThen1000"
        // "forPromotion"
        console.log(filterMethod)
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map((elem) => {
                if (elem.id === id) {
                    return {...elem, increase: !elem.increase}
                } else {
                    return elem
                }
            })
        }))
    }
    onTogglePromotion = (id) => {
        this.setState(({data}) => ({
            data: data.map((elem) => {
                if (elem.id === id) {
                    return {...elem, promotion: !elem.promotion}
                } else {
                    return elem
                }
            })
        }))
    }
    
     addItem = (name, salary) => {
        this.setState(({data}) => {
            return {
                data : [...data, {
                    name: name, 
                    salary: salary, 
                    increase: false,
                    promotion: false, 
                    id: this.state.data.length + 1}]
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        
        
        return ( 
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter
                        onFilter={this.onFilter}/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onTogglePromotion={this.onTogglePromotion}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
                
            </div> 
        )
    }
}

export default App;