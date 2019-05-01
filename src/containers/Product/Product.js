import React,{Component} from 'react';
import {Redirect } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

class Product extends Component {
	state={
		product:{}
	}
	componentDidMount(){
		this.fetchProduct();
	}
	fetchProduct = () =>{
		const { id } = this.props.match.params;
		const url= 'http://localhost:3000/products/'+id; 
	     fetch(url,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({product:data});

	     })
        	.catch(e => console.log('error:', e))
	 }
	addToCart = (productId) => {
	 	const data ={
	 				productId:productId
		}
	 	fetch(`http://localhost:3000/cart`,{
              method: 'post',
              headers: {
                'Content-Type' : 'application/json',
              },
              body: JSON.stringify(data)
              
            })
	     	.then(res => res.json())
	     	.then(data => {
	     			console.log(data);
	     		})
        	.catch(e => console.log('error:', e))
	 }
	render(){

		return(
				<div>
					<ProductDetail
			 				_id={this.state.product._id} 
							title={this.state.product.title} 
							price={this.state.product.price}
							image={this.state.product.imageUrl}
							description={this.state.product.description}
							addToCart={this.addToCart}
							
					/>
				</div>
		
			)
	}
}

export default Product;