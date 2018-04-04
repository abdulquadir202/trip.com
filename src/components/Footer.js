import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return(

            <footer id="colophon" className="site-footer animatedParent" role="contentinfo" >
            <div className="footer-wrapper clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <section className="widget widget_pages animated flipInX slower clearfix">
                                <h5 className="widget-title">Navigation</h5>
                                <ul>
                                    <li className="page_item page-item-17"><a href="index.html#">Blog</a></li>
                                    <li className="page_item page-item-19"><a href="index.html#">Contact</a></li>
                                    <li className="page_item page-item-7 current_page_item"><a href="index.html#">Home</a></li>
                                    <li className="page_item page-item-32"><a href="index.html#">Home Two</a></li>
                                    <li className="page_item page-item-12"><a href="index.html#">Shortcodes</a></li>
                                    <li className="page_item page-item-11"><a href="index.html#">Special Offers</a></li>
                                    <li className="page_item page-item-10"><a href="index.html#">Tours</a></li>
                                    <li className="page_item page-item-9"><a href="index.html#">Where we go</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-sm-4">
                            <section className="widget widget_mc4wp_widget animated flipInX slower clearfix">
                                <h5 className="widget-title">stay in the tourism</h5>
                                <div id="mc4wp-form-1" className="form mc4wp-form clearfix">
                                    <p>Receive monthly cool ideas, inspiring stories,
                                        great reviews and offers.</p>
                                    <form method="post" className="clearfix">
                                        <input type="email" id="mc4wp_email" name="EMAIL" placeholder="Your email address" required="" />
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </section>
                        </div>
                        <div className="col-sm-4">
                            <section className="widget widget_recent_entries animated flipInX slower clearfix">
                                <h5 className="widget-title">Recent Trips</h5>
                                <ul>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                    <li> <a href="index.html#">Hello world!</a> </li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-sm-4">
                            <section className="widget tour-gallery animated flipInX slower clearfix">
                                <h5 className="widget-title">Tour Gallery</h5>
                                <ul>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a></li>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a> </li>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a> </li>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a> </li>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a> </li>
                                    <li> <a href="index.html#"><img src="images/tour-gallery-img.jpg" alt="Tour"/></a> </li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-sm-4">
                            <section className="widget credit-cards-widget animated flipInX slower clearfix">
                                <h5 className="widget-title">supported credit cards</h5>
                                <img src="images/pyment-imgs.png" alt="Clients"/>
                            </section>
                        </div>
                        <div className="col-sm-4">
                            <section className="widget contact-widget animated flipInX slower clearfix">
                                <h5 className="widget-title">supported credit cards</h5>
                                <address>
                                    <strong> Address:</strong> 123 East West Corner Road,
                                    Melborne-606
                                    Australia.
                                </address>
                                <p className="phone-number"><strong>Phone:</strong>+61 0123 456 789</p>
                                <p className="email"><strong>Email:</strong> info@example.com</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-info text-center animated pulse">
                <p>Copyright © 2014 - Designed by Defatch</p>
            </div>
        </footer> 
        );
    }
}

export default Footer;
