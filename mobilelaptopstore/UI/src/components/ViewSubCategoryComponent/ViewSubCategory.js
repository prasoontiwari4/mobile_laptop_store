import './ViewSubCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl } from '../../ApiUrl';
import { Link , useParams } from 'react-router-dom';


function ViewSubCategory() { 

  const params = useParams(); 
  const [sclist , setSubCategoryList] = useState([]);

  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
      console.log(response.data);  
      setSubCategoryList(response.data);
    }).catch((error)=>{
      console.log(error);
    })  
  });

  return (
  <>
      {/* content Start */}
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
<div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>Sub Category {params.catnm}</h1>
<br/>
<div id="category_main" >
{
  sclist.map((row)=>(
    <Link to={`viewjobs/${row.subcatnm}`} >
    <div className="category_part">
      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
      <br/>
      <b>{row.subcatnm}</b>  
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

export default ViewSubCategory;