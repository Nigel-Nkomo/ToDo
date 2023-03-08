import React, { useEffect, useState } from "react";
import getStorageTheme from "./getStorageTheme";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Footer from "./components/Footer";
import ToDos from "./components/ToDos";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  //getStorageTheme will initially return 'light-theme'
  //ultimately getStorageTheme will return the previously set value of theme because then the localStorage object will contain the theme key which will exist across browser sessions
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    //in HTML documents, the <html> element is the root element (documentElement) of the document
    //set <html> className to 'light-theme' initially or the new value of theme if theme has changed
    document.documentElement.className = theme;

    //store the theme in the localStorage object
    localStorage.setItem("theme", theme);
  }, [theme]);

  //handler
  //if the value of theme changes, useEffect runs
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  //handler
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <InputBox text={text} setText={setText} setItems={setItems} />
      <ToDos items={items} deleteItem={deleteItem} />
      <Footer items={items} setItems={setItems} />
    </div>
  );
}
