import React from "react";

function NextBookNow() {
  return (
    <>
      <div>
        <div className="container my-4 " style={{marginLeft:'200px'}}>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Contact Us</h4>
            <form
              className="needs-validation justify-content-center align-items-center"
              novalidate=""
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">Valid no.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email for contact.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your address.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>

                
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  What would you like to donate?
                </label>
                <textarea
                  className="form-control"
                  id="donation"
                  rows="3"
                  required=""
                ></textarea>
                <div className="invalid-feedback"></div>
              </div>
              <div className="form-check" style={{marginLeft:'7px'}}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  />
                  <div>
                    <label className="form-check-label">
                      {" "}
                      Light Pickup (via 2-Wheeler){" "}
                    </label>
                    <span style={{ color: "green" }}> 199/- rs </span>{" "}
                  </div>

                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      features:
                      <p>
                        ■ Upto 22 clothes (1 bag) ■ Same day pickup available
                        Accepted Items:
                      </p>
                      Clothes Footwear Stationerys
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
            <label className="form-check-label"> Medium to Heavy Pickup </label><span style={{color:"green"}}>    699/- rs </span>

            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                features:

<p>
  ■ Medium to Heavy sized donations ■ Takes 3-5 days</p>
Clothes, toys, kitchen utensils, shoes, bags Furniture Mattress Home Appliances Electronics Special

              </div>
            </div>
          </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NextBookNow;
