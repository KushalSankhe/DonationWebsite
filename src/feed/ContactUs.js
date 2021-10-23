import React from 'react'

function ContactUs() {
    return (<>
    <div style={{ marginLeft:'318px'}}>
        <div>
            <div className="container my-4 justify-content-center align-items-center">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3 text-center">Contact Us</h4>
        <form className="needs-validation justify-content-center align-items-center" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div className="col-12">
              <label for="email" className="form-label">Email </label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email for contact.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your address.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Tell us about your problem</label>
              <textarea className="form-control" id="address" rows="3" required=""></textarea>
              <div className="invalid-feedback">
                Express your problem....
              </div>

            </div>


            <div className="col-md-3" >
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required="" />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>


          <button className="w-100 btn btn-primary btn-lg my-4" type="submit">Submit</button>
        </form>
      </div>
    </div>
        </div>
        </div>
        </>
    )
}

export default ContactUs
