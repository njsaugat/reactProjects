import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { useEffect } from 'react';

const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

const redColor = '#ffb0b0d9';
const greenColor = '#b7f9b7cc';
const blueColor = 'rgba(225, 239, 251, 0.821)';

function ShowItemStatus({ message, backgroundColor }) {
  return (
    <div className="header" style={{ backgroundColor: backgroundColor }}>
      {message}
    </div>
  );
}
export default function AddItem() {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [buttonVal, setButtonVal] = useState('Submit');
  const [editButton, setEditButton] = useState(false);
  const [index, setIndex] = useState('');
  function postItem(e) {
    e.preventDefault();
    const inputEl = document.body.querySelector('.form-control input');
    inputEl.value = '';
    if (input === '') {
      return;
    }
    if (editButton) {
      setItem((prevItems) => {
        prevItems[index] = {
          ...prevItems[index],
          itemName: input,
        };
        return prevItems;
      });
      setEditButton(false);
      setButtonVal('Submit');
      changeItemStatus('Value Changed', blueColor);
      return;
    }

    setItem((prevItems) => {
      return [
        ...prevItems,
        {
          id: new Date().getTime() + generateRandomValue(),
          itemName: input,
        },
      ];
    });
    changeItemStatus('Item Added to the List', greenColor);
    setInput('');
  }

  function changeItemStatus(message, color) {
    setStatus(true);
    setMessage(message);
    setBackgroundColor(color);
    setTimeout(() => {
      setStatus(false);
    }, 3000);
  }
  function editItem(e) {
    const editingItemId = e.target.closest('.item').getAttribute('id');
    const index = items.findIndex((item) => item.id === +editingItemId);
    const inputEl = document.body.querySelector('.form-control input');
    inputEl.value = items[index].itemName;
    setButtonVal('Edit');
    setIndex(index);
    setEditButton(true);
  }
  function deleteItem(e) {
    const deletingItemId = e.target.closest('.item').getAttribute('id');
    setItem((prevItems) => {
      return prevItems.filter((item) => item.id !== +deletingItemId);
    });
    changeItemStatus('Item Removed', redColor);
  }
  return (
    <div className="container">
      {status ? (
        <ShowItemStatus message={message} backgroundColor={backgroundColor} />
      ) : (
        ''
      )}
      <h1>Grocery Bud</h1>
      <form action="" className="form-control">
        <input
          type="text"
          placeholder="e.g. eggs"
          onChange={(e) => {
            setInput(e.target.value ? e.target.value : '');
          }}
        />
        <button className="btn" onClick={postItem}>
          {buttonVal}
        </button>
      </form>
      <div className="items">
        {items.map((item) => {
          return (
            <div className="item" key={item.id} id={item.id}>
              <span className="item-name">{item.itemName}</span>
              <span className="edit" onClick={editItem}>
                {editIcon}
              </span>
              <span className="delete" onClick={deleteItem}>
                {deleteIcon}
              </span>
            </div>
          );
        })}
        {items.length > 0 ? (
          <div
            className="clear-items"
            onClick={(e) => {
              setItem([]);
              changeItemStatus('List emptied', blueColor);
              return;
            }}
          >
            Clear Items
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

// function ClearItem() {
//   return <div className="clear-items">Clear Items</div>;
// }

function generateRandomValue() {
  return Math.floor(Math.random() * 10000);
}
