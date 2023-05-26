import React from 'react';
import './left.css';
import ProfileInclude from "../profileimage/profileimage.component";
import {RxEnvelopeClosed} from "react-icons/rx";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {FcDislike,FcHome,FcLike} from "react-icons/fc";

export const Leftsidebar = () => {
  return (
    <div className='dashboard-left'>
      <div className='bg-primary rounded-top p-5'></div>
        <ProfileInclude/>
      <div className='text-center p-3'>
        <RxEnvelopeClosed/>
        <AiOutlineCloseCircle/>
        <FcDislike/>
        <FcHome/>
        <FcLike/>
      </div>
    </div>
  )
}
