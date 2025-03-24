import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <section className="overflow-visible pt-0">
            <div className="container">
                <div className="row mt-n1-9">
                    <div className="col-lg-6 mt-1-9">
                        <img src="assets/img/content/contact-01.jpg" alt="..." />
                    </div>
                    <div className="col-lg-6 mt-1-9">
                        <div className="ms-xxl-6 primary-boxshadow bg-white px-1-9 py-1-9 py-md-2-6">
                            <div className="sec-title01 mb-4">
                                <h2 className="mb-0 display-5 font-weight-800 lh-1">Contact <span className="title-sm">with us.</span></h2>
                            </div>
                            <form className="contact-style-01 quform" action="quform/contact.php" method="post" enctype="multipart/form-data" onclick="">
                                <div className="quform-elements">
                                    <div className="row">

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="name">Your Name <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="email">Your Email <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="subject">Your Subject <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Text input element --> */}
                                        <div className="col-md-6">
                                            <div className="quform-element form-group">
                                                <label for="phone">Contact Number</label>
                                                <div className="quform-input">
                                                    <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Text input element --> */}

                                        {/* <!-- Begin Textarea element --> */}
                                        <div className="col-md-12">
                                            <div className="quform-element form-group">
                                                <label for="message">Message <span className="quform-required">*</span></label>
                                                <div className="quform-input">
                                                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
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
                                            <div className="quform-submit-inner">
                                                <button className="btn-style1 border-0 primary" type="submit">Send Message</button>
                                            </div>
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

export default ContactForm
