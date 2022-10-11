import React, { Component } from 'react';
import './cart.css';
import Header from '../Header/Header';
import axios from "axios";

export default class Cart extends Component {

  constructor(props) {
    super (props);

    this.state={
      cart:[]
    };
}

componentDidMount(){
  this.cart();
}

cart(){
        
  axios.get("http://localhost:8090/Courses/cart").then(res =>{
      if(res.data){
          this.setState({
            cart:res.data
          });

          console.log(this.state.cart)
      }
  });

}


  render() {
    return (
      <div>
        <Header/>

        <div className='cartArea'>

            <h1>Cart</h1>

            {this.state.cart.map((cart, index) =>

            <div class="row cartItem" key={index}>
                <div class="col-sm-3 cartitemleft">

                </div>
                <div class="col-sm-9 cartitemright">
                    <div className='cartitemrightL'>
                        <h2>{cart.ctitle}</h2>
                        <h2>{cart.cprice}</h2>
                        <p>Total Course fee in USD</p>
                    </div>

                    <div className='cartitemrightR'>
                        <button type='button'>
                        Remove
                        </button>
                    </div>
                    
                </div>
            </div>

            )}

            <h1>Total Price : $20.49</h1>
            <center>
            <button class="btn btn-primary" type='button'>
                Pay Now
            </button>
            </center>

        </div>


      </div>
    )
  }
}
