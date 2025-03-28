import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectAPI } from '../services/allAPI'

const Projects = () => {

  const [searchKey, setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])

  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])



  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader = {

        "Authorization": `Bearer ${token}`
      }

      try{
        const result = await allProjectAPI(searchKey, reqHeader)
        if(result.status==200){
          setAllProjects(result.data)
        }
      }catch(err){
        console.log(err);
        
      }
    }
  }
  
  return (
    <>

    <Header/>

    <div className="container-fluid" style={{paddingTop:'100px'}}>

      <div className="d-flex justify-content-between">
        <h1>All Projects</h1>

        <input type="text" onChange={e=>setSearchKey(e.target.value)} placeholder='Search Projects by their Languages'  className='form-control w-25'/>
      </div>

      <Row className='mt-3'>

       {
        allProjects?.length>0?
        allProjects?.map(project=>(
          <Col className='mb-3' sm={12} md={6} lg={3} >

          <ProjectCard displayData={project}/>
          
          </Col>
        ))
        :
        <div className="text-danger">No Projects uploaded</div>
       }
   

      </Row>
    </div>



    </>
    
  
  )
}

export default Projects