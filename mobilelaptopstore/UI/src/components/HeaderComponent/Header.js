import './Header.css';
import { Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import Auth from '../AuthComponent/Auth';
function Header() { 
  const [HeaderContent , setHeaderContent ]=useState();
useEffect(()=>{
  if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
  {
    setHeaderContent(<>
      <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link activate"><Link to="/admin">Admin Home</Link></a>
               </li>
                 <div className="nav-item dropdown">
  <a style={{"color":"rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))"}} href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
  <div class="dropdown-menu rounded-0 m-0">
    <a class="dropdown-item"><Link to="/addcategory">Add Category</Link></a>
    <a class="dropdown-item"><Link to="/addsubcategory">Add Sub Category</Link></a>
    </div>
</div>
               <li className="nav-item">
               <a className="nav-link"><Link to="/logout">Logout</Link></a></li>
             </ul>

             
           </div>
     </>);
  }
  
   else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
  {
    setHeaderContent(<>
      <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link activate"><Link to="/user">UserHome</Link></a>
               </li>
               <div className="nav-item dropdown">
  <a style={{"color":"rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))"}} href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
  <div class="dropdown-menu rounded-0 m-0">
    <a class="dropdown-item"><Link to="/addcategory">Add Category</Link></a>
    <a class="dropdown-item"><Link to="/addsubcategory">Add Sub Category</Link></a>
    </div>
    </div> 
               <div className="nav-item dropdown">
  <a style={{"color":"rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))"}} href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
  <div class="dropdown-menu rounded-0 m-0">
    <a class="dropdown-item"><Link to="/cpadmin">Change password</Link></a>
    <a class="dropdown-item"><Link to="/epadmin">Edit profile</Link></a>
    </div>
    </div>
               <li className="nav-item">
               <a className="nav-link"><Link to="/logout">Logout</Link></a></li>
               </ul>
           </div>
           
     </>);
  }
  
 
  else
  {
    setHeaderContent(<>
     <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
            &nbsp; &nbsp; &nbsp; &nbsp;<li className="nav-item">
             <a className="nav-link activate"><Link to="/" > Home </Link></a>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;                    <li className="nav-item">
             <a className="nav-link activate"> About </a>
              </li>
              <li className="nav-item">
             <a className="nav-link activate"> Contact Us </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link"><Link to="/register">Sign Up</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/login">Login</Link></a>
            </li>  &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; 
          </ul>
          </div>
      
    </>);
  }
});

  return (
  <>
       {/* header section start */}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          { HeaderContent }
        {/*-------*/}  
        </nav>
        {/* header section end */}
  </>
  );
}

export default Header;