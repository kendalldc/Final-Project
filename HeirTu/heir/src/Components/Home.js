import React from 'react';
import data from '../data';
function Home(){
    return(
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
)
    }
 


export default Home;

// /template/Images/mini-skirt.jpg