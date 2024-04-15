import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Compare from './pages/Compare';
import Watchlist from './pages/Watchlist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from './components/Common/Footer';


function App() {
  return (
<>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
</>
  );
}

export default App;
