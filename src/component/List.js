import React, {useState} from 'react'
import {data} from './db';
import '../style/List.css'

const List = () => {
    const [datas,setData] = useState(data)
    function handleDelete(id){
        const removeItem = datas.filter((singleDatum) => singleDatum.id !==id)
        setData(removeItem)
    }
    function handleRefresh(){
        window.location.reload()
    }
//     function handleAll(){
// setData([])
//     }
//     if (data.length < 0 )
// return(
//     <button>clear all</button>
// )
// }else{
//     <button> click to refresh all</button>
// }
  return (
    <div className='data'>
        {datas.map((datum)=>{
            // dissturing method
            const {priceInDollar,priceInEuro,priceInNaira,title,id} = datum
            return(
                <div className='inner-data' key={id}>
                     {/* <h4>{title}</h4>
                    <p> price in naira :{priceInNaira} </p>
                    <p> price in dollar :{priceInDollar} </p>
                    <p> price in euro :{priceInEuro} </p>
                    <button>choose plan</button> */}
                    {/* another method */}
                    <h4>{datum.title}</h4>
                    <p> price in naira :{datum.priceInNaira} </p>
                    <p> price in dollar :{datum.priceInDollar} </p>
                    <p> price in euro :{datum.priceInEuro} </p>
                    <button onClick={()=>handleDelete(id)}>Delete Item</button>
                </div>
            )
        })}
    {datas.length > 0 ? (
        <button onClick={() => setData([])}>clear all</button>
    ) : (
        <button onClick={handleRefresh}>hit to refresh</button>
    )}
    </div>
  )
}

export default List