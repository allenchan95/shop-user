import React,{Component} from 'react';
import CartForm from '../../components/Cart/Cart';
import {withRouter} from 'react-router-dom';
class Cart extends Component {
	state={
		cart:[]
	}
	componentDidMount(){
		this.fetchCart();
	}
	 fetchCart = () =>{
	     fetch(`http://localhost:3000/cart`,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({cart:data}
	     		)})
        	.catch(e => console.log('error:', e))
	 }
	 deleteCartItem = (productId) =>{
	 	const data = {
	 		productId: productId
	 	}
	 		fetch(`http://localhost:3000/cart-delete-item`,{
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json',
              },
              body:  JSON.stringify(data)
            })
	     	.then(res => res.json())
	     	.then(data => {
	     			window.location.reload();
	     		})
        	.catch(e => console.log('error:', e))
	 }

	 placeOrder = () =>{
	 	fetch(`http://localhost:3000/create-order`,{
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json',
              },
            })
	     	.then(res => res.json())
	     	.then(data => {
	     			this.props.history.push('/');
	     		})
        	.catch(e => console.log('error:', e))
	 }


	render(){
		return(
				<div>
					{console.log(this.state.cart)}
					<CartForm  cart={this.state.cart} deleteCartItem={this.deleteCartItem} placeOrder={this.placeOrder}/>
				</div>
			)
	}
}






export default withRouter(Cart);