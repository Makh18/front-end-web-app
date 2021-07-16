import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPlaneSlash,faEnvelopeOpen,faHome,faPhone,faHeart} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <div className="my-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 box1-footer">
                   <div><FontAwesomeIcon icon={faPlaneSlash} style={{ color: '#ffffff' }} size="2x" /><span style={{ color: '#ffffff',fontSize:'20px'}}>Traveling</span>                   </div> 
                   <p>Accedebant enim eius asperitati, ubi inminuta vel laesa amplitudo imperii dicebatu ramplitudo imperii dicebatur amplitudo imperii dicebatur</p>
                    </div>
                    <div className="col-md-3 box-footer">
                        <h4>Features</h4>
                        <h6>Enim & Inminuta</h6>
                        <h6>Review & Aspectia</h6>
                        <h6>Examo & Pofolow</h6>


                    </div>
                    <div className="col-md-3 contact">
                        <h4>Contact</h4>
                    <div className="font"><FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>+216 00 000 001</span>                   </div> 
                    <div className="font"><FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>TraveL.agency@gmail.com</span>                   </div> 
                    <div className="font"><FontAwesomeIcon icon={faHome} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>22 street of av 6020</span>                   </div> 


                    </div>
                    <div className="col-md-3 contact">
                    <h4>Follow us</h4>
                    <div className="font"><FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>Facebook</span>                   </div> 
                    <div className="font"><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>Twiter</span>                   </div> 
                    <div className="font"><FontAwesomeIcon icon={faYoutube} style={{ color: '#ffffff' }} size="x" /><span style={{ color: '#ffffff'}}>Youtube</span>                   </div> 
                    </div>

                </div>
                <hr></hr>
                <p><p> Copyright © WEb 2020 All right reserved| web site developped by Mabrouka khalfa</p>
</p>
            </div>
        </div>
    )
}
