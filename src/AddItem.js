import React, { useState } from "react";

export default function AddItem() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([
    { id: 1, checked: true, text: "practice coding" },
    { id: 2, checked: false, text: "practice coding" },
    { id: 3, checked: false, text: "practice coding" }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
    }
  };
  
  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleCheckboxClick = (id) => {
    const updatedItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItem);
    localStorage.setItem("checkbox", JSON.stringify(updatedItem));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("checkbox", JSON.stringify(updatedItems));
  };

  const addItem = ( ) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, text: newItem };
    const newItemadd = [...items, addNewItem];
    setItems(newItemadd);
  };

  return (
    <div>
      <form className="formData" onSubmit={handleSubmit}>
        <label htmlFor="forminput1">Add Item</label>
        <input
          autoFocus
          type="text"
          id="forminput1"
          placeholder="add item"
          value={newItem}
          onChange={handleChange}
          required
        />
        <button type="submit" aria-label="submit-data">Submit</button>
      </form>
      <div className="todo-container">
        <main>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxClick(item.id)}
                  checked={item.checked}
                />
                <label>{item.text}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
