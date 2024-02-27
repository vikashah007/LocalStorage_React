import React, { useState } from 'react'
import data from './Data'
const Filedata = (props) => {
    const state={
         "fullname":localStorage.getItem('fullname'),
         "lastuploadedtime":localStorage.getItem('lastuploadedtime'),
         "email":localStorage.getItem('email'),
         "collegeshortname":localStorage.getItem('collegeshortname'),
         "collegecode":localStorage.getItem('collegecode'),
         "usertype"	:localStorage.getItem('usertype'),
         "token"	:localStorage.getItem('token'),
         "data":localStorage.getItem("data"),
   }
  //  const [age,setage]= useState([])
  //  const add=(fullname,lastuploadedtime,email,collegeshortname,collegecode,usertype,toke,data)=>{
  //      setage({"fullname":fullname,"lastuploadedtime":lastuploadedtime,"email":email,"collegeshortname":collegeshortname,"collegecode":collegecode,"usertype":usertype,"toke":toke,"data":data}) 
  //      console.log(age)
  //  }
  return (
    <data.Provider value={state }>
    {props.children}
    </data.Provider>
  )
}

export default Filedata
