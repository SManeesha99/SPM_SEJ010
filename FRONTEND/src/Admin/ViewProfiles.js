import React from "react";
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";
import "./viewProfiles.css";
import Header from "../Header/Header";


    class ViewProfiles extends React.Component{
        constructor(props){
            super(props);

            this.state={
                userprof:[]
            };
        }

        componentDidMount(){
            this.retrieveUserProf();
        }

        retrieveUserProf(){
            axios.get("http://localhost:8090/User").then(res=>{
                if(res.data){
                    this.setState({
                        userprof:res.data
                    });

                    console.log(this.state.userprof)
                }
            });
        }

        onDelete=(id)=>{
            axios.delete(`http://localhost:8090/User/delete/${id}`).then((res)=>{
                this.retrieveUserProf();

                swal({
                    title: "Success!",
                    text: "User Delete Successfull",
                    icon: 'success',
                    timer: 2000,
                    button: false,
                });
            });
        };

        render(){

  return (
    <div>
        <Header/>

        <div className='viewProfilesArea'>

            <h1 className="profileTopic"><span>U</span>ser <span>P</span>rofiles</h1>

            {this.state.userprof.map((userprof, index)=>
            

            <div class='row profileDiv'>
                <div class='left'>
                    {/* <div className='proImg'>

                    </div> */}
                    
                        <h2>Name : {userprof.firstName} {userprof.lastName}</h2>
                        <p className="fieldp"> Field : {userprof.field} </p>
                    

                </div>

                <div class='right'>
             
                    <button class='btn btn-primary'><Link to={`/editProfile/${userprof._id}`} style={{textDecoration:'none', color:'white'}}>View Profile</Link></button>
                    <button class='btn btn-danger' type='submit' onClick={()=>this.onDelete(userprof._id)}>Delete</button>
                </div>
          
            </div>

            )}

        </div>
    </div>
  );
}
}
export default ViewProfiles;

