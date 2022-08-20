import {
  faAngleUp,
  faAngleDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import smartPhones from './data';

// let totalPrice = 0;
const upIcon = <FontAwesomeIcon icon={faAngleUp} />;
const downIcon = <FontAwesomeIcon icon={faAngleDown} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;

export default function ShowItems({ passTotalItems }) {
  const [items, setItem] = useState(smartPhones);
  let price = 0;
  let totalItems = 0;
  items.forEach((item) => {
    price += item.price * item.amount;
    totalItems += item.amount;
  });
  passTotalItems(totalItems);

  function GetImage({ smartPhone }) {
    return (
      <div className="image">
        <img src={smartPhone.img} alt={smartPhone.title} srcSet="" />
      </div>
    );
  }

  function GetContent({ smartPhone }) {
    return (
      <div className="content">
        <div className="smartphone-name">{smartPhone.title}</div>
        <div className="smartphone-price">${smartPhone.price}</div>
        <button className="btn" onClick={removeItem}>
          {crossIcon}
        </button>
      </div>
    );
  }

  function GetButtons({ index }) {
    return (
      <div className="buttons">
        <span className="up-icon" onClick={changeCounter} value={1}>
          {upIcon}
        </span>
        <span className="amount">{items[index].amount}</span>
        <span className="down-icon" value={-1} onClick={changeCounter}>
          {downIcon}
        </span>
      </div>
    );
  }
  function GetCartItems() {
    return (
      <>
        <div className="smartPhones">
          {items.map((smartPhone, index) => {
            return (
              <div className="smartPhone" key={index} id={smartPhone.id}>
                <GetImage smartPhone={smartPhone} />
                <GetContent smartPhone={smartPhone} />
                <GetButtons smartPhone={smartPhone} index={index} />
              </div>
            );
          })}
        </div>
        <div className="underline"></div>
        <div className="footer">
          <span className="total">Total {totalItems}</span>
          <span className="Price">${price.toFixed(2)}</span>
        </div>
        <div className="clear">
          <button className=" clear-cart" onClick={() => setItem([])}>
            Clear Cart
          </button>
        </div>
      </>
    );
  }

  function EmptyCart() {
    return <div className="empty-cart">is currently empty</div>;
  }

  function removeItem(e) {
    const selectedId = +e.target.closest('.smartPhone').id;

    setItem((prevItem) => {
      return prevItem.filter((item) => {
        return item.id !== selectedId;
      });
    });
  }
  function changeCounter(e) {
    const incrementCounter = +e.target.parentElement.getAttribute('value');
    console.log(+e.target.parentElement.getAttribute('value'));
    const selectedId = +e.target.closest('.smartPhone').id;
    const selectedItemIndex = items.findIndex((item) => item.id === selectedId);

    items[selectedItemIndex] = {
      ...items[selectedItemIndex],
      amount: items[selectedItemIndex].amount + incrementCounter,
    };
    if (items[selectedItemIndex].amount === 0) {
      return removeItem(e);
    }

    setItem((prevItem) => {
      return [...prevItem];
    });
  }
  return (
    <div className="cart-items">
      <h1>Your Bag</h1>
      {items.length === 0 ? <EmptyCart /> : <GetCartItems />}
    </div>
  );
}
