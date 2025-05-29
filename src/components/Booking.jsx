import React from 'react';
import './Booking.css';

function Booking() {
    return(
        <>
        <div className="booking-content">
        <h1>Book a class</h1>
        <iframe 
  src="https://bookwhen.com/helenmanenteyoga/iframe"
  style={{ display: 'block', border: 'none', width: '100%', height: '900px' }}
  title="Helen Manente Yoga" 
/>    
</div>  
        </>
    )
}

export default Booking;