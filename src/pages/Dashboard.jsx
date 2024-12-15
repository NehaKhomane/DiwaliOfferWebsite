import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './Dashboard.css'

export default function Dashboard(){
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user')===null){
            navigate('/login')
        }
    },[])
    return(
        <>
        <h1><i>DASHBOARD</i></h1>
        <div className='test-container1'>
      <div className='service1'>
      <div className='servicebox1'>
      <div className='icon1'>
      <div className='content1'>
      <i class="fa-solid fa-face-smile-beam"></i>
        <h4>Satisfied Customer</h4>
         <h1>55K +</h1>
        
      </div>
      </div>
      
      </div>
      <div className='servicebox1'>
      <div className='icon1'>
      <div className='content1'>
      <i class="fa-solid fa-heart"></i>
        <h4>Over All branches</h4>
        <h1>987 </h1>
        
      </div>
      </div>
      
      </div>
      <div className='servicebox1'>
      <div className='icon1'>
      <div className='content1'>
      <i class="fa-solid fa-shirt"></i>
        <h4>Latest Collection </h4>
        <h1>50K +</h1>
        
      </div>
      </div>
      </div>
      <div className='servicebox1'>
      <div className='icon1'>
      <div className='content1'>
      <i class="fa-solid fa-signs-post"></i>
        <h4>Diwali Offer</h4>
        <h1>1K + </h1>
        
      </div>
      </div>
      
      
      </div>
     
      </div>
      </div>
    
    
        </>
    )
}