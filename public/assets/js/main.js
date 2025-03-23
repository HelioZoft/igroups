/*-----------------------------------------------------------------------------------

    Theme Name: Lifego - Life and Business Coach HTML Template
    Description: Life and Business Coach HTML Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */

! function(e) {
    "use strict";
    var t = e(window);

    function o() {
        var o, a, s, r, i;
        o = e(".full-screen"), a = t.height(), o.css("min-height", a), s = e("header").height(), r = e(".screen-height"), i = t.height() - s, r.css("height", i), 992 > e(window).width() && e(".navbar-nav .dropdown-menu.sub-menu").css("display", "none")
    }
    e("#preloader").fadeOut("normall", function() {
        e(this).remove()
    }), t.on("scroll", function() {
        var o = t.scrollTop(),
            a = e(".navbar-brand img"),
            s = e(".navbar-brand.logodefault img");
        o <= 175 ? (e("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "img/logos/logo-inner.png"), s.attr("src", "img/logos/logo.png")) : (e("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "img/logos/logo.png"), s.attr("src", "img/logos/logo.png"))
    }), (() => {
        let t = () => {
            let t = document.documentElement.scrollTop,
                o = document.documentElement.scrollHeight - document.documentElement.clientHeight,
                a = Math.round(t / o * 100),
                s = e(".scroll-top-percentage");
            s.css("background", `conic-gradient( #73ED7C ${a}%, #019297 ${a}%)`), t > 100 ? s.addClass("active") : s.removeClass("active"), a < 96 ? e("#scroll-value").text(`${a}%`) : e("#scroll-value").html('<i class="fa-solid fa-angle-up"></i>')
        };
        window.onscroll = t, window.onload = t, e(".scroll-top-percentage").on("click", function e() {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    })(), e(".parallax,.bg-img").each(function(t) {
        e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")")
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), e(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), e(".source-modal").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160
    }), e(".current-year").text(new Date().getFullYear()), 0 !== e(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), e(".copy-clipboard").on("click", function() {
        var t = e(this);
        t.text(), t.text("Copied"), setTimeout(function() {
            t.text("Copy")
        }, 2e3)
    })), t.resize(function(e) {
        setTimeout(function() {
            o()
        }, 500), e.preventDefault()
    }), o(), e(document).ready(function() {
        if (e(".testimonial-carousel-one").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                smartSpeed: 1500,
                nav: !1,
                navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                dots: !0,
                thumbs: !0,
                thumbsPrerendered: !0,
                center: !1,
                margin: 50,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                        dots: !1
                    },
                    768: {
                        items: 1,
                        dots: !1
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            }), e(".testimonial-carousel-two").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                smartSpeed: 1500,
                nav: !0,
                navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                dots: !1,
                thumbs: !0,
                thumbsPrerendered: !0,
                center: !1,
                margin: 50,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                        nav: !1
                    },
                    768: {
                        items: 1,
                        nav: !1
                    },
                    991: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            }), e(".portfolio-carousel4").owlCarousel({
                center: !1,
                items: 2,
                loop: !0,
                dots: !1,
                nav: !1,
                navText: ["<i class='ti-arrow-left text-primary'></i>", "<i class='ti-arrow-right text-primary'></i>"],
                margin: 30,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1399: {
                        items: 4
                    }
                }
            }), e(".service-carousel1").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    },
                    1400: {
                        items: 3
                    }
                }
            }), e(".history-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 5e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !1,
                center: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    481: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1400: {
                        items: 5
                    }
                }
            }), e(".slider-fade1").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                margin: 0,
                nav: !1,
                navText: ["<i class='ti-arrow-left text-primary'></i>", "<i class='ti-arrow-right text-primary'></i>"],
                autoplay: !0,
                smartSpeed: 1500,
                mouseDrag: !0,
                animateIn: "fadeIn",
                animateOut: "fadeOut"
            }), e(".owl-carousel").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                margin: 0,
                autoplay: !0,
                smartSpeed: 500
            }), e(".slider-fade1").on("changed.owl.carousel", function(t) {
                var o = t.item.index - 2;
                e("span").removeClass("animated fadeInUp"), e("h1").removeClass("animated fadeInUp"), e("a").removeClass("animated fadeInUp"), e(".owl-item").not(".cloned").eq(o).find("span").addClass("animated fadeInUp"), e(".owl-item").not(".cloned").eq(o).find("h1").addClass("animated fadeInUp"), e(".owl-item").not(".cloned").eq(o).find("a").addClass("animated fadeInUp")
            }), 0 !== e(".horizontaltab").length && e(".horizontaltab").easyResponsiveTabs({
                type: "default",
                width: "auto",
                fit: !0,
                tabidentify: "hor_1",
                activate: function(t) {
                    var o = e(this),
                        a = e("#nested-tabInfo");
                    e("span", a).text(o.text()), a.show()
                }
            }), e(".odometer").waypoint(function(t) {
                if ("down" === t) {
                    let o = e(this.element).attr("data-count");
                    e(this.element).html(o)
                }
            }, {
                offset: "80%"
            }), e(".countdown").countdown({
                date: "01 July 2027 00:01:00",
                format: "on"
            }), e(".navbar-nav li.has-sub").removeClass("active"), e(".cursor-helper").length) {
            var t = document.querySelector(".cursor-helper-outer"),
                o = document.querySelector(".cursor-helper-inner"),
                a = document.querySelectorAll("a"),
                s = document.querySelectorAll("footer"),
                r = document.querySelectorAll(".owl-carousel");
            document.addEventListener("mousemove", function(e) {
                e.clientX, e.clientY, t.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            }), document.addEventListener("mousemove", function(e) {
                var t = e.clientX,
                    a = e.clientY;
                o.style.left = t + "px", o.style.top = a + "px"
            }), document.addEventListener("mousedown", function() {
                t.classList.add("click"), o.classList.add("cursor-helper-innerhover")
            }), document.addEventListener("mouseup", function() {
                t.classList.remove("click"), o.classList.remove("cursor-helper-innerhover")
            }), a.forEach(e => {
                e.addEventListener("mouseover", () => {
                    t.classList.add("cursor-link")
                }), e.addEventListener("mouseleave", () => {
                    t.classList.remove("cursor-link")
                })
            }), s.forEach(e => {
                e.addEventListener("mouseover", () => {
                    t.classList.add("cursor-light")
                }), e.addEventListener("mouseleave", () => {
                    t.classList.remove("cursor-light")
                })
            }), r.forEach(e => {
                e.addEventListener("mouseover", () => {
                    t.classList.add("cursor-slider")
                }), e.addEventListener("mouseleave", () => {
                    t.classList.remove("cursor-slider")
                })
            })
        }
    }), t.on("load", function() {
        e(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), e(".portfolio-link").on("click", e => {
            e.stopPropagation()
        })
    })
}(jQuery);