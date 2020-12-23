import React, { createContext, useState } from "react";
import CardList from "./card/Card";
import { Provider } from "./Context";

const themeLight = {
  name: "light",
  color: {
    block: "gray",
    text: "green",
  },
};
const themeRed = {
  name: "red",
  color: {
    block: "yellow",
    text: "red",
  },
};

// ThemeContext.displayName = "ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(themeLight);

  const setNewTheme = () => {
    setTheme((prev) => (prev.name === "light" ? themeRed : themeLight));
  };
  return (
    <Provider value={theme}>
      <h2>HOC</h2>
      <CardList />
      <button onClick={setNewTheme}>ChangeTheme</button>
    </Provider>
  );
};

export default App;
