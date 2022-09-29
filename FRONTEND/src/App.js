import './App.css';
import CreateReview from './Create Review/CreateReview';
import StudentProfile from './Student Profile/StudentProfile';
import Register from './LoginRegister/Register';
import Login from './LoginRegister/Login';
import EditProfile from './Edit Profile/EditProfile';
import ViewCourse from './Add cart Course/ViewCourse';
import AddCourse from './Instructor Profile/AddCourse';
import CourseDetailsView from './Instructor Profile/CourseDetailsView';
import UpdateCourseDetails from './Instructor Profile/UpdateCourseDetails';
import CourseInfo from './Instructor Profile/CourseInfo';

import AllCoursesView from './Instructor Profile/AllCoursesView';
import Home from './Home/Home';
import HomeLogged from './Home/HomeLogged';
import CreateOffer from './Offers/CreateOffer';
import Instructor_Req_Req from './Instructor Reg Req/InstructorRegReq';
import CreateCategory from './Admin/CreateCategory';
import RegisterAdmin from './Admin/RegisterAdmin';

import ViewProfiles from './Admin/ViewProfiles';

import AdminLogin from './Admin/AdminLogin';
import ViewAllOffers from './Offers/ViewAllOffers';
import OfferInfo from './Offers/OfferDetails';
import UpdateOffer from './Offers/UpdateOffer';
import AddOffer from './Offers/AddOffer';

import AdminProfile from './Admin/AdminProfile';

import ViewAllCategoies from './Admin/ViewAllCategoies';
import EditCategory from './Admin/EditCategory';
import Cart from './Cart/Cart';

import TopcourseRequest from './Admin/TopcourseRequest';
=======
import Payment from './Payment/Payment';
import StudentPayment from './Payment/StudentPayment';
import InstructorPayment from './Payment/InstructorPayment';
import CourseReqList from './Admin/CourseReqList';




import { Routes,Route } from 'react-router-dom';



function App() {
  return (
    
      <Routes>
        <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/homeLogged' element={<HomeLogged/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/createReview' element={<CreateReview/>} />
          <Route path='/ViewAllCategoies' element={<ViewAllCategoies/>} />
          <Route path='/EditCategory/:id' element={<EditCategory/>} />
          <Route path='/studentProfile' element={<StudentProfile/>} />
          <Route path='/viewProfiles' element={<ViewProfiles/>} />

          <Route path='/editProfile/:id' element={<EditProfile/>} />
          <Route path='/viewCourse' element={<ViewCourse/> } />
          <Route path='/Cart' element={<Cart/> } />

          <Route path='/editProfile' element={<EditProfile/>} />
          <Route path='/viewCourse/:id' element={<ViewCourse/> } />

          <Route path='/addCourse' element={<AddCourse/> }/>
          <Route path='/courseDetailsView/:id' element={<CourseDetailsView/>} />
          <Route path='/updateCourseDetails' element={<UpdateCourseDetails/>} />
          <Route path='/allCourseView' element={<AllCoursesView/>} />
          <Route path='/courseInfo/:id' element={<CourseInfo/>} />
          <Route path='/instructorReqReg' element={<Instructor_Req_Req/>} />
          <Route path='/createOffer/:id' element={<CreateOffer/>} />
          <Route path='/addoffer' element={<AddOffer/>}/>
          <Route path='/createCategories' element={<CreateCategory/>} />
          <Route path='/registeradmin' element={<RegisterAdmin/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/alloffer' element={<ViewAllOffers/>} />
          <Route path='/offerInfo/:id' element={<OfferInfo/>} />
          <Route path='/updateoffer/:id' element={<UpdateOffer/>} />
          <Route path='/adminProfile' element={<AdminProfile/>} />

          <Route path='/payment/:id' element={<Payment/>} />

          <Route path='/TopcourseRequest' element={<TopcourseRequest/>} />

          <Route path='/payment' element={<Payment/>} />

          <Route path='/studentPayment' element={<StudentPayment/>} />
          <Route path='/instructorPayment' element={<InstructorPayment/>} />
          <Route path='/courseReqList' element={<CourseReqList/>} />
     



        </Route>
      </Routes>



  );
}

export default App;
