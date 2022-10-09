import React from 'react';
import './searchUsers.css';
import Header from '../Header/Header';
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
  }

render(){

  return (
    <div>
        <Header/>
        <BHeader/>

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
export default SearchUsersSt;