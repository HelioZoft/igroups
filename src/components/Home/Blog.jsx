import React from 'react'

const Blog = () => {
  return (
    <div>
          <section className="pt-0">
        <div className="container">
            <div className="text-center mb-2-9 wow fadeInUp" data-wow-delay="200ms">
                <h2 className="mb-0 display-5 font-weight-800 lh-1">Our latest <span className="text-secondary">news.</span></h2>
            </div>
            <div className="row g-xl-5 mt-n2-9">
                <div className="col-lg-8 mt-2-9">
                    <div className="row mt-n1-9">
                        <div className="col-md-6 mt-1-9 wow fadeInUp" data-wow-delay="200ms">
                            <article className="card card-style05 h-100">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="assets/img/blog/blog-01.jpg" className="radius-top" alt="..." />
                                </div>
                                <div className="card-body position-relative pt-2-6 pb-1-9 pb-xl-2-6 px-1-6 px-xl-2-4">
                                    <div className="post-date">
                                        <span className="mb-0 d-block lh-1 display-17">14</span>
                                        <span className="d-block month">Nov</span>
                                    </div>
                                    <ul className="list-unstyled mb-3">
                                        <li className="display-31 d-inline-block text-uppercase me-3 fw-bold"><a href="#!" className="text-muted">Coaching</a></li>
                                        <li className="display-31 d-inline-block blog-tag position-relative ps-3"><a href="#!">13 Comments</a></li>
                                    </ul>
                                    <h4 className="mb-0"><a href="blog-details.html">Never underestimate the influence of business coach.</a></h4>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 mt-1-9 wow fadeInUp" data-wow-delay="350ms">
                            <article className="card card-style05 h-100">
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="assets/img/blog/blog-02.jpg" className="radius-top" alt="..." />
                                </div>
                                <div className="card-body position-relative pt-2-6 pb-1-9 pb-xl-2-6 px-1-6 px-xl-2-4">
                                    <div className="post-date">
                                        <span className="mb-0 d-block lh-1 display-17">11</span>
                                        <span className="d-block month">Nov</span>
                                    </div>
                                    <ul className="list-unstyled mb-3">
                                        <li className="display-31 d-inline-block text-uppercase me-3 fw-bold"><a href="#!" className="text-muted">Interview</a></li>
                                        <li className="display-31 d-inline-block blog-tag position-relative ps-3"><a href="#!">08 Comments</a></li>
                                    </ul>
                                    <h4 className="mb-0"><a href="blog-details.html">10 Business coach that had gone way too far.</a></h4>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-2-9 wow fadeInUp" data-wow-delay="200ms">
                    <div className="primary-boxshadow bg-white border-radius-10 px-1-9 py-1-9 py-md-2-6">
                        <h5 className="h4 text-center mb-1-9">Make An Appointment</h5>
                        <form className="contact-style-01 quform wow fadeInUp" >
                            <div className="quform-elements">
                                <div className="row">

                                    {/* Begin Text input element  */}
                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <div className="quform-input">
                                                <input className="form-control" id="name" type="text" name="name" placeholder="Your name here*" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Text input element --> */}

                                    {/* <!-- Begin Text input element --> */}
                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <div className="quform-input">
                                                <input className="form-control" id="email" type="text" name="email" placeholder="Your email here*" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Text input element --> */}

                                    {/* <!-- Begin Text input element --> */}
                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <div className="quform-input">
                                                <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here*" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Text input element --> */}

                                    {/* <!-- Begin Text input element --> */}
                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <div className="quform-input">
                                                <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Text input element --> */}

                                    {/* <!-- Begin Textarea element --> */}
                                    <div className="col-md-12">
                                        <div className="quform-element form-group">
                                            <div className="quform-input">
                                                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words*"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Textarea element --> */}

                                    {/* <!-- Begin Captcha element --> */}
                                    <div className="col-md-12">
                                        <div className="quform-element">
                                            <div className="form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="quform-captcha">
                                                    <div className="quform-captcha-inner">
                                                        <img src="assets/quform/images/captcha/courier-new-light.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Captcha element --> */}

                                    {/* <!-- Begin Submit button --> */}
                                    <div className="col-md-12">
                                        {/* <div className="quform-submit-inner">
                                            <button className="btn-style1 border-0" type="submit">Send Message</button>
                                        </div> */}
                                        <div className="quform-loading-wrap text-start"><span className="quform-loading"></span></div>
                                    </div>
                                    {/* <!-- End Submit button --> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog
