import React,{useState} from 'react'
import { clientDetails } from './db'
import '../style/style1.css'

const Newlist = () => {
    const [Newlist] = useState(clientDetails)
  return(
       <div className='back'>
        {Newlist.map((datum)=>{
            const{id,name,title,img} = datum
            return(
            <div>
             <h4>{title}</h4>
             <h4>{name}</h4>
             <h4>{id}</h4>
             <img src={img} alt="" />
            </div>
            )
        })}

    </div>
  )
}

export default Newlist
