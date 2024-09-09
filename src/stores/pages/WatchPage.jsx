import React from 'react';
import { watchData } from '../data/watch';
import NavBar from '../components/NavBar';

const WatchPage = () => {
  return (
    <>
      <NavBar />
      <div className='pageSection'>
        {watchData.map((item, index) => (
          <div key={index}> {/* Unique key for each item */}
            <div className="pageImg">
              <img src={item.image} alt={`${item.company} ${item.model}`} /> {/* Improved alt attribute */}
            </div>
            <div className="proModel">
              {item.company}, {item.model}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchPage;
