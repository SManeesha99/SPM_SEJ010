import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../Header/Header';


const CourseInfo =() => {
    
    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Courses/Courses/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.courses));
        }
        fetchHandler()
        .then((data)=>setInput(data.courses));
    },[id])

    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    // }

    // const handleChange =(e)=>{
    //     console.log(e);
    // }
    console.log(input);
    
    return <div>
        
         <div className='createoffer'>
                
                

{input && (  
            <div>
                <Header/>

        <div className="col-md-8 mt-4 mx-auto">
            <div style={{marginTop:'20px'}}>
         <h4>{input.ctitle}</h4>
         <hr></hr>

         <dl className="row">
         <dt className="col-sm-3">Tittle</dt>
             <dt className="col-sm-9">{input.ctitle}</dt>

             <dt className="col-sm-3">Description</dt>
             <dt className="col-sm-9">{input.cduration}</dt>

             <dt className="col-sm-3">Discount</dt>
             <dt className="col-sm-9">{input.cprice}</dt>

             <dt className="col-sm-3">Closing Date</dt>
             <dt className="col-sm-9">{input.cdescription}</dt>
        </dl>

        </div>
        {/* <button className="btn noticeAdd"><a href="/alloffer" style={{textDecoration:'none', color:'white'}}>View All Offer</a></button> */}
        
                </div>
                </div>
        ) }

            </div>
        
    </div>;

};
export default CourseInfo;