import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ProductDetails() {

  const { id } = useParams();

  const product = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return (

    <div className="container mt-4">

      <h2>{product.title}</h2>

      <img src={product.image} width="200" alt="" />

      <h3>${product.price}</h3>

      <p>{product.description}</p>

    </div>

  );
}