import { Component } from 'react';

import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel'
import { AppFilter } from '../app-filter/app-filter';
import { EmployersList } from '../employers-list/employers-list';
import { EmployersAddForm } from '../employers-add-form/employers-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Иван Ф.', salary: 800, bonus: false, star: true, id: 1},
                {name: 'Олег Н.', salary: 1200, bonus: false, star: false, id: 2},
                {name: 'Антон З.', salary: 1800, bonus: true, star: false, id: 3}
            ],
            maxId: 3,
            term: '',
            filter: 'all',
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = ({name, salary}) => {
        if (name && salary) {
            const newItem = {
                name,
                salary,
                bonus: false,
                id: this.state.maxId + 1
            }
            this.setState(({data}) => {
                const newData = [...data, newItem];
                return {
                    data: newData,
                    maxId: newItem.id
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
        
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    } 

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        });
    }

    filterEmp = (data, filter) => {
        switch (filter) {
            case 'star':
                return data.filter((item) => {
                    return item.star
                });
            case '1000':
                return data.filter((item) => {
                    return item.salary > 1000
                });
            default:
                return data;
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const empCount = this.state.data.length;
        const bonusCount = this.state.data.filter(item => item.bonus).length;
        const filteredData = this.filterEmp(data, filter);
        const visibleData = this.searchEmp(filteredData, term);

        return (
            <div className="app">
                <AppInfo 
                bonusCount={bonusCount}
                empCount={empCount}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilter}/>
                </div>

                <EmployersList  
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App