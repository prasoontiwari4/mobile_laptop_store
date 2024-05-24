import './Register.css';
import { useState } from 'react';
import { _userapiurl } from '../../ApiUrl';
import axios from 'axios';

function Register() { 

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    var userDetails = {"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
    axios.post(_userapiurl+"save",userDetails).then((response)=>{
      setOutput("User register successfully");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch((error)=>{
      setOutput("Invalid user or verify your account");  
    });
  };

  return (
  <>
      {/* content Start */}
      <div class="container-xxl py-5" >
        <div class="container">
            <div class="row g-4">
<div class="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
<h1>SignUp Here Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={ e => setName(e.target.value) } />
  </div>
  <br/>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={ e => setEmail(e.target.value) } />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={ e => setPassword(e.target.value) } />
  </div>
  <br/>
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={ e => setMobile(e.target.value) } />
  </div>
  <br/>
  <div class="form-group">
    <label for="name">Address:</label>
    <textarea rows="5" class="form-control" value={address} onChange={ e => setAddress(e.target.value) }></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" value={city} onChange={ e => setCity(e.target.value) }>
      <option>Select City</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    <input type="radio" name="gender" value="male" onChange={ e => setGender(e.target.value) } /> Male
    &nbsp; &nbsp;
    <input type="radio" name="gender" value="female" onChange={ e => setGender(e.target.value) } /> Female
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-success">Submit</button>
</form>

</div>
            </div>
        </div>
    </div>
    {/* Content End */}
  </>
  );
}

export default Register;