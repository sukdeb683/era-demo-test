import React from "react";

import {profileimage} from '../images/image.component';

const ProfileInclude = () =>{

    return(
        <>
        <span className="img">
            <img className="border border-success rounded-pill" src={profileimage} alt="pro-img"/>
        </span>
        </>
    );
};

export default ProfileInclude;