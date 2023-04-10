import React from 'react';

const FeaturedJob = ({data,showAllData,handleSeeMoreClick}) => {
    return (
        <div>
          <div>
      {data.slice(0, 4).map(item => (
        <div key={item.id}>
          <p>{item.companyName}</p>
          <p>{item.location}</p>
        </div>
      ))}
      {!showAllData && (
        <button onClick={handleSeeMoreClick}>See More</button>
      )}
      {showAllData && (
        <div>
          {data.map(item => (
            <div key={item.id}>
              <p>{item.location}</p>
              <p>{item.salary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
        </div>
    );
};

export default FeaturedJob;