// import React, { useState }  from "react";
import React, {useState} from "react";
import axios from "axios";
import swal from 'sweetalert'
import { Link} from 'react-router-dom';
import '../Offers/ViewAllOffer.css';
import Header from "../Header/Header";



class ViewAllOffers extends React.Component{

    constructor(props) {
        super (props);

        this.state={
            offers:[]
        };
    }


    componentDidMount(){
        this.retrieveOffers();
    }


    retrieveOffers(){
        
        axios.get("http://localhost:8090/offer").then(res =>{
            if(res.data){
                this.setState({
                    offers:res.data
                });

                console.log(this.state.offers)
            }
        });

    }

   


// handleTextSearch =(e)=>{
//     const searchTerm = e.currentTarget.value;
//     axios.get("http://localhost:8090/notice").then(res => {
//         if(res.data){ 
//             this.filterContent(res.data, searchTerm)
//         }
//     });
// }; 
// filterContent(notice, searchTerm){
//     const result = notice.filter(
//         (notice) => 
//             notice.subject.toLowerCase().includes(searchTerm)||
//             notice.select.toLowerCase().includes(searchTerm)
//     );
//     this.setState({ notice: result });
// }

// handleTextSearch =(e)=>{
//     const searchTerm = e.currentTarget.value;
//     axios.get("http://localhost:8090/notice").then(res => {
//         if(res.data){ 
//             this.filterContent(res.data.notice, searchTerm)
//         }
//     });
// }; 







    render(){
        return(
            <div>
        <Header/>

        <div className='allcoursesviewArea'>

        <h2><span>A</span>ll <span>O</span>ffers</h2>

        

            <div className='allcoursesview'>

            {this.state.offers.map((offers,index)=>
         
          <div className="card allcoursescontainer" key={index}>
            <div className="card-header">
            {offers.tittle}
                       
            </div>

            <div className="card-body">
              <video src="./Videos/tujhe.mp4" controls = "video/mp4"></video>

            </div>

            <div className="card-footer">
                <div className='discri'  style={{height:'20px'}}>

                {offers.description}
                
                 </div>
                 <br />

                 Discount : {offers.discount} %

                 <br />

                 Closing Date : {offers.closingDate}

                 
                 <br />

                 <div>
          
                 <button class="btn btn-primary btn-sm cn" ><Link to={`/offerInfo/${offers._id}`}  style={{textDecoration:'none', color:'white'}}>View More</Link></button>
                 <button class="btn btn-success btn-sm cn"><Link to={`/updateoffer/${offers._id}`}  style={{textDecoration:'none', color:'white'}}>Update
                 
                 </Link></button>
                 </div>
                 
            </div>


          </div>
         
         

          )}
           </div>

            

        </div>
 

    </div>
        )
    }
}

export default ViewAllOffers;