import React from 'react'
import img2 from './Static/img/kushal.png'

function PeopleBehindThis() {
    return (
        <>
        <div>
        <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 ">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
             
              <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{width: "300px;"}} src={{img2}} alt="" />
      
            </div>
          </div>


          <div className="row featurette d-flex justify-content-center align-items-center my-3">
            <div className="col-md-7 order-md-2 ">
              <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " style={{width: "300px;"}} src={{img2}} alt="" />
      
            </div>
          </div>

          <div className="row featurette d-flex justify-content-center align-items-center my-3">
            <div className="col-md-7 ">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
             
              <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " style={{width: "300px;"}} src={{img2}} alt="" />
      
            </div>
          </div>

          
      </div>
        </div>
        </>
    )
}

export default PeopleBehindThis
