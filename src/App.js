
import Dashboard from './containers/Dashboard';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme } from './styles/theme';
import Home from './components/Home/Home';
import Matching from './components/Matching/Matching';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import MainGroup from './components/Matching/MainGroup';



/*

          <Router>
          <Dashboard />

             <Routes>
            <Route path='/Home'  element={<Home />}   />
            <Route path='/Matching'  exact element={<Matching />}  />
            </Routes>

           </Router> 

  */

function App() {
  return (
         <ThemeProvider theme={lightTheme}>
       <MainGroup />
         </ThemeProvider> 
           
      );
};

export default App;
