import React from 'react';

export default function MenuItem({ item }) {
  return (
    <div className="item" key={item.id}>
      <div className="image">
        <img src={item.img} alt={item.title} srcSet="" />
      </div>
      <div className="mid">
        <span className="title">{item.title}</span>
        <span className="price">${item.price}</span>
      </div>
      <div className="info">{item.desc}</div>
    </div>
  );
}
