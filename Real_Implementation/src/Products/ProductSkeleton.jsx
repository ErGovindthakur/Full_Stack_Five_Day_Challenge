import React from 'react'

const ProductSkeleton = () => {
  return (
    <div>
      {/* Skeleton Loader */}
        {
          Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 animate-pulse"
              >
                <div className="h-40 bg-gray-200 rounded mb-4"></div>

                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>

                <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>

                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
    </div>
  )
}

export default ProductSkeleton