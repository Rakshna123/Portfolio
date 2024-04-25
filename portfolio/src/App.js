
import './App.css';
import './index.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import LayOut from './Components/Layout/LayOut';
import Project from './Components/Projects/Project';
import TechStack from './Components/Skills/TechStack';
import './Style/Layout.css'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './Components/Context/ThemeProvider';
import Tada from 'react-reveal/Tada'
import MobileNav from './Components/MobileNav/MobileNav';
function App() {
  const [theme, setTheme] = useTheme();
  return (
    <>
    <div id={theme}>
      <MobileNav/>
     <LayOut/>
     <div className='container'>
     <About/>
     <Education/>
     <TechStack/>
     <Project/>
     <Contact/>
     </div>
     <div className='footer mb-3' style={{marginLeft:"260px"}}>
      <Tada>
      <h3 className='text-center'>Made with 😍 Rakshna © 2024</h3>
      </Tada>
     </div>
     </div>
     <ScrollToTop 
     smooth 
     color='white'
     style={{borderRadius:"80px", backgroundColor:"black", fontWeight:"bold"}} />
    </>
  );
}

export default App;
