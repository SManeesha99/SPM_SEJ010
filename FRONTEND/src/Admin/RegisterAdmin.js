import React from 'react';
import axios from "axios";
import swal from 'sweetalert'
import NotRegHeader from '../Header/notRegHeader';
import './loginRegister.css';
import {Link} from 'react-router-dom';

class RegisterAdmin extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const {name, email, password} = this.state;

        const data = {
            name: name,
            email: email,
            password: password
        }

        if(name==='' && email==='' && password===''){
            swal("All Fields are Empty");
        }
        else if(name === ''){
            swal("Name Field is Empty");
        }
        else if(email === ''){
            swal("Email Field is Empty");
        }else if(password === ''){
            swal("Password Field is Empty");
        }

        console.log(data)

        axios.post("http://localhost:8090/admin/register",data).then((res)=>{
            swal.fire({
                title: "Success!",
                text: "New Notice Added Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
            });
            if(res.data){
                this.setState({
                    name:"",
                    email:"",
                    password:""
                })
            }
        })

    }

    render(){
        return(
            <div>
        <div className='registerArea'>

        <NotRegHeader/>
            <center>
            <div className='regArea'>
                <h2>Register Admin</h2>
                <form>
                <div className='regui'>
                    <div className='name'>
                        <div class='row fullname'>
                            <div class="col-sm-6">
                                <input class="form-control" 
                                placeholder='Name'
                                name='name'
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required></input>
                            </div>
                        </div>
                        
                    </div>

                    <div className='name'>
                        <input class="form-control" 
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required></input>
                    </div>
                    <div className='name'>
                        <input class="form-control" 
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required></input>
                    </div>

                </div>
                </form>
                <button class='btn btn-primary' type='submit' onClick={this.onSubmit}>
                    <Link to={'/allCourseView'}></Link>Register Admin</button>

            </div>
            </center>

        </div>


        


    </div>
        );
    }
}

export default RegisterAdmin;
