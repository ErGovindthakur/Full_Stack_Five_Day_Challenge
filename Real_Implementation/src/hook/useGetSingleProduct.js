import { useEffect, useState } from "react";

export const useGetSingleProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState(null);

  const handleSingleProduct = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      const data = await res.json();
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId) {
      handleSingleProduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return singleProduct;
};