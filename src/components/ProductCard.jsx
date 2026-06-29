import { Link } from "react-router-dom";

export default function ProductCard({ product }) {

  return (

    <div className="col-md-3 mb-4">

      <div className="card h-100">

        <img
          src={product.image}
          height="200"
          alt=""
          className="card-img-top"
        />

        <div className="card-body">

          <h5>{product.title}</h5>

          <p>${product.price}</p>

          <Link
            className="btn btn-primary"
            to={`/product/${product.id}`}
          >
            View
          </Link>

        </div>

      </div>

    </div>

  );
}