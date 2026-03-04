import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../hook/useGetSingleProduct";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

const ProductDetails = () => {
  const { productId } = useParams();

  const product = useGetSingleProduct(productId);

  if (!product) return <ProductDetailsSkeleton />;

  return (
    <div className="max-w-4xl mx-auto p-6">

      <img
        src={product.image}
        alt={product.title}
        className="h-60 mx-auto"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

      <p className="text-blue-600 text-xl font-bold">
        ${product.price}
      </p>

      <p className="mt-2">{product.description}</p>

      <p className="mt-2 text-yellow-500">
        ⭐ {product.rating.rate}
      </p>

       {/* Buttons */}
          <div className="flex gap-4">

            <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">
              Add to Cart
            </button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>

          </div>
    </div>
  );
};

export default ProductDetails;