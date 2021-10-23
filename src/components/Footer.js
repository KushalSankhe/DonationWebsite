import React from 'react'; 
import './Static/css/footer.css';
import so1 from '../components/Static/img/twitter.png';
import so2 from '../components/Static/img/facebook.png';
import so3 from '../components/Static/img/instagram.png';

function Footer() {
    return (
        <>
        <div>
        <footer id="footer" className="footer-1">
  <div className="main-footer widgets-dark typo-light">
  <div className="container">
  <div className="row">
    
  <div className="col-xs-12 col-sm-6 col-md-3">
  <div className="widget subscribe no-box">
  <h5 className="widget-title">Orgainization Name<span></span></h5>
  <p>Share At Door Step  </p>
  </div>
  </div>
  
  <div className="col-xs-12 col-sm-6 col-md-3">
  <div className="widget no-box">
  <h5 className="widget-title">Quick Links<span></span></h5>
  <ul className="thumbnail-widget">
  <li>
  <div className="thumb-content"><a href="/peoplebd">people_behind_this</a></div>	
  </li>
  <li>
  <div className="thumb-content"><a href="/howwework">how_we_work</a></div>	
  </li>
  <li>
  <div className="thumb-content"><a href="/whatweoffer">what_we_offer</a></div>	
  </li>
  <li>
  <div className="thumb-content"><a href="/booknow">Book Now</a></div>	
  </li>
  </ul>
  </div>
  </div>
  
  <div className="col-xs-12 col-sm-6 col-md-3">
  <div className="widget no-box">
  <h5 className="widget-title">Get Started<span></span></h5>
  <p></p>
  <a className="btn" href="/booknow" >Book Now</a>
  </div>
  </div>
  
  <div className="col-xs-12 col-sm-6 col-md-3">
  
  <div className="widget no-box">
  <h5 className="widget-title">Contact Us<span></span></h5>
  
  <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
  <ul className="social-footer2">
  <li className=""><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook"><img alt="Facebook" style={{width:"30", height:"30"}} src={so2}/></a></li>
  <li className=""><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><img alt="Twitter" style={{width:"30", height:"30"}} src={so1}/></a></li>
  <li className=""><a title="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><img alt="instagram" style={{width:"30", height:"30"}} src={so3}/></a></li>
  </ul>
  </div>
  </div>
  
  </div>
  </div>
  </div>
    
  <div className="footer-copyright">
  <div className="container">
  <div className="row">
  <div className="col-md-12 text-center">
  <p>Copyright Company Name © 2021. All rights reserved.</p>
  </div>
  </div>
  </div>
  </div>
  </footer>
        </div>
        </>
    )
}

export default Footer
