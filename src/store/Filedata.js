import React, { useEffect, useState } from 'react'
import data from './Data'
const Filedata = (props) => {
  //   const state={
  //        "fullname":localStorage.getItem('fullname'),
  //        "lastuploadedtime":localStorage.getItem('lastuploadedtime'),
  //        "email":localStorage.getItem('email'),
  //        "collegeshortname":localStorage.getItem('collegeshortname'),
  //        "collegecode":localStorage.getItem('collegecode'),
  //        "usertype"	:localStorage.getItem('usertype'),
  //        "token"	:localStorage.getItem('token'),
  //        "data":localStorage.getItem("data"),

  //  }
   const fullname=localStorage.getItem('fullname')
   const lastuploadedtime=localStorage.getItem('lastuploadedtime')
   const email=localStorage.getItem('email')
   const collegeshortname=localStorage.getItem('collegeshortname')
   const collegecode=localStorage.getItem('collegecode')
   const usertype=localStorage.getItem('usertype')
   const token=localStorage.getItem('token')
   const data1=localStorage.getItem('data')
   
   useEffect(() => {
    // Function to delete data from local storage
    const deleteDataFromLocalStorage = () => {
      localStorage.removeItem('usertype');
      localStorage.removeItem('token');
      localStorage.removeItem('data');
      console.log("removed")
    };

    window.addEventListener('beforeunload', deleteDataFromLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', deleteDataFromLocalStorage);
    };
  }, []);
 
  return (
    <data.Provider value={{fullname,lastuploadedtime,email,collegeshortname,collegecode,usertype,token,data1}}>
    {props.children}
    </data.Provider>
  )
}

export default Filedata
