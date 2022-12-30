import React, { FC } from 'react';
import styles from './Portfolio.module.css';
import {  NavLink } from "react-router-dom";

const Portfolio = () => {

  return(
    <div className={styles.Portfolio} data-testid="Portfolio">
      <h1>Portfolio</h1>
      <div className={styles.nav}>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="ShoppingList">Shopping List</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Filtering">Filtering</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="CounterList">Counter List</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Slots">Slots</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="TTT">Tic Tac Toe</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Interval">Interval</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Todo">Todo</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Pokemon">Pokemon</NavLink>
      </div>
      <p>Click on of the buttons above to navigate to a page containing an asignment i made during my time in school. This way you can see where my knowlage is regarding react</p>
    </div>
  );
}

export default Portfolio;
