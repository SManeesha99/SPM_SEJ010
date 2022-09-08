import React, { Component} from 'react';
import Header from "../Header/Header";
import '../Offers/CreateOffer.css';
import axios from "axios";
import swal from 'sweetalert2';
import offerpng from '../Offers/offerpng.png';

class CreateOffer extends Component{

    constructor(props){
        super(props);
        this.state={
            tittle:"",
            description:"",
            discount:"",
            closingDate:""
        }
        
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }   


    onSubmit = (e) =>{
        e.preventDefault();

        const {tittle,description, discount,closingDate} = this.state;

        const data ={
            tittle:tittle,
            description:description,
            discount:discount,
            closingDate:closingDate

        }
        if(tittle===''&& description ===''&& discount ==='' && closingDate===''){
            swal("All Fields are Empty");
        }else if(tittle === ''){
            swal("Tittle Fields is Empty");
        }else if(description === ''){
            swal("Description Fields is Empty");
        }else if(discount === ''){
            swal("Discount Fields is Empty");
        }else if(closingDate === ''){
            swal("ClosingDate Fields is Empty");
        }


        console.log(data)

        axios.post("http://localhost:8090/offer/add",data).then((res) =>{
            swal.fire({
                title: "Success!",
                text: "New Offer Added Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              }); 
             // setFireRedirect(true);  
            if(res.data){
                // alert("Notice Added Success!");
                this.setState(
                    {
                        tittle:"",
                        description:"",
                        discount:"",
                        closingDate:""
                        
                    }
                )
            }
        })
    }



    render(){
        return(
            <div className='createoffer'>
                <Header/>
                <center>
            <div className='coArea'>
                <h2>Add Offers</h2>
                <div className='coui'>
                
                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control"
                        name='tittle' 
                        placeholder='Eneter here'
                        value={this.state.tittle}
                        onChange={this.handleInputChange}
                        required></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Offer Discription</label>
                        <input class="form-control"
                        name='description' 
                        placeholder='Eneter here'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required></input>
                    </div>

                    <div className='coname'>
                    <label className='coffer'>Discount Precentage</label>
                        <input type='number' 
                        name='discount'
                        class="form-control" 
                        placeholder='Eneter here'
                        value={this.state.discount}
                        onChange={this.handleInputChange}
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
                        onChange={this.handleInputChange}
                        ></input>
                    </div>
                    

                    

                    

                </div>

                <button class='btn btn-primary' type='submit' onClick={this.onSubmit}>Add Offer</button>

                


            </div>
            </center>

            </div>
        );

    }
}

export default CreateOffer;