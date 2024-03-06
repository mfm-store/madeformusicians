import React, { useState } from 'react';

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description into lines
  const descriptionLines = description.split('\n');

  // Show only the first three lines if not expanded
  const visibleLines = isExpanded ? descriptionLines : descriptionLines.slice(0, 3);

  return (
    <div>
      {/* Render visible lines */}
      <ul className="text-gray-600 mb-4 flex flex-col list-disc">
        {visibleLines.map((line, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </ul>

      {/* Render "Show More" button if there are more than 3 lines */}
      {descriptionLines.length > 3 && (
        <button onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;