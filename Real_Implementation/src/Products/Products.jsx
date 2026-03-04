import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {loading
          ? Array(8)
              .fill(null)
              .map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 mx-auto object-contain mb-4"
                  />

                  <h2 className="text-sm font-semibold line-clamp-2 mb-2">
                    {product.title}
                  </h2>

                  <p className="text-blue-600 font-bold mb-1">
                    ${product.price}
                  </p>

                  <p className="text-yellow-500 text-sm mb-3">
                    ⭐ {product.rating.rate} / 5
                  </p>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>

                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Products;