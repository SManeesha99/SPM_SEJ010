import React, { useState, useEffect } from 'react';
import swal from "sweetalert";
import axios from "axios";

import {confirmRequest} from '../controllers/RequestAcc';

export default function Request() {

    const [requestList, setRequestList] = useState([]);

    // useEffect(()=> {

    //     axios.get('http://localhost:8090/Test').then((result) => {
    //         setRequestList(result);
    //     })

    // }, []);

    const addRequsr = async(firstName, lastName, mobileNumber, field, email, password) =>{
        const newItem = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            field: field,
            email: email,
            password: password 
         }
         console.log(newItem)
         await confirmRequest(newItem).then((res)=>{
            swal({
                title: "Success!",
                text: "New Category Added Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
         })
         .catch((err)=> {
            console.log(err)
         })
    }

    return(

        <div>
            <body>
                    <center>
                    <div className='boxx'>
                
                <h1><span>I</span>nstructor <span>R</span>egistration <span>R</span>equest</h1>
                    {this.state.test.map((test, index)=>

                    <div className='req_list' key={index}>
                    <div className='user_instructor'>
                        <div className='imgBx'>
                            
                        </div>
                        <div className='details'>
                            <h3>{test.firstName} {test.lastName}</h3>
                            <p>Graphic Designer</p>
                        </div>
                        
                            <button className='btn btn-outline-warning'>View Profile</button>
                            <button className='btn btn-outline-success' onClick={()=>confirmRequest(test.firstName, test.lastName, test.mobileNumber, test.field, test.email, test.password)}>Approve</button>
                            <button className='btn btn-outline-danger'>Reject</button>
                        
                    </div>
                    </div>
                    )}
                    
                    

            </div>

                    </center>
                    
                    
                </body>
        </div>
    );
     

}