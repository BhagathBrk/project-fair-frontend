import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal} from 'react-bootstrap';
import projectUpload from '../assets/uploadIMG.png'
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../contexts/ContextAPI';




const Add = () => {

  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)

  const [preview, setPreview] = useState("")

  const [projectsDetails, setProjectDetails] = useState({
    title:"", languages:"", overview:"", github:"", website:"", projectIMG:""

  })

  const [imageFileStatus, setImageFileStatus]= useState(false)

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);


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

  const handleClose = () => {
    setShow(false)
    setPreview("")
    setImageFileStatus(false)
    setProjectDetails({title:"", languages:"", overview:"", linkedin:"", github:"", website:"", projectIMG:""})
    
  }

  const handleAddProject = async()=>{
    const { title, languages, overview, github,  website, projectIMG} = projectsDetails

    if(title && languages && website && github && projectIMG && overview){
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectIMG", projectIMG)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {

          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

           //make api call
           try{
            const result = await addProjectAPI(reqBody,reqHeader)
            if(result.status == 200){
              alert("Project saved successfully")
              setAddProjectResponse(result.data)
              handleClose()
            }else{
              alert(result.response.data)
            }
          }catch(err){
            console.log(err);
            
          }
      }
      
    }
    else{
      alert("fill the form completely")
    }
  }


  


  return (
    <>

    <button onClick={handleShow} className="btn btn-primary">+ New Project</button>

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
                <img  className='img-fluid' height={'200px'} src={preview ? preview : projectUpload} alt="" />

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
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add