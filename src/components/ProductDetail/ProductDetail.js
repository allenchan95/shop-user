import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './ProductDetail.module.css';
const product = (props) => {
  
  return(
          <div className={classes.product}>
              <div className={classes.product_image}><img className={classes.product_image_photo} src={props.image} alt={props.title}/></div>
              <div className={classes.product_info}>
                <div className={classes.product_title}>{props.title}</div>
                <div className={classes.product_price}>$ {props.price}</div>
                <div className={classes.product_descrption}>{props.description}</div>
                <div className={classes.product_btn_danger} onClick={()=>{ props.history.goBack();}}>Back</div>
                 <div className={classes.product_btn} onClick={()=>{ props.addToCart(props._id)}}>Add To Cart</div>
              </div>
          </div>
    )
}
export default withRouter(product);