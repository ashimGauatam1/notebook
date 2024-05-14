import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
const About = () => {
    // const [data,Setdata]=useState([])
    // const fetchuser=async()=>{
    //   const response=await axios.get("http://localhost:8080/api/note/fetchuser");
    //   // const responser=await response.json();
    //   console.log(response);
    //   if(response.status===200)
    //   {
    //     Setdata(response.data)
    //   }
    //   else{
    //     alert("something went wrong")
    //   }
    // }
    // useEffect(()=>{
    //   fetchuser();
    // })
  return (
    <>
    <Navbar/>
      <h1>This is About Page</h1>
    </>
  );
}

export default About;
