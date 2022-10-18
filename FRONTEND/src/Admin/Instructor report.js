import React, { Component } from "react";
import axios from "axios";
import '../Payment/InsPaymentReport.css';

export default class InstructorReport extends Component {

    constructor(props) {
        super(props);
    
        this.state={
          instructors:[]
        };
      }


    componentDidMount(){
        this.retrieveNotice();
    }


    retrieveNotice(){
        
        axios.get("http://localhost:8090/User/filterInstrutors").then(res =>{
            if(res.data){
                this.setState({
                    instructors:res.data
                });

                console.log(this.state.instructors)
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

                <h1><center><strong>Instructors</strong></center></h1>
                <table class="tableNoticeReport">
                    <thead>
                        <tr class="text-danger">
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Feild</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.instructors.map((instructors,index)=>(
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{instructors.firstName + " " + instructors.lastName}</td>
                                <td>{instructors.email}</td>
                                <td>{instructors.feild}</td>


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