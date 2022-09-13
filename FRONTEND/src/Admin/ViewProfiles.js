import React from "react";
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import "./viewProfiles.css";
import Header from "../Header/Header";

export default function ViewProfiles() {

    const [input, setInput] = useState('');
    const [userProfile,setuserProfile] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8090/Student/').then(res =>{
            setuserProfile(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    })

    function onDelete (id) {

        axios.delete(`http://localhost:8090/Student/delete/${id}`).then((res)=>{
    
        alert("Delete Successfully");
    
        this.useEffect();
    
        });
    
      };


  return (
    <div>
        <Header/>

        <div className='viewProfilesArea'>

            <h1 className="profileTopic">User Profiles</h1>

            {userProfile.map(userProfile => 

            <div class='row profileDiv'>
                <div class='left'>
                    {/* <div className='proImg'>

                    </div> */}
                    
                        <h2>Name : {userProfile.firstName} {userProfile.lasttName}</h2>
                        <p>Field : {userProfile.field} </p>
                    

                </div>

                <div class='right'>
             
                    <button class='btn btn-primary' type='submit'><Link to={`/editProfile/${userProfile._id}`} style={{textDecoration:'none', color:'white'}}>View Profile</Link></button>
                    <button class='btn btn-danger' type='submit' onClick={()=>onDelete(userProfile._id)}>Delete</button>
                </div>
          
            </div>

            )}

        </div>
    </div>
  )
}
