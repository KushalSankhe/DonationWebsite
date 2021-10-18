import React from 'react'

function FAQs() {
    return (
        <>
        <div>
        <div className="container my-4">

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          How do I schedule a doorstep pickup for donating my pre-loved goods?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          You can easily schedule a pickup on our website and we will come to your doorstep to collect your donations. Just follow the steps below and sit back!
          <ol className="list-group-numbered ">
              <li className="mx-2">Click on the <a href="/book_now.html" style="color:#f15622; text-decoration: none;">'BOOK NOW'</a> button on this website.</li>
              <li className="mx-2">Put your location and choose from the pickup options available in your area.</li>
              <li className="mx-2">Select a convenient slot, fill in your details, make the payment; and your pickup is scheduled!</li>
            </ol>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        
          Where do my donations go?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         <p>
             The donations go directly to one of our NGO partners. We support 120+ NGOs across 8 cities. Once you raise a request, our NGO mapping algorithm would pick an NGO for your donations depending on various parameters- location, items to be donated, their quantity etc. Then the donations would be picked up by our logistics partner and delivered to the NGO. You would be notified the details of the NGO where your donations went via automated email.
          </p> 

      </div>
  </div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Which slots are available for pickup?
  </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <p>The 2-wheeler pickups are near-instant and are available everyday in most cities. Sunday slots may not be available in a few locations. Typical slot timings for pickups are 10-12PM, 12-2PM and 2-4PM.</p>

    <p>For "Medium to Heavy Pickup", we have pickup slots available every Wednesday in all the cities. Bangalore has Sunday slots available as well. You can give a preference for slots between 8-12 pm and 2pm - 6pm. The final slot would be confirmed to you a day in advance by our logistics partner. Once they are nearby your place on the pickup day, they will contact you to confirm if you want a contact less pickup or pickup from home. During pandemic, we are generally keeping the slots as 12pm-6pm.</p>
  </div>
</div>
</div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Would you provide any packing material for donations?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>If you've selected "Medium to Heavy Pickup" - Yes, you can add the "2 Carton Combo" to your donation cart. Just make sure to select the add-on "Bring 2 carton boxes" while doing so.</p>

        <p>In any case though, we would recommend you pack your donations in anything you already have at your home. Eg- blue/black disposable bags (bio-degradable type if available). Just make sure to tie them up properly before handing over.</p>
      </div>
    </div>
  </div>
  
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          What all items can I donate?
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <p>While raising a pickup request, you will be presented with a list of items accepted by our NGO network. This list usually depends on your location and the pickup option you selected (2-wheeler vs Tempo/Truck). Generally we accept all kinds of reusable* goods – clothes, toys, furniture, kitchen utensils, shoes, handbags, artificial jewellery, school bags and stationery items, prams, treadmills and so on.</p>
          <p>* - Reusable means not torn, not broken, does not require repairs, is in working condition, properly sanitised and/or washed.</p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          
          Are there any specific guidelines for the goods I can donate?
          
        </button>
      </h2>
      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <p>All the donations must be reusable* and in working condition. Most of our NGO partners do not have facilities for refurbishment and directly distribute the donations as received. Hence please take care while preparing your donation items.</p>
          <ul>Here are a few examples -
            <li>Clothes - must not be stained or torn; must be properly washed;</li>
            <li>Toys - must be in working condition with no broken parts/edges;</li>
            <li>Mattresses - must be pest-free;</li>
            <li>Home Appliances - must be in working condition; shouldn't need any repairs;</li>
          </ul>
          <p>* - Reusable means not torn, not broken, does not require repairs, is in working condition, properly sanitised and/or washed.</p>

        </div>
      </div>
    </div>
</div>

</div>
        </div>
        </>
    )
}

export default FAQs
