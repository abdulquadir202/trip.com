import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
// import nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div>
			<Header/>
			<Slider/>	
			<section className="home-services section-separator animatedParent">
            <div className="container">
                <header className="section-header header-with-nav clearfix">
                    <h3 className="title pull-left animated growIn slower">awesome tour features</h3>
                    <a className="pull-right animated growIn slower" href="index.html#">SEE ALL</a>
                </header>
                <div className="row">
                    <div className="col-sm-4 col-xs-6">
                        <article className="service-var-1 animated fadeInRightShort">
                            <div className="wrapper text-center clearfix">
                                <figure className="feature-img clearfix">
                                    <a className=" u-url u-photo" href="index.html#"><img src="images/features-img.jpg" alt="image"/></a>
                                    <span className="overlay"></span>
                                    <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                        dolore semque laudant.</p>
                                </figure>
                            <span className="icon-wrapper">
                                <span className="icon">
                                    <i className="fa fa-hospital-o"></i>
                                </span>
                            </span>
                            </div>
                            <div className="contents clearfix">
                                <h5 className="entry-title p-name">Handpicked Hotels</h5>
                                <a href="index.html#" className="t-btn btn-red">book rooms now</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                        <article className="service-var-1 animated fadeInUpShort">
                            <div className="wrapper text-center clearfix">
                                <figure className="feature-img clearfix">
                                    <a className=" u-url u-photo" href="index.html#"><img src="images/features-img-2.jpg" alt="image"/></a>
                                    <span className="overlay"></span>
                                    <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                        dolore semque laudant.</p>
                                </figure>
                            <span className="icon-wrapper">
                                <span className="icon">
                                    <i className="fa fa-shield"></i>
                                </span>
                            </span>
                            </div>
                            <div className="contents clearfix">
                                <h5 className="entry-title p-name">Secure booking</h5>
                                <a href="index.html#" className="t-btn btn-red">book Ticket Now</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4 col-xs-6">
                        <article className="service-var-1 animated fadeInLeftShort">
                            <div className="wrapper text-center clearfix">
                                <figure className="feature-img clearfix">
                                    <a className=" u-url u-photo" href="index.html#"><img src="images/features-img-3.jpg" alt="image"/></a>
                                    <span className="overlay"></span>
                                    <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                        dolore semque laudant.</p>
                                </figure>
                            <span className="icon-wrapper">
                                <span className="icon">
                                   <i className="fa fa-money"></i>
                                </span>
                            </span>
                            </div>
                            <div className="contents clearfix">
                                <h5 className="entry-title p-name">Best price guarantee</h5>
                                <a href="index.html#" className="t-btn btn-red">Choose your offer</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>    </section>
       
            <section className="home-tour animatedParent">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6">
                        <header className="section-header header-with-nav first clearfix">
                            <h3 className="title pull-left animated growIn slower">Explore the World by type</h3>
                            <a className="pull-right animated growIn slower" href="index.html#">SEE ALL</a>
                        </header>
                        <div className="row">
                            <div className="col-md-6">
                                <article className="service-var-2 animated flipInY clearfix">
                                    <div className="icon-wrap">
                                        <i className="dashicons dashicons-universal-access"></i>
                                    </div>
                                    <div className="contents-wrap">
                                        <h5 className="entry-title p-name">Beach Holidays</h5>
                                        <small>4 tours available </small>
                                    </div>
                                    <a className="more" href="index.html#"><i className="fa fa-angle-right"></i></a>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="service-var-2 animated flipInY clearfix">
                                    <div className="icon-wrap">
                                        <i className="dashicons dashicons-editor-removeformatting"></i>
                                    </div>
                                    <div className="contents-wrap">
                                        <h5 className="entry-title p-name">City breaks</h5>
                                        <small>4 tours available </small>
                                    </div>
                                    <a className="more" href="index.html#"><i className="fa fa-angle-right"></i></a>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="service-var-2 animated flipInY clearfix">
                                    <div className="icon-wrap">
                                        <i className="dashicons dashicons-cloud"></i>
                                    </div>
                                    <div className="contents-wrap">
                                        <h5 className="entry-title p-name">Adventure Tour</h5>
                                        <small>6 tours available </small>
                                    </div>
                                    <a className="more" href="index.html#"><i className="fa fa-angle-right"></i></a>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="service-var-2 animated flipInY clearfix">
                                    <div className="icon-wrap">
                                        <i className="dashicons dashicons-admin-site"></i>
                                    </div>
                                    <div className="contents-wrap">
                                        <h5 className="entry-title p-name">Resort</h5>
                                        <small>5 tours available </small>
                                    </div>
                                    <a className="more" href="index.html#"><i className="fa fa-angle-right"></i></a>
                                </article>
                            </div>
                        </div>
                        <header className="section-header header-with-nav second clearfix">
                            <h3 className="title pull-left animated growIn slower">choose Your destination</h3>
                            <a className="pull-right animated growIn slower" href="index.html#">SEE ALL</a>
                        </header>
                        <div className="tour-by-destination animated flipInX slower clearfix">
                            <div className="item">
                                <article className="destination-item clearfix">
                                    <div className="map text-center">
                                        <h6 className="title">mykonos</h6>
                                        <img src="images/map-img.png" alt="map"/>
                                    </div>
                                    <div className="destination-detail">
                                        <img src="images/destination-img-1.jpg" alt="Destination"/>
                                        <ul className="arrow-list">
                                            <li><a href="index.html#">All Destinations</a></li>
                                            <li><a href="index.html#">Manly</a></li>
                                            <li><a href="index.html#">Parramatta</a></li>
                                            <li><a href="index.html#">Penrith</a></li>
                                        </ul>
                                        <div className="destination-content clearfix">
                                            <h5 className="title">Tropical Island</h5>
                                            <small> Cosmopolitan Atmosphere</small>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="item">
                                <article className="destination-item clearfix">
                                    <div className="map text-center">
                                        <h6 className="title">mykonos</h6>
                                        <img src="images/map-img.png" alt="map"/>
                                    </div>
                                    <div className="destination-detail">
                                        <img src="images/destination-img.jpg" alt="Destination"/>
                                        <ul className="arrow-list">
                                            <li><a href="index.html#">Parramatta</a></li>
                                            <li><a href="index.html#">Manly</a></li>
                                            <li><a href="index.html#">Penrith</a></li>
                                            <li><a href="index.html#">All Destinations</a></li>
                                        </ul>
                                        <div className="destination-content clearfix">
                                            <h5 className="title">Africain island</h5>
                                            <small> Cosmopolitan Atmosphere</small>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="item">
                                <article className="destination-item clearfix">
                                    <div className="map text-center">
                                        <h6 className="title">mykonos</h6>
                                        <img src="images/map-img.png" alt="map"/>
                                    </div>
                                    <div className="destination-detail">
                                        <img src="images/destination-img-3.jpg" alt="Destination"/>
                                        <ul className="arrow-list">
                                            <li><a href="index.html#">Manly</a></li>
                                            <li><a href="index.html#">All Destinations</a></li>
                                            <li><a href="index.html#">Penrith</a></li>
                                            <li><a href="index.html#">Parramatta</a></li>
                                        </ul>
                                        <div className="destination-content clearfix">
                                            <h5 className="title">mykonos island</h5>
                                            <small> Cosmopolitan Atmosphere</small>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="item">
                                <article className="destination-item clearfix">
                                    <div className="map text-center">
                                        <h6 className="title">mykonos</h6>
                                        <img src="images/map-img.png" alt="map"/>
                                    </div>
                                    <div className="destination-detail">
                                        <img src="images/destination-img-4.jpg" alt="Destination"/>
                                        <ul className="arrow-list">
                                            <li><a href="index.html#">Parramatta</a></li>
                                            <li><a href="index.html#">All Destinations</a></li>
                                            <li><a href="index.html#">Manly</a></li>
                                            <li><a href="index.html#">Penrith</a></li>
                                        </ul>
                                        <div className="destination-content clearfix">
                                            <h5 className="title">mykonos island</h5>
                                            <small> Cosmopolitan Atmosphere</small>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="booking-tabs animated flipInY slowest" role="tabpanel">

                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation">
                                    <a href="index.html#tab-hotel3" aria-controls="tab-hotel3" role="tab" data-toggle="tab"><i className="fa fa-calendar"></i></a>
                                </li>
                                <li role="presentation">
                                    <a href="index.html#tab-train3" aria-controls="tab-train3" role="tab" data-toggle="tab"><i className="fa fa-bus"></i></a>
                                </li>
                                <li role="presentation">
                                    <a href="index.html#tab-flight3" aria-controls="tab-flight3" role="tab" data-toggle="tab"><i className="fa fa-plane"></i></a>
                                </li>
                                <li role="presentation" className="active">
                                    <a href="index.html#tab-booking3" aria-controls="tab-booking3" role="tab" data-toggle="tab"><i className="fa fa-building-o"></i></a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane" id="tab-hotel3">
                                    <div className="booking-criteria">
                                        <h4>Book hotel</h4>
                                        <ul>
                                            <li><i className="glyphicon glyphicon-ok"></i> No.1 for booking in our surroundings</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> No hidden costs</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> Attractive offers with price advantage</li>
                                        </ul>
                                    </div>
                                    <div className="bookingform">
                                        <form action="index.html#">
                                            <fieldset>
                                                <div className="field-separator clearfix">
                                                    <label>Destination</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions" />
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>Arrival</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>Departure Date</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="field-separator clearfix">
                                                <label for="rooms">Rooms</label>
                                                <select className="form-control" id="rooms">
                                                    <option>1 room</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>

                                            </div>
                                            <div className="field-separator clearfix">
                                                <label for="adults-2">Adults</label>
                                                <select className="form-control" id="adults-2" >
                                                    <option>3 adults</option>
                                                    <option>3 adults</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>

                                            </div>
                                            <div className="field-separator clearfix">
                                                <label for="children-2">Childrens</label>
                                                <select className="form-control" id="children-2">
                                                    <option>5 childrens</option>
                                                    <option>5 childrens</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>
                                            </div>
                                            <div className="clearfix">
                                                <input type="submit" value="Find Hotel" className="t-btn btn-red" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab-train3">
                                    <div className="booking-criteria">
                                        <h4>Book hotel</h4>
                                        <ul>
                                            <li><i className="glyphicon glyphicon-ok"></i> No.1 for booking in our surroundings</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> No hidden costs</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> Attractive offers with price advantage</li>
                                        </ul>
                                    </div>
                                    <div className="bookingform">
                                        <form action="index.html#">
                                            <fieldset>
                                                <div className="field-separator clearfix">
                                                    <label>From</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions" />
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>To</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions" />
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>OutBound</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>InBound</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="field-separator clearfix">
                                                <label for="adults-3">Adults</label>
                                                <select className="form-control" id="adults-3" >
                                                    <option>3 adults</option>
                                                    <option>3 adults</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>

                                            </div>
                                            <div className="field-separator clearfix">
                                                <label for="children-3">Childrens</label>
                                                <select className="form-control" id="children-3">
                                                    <option>5 childrens</option>
                                                    <option>5 childrens</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>
                                            </div>
                                            <div className="clearfix">
                                                <input type="submit" value="Search Train" className="t-btn btn-red" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="tab-flight3">
                                    <div className="booking-criteria">
                                        <h4>Book hotel</h4>
                                        <ul>
                                            <li><i className="glyphicon glyphicon-ok"></i> No.1 for booking in our surroundings</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> No hidden costs</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> Attractive offers with price advantage</li>
                                        </ul>
                                    </div>
                                    <div className="bookingform">
                                        <form action="index.html#">
                                            <fieldset>
                                                <div className="field-separator clearfix">
                                                    <label>From</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions" />
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>To</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions" />
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>OutBound</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>InBound</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="field-separator clearfix">
                                                <label for="adults-1">Adults</label>
                                                <select className="form-control" id="adults-1">
                                                    <option>3 adults</option>
                                                    <option>3 adults</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>

                                            </div>
                                            <div className="field-separator clearfix">
                                                <label for="children-1">Childrens</label>
                                                <select className="form-control" id="children-1">
                                                    <option>5 childrens</option>
                                                    <option>5 childrens</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>
                                            </div>
                                            <div className="clearfix">
                                                <input type="submit" value="Search Flight" className="t-btn btn-red" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane active" id="tab-booking3">
                                    <div className="booking-criteria">
                                        <h4>tour Book</h4>
                                        <ul>
                                            <li><i className="glyphicon glyphicon-ok"></i> No.1 for booking in our surroundings</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> No hidden costs</li>
                                            <li><i className="glyphicon glyphicon-ok"></i> Attractive offers with price advantage</li>
                                        </ul>
                                    </div>
                                    <div className="bookingform">
                                        <form action="index.html#">
                                            <fieldset>
                                                <div className="field-separator clearfix">
                                                    <label>Destination</label>
                                                    <input type="text" className="form-control" placeholder="Enter place / regions"/>
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>Check in</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div className="field-separator clearfix">
                                                    <label>Check out</label>
                                                    <div className="input-group input-append date date-picker" >
                                                        <input type="text" className="form-control" name="date" />
                                                        <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="field-separator clearfix">
                                                <label>Name <span>*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="field-separator clearfix">
                                                <label>Email <span>*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="field-separator field-inline clearfix">
                                                <select className="form-control" id="adults" >
                                                    <option>adults</option>
                                                    <option>3 adults</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>
                                                <select className="form-control" id="children">
                                                    <option>childrens</option>
                                                    <option>5 childrens</option>
                                                    <option>Your destination</option>
                                                    <option>Your destination</option>
                                                </select>
                                            </div>
                                            <div className="clearfix">
                                                <input type="submit" value="Book Now" className="t-btn btn-red" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="home-special-offers animatedParent clearfix">
            <div className="container">
                <header className="section-header header-with-nav clearfix">
                    <h3 className="title pull-left animated growIn">Latest Offers Tours</h3>
                    <a className="pull-right animated growIn" href="index.html#">see more offers</a>
                </header>
                <div className="tour-carousel animated flipInX clearfix">
                    <article className="tour-post">
                        <i className="circle-icon"></i>
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-4.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-1.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-2.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-3.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-4.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-5.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-5.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                    <article className="tour-post">
                        <header className="tour-post-header clearfix">
                            <span className="tour-price pull-left">$299.00</span>
                            <span className="tour-price-off pull-right">30% OFF</span>
                            <i className="circle-icon"></i>
                        </header>
                        <div className="tour-contents clearfix">
                            <figure className="tour-feature-img">
                                <img src="images/tour-carousel-img-3.jpg" alt="Image"/>
                            </figure>
                            <h5 className="entry-title p-name">Thai island hopper east</h5>
                            <a className="more-details u-url" href="index.html#">See tour details <i className="fa fa-angle-right"></i></a>
                        </div>
                    </article>
                </div>
            </div>
        </section>	
			<Footer/>		

      </div>
    );
  }
}

export default App;
