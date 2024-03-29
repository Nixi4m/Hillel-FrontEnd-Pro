import React from 'react';

const ArticleCategories = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div>
      <h2>Article Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCategories;
