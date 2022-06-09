
import "./app-employees-list-item.css"

const EmployeesListItem = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         promotion: false
    //     }
    // }

    const {name, salary, onDelete, onToggleIncrease, onTogglePromotion, increase, promotion} = props

    let liClassNames = "list-group-item d-flex justify-content-between"
    if (increase) {
        liClassNames += " increase"
    }

    let spanClassNames = "list-group-item-label"
    if (promotion) {
        liClassNames += " like"
    }


    return (
        <li className={liClassNames}>
            <span onClick={onTogglePromotion} className={spanClassNames}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+"$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    onClick={onToggleIncrease} 
                    type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
    
export default EmployeesListItem;