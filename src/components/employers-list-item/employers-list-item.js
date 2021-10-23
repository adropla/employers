import './employers-list-item.css'

const EmployersListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, onChangeSalary, bonus, star} = props;
    const bonusClass = bonus ? ' increase' : '';
    const starClass = star ? ' like' : '';
    const classNames = "list-group-item d-flex justify-content-between" + bonusClass + starClass;

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='star'>{name}</span>
            <div className="input-icon">
                <input type="text" className="list-group-item-input" defaultValue={salary} onBlur={onChangeSalary}/>
                <i>$</i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button"
                className="btn-cookie btn-sm"
                onClick={onToggleProp}
                data-toggle='bonus'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export {EmployersListItem}