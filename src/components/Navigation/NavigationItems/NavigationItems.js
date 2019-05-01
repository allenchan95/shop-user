import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"  exact>PRODUCTS</NavigationItem>
      	<NavigationItem link="/cart"  exact>CART</NavigationItem>
      	<NavigationItem link="/order"  exact>ORDERS</NavigationItem>
    </ul>
);


export default (navigationItems);
