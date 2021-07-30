import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategory = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategory);

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  }

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterCategory={filterCategory} categories={categories} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
