import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

// registerAPI called by auth component

//registerAPI called by auth component when register button is clicked

export const registerAPI = async (reBody) =>{
return await commonAPI("POST", `${SERVER_URL}/register`, reBody)
}


//loginAPI called by auth component when login button is clicked

export const loginAPI = async (reBody) =>{
return await commonAPI("POST", `${SERVER_URL}/login`, reBody)
}

// add projectapi called by add component when user clicked on add-project button

export const addProjectAPI = async (reBody, reqHeader) =>{
return await commonAPI("POST", `${SERVER_URL}/add-project`, reBody,reqHeader)
}


// getHomeProjectAPI called by home component loaded in browser
export const getHomeProjectAPI = async () =>{
return await commonAPI("GET", `${SERVER_URL}/home-project`, {})
}

// allProjectAPI called by home component loaded in browser
export const allProjectAPI = async (searchKey, reqHeader) =>{
return await commonAPI("GET", `${SERVER_URL}/all-project?search=${searchKey}`, {}, reqHeader)
   }

// userProjectAPI called by view component loaded in browser
export const userProjectAPI = async (reqHeader) =>{
return await commonAPI("GET", `${SERVER_URL}/user-project`, {}, reqHeader)
            }


// updateProjectAPI called by edit component when user clicks on edit button

export const updateProjectAPI = async (id,reBody,reqHeader) =>{
return await commonAPI("PUT", `${SERVER_URL}/projects/${id}/edit`,reBody, reqHeader)
}


// removeProjectAPI called when user clicks delete button in view component

export const removeProjectAPI = async (id,reqHeader) =>{
return await commonAPI("DELETE", `${SERVER_URL}/projects/${id}/remove`,{}, reqHeader)
}


export const updateUserAPI = async (reqBody, reqHeader) =>{
return await commonAPI("PUT", `${SERVER_URL}/edit-user`,reqBody, reqHeader)
}