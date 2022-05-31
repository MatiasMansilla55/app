//import <algo> from "ruta relativa/ruta paquete"

//Traigo la libreria de React
import React from 'react';

//Traigo la libreria de ReactDOM
import ReactDOM from 'react-dom/client';

import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';




//Agarrar una app que ya exista de REACT
// const App = () => "Hola Mundo con JSX y Arrow Function"
//Mostrar la APP en el DOM
//Crea un punto inicial (root) en donde la App se va a montar (dibujar)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

