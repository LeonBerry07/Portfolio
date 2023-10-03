import logo from './logo.svg';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home"/>
          <Route path="/detail/:id"/>
          <Route path="/form"/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
