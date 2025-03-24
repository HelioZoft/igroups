import React from 'react'

const ContactInfo = () => {
  return (
    <div>
              <section>
            <div className="container">
                <div className="row mt-n1-9">
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-1-9 wow fadeInUp" data-wow-delay="200ms">
                        <div className="contact-info-block h-100">
                            <i className="fas fa-phone-alt display-15 mb-3 d-block text-secondary"></i>
                            <h3 className="h4 mb-3">Phone</h3>
                            <p className="mb-1">(+44) 123 456 789</p>
                            <p className="mb-0">(+44) 152-567-987</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-1-9 wow fadeInUp" data-wow-delay="350ms">
                        <div className="contact-info-block h-100">
                            <i className="fas fa-map-marker-alt display-15 mb-3 d-block text-secondary"></i>
                            <h3 className="h4 mb-3">Location</h3>
                            <p className="mb-0">66 Guild Street 512B, Great North Town.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-1-9 wow fadeInUp" data-wow-delay="500ms">
                        <div className="contact-info-block h-100">
                            <i className="far fa-envelope display-15 mb-3 d-block text-secondary"></i>
                            <h3 className="h4 mb-3">Email</h3>
                            <p className="mb-1">info@example.com</p>
                            <p className="mb-0">info@domain.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 mt-1-9 wow fadeInUp" data-wow-delay="650ms">
                        <div className="contact-info-block h-100">
                            <i className="fa-solid fa-calendar-days display-15 mb-3 d-block text-secondary"></i>
                            <h3 className="h4 mb-3">Working Days</h3>
                            <p className="mb-1">Mon to Fri - 09:00am - 06:00pm</p>
                            <p className="mb-0">Sat to Sun - Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactInfo
