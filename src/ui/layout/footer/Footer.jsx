import React from 'react'
import {NavLink} from "react-router-dom"; 
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <NavLink to="category/ropa">Categoria 1</NavLink>
        <NavLink to="category/libros">Categoria 2</NavLink>
        <NavLink to="category/informatica">Categoria 3</NavLink>
    </footer>
  )
}

export default Footer
