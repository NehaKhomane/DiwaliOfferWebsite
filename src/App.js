import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service  from './pages/Sevice';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import {useForm} from 'react-hook-form'



function App() {
  const navigate=useNavigate()
  const onLoginClick=()=>{
    if (localStorage.getItem('user')!= null){
      localStorage.removeItem('user')
      navigate('/login')
    }else{
      navigate('/login')
    }
  }
  let time =new Date().toLocaleTimeString();
const[ctime,setCtime]=useState(time);
const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    setCtime(time);
};
setInterval(UpdateTime,1000)

const Testomonial=()=>{
  return(
    <>
    <div className='test-container'>
      <div className='service'>
      <div className='servicebox'>
      <div className='icon'>
      <div className='content'>
        <h1>moolchand mill pvt ltd - hadapsar</h1>
        <h5>Address: survey no.12, Vitthalnahar, Hadapsar, Pune, Maharashtra 411028</h5>
        <p>We're Here To Help Feel free to reach out to us at +91 7249292271 or customercare@moolchandmill.com . please visit : Moolchand Mill ...</p>
      </div>
      </div>
      
      </div>
      <div className='servicebox'>
      <div className='icon'>
      <div className='content'>
        <h1>Moolchand Mill - Bajirao road</h1>
        <h5>Address:619, Bajirao Rd, next to Vishrambaug Wada, Sadashiv Peth, Pune, Maharashtra 411030</h5>
        <p>Trendy apparel store offering an extensive range of handloom and embroidered sarees.for more information visit :Mulchand Mill..</p>
      </div>
      </div>
      
      </div>
      <div className='servicebox'>
      <div className='icon'>
      <div className='content'>
        <h1>Moolchand Mill - Pimpari-Chinchwad</h1>
        <h5>Address:Survery no. 35, MIDC Rd, beside supreme restaurant, Pimpri-Chinchwad, Maharashtra 411018</h5>
        <p>Moolchand Mill is a trusted and well-known fashion brand spreading happiness and trust for 80 years now.
₹760 to ₹4,395
</p>
      </div>
      </div>
      </div>
      <div className='servicebox'>
      <div className='icon'>
      <div className='content'>
        <h1>Moolchand Sweets - Pune</h1>
        <h5> Address: 257, opposite dagdusheth mandir, Budhwar Peth, Pune, Maharashtra 411002. </h5>
        <p>Shop the latest collections of variety of mithaes. Get ready to enjoy this festive season.For more information visit:Mulchand Sweets</p>
      </div>
      </div>
      
      
      </div>
     
      </div>
      </div>
    
    
    </>
  )
}
const NotFoundComp=()=>{
  const navigate=useNavigate();
  const goHome=()=>{
    navigate('home')
  };
  return(
    <>
    <div className='not-found-container'>
      <h4>404 Page Not Found..? Redirect To.. <button onClick={goHome}>Home</button></h4>
     
    </div>
    </>
  )
}
const Login=()=>{
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  }=useForm()

    useEffect(()=>{
    if(localStorage.getItem('user')!=null){
    navigate('user')
    }},[])//empty dependencies useeffect
    const userArray=[
      {
        username:'neha@gmail.com',
        password:'nk237',
        confirm_password:'nk237',
        fullname:'Neha Khomane'
      },
      {
        username:'Rishika@gmail.com',
        password:'rm237',
        confirm_password:'rm237',
        fullname:'rishika M'
      },
      {
        username:'raj@gmail.com',
        password:'Rp237',
        confirm_password:'Rp237',
        fullname:'Raj patil'
      },
      {
        username:'mansing@gmail.com',
        password:'mk237',
        confirm_password:'mk237',
        fullname:'Mansing Kamble'
      },
      {
        username:'dhanashri@gmail.com',
        password:'db237',
        confirm_password:'db237',
        fullname:'Dhanashri bhosale'
      }
    ]
    const onFormSubmit =(data)=>{
      let status=false
      let i=0
      for(let i=0;i<userArray.length;i++){
        if(userArray[i].username===data.username && userArray[i].password===data.pwd &&  userArray[i].confirm_password===data.pwds){
          status=true;
          break;
        }
      }
      if(status===true){
        localStorage.setItem('user',JSON.stringify(userArray[i]))
        toast.success('Login Successful..!!')
        navigate('user')
      }else{
        toast.error("Invalid username and password !!")
        reset();
      }
    }
    return(
      <>
      <div className='login-container'>
        
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className='title'>
          <h2><i>Login</i></h2>
        </div>
          <div className='input-field'>
            
            <input type='email' placeholder='Username'{...register('username',{
              required:'username is required',
              pattern:{
                value:/^\S+@\S+$/i,
                message:'Invalid username..!!'
              }
            })}></input>
           <span> {errors.username && <p>{errors.username.message}</p>}</span>
          </div>
          <div className='input-field'>
            
            <input type='password' placeholder='password'{...register('pwd',{
              required:'password is required'
            })}></input>
             <span>{errors.pwd && <p>{errors.pwd.message}</p>}</span>
          </div>
          <div className='input-field'>
            
            <input type='password' placeholder=' Confirm Password'{...register('pwds',{
              required:' confirm password is required'
            })}></input>
             <span>{errors.pwds && <p>{errors.pwds.message}</p>}</span>
          </div>
              <button>Login</button>
        </form>
      </div>
      </>
    );
  }



  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    <div className='header'>
      <h4><i class="fa-solid fa-ranking-star"></i> Khushiyonki Diwali..!!</h4>
      <div className='links'>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='service'>Services</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        <NavLink to='branches'>Our Branches</NavLink>

        <button className={
          localStorage.getItem('user')!=null ? 'logout':''
        }onClick={onLoginClick}>
          {
            localStorage.getItem('user')!=null ? 'Logout' :'Login'
          }
          </button>
      </div>
     </div>
     <div className='Boxes'>
   <div className='box'>
    <h3><i>LIMITED TIME OFFER ..HURRY UP..!!</i>    <strong>{ctime}</strong></h3>
   </div>
      </div>
      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/service' Component={Service}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/login' element={Login()}/>
        <Route path='/branches' element={Testomonial()}></Route>
        <Route path='/user' Component={Dashboard}></Route>
        <Route path='*' element={NotFoundComp()}></Route>
        
      </Routes>
    </>
  );
}

export default App;
