import React, { Component } from "react";
import axios from "axios";
import '../Payment/InsPaymentReport.css';

export default class StudentPaymentReport extends Component {

    constructor(props) {
        super (props);

        this.state={
            paymentH:[]
        };
    }


    componentDidMount(){
        this.retrieveNotice();
    }


    retrieveNotice(){
        
        axios.get("http://localhost:8090/Payment/").then(res =>{
            if(res.data){
                this.setState({
                    paymentH:res.data
                });

                console.log(this.state.paymentH)
            }
        });

    }


   
 
    repotGen=()=>{

         window.print();

    }
    render() {

        return (
            <div>

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>Student Payment</strong></center></h1>
                <table class="tableNoticeReport">
                    <thead>
                        <tr class="text-danger">
                        <th scope="col">No</th>
                        <th scope="col">Instructor Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.paymentH.map((paymentH,index)=>(
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{paymentH.pname}</td>
                                <td>{paymentH.courseTitle}</td>
                                <td>{paymentH.date}</td>


                            </tr>

                        ))}



                    </tbody>

            

                </table>

            <button onClick={this.repotGen}  className="btn-report">Print</button>

            </div>

</div>

        )
    }

}