import React from "react";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css";
import { db } from "../../../api/firebase/config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionProductos = collection(db, "productos");
    if (categoryId) {
      const queryFilter = query(
        collectionProductos,
        where("category", "==", categoryId)
      );
      getDocs(queryFilter).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(collectionProductos).then((res) =>
        setItems(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  if (items.length > 0) {
    return (
      <section className="products-container">
        <ItemList products={items} />
      </section>
    );
  } else {
    return (
      <div>
        <p>Cargando...</p>
        <ItemList products={items} />
      </div>
    );
  }
}

export default ItemListContainer;
