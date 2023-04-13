import React, { useState } from 'react'
import {BiSun} from 'react-icons/bi';
import {FaMoon} from 'react-icons/fa';

const Shape = () => {
    const [naCircle, setNaCircle] = useState(true)
  return (
    <div>
        <h2>Toggling shape with css</h2>
        <div className={naCircle ? 'circle' : 'square'}></div>
        <div className={naCircle ? 'lightMode' : 'darkMode'}>
            <button onClick={() => setNaCircle(!naCircle)}> {naCircle ? <FaMoon size={40} /> : <BiSun size={40}/>} </button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolorum at neque nostrum error modi, dicta consequatur autem fugiat omnis sunt? Harum iure cumque recusandae, labore facilis perspiciatis error quae omnis ipsam? Fugiat earum eveniet laboriosam odit similique unde ullam iure impedit hic facilis dolor, delectus dicta quia adipisci atque maiores, quasi libero doloribus ipsum in? Debitis commodi illum id ad ut placeat? Debitis placeat, sequi nostrum iusto pariatur totam nemo ipsa necessitatibus numquam temporibus dolores voluptatibus eveniet error incidunt sit, enim est praesentium? Incidunt repellendus aperiam ratione, necessitatibus possimus unde quia ipsam dolor officiis, magni praesentium porro. Suscipit, ipsum.</p>
        </div>
    </div>
  )
}

export default Shape
