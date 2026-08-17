import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Navigate import karein
import './FilterRow.css';

const FilterRow = () => {
  const navigate = useNavigate(); // 2. Hook ko initialize karein

  // 3. Jab bhi koi option select hoga, yeh function chalega
  const handleCourseChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'btech') {
      navigate('/btech'); // B.Tech select karne par /btech route par bhej dega
    } else if (selectedValue === 'mtech') {
      navigate('/mtech'); // M.Tech ke liye
    } else if (selectedValue === 'bsc') {
      navigate('/bsc'); // B.Sc ke liye
    }
  };

  return (
    <div className="filter-row-container">
      {/* Column 1: Course Select */}
      <div className="filter-col">
        {/* onChange event lagaya gaya hai */}
        <select className="filter-select" onChange={handleCourseChange}>
          <option value="">Course</option>
          <option value="btech">B.Tech</option>
          <option value="mtech">M.Tech</option>
          <option value="bsc">B.Sc</option>
        </select>
      </div>

      {/* Baaki ke 3 columns */}
      <div className="filter-col">
        
        <select className="filter-select">
          <option value="">Semester</option>
          <option value="sem1">Semester 1</option>
          <option value="sem2">Semester 2</option>
        </select>
      </div>

      <div className="filter-col">
        
        <select className="filter-select">
          <option value="">Subject</option>
          <option value="math">Mathematics</option>
          <option value="ds">Data Structures</option>
        </select>
      </div>

      <div className="filter-col">
        
        <select className="filter-select">
          <option value="">Type</option>
          <option value="notes">Notes</option>
          <option value="pyq">PYQ</option>
        </select>
      </div>
    </div>
  );
};

export default FilterRow;