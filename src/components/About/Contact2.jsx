import React from 'react'

const Contact2 = () => {
  return (
    <div>
              <section className="contact-info-01 pb-24 pt-0 overflow-visible bg-img cover-background dark-overlay" data-overlay-dark="6" style={{ backgroundImage: "url('/assets/img/banner/home.jpg')" }}>
            <div className="container-lg">
                <div className="row justify-content-end pb-20">
                    <div className="col-md-5 col-xl-4">
                        <div className="contact-infos px-1-6">
                            <div className="contact-btn wow fadeInUp" data-wow-delay="200ms">
                                <a href="#!" className="d-flex align-items-center justify-content-between text-white">Send a Message <i className="fa-solid fa-location-arrow"></i></a>
                            </div>
                            <div className="contact-text">
                                <div className="mb-4 wow fadeInUp" data-wow-delay="200ms">
                                    <p className="text-primary display-25 font-weight-600 mb-0">@</p>
                                    <p className="mb-0 display-28 font-weight-600 text-white">info@example.com</p>
                                </div>
                                <div className="mb-4 wow fadeInUp" data-wow-delay="350ms">
                                    <p className="display-26 text-primary font-weight-600 mb-0"><i className="fa-solid fa-phone-flip"></i></p>
                                    <p className="mb-0 display-28 font-weight-600 text-white">(+44) 152-567-987</p>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="500ms">
                                    <p className="mb-0 text-primary ">View on Maps</p>
                                    <p className="mb-0 w-80 display-28 font-weight-600 text-white">66 Guild Street 512B, Great North Town.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact2
