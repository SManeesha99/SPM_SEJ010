import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import '../Offers/CreateOffer.css';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdateOffer =() =>{

    const [input, setInput]=useState({});
    const id =useParams().id;
    const history = useNavigate();
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


    const sendRequest = async() =>{
        await axios.put(`http://localhost:8090/offer/update/${id}` , {

            tittle:String(input.tittle),
            description:String(input.description),
            discount:String(input.discount),
            closingDate:String(input.closingDate)

        })
         
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        swal({
            title: "Success!",
            text: "New Notice Updated Successfully",
            icon: 'success',
            timer: 2000,
            button: false,
          });
        sendRequest().then(()=>history("/alloffer"));
    };

    const handleChange =(e)=>{

        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    console.log(input);
    




    return(
        <div className='createoffer'>
                <Header/>
                <center>
                    {input && (
            <div className='coArea'>
                <h2>Update Offers</h2>
                <div className='coui'>
                
                <div className='coname'>
                    <label className='coffer'>Tittle</label>
                        <input class="form-control"
                        name='tittle' 
                        value={input.tittle}
                        onChange={handleChange}
                        ></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control"
                        name='description' 
                        value={input.description}
                        onChange={handleChange}
                        ></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Discount Precentage</label>
                        <input type='number' 
                        name='discount'
                        class="form-control" 
                        placeholder='Eneter here'
                        value={input.discount}
                        onChange={handleChange}
                        required></input>
                    </div>

                    {/* <div className='coname'>
                    <label className='coffer'>Discount Price</label>
                        <input type='number' class="form-control" placeholder='Eneter here'></input>
                    </div> */}

                    <div className='coname'>
                    <label className='coffer'>Closing date</label>
                        <input class="form-control"
                        name='closingDate'
                        type='date'
                        value={input.closingDate}
                        onChange={handleChange}
                        ></input>
                    </div>
                    

                    

                    

                </div>

                <button class='btn btn-primary' type='submit' onClick={handleSubmit}>UPDATE OFFER</button>

                


            </div>
            )}
            </center>

            </div>

    );
}

export default UpdateOffer;