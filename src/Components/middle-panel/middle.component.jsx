import React from 'react';
import {useState} from 'react';
export const Middlesection = (props) => {


  const [name,setName] = useState("suman");
  const [age,setAge] = useState(0);
  const changeText =()=>{
    setName ('Your name clicked');
    setAge(age+1);
  }
  const decriment=()=>{
    if(age>0){
      setAge(age-1);
    }
    
  }
  function apple(db){
    const list = []

  for (const [i, product] of db.entries()) {
    list.push(<p>{product.apple}</p>)
    
  }
  return list;
  }
  
  return (
    <div>
      <div>{props.text}</div>
      <div className='my-3'>{age}</div>
      <div className='mb-3'>{name}</div>
      <div className='mb-3'>{apple(props.apple)}</div>
      

      <button className='btn btn-sm btn-primary' onClick={changeText}>Click</button><br/><br></br>
      <button className='btn btn-sm btn-primary' onClick={decriment}>decriment</button>
    </div>
  )
}
