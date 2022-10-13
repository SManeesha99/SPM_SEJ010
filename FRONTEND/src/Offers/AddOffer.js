// import React, { Component} from 'react';
// import Header from "../Header/Header";
// import '../Offers/CreateOffer.css';
// import axios from "axios";
// import swal from 'sweetalert';
// import offerpng from '../Offers/offerpng.png';
// import { Link } from 'react-router-dom';

// class AddOffer extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             tittle:"",
//             description:"",
//             discount:"",
//             closingDate:""
//         }
        
//     }

//     handleInputChange = (e) =>{
//         const {name,value} = e.target;

//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }   


//     onSubmit = (e) =>{
//         e.preventDefault();

//         var todayDate = new Date();
//         var dd = String(todayDate.getDate()).padStart(2, '0');
//         var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
//         var yyyy = todayDate.getFullYear();

//         todayDate = yyyy + '/' + mm + '/' + dd;

//         var date2Updated = this.state.closingDate.substr(0, 10).replace(/-/g, '/');

//         const {tittle,description, discount,closingDate} = this.state;
//         if(tittle !=''&& description !=''&& discount !='' && closingDate !=''){
//             if (todayDate < date2Updated){
//                 let data = {
//                     tittle:tittle,
//                     description:description,
//                     discount:discount,
//                     closingDate:closingDate
//                 };
    
//                 axios.post("http://localhost:8090/offer/add",data).then((res)=>{
//                     console.log("res", res);
    
    
//                     if (res.data.code === 200) {
//                         swal.fire({
//                             title: "Success!",
//                             text: "New Notice Updated Successfully",
//                             icon: 'success',
//                             timer: 2000,
//                             button: false,
//                           });
//                         console.log(data);
//                         window.location.reload();
    
//                     } else {
                        
//                         alert(res.data.message);
    
//                     }
//                 })
//             }
//             else{
//                 alert("Please enter a future date as the ending date.")
//             }
//         }
//         else{
//             swal("Please fill all the fields");
//         }

        
//         // const data ={
//         //     tittle:tittle,
//         //     description:description,
//         //     discount:discount,
//         //     closingDate:closingDate

//         // }
//         // if(tittle===''&& description ===''&& discount ==='' && closingDate===''){
//         //     swal("All Fields are Empty");
//         // }else if(tittle === ''){
//         //     swal("Tittle Fields is Empty");
//         // }else if(description === ''){
//         //     swal("Description Fields is Empty");
//         // }else if(discount === ''){
//         //     swal("Discount Fields is Empty");
//         // }else if(closingDate === ''){
//         //     swal("ClosingDate Fields is Empty");
//         // }


//         // console.log(data)

//         // axios.post("http://localhost:8090/offer/add",data).then((res) =>{
//         //     swal.fire({
//         //         title: "Success!",
//         //         text: "New Notice Updated Successfully",
//         //         icon: 'success',
//         //         timer: 2000,
//         //         button: false,
//         //       });
//         //      // setFireRedirect(true);  
//         //     if(res.data){
//         //         // alert("Notice Added Success!");
//         //         this.setState(
//         //             {
//         //                 tittle:"",
//         //                 description:"",
//         //                 discount:"",
//         //                 closingDate:""
                        
//         //             }
//         //         )
//         //     }
//         // })
//     }



//     render(){
//         return(
//             <div className='createoffer'>
//                 <Header/>
//                 <center>
//             <div className='coArea'>
//                 <h2>Add Offers</h2>
//                 <div className='coui'>
                
//                     <div className='coname'>
//                     <label className='coffer'>Offer Discription</label>
//                         <input class="form-control"
//                         name='tittle' 
//                         placeholder='Eneter here'
//                         value={this.state.tittle}
//                         onChange={this.handleInputChange}
//                         required></input>
//                     </div>

//                     <div className='coname'>
//                     <label className='coffer'>Offer Discription</label>
//                         <input class="form-control"
//                         name='description' 
//                         placeholder='Eneter here'
//                         value={this.state.description}
//                         onChange={this.handleInputChange}
//                         required></input>
//                     </div>

//                     <div className='coname'>
//                     <label className='coffer'>Discount Precentage</label>
//                         <input type='number' 
//                         name='discount'
//                         class="form-control" 
//                         placeholder='Eneter here'
//                         value={this.state.discount}
//                         onChange={this.handleInputChange}
//                         required></input>
//                     </div>

//                     {/* <div className='coname'>
//                     <label className='coffer'>Discount Price</label>
//                         <input type='number' class="form-control" placeholder='Eneter here'></input>
//                     </div> */}

//                     <div className='coname'>
//                     <label className='coffer'>Closing date</label>
//                         <input class="form-control"
//                         type="date" 
//                         defaultValue="2011-08-19" 
//                         name='closingDate'
//                         value={this.state.closingDate}
//                         onChange={this.handleInputChange}
//                         ></input>
//                     </div>
                    

                    

                    

//                 </div>

//                 <button class='btn btn-primary' type='submit' onClick={this.onSubmit}><Link to={'/alloffer'} style={{textDecoration:'none', color:'white'}}>ADD OFFER</Link></button>

                


//             </div>
//             </center>

//             </div>
//         );

//     }
// }

// export default AddOffer;