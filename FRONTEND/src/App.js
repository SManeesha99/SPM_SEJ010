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
import CourseInfo from './Instructor Profile/CourseInfo';

import AllCoursesView from './Instructor Profile/AllCoursesView';
import Home from './Home/Home';
import CreateOffer from './Offers/CreateOffer';
import Instructor_Req_Req from './Instructor Reg Req/InstructorRegReq';
import CreateCategory from './Admin/CreateCategory';
import RegisterAdmin from './Admin/RegisterAdmin';
import AdminLogin from './Admin/AdminLogin';

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
          <Route path='/courseDetailsView/:id' element={<CourseDetailsView/>} />
          <Route path='/updateCourseDetails' element={<UpdateCourseDetails/>} />
          <Route path='/allCourseView' element={<AllCoursesView/>} />
          <Route path='/courseInfo/:id' element={<CourseInfo/>} />
          <Route path='/instructorReqReg' element={<Instructor_Req_Req/>} />
          <Route path='/createOffer' element={<CreateOffer/>} />
          <Route path='/createCategories' element={<CreateCategory/>} />
          <Route path='/registeradmin' element={<RegisterAdmin/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />

        </Route>
      </Routes>



  );
}

export default App;
