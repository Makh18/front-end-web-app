import React from 'react'
import im9 from '../images/im9.jpg'
import im10 from '../images/im10.jpg'
import im11 from '../images/im11.jpg'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";
export default function Review() {
    return (
        <div class="review">
            <div class="container">
                <div class="row">
                    <motion.div animate={{ y: 40 }} transition={{ ease: "easeOut", duration: 2 }} class="col-md-4 box-review">
                        <div class="review-details">
                        <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ff5722' }} size="lg" />

                            <p>Accedebant enim eius asperitati, ubi inminuta vel laesa amplitudo imperii dicebatu ramplitudo imperii dicebatur amplitudo imperii dicebatur</p>
                             <h4> Aliane Xamire </h4>
                             <span>Los Angelos</span>
                        </div>
                    <img src={im9}></img>
                    </motion.div>
                    <div class="col-md-4 box-review">
                        <div class="review-details">
                        <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ff5722' }} size="lg" />

                            <p>Accedebant enim eius asperitati, ubi inminuta vel laesa amplitudo imperii dicebatu ramplitudo imperii dicebatur amplitudo imperii dicebatur</p>
                             <h4> Aliane Xamire </h4>
                             <span>Los Angelos</span>
                        </div>
                        <img src={im10}></img>
                    </div>
                    <motion.div animate={{ y: 40 }} transition={{ ease: "easeOut", duration: 2 }} class="col-md-4 box-review">
                        <div class="review-details">
                        <FontAwesomeIcon icon={faQuoteRight} style={{ color: '#ff5722' }} size="lg" />

                            <p>Accedebant enim eius asperitati, ubi inminuta vel laesa amplitudo imperii dicebatu ramplitudo imperii dicebatur amplitudo imperii dicebatur</p>
                             <h4> Aliane Xamire </h4>
                             <span>Los Angelos</span>
                        </div>
                        <img src={im11}></img>
                    </motion.div>
                </div>
            </div>
            
        </div>
    )
}
