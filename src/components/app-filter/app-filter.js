import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'star', label: 'На повышение' },
        { name: '1000', label: 'З/П больше 1000$' },
    ]

    const onFilter = (filter) => {
        props.onFilter(filter);
    }

    const buttons = buttonsData.map(({name, label}) => {
        const isActive = props.filter === name;
        const activeClass = isActive ? 'btn btn-light' : "btn btn-outline-light";
        return (
            <button type="button"
                    className={`btn ${activeClass}`}
                    onClick={() => onFilter(name)}
                    key={name}>
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

export {AppFilter}