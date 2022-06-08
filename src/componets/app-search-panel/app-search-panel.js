import { Component } from "react";

import "./app-search-panel.css";


class SearchPanel extends Component {
    render () {
        return (
            <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Найти сотрудника" />
        )
    }
}


export default SearchPanel;