import React from 'react'

const Banner = () => {
  return (
    <div>
        <section class="page-title-section bg-img cover-background dark-overlay top-position1" data-overlay-dark="7" style={{ backgroundImage: "url('/assets/img/banner/home.jpg')" }}>
            <div class="container">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-8 col-xxl-5">
                        <h1 class="display-1 text-white text-uppercase font-weight-800 mb-2-9 mb-md-8 lh-1">Two Columns</h1>
                        <ul class="list-unstyled text-center mb-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">Two Columns</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner
