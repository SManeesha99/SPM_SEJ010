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

    onDelete = (id) =>{
        axios.delete(`http://localhost:8090/offers/delete/${id}`).then((res)=>{
            alert("Delete successfully");
            this.retrieveOffers();
        });
      
        
};


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
            
            <div>

                <div className="headAll">
                
                <h1>All Offers</h1>

                <p>Lorem ipsum is a placeholder text commonly !</p> 
                <div className="addBHutton">
                    <button className="btn noticeAdd"><a href="/createOffer" style={{textDecoration:'none', color:'white'}}>Create Offer</a></button>
                    </div>
                   
                {/* <button type="button" class="btn btn-outline-dark" href="#AllNotice">View All Notice</button> */}
                </div>


                <div className="constainerAllNotice">
                 <div className="constainerAllNotice container-fluid" id="AllNotice">
                    <div className="all-notice">
                    <center><h2>All Offers</h2></center>

                    {/* <div className="col-lg-3 mt-2 mb-2">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="search"
                            name="searchTerm"
                            onChange={this.handleTextSearch}
                        ></input>
                    </div> */}
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Closing Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.offers.map((offers,index)=>(

                        <tr key={index}> 
                        <td><strong><Link to={`/offerInfo/${offers._id}`} style={{textDecoration:'none', fontSize:'20px'}}>{offers.tittle}</Link></strong></td>
                        <td style={{ fontSize:'20px'}}>
                        {offers.description}</td>
                        <td style={{fontSize:'20px'}}>{offers.discount}</td>
                        <td style={{fontSize:'20px'}}>{offers.closingDate}</td>
                         <td>
                             
                         <a href={`/updateoffer/${offers._id}`}>
                            <button className="btn-ed btn-warning-notice" >
                                Edit
                            </button>
                            </a>
                            
                        </td>
                        
                        


                        </tr>

                    ))}
                    
                    
                    
                    
                </tbody>
                </table>

                    </div>
                


                </div>
                
            </div>
        </div>
        </div>
        )
    }
}

export default ViewAllOffers;