import React, { Component } from 'react'
import * as Styled from './FooterStyled';
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiRss } from "react-icons/bi";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Styled.foterbg>
            <Styled.row>
                <div className='container'>
                    <Styled.row>
                        <Styled.fotbox>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <ul>
                                <li><a href='#'><IoHomeOutline/> Lorem Ipsum, 2046 Lorem Ipsum</a> </li>
                                <li><a href='#'><IoCallOutline/>1234567809</a></li>
                                <li><a href='#'><FiPrinter/>000-000-000</a></li>
                                <li><a href='#'><AiOutlineMail/>pramod@info.com</a></li>
                                <li><a href='#'><FaGlobeAsia/>https://multimedia.com</a></li>
                                <li><a href='#'><BiTimeFive/>Mon - Fri / 9:00 AM - 6:00 PM</a></li>
                            </ul>
                        </Styled.fotbox>

                        <Styled.fotbox>
                            <h5>Policy Info</h5>
                            <ul>
                                <li><a href='#'>Privacy Policy</a> </li>
                                <li><a href='#'>Terms of Sale</a></li>
                                <li><a href='#'>Terms of Use</a></li>
                                <li><a href='#'>Customer Service</a></li>
                                <li><a href='#'>Delivery Information</a></li>
                                <li><a href='#'>Payments</a></li>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Saved Cards</a></li>
                            </ul>
                        </Styled.fotbox>

                        <Styled.fotbox>
                            <h5>Recent Posts</h5>
                            <ul>
                                <li><a href='#'>Duis autem vel eum iriure dolor</a> </li>
                                <li><a href='#'>Stet clita kasd gubergren</a></li>
                                <li><a href='#'>Lorem ipsum dolor sit amet</a></li>
                                <li><a href='#'>Dolore magna aliquam erat</a></li>
                                <li><a href='#'>Duis autem vel eum iriure dolor</a></li>
                                <li><a href='#'>Stet clita kasd gubergren</a></li>
                                <li><a href='#'>Post Format: Gallery</a></li>
                                <li><a href='#'>Post Format: Image</a></li>
                            </ul>
                        </Styled.fotbox>

                        <Styled.fotbox>
                            <h5>Newsletter</h5>
                            <p>Signup today for free and be the first to get notified on new updates.</p>
                            <Styled.subbox>
                                <input type='text' placeholder="Your email address"/><br/>
                                <a href='#' className='send'>Sign up</a>
                            </Styled.subbox>
                            <Styled.media>
                                <ul>
                                    <li className='Facebook'><FaFacebookF/></li>
                                    <li className='Twitter'><AiOutlineTwitter/></li>
                                    <li className='Instagram'><AiOutlineInstagram/></li>
                                    <li className='Linkedin'><AiFillLinkedin/></li>
                                    <li className='Youtube'><AiOutlineYoutube/></li>
                                    <li className='Rss'><BiRss/></li>
                                </ul>
                            </Styled.media>
                        </Styled.fotbox>
                    </Styled.row>
                </div>
            </Styled.row>
        </Styled.foterbg>
      </>
    )
  }
}
