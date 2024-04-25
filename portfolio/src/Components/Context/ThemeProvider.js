import React,{useState,createContext, useContext} from 'react'
const ThemeContext = createContext() ;
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
  return (
    <div>
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

//custom hook 

const useTheme = () => useContext(ThemeContext);
export {useTheme, ThemeProvider} 