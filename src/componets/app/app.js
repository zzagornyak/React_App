import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../app-employees-list/app-employees-list";
import EmployeesAddForm from "../app-employees-add-form/app-employees-add-form";

import "./app.css"

const data = [
    {name: "John Connor", salary: "800", increase: false, id:1},
    {name:"Lida Hamilton", salary: "1500", increase: false, id:2},
    {name:"Eughene Zahorniak", salary: "2500", increase: false, id:3}
];


class App extends Component{

    
    render() {
        
        
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={data}/>
                <EmployeesAddForm/>
                
            </div> 
        )
    }
}

export default App;
export {data};