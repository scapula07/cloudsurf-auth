import axios from "axios";


export const api= {
    getGoogleAuth: async function () {
        
        const url=`http://localhost:3002/grant-access`

      const config = {
        headers:{
            'Content-Type': 'application/json',
           },
           };
      
      try{
     
        const response= await axios.get(
          url,
          config
        )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },

     getGoogleToken: async function () {
        
        const url=`http://localhost:3002/get-google-token`

      const config = {
        headers:{
            'Content-Type': 'application/json',
           },
           };
      
      try{
     
        const response= await axios.get(
            url,
            config
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },
     getdropBoxAuth: async function () {
        
        const url=`http://localhost:3002/grant-dropbox-access`

      const config = {
        headers:{
            'Content-Type': 'application/json',
           },
           };
      
      try{
     
        const response= await axios.get(
          url,
          config
        )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },

     getDropBoxToken: async function () {
        
        const url=`http://localhost:3002/get-dropbox-token`

      const config = {
        headers:{
            'Content-Type': 'application/json',
           },
           };
      
      try{
     
        const response= await axios.get(
            url,
            config
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },
  }
   
  