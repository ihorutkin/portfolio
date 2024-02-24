import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import LayoutPage from './pages/layouts';
import Games from './pages/games';
import Apps from './pages/apps';


function App() {
  return (
    <Router>
          <Routes>
            <Route 
              exact
              path='/portfolio'
              element={<MainPage />}
            />
            <Route 
              path='/portfolio/layout'
              element={<LayoutPage />}
            />
            <Route 
              path='/portfolio/game'
              element={<Games />}
            />
            <Route 
              path='/portfolio/app'
              element={<Apps />}
            />
          </Routes>
    </Router>
  );
}

export default App;
