import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate, redirect, useLocation  } from 'react-router-dom'

import './Form.scss';





const Form: React.FC = () => {
  const [depart, setDepart] = useState('');
  const [arrive, setArrive] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [classValue, setClassValue] = useState('');
  const [passengers, setPassengers] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace this with your form submission logic
    // For example, you can send the form data to an API

    // After form submission logic, reset form values

    setDepart('');
    setArrive('');
    setDepartureDate('');
    setReturnDate('');
    setClassValue('');
    setPassengers('');


    navigate("/")
  };

  return (
    <div className="form-container">
      <div className="icon">
        {/* Replace with your icon */}
        <a href="https://thrillers-travels.netlify.com/"><img src="../home-icon.png" alt="Icon" /></a>
      </div>
      <div className="info">
        <div style={{backgroundColor : "#537943"}} className="info-item">
          {/* Replace with your image */}
          <img style={{display : "block"}} src="../icons/plane-white.png" alt="Image 1" />
          <img className='img2' style={{display : "none"}} src="../icons/plane-grey.png" alt="Image 1" />

          <p style={{color : "#fff"}}>Flight</p>
        </div>

        <div className="info-item">
          {/* Replace with your image */}
          <img src="../icons/train-grey.png" alt="Image 1" />
          <img className='img2' src="../icons/train-white.png" alt="Image 1" />

          <p>Trains</p>
        </div>       
        
        <div className="info-item">
          {/* Replace with your image */}
          <img src="../icons/ship-grey.png" alt="Image 1" />
          <img className='img2' src="../icons/ship-white.png" alt="Image 1" />

          <p>Ship</p>
        </div>

        <div className="info-item">
          {/* Replace with your image */}
          <img src="../icons/car-grey.png" alt="Image 1" />
          <img className='img2' src="../icons/car-white.png" alt="Image 1" />

          <p>Cars</p>
        </div>
        {/* Add two more info-items */}
      </div>
      <p className='form-header'>Best flight deals with</p>
      <p className="brand">Thrillers Travels</p>
      <form>
        {/* <div className="input-group"> */}

{/* //^ kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk          Depart From */}
          <label htmlFor="depart">Depart from</label>

          <div className='form-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/flight-up.png" alt="" /></button>

          <input
            className='location-input'
            type="text"
            id="depart"
            name="depart"
            value={depart}
            onChange={e => setDepart(e.target.value)}
            placeholder="London - All Airports, England, UK"
            required />
          {/* Add image */}
          </div> 


{/* //^ kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk          Arrive at */}
          <label htmlFor="arrive">Arrive at</label>
          <div className='form-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/flight-down.png" alt="" /></button>

          <input
            className='location-input'
            type="text"
            id="arrive"
            name="arrive"
            value={arrive}
            onChange={e => setArrive(e.target.value)}
            placeholder="New York - All Airports, New York, USA"
            required />
          {/* Add image */}
          </div> 



        {/* </div> */}
 {/* //^ kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk          Date */}

        {/* Add similar input-group for 'arrive' */}

        <div className='div-display'>

<div className='departure-padding'>
          <label htmlFor="departureDate">Departure Date</label>
          <div className='date-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/calender-grey.png" alt="" /></button>
          <input
            className='location-input'
              type="text"
              id="departureDate"
              name="departureDate"
              value={departureDate}
              onChange={e => setDepartureDate(e.target.value)}
              placeholder="11/11/2019"
            required />
          {/* Add image */}
          </div> 

</div>


<div>

          <label htmlFor="returnDate">Return Date</label>
          <div className='date-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/calender-grey.png" alt="" /></button>
          <input
            className='location-input'
              type= "text"
              id="returnDate"
              name="returnDate"
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
              placeholder="30/11/2019"
            required />
          {/* Add image */}
          </div> 

</div>

</div>




 {/* //^ kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk          Booking */}
<div className='div-display'>

<div className='booking-padding'>
          <label htmlFor="class">Class</label>
          <div className='class-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/class.png" alt="" /></button>
          
            <select id="class" name="class" className='location-input' defaultValue=""
              value={classValue} // Set the value from state
              onChange={e => setClassValue(e.target.value)}
            >
                
            <option value="" disabled hidden>
                Select
              </option>
              <option value="economy">Economy</option>
              <option value="prenium economy">Prenium Economy</option>
              <option value="business/ club<">Business/ Club</option>
              <option value="first">First</option>

              required
            </select>
          {/* Add image */}
          </div> 

</div>


<div>

          <label htmlFor="passangers">Passangers</label>
          <div className='class-div'>  

          <button type="button" style={{ borderRight:"none", backgroundColor: "#fff", borderRadius: "5px 0px 0px 5px"}} className="icon-button"><img src="../icons/person.png" alt="" /></button>

          <select id="passangers" name="passangers" className='location-input' defaultValue=""
            value={passengers} // Set the value from state
            onChange={e => setPassengers(e.target.value)}
          >
                
                <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  required
                </select>
          {/* Add image */}
          </div> 

</div>

</div>

 
<div className='flight-button-div'>
<button type='submit' className="find-flight-button">FIND FLIGHT</button>
</div>
      </form>
      <hr className="footer-line" />

    </div>
  );
};

export default Form;
