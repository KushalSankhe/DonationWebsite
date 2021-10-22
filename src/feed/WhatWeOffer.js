import React from 'react'
import DonationInfo from '../components/DonationInfo'

function WhatWeOffer() {
    return (
        <>
        <div>
        <div className="container">
        <h3 className="text-center my-4"style={{color: "#70604f"}}>
     What we Offer</h3>

  <p className="my-4">Share At Door Step believes that we all have that inner voice inside our head that makes us terrible each time we throw off or abandon something that we don’t use anymore but that can be used to someone in need. Be it a dress that doesn’t fit you anymore, childhood story books or some old fashioned furniture, we make sure that we deliver them to a place where they can be given a new life.</p>

  <p className="my-4">
    Have you ever asked yourself: Which are the organizations where I can give away my old household items? Where can I donate clothes and furniture? Can someone pick up the donations from my home/office? Can I know the requirements of the NGOs near me and fulfill them on my birthday?</p>

    <p >  You have questions and Share At Door Step has the answers! Just surf around our website and you will learn everything you need to know to make a donation. Whenever you are ready, we will even help you schedule a donation pick-up.</p>

    </div>
        </div>
        <DonationInfo/>
        </>
    )
}

export default WhatWeOffer
