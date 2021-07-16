import React from 'react'
import './Style.css';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlaneSlash} from "@fortawesome/free-solid-svg-icons";
import NavBar from './NavBar'

export default function Header() {
    return (
        <div style={{ backgroundImage: "url(https://images.pexels.com/photos/1320679/pexels-photo-1320679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)", height: '100vh', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
              <div style={{ background: 'rgba(0,0,0,0.5)', height: '100vh'}}>
              <div classeName="header">
            <div className="container c1">
               
            </div>
            <h1>Travel in the World</h1>
            <p>omnibus merces opimas velut viles opimas</p>
            
            <Form>
            <InputGroup className="mb-3 input-group">
                        <FormControl className="cc"
                            placeholder="search country or city"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
            <Button type="submit" variant="outline-secondary" className="mybt">Search</Button>
            </InputGroup.Append>
            </InputGroup>

            </Form>
            </div>
               </div>
               </div>
               
        
    )
}
