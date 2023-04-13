const Dynamic =()=>{
    let gender = 'female';
    let age = 30;
    let friends = ['Ibrahim', 'Praise', 'Taiwo', 'Abiodun']
    let random = Math.random()*50 
    // let googleLink = https://web.google.com
    
    return(
        <div>
            <h2>Dynamic component</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <h4>Oyin is a {gender} and she is {age} years old, she has {friends.length} friends, see dem {friends.join(' , ')}</h4>
            <h4>{Math.random()}</h4>
            <h4>{random}</h4>
            <a target='_blank' href="https://www.twitter.com">Link to Google</a>
            {/* <a href={googleLink}>Link to Google</a> */}
        </div>
    )
}
export default Dynamic