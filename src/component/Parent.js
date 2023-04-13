import React, {useState} from 'react'
import {people} from "./db"
import Props from './Props'

const Parent = () => {
    const [persons] = useState(people)
    console.log(persons);
  return (
    <div>
      <h2>Parent component</h2>
      {persons.map((person)=>{
        const {name,job,id} = person
        return(
            <div key={id}>
                <h2> {name} </h2>
                <p>{job}</p>

            </div>
        )
      }
      )}
      <Props taiwo ={persons} title = 'Mr Bankole' age= "100" /> 
    </div>
  )
}


export default Parent
