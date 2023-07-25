import React,{useState,useEffect} from 'react'
import { api } from '../_api'
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom"

export default function DropBoxRedirect() {
    const [token,setToken]=useState()
    const [code,setCode]=useState()
    useEffect(()=>{
       
        const getToken=async()=>{
            // const urlParams = new URLSearchParams(window.location.search);
            // const code = urlParams.get('code');
            // console.log(typeof(code),"ccc")
            // const strippedCode= code.replace(/"/g, '');
            // console.log(strippedCode)

            const res= await api.getDropBoxToken()
            console.log(res,"ttt")
   
            setToken(res.data.jsonData)
            toast("Add cloud surf to chrome")
        }
        getToken()

    

    },[])

    var extensionId = "djlioeojdhnojicpfibpofkanhpemdji";

    // Make a simple request:
   
    const open=()=>{
        console.log("sending")
        chrome.runtime?.sendMessage(extensionId,{type:"dropbox",token:token
           },
            function(response) {
                console.log(response,"response")
           
                if (!response.success)
                handleError("chrome-extension://ojpgefcpiicakbipcjegbinbccionhkd/src/pay.html");
        });
    }
  return (
    <div className='h-screen overflow-y-hidden'>
            <div className='flex py-4 px-8 w-full '>
                <h5 className='text-xl font-semibold text-purple-700'>Cloud surf  </h5>
            </div>


        <div className='flex flex-col justify-center space-y-6 py-4 px-8 items-center justify-center w-full h-full'>
              <h5 className='text-lg '>You are logged in</h5>

              <h5 className='text-purple-700 hover:underline text-lg' onClick={open}>Click to open extension</h5>
             
        
        </div>

        <Toaster />
       
    </div>
  )
}
