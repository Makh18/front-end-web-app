import React from 'react'

export default function Banner() {
    return (
        <div className="mybanner" style={{
            backgroundImage: "url(" + "https://images.pexels.com/photos/1769615/pexels-photo-1769615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', height: '500px',
            backgroundAttachment: 'fixed'
                              }}>
            <div className="banner-hilight">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                     <h3>Get 30% in top ten destination</h3>
                     <p>At nunc si ad aliquem bene nummatum tumentemque</p>
                    </div>
                    <div className="col-md-4">
                    <button type="button" className="booking-btn">Book Now</button>
                    </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}
