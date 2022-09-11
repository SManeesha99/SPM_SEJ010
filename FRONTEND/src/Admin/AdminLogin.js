import {useState} from 'react';
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AdminLogin = () =>{
    const[data, setData] = useState({
        email:"",
        password:"",
    });

    const [error, setError]=useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const url = "http://localhost:3000/api/auth";
            const{data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"


        }catch(error){
            if(
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ){
                setError(error.response.data.message);
            }

        }
    };




    return(
        <div>
        <div className='registerArea'>
            <NotRegHeader/>
            <center>
            <div className='regArea'>
                <h2>Login Now</h2>
                <form onSubmit={handleSubmit}>
                <div className='regui'>
                    
                    <div className='name'>
                        {/* <label>Email</label> */}
                        <input class="form-control" placeholder='Enter Your Email' 
                        onChange={handleSubmit}
                        value={data.email}
                        required></input>
                    </div>
                    <div className='name'>
                        {/* <label>Password</label> */}
                        <input class="form-control" placeholder='Enter Your Password'
                        onChange={handleSubmit}
                        value={data.password}
                        required></input>
                    </div>
                </div>

                <button class='btn btn-primary' type='submit'>Login</button>
                </form>
                <hr/>
                <p>Already haven't an account? <Link className="nav-link active" aria-current="page" to="/register">Register</Link></p>


            </div>
            </center>

            </div>
    </div>

    )
};

export default AdminLogin;