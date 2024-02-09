import React from 'react';

function Carousel() {
    

    return (
        <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                        <div className="carousel-bg carousel-bg-1" style={{ minHeight: "500px" }}></div>
                        <div className="carousel-caption d-flex align-items-center">
                            <div className="container">
                                <div className="row align-items-center justify-content-center justify-content-lg-start">
                                    <div className="col-10 col-lg-7 text-center text-lg-start">
                                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                        <div className="carousel-img carousel-img-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="carousel-bg carousel-bg-2" style={{ minHeight: "500px" }} >
                        <div className="carousel-caption d-flex align-items-center">
                            <div className="container">
                                <div className="row align-items-center justify-content-center justify-content-lg-start">
                                    <div className="col-10 col-lg-7 text-center text-lg-start">
                                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <div className="carousel-img carousel-img-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </div>
    );
}

export default Carousel;
