import React, { Component } from 'react';
import './cart.css';
import Header from '../Header/HeaderS';
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
        
  axios.get("http://localhost:8090/Cart/viewCart/" + localStorage.getItem("id")).then(res =>{
      if(res.data){
          
          let total = 0;
          for (let item of res.data) {
            let priceNum = item.cprice.substring(3)
            total += Number(priceNum)
          }
          this.setState({
            cart:res.data,
            total: total,
            count: res.data.length
          });

          console.log(this.state.cart)
      }
  });

}

onDelete=(id)=>{
  axios.delete(`http://localhost:8090/Cart/delete/${id}`).then((res)=>{
      this.retrieveUserProf(); 
  });
};


  render() {
    return (
      <div>
        <Header count={this.state.count}/>

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
                        <p>Total Course fee in Rupees</p>
                    </div>

                    <div className='cartitemrightR'>
                        <button type='button' onClick={()=>this.onDelete(cart._id)}>
                        Remove
                        </button>
                    </div>
                    
                </div>
            </div>

            )}

            <h1>Total Price : Rs {this.state.total}.00</h1>
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
