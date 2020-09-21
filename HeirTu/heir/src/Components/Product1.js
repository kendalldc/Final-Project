import React from 'react';



function Product1(){
    return(
        <div class="grid-container">
 <header class="header">
           <div class="brand">
               <button onclick="openMenu()">
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
          <button  class="closeMenu" onclick="closeMenu()">X</button>
          <ul>
              <li> <a href="index.html">Tops</a></li>
              <li> <a href="index.html">Bottoms</a></li>
              <li> <a href="index.html">Shoes</a></li>
          </ul>
      </aside>
      
      <main className='main'>
          <div className='content'>
            <ul className='products'>
                <li>
                    <div className='product'>
                    <img class="product-image" src="Images/mini-skirt.jpg" alt="product"/>
                    <div class="product-name"><a  href="product.html">Pleated Skirt</a></div>
                    <div class="product-brand"> Azuri</div>
                    <div class="price"> $600</div>
                    </div>
                </li>

                <li>
                    <div className='product'>
                    <img class="product-image" src="Images/mini-skirt.jpg" alt="product"/>
                    <div class="product-name"><a  href="product.html">Pleated Skirt</a></div>
                    <div class="product-brand"> Azuri</div>
                    <div class="price"> $600</div>
                    </div>
                </li>
                <li>
                    <div className='product'>
                    <img class="product-image" src="Images/mini-skirt.jpg" alt="product"/>
                    <div class="product-name"><a  href="product.html">Pleated Skirt</a></div>
                    <div class="product-brand"> Azuri</div>
                    <div class="price"> $600</div>
                    </div>
                </li>
                <li>
                    <div className='product'>
                    <img class="product-image" src="Images/mini-skirt.jpg" alt="product"/>
                    <div class="product-name"><a  href="product.html">Pleated Skirt</a></div>
                    <div class="product-brand"> Azuri</div>
                    <div class="price"> $600</div>
                    </div>
                </li>
                <li>
                    <div className='product'>
                    <img class="product-image" src="Images/mini-skirt.jpg" alt="product"/>
                    <div class="product-name"><a  href="product.html">Pleated Skirt</a></div>
                    <div class="product-brand"> Azuri</div>
                    <div class="price"> $600</div>
                    </div>
                </li>
            </ul>
          </div>
      </main>


        </div>
    )
}










export default Product1;