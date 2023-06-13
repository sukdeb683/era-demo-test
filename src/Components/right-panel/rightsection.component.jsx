import React, { useState, useEffect } from 'react'

export const Rightsection = () => {
  const [data,setData] =useState([]);

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(serverres => serverres.json())
      .then(json => setData(json))
  },[])
  
  return (
    <table className='table table-bordered'>
      <tr>
        <th>Id NO</th>
        <th>Name</th>
        <th>Email</th>
        <th>Content</th>
      </tr>
      {
        data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        )
      }
    </table>
  )
}
