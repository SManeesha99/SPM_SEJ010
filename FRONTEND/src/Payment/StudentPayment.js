import React from 'react';
import Header from "../Admin/AdminHeader";
import axios from "axios";
import './studentPayment.css';
import Dsahboard from '../AdminDashboard/Dsahboard';


class StudentPayment extends React.Component{

  constructor(props){
    super(props);

    this.state={
        paymentH:[]
    };
}

componentDidMount(){
    this.retrievePaymentH();
}

retrievePaymentH(){
    axios.get("http://localhost:8090/Payment/").then(res=>{
        if(res.data){
            this.setState({
              paymentH:res.data
            });

            console.log(this.state.paymentH)
        }
    });
}

  render(){

  return (
    <div>
       <Header/>
       <Dsahboard/>
        <div class='SParea'>
            <h1>Payment History</h1>

            {this.state.paymentH.map((paymentH, index)=>

            <div class='profArea'>
            
                <div class='row prof'>

                    <div class='col-sm-9 profLeft'>

                        <div className='profileimg'>

                        </div>
                        <div className='nameNdate'>
                            <h2>{paymentH.pname}</h2>
                            <p>{paymentH.courseTitle}</p>
                            <p class='date'>Payment Date: {paymentH.date}</p>
                        </div>

                    </div>
                    

                    <div class='col-sm-3 profRight'>
                        <p>{paymentH.coursePrice}</p>
                        
                    </div>

                    <button class="btn btn-primary" type='button'>View More</button>

                    

                </div>
            </div>

              )}

        </div>
</div>
  );
  }
}
export default StudentPayment;
