import './App.css';
import CreateReview from './Create Review/CreateReview';
import StudentProfile from './Student Profile/StudentProfile';

import EditProfile from './Edit Profile/EditProfile';
import EditProfileS from './Edit Profile/EditProfileS';
import UserProfile from './Edit Profile/UserProfile';
import ViewCourse from './View Course/ViewCourse';
import AddCourse from './Instructor Profile/AddCourse';
import CourseDetailsView from './Instructor Profile/CourseDetailsView';
import UpdateCourseDetails from './Instructor Profile/UpdateCourseDetails';
import CourseInfo from './Instructor Profile/CourseInfo';

import AllCoursesView from './Instructor Profile/AllCoursesView';
import Home from './Home/Home';
import HomeLogged from './Home/HomeLogged';
import HomeLoggedS from './Home/HomeLoggedS';
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

import Payment from './Payment/Payment';
import StudentPayment from './Payment/StudentPayment';
import InstructorPayment from './Payment/InstructorPayment';
import CourseReqList from './Admin/CourseReqList';
import SearchUsersIns from './Admin/SearchUsersIns';
import SearchUsersSt from './Admin/SearchUsersSt';
import TopCourse from './TopCourse/TopCourse';
import SelectRegister from './Header/SelectRegister';
import SelectLogin from './Header/SelectLogin';
import RegisterInstructor from './LoginRegister/RegisterInstructor';
import LoginInstructor from './LoginRegister/LoginInstructor';
import RegisterStudent from './LoginRegister/RegisterStudent';
import LoginStudent from './LoginRegister/LoginStudent';
import InstructorProfile from './Instructor Profile/InstructorProfile';
import Requests from './Requests Pages/Request';
import Smycourses from './My Courses/Smycourses';
import InstructorPay from './Payment/InstructorPay';

import Adminhome from './AdminDashboard/Adminhome';
import OfferRequest from './Offers/OfferRequest';

import ApproveCourses from './Admin/ApproveCourses';

import ViewCouseins from './View Course/ViewCouseins';

import InsPaymentReport from './Payment/InsPaymentReport';
import StudentPaymentReport from './Payment/StudentPaymentReport';
import ViewAllCourses from './View Course/ViewAllCourse';
import InstructorReport from './Admin/Instructor report';


import { Routes,Route } from 'react-router-dom';




function App() {
  return (
    
      <Routes>
        <Route>

          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<SelectRegister/>} />
          <Route path='/login' element={<SelectLogin/>} />


          <Route path='/registerInstructor' element={<RegisterInstructor/>} />
          <Route path='/loginInstructor' element={<LoginInstructor/>} />
          <Route path='/homeLogged' element={<HomeLogged/>} />
          <Route path='/addCourse' element={<AddCourse/> }/>
          <Route path='/courseDetailsView/:id' element={<CourseDetailsView/>} />
          <Route path='/updateCourseDetails' element={<UpdateCourseDetails/>} />
          <Route path='/allCourseView' element={<AllCoursesView/>} />
          <Route path='/instructorProfile' element={<InstructorProfile/>} />
          <Route path='/editProfile' element={<EditProfile/>} />
          <Route path='/createOffer/:id' element={<CreateOffer/>} />
          <Route path='/addoffer' element={<AddOffer/>}/>
          <Route path='/instructorPayment' element={<InstructorPayment/>} />
          <Route path='/InstructorPay' element={<InstructorPay/>} />
          

          <Route path='/registerStudent' element={<RegisterStudent/>} />
          <Route path='/loginStudent' element={<LoginStudent/>} />
          <Route path='/homeLoggedS' element={<HomeLoggedS/>} />
          <Route path='/viewCourse' element={<ViewCourse/> } />
          <Route path='/viewCourse/:id' element={<ViewCourse/> } />
          <Route path='/viewCourseins/:id' element={<ViewCouseins/> } />
          <Route path='/Cart' element={<Cart/> } />
          <Route path='/createReview' element={<CreateReview/>} />
          <Route path='/ViewAllCategoies' element={<ViewAllCategoies/>} />
          <Route path='/editProfileS' element={<EditProfileS/>} />
          <Route path='/studentProfile' element={<StudentProfile/>} />
          <Route path='/payment/:id' element={<Payment/>} />
          <Route path='/studentPayment' element={<StudentPayment/>} />
          <Route path='/Smycourses' element={<Smycourses/>} />


          <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/Adminhome' element={<Adminhome/>} />
          <Route path='/viewProfiles' element={<ViewProfiles/>} />
          <Route path='/adminProfile' element={<AdminProfile/>} />
          <Route path='/UserProfile/:id' element={<UserProfile/>} />
          <Route path='/request' element={<Requests/>} />
          <Route path='/ApproveCourses' element={<ApproveCourses/>} />
          <Route path='/OfferRequest' element={<OfferRequest/>} />

          
          <Route path='/courseInfo/:id' element={<CourseInfo/>} />
          <Route path='/instructorReqReg' element={<Instructor_Req_Req/>} />
          
          <Route path='/createCategories' element={<CreateCategory/>} />
          <Route path='/registeradmin' element={<RegisterAdmin/>} />
          
          <Route path='/alloffer' element={<ViewAllOffers/>} />
          <Route path='/offerInfo/:id' element={<OfferInfo/>} />
          
          <Route path='/updateoffer/:id' element={<UpdateOffer/>} />
          
          <Route path='/EditCategory/:id' element={<EditCategory/>} />

          <Route path='/TopcourseRequest' element={<TopcourseRequest/>} />
          <Route path='/courseReqList' element={<CourseReqList/>} />

          <Route path='/searchUsers/instructors' element={<SearchUsersIns/>} />
          <Route path='/searchUsers/students' element={<SearchUsersSt/>} />
          <Route path='/TopCourse' element={<TopCourse/>} />
          <Route path='/insreport' element={<InsPaymentReport/>} />
          <Route path='/stureport' element={<StudentPaymentReport/>} />
          <Route path='/all' element={<ViewAllCourses/>} />
          <Route path='/instructorReport' element={<InstructorReport/>} />

          

          
          
          


        </Route>
      </Routes>



  );
}

export default App;
