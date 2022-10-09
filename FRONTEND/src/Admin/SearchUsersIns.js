import React from 'react';
import './searchUsers.css';
import Header from '../Header/Header';
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

render(){

  return (
    <div>
        <Header/>
        <BHeader/>

        <div className='searchinsArea'>

        {this.state.instructors.map((instructors, index) =>

          <div class='row proItem'ke={index}>
            <div class='col-sm-2 leftsI'>

              <div className='proimgsI'>

              </div>

            </div>
            <div class='col-sm-10 rightsI row'>

              <div class='col-sm-8'>
                <h2>{instructors.firstName} {instructors.lastName}</h2>
                <p>How many videos</p>

              </div>
              <div class='col-sm-4'>
                <button type='button' class='btn btn-primary'>View Profile</button>
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