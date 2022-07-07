import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "../ItemDetail/ItemDetail.css";
import { Link } from "react-router-dom";
import { context } from "../../../api/context/CartContext/CartContext";
import Swal from "sweetalert2";
const ItemDetail = ({ product }) => {
  const [cantidad, setCantidadAComprar] = useState(true);

  const resultado = useContext(context);

  const onAdd = (cantidad) => {
    resultado.isIncart(product.id) === true &&
    product.stock <= resultado.totalProducts()
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "NO HAY STOCK DE ESTE PRODUCTO!!",
          footer: '<a href="">Why do I have this issue?</a>',
        })
      : resultado.addProduct(product, cantidad);
    setCantidadAComprar(false);
  };

  return (
    <div className="Detail-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>precio:${product.price}</p>
      <p>Stock:{product.stock}</p>
      <p>id:{product.id}</p>

      {cantidad === true ? (
        <ItemCount
          className="item-count"
          stock={product.stock}
          initial={1}
          onAdd={onAdd}
        />
      ) : (
        <Link to="/cart">
          <button className="alert alert-success" onClick={() => onAdd}>
            Terminar Comprar
          </button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
