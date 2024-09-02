import Link from "next/link";
import dynamic from "next/dynamic";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"

const Login = dynamic(() => import('../pages/orffosoft/screens/login/login'))

const Index = () => {  
   
  


  return (
    <div>
   
   <Login/> 
      </div>  
  );
};

export default Index;