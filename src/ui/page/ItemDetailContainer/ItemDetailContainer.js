import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../../api/firebase/config/firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { SkeletonCard } from "../Skeleton/ProductSkeleton";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionProductos = collection(db, "productos");
    const refeDelDoc = doc(collectionProductos, id);
    const consulta = getDoc(refeDelDoc);

    consulta
      .then((resultado) => {
        const producto = { id: resultado.id, ...resultado.data() };

        setProduct(producto);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>{loading ? <SkeletonCard /> : <ItemDetail product={product} />}</div>
  );
};

export default ItemDetailContainer;
