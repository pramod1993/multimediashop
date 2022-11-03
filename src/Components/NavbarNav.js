import React, { Component,useState } from 'react'
import * as Styled from './NavbarNavStyled';
import {Nav, Container, Navbar, Form, InputGroup,Dropdown} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

import { BsFillHeartFill } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TfiAngleRight } from "react-icons/tfi";
import logo from '../img/multimedia-logo.svg'

import Home from './Home';
import About from './About';
import Portfolios from './Portfolios';
import Shops from './Shops';
import Blog from './Blog';
import Services from './Services';
import Contact from './Contact';
import MenWomen from './MenWomen';
import Tabs from './Tabs';

export default class NavbarNav extends Component {
  render() {
    return (
      <>
        <Router>
      <Styled.dexmenu>
      <Styled.row>
            <div className='container'>
            <Styled.row>
                <Styled.logobox>
                    <Navbar.Brand  as={Link}to='/' className='desklogo'><img src={logo}/></Navbar.Brand>
                </Styled.logobox>
                <Styled.searchbox>
                    <Form>
                        <InputGroup>
                        <Form.Control placeholder="Username" aria-describedby="basic-addon2" className='fom'/>
                        <Form.Select className='fomsele' style={{borderRadius:'0', backgroundColor:'#0d6efd',}}>
                            <option>All Categories</option>
                            <option value="1">Accessories</option>
                            <option value="2">Bags</option>
                            <option value="3">Belts</option>
                            <option value="4">Sunglasses</option>
                            <option value="5">Clothing</option>
                            <option value="6">Dress Materials</option>
                            <option value="7">Dresses</option>
                            <option value="8">Night Dresses</option>
                            <option value="9">Handbags</option>
                            <option value="10">Maternity Store</option>
                            <option value="11">Others</option>
                            <option value="12">Cosmetic</option>
                            <option value="13">Hair Care</option>
                            <option value="14">Skin Care</option>
                            <option value="15">Day creams</option>
                            <option value="16">Electronic</option>
                        </Form.Select>
                        <a href='#' id="button-addon2" className='btn submit'><BsSearch/></a>
                        </InputGroup>
                    </Form>
                </Styled.searchbox>
                <Styled.shopbox>
                    <ul>
                        <li><BsFillHeartFill/><sup>0</sup></li>
                        <li><TbRefresh/><sup>0</sup></li>
                        <li><FaShoppingCart/><sup>0</sup></li>
                    </ul>
                </Styled.shopbox>
            </Styled.row>
            </div>
        </Styled.row>
      </Styled.dexmenu>
      
        <Navbar bg="primary" expand="lg"  variant="dark" className='navbg'>
      <Container>
             <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{borderRadius:'0', background:'#ff8400', fontFamily: 'roboto', fontWeight: '400',}}>
                Shopping Categories
                </Dropdown.Toggle>
                <Dropdown.Menu style={{borderRadius:'0',padding:'0',}}>
                    <Styled.Dropdownmenu>
                        <li><a href='#'>Shirts Tops & Tunics</a></li>
                        <li className='drop'><a href='#'>Accessories  <span><TfiAngleRight/></span></a>
                            <ul className='submenu'>
                                <li><a href='#'>Handbags</a></li>
                                <li><a href='#'>Clothing </a></li>
                                <li><a href='#'>Shapewears</a></li>
                                <li><a href='#'>Dresses </a></li>
                                <li><a href='#'>Swim & Beach Wear</a></li>
                                <li><a href='#'>Watches</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Handbags</a></li>
                        <li className='drop'><a href='#'>Clothing   <span><TfiAngleRight/></span></a>
                            <div className='submenu1'>
                                <Styled.row>
                                    <Styled.subbox>
                                    <ul>
                                        <h6 className='pt-3'><strong>Dresses</strong></h6>
                                        <li><a href='#'>Night Dresses &amp; Nighties</a></li>
                                        <li><a href='#'>Swim &amp; Beach Wear </a></li>
                                        <li><a href='#'>Dress Materials</a></li>
                                        <li><a href='#'>Shapewears</a></li>
                                        <li><a href='#'>Uniforms &amp; Safety</a></li>
                                        <li><a href='#'>Maternity Store</a></li>
                                        <li><a href='#'>Shirts Tops &amp; Tunics</a></li>
                                        <li><a href='#'>Skate &amp; Street</a></li>
                                        <li><a href='#'>Accessories</a></li>
                                        <li><a href='#'>Bags, Belts &amp; Wallets</a></li>
                                        <li><a href='#'>Belts</a></li>
                                    </ul>
                                    </Styled.subbox>
                                    <Styled.subbox>
                                    <ul>
                                        <h6 className='pt-3'><strong>Dresses</strong></h6>
                                        <li><a href='#'>Night Dresses &amp; Nighties</a></li>
                                        <li><a href='#'>Swim &amp; Beach Wear </a></li>
                                        <li><a href='#'>Dress Materials</a></li>
                                        <li><a href='#'>Shapewears</a></li>
                                        <li><a href='#'>Uniforms &amp; Safety</a></li>
                                        <li><a href='#'>Maternity Store</a></li>
                                        <li><a href='#'>Shirts Tops &amp; Tunics</a></li>
                                        <li><a href='#'>Skate &amp; Street</a></li>
                                        <li><a href='#'>Accessories</a></li>
                                        <li><a href='#'>Bags, Belts &amp; Wallets</a></li>
                                        <li><a href='#'>Belts</a></li>
                                    </ul>
                                    </Styled.subbox>
                                </Styled.row>
                            </div>
                        </li>
                        <li><a href='#'>Shapewears</a></li>
                        <li className='drop'><a href='#'>Dresses   <span><TfiAngleRight/></span></a>
                            <ul className='submenu'>
                                <li><a href='#'>Handbags</a></li>
                                <li><a href='#'>Clothing </a></li>
                                <li><a href='#'>Shapewears</a></li>
                                <li><a href='#'>Dresses </a></li>
                                <li><a href='#'>Swim & Beach Wear</a></li>
                                <li><a href='#'>Watches</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Swim & Beach Wear</a></li>
                        <li><a href='#'>Watches</a></li>
                    </Styled.Dropdownmenu>
                </Dropdown.Menu>
            </Dropdown>
            
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Styled.Nav > 
              <ul>
                <li><Nav.Link as={Link} to='/'>Home</Nav.Link></li>
                <li><Nav.Link as={Link} to='/about'>About Us</Nav.Link></li>
                <li><Nav.Link as={Link} to='/services'>Services</Nav.Link></li>
                <li><Nav.Link as={Link} to='/tabs'>Tabs</Nav.Link></li>
                <li><Nav.Link as={Link} to='/shops'>Shops</Nav.Link></li>
                <li><Nav.Link as={Link} to='/blog'>Blog</Nav.Link></li>
                <li><Nav.Link as={Link} to='/portfolios'>Portfolios</Nav.Link></li>
                <li><Nav.Link as={Link} to='/men-women'>Men & Women </Nav.Link></li>
                <li><Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link></li>
              </ul> 
          </Styled.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/shops' element={<Shops/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolios' element={<Portfolios/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/men-women' element={<MenWomen/>}/>
        <Route path='/tabs' element={<Tabs/>}/>
      </Routes>
    </div>
    </Router>
      </>
    )
  }
}
