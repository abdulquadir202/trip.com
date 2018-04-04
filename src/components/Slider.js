import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <div className="main-slider-wrap">
            <div className="main-slider">
                <div className="item">
                    <img src="images/slide1.jpg" alt="one"/>
                    <div className="slide-details clearfix">
                        <h3 className="title"><span>Have adventure trip with</span><span> tropical </span></h3>
                    </div>
                </div>
                <div className="item">
                    <img src="images/slide2.jpg" alt="one"/>
                    <div className="slide-details clearfix">
                        <h3 className="title"><span>Have adventure trip with</span><span> tropical </span></h3>
                    </div>
                </div>
                <div className="item">
                    <img src="images/slide3.jpg" alt="one"/>
                    <div className="slide-details clearfix">
                        <h3 className="title"><span>Have adventure trip with</span><span> tropical </span></h3>
                    </div>
                </div>
            </div>

            <form id="adv-search" action="index.html#">
                <div className="container">
                    <fieldset>
                        <legend><span>Find the Tour</span></legend>
                        <div className="form-wrap clearfix" >
                            <select className="form-control" id="places" >
                                <option>Africa</option>
                                <option>India</option>
                                <option>America</option>
                                <option>Russia</option>
                            </select>
                            <div className="input-group input-append date date-picker" >
                                <input type="text" className="form-control" name="date" value="CHECK-IN DATE" />
                                <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                            </div>
                            <div className="input-group input-append date date-picker" >
                                <input type="text" className="form-control" name="date" value="CHECK-OUT DATE" />
                                <span className="input-group-addon add-on"><i className="fa fa-calendar"></i></span>
                            </div>
                            <select className="form-control" id="budget" >
                                <option>MAX-BUDGET</option>
                                <option>$300</option>
                                <option>$400</option>
                                <option>$500</option>
                                <option>$600</option>
                            </select>
                            <input name="search-tour" type="submit" value="Search Tours" />
                        </div>

                    </fieldset>
                </div>
            </form>
        </div>
        
        );
}
}




export default Slider;
