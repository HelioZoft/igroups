import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark pt-8 pt-md-10">
                <div className="container">
                    <div className="row mb-2-9 mt-n2-9">
                        <div className="col-md-6 col-lg-4 mt-2-9">
                            <div className="pe-md-8">
                                <h2 className="mb-1-6 mb-md-1-9 mb-xl-5 h4 lh-1 text-white">About us</h2>
                                <p className="text-white mb-1-6">Above all, we believe that real change is possible and that tomorrow doesn’t have to be like today.</p>
                                <ul className="social-icon-style3 list-unstyled mb-0">
                                    <li><a href="#!"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#!"><i className="ti-linkedin"></i></a></li>
                                    <li><a href="#!"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-2-9">
                            <div className="ps-md-1-9 ps-xxl-7 pe-lg-1-9 pe-xl-7">
                                <h2 className="mb-1-6 mb-md-1-9 mb-xl-5 h4 lh-1 text-white">Contact us</h2>
                                <ul className="list-unstyled list-style1 mb-0">
                                    <li><span>Address: </span>66 Guild Street 512B, Great North Town.</li>
                                    <li><span>Mail: </span><a href="#!">addyour@email</a></li>
                                    <li><span>Phone: </span><a href="#!">(+44) 123 456 789</a></li>
                                    <li><span>Fax Id: </span><a href="#!">(+1) 523-567-987</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mt-2-9">
                            <div className="ps-lg-2-9">
                                <h2 className="mb-1-6 mb-md-1-9 mb-xl-5 h4 lh-1 text-white">Newsletter</h2>
                                <form className="quform newsletter-form-one">
                                    <div className="quform-elements position-relative">
                                        <div className="row">

                                            {/* <!-- Begin Text input element --> */}
                                            <div className="col-md-12">
                                                <div className="quform-element mb-4">
                                                    <div className="quform-input">
                                                        <input className="form-control rounded-pill border-0 ps-4" id="email_address" type="text" name="email_address" placeholder="Subscribe with us" />
                                                        <i className="fa fa-user position-absolute right-5 top-50 translate-middle text-secondary"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Text input element --> */}

                                            {/* <!-- Begin Submit button --> */}
                                            <div className="col-md-12">
                                                {/* <div className="quform-submit-inner">
                                                    <button className="btn-style1 primary border-0" type="submit">Subscribe Now</button>
                                                </div> */}
                                                <div className="quform-loading-wrap"><span className="quform-loading"></span></div>
                                            </div>
                                            {/* <!-- End Submit button --> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-color-light-white align-items-center pt-1-6 pb-1-9">
                        <div className="col-md-4 order-2 order-md-1 text-center text-md-start">
                            <div className="footer-logo text-center text-md-start mx-auto mx-lg-0">
                                <a href="index.html"><img src="img/logos/footer-light-logo.png" alt="..." /></a>
                            </div>
                        </div>
                        <div className="col-md-8 order-1 order-md-2">
                            <div className="text-center text-md-end mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li className="d-inline-block mx-2 ms-sm-0 me-sm-5"><a href="about.html" className="text-white text-primary-hover">About Us</a></li>
                                    <li className="d-inline-block mx-2 ms-sm-0 me-sm-5"><a href="services.html" className="text-white text-primary-hover">Services</a></li>
                                    <li className="d-inline-block mx-2 mx-sm-0"><a href="contact.html" className="text-white text-primary-hover">Get In Touch</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="cursor-helper">
                <div className="cursor-helper-outer"></div>
                <div className="cursor-helper-inner"></div>
            </div>
        </div>
    )
}

export default Footer
