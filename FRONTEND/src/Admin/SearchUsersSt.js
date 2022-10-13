import React from 'react';
import './searchUsers.css';
import {Link} from 'react-router-dom';
import Header from "../Admin/AdminHeader";
import BHeader from '../Header/BHeader';
import axios from 'axios';

class SearchUsersSt extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      students:[]
    };
  }

  componentDidMount(){
    this.retrieveStudents();
  }

  retrieveStudents(){
    axios.get("http://localhost:8090/User/filterStudents").then(res =>{
      if(res.data){
        this.setState({
            students:res.data
        });
        console.log(this.state.students)
      }
    })
  };


  handleTextSearch =(e)=>{
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8090/User/filterStudents").then(res => {
        if(res.data){ 
            this.filterContent(res.data , searchTerm)
        }
    });
  }; 
  
  filterContent(courses, searchTerm){
    const result = courses.filter(
        (students) => 
        students.firstName.toLowerCase().includes(searchTerm)
    );
    this.setState({ students: result });
  }

render(){

  return (
    <div>
        <Header/>
        <BHeader/>

        <div className='searchbar '>
          <form class="d-flex searchbaritem" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search Students" onChange={this.handleTextSearch} aria-label="Search"/>
          </form>
        </div>

        <div className='searchinsArea'>

        {this.state.students.map((students, index) =>

          <div class='row proItem'ke={index}>
            <div class='col-sm-2 leftsI'>

              <div className='proimgsI'>

              </div>

            </div>
            <div class='col-sm-10 rightsI row'>

              <div class='col-sm-8'>
                <h2>{students.firstName} {students.lastName}</h2>
                <p>How many videos</p>

              </div>
              <div class='col-sm-4'>
                <button type='button' class='btn btn-primary'><Link to={`/UserProfile/${students._id}`} style={{textDecoration:'none', color:'white'}}>View Profile</Link></button>
              </div>
              
            </div>

          </div>
        )}

        </div>

    </div>
  );
}


}
export default SearchUsersSt;