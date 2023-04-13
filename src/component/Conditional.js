import React, {useState} from 'react'
import More from './More'
const Conditional = () => {
    const [state,setState] = useState(false)
// if ders a false in an or statement the value on d RHS wud show
// if  ders a false in an and statement d first value on LHS wud show
    let showItem = state || 'Mern Stack'
    let hideItem =state && 'Mevn Stack'
    console.log(showItem);
    console.log(hideItem);
  return (
    <div>
      <h2>Conditional renderings</h2>
      <form action=''>
        <label htmlFor=''>password</label>
        <input type='password'/>
      </form>
      {state && <More />}
      <button onClick={() => setState(!state)}>
    {state ? 'see less' : 'see more'}{' '}
        </button>
    </div>
  )
}
{/* <div>
<form>
<label htmlFor="usename">username</label>
<input type='Text' id="username" />
</form>
</div> */}
export default Conditional
