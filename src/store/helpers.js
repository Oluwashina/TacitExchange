import axios from 'axios'
import {apiUrl} from './config'
import {store} from '../index'


// post request funcionality
export const PostApi = async (url, payload, token, contentType) => {
    try {
    const data  = await axios.post(apiUrl + `${url}`, payload, {
        headers: {
            Accept: 'application/json',
            Authorization: token,
            contentType: contentType
          }
    });
    return {
        status:  data.status,
        data: data.data
    }
          
    }catch(e){
    // check status code here and redirect to login if 401
      var status = e.response.status
      if(status === 401){
          store.dispatch({type: "logout"})
          return {
            status: status, 
            data: e.response.data
        }
      }
      else{
        return {
            status: status, 
            data: e.response.data
        } 
      }    
   }
};


// get request functionality
export const GetApi = async (url,token) => {
    try {
    const data  = await axios.get(apiUrl + `${url}`, {
        headers: {
            Accept: 'application/json',
            Authorization: token,
          }
    });
    return {
        status:  data.status,
        data: data.data
    }
          
    }catch(e){
    // check status code here and redirect to login if 401
      var status = e.response.status
        if(status === 401){
            store.dispatch({type: "logout"})
            return {
            status: status, 
            data: e.response.data
        }
        }
        else{
        return {
            status: status, 
            data: e.response.data
         } 
        }
      }   
};


// put request  functionality
export const PutApi = async (url, payload, token,) => {
  try {
  const data  = await axios.put(apiUrl + `${url}`, payload, {
      headers: {
          Accept: 'application/json',
          Authorization: token,
        }
  });
  return {
      status:  data.status,
      data: data.data
  }
        
  }catch(e){
  // check status code here and redirect to login if 401
    var status = e.response.status
    if(status === 401){
        store.dispatch({type: "logout"})
        return {
          status: status, 
          data: e.response.data
      }
    }
    else{
      return {
          status: status, 
          data: e.response.data
      } 
    }    
 }
};


// delete request functionality
export const DeleteApi = async (url,token) => {
  try {
  const data  = await axios.delete(apiUrl + `${url}`, {
      headers: {
          Accept: 'application/json',
          Authorization: token,
        }
  });
  return {
      status:  data.status,
      data: data.data
  }
        
  }catch(e){
  // check status code here and redirect to login if 401
    var status = e.response.status
      if(status === 401){
          store.dispatch({type: "logout"})
          return {
          status: status, 
          data: e.response.data
      }
      }
      else{
      return {
          status: status, 
          data: e.response.data
       } 
      }
    }   
};