import React from 'react'
import CartWidget from '../../widget/CartWidget'
import '../navbar/nav.css'
import { Link,NavLink} from "react-router-dom"; //react router en los links


const Navbar = (Navbar) => {
  return (
    <nav className='nav'>
      <Link to="/">
    <h1 className=' font-weight-bold title '>Shopify</h1>
    </Link>

        <NavLink to="category/1">Categoria 1</NavLink>
        <NavLink to="category/2">Categoria 2</NavLink>
        <NavLink to="category/3">Categoria 3</NavLink>
        <CartWidget/>
    </nav>
  )
}

export default Navbar