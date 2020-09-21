import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
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
              <a href="index.html">Heir Tu</a> 
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
               <ul className='products'>
                 {
                   data.products.map(product => 
               
                   <li>
                       <div className='product'>
                       <img class="product-image" src= {product.image} alt="product"/>
                       <div class="product-name"><a  href="product.html"> {product.name} </a></div>
                       <div class="product-brand"> {product.brand}</div>
                       <div class="price"> {product.price}</div>
                       </div>
                   </li>)
                     }
               </ul>
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
