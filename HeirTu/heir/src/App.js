import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import data from './data';
import Home from './Components/Home';
import Product from './Components/Product';




function App() {
  
  const openMenu= () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu= () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <BrowserRouter>
    <div class="grid-container">

     
    <header class="header">
              <div class="brand">
                  <button onClick={openMenu}>
                      &#9776;
                  </button>
                  <Link to='/'> Heir TU</Link>
              {/* <a href="Home.js">Heir Tu</a>  */}
              </div>
              <div class="header-links">
               <a href="cart.html">Cart</a> 
               <a href="SignIn.html">Sign in</a> 
              </div>
           </header >
   
           <aside class="sidebar">
             <h3>Shopping Catergories</h3>
             <button  class="closeMenu" onClick={closeMenu}>X</button>
             <ul>
                 <li> <a href="index.html">Tops</a></li>
                 <li> <a href="index.html">Bottoms</a></li>
                 <li> <a href="index.html">Shoes</a></li>
             </ul>
         </aside>
         
         <main className='main'>
             <div className='content'>
               <Route path='/products/:id' component={Product}/>
               <Route path='/' exact={true} component={Home}/>
             
             </div>
         </main>
         <footer class="footer">
            All Rights Reserved
        </footer>
   
           </div>
           </BrowserRouter>
  );
}

export default App;
