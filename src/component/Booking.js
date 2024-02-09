import React from 'react';

function Booking() {
    return (
        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
            {<div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase">// Our Technicians //</h6>
                    <h1 className="mb-5">Our Expert Technicians</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                    </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         
            }
        </div>
    );
}

export default Booking;
