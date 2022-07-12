import React from 'react'
import CartWidget from '../../widget/CartWidget'
import '../navbar/nav.css'
import { Link,NavLink} from "react-router-dom";


const Navbar = (Navbar) => {
  return (
    <nav className='nav'>
      <Link to="/">
    <h1 className=' font-weight-bold title '>Shopify</h1>
    </Link>

        <NavLink to="category/ropa">Ropa</NavLink>
        <NavLink to="category/libros">Libros</NavLink>
        <NavLink to="category/informatica">Informatica</NavLink>
        <CartWidget/>
    </nav>
  )
}

export default Navbar