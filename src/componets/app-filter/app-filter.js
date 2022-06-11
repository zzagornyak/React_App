import "./app-filter.css";


const AppFilter = (props) => {

    const buttonsArray = [
        {name: "all", label:"Все сотрудники" },
        {name: "toPromotion", label: "На повышение"},
        {name: "salaryMoreThen1000$", label: "З/П больше 1000$"}
    ]
    const buttons = buttonsArray.map(({name, label}) => {
        const active = props.filter === name;
        const classNames = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${classNames}`}
                    key={name}
                    onClick={() => props.onUpdateFilter(name)}>
                    {label}
            </button>
        )

    })

    return (
        <div className="btn-group">

            {buttons}

        </div>
    )
}

export default AppFilter;

