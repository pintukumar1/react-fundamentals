import React from 'react'
import './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = []

    if(props.persons.length <= 2) {
        assignedClasses.push('red')
    }

    if(props.persons.length <= 1) {
        assignedClasses.push('bold')
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is actually working!</p>
            <button onClick={props.clicked}
            className="BtnStyle">Toggle Persons</button>
        </div>
    )
}

export default cockpit