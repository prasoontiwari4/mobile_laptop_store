import './AddSubCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl , _subcategoryapiurl } from '../../ApiUrl';

function AddSubCategory() {

  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [subCatName , setSubCatName] = useState();
  const [output , setOutput] = useState();
  const [clist , setCategoryList] = useState([]);
  useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((response)=>{
      setCategoryList(response.data);
    }).catch((error)=>{
      console.log(error);
    })  
  });
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
  }


  return (
  <>
      {/* content Start */}
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>Add SubCategory Here!!!</h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)} >
      <option>Select Category</option>
      {
        clist.map((row)=>(
          <option>{row.catnm}</option>  
        ))
      }
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">SubCategory Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add SubCategory</button>
  <br/><br/>
</form>
                </div>
            </div>
        </div>
    </div>
    {/* Content End */}
  </>
  );
}

export default AddSubCategory;