import React from 'react' ;
import './Cart.css';
import Button from '../../components/UI/Button/Button'
const cart = (props) => {
	return(
		<div className='Cart-Table'> 
			<table align="center" className='Cart'>
			<tbody>
			    <tr><th colSpan="5"  className='CartHeader'>Shopping Cart</th></tr>
			    <tr><th>#</th><th>Item</th><th>Price</th><th>Quantity</th><th></th></tr>
			    {props.cart.map(function(item, index){
				  	return( <tr key={item.productId._id}>
				  				<th scope="row">{index + 1}</th>
				  				<td>{item.productId.title}</td>
				  				<td>{item.productId.price}</td>
				  				<td>{item.quantity}</td>
								<td><div className='DeleteButton' onClick={()=>props.deleteCartItem(item.productId._id)}> &times;</div></td>
				  			</tr>)
				})}
			      <tr><th  className='CartPrice' colSpan="5">TOTAL PRICE : ${props.cart.reduce((acc, item) => (acc += item.productId.price), 0)}</th></tr>
			      <tr><th  className='CartPrice' colSpan="5"><Button btnType='Success' clicked={props.placeOrder}>Place Order</Button></th></tr>
	       	</tbody>
	       	</table>
		</div>
		)
}




export default cart;