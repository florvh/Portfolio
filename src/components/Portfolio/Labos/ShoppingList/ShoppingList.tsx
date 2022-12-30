import React from 'react';
import { useState } from 'react';
import styles from "./ShoppingList.module.css";

interface shoppingListItem {
  name: string;
  quantity: number;
}


const ShoppingList = () => {
  const [shoppingList , setShoppingList ] = useState<shoppingListItem[]>([
    {
      name: "Wortels",
      quantity: 5
    }
  ]);
  const [name , setName] = useState<string>("");
  const [quantity , setQuantity] = useState<number>(0);
  const [succesMessage , setSuccesMessage] = useState("");
  const [errorMessage , setErrorMessage] = useState("");

  const addShoppingItem = (event: any) => {
    event.preventDefault()
    if (quantity < 1) {
      setErrorMessage("quantity should be above 0");
    } else {
    setShoppingList([...shoppingList, {name: name, quantity: quantity }]);

    setSuccesMessage("Item was added");
    }
  }

  const removeShoppingItem = (index:number) => {
    let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
    setShoppingList(shoppingListCopy);
  }

  return (
    <div className={styles.shoppingList}>
        <h1>Shopping List</h1>
        <p>In this assignment it was the goal to create a simple shopping list where you can add an item and the amount and also be able to remove an item upon pressing a button</p>
      {errorMessage && <div>{errorMessage}</div>}
      {succesMessage &&<div>{succesMessage}</div>}

      <div className={styles.shoppingAddForm}>
        <form action="">
          <label htmlFor="">Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
          <label htmlFor="">Quantity:</label>
          <input type="number" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
          <button onClick={addShoppingItem}>Add</button>
        </form>
      </div>

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
          {
            shoppingList.map((item, index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><button onClick={() => {removeShoppingItem(index)}}>Remove</button></td>
              </tr>
            ))
          }
        </table>  
      </div>
    </div>
  );
}


export default ShoppingList;
