import './Login.css';
import { useState } from 'react';
import { _userapiurl } from '../../ApiUrl';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() { 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    var userDetails = { "email": email, "password": password };
    axios.post(_userapiurl + "login", userDetails)
      .then((response) => {
        var users = response.data.userDetails;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("_id", users._id);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("role", users.role);
        localStorage.setItem("info", users.info);
        users.role === "admin" ? navigate("/admin") : navigate("/user");
      }).catch((error) => {
        setOutput("Invalid user or verify your account");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {/* content Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1>Login Here!!!</h1>
              <font color="blue">{output}</font>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <br />
                <button onClick={handleSubmit} type="button" className="btn btn-success">Submit</button>
                <br /><br />
                <Link to="/forgot-password">Forgot Password?</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Content End */}
    </>
  );
}

export default Login;
