import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'



const Header = ({insideDashboard}) => {

   const {isAuthorised, setIsAuthorised}= useContext(tokenAuthContext)
  
  const navigate = useNavigate()
  const logout =()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <Navbar className="border rounded position-fixed w-100">
        <Container>

        <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='text-light fw-bolder'>
          <i  class="fa-brands fa-docker me-2"></i>
          Project Fair
          </Navbar.Brand>
          </Link>

          {
            insideDashboard && 
            <div className='ms-auto'><button onClick={logout} className='btn btn-link'>Log out <i className="fa-solid fa-right-from-bracket"></i> </button></div>
          }

        </Container>
      </Navbar>
  )
}

export default Header