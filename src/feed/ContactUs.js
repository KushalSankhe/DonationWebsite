import React from 'react'

function ContactUs() {
    return (
        <div>
            <div class="container my-4 justify-content-center align-items-center">
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Contact Us</h4>
        <form class="needs-validation justify-content-center align-items-center" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div class="col-12">
              <label for="email" class="form-label">Email </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email for contact.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div class="invalid-feedback">
                Please enter your address.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Tell us about your problem</label>
              <textarea class="form-control" id="address" rows="3" required=""></textarea>
              <div class="invalid-feedback">
                Express your problem....
              </div>

            </div>


            <div class="col-md-3 my-4" >
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="" />
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>


          <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
        </div>
    )
}

export default ContactUs
