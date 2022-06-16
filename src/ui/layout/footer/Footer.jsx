import React from 'react'
import {NavLink} from "react-router-dom"; 
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <NavLink to="category/1">Categoria 1</NavLink>
        <NavLink to="category/2">Categoria 2</NavLink>
        <NavLink to="category/3">Categoria 3</NavLink>
    </footer>
  )
}

export default Footer
