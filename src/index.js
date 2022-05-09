import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import AddCategory from './pages/admin/AddCategory';
import AddGame from './pages/admin/AddGame';
import AddUser from './pages/admin/AddUser';
import AddPlatform from './pages/admin/AddPlatform';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import GetUser from './pages/admin/GetUser';
import UpdateGame from './pages/UpdateGame';
import DetailGame from './pages/DetailGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    <Router>
       <Routes>
        <Route path="/home" exact element={<Home />}  />
        <Route path="/" exact element={<Login/>}  />    
        <Route path="/signup" exact element={<SignUp/>}  />    
        <Route path="/category/:category" exact element={<Category />}  />    
        <Route path="/addGame" exact element={<AddGame />}  />
        <Route path="/addCategory" exact element={<AddCategory />}  /> 
        <Route path="/addUser" exact element={<AddUser />}  />
        <Route path="/addPlatform" exact element={<AddPlatform />}  />  
        <Route path="/getUser" exact element={<GetUser />}  />   
        <Route path="/updateGame/:id" exact element={<UpdateGame />}  />  
        <Route path="/detailGame/:id" exact element={<DetailGame />}  />   
 



        
      </Routes>
    </Router>
  </React.StrictMode>
);
