import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Layout from './pages/layouts';
import Games from './pages/games';
import Apps from './pages/apps';


function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route 
              path='/'
              element={<MainPage />}
            />
            <Route 
              path='/layout'
              element={<Layout />}
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
        </div>
      </div>
    </Router>
  );
}

export default App;
