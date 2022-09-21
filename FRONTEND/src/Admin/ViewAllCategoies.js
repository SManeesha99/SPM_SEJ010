import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './viewAllCategories.css';
import Header from "../Header/Header";


class ViewAllCategoies extends React.Component{

    constructor(props) {
        super (props);
    
        this.state={
            category:[]
        };
    }
    
    componentDidMount(){
      this.retrieveCategory();
    }
    
    retrieveCategory(){
            
      axios.get("http://localhost:8090/category/").then(res =>{
          if(res.data){
              this.setState({
                category:res.data
              });
    
              console.log(this.state.category)
          }
      });
    
    }



    onDelete = (id) =>{
    axios.delete(`http://localhost:8090/category/delete/${id}`).then((res)=>{
      alert("Delete successfully");
      this.retrieveCategory();
  });

  
};

    render(){

  return (
    <div>
        <Header/>

        <div className='categoryArea'>

            <h1 className='title'>All Categories</h1>
            <div className='categoryContainer'>
                
            {this.state.category.map((category, index) =>

                <div class="row categorydiv">
                    <div class="col left">
                        <h4>{category.categoryTitle}</h4>
                        <p>{category.categoryDescription}</p>
                    </div>

                    <div class="col right">
                        <a href='#' class="btn btn-primary">View More..</a>
                        <a href='#' class="btn btn-success"> <Link to={`/EditCategory/${category._id}`} style={{textDecoration:'none', color:'white'}}>Edit Category</Link></a>
                        <button class="btn btn-danger" type='button' onClick={()=> this.onDelete(category._id)}>Remove</button>
                    </div>


                </div>

            )}

                
            </div>

        </div>

    </div>
  );
}


}
export default ViewAllCategoies;

