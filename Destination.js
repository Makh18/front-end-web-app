import React from 'react'
import im3 from '../images/im3.jpg'
import im2 from '../images/im2.jpg'
import im1 from '../images/im1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope,faStar,faStarHalfAlt,faMap, faMoon,faSun} from "@fortawesome/free-solid-svg-icons";

export default function Destination() {
    return (
        <div className="featured"> 
         <div class="container">
                <div class="row">
                    <div class="col-md-4 box1">
                 <div className="myfeatured">
                    <img className="myimg3" src={im3}></img>
                    <div className="price"><span>price 78$</span></div>
                    <div className="rating">
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: '#ff5722' }} size="lg" />

                    </div>
                   </div>
                   <div className="featured-details">
                       <h4>Italie</h4>
                       <p>Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. 
                           ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et
                            feritates.</p>
                            <FontAwesomeIcon icon={faSun} style={{ color: '#ff5722'}} size="lg" /><span>Italie</span>
                            <FontAwesomeIcon icon={faMoon} style={{ color: '#ff5722' }} size="lg" /><span> 3 Days</span>
                           <FontAwesomeIcon icon={faMap} style={{ color: '#ff5722' }} size="lg" /><span>2 Night</span>


                   </div>
                   
                   </div>
                   <div className="col-md-4 box1">
                 <div className="myfeatured">
                    <img className="myimg3" src={im2}></img>
                    <div className="price"><span>price 98$</span></div>
                    <div className="rating">
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: '#ff5722' }} size="lg" />

                    </div>
                   </div>
                   <div className="featured-details">
                       <h4>Dubai</h4>
                       <p>Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. 
                           ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et
                            feritates.</p>
                            <FontAwesomeIcon icon={faSun} style={{ color: '#ff5722'}} size="lg" /><span>Dubai</span>
                            <FontAwesomeIcon icon={faMoon} style={{ color: '#ff5722' }} size="lg" /><span> 4 Days</span>
                           <FontAwesomeIcon icon={faMap} style={{ color: '#ff5722' }} size="lg" /><span>3 Night</span>


                   </div>
                   
                   </div>
                   <div className="col-md-4 box1">
                 <div className="myfeatured">
                    <img className="myimg3" src={im1}></img>
                    <div className="price"><span>price 75$</span></div>
                    <div className="rating">
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStar} style={{ color: '#ff5722' }} size="lg" />
                    <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: '#ff5722' }} size="lg" />

                    </div>
                   </div>
                   <div className="featured-details">
                       <h4>London</h4>
                       <p>Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. 
                           ire enim ipse compellebatur ad militem, quem exagitabat inopia simul et
                            feritates.</p>
                            <FontAwesomeIcon icon={faSun} style={{ color: '#ff5722'}} size="lg" /><span>London</span>
                            <FontAwesomeIcon icon={faMoon} style={{ color: '#ff5722' }} size="lg" /><span> 3 Days</span>
                           <FontAwesomeIcon icon={faMap} style={{ color: '#ff5722' }} size="lg" /><span>2 Night</span>


                   </div>
                   
                   </div>
                   </div>
                   </div>
               
               
        
    

    </div>
    )
}
