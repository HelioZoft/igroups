import React from 'react'

const Banner = () => {
    return (
        <div>
            <section className="bg-img cover-background full-screen top-position1 p-0 dark-overlay parallax" data-overlay-dark="7" style={{ backgroundImage: "url('/assets/img/banner/home.jpg')" }}>
                <div className="container d-flex flex-column pt-5 pb-2 py-sm-8 py-md-0">
                    <div className="row align-items-center justify-content-center text-center min-vh-100">
                        <div className="col-md-10 col-lg-9 col-xl-7">
                            <div className="mb-2-2">
                                <h1 className="mb-0  text-white text-shadow font-weight-800 lh-1 wow fadeInUp" data-wow-delay="200ms">Your journey to joy <span className="text-primary">begins here.</span></h1>
                            </div>
                            <a href="about.html" className="btn-style1 primary text-center wow fadeInUp" data-wow-delay="350ms">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
