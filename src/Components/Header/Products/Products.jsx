import React, { useState, useEffect } from 'react'; 

import './Products.css';
import fetchProducts from '../../../api/FetchProducts';
import ProductCart from '../ProductCart/ProductCart';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  return(
    <section className="products container">
      
      {products.map((product) => <ProductCart key={product.id} data={product}/>)}

    </section>
  );
}
export default Products;