import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">

      {/* Image */}
      <div className="h-60 w-60 bg-gray-200 mx-auto rounded mb-6"></div>

      {/* Title */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>

      {/* Price */}
      <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-4"></div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>

      {/* Rating */}
      <div className="h-4 bg-gray-200 rounded w-24 mb-6"></div>

      {/* Buttons */}
      <div className="flex gap-4">
        <div className="h-10 w-32 bg-gray-200 rounded"></div>
        <div className="h-10 w-32 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
};

export default ProductDetailsSkeleton;