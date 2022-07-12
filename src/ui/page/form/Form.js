import React from "react";

const Form = ({ handleChange, data, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <input
          placeholder="Telefono"
          type="number"
          name="phone"
          onChange={handleChange}
          value={data.phone}
        />
        <button>Finalizar Compra</button>
      </form>
    </div>
  );
};

export default Form;
