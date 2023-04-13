import React from 'react'
import { Link } from 'react-router-dom'

const FooterRouter = () => {
  return (
    <div>
        <header>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Products</Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default FooterRouter