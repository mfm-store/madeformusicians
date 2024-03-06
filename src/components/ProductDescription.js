import React, { useState } from 'react';

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md mb-4">
      <div
        className={`text-gray-600 mb-2 flex flex-col list-disc ${isExpanded ? 'h-auto' : 'h-24 overflow-hidden'
          }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Render "Show More" button if content is taller than 24px */}
      {!isExpanded && description?.length > 180 && (
        <button onClick={toggleExpand} className="text-blue-600 hover:text-blue-800">
          Show More
        </button>
      )}

      {/* Render "Show Less" button if content is expanded */}
      {isExpanded && (
        <button onClick={toggleExpand} className="text-blue-600 hover:text-blue-800">
          Show Less
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
