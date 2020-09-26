import React, { useState} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import InfiniteScroll from 'react-infinite-scroller';

import './App.css';

function App() {
 

  const [length, updateLength] = useState(10);
  const [hasMoreItems, updateHasmore] = useState(true);

 const  showItems =()=> {
    let items = [];
    for(let i = 0 ; i< length;i=i+2){
      items.push(
                      <div className="row">
                      <div className="column" >
                                    <div className="content-box">
                                              <div id="ribbon-container">
                                                  <p id="ribbon">promoted</p>
                                              </div>
                                  </div>
                                  <div className="Rectangle-3">
                                    <p id="rating">3.9/<span>5</span></p>
                                    <p>Very Good</p>
                                  </div>
                
                                  <div className="Best-college-2018">
                                      <p>Best College 2018</p>
                                  </div>
                
                                  <div className="Rectangle-2">
                                      <p>2kms away</p>
                                  </div>
                
                            
                                    <p className="ranking"># 7 in 260 colleges in north campus</p>
                                    
                                    <p className="collegeName"> Hansraj College Delhi University</p> 
                
                                    <div className="starRating">
                
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star non"></span>
                                    </div>
                
                                    <p className="orignalFees">&#8377;68893</p>
                                    <div id="content">
                
                                    <div className="discount-label red"> <span>20</span> </div>
                                      
                
                
                                        </div>
                
                                  <p className="Near-Vishwavidyalya-Metro-Station">Near Vishwavidyalya Metro Station</p>
                                  <p className="-Kms-away-from-bus-stand">2 Kms away from bus stand</p>
                
                                  <div className="feeBox">
                                    <p className="fee">&#8377;5,768</p>
                                  </div>
                                  <p className="sem">Per Semester (3months)</p>
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
                                    <p id="rating">3.9/<span>5</span></p>
                                    <p>Very Good</p>
                                  </div>
                
                                  <div className="Best-college-2018">
                                      <p>Best College 2018</p>
                                  </div>
                
                                  <div className="Rectangle-2">
                                      <p>2kms away</p>
                                  </div>
                
                            
                                    <p className="ranking"># 7 in 260 colleges in north campus</p>
                                    
                                    <p className="collegeName"> Hansraj College Delhi University</p> 
                
                                    <div className="starRating">
                
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star non"></span>
                                    </div>
                
                                    <p className="orignalFees">&#8377;68893</p>
                                    <div id="content">
                
                                    <div className="discount-label red"> <span>20</span> </div>
                                      
                
                
                                        </div>
                
                                  <p className="Near-Vishwavidyalya-Metro-Station">Near Vishwavidyalya Metro Station</p>
                                  <p className="-Kms-away-from-bus-stand">2 Kms away from bus stand</p>
                
                                  <div className="feeBox">
                                    <p className="fee">&#8377;5,768</p>
                                  </div>
                                  <p className="sem">Per Semester (3months)</p>
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
    if( length <100 ){
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
