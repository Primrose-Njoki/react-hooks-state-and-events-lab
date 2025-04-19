import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);//create state variable for dark mode (default to false/light mode)

//toggle function that updates the state
  const toggleDarkMode=() =>{
  setIsDarkMode(!isDarkMode);
};

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = isDarkMode ? "App dark" : "App light"

  return ( 
    <div className={`App ${isDarkMode ? "dark" :"light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}> 
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
       </button >      
        </header>
        
      
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
