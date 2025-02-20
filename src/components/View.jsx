import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import EditCard from '../components/EditCard'
import { removeProjectAPI, userProjectAPI } from '../services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../contexts/ContextAPI'


const View = () => {

  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)
  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)

  const [userProjects, setUserProjects] = useState([]) 
  const [deleteProjectResponse, setDeleteProjectResponse] = useState("")

  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse, editProjectResponse, deleteProjectResponse])





  const getUserProjects = async ()=>{

    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {

        "Authorization": `Bearer ${token}`
      }

      try{
        const result = await userProjectAPI(reqHeader)
        console.log(result)
        if(result.status==200)
          setUserProjects(result.data)

        
      }catch(err){
        console.log(err)
        
      }
    }
  }


  const deleteProject = async (id)=>{
    const token = sessionStorage.getItem("token")

    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try{
        const result = await removeProjectAPI(id, reqHeader)
        if(result.status == 200){
          setDeleteProjectResponse(result.data)
        }
      }catch(err){
        console.log("removeProjectAPI error", err);
        
      }

    }
  }
  return (
    <>

    <div className="d-flex justify-content-between">
      <h2 className="text-earning">All Projects...</h2>

      <div> <Add/> </div>
    </div>
    <div className="allProjects mt-2">
     {
      userProjects?.length>0?
      userProjects?.map(project=>(
        <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mb-3">

        <h3>{project?.title}</h3>

        <div className="d-flex align-items-center">
          <div> <EditCard project={project}/> </div>

          <div className="btn">
            <a href={project?.github} target='_blank'> <i className='fa-brands fa-github'></i></a>
          </div>

          <button onClick={()=>deleteProject(project?._id)} className="btn text-danger"><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
      ))
      :
      <div className="text-warning fw-bolder">No projects uploaded</div>
     }
    </div>
    </>
  )
}

export default View

