import './App.css';
import Main from './topics/main';
import Work from './topics/works';
import Headers from './topics/header';
import Aside from './topics/social-media';

function App() {
  return (
    <div>
      <Headers />
      <Aside />
      <Main />
      <Work />
    </div>
  );
}

export default App;
