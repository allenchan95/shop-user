import React,{Component} from 'react';
import Products from '../../components/Products/Products';
class Shop extends Component {
	state={
		products:[]
	}
	componentDidMount(){
		this.fetchProducts();
	}
	 fetchProducts = () =>{
	     fetch(`http://localhost:3000/products`,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({products:data}
	     		)})
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
					<Products products={this.state.products} addToCart={this.addToCart}/>
				</div>
			)
	}
}






export default Shop;