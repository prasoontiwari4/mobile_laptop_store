import './App.css';
import { Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/HeaderComponent/Header';
import Content from './components/ContentComponent/Content';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Adminhome from './components/AdminhomeComponent/Adminhome';

import Footer from './components/FooterComponent/Footer';
import Logout from './components/LogoutComponent/Logout';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';

function App() { 
  return (
<>

  <Header />      

  <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/content' element={<Content />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/admin' element={<Adminhome />}></Route>
      <Route path='/addcategory' element={<AddCategory />}></Route>
      <Route path='/addsubcategory' element={<AddSubCategory />}></Route>
      <Route path='/viewsubcategory/:catnm' element={<ViewSubCategory />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      
  </Routes>

  <Content/>

  <Footer />  

</>
  );
}

export default App;