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

            tittele:String(input.tittle),
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
                <h2>Add Offers</h2>
                <div className='coui'>
                
                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control"
                        name='tittle' 
                        placeholder='Eneter here'
                        value={this.state.tittle}
                        onChange={handleChange}
                        required></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control"
                        name='description' 
                        placeholder='Eneter here'
                        value={this.state.description}
                        onChange={handleChange}
                        required></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Discount Precentage</label>
                        <input type='number' 
                        name='discount'
                        class="form-control" 
                        placeholder='Eneter here'
                        value={this.state.discount}
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
                        value={this.state.closingDate}
                        onChange={handleChange}
                        ></input>
                    </div>
                    

                    

                    

                </div>

                <button class='btn btn-primary' type='submit' onClick={handleSubmit}><a href="/alloffer" style={{textDecoration:'none', color:'white'}}>UPDATE OFFER</a></button>

                


            </div>
            )}
            </center>

            </div>

    );
}

export default UpdateOffer;