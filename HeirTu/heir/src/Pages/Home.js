import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function Home(props){
    return <ul className='products'>
        {
          data.products.map(product => 
      
          <li>
              <div className='product'>
              
              <div class="product-name"><Link  to={'/product/' + product._id}> 
              <img class="product-image" src= {product.image} alt="product"/>
              </Link></div>
              <div class="product-name"><Link  to={'/product/' + product._id}> {product.name} </Link></div>
              <div class="product-brand"> {product.brand}</div>
              <div class="price"> {product.price}</div>
              </div>
          </li>)
            }
      </ul>

    }
 


export default Home;

// /template/Images/mini-skirt.jpg