import './Content.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl } from '../../ApiUrl';
import { Link } from 'react-router-dom';


function Content() { 

  const [clist , setCategoryList] = useState([]);

  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((response)=>{
      setCategoryList(response.data);
    }).catch((error)=>{
      console.log(error);
    })  
  });

  return (
  <>
      {/* content Start */}


      <div class="container main-content">
    <div class="text-center">
      <img src="https://via.placeholder.com/1500x500.png?text=Mobile+and+Laptop+Store" alt="Store Image" class="img-fluid"></img>
      <p class="mt-3">Please click on <a href="#">Login</a> to go to the admin panel where you can add categories and subcategories.</p>
    </div>
  </div>

      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
<div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>Category  </h1>
<br/>
<div id="category_main" >
{
  clist.map((row)=>(
    <Link to={`viewsubcategory/${row.catnm}`} >
    <div className="category_part">
      <img src={`assets/uploads/caticons/${row.caticonnm}`} height="100" width="150" />
      <br/>
      <b>{row.catnm}</b>  
  </div>
  </Link>
  ))
}
  

</div>

</div>

            </div>
        </div>
    </div>
    {/* Content End */}
  </>
  );
}

export default Content;