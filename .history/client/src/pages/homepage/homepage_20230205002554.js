import React from "react";
import "./fontawesome-all.css";
import "./magnific-popup.css";
import "./styles.css";

function homepage() {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="index.html"
          >
            <h5>Education.IO</h5>
            {/* <img src="images/logo.svg" alt="alternative" className="h-8" /> */}
          </a>

          <button
            className="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
            id="navbarsExampleDefault"
          >
            <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
              <li>
                <a className="nav-link page-scroll active" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#details">
                  Volunteer
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#pricing">
                  Institute
                </a>
              </li>
              <li className="dropdown">
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item page-scroll" href="article.html">
                    Article Details
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll" href="terms.html">
                    Terms Conditions
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item page-scroll" href="privacy.html">
                    Privacy Policy
                  </a>
                </div>
              </li>
            </ul>
            <span className="block lg:ml-3.5">
              <a className="no-underline" href="#your-link">
                <i className="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
              </a>
              <a className="no-underline" href="#your-link">
                <i className="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>
      {/* <!-- end of navigation --> */}

      {/* <!-- Header --> */}
      <header
        id="header"
        className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h1 className="h1-large mb-5">
              Education is not restricted if you haven't got the money Team
              management mobile application
            </h1>
            <p className="p-large mb-8">
              Start getting things done together with your team based on Pavo's
              revolutionary team management features
            </p>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple"></i>Download
            </a>
            <a className="btn-solid-lg secondary" href="#your-link">
              <i className="fab fa-google-play"></i>Download
            </a>
          </div>
          <div className="xl:text-right">
            <img
              className="inline"
              src="images/header-smartphone.png"
              alt="alternative"
            />
          </div>
        </div>
      </header>

      {/* <!-- Introduction --> */}
      <div className="pt-4 pb-14 text-center">
        <div className="container px-4 sm:px-8 xl:px-4">
          <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
            {" "}
            Team management mobile apps don’t get better than Pavo. It’s
            probably the best app in the world for this purpose. Don’t hesitate
            to give it a try today and you will fall in love with it
          </p>
        </div>
      </div>
      {/* <!-- end of introduction --> */}

      <div id="features" className="cards-1">
        <div className="container px-4 sm:px-8 xl:px-4">
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-1.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Platform Integration</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform
                without compatibility issues
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-2.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Easy On Resources</h5>
              <p className="mb-4">
                Works smoothly even on older generation hardware due to our
                optimization efforts
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-3.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Great Performance</h5>
              <p className="mb-4">
                Optimized code and innovative technology insure no delays and
                ultra-fast responsiveness
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-4.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Multiple Languages</h5>
              <p className="mb-4">
                Choose from one of the 40 languages that come pre-installed and
                start selling smarter
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-5.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Free Updates</h5>
              <p className="mb-4">
                Don't worry about future costs, pay once and receive all future
                updates at no extra cost
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-6.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Community Support</h5>
              <p className="mb-4">
                Register the app and get acces to knowledge and ideas from the
                Pavo online community
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="lg:col-span-8">
            <div className="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
              <img
                className="inline rounded-lg"
                src="images/details-lightbox.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="lg:col-span-4">
            <h3 className="mb-2">Goals Setting</h3>
            <hr className="w-11 h-0.5 mt-0.5 mb-4 ml-0 border-none bg-indigo-600" />
            <p>
              The app can easily help you track your personal development
              evolution if you take the time to set it up.
            </p>
            <h4 className="mt-7 mb-2.5">User Feedback</h4>
            <p className="mb-4">
              This is a great app which can help you save time and make your
              live easier. And it will help improve your productivity.
            </p>
            <ul className="list mb-6 space-y-2">
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Splash screen panel</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Statistics graph report</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Events calendar layout</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Location details screen</div>
              </li>
              <li className="flex">
                <i className="fas fa-chevron-right"></i>
                <div>Onboarding steps interface</div>
              </li>
            </ul>
            <a className="btn-solid-reg mfp-close page-scroll" href="#download">
              Download
            </a>
            <button
              className="btn-outline-reg mfp-close as-button"
              type="button"
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="counter">
        <div className="container px-4 sm:px-8">
          <div id="counter">
            <div className="cell">
              <div className="counter-value number-count" data-count="231">
                1
              </div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="385">
                1
              </div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="159">
                1
              </div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="127">
                1
              </div>
              <p className="counter-info">Case Studies</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count="211">
                1
              </div>
              <p className="counter-info">Orders Received</p>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-1 py-32 bg-gray">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
            What do users think about Pavo
          </h2>

          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-1.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        It's been so fun to work with Pavo, I've managed to
                        integrate it properly into my business flow and it's
                        great
                      </p>
                      <p className="testimonial-author">
                        Jude Thorn - Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-2.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        We were so focused on launching as many campaigns as
                        possible that we've forgotten to target our loyal
                        customers
                      </p>
                      <p className="testimonial-author">
                        Roy Smith - Developer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-3.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        I've been searching for a tool like Pavo for so long. I
                        love the reports it generates and the amazing high
                        accuracy
                      </p>
                      <p className="testimonial-author">
                        Marsha Singer - Marketer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-4.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        We've been waiting for a powerful piece of software that
                        can help businesses manage their marketing projects
                      </p>
                      <p className="testimonial-author">Tim Shaw - Designer</p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-5.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        Searching for a great prototyping and layout design app
                        was difficult but thankfully I found app suite quickly
                      </p>
                      <p className="testimonial-author">
                        Lindsay Spice - Marketer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-6.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        The app support team is amazing. They've helped me with
                        some issues and I am so grateful to the entire team
                      </p>
                      <p className="testimonial-author">
                        Ann Blake - Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the team at{" "}
            <a
              className="text-indigo-600 hover:text-gray-500"
              href="mailto:email@domain.com"
            >
              email@domain.com
            </a>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </a>
            </span>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="copyright">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
            <ul className="mb-4 list-unstyled p-small">
              <li className="mb-2">
                <a href="article.html">Article Details</a>
              </li>
              <li className="mb-2">
                <a href="terms.html">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="privacy.html">Privacy Policy</a>
              </li>
            </ul>
            <p className="pb-2 p-small statement">
              Copyright ©{" "}
              <a href="#your-link" className="no-underline">
                Your name
              </a>
            </p>

            <p className="pb-2 p-small statement">
              Distributed by :
              <a href="https://themewagon.com/" className="no-underline">
                Themewagon
              </a>
            </p>
          </div>
        </div>
        {/* <!-- end of copyright --> */}
      </div>
    </div>
  );
}

export default homepage;
