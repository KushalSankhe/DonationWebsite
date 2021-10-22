import React from 'react'
import d1 from './Static/img/d1.png'
import d2 from './Static/img/d2.png'
import d3 from './Static/img/d3.png'
import d4 from './Static/img/d4.png'
import d5 from './Static/img/d5.png'


import w1 from './Static/img/w1.png'
import w2 from './Static/img/w2.png'
import w3 from './Static/img/w3.png'
import w4 from './Static/img/w4.png'
import w5 from './Static/img/w5.png'
import w6 from './Static/img/w6.png'

function DonationInfo() {
    return (
        <>

    <div style={{backgroundColor: '#f6f6f7', height: 'max-content', width: '100%'}}>
      <div className="text-center">
        <span
          style={{
            paddingBottom: '10px',
            borderBottom: '4px solid #f15622',
            fontSize: '30px',
            marginTop: '20px',
            paddingTop: '20px',}}
        >
          Donate Almost Anything</span>
      </div>
      <div className="container d-flex my-4">
        <div className="my-4 text-center" style={{width: "100%"}}>
          <img src={d1} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Shoes
          </h6>
        </div>
        <div className="my-4 text-center" style={{width: "100%"}}>
          <img src={d2} alt="" />
          <h6
            className="my-3"
             style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Stationary
          </h6>
        </div>
        <div className="my-4 text-center" style={{width: "100%"}}>
          <img src={d3} alt="" />
          <h6
            className="my-3"
             style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Bags
          </h6>
        </div>
      </div>
      <div className="container d-flex my-4">
        <div className="my-4 text-center" style={{width: '100%', marginLeft: '208px'}}>
          <img src={d4} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Clothes
          </h6>
        </div>
        <div className="my-4 text-center" style={{width: '100%', marginRight: '192px'}}>
          <img src={d5} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Furniture
          </h6>
        </div>
      </div>
    </div>

    <div style={{height: 'max-content', width: '100%'}}>
      <div className="text-center">
        <span
          style=
            {{paddingBottom: '10px',
            borderBottom: '4px solid #f15622',
            fontSize: '30px',
            marginTop: '20px',
            paddingTop: '20px',}}
          
        >
          WHY DONATE THROUGH SADS</span
        >
      </div>
      <div className="container d-flex " style={{marginBottom: '-20px', marginTop: '20px'}}>
        <div className="my-4 text-center" style={{width: "100%"}}>
          <img src={w1} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Super Convenient
          </h6>
          <p>
            Donate reusable items from the convenience of your house. Avail
            doorstep pickup and get your donations delivered to the ones in
            need.
          </p>
        </div>
        <div className="my-4 text-center" style={{width: '100%', margin: '0 20px'}}>
          <img src={w2} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Feel Good Factor
          </h6>
          <p>
            Giving gives you pleasure and makes you happier bringing a positive
            and uplifting effect on you.
          </p>
        </div>
        <div className="my-4 text-center" style={{width: '100%', margin: '0 20px'}}>
          <img src={w3} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Your Donations are Valued
          </h6>
          <p>
            We make sure your donations reach someone who really requires them
            by delivering them to the beneficiaries directly.
          </p>
        </div>
      </div>
      <div className="container d-flex ">
        <div className="my-4 text-center" style={{width: '100%', margin: '0 20px'}}>
          <img src={w4} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Transparent Process
          </h6>
          <p>
            Your donations reaches the beneficiaries as it is through our
            verified trusted partner NGOs audited on regular basis.
          </p>
        </div>
        <div className="my-4 text-center" style={{width: '100%', margin: '0 20px'}}>
          <img src={w5} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Get Surprise Rewards
          </h6>
          <p>
            We surprise you time to time by sending you our exclusive “happiness
            box” containing surprise goodies and vouchers for you.
          </p>
        </div>
        <div className="my-4 text-center" style={{width: '100%', margin: '0 20px'}}>
          <img src={w6} alt="" />
          <h6
            className="my-3"
            style={{fontSize: '20px', textAlign: 'center', color: '#f15622'}}
          >
            Save the Environment
          </h6>
          <p>
            Keep your unwanted belongings out of landfill by giving them a new
            life and getting them in hands of someone who really requires them.
          </p>
        </div>
      </div>
    </div>

        </>
    )
}

export default DonationInfo
