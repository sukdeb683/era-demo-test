import React from "react";
import './header.css';
import {logo} from "../images/image.component";
import ProfileInclude from '../profileimage/profileimage.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAppleAlt,faAppleWhole,faArrowDown, faUser, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Header = () =>{

    return(
        
        <header className="px-4 py-2 shadow">
            <div className="align-items-center row">
                <div className="col-md-3">
                <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="col-md-6">
                    <div className="border border-primary p-2 rounded">
                        <span className="border-right border-secondary pr-3">Select Subject</span>
                        <select className="border-0 ml-3 text-primary w-75">
                            <option>Applied mechanics for engineering technology</option>
                        </select>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    <div className="text-right">
                        <span className="mr-3 align-middle">
                            <span className="message"></span>
                            <span className="count align-items-center align-top count d-inline-flex justify-content-center">5</span>
                        </span>
                        <span className="align-middle mr-3">
                            <span className="notification"></span>
                            <span className="count align-items-center align-top count d-inline-flex justify-content-center">4</span>
                        </span>
                        <span className="profile_img dropdown">
                        
                            <span className="mr-2">Harzy</span>
                            <span type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <ProfileInclude/>
                            </span>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faUser} /><span className="ml-2">User Profile</span></a>
                              <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faLock} /><span className="ml-2">Password</span></a>
                              <a className="dropdown-item" href="#"><FontAwesomeIcon icon={faArrowRight} /><span className="ml-2">Logout</span></a>
                            </div>
                          
                        </span>
                        {/* <FontAwesomeIcon icon={faAppleAlt} />
                        <FontAwesomeIcon icon={faAppleWhole} />
                        <FontAwesomeIcon icon={faArrowDown} />
                        
                        <FontAwesomeIcon icon={faCoffee} /> */}
                    </div>
                </div>
            </div>
        </header>
       
    );
};

export default Header;