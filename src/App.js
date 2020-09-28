import React, { useState} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import InfiniteScroll from 'react-infinite-scroller';
import {collegeList} from './college';
import {CollegeList1} from './components/CollegeList1';
import './App.css';

function App() {
 
  const [colleges,updateCollege] = useState(collegeList.colleges);
  const [length, updateLength] = useState(10);
  const [hasMoreItems, updateHasmore] = useState(true);
  
 /**
  * this function is used to show items
  */
 const  showItems =()=> {
    let items = [];
    for(let i = 0 ; i< length;i=i+2){
      items.push(
                      <div className="row">
                            <CollegeList1 college={colleges[i]}/>
                            <CollegeList1 college={colleges[i+1]}/>
                    </div>
               );
    }
    return items;
  }


 /**
  * this function is used to check whether more elements are there or not
  */
  const loadMore =()=> {     
    if( length < colleges.length ){
      setTimeout(() => { 
        updateLength(length+10)}, 1000);
    }
    else{
      updateHasmore(false)
    }
  

}

 /**
  * rendering function
  */
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
