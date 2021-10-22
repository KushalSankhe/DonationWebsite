import React from 'react'
import DonationInfo from '../components/DonationInfo'

import s1 from '../components/Static/img/slide1.jpg'
import s2 from '../components/Static/img/slide2.jpg'
import s3 from '../components/Static/img/slide3.jpg'
import how1 from '../components/Static/img/how1.png'
import how2 from '../components/Static/img/how2.png'
import how3 from '../components/Static/img/how3.png'





function index() {
    return (
        <>
        <div>
<div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={s1}
            height="500px"
            width="1200px"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={s2}
            height="500px"
            width="1200px"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={s3}
            height="500px"
            width="1200px"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

       <div>
            <div className="container my-4">
      <div className="text-center">
        <span
          style={{
            paddingBottom: '10px',
            borderBottom: '4px solid #f15622',
            lineHeight: '10px',
            fontSize: '30px',
          }}
        >
          HOW WE WORK
        </span>
      </div>
      <div className="d-flex">
        <div className="my-4">
          <img
            style={{marginLeft: "35px"}}
            className="img-fluid"
            src={how1}
            alt=""
          />
          <h4 style={{textAlign: 'center', color: '#f15622'}}>Schedule a Pickup</h4>
          <p style={{fontSize: '13px', marginLeft: '20px'}}>
Enter the pickup location, and schedule a pickup.
           *convenience fee applicable.
You can also choose to go for the drop off option in 
    case you want to drop the donations yourself.</p>
        </div>
        <div className="my-4">
          <img
            style={{marginLeft: '35px'}}
            className="img-fluid"
            src={how2}
            alt=""
          />
          <h4 style={{textAlign: 'center', color: '#f15622'}}>
            Donate at your Doorstep
          </h4>
          <p style={{fontSize: '13px', marginLeft: '20px'}}>
 We will come to your doorstep to pick up the
donations in the chosen slot and deliver them to
 the NGO where they can be given a new life.</p>
        </div>

        <div className="my-4">
          <img
            style={{marginLeft: '40px'}}
            className="img-fluid"
            src={how3}
            alt=""
          />
          <h4 style={{textAlign: 'center', color: '#f15622'}}>Get Rewards</h4>
          <p style={{fontSize: '13px', marginLeft: '20px'}}>
Enter the pickup location, and schedule a pickup.
         *convenience fee applicable.
You can also choose to go for the drop off option in 
  case you want to drop the donations yourself.</p>
        </div>
      </div>
    </div>

        </div>
        <DonationInfo/>
        </div>
    
        </>
    )
}

export default index
