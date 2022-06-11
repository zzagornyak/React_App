import { Component } from "react";

import "./app-search-panel.css";


class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
        
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render () {
        return (
            <input 
            value={this.state.term}
            type="text" 
            className="form-control search-input" 
            placeholder="Найти сотрудника" 
            onChange={this.onUpdateSearch}/>
        )
    }
}


export default SearchPanel;