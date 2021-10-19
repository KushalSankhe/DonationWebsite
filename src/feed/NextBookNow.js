import React from 'react'

function NextBookNow() {
    return (
        <>
        <div>
        <div className="container my-4 justify-content-center align-items-center">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Contact Us</h4>
          <form className="needs-validation justify-content-center align-items-center" novalidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
  
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              
              <div className="col-sm-6">
                <label htmlFor="number" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="lastName" placeholder="" value="" required=""/>
                <div className="invalid-feedback">
                  Valid no.
                </div>
              </div>
  
  
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email for contact.
                </div>
              </div>
  
              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                <div className="invalid-feedback">
                  Please enter your address.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">What would you like to donate?</label>
                <textarea className="form-control" id="donation" rows="3" required=""></textarea>
                <div className="invalid-feedback">
                </div>


  
              </div>
  
              <hr className="my-4"/>

              <button className="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
          </div>
        </div>
            
        </div>
        </>
    )
}

export default NextBookNow
