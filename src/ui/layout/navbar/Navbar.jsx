import React from 'react'
import CartWidget from '../../widget/CartWidget'
import '../navbar/nav.css'


const Navbar = () => {
  return (
    <nav className='nav'>
    <h1 className=' font-weight-bold title '>Shopify</h1>
        <a href="Footer.jsx">Footer</a>
        <a href="Main.jsx">Main</a>
        <a href="index.jsx">index</a>
        <CartWidget/>
    </nav>
  )
}

export default Navbar