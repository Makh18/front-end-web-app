import React from 'react'
import im4 from '../images/im4.jpg'
import im5 from '../images/im5.jpg';
import im6 from '../images/im6.jpg'
import im7 from '../images/im7.jpg'

export default function Gallery() {
    return (
        <div className="mygallery">
            <h2>Traveling Galery</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="gallery-box">
                        <img src={im4}/>
                         <h5>Dubai</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gallery-box">
                        <img src={im5}/>
                         <h5>Istanbul</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gallery-box">
                        <img src={im6}/>
                         <h5>London</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="gallery-box">
                        <img src={im7}/>
                         <h5>Paris</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
