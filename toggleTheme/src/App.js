import { createContext } from 'react';
import ShowData from './ShowData';
import './style.css';
const colorThemes = {
  lightMode: {
    textColor: 'black',
    backgroundColor: 'aliceblue',
    headingColor: 'rgb(196, 35, 35)',
  },
  darkMode: {
    textColor: 'white',
    backgroundColor: 'rgb(0,7,11)',
    headingColor: 'rgb(240, 138, 138)',
  },
};

export const ThemeContext = createContext();
function App() {
  return (
    <ThemeContext.Provider value={colorThemes}>
      <ShowData />
    </ThemeContext.Provider>
  );
}

export default App;
