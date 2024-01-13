import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';
import Footer from './components/footer/footer';

function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer />
  </>
  );
}

export default App;
