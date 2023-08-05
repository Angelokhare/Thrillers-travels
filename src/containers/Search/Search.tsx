import React from 'react';
import FlightCard from '../FlightCard/FlightCard'
import './Search.scss';

const Search: React.FC = () => {
  return (
    <div className="search-container">
      <div className="navbar">
        <div className="search-div">
          <p className='serach-results'>Search results</p>
          <p className='found-results'>We found 15 results</p>
        </div>
        <div className="buttons">
          <button>CHEAPEST</button>
          <button>SHORTEST</button>
          <button style={{backgroundColor : "#263DC5", color : "#fff"}}>RECOMENDED</button>
        </div>
      </div>
      <div className="items">
        <p>London</p>
        {/* Add your image */}
        <img src="../icons/arrow-left.png" alt="Image" />
        <p>New York</p>
      </div>
      <FlightCard />
    </div>
  );
};

export default Search;
