import React from 'react'
import Link from "next/link";
import page from "../../../../pages/orffosoft/screens/login/login.module.css";


const Login = () => { 

  const[userErr, setuserErr]=useState() 
  const[passErr, setpassErr]=useState() 
        
 
     function loginHandler (e) {  
       alert('sucessfully')    
    }

    //====================================userId=====================================

     function userHandler (e) {
      let item= e.target.value
      
      if (item.length<3) { 
        setuserErr(true)    
      } 
      else {    
        setuserErr(false)      
      }
      
       }
  
    //====================================password======================================

    function passwordHandler (e) {
      let item= e.target.value
    
      if (item.length<6) {   
        setpassErr(true)    
      } 
      else {
        setpassErr(false)   
      } 
    
     }   


  return (
    <div>
      <h3>pages/orffosoft/screens/login/register.jsx</h3> 
    
      <style>{'body { background-color: #3366ff }'}</style>   

<p>pages/index.js</p> 
<br></br>
<h2>Online Billing ERP</h2> 


 <form onSubmit={loginHandler}>   
  {/* <!-- Email input --> */}    
  <div class="form-outline mb-4">        
    <input type="text" placeholder="User Id" onChange={userHandler} />
     
   {
    userErr? <p style={{color: 'yellow'}}>please enter 3 disit UserId</p>: ''
   }
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">       
    <input type="password" placeholder="Password" onChange={passwordHandler} />
      
 {
  passErr? <p style={{color: 'yellow'}}>please enter 6 disit password</p>: ''
 }
  </div> 

{/* <!-- 2 column grid layout for inline styling --> */}

  <Button variant="warning">
  <Link href="orffosoft/screens/dashboard">Signin</Link>
  </Button> 

  <div class="row mb-4"> 
     <div>
        <input type="checkbox" />
        <label> Remember me </label> 
      </div>
      </div>

  
  <Button variant="info"> 
  <Link href="orffosoft/screens/login/register">New user?</Link> 
   </Button>   

  </form>  



    </div>
  )
}

export default Login; 
