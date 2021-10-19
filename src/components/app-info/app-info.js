import './app-info.css'

const AppInfo = ({bonusCount, empCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {}</h1>
            <h2>Общее число сотрудников: {empCount}</h2>
            <h2>Премию получат: {bonusCount}</h2>
        </div>
    )
}

export {AppInfo}