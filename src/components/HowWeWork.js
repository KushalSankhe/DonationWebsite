import React from 'react'
import img1 from './Static/img/how we work.png'

function HowWeWork() {
    return (
        <>
        <div>
        <div className="container">
          <h3 className="text-center my-4" style={{color: "#70604f"}}>
        How We work</h3>

    <p className="my-4">Share At Door Step makes it super easy for you to make non-cash donations. Don’t we all have a lot of clothes, books, and other household goods just lying at some corner and getting dusted. It’s time to give them a new life by donating them to those who in need and bring smiles on their faces!! Just schedule a pickup and get the donations picked up from your doorstep. Now Spreading Happiness is just a click</p>

            <h6 className="my-3 text-center">How to Schedule a pickup?</h6>
            <ol className="list-group-numbered text-center">
                <li className="mx-4 text-center">Go to our Home page and enter your location.</li>
                <li className="mx-4 text-center">Choose the option that you want to avail- Doorstep pickup (to avail a pickup) or Drop off (in case you want to drop off the items yourself).</li>
                <li className="mx-4 text-center">Select a convenient slot, fill in your details, and schedule a pickup.
                    A convenience fee is charged for each pickup.</li>
                
            </ol>
            <h3 className="text-center my-4" style={{color: "#70604f"}}>
                Happiness Flow</h3>
                <div className="text-center img-fluid.">
                    <img src={img1} className="rounded" alt="..." style={{width: "1000px;"}} />
                  </div>



      </div>
        </div>
        </>
    )
}

export default HowWeWork;
