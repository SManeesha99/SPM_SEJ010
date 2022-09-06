import './App.css';
import CreateReview from './Create Review/CreateReview';
import StudentProfile from './Student Profile/StudentProfile';
import Register from './LoginRegister/Register';
import Login from './LoginRegister/Login';
import EditProfile from './Edit Profile/EditProfile';
import AddCartCourse from './Add cart Course/AddCartCourse';
import AddCourse from './Instructor Profile/AddCourse';
import CourseDetailsView from './Instructor Profile/CourseDetailsView';
import UpdateCourseDetails from './Instructor Profile/UpdateCourseDetails';

import AllCoursesView from './Instructor Profile/AllCoursesView';
import Home from './Home/Home';

import Instructor_Req_Req from './Instructor Reg Req/InstructorRegReq';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    
      <Routes>
        <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createReview' element={<CreateReview/>} />
          <Route path='/studentProfile' element={<StudentProfile/>} />
          <Route path='/editProfile' element={<EditProfile/>} />
          <Route path='/addCartCourse' element={<AddCartCourse/> } />
          <Route path='/addCourse' element={<AddCourse/> }/>
          <Route path='/courseDetailsView' element={<CourseDetailsView/>} />
          <Route path='/updateCourseDetails' element={<UpdateCourseDetails/>} />
          <Route path='/allCourseView' element={<AllCoursesView/>} />
          <Route path='/instructorReqReg' element={<Instructor_Req_Req/>} />
        </Route>
      </Routes>


  );
}

export default App;
