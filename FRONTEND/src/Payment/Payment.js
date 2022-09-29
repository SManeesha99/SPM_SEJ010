import React from 'react';
import Header from '../Header/Header';
import './payment.css';

export default function Payment() {
  return (
    <div>
       <Header/>
     <div class='payArea'>
        <h1>Pay Now</h1>
        <form class="row g-3">
       
        <div class="col-12">
            <label for="inputAddress" class="form-label">Total Price</label>
            <input type="text" class="form-control" id="inputAddress" />
        </div>
        <div class="col-12">
            <label for="inputAddress2" class="form-label">Card Number</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Card Number"/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Expiry Date</label>
            <input type="text" class="form-control" id="inputCity" placeholder="DD/MM/YY"/>
        </div>
      
        <div class="col-md-6">
            <label for="inputZip" class="form-label">CVC</label>
            <input type="text" class="form-control" id="inputZip" placeholder="CVC"/>
        </div>
       
        <div class="col-12">
            <center><button type="submit" class="btn btn-primary">Pay Now</button></center>
            
        </div>
        </form>
     </div>

  </div>
  )
}
