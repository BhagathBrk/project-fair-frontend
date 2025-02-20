import React, { useContext, useState } from 'react'
import authIMG from '../assets/authIMG33.png'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import { tokenAuthContext } from '../contexts/AuthContextAPI'



const Auth = ({insideRegister}) => {

  const {isAuthorised, setIsAuthorised}= useContext(tokenAuthContext)

  const [loginAnim, setLoginAnim] = useState(false)
  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    username: "",
    email:"",
    password:""
  })

  console.log(inputData);

  const handleRegister =async (e)=>{
    e.preventDefault()
    console.log('handle register');
    if(inputData.username && inputData.email && inputData.password){
      // alert("make api call")

      try{
        const result = await registerAPI(inputData)
        console.log(result);

        if(result.status== 200){
          alert(`Welcome ${result.data.username}`)

          navigate('/login')
          setInputData({ username: "", email:"", password:""})
        }
        else{
          if(result.response.status==406){
            alert(result.response.data)
            setInputData({ username: "", email:"", password:""})
          }
        }
        
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("fill the form completely")
    }
    
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    if(inputData.email && inputData.password){

      try{
        const result =await loginAPI(inputData)
        if(result.status == 200){

          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIsAuthorised(true)
          setLoginAnim(true)
         setTimeout(()=>{
         setInputData({ username: "", email:"", password:""})
          navigate('/')
          setLoginAnim(false)
      }, 1500)

        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      }
      catch(err){
      console.log(err);
    
    }

    }else{
      alert('Please fill the form completely')
    }

  }
  

  return (
    <div style={{minHeight:'100vh', width:"100%"}} className='d-flex justify-content-center align-items-center'>

      <div className="container w-75">

        <div className="card  shadow p-2">

          <div className="row align-items-center">

            <div className="col-lg-6">

          <img src={authIMG} className='img-fluid' alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className='mt-2'><i className="fa-brands fa-docker me-2"></i>Project Fair</h1>

              <h5 className="mt-2">Sign {insideRegister? 'up' : 'in'} to your Account</h5>
<Form>

    {
      insideRegister && 

      <FloatingLabel controlId="floatingInputName" label="Username" className='mb-3'>
          <Form.Control onChange={e=>setInputData({...inputData,username: e.target.value})} value={inputData.username} type="text" placeholder="Username" />
        </FloatingLabel>
      
    }
  
           <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control onChange={e=>setInputData({...inputData,email: e.target.value})} value={inputData.email} type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel onChange={e=>setInputData({...inputData,password: e.target.value})} value={inputData.password} controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" /> 
        </FloatingLabel>

        {
          insideRegister ?

          <div className="mt-3">
            <button onClick={handleRegister} className="btn btn-primary mb-2">Register</button>
            <p>Already a user? Please click here to <Link to={'/login'} >Login</Link> </p>
          </div>
          :

          <div className="mt-3">
          <button onClick={handleLogin} className="btn btn-primary d-flex mb-3">Login {loginAnim &&  <Spinner className='ms-1' animation="border" variant="light" />}</button>
          <p>New user? Please click here to <Link to={'/register'} >Register</Link> </p>
        </div>
        }
</Form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth