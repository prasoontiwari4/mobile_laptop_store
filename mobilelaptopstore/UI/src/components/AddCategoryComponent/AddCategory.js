import './AddCategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../ApiUrl';

function AddCategory() {

  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [output , setOutput] = useState();
  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }

  const handleSubmit=(event)=>{
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  }


  return (
  <>
      {/* content Start */}
      <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>Add Category Here!!!</h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
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

export default AddCategory;