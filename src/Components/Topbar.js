import React, { Component,useState } from 'react'
import * as Styled from './TopbarStyled';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

const Topbar = () =>{    
    const [lgShow, setLgShow] = useState(false);
    const [userRegistration , setUserRegistration] = useState({
      name: '',
      email: '',
      number: '',
      password: '',
    });
  
    const [records , setRecord] = useState([]);
        const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
  
        setUserRegistration({...userRegistration, [name] : value });
      }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newRecord = {...userRegistration, id:new Date().getTime().toString() }
    console.log(records);
    setRecord([...records, newRecord]);
    console.log(records);
  
    setUserRegistration ({name:'', email:'', number:'', password:'',});
  }
  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      const [allEntry, setAllEntry] = useState([]);
  
      const submitForm = (e) => {
        e.preventDefault();
  
        const newEntry = { email: email, password: password };
  
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
      }
    return (
      <>
      <Styled.topmenu>
        <Styled.row>
            <div className='container'>
                <Styled.row>
                    <Styled.leftmenu>
                        <ul>
                            <li><a href='#'><span><AiOutlineMail/></span> pramod@info.com</a></li>
                            <li><a href='#'><span><IoIosCall/></span>+91 1234567809</a></li>
                        </ul>
                    </Styled.leftmenu>
                    <Styled.rightmenu>
                        <ul className='ml-auto'>
                            <li><a href='#' onClick={() => setLgShow(true)}><span><FaUserAlt/></span> My Account  </a></li>                            
                            <li><a href='#' onClick={() => setLgShow(true)}><span><BiLockAlt/></span>Login/Register</a></li>
                        </ul>
                    </Styled.rightmenu>
                </Styled.row>
            </div>
            </Styled.row>
       </Styled.topmenu>

       <Modal  size="lg"  show={lgShow}  onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" style={{margin: "auto", textTransform:' uppercase',
    fontFamily: 'roboto',position: "absolute", left:" 37%", color: "#023b91", fontWeight: "600",}}>
          Login & Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        
          <Nav variant="pills" className="flex-column">
            <Styled.NavTab>
            <Styled.NavItem>
              <Nav.Link eventKey="first">Login</Nav.Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Nav.Link eventKey="second">Register</Nav.Link>
            </Styled.NavItem>
            </Styled.NavTab>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Styled.login>
              <form  onSubmit={submitForm}>
              <h3>Login</h3>
                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Email <sup>*</sup></label>
                  <input type='Email' name='email' placeholder='Your Email' 
                  className='form-control' id='email' autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                <label>Your Password<sup>*</sup></label>
                  <input type='Password' name='password' placeholder='Your Password' 
                  className='form-control' id='password' autoComplete='off'
                  onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <input type='submit' className='btn btn-primary submit' value='Submit'/>
              </form>
              
              <div>
             {
                  allEntry.map((curElem) => {
                    const {id, email, password} = curElem;
                    return(
                      <Styled.showDateStayle  key={id}>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                      </Styled.showDateStayle>
                    )
                  })
                }
              </div>
              </Styled.login>
            </Tab.Pane>


            <Tab.Pane eventKey="second">
            <Styled.login>
              <Form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Name<sup>*</sup></label>
                  <input type='text' name='name' placeholder='Your Name' className='form-control'
                   id='name' autoComplete='off' onChange={handleInput} value={userRegistration.name}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Email<sup>*</sup></label>
                  <input type='Email' name='email' placeholder='Your Email' 
                  className='form-control' id='email' autoComplete='off'
                   onChange={handleInput} value={userRegistration.email}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Number<sup>*</sup></label>
                  <input type='Number' name='number' placeholder='Your Phone Number'
                  autoComplete='off' className='form-control' id='number' 
                  onChange={handleInput} value={userRegistration.number}/>
                </Form.Group>

                <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Password<sup>*</sup></label>
                  <input type='Password' name='password' placeholder='Your Password' 
                  className='form-control' id='password' autoComplete='off' 
                  onChange={handleInput}  value={userRegistration.password}/>
                </Form.Group>
                <input type='submit' className='btn btn-primary submit' value='Submit'/>
              </Form>

              <div>
             {
                  records.map((curElem) => {
                    const {id, name, email, number, password} = curElem;
                    return(
                      <Styled.showDateStayle key={id}>
                        <p>{curElem.name}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.number}</p>
                        <p>{curElem.password}</p>
                      </Styled.showDateStayle>
                    )
                  })
                }
              </div>
            </Styled.login>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    
        </Modal.Body>
      </Modal>
        
      </>
    )
  }
  export default Topbar;
