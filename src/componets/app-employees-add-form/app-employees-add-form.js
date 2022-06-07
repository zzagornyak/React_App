import "./app-employees-add-form.css"

const EmployeeAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
                <input 
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Имя сотрудника" />
                <input 
                    type="number"
                    className="form-control new-post-label"
                    placeholder="з/п в $ ?" />

                <button
                    type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeeAddForm;