import React from 'react'
import Button from 'react-bootstrap/Button'

import homeStyles from './home.module.css'
import './home.css'

import {
    FaMapMarkerAlt
} from 'react-icons/fa'


const HomePage = () => (
<>
<div class="outer-div">
  <div class="inner-div">
    <div class="front">
      <div class="front__bkg-photo"></div>
      <div class="front__face-photo"></div>
      <div class="front__text">
        <h3 class="front__text-header">Spartan Plumbing</h3>
        <p class="front__text-para"><FaMapMarkerAlt />Southern California</p>
        
        {/*<span class="front__text-hover">Hover to Find Me</span>*/}
        <p>Maintenance, Repairs, Installations, Whatever You Need, We Can Get It Done</p>
        <p>

        </p>
        
      </div>
      <div class="card-footer"><a href="#">Button One</a><span class="divider"></span><a href="#">Button Two</a></div>
    </div>
    <div class="back">
      <div class="social-media-wrapper">
        <a href="#" class="social-icon"><i class="fab fa-codepen" aria-hidden="true"></i></a> 
        <a href="#" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-github-square" aria-hidden="true"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </div>

  </div>
</div>

</>
)

export default HomePage