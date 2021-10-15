import React from 'react'
import how1 from './Static/img/how1.png'
import how2 from './Static/img/how2.png'
import how3 from './Static/img/how3.png'

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
       </div>
        </>
    )
}

export default DonationInfo
