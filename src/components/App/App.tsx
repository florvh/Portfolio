import { Outlet, createBrowserRouter, RouterProvider, NavLink } from "react-router-dom";
import React, { useState  } from 'react';
import styles from "./App.module.css";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import ShoppingList from "../Portfolio/Labos/ShoppingList/ShoppingList";
import Filtering from "../Portfolio/Labos/Filtering/Filtering";
import CounterList from "../Portfolio/Labos/CounterList/CounterList";
import Slots from "../Portfolio/Labos/Slots/Slots";
import TTT from "../Portfolio/Labos/TicTacToe/TTT";
import Interval from "../Portfolio/Labos/Interval/Interval";
import Todo from "../Portfolio/Labos/Todo/Todo";
import Pokemon from "../Portfolio/Labos/Pokemon/Pokemon";

export const ThemeContext = React.createContext({color: "black", setColor: (color: string) => {}});


const Root = () => {
  const [color, setColor] = useState("black");
  const bg = color === "blue" ? "blue" : "black";
  return (
    <ThemeContext.Provider value={{color: color, setColor: setColor}}>
      <div className={styles.container} style={{backgroundColor: bg}}>
          <div className={styles.head}>Portfolio Flor van Hassel
          <div className={styles.nav}>
              <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/" >Home</NavLink>
              <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="Portfolio">Portfolio</NavLink>
              <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="contact">Contact</NavLink>  
          </div>
            <button onClick={() => { setColor(color === "blue" ? "black" : "blue")}}>Change Theme</button>
          </div>
          <div className={styles.content}>
              <Outlet/>
          </div>
          <div className={styles.footer}>
              Portfolio gemaakt in opdracht van AP | 2022/2023 
          </div>
      </div>
    </ThemeContext.Provider>
  );
}


const App = () => {
  const router = createBrowserRouter([
      {
          path: "/",
          element: <Root/>,
          children: [
              {
                  path: "",
                  element: <Home/>
              },
              {
                  path: "Portfolio",
                  element: <Portfolio/>
              },
              {
                path: "Portfolio/ShoppingList",
                element: <ShoppingList/>
              },
              {
                path: "Portfolio/Filtering",
                element: <Filtering/>
              },
              {
                path: "Portfolio/CounterList",
                element: <CounterList/>
              },
              {
                path: "Portfolio/Slots",
                element: <Slots/>
              },
              {
                path: "Portfolio/TTT",
                element: <TTT/>
              },
              {
                path: "Portfolio/Interval",
                element: <Interval/>
              },
              {
                path: "Portfolio/Todo",
                element: <Todo/>
              },
              {
                path: "Portfolio/Pokemon",
                element: <Pokemon/>
              },
              {
                  path: "Contact",
                  element: <Contact/>
              }
          ]
      }
  ]);

  return (
      <div>
          <RouterProvider router={router} />
      </div>
  )
}

export default App;  