import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal} from 'react-bootstrap';
import projectUpload from '../assets/uploadIMG.png'
import SERVER_URL from '../services/serverURL';
import { updateProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../contexts/ContextAPI';


const EditCard = ({project}) => {

  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)

    const [preview, setPreview] = useState("")
  
    const [projectsDetails, setProjectDetails] = useState({
      id:project._id, title:project.title, languages:project.languages, overview: project.overview, github:project.github, website: project.website, projectIMG:""
  
    })
  
    const [imageFileStatus, setImageFileStatus]= useState(false)

    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false)

      setProjectDetails({id:project._id, title:project.title, languages:project.languages, overview: project.overview, github:project.github, website: project.website, projectIMG:""})
  
    };

    const handleShow = () => {setShow(true)
      setProjectDetails({id:project._id, title:project.title, languages:project.languages, overview: project.overview, github:project.github, website: project.website, projectIMG:""})
    };

      useEffect(()=>{
        if(projectsDetails.projectIMG.type == "image/png" || projectsDetails.projectIMG.type == "image/jpg" || projectsDetails.projectIMG.type == "image/jpeg" ){
          setImageFileStatus(true)
          setPreview(URL.createObjectURL(projectsDetails.projectIMG))
        }
        else{
    
          setImageFileStatus(false)
          setPreview("")
          setProjectDetails({...projectsDetails,projectIMG:""})
    
        }
      },[projectsDetails.projectIMG])


      const handleUpdateProject =async ()=>{
      const {id, title, languages, overview, github, website, projectIMG} = projectsDetails
      if( title && languages && overview && github && website){



        const reqBody = new FormData()
        reqBody.append("title", title)
        reqBody.append("languages", languages)
        reqBody.append("overview", overview)
        reqBody.append("github", github)
        reqBody.append("website", website)
      preview?reqBody.append("projectIMG", projectIMG) :  reqBody.append("projectIMG", project.projectIMG)

  
        const token = sessionStorage.getItem("token")

        if(token){
          const reqHeader = {

            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }

          try {

            const result = await updateProjectAPI(id, reqBody, reqHeader)
            if(result.status == 200){
              alert("Project Updated Successfully")
           
              setEditProjectResponse(result)
              handleClose(false)
            }
            
          } catch (error) {
            console.log(error);
            
          }
  
        }

      }else{
        alert("Please fill the form completely")
      }
      }


  return (
    <>

    <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit"></i></button>

     <Modal centered size='lg'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>New Project Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    
              <div className="row align-items-center">
                        <div className="col-lg-4">
                          <label >
                            <input type="file" onChange={e=>setProjectDetails({...projectsDetails, projectIMG:e.target.files[0]})} style={{display:'none'}}/>
                            <img  className='img-fluid' height={'200px'} src={preview ? preview : `${SERVER_URL}/uploads/${project.projectIMG}`} alt="" />
            
                          </label>
                        {
                          !imageFileStatus &&   <div className="text-warning fw-bolder my-2">
                          * Upload only the following file types (jpeg, jpg, png) here !!
                        </div>
                        }
                        </div>
                        <div className="col-lg-8">
            
                          <div className="mb-2">
                            <input value={projectsDetails.title} onChange={e=>setProjectDetails({...projectsDetails, title:e.target.value})}  type="text" placeholder='Project Title' className="form-control" />
                          </div>
            
                          <div className="mb-2">
                            <input value={projectsDetails.languages} onChange={e=>setProjectDetails({...projectsDetails, languages:e.target.value})}  type="text" placeholder='Languages used in Project' className="form-control" />
                          </div>
            
                          <div className="mb-2">
                            <input type="text" value={projectsDetails.overview} onChange={e=>setProjectDetails({...projectsDetails, overview:e.target.value})}  placeholder='Project Overview' className="form-control" />
                          </div>
            
                          <div className="mb-2">
                            <input type="text" value={projectsDetails.github} onChange={e=>setProjectDetails({...projectsDetails, github:e.target.value})}  placeholder='Project Github Link' className="form-control" />
                          </div>
            
                          <div className="mb-2">
                            <input type="text" value={projectsDetails.website} onChange={e=>setProjectDetails({...projectsDetails, website:e.target.value})}  placeholder='Project Website Link' className="form-control" />
                          </div>
                        </div>
                      </div>
             
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleUpdateProject} variant="primary">Update</Button>
            </Modal.Footer>
          </Modal>

    </>
  )
}

export default EditCard