import React from 'react'
import Button from 'react-bootstrap/Button'

import homeStyles from './home.module.css'
import './home.css'

import {
    FaMapMarkerAlt
} from 'react-icons/fa'


const HomePage = () => (
<>
<div className="outer-div">
  <div className="inner-div">
    <div className="front">
      <div className="front__bkg-photo" />
      <div className="front__face-photo" />
      <div className="front__text">
        <h3 className="front__text-header">Spartan Plumbing</h3>
        <p className="front__text-para"><famapmarkeralt>Southern California</famapmarkeralt></p>
        {'{'}/*<span className="front__text-hover">Hover to Find Me</span>*/{'}'}
        <p>Maintenance, Repairs, Installations, Whatever You Need, We Can Get It Done</p>
        <p>
        </p>
      </div>
      <div className="card-footer"><a href="#">Button One</a><span className="divider" /><a href="#">Button Two</a></div>
    </div>
    <div className="back">
      <div className="social-media-wrapper">
        <a href="#" className="social-icon"><i className="fab fa-codepen" aria-hidden="true" /></a> 
        <a href="#" className="social-icon"><i className="fab fa-instagram" aria-hidden="true" /></a>
        <a href="#" className="social-icon"><i className="fab fa-github-square" aria-hidden="true" /></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-square" aria-hidden="true" /></a>
      </div>
    </div>
  </div>
</div>


</>
)

export default HomePage