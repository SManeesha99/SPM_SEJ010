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
        
        <div>
        <Header/>
    {input && (
        <div className='viewcourseAreaoffer'>

        <h2><span>O</span>ffer <span>D</span>etails</h2>

            <div className='viewcourse'>

                    <div className='namee'>
                        <label>Title</label>
                        <input name='tittle' class="form-control" readOnly value={input.tittle} />
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <input value={input.description} name='description' class="form-control" readOnly></input>
                    </div>

                    <div className='namee'>
                        <label>Discount</label>
                        <input value={input.discount} class="form-control" name="discount" readOnly></input>
                    </div>

                    <div className='namee'>
                        <label>Closing Date</label>
                        <input value={input.closingDate}  name="closingDate"  readOnly></input>
                    </div>
                    
                    
                        

                </div>


        </div>
        
        )}

    </div>
        
    </div>;

};
export default OfferInfo;