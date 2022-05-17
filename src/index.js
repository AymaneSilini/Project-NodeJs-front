import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    <Router>
       <Routes>
        <Route path="/home" exact element={<Home />}  />
        <Route path="/" exact element={<Login/>}  />    
                
      </Routes>
    </Router>
  </React.StrictMode>
);
