import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Dsahboard from '../AdminDashboard/Dsahboard';
import './studentPayment.css';

import axios from 'axios'
import { Link } from 'react-router-dom';


export default function InstructorPayment() {

    const [input, setInput] = useState([])

    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get('http://localhost:8090/InstructorPayment/')
            .then((res)=> setInput(res.data) )
            // .then((data)=>setInput(data));
            // console.log(res)
        }
        fetchHandler()
    },[])

  return (
    <div>
        <Header/>
        <Dsahboard/>
        <div class='SParea'>

            <h1>Instructor Payment History</h1>

            <h1>Payment History</h1>
            <button  class="btn  btn-primary" style={{textDecoration:'none', color:'white', marginBottom: 25}}><Link to={"/insreport"}>Generate Report</Link></button>


            {input.map((userprof, index)=>
            <div class='profArea'>
                
                <div class='row prof'>

                    <div class='col-sm-9 profLeft'>

                        <div className='profileimg'>
                            

                        </div>
                        <div className='nameNdate'>
                            <h2>{userprof.InstructorfName + " " + userprof.InstructorlName}</h2>
                            <p>{userprof.courseTitle}</p>
                            <p class='date'>Payment Date: {userprof.date.substring(0,10)}</p>
                        </div>

                    </div>
                    

                    <div class='col-sm-3 profRight'>
                        <p>Rs {userprof.paymentPrice}.00</p>
                    </div>

                </div>
            </div>
            )}
        </div>
    </div>
  )
}
