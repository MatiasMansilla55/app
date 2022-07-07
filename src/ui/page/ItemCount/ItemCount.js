import { useState } from "react";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const bajarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const confimarContador = (e) => {
    
    onAdd(contador);
  };

  return (
    <div className="mt-5 d-flex justify-content-center ">
      <p>
        {" "}
        El contador va: {contador}
        <button className="alert alert-success" onClick={aumentarContador}>
          +
        </button>
        <button className="alert alert-primary" onClick={confimarContador}>
          Confirmar
        </button>
        <button className="alert alert-danger" onClick={bajarContador}>
          -
        </button>
      </p>
    </div>
  );
};

export default ItemCount;
