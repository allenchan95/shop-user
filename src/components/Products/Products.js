import React from 'react';
import classes from './Products.module.css';

import Product from './Product/Product';
const products = (props) => {
	return(
		<div className={classes.grid}>
			{	
				props.products.map((product,i) => {
					return (
						<Product
			 				key={i} 
			 				_id={props.products[i]._id} 
							title={props.products[i].title} 
							price={props.products[i].price}
							image={props.products[i].imageUrl}
							description={props.products[i].description}
							addToCart={props.addToCart}
			 			/>
			 		);
				})
			}	
		</div>
		)
}

export default products;