import React from 'react';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";
import './allCoursesView.css';
import Header from '../Header/Header';
import {NavLink} from 'react-router-dom';


class AllCoursesView extends React.Component{

  id =localStorage.getItem("id");

  constructor(props) {
    super (props);

    this.state={
        courses:[]
    };
}

componentDidMount(){
  this.retrieveCourses();
}

retrieveCourses(){
        
  axios.get(`http://localhost:8090/Courses/owncourse/${localStorage.getItem("id")}`).then(res =>{
      if(res.data){
          this.setState({
              courses:res.data
          });

          console.log(this.state.courses);
      }
  });

}

onDelete = (id) =>{

  axios.delete(`http://localhost:8090/Courses/delete/${id}`).then((res)=>{

      this.retrieveCourses();

      swal({
        title: "Success!",
        text: "Course Delete Successfull",
        icon: 'success',
        timer: 2000,
        button: false,
      });

  });

};

handleTextSearch =(e)=>{
  const searchTerm = e.currentTarget.value;
  axios.get("http://localhost:8090/Courses").then(res => {
      if(res.data){ 
          this.filterContent(res.data , searchTerm)
      }
  });
}; 

filterContent(courses, searchTerm){
  const result = courses.filter(
      (courses) => 
      courses.ctitle.toLowerCase().includes(searchTerm)
  );
  this.setState({ courses: result });
}

ondeleteOffer(id) {
  console.log(id)
  axios.get("http://localhost:8090/Courses/deleteOffer/" + id).then((res) => {
    swal({
      title: "Success!",
      text: "Course offer deleted Successfully",
      icon: 'success',
      timer: 2000,
      button: false,
    });
    const timer = setTimeout(() => {
      window.location.reload()
    }, 2000);
  })
}

  render(){
    return(
      <div>

      <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" name="searchTerm" onChange={this.handleTextSearch} aria-label="Search"></input>
                <button class="btn searchbtn" type="submit">Search</button>
            </form>
            <button className='tpCoursebtn'><NavLink class="nav-link" to={"/TopCourse"}>Top Course</NavLink></button>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
               
                <li class="nav-item">

                {/* <a class="nav-link" href="#"><div className='profilearea'></div></a> */}
                  <div class="dropdown">
                  <button class="btn btn-secondary  profilearea" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                  </button>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="/homeLogged">Home</a></li>
                    <li><a class="dropdown-item" href="/editProfile">Profile</a></li>
                    <li><a class="dropdown-item" href="/addCourse">Add Course</a></li>
                    <li><a class="dropdown-item" href="/allCourseView">My Courses</a></li>
                    <hr/>
                    <li><a class="dropdown-item" href="/" onClick={localStorage.clear}>Sign Out</a></li>
                  </ul>
                  </div>

                </li>
                
            </ul>

              
            
            
            </div>
        </div>
        </nav>
    </div>

      <div className='allcoursesviewArea'>

      <h2><span>M</span>y <span>C</span>ourses</h2>

      
          <div className='allcoursesview'>

          {this.state.courses.map((courses, index) =>
       
        <div className="card allcoursescontainer" key={index}>

        <Link className="nav-link active" aria-current="page" to={`/viewCourseins/${courses._id}`}>

          <div className="card-header">
          {courses.ctitle}
                     
          </div>

          <div className="card-body">
            
            {/* <img src="./images/dddd.jpg" alt="" /> */}

            <video src="./Videos/shanthi.mp4" controls = "video/mp4"></video>

          </div>

          </Link>

          <div className="card-footer">

               <div className='profileArea'>

              <div className='pro'>

              </div>
              <div className='nameN'>
                <h2>{courses.InstructorfName} {courses.InstructorlName}</h2>
                <p>{courses.uploadAt}</p>
                
              </div>

              </div>

              <div className='discri'>

              {courses.cdescription}
              
               </div>
               <br />

               Course Duration : {courses.cduration}

               <br />

               Course Price : {courses.cprice}

               
               <br />

               <div className='btnarea'>
        
               <button class="btn btn-primary btn-sm cn" > <Link to={`/courseDetailsView/${courses._id}`} style={{textDecoration:'none', color:'white'}}>View More</Link></button>
               
                {courses.offerHasApproved ? <button class="btn btn-danger btn-sm cn" onClick={this.ondeleteOffer.bind(this, courses._id)}>
                    Delete Offer
                </button> : <button class="btn btn-success btn-sm cn">
                  <Link to={`/createOffer/${courses._id}`} style={{textDecoration:'none', color:'white'}}>
                    Add Offer
                  </Link>
                </button>
                }


               <button type="button" class="btn btn-danger btn-sm cn" onClick={() => this.onDelete(courses._id)}>Remove</button>
               </div>
               
          </div>


        </div>
       
       
        )}

        
         </div>
       
          

      </div>


  </div>
    );
  }



}
export default AllCoursesView;

// export default function AllCoursesView() {

//   const [input, setInput] = useState('');
//   const [allCourse,setallCourse] = useState([])

//   useEffect(()=>{
//       axios.get('http://localhost:8090/Courses/').then(res =>{
//           setallCourse(res.data);
//           console.log(res);
//       }).catch(err =>{
//           console.log(err);
//       })
//   })

//   return (
//     <div>
//         <Header/>

//         <div className='allcoursesviewArea'>

//         <h2><span>A</span>ll <span>C</span>ourses</h2>

        

//             <div className='allcoursesview'>

//             {allCourse.map(allCourse =>
         
//           <div className="card allcoursescontainer">
//             <div className="card-header">
//             {allCourse.ctitle}
                       
//             </div>

//             <div className="card-body">
              
//               {/* <img src="./images/dddd.jpg" alt="" /> */}

//               <video src="./Videos/tujhe.mp4" controls = "video/mp4"></video>

//             </div>

//             <div className="card-footer">
//                 <div className='discri'>

//                 {allCourse.cdescription}
                
//                  </div>
//                  <br />

//                  Course Duration : {allCourse.cduration}

//                  <br />

//                  Course Price : {allCourse.cprice}

                 
//                  <br />

//                  <div>
          
//                  <button class="btn btn-primary btn-sm cn" > <Link to={`/courseInfo/${allCourse._id}`} style={{textDecoration:'none', color:'white'}}>View More</Link></button>
//                  <button class="btn btn-success btn-sm cn"> Add Offer</button>
//                  </div>
                 
//             </div>


//           </div>
         
         

//           )}
//            </div>

            

//         </div>
 

//     </div>
//   )
// }
