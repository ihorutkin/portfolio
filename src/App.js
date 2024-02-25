import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import LayoutPage from './pages/layouts';
import Games from './pages/games';
import Apps from './pages/apps';


function App() {
  return (
    <Router>
          <Routes>
            <Route 
              path='/'
              exact
              element={<MainPage />}
            />
            <Route 
              path='/layout'
              element={<LayoutPage />}
            />
            <Route 
              path='/game'
              element={<Games />}
            />
            <Route 
              path='/app'
              element={<Apps />}
            />
          </Routes>
    </Router>
  );
}

export default App;
