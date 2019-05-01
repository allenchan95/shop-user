import React from 'react' ;
import Button from '../../components/UI/Button/Button'
const order = (props) => {
	return(
		<div className='Cart-Table'> 
			<table align="center" className='Cart'>
			<tbody>
			    <tr><th colSpan="5"  className='CartHeader'>Orders</th></tr>
			    <tr><th>#</th><th colSpan="3">Order Content</th><th>Order Creater</th></tr>
			    {props.orders.map(function(order, index){
				  	return( <tr key={index}>
				  				<th scope="row">{index + 1}</th>
				  				<td colSpan="3"> 
				  				{ order.products.map(function(product,index){
				  					return <div  onClick={()=>props.fetchProduct(product.product._id)} key={index}>{product.product.title}({product.quantity})</div>
				  					})	  					
				  				}
				  					
				  				</td>
				  				<td>{order.user.name}</td>
								
				  				
				  			</tr>)
				})}
	       	</tbody>
	       	</table>
		</div>
		)
}




export default order;