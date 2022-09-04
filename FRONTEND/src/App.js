import './App.css';
import CreateReview from './Create Review/CreateReview';
import StudentProfile from './Student Profile/StudentProfile';
import Register from './LoginRegister/Register';
import Login from './LoginRegister/Login';
import EditProfile from './Edit Profile/EditProfile';
import AddCartCourse from './Add cart Course/AddCartCourse';
import AddCourse from './Instructor Profile/AddCourse';

function App() {
  return (
    <div className="App">
      {/* <CreateReview/> */}
      {/* <StudentProfile/> */}
      {/* <Register/> */}

      {/* <Login/> */}

      <Login/>

      {/* <EditProfile/> */}
      {/* <AddCartCourse/> */}
      <AddCourse/>
      
    </div>
  );
}

export default App;
