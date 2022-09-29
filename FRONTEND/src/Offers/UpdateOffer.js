import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import '../Instructor Profile/courseDetailsView.css';
import swal from "sweetalert";
import Header from '../Header/Header';

const CreateOffer =() => {
    const [input, setInput]=useState({});
    const id =useParams().id;
    console.log(id);
    const history = useNavigate();
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/Courses/Courses/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.courses));
        }
        fetchHandler()
        .then((data)=>setInput(data.courses));
    },[id])


    const sendRequest = async() =>{

        await axios.put(`http://localhost:8090/Courses/update/${id}` , {

            tittle:String(input.tittle),
            description:String(input.description),
            discount:String(input.discount),
            closingDate:String(input.closingDate)
            

        }).then(()=>{

            swal({
                title: "Success!",
                text: "Course Updated Successfully",
                icon: 'success',
                timer: 2000,
                button: false,
              });
            
        })


    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history("/alloffer"));
    };

    const handleChange =(e)=>{

        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }




    console.log(input);
    

  return (
    <div>
        <Header/>
       
        <div className='viewcourseArea'>

        <h2><span>C</span>ourse <span>D</span>etails</h2>

            <div className='viewcourse'>

                    {/* <div className='namee'>
                        <label>Instructor Usrename</label>
                        <input class="form-control" placeholder='Enter Username'/>
                    </div> */}

                    
                    

                    <div className='namee'>
                        <label>Course Title</label>
                        <input name="ctitle" class="form-control" placeholder='Enter Course Title' value={input.ctitle} readOnly/>
                    </div>

                    <div className='namee'>
                        <label>Course Duration</label>
                        <input name="cduration" value={input.cduration} onChange={handleChange}  class="form-control" placeholder='Enter Course Duration' readOnly></input>
                    </div>

                    <div className='namee'>
                        <label>Course Price</label>
                        <input name="cprice" value={input.cprice} onChange={handleChange} class="form-control" placeholder='Rs 0000.00' readOnly></input>
                    </div>

                    <div className='namee'>
                        <label>Description</label>
                        <textarea name="cdescription" value={input.cdescription} onChange={handleChange} class="form-control" id="" placeholder="Enter Description" readOnly></textarea>
                    </div>

                    <div className='namee'>
                    <label>Offer Tittle</label>
                        <input class="form-control"
                        name='tittle' 
                        value={input.tittle}
                        placeholder='Eneter here'
                        onChange={handleChange}
                        required></input>
                    </div>

                    <div className='namee'>
                    <label>Offer Discription</label>
                        <input class="form-control"
                        name='description' 
                        value={input.description}
                        placeholder='Eneter here'
                        onChange={handleChange}
                        required></input>
                    </div>

                    <div className='namee'>
                    <label>Discount Precentage</label>
                        <input type='number' 
                        name='discount'
                        placeholder='Eneter here'
                        value={input.discount}
                        onChange={handleChange}
                        required></input>
                    </div>

                    <div className='namee'>
                    <label>Closing date</label>
                        <input class="form-control"
                        name='closingDate'
                        value={input.closingDate}
                        onChange={handleChange}
                        type='date'
                        ></input>
                    </div>
                    
                    {/* <div className='namee'>
                        <label>Course Video</label>
                            <div className='courseVideo'>
                                <img src="select.png" alt="" class="vimage"></img>
                            </div>
                    </div> */}
                        

                </div>

                <div className='namee'>

                <div className='cUpdate'>
                <button class='btn btn-primary' onClick={handleSubmit}>Add Offer</button>
                </div>

                
                </div>

        </div>
        
       

    </div>
  )
    
};
export default CreateOffer;

















// import React, { Component} from 'react';
// import Header from "../Header/Header";
// import '../Offers/CreateOffer.css';
// import axios from "axios";
// import swal from 'sweetalert';
// import offerpng from '../Offers/offerpng.png';
// import { Link } from 'react-router-dom';

// class CreateOffer extends Component{

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

//         const {tittle,description, discount,closingDate} = this.state;

//         const data ={
//             tittle:tittle,
//             description:description,
//             discount:discount,
//             closingDate:closingDate

//         }
//         if(tittle===''&& description ===''&& discount ==='' && closingDate===''){
//             swal("All Fields are Empty");
//         }else if(tittle === ''){
//             swal("Tittle Fields is Empty");
//         }else if(description === ''){
//             swal("Description Fields is Empty");
//         }else if(discount === ''){
//             swal("Discount Fields is Empty");
//         }else if(closingDate === ''){
//             swal("ClosingDate Fields is Empty");
//         }


//         console.log(data)

//         axios.post("http://localhost:8090/offer/add",data).then((res) =>{
//             swal.fire({
//                 title: "Success!",
//                 text: "New Notice Updated Successfully",
//                 icon: 'success',
//                 timer: 2000,
//                 button: false,
//               });
//              // setFireRedirect(true);  
//             if(res.data){
//                 // alert("Notice Added Success!");
//                 this.setState(
//                     {
//                         tittle:"",
//                         description:"",
//                         discount:"",
//                         closingDate:""
                        
//                     }
//                 )
//             }
//         })
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
//                         name='closingDate'
//                         type='date'
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

// export default CreateOffer;









// import React, { useEffect, useState } from "react";
// import Header from "../Header/Header";
// import '../Offers/CreateOffer.css';
// import axios from "axios";
// import swal from 'sweetalert';
// import { useNavigate, useParams, Link } from "react-router-dom";

// const UpdateOffer =() =>{

//     const [input, setInput]=useState({});
//     const id =useParams().id;
//     const history = useNavigate();
//     console.log(id);
//     useEffect(()=>{ 
//         const fetchHandler = async()=>{
//             await axios.get(`http://localhost:8090/offer/offer/${id}`)
//             .then((res)=> res.data )
//             .then((data)=>setInput(data.offer));
//         }
//         fetchHandler()
//         .then((data)=>setInput(data.offer));
//     },[id])


//     const sendRequest = async() =>{
//         await axios.put(`http://localhost:8090/offer/update/${id}` , {

//             tittle:String(input.tittle),
//             description:String(input.description),
//             discount:String(input.discount),
//             closingDate:String(input.closingDate)

//         })
         
//     }

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         swal({
//             title: "Success!",
//             text: "New Notice Updated Successfully",
//             icon: 'success',
//             timer: 2000,
//             button: false,
//           });
//         sendRequest().then(()=>history("/alloffer"));
//     };

//     const handleChange =(e)=>{

//         setInput((prevState)=>({
//             ...prevState,
//             [e.target.name]:e.target.value,
//         }))
//     }
//     console.log(input);
    




//     return(
//         <div className='createoffer'>
//                 <Header/>
//                 <center>
//                     {input && (
//             <div className='coArea'>
//                 <h2>Update Offers</h2>
//                 <div className='coui'>
                
//                 <div className='coname'>
//                     <label className='coffer'>Tittle</label>
//                         <input class="form-control"
//                         name='tittle' 
//                         value={input.tittle}
//                         onChange={handleChange}
//                         ></input>
//                     </div>

//                     <div className='coname'>
//                     <label className='coffer'>Offer Discription</label>
//                         <input class="form-control"
//                         name='description' 
//                         value={input.description}
//                         onChange={handleChange}
//                         ></input>
//                     </div>

//                     <div className='coname'>
//                     <label className='coffer'>Discount Precentage</label>
//                         <input type='number' 
//                         name='discount'
//                         class="form-control" 
//                         placeholder='Eneter here'
//                         value={input.discount}
//                         onChange={handleChange}
//                         required></input>
//                     </div>

//                     {/* <div className='coname'>
//                     <label className='coffer'>Discount Price</label>
//                         <input type='number' class="form-control" placeholder='Eneter here'></input>
//                     </div> */}

//                     <div className='coname'>
//                     <label className='coffer'>Closing date</label>
//                         <input class="form-control"
//                         name='closingDate'
//                         type='date'
//                         value={input.closingDate}
//                         onChange={handleChange}
//                         ></input>
//                     </div>
                    

                    

                    

//                 </div>

//                 <button class='btn btn-primary' type='submit' onClick={handleSubmit}>UPDATE OFFER</button>

                


//             </div>
//             )}
//             </center>

//             </div>

//     );
// }

// export default UpdateOffer;