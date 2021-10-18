import './employers-list-item.css'
import { Component } from 'react';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bonus: false,
            star: false
        }
    }

    onBonus = () => {
        this.setState(({bonus}) => ({bonus: !bonus}))
        console.log(this);
    }

    onStar = () => {
        this.setState(({star}) => ({star: !star}))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {bonus, star} = this.state;
        const bonusClass = bonus ? ' increase' : '';
        const starClass = star ? ' like' : '';
        const classNames = "list-group-item d-flex justify-content-between" + bonusClass + starClass;

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{name}</span>
                <input disabled type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.onBonus}>
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
}

export {EmployersListItem}