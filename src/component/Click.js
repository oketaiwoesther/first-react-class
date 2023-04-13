import React from 'react'

function Click () {
    function handleClick(){
        console.log('you clicked me');
    }
    let handleClickAgain = (state)=>{
        let statement =`we are now in a ${state}`
        console.log(statement);
    }
    let traineeName = 'Abiodun'
    function getName(){
        traineeName = 'Oyin'
        console.log(traineeName);
    }
    return (
        <div>
            <h2>Click events in react</h2>
            <button className='btn' onClick={handleClick}>
                click button
            </button>
            <button className='btn' onClick={() => handleClickAgain ('react class')}>
                you clicked me again
            </button>
            <h2>{traineeName}</h2>
            <button className='btn' onClick={getName}>
            click button
            </button>
        </div>
    )
}


export default Click


