import React from 'react'
import { Link } from 'react-router-dom'
import blogimg from '../../assets/images/blogimg.png'

export default function Blog() {
    return (
        // <section className='blogs'>
        //     <h2 className='text-center mt-4'> Our Blogs</h2>
        //     <div class="container">
        //         <div class="card">
        //             <figure class="card__thumb">
        //                 <img src="https://source.unsplash.com/G2ifDHnHZ6Y/300x510" alt="Picture by Štefan Štefančík" class="card__image" />
        //                 <figcaption class="card__caption">
        //                     <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
        //                     <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
        //                     <a href="" class="card__button">Read more</a>
        //                 </figcaption>
        //             </figure>
        //         </div>

        //         <div class="card">
        //             <figure class="card__thumb">
        //                 <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="card__image" />
        //                 <figcaption class="card__caption">
        //                     <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
        //                     <p class="card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
        //                     <a href="" class="card__button">Read more</a>
        //                 </figcaption>
        //             </figure>
        //         </div>

        //         <div class="card">
        //             <figure class="card__thumb">
        //                 <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="card__image" />
        //                 <figcaption class="card__caption">
        //                     <h2 class="card__title">Why You Should Bring Your Dog To Work</h2>
        //                     <p class="card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
        //                     <a href="" class="card__button">Read more</a>
        //                 </figcaption>
        //             </figure>
        //         </div>
        //     </div>

        // </section>
        <section className='blogs-page overflow-hidden'>

            <div className=''>
                <div className='blog-img'>
                    <img src={blogimg} alt="" className='img-fluid' />
                </div>
                <div className='blog-btn-home'>
                    <button className='blog-btn'><a href='/' className='btn-link'>Back To Home</a></button>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="featuredPropBox">
                            <ul>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp1" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp2" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="fplogo"><img src="https://i.ibb.co/3MZXqZC/logo.png" alt="fp3" /></div>
                                        <div className="fptext">
                                            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
                                            <button className='blog-bts'>Details</button>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer section */}
            <section className='our-footer'>
                <footer className="footer-section">
                    <div className="container">
                        <div className="footer-cta py-4">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>1010 Avenue, sw 54321, chandigarh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-phone"></i>
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>9876543210 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open"></i>
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>mail@info.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content py-4">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <h1 className='text-light'>Company Logo </h1>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">about</a></li>
                                            <li><a href="#">services</a></li>
                                            <li><a href="#">portfolio</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">Expert Team</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Latest News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div className="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <button><i className="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </section>

        </section>

    )
}
