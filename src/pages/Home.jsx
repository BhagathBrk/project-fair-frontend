import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingIMG from '../assets/landingIMG2.png'
import ProjectCard from '../components/ProjectCard'
import {Card} from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'

const Home = () => {

  const [allHomeProjects, setAllHomeProjects]= useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getAllHomeProjects()
  },[])

  const getAllHomeProjects = async ()=>{
    try{
      const result = await getHomeProjectAPI()
      if(result.status==200){
        setAllHomeProjects(result.data)
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const handleProjects =()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else(
      alert("Please Login")
    )
  }


  return (
    <>

    <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center rounded shadow w-100">

      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1 style={{fontSize:"80px"}}><i  class="fa-brands fa-docker me-3"></i>Project Fair</h1>
            <p style={{textAlign:'justify'}}>One Stop foor all Software Development Projects. Where user can add manage their pojects. <br /> As well as access all projects available in our website... What are you waiting for!!!</p>
            {
              sessionStorage.getItem("token")?

              <Link to={'/dashboard'} className='btn btn-warning mt-3'>MANAGE YOUR PROJECTS</Link>

              :

              <Link to={'/login'} className='btn btn-warning mt-3'>STARTS TO EXPLORE</Link>
            }
          </div>

          <div className="col-lg-6">

            <img src={landingIMG} width={'700px'} className='img-fluid' alt="" />

          </div>

        </div>
      </div>
    </div>

    <div className="mt-5 text-center">
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
        {
          allHomeProjects?.map(project=>(
            <div className="me-5">
            <ProjectCard displayData={project} />
          </div>
          ))
        }
        </div>
      </marquee>

      <button onClick={handleProjects} className="btn btn-link mt-5">Click here to view more projects...</button>
    </div>

    <div className="d-flex justify-content-center align-items-center flex-column mt-5">

      <h1>Our Testimonials</h1>

      <div className="d-flex justify-content-evenly align-items-center mt-5">

      <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title  className='d-flex justify-content-center align-items-center flex-column'><img width={'70px'} height={'70px'} src="https://cdn-icons-png.flaticon.com/512/219/219970.png" alt="" /> Max Miller </Card.Title>
        <Card.Text>

        <div className="d-flex justify-content-center mb-1">

          <i className="fa-solid fa-star text-warning "></i>
          <i className="fa-solid fa-star text-warning "></i>
          <i className="fa-solid fa-star text-warning "></i>
          <i className="fa-solid fa-star text-warning "></i>

        </div>

        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque unde neque sint, officia corrupti perferendis odio amet ab tempora? Quidem, similique?</p>
       
        </Card.Text>

      
      </Card.Body>
    </Card>

      </div>
    </div>
    
    </>
  )
}

export default Home