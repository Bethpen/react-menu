import React from 'react';

const Categories = ({ filterCategory, categories }) => {
  return <section className='btn-container'>
    {categories.map((category, index) => {
      return <button className='filter-btn' key={index} onClick={() => filterCategory(category)}>
        {category}
      </button>
    })}
  </section>;
};

export default Categories;
