import React from 'react'

function BookNow() {
    return (
        <>
        <div>
            
    <div class="container">
      <div
        class="container"
        style=
          {{marginBottom: '16px',
          backgroundClor: '#f6f6f6',
          border: '1px solid #e9e9e9',
          borderRadius: '6px',
          padding:' 15px',
          height: '400px',
          width: '512px',
          marginBottom: '20px',
          boxSizing: 'borderBox',}}
        
      >
        <h4>Pickup From Doorstep</h4>

        <div
          style={{
            position: 'relative',
            backgroundColor: '#e6e4e4',
            cursor: 'pointer',
            display: 'block',
            padding:  '20px',
            border: '1px solid #cccbcb',
            transition: 'backgroundColor 0.25s',
            boxSizing: 'borderBox',
          }}
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
            <div>
            <label class="form-check-label"> Light Pickup (via 2-Wheeler) </label><span style={{color:"green"}}>    199/- rs </span> </div>  

            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                features:

<p>
■ Upto 22 clothes (1 bag) ■ Same day pickup available
Accepted Items:</p>
 Clothes Footwear Stationerys
              </div>
            </div>
          </div>
        </div>




        <div
          class="my-3"
          style={{
            position: 'relative',
            backgroundColor: '#e6e4e4',
            cursor: 'pointer',
            display: 'block',
            padding:  '20px',
            border: '1px solid #cccbcb',
            transition: 'backgroundColor 0.25s',
            boxSizing: 'borderBox',
          }}
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
            <label class="form-check-label"> Medium to Heavy Pickup </label><span style={{color:"green"}}>    699/- rs </span>

            <div class="collapse" id="collapseExample1">
              <div class="card card-body">
                features:

<p>
  ■ Medium to Heavy sized donations ■ Takes 3-5 days</p>
Clothes, toys, kitchen utensils, shoes, bags Furniture Mattress Home Appliances Electronics Special

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>


        <button type="button" class="btn btn-outline-success">Next</button>
        </>
    )
}

export default BookNow
