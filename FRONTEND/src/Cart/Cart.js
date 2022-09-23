import React, { Component } from 'react';
import './cart.css';
import Header from '../Header/Header';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className='cartArea'>

            <h1>Cart</h1>

            <div class="row cartItem">
                <div class="col-sm-3 cartitemleft">

                </div>
                <div class="col-sm-9 cartitemright">
                    <div className='cartitemrightL'>
                        <h2>Course Title</h2>
                        <h2>$20.49</h2>
                        <p>Total Course fee in USD</p>
                    </div>

                    <div className='cartitemrightR'>
                        <button type='button'>
                        Remove
                        </button>
                    </div>
                    
                </div>
            </div>

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
