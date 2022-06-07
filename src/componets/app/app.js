import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../app-employees-list/app-employees-list";
import EmployeeAddForm from "../app-employees-add-form/app-employees-add-form";

import "./app.css"


function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeeAddForm/>
        </div>
    )
}

export default App;