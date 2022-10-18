import React, { Component } from "react";
import axios from "axios";
import '../Payment/InsPaymentReport.css';

export default class InsPaymentReport extends Component {

    constructor(props) {
        super (props);

        this.state={
            userprof:[]
        };
    }


    componentDidMount(){
        this.retrieveNotice();
    }


    retrieveNotice(){
        
        axios.get("http://localhost:8090/InstructorPayment/").then(res =>{
            if(res.data){
                this.setState({
                    userprof:res.data
                });

                console.log(this.state.userprof)
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

                <h1><center><strong>Instructor Payment</strong></center></h1>
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
                    {this.state.userprof.map((userprof,index)=>(
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{userprof.InstructorfName + " " + userprof.InstructorlName}</td>
                                <td>{userprof.courseTitle}</td>
                                <td>{userprof.date}</td>


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