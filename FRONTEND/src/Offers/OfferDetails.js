import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import '../Offers/OfferDetails.css';

const OfferInfo =() => {
    
    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/offer/offer/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.offer));
        }
        fetchHandler()
        .then((data)=>setInput(data.offer));
    },[id])

    
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    // }

    // const handleChange =(e)=>{
    //     console.log(e);
    // }
    console.log(input);
    
    return <div>
        {input && (  
            <div>
                <Header/>

        <div className="col-md-8 mt-4 mx-auto">
            <div style={{marginTop:'20px'}}>
         <h4>{input.tittle}</h4>
         <hr></hr>

         <dl className="row">
         <dt className="col-sm-3">Tittle</dt>
             <dt className="col-sm-9">{input.tittle}</dt>

             <dt className="col-sm-3">Description</dt>
             <dt className="col-sm-9">{input.description}</dt>

             <dt className="col-sm-3">Discount</dt>
             <dt className="col-sm-9">{input.discount}</dt>

             <dt className="col-sm-3">Closing Date</dt>
             <dt className="col-sm-9">{input.closingDate}</dt>
        </dl>

        </div>
        <button className="btn noticeAdd"><a href="/alloffer" style={{textDecoration:'none', color:'white'}}>View All Offer</a></button>
        
                </div>
                </div>
        ) }
        
    </div>;

};
export default OfferInfo;