import React, { useContext, useState } from 'react';
import authIMG from '../assets/authIMG33.png';
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthContext } from '../contexts/AuthContextAPI';

const Auth = ({ insideRegister }) => {
  const { setIsAuthorised } = useContext(tokenAuthContext);
  const [loginAnim, setLoginAnim] = useState(false);
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!inputData.username || !inputData.email || !inputData.password) {
      alert('⚠️ Please fill out all fields.');
      return;
    }

    try {
      const result = await registerAPI(inputData);
      if (result.status === 201) { 
        alert(`🎉 Welcome ${result.data.user.username}!`);
        navigate('/login');
        setInputData({ username: '', email: '', password: '' });
      }
    } catch (err) {
      console.error("Register Error:", err);
      alert(err.response?.data?.message || '❌ Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!inputData.email || !inputData.password) {
      alert('⚠️ Please fill out all fields.');
      return;
    }

    try {
      setLoginAnim(true);
      const result = await loginAPI(inputData);

      if (result.status === 200) {
        sessionStorage.setItem('user', JSON.stringify(result.data.user));
        sessionStorage.setItem('token', result.data.token);
        setIsAuthorised(true);

        setTimeout(() => {
          setInputData({ username: '', email: '', password: '' });
          navigate('/');
          setLoginAnim(false);
        }, 1500);
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.message || '❌ Login failed. Please check your credentials.');
    } finally {
      setLoginAnim(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className="d-flex justify-content-center align-items-center">
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={authIMG} className="img-fluid" alt="Authentication" />
            </div>
            <div className="col-lg-6">
              <h1 className="mt-2">
                <i className="fa-brands fa-docker me-2"></i>Project Fair
              </h1>
              <h5 className="mt-2">Sign {insideRegister ? 'up' : 'in'} to your Account</h5>

              <Form>
                {insideRegister && (
                  <FloatingLabel controlId="floatingInputName" label="Username" className="mb-3">
                    <Form.Control
                      onChange={(e) => setInputData({ ...inputData, username: e.target.value })}
                      value={inputData.username}
                      type="text"
                      placeholder="Username"
                    />
                  </FloatingLabel>
                    )}
                

                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                    value={inputData.email}
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                    value={inputData.password}
                  />
                </FloatingLabel>
              

                {insideRegister ? (
                  <div className="mt-3">
                    <button onClick={handleRegister} className="btn btn-primary mb-2">
                      Register
                    </button>
                    <p>
                      Already a user? Please <Link to={'/login'}>Login</Link>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button onClick={handleLogin} className="btn btn-primary d-flex align-items-center mb-3">
                      Login {loginAnim && <Spinner className="ms-1" animation="border" variant="light" />}
                    </button>
                    <p>
                      New user? Please <Link to={'/register'}>Register</Link>
                    </p>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
