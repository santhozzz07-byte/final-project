import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Products() {
  const products = useFetch("https://fakestoreapi.com/products");

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>

      <div className="row">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}