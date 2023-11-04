
import './App.css';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-cyan-50 min-h-screen'>
      <Navbar />
      <FrontPage />
    </div>
  );
}

export default App;
