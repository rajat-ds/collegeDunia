import React from 'react';

export function CollegeList1(props) {
    return (
        <div className="column" >
                            {props.college.promoted?
                                <div className="content-box">
                                        <div id="ribbon-container">
                                            <p id="ribbon">promoted</p>
                                        </div>
                                </div>
                              :null}
                            <div className="Rectangle-3">
                                <p id="rating">{props.college.rating}/<span>5</span></p>
                                <p>{props.college.rating_remarks}</p>
                            </div>

                            <div className="Best-college-2018">
                                   <p>{props.college.tags[0]}</p>
                            </div>

                            <div className="Rectangle-2">
                                    <p>{props.college.tags[1]}</p>
                            </div>


                            <p className="ranking">#{props.college.ranking}</p>
                            
                            <p className="collegeName">{props.college.college_name}</p>

                            <div className="starRating">

                                    <span  className={ props.college.rating >=1? "fa fa-star checked":"fa fa-star non"}></span>
                                    <span  className={ props.college.rating >=2? "fa fa-star checked":"fa fa-star non"}></span>
                                    <span  className={ props.college.rating >=3? "fa fa-star checked":"fa fa-star non"}></span>
                                    <span  className={ props.college.rating >=4? "fa fa-star checked":"fa fa-star non"}></span>
                                    <span  className={ props.college.rating >=5? "fa fa-star checked":"fa fa-star non"}></span>
                            </div>

                            <p className="orignalFees">&#8377;{props.college.original_fees}</p>
                            <div id="content">
                                   <div className="discount-label red">   </div>
                            </div>

                           <p className="Near-Vishwavidyalya-Metro-Station">{props.college.nearest_place[0]}</p>
                           <p className="-Kms-away-from-bus-stand">{props.college.nearest_place[1]}</p>

                            <div className="feeBox">
                                <p className="fee">&#8377;5,768</p>
                            </div>
                             <p className="sem">{props.college.fees_cycle}</p>
                             <p className="match"><span className="matchPercent">93% Match : </span> <span className="distance">2.5kms</span> from GTB Nagar,<span className="distance"> 7 Kms </span>
                              from Rajiv Chowk</p>
                            <div className="Rectangle-4">
                                <p className="offer">Flat <span className="distance">Rs</span><span className="matchPercent">2,000</span> <span className="distance">off + upto Rs </span> <span className="matchPercent">500 </span> <span className="distance">wallet! to avail... </span> <span className="matchPercent">LOGIN</span> </p>
                            </div>
                              <p className="cancel">Free Cancellation  .  Free Wi-Fi</p>
      

        </div>
    );
}

export default CollegeList1;







