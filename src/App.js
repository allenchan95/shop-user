import React, { Component } from 'react';
import './App.css'
import { Route, Switch, withRouter ,Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Shop from './containers/Shop/Shop';
import Cart from './containers/Cart/Cart';
import Orders from './containers/Orders/Orders';




class App extends Component {

  render () {
    let routes =(
      <Switch>
        <Route path="/order" component={Orders}  exact />
        <Route path='/cart' component={Cart} exact />
        <Route path="/" component={Shop}  exact />
        <Redirect to='/'/>
      </Switch>
      );

    return (
      <div className='App'>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
