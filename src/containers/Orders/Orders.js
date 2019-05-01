import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import Order from '../../components/Order/Order';
class Orders extends Component {
	state={
		orders:[]
	}
	componentDidMount(){
		this.fetchOrders();
	}
	 fetchOrders = () =>{
	     fetch(`http://localhost:3000/orders`,{
              method: 'get',
              headers: {
                'Content-Type' : 'application/json',
              }
            })
	     	.then(res => res.json())
	     	.then(data => {
	     		this.setState({orders:data}
	     		)})
        	.catch(e => console.log('error:', e))
	 }


	render(){
		return(
				<div>
					{console.log(this.state.orders)}
					<Order orders={this.state.orders}/>
				</div>
			)
	}
}






export default withRouter(Orders);