import React, { useEffect, useContext } from 'react'; 

import './Products.css';
import fetchProducts from '../../../api/FetchProducts';
import ProductCart from '../ProductCart/ProductCart';
import Loading from '../../Loading/Loading';
import AppContext from '../../../Context/AppContext';

function Products() {

  const {products, setProducts, loading, setLoading,} = useContext(AppContext);


  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return(
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => <ProductCart key={product.id} data={product}/>)}
      </section>
    )
  );
}
export default Products;