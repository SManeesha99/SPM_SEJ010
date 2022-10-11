import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import { Link , useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();


                
    const login = ()  => {

        const loginUser = {email, password};

        axios.post(`http://localhost:8090/User/login`,loginUser).then((res)=>{

            localStorage.setItem("id",res.data.id);

            if(res.data.status){
                swal({
                    title: "Success!",
                    text: "Login Successfull !",
                    icon: 'success',
                    timer: 2000,
                    button: false,
                  });

               navigate("/homeLogged",{
                state:{
                    id:res.data._id
                }
               }
               )

                //   setTimeout(()=>{
                //     window.location.replace(`http://localhost:3000/homeLogged`)
                //   }, 2000)

            }else{
                swal({
                    title: "Warning!",
                    text: "Login Unsuccessfull !",
                    icon: 'error',
                    timer: 2000,
                    button: false,
                  });
            }
      
        });
      
    };


    return (
        <div>
            <div className='registerArea'>
                <NotRegHeader />
                <center>
                    <div className='regArea'>
                        <h2>Login Now</h2>
                        <div className='regui'>

                            <div className='name'>
                                <label>Email</label>
                                <input class="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your Email'></input>
                            </div>
                            <div className='name'>
                                <label>Password</label>
                                <input class="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password'></input>
                            </div>
                        </div>

                        <button class='btn btn-primary' onClick={(e)=>login()}>Login</button>

                        <hr/>
                        <p className='bottm'>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/register">Register</Link></p>

                    </div>
                </center>

            </div>
        </div>
    )
}
