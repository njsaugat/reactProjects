import React, { useState } from 'react';
import menu from './menuData';
import MenuItem from './MenuItem';
export default function MenuItems() {
  const [actualMenu, setMenu] = useState(menu);

  function getItems(e) {
    const selected = e.target.innerText.toLowerCase();
    const updatedMenu = menu;
    if (selected === 'all') {
      setMenu(menu);
    } else {
      setMenu(
        updatedMenu.filter((item) => {
          return item.category.toLowerCase() === selected;
        })
      );
    }
  }

  return (
    <>
      <div className="navbar">
        <span onClick={getItems}>All</span>
        <span onClick={getItems}>Breakfast</span>
        <span onClick={getItems}>Lunch</span>
        <span onClick={getItems}>Shakes</span>
      </div>
      <div className="items">
        {actualMenu.map((item) => {
          return <MenuItem item={item} />;
        })}
      </div>
    </>
  );
}
