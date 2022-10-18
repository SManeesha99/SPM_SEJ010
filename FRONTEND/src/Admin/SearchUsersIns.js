import React from 'react';
import './searchUsers.css';
import {Link} from 'react-router-dom';
import Header from "../Admin/AdminHeader";
import BHeader from '../Header/BHeader';
import axios from 'axios';

class SearchUsersIns extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      instructors:[]
    };
  }

  componentDidMount(){
    this.retrieveInstructors();
  }

  retrieveInstructors(){
    axios.get("http://localhost:8090/User/filterInstrutors").then(res =>{
      if(res.data){
        this.setState({
          instructors:res.data
        });
        console.log(this.state.instructors)
      }
    })
  }



  handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8090/User/filterInstrutors").then(res => {
        if(res.data){ 
            this.filterContent(res.data , searchTerm)
        }
    });
  }; 
  
  filterContent(courses, searchTerm){
    const result = courses.filter(
        (instructors) => 
        instructors.firstName.toLowerCase().includes(searchTerm)
    );
    this.setState({ instructors: result });
  }


render(){

  return (
    <div>
        <Header/>
        <BHeader/>

        

        <div className='searchbar '>
          <form class="d-flex searchbaritem" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search Instructors" onChange={this.handleTextSearch} aria-label="Search"/>
          </form>
        </div>
        

        <div className='searchinsArea'>
        <button className='btn btn-primary greport'><Link to={"/instructorReport"}>Report Generate</Link></button>

        {this.state.instructors.map((instructors, index) =>

          <div class='row proItem'ke={index}>
            <div class='col-sm-2 leftsI'>

              <div className='proimgsI'>

              </div>

            </div>
            <div class='col-sm-10 rightsI row'>

              <div class='col-sm-8'>
                <h2>{`${instructors.firstName} ${instructors.lastName}`} </h2>
                <p>How many videos</p>

              </div>
              <div class='col-sm-4'>
                <button type='button' class='btn btn-primary'><Link to={`/UserProfile/${instructors._id}`} style={{textDecoration:'none', color:'white'}}>View Profile</Link></button>
              </div>
              
            </div>

          </div>
        )}

        </div>

    </div>
  );
}


}
export default SearchUsersIns;