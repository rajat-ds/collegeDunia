import React, { useState} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import InfiniteScroll from 'react-infinite-scroller';
import {collegeList} from './college';

import './App.css';

function App() {
 
  const [colleges,updateCollege] = useState(collegeList.colleges);
  const [length, updateLength] = useState(10);
  const [hasMoreItems, updateHasmore] = useState(true);

 const  showItems =()=> {
    let items = [];
    for(let i = 0 ; i< length;i=i+2){
      items.push(
                      <div className="row">
                      <div className="column" >
                                    {colleges[i].promoted?
                                    <div className="content-box">
                                              <div id="ribbon-container">
                                                  <p id="ribbon">promoted</p>
                                              </div>
                                  </div>
                                  :null}
                                  <div className="Rectangle-3">
                                     <p id="rating">{colleges[i].rating}/<span>5</span></p>
                                    <p>{colleges[i].rating_remarks}</p>
                                  </div>
                
                                  <div className="Best-college-2018">
                                  <p>{colleges[i].tags[0]}</p>
                                  </div>
                
                                  <div className="Rectangle-2">
                                         <p>{colleges[i].tags[1]}</p>
                                  </div>
                
                            
                                    <p className="ranking">{colleges[i].ranking}</p>
                                    
                                    <p className="collegeName">{colleges[i].college_name}</p>
                
                                    <div className="starRating">
                
                                            <span  className={ colleges[i].rating >=1? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=2? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=3? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=4? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=5? "fa fa-star checked":"fa fa-star non"}></span>
                                    </div>
                
                                    <p className="orignalFees">&#8377;{colleges[i].original_fees}</p>
                                    <div id="content">
                
                                    <div className="discount-label red"> <span>20</span> </div>
                                      
                
                
                                        </div>
                
                                   <p className="Near-Vishwavidyalya-Metro-Station">{colleges[i].nearest_place[0]}</p>
                                  <p className="-Kms-away-from-bus-stand">{colleges[i].nearest_place[1]}</p>
                
                                  <div className="feeBox">
                                    <p className="fee">&#8377;5,768</p>
                                  </div>
                                  <p className="sem">{colleges[i].fees_cycle}</p>
                                  <p className="match"><span className="matchPercent">93% Match : </span> <span className="distance">2.5kms</span> from GTB Nagar,<span className="distance"> 7 Kms </span>
                                      from Rajiv Chowk</p>
                                  <div className="Rectangle-4">
                                      <p className="offer">Flat <span className="distance">Rs</span><span className="matchPercent">2,000</span> <span className="distance">off + upto Rs </span> <span className="matchPercent">500 </span> <span className="distance">wallet! to avail... </span> <span className="matchPercent">LOGIN</span> </p>
                                  </div>
                                <p className="cancel">Free Cancellation  .  Free Wi-Fi</p>
                                  
                
                      </div>
                      <div className="column" >
                      <div className="content-box">
                                              <div id="ribbon-container">
                                                  <p id="ribbon">promoted</p>
                                              </div>
                                  </div>
                                  <div className="Rectangle-3">
                                  <p id="rating">{colleges[i+1].rating}/<span>5</span></p>
                                    <p>{colleges[i+1].rating_remarks}</p>
                                  </div>
                
                                  <div className="Best-college-2018">
                                        <p>{colleges[i+1].tags[0]}</p>
                                  </div>
                
                                  <div className="Rectangle-2">
                                        <p>{colleges[i+1].tags[1]}</p>
                                  </div>
                
                            
                                     <p className="ranking">{colleges[i].ranking}</p>
                                    
                                    <p className="collegeName">{colleges[i+1].college_name}</p> 
                
                                    <div className="starRating">
                
                                    <span  className={ colleges[i+1].rating >=1? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=2? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=3? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=4? "fa fa-star checked":"fa fa-star non"}></span>
                                            <span  className={ colleges[i].rating >=5? "fa fa-star checked":"fa fa-star non"}></span>
                                    </div>
                
                                    <p className="orignalFees">&#8377;{colleges[i+1].original_fees}</p>
                                    <div id="content">
                
                                    <div className="discount-label red"> <span>20</span> </div>
                                      
                
                
                                        </div>
                
                                  <p className="Near-Vishwavidyalya-Metro-Station">{colleges[i+1].nearest_place[0]}</p>
                                  <p className="-Kms-away-from-bus-stand">{colleges[i+1].nearest_place[1]}</p>
                
                                  <div className="feeBox">
                                    <p className="fee">&#8377;5,768</p>
                                  </div>
                                  <p className="sem">{colleges[i+1].fees_cycle}</p>
                                  <p className="match"><span className="matchPercent">93% Match : </span> <span className="distance">2.5kms</span> from GTB Nagar,<span className="distance"> 7 Kms </span>
                                      from Rajiv Chowk</p>
                                  <div className="Rectangle-4">
                                      <p className="offer">Flat <span className="distance">Rs</span><span className="matchPercent">2,000</span> <span className="distance">off + upto Rs </span> <span className="matchPercent">500 </span> <span className="distance">wallet! to avail... </span> <span className="matchPercent">LOGIN</span> </p>
                                  </div>
                                <p className="cancel">Free Cancellation  .  Free Wi-Fi</p>
                      </div>
                      
                </div>
      );
    }
   
    return items;
  }



  const loadMore =()=> {     
    if( length < colleges.length ){
      setTimeout(() => { 
        updateLength(length+10)}, 1000);
    }
    else{
      updateHasmore(false)
    }
  

}


  return (
    <div >
 
      <header>
   
        <h1 className="Colleges-in-North-India">Colleges in North India</h1>
       </header>
       <InfiniteScroll
    pageStart={0}
    loadMore={loadMore.bind(this)}
    hasMore={hasMoreItems}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
{showItems()}{" "}
</InfiniteScroll>

 

         
   

    </div>
  );
}

export default App;
