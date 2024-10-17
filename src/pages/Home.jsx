import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import "./custom.scss"


import teamImage from "../assets/images/teamimage.png"
import wave1 from "../assets/images/wave1.svg"
import wave2 from "../assets/images/wave2.svg"

import PrimaryBtn from "../components/PrimaryBtn"


function Home() {
  return (
    <div className='Home'>
       <div className="banner "> 
        <img src={wave1} className='wave1 img-fluid' alt="" />
        <img src={wave2} className='wave2 img-fluid' alt="" />
         <div className="row container"> 
           <div className="col-md-6 d-flex flex-column justify-content-center p-0 py-4 pe-md-5"> 
              <p style={{color: "#64B2E1"}}>- Welcome to Tech Quill IT Solutions</p>
              <h1> Bridging The Gap Between Business & Technology </h1>
              <p> Providing Next Generation EdTech Software/Services to meet the A to Z requirements of the entire learning community, starting from Pre-school to professionals. </p>
               <div className="d-flex"> 
                  <div> 
                      <Link to="/projects">
                        <PrimaryBtn       
                          text="Discover More " 
                          />
                      </Link>
                  </div>
                  <div className='d-flex align-items-center ps-3'> 
                    <div className='video-play ms-2 me-4'> 
                      <FontAwesomeIcon style={{color:"white"}} icon={faPlay} /> 
                    </div>
                    <Link className='howitworks' to="/contact">How it works</Link>
                  </div>
               </div>
           </div>

           <div className="col-md-6"> 
             <img className='w-100' src={teamImage} alt="" />
           </div>
         </div>
       </div>
    </div>
  )
}

export default Home