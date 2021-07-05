import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.JPG";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo"></img>
            <h2>Menu</h2>
              <div className="underline"></div>
        </div>
      </section>
    </main>
  )
}


export default App;