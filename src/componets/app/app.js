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
        
        this.state = {
            data: [
                {name: "John Connor", salary: "800", increase: false, promotion: false, id:1},
                {name:"Lida Hamilton", salary: "1500", increase: false, promotion: false, id:2},
                {name:"Eughene Zahorniak", salary: "2500", increase: false, promotion: false, id:3}
            ],
            term: "",
            filter: "all"
        }
        
        this.maxId = 4;
    }

    onFilter = (items, filter) => {

        switch (filter) {
            case "toPromotion":
                return items.filter( item => item.promotion )
            case "salaryMoreThen1000$":
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }
    
    
     addItem = (name, salary) => {
        if (name && salary) {
            this.setState(({data}) => {
                return {
                    data: [...data, {
                        name: name, 
                        salary: salary, 
                        increase: false,
                        promotion: false, 
                        id: this.maxId++}]
                }
            })
        } else {
            alert("Для добавления нового сотрудника введите его имя и зарплату")
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id )
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.toLowerCase().includes(term.toLowerCase())
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    render() {

        const {data, term, filter} = this.state
        const visibleData = this.onFilter(this.searchEmp(data, term), filter)
        
        return ( 
            <div className="app">
                <AppInfo 
                allEmployees={this.state.data.length}
                increased={this.state.data.filter((elem) => {
                    return elem.increase
                }).length}/>
    
                <div className="search-panel">

                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>

                    <AppFilter 
                        filter={filter}
                        onUpdateFilter={this.onUpdateFilter}/>
                </div>

                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>

                <EmployeesAddForm 
                    onAdd={this.addItem}/>
                
            </div> 
        )
    }
}

export default App;