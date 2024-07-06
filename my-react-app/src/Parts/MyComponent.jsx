
import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState('guest')
    const updateName = () => {
        setName("Big Boss");
    }

    const [age, setAge] = useState(0)
    const incrementAge = () => {
        setAge(age + 1);
    }
    
    const [isEmployed, setIsEmployed] = useState(false)
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age {age}</p>
            <button onClick={incrementAge}>increment age</button>

            <p>is employed {isEmployed ? 'yes' : 'no'}</p>
            <button onClick={toggleEmployedStatus}>toggle status</button>
        </div>
    )
}

export default MyComponent;
