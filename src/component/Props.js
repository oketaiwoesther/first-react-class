import React from 'react'


const Props = ({taiwo,title,age}) => {
    console.log(taiwo);
  return (
    <div>
      <h2> {title}  is {age} years old </h2>
      <h2>Child Component</h2>
      <h2> Lorem ipsum dolor sit </h2>
      {taiwo.map((dd)=>{
        return(
            
                <div>
                    <h2> {dd.name} </h2>
                </div>
        )
      })}
    </div>
  )
}

export default Props
