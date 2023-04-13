import React,{useState} from 'react';
// import { useState } from 'react';

const Hooks = () => {
    // const [age,setAge]=useState(50)
    const [age,setAge] = useState(50)
    const [person,setPerson] = useState({
        name:'Martin',
        state:'Anambra',
        gender:'male',
        Age:50,
    })

    // let age = 50
       function getPerson(){
        if(person.Age === 50){
            setPerson({
              name: 'Oyin',
              state: 'Ogun state',
              gender: 'female',
              Age: 100,
            })

        }else{
            setPerson()({
        name:'Martin',
        state:'Anambra',
        gender:'male',
        Age:50
            })
                
            
        }

       }
function getPerson(){
    if (person.name === 'Martin'){
        setPerson({
            name: 'Oyin',
            state: 'Ogun state',
        })
    }
}

    // console.log(useState('Hello Taiwo'));

  return (
    <div>

        <h1>useState Basics</h1>
        {/* <p>{age}  </p>
        <button className="btn" onClick={handleClick}>
            click to change age
        </button> */}
        <h2>My name is {person.name},I am {person.Age} years old,I am from {person.state} and also a {person.gender}</h2>
        <button className="btn" onClick={getPerson}>
            click to change person details
        </button>
    </div>
  )
}

export default Hooks


