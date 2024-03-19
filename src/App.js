
import './App.css';
import Layout from './Component/Common/Layout';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Layout>
      
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Contact' element={<Contact/>}  />

      </Routes>
      </Layout>
    </div>
  );
}

export default App;
