import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>

<div className='mt-5 w-100 shadow p-4'>
      <div className="d-flex justify-content-between">
        {/* intro */}

        <div style={{width:'400px'}}>
          <h5>
          <i class="fa-brands fa-docker me-3"></i>
          Project Fair
          </h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>

        {/* links */}

        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login Page</Link>
          <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>Register Page</Link>
        </div>

        {/* guides */}

        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://getbootstrap.com/">Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://mui.com/material-ui/">Material UI</a>
        </div>

        {/* contact */}

        <div className="d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex mt-4">
            <input className='form-control me-3' type="text" />
            <button className="btn btn-info" style={{textDecoration:'none', color:'white'}}> <i class="fa-solid fa-arrow-right"></i> </button>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-2x fa-x-twitter"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.instagram.com/accounts/login/?hl=en"><i class="fa-brands fa-2x fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.whatsapp.com/"><i class="fa-brands fa-2x fa-whatsapp"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/LinkedIn"><i class="fa-brands fa-2x fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-2x fa-facebook"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.truecaller.com/"><i class="fa-solid fa-2x fa-phone"></i></a>
          </div>
          
        </div>

      </div>
    </div>

    </>
  )
}

export default Footer