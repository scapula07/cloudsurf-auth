import { useState,useEffect } from 'react'
import { api } from '../_api'
import {Link} from "react-router-dom"


export default function Index() {
    const [url1,setUrl1]=useState("")
    const [url2,setUrl2]=useState("")
  useEffect(()=>{
      const getAuth=async()=>{
       const res= await api.getGoogleAuth()
       const res1= await api.getdropBoxAuth()
       console.log(res1,"rr")
       setUrl1(res.data.url)
       setUrl2(res1.data.url)
      }
      getAuth()
  })

  console.log(url2)


  return (
    <div className='h-screen overflow-y-hidden'>
        <div className='flex py-4 px-8 w-full '>
            <h5 className='text-xl font-semibold text-purple-700'>Cloud surf  </h5>
        </div>

        <div className='flex py-4 px-8 items-center justify-center w-full h-full'>
               <div className='w-1/2 h-56 border flex flex-col items-center  py-6 rounded-lg space-y-6'>
                     <h5 className='text-lg font-semibold text-slate-700'>Sign in with</h5>

                     <div className='flex flex-col space-y-4'>
                         <a href={url1}>
                            <button className='border py-2 px-10 rounded-full text-sm font-semibold'>Google </button>
                         </a>
                         <a href={url2}>
                            <button className='border py-2 px-10 rounded-full text-sm font-semibold'> Dropbox</button>
                         </a>
                     </div>
                </div>
            
        </div>
        
      

    </div>
  )
}
