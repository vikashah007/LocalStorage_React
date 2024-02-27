import React from 'react'
import data from './store/Data';
import { useContext } from 'react';
const Check = () => {
    const a=useContext(data)
   console.log(a)
  return (
    <div>
      <p>{a.fullname}</p>
      <p>{a.lastuploadedtime}</p>
      <p>{a.email}</p>
      <p>{a.collegeshortname}</p>
      <p>{a.collegecode}</p>
      <p>{a.usertype}</p>
      <p>{a.token}</p>
      <p>{a.data}</p>
      
    </div>
  )
}

export default Check
