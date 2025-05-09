import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="page-title-section bg-img cover-background dark-overlay top-position1" data-overlay-dark="7" style={{ backgroundImage: "url('/assets/img/banner/banner-3.jpg')" }}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-8 col-xxl-5">
                        <h1 className="display-1 text-white text-uppercase font-weight-800 mb-2-9 mb-md-8 lh-1">About Agency</h1>
                        <ul className="list-unstyled text-center mb-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">About us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner
