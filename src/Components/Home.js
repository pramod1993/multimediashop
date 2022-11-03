import React, { Component,useState } from 'react'
import * as Styled from './HomeStyled';
import 'animate.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Carousel from 'react-bootstrap/Carousel';
import { ImEye } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaCube } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";


import slide from '../img/slider1.jpg';
import slide1 from '../img/slider2.jpg'; 
import slidepn from '../img/slider-001.png'; 
import slidepn1 from '../img/slider-002.png'; 
import figur from '../img/banner.jpg'; 
import figur1 from '../img/banner1.jpg'; 
import figur2 from '../img/banner2.jpg'; 
import figur3 from '../img/banner3.jpg'; 
import figur4 from '../img/banner4.jpg'; 

import womens from '../img/women.jpg'; 
import womens0 from '../img/women01.jpg'; 
import womens1 from '../img/women2.jpg'; 
import womens01 from '../img/women02.jpg'; 
import womens2 from '../img/women3.jpg'; 
import womens02 from '../img/women03.jpg'; 
import womens3 from '../img/women4.jpg'; 
import womens03 from '../img/women04.jpg'; 
import womens4 from '../img/women5.jpg'; 
import womens04 from '../img/women05.jpg'; 
import womens5 from '../img/women6.jpg'; 
import womens05 from '../img/women06.jpg'; 
import womens6 from '../img/women7.jpg'; 
import womens06 from '../img/women07.jpg'; 
import womens7 from '../img/women8.jpg'; 
import womens07 from '../img/women08.jpg'; 
// import figur2 from '../img/women9.jpg'; 
// import figur2 from '../img/women09.jpg'; 
import homblo from '../img/homblog.png'; 
import homblo1 from '../img/homblog1.png'; 
import homblo2 from '../img/homblog2.png'; 
import homblo3 from '../img/homblog3.png'; 

export default class Home extends Component {
  render() {
    
    return (
      <>
      <Carousel slide={false} style={{height: '410px', overflow: 'hidden',}} >
      <Carousel.Item>
        <img className="d-block w-100" src={slide} alt="First slide" />          
            <Styled.anibox>
            <h3 className='animate__animated animate__fadeInDown animate__delay-1s'>Women's <br/>Denim Jackets</h3>
            <p className='animate__animated animate__bounceInLeft animate__delay-2s d-none d-md-block'>Lorem Essential Season Style Up To 60% Off</p>
            <p className='animate__animated animate__bounceInUp animate__delay-3s'><a href='#' className='btn sopnow'>Shop Now</a></p>
            </Styled.anibox>
            <Styled.aniimg>
              <img src={slidepn} className='animate__animated animate__fadeInDown' />
            </Styled.aniimg>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="Secound slide" />
          
            <Styled.anibox>
            <h3 className='animate__animated animate__fadeInDown animate__delay-1s'><span>New Arrivals</span> <br/>Men's Clothing </h3>
            <p className='animate__animated animate__bounceInLeft animate__delay-2s d-none d-md-block'>Lorem Sale Up To 75% - Free Shipping </p>
            <p className='animate__animated animate__bounceInUp animate__delay-3s'><a href='#' className='btn sopnow'>Shop Now</a></p>
            </Styled.anibox>
            <Styled.aniimg>
              <img src={slidepn1} className='animate__animated animate__zoomIn' />
            </Styled.aniimg>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={slide} alt="Third slide" />          
            <Styled.anibox>
            <h3 className='animate__animated animate__fadeInDown animate__delay-1s'>Women's <br/>Denim Jackets</h3>
            <p className='animate__animated animate__bounceInLeft animate__delay-2s d-none d-md-block'>Lorem Essential Season Style Up To 60% Off</p>
            <p className='animate__animated animate__bounceInUp animate__delay-3s'><a href='#' className='btn sopnow'>Shop Now</a></p>
            </Styled.anibox>
            <Styled.aniimg>
              <img src={slidepn} className='animate__animated animate__fadeInDown' />
            </Styled.aniimg>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="Fourth slide" />
          
            <Styled.anibox>
            <h3 className='animate__animated animate__fadeInDown animate__delay-1s'><span>New Arrivals</span> <br/>Men's Clothing </h3>
            <p className='animate__animated animate__bounceInLeft animate__delay-2s d-none d-md-block'>Lorem Sale Up To 75% - Free Shipping </p>
            <p className='animate__animated animate__bounceInUp animate__delay-3s'><a href='#' className='btn sopnow'>Shop Now</a></p>
            </Styled.anibox>
            <Styled.aniimg>
              <img src={slidepn1} className='animate__animated animate__zoomIn' />
            </Styled.aniimg>
      </Carousel.Item>      
    </Carousel>

    <Styled.row>
      <div className='container'>
        <Styled.row>
          <Styled.figurbox>
              <Styled.figuimg>
                <div className='overbor'></div>
                <img src={figur}/>
              </Styled.figuimg>
          </Styled.figurbox>
          <Styled.figurbox>
              <Styled.figuimg>
                <div className='overbor'></div>
                <img src={figur1}/>
              </Styled.figuimg>
          </Styled.figurbox>
          <Styled.figurbox>
              <Styled.figuimg>
                <div className='overbor'></div>
                <img src={figur2}/>
              </Styled.figuimg>
          </Styled.figurbox>
        </Styled.row>
      </div>
    </Styled.row>
        

        <Styled.row>
          <div className='container'>
          <Styled.pro>
            <h1>Recent Products</h1>
            <Styled.bor></Styled.bor>
            <Styled.prodbor></Styled.prodbor>
          </Styled.pro>
            <Styled.row>
              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens0}/>
                    </div>
                    <div className='second'>
                      <img src={womens}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Blue Mini Bodycon Skirts For Women Casual Wear</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens1}/>
                    </div>
                    <div className='second'>
                      <img src={womens01}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Casual Sleeveless Cotton Blend Jacket</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens2}/>
                    </div>
                    <div className='second'>
                      <img src={womens02}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Multi Retail Beige Net Anarkali Gown Semi Stitched Suit</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens3}/>
                    </div>
                    <div className='second'>
                      <img src={womens03}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Cotton Henley T-shirt Lorem Ipsum</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>
            </Styled.row>
          </div>
        </Styled.row>

        <Styled.row>
          <div className='container'>
            <Styled.row>
              <Styled.bannerbox>
                <Styled.box>
                  <Styled.figuimg>
                  <div className='overbor'></div>
                  <img src={figur3}/>
                </Styled.figuimg>
                </Styled.box>
              </Styled.bannerbox>
              <Styled.bannerbox>
              <Styled.box>
                <Styled.figuimg>
                  <div className='overbor'></div>
                  <img src={figur4}/>
                </Styled.figuimg>
              </Styled.box>
              </Styled.bannerbox>
            </Styled.row>
          </div>
        </Styled.row>


        <Styled.row>
          <div className='container'>
          <Styled.pro>
            <h1>Latest Clothing</h1>
            <Styled.bor></Styled.bor>
            <Styled.prodbor></Styled.prodbor>
          </Styled.pro>         

          <Tab.Container id="left-tabs-example" defaultActiveKey="Recent">        
          <Nav variant="pills" className="flex-column">
            <Styled.NavTab>
            <Styled.NavItem>
              <Nav.Link eventKey="Recent">Recent Products</Nav.Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Nav.Link eventKey="Best">Best Selling</Nav.Link>
            </Styled.NavItem>
            <Styled.NavItem>
              <Nav.Link eventKey="Featured">Featured Products</Nav.Link>
            </Styled.NavItem>
            </Styled.NavTab>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="Recent">
            <Styled.row>
              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens4}/>
                    </div>
                    <div className='second'>
                      <img src={womens04}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Blue Mini Bodycon Skirts For Women Casual Wear</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens5}/>
                    </div>
                    <div className='second'>
                      <img src={womens05}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Casual Sleeveless Cotton Blend Jacket</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens6}/>
                    </div>
                    <div className='second'>
                      <img src={womens06}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Multi Retail Beige Net Anarkali Gown Semi Stitched Suit</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens7}/>
                    </div>
                    <div className='second'>
                      <img src={womens07}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Cotton Henley T-shirt Lorem Ipsum</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>
            </Styled.row>
            </Tab.Pane>
            <Tab.Pane eventKey="Best">
            <Styled.row>
              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens4}/>
                    </div>
                    <div className='second'>
                      <img src={womens04}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Blue Mini Bodycon Skirts For Women Casual Wear</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens5}/>
                    </div>
                    <div className='second'>
                      <img src={womens05}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Casual Sleeveless Cotton Blend Jacket</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens6}/>
                    </div>
                    <div className='second'>
                      <img src={womens06}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Multi Retail Beige Net Anarkali Gown Semi Stitched Suit</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens7}/>
                    </div>
                    <div className='second'>
                      <img src={womens07}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Cotton Henley T-shirt Lorem Ipsum</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>
            </Styled.row>
            </Tab.Pane>


            <Tab.Pane eventKey="Featured">
            <Styled.row>
              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens4}/>
                    </div>
                    <div className='second'>
                      <img src={womens04}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Blue Mini Bodycon Skirts For Women Casual Wear</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens5}/>
                    </div>
                    <div className='second'>
                      <img src={womens05}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Casual Sleeveless Cotton Blend Jacket</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens6}/>
                    </div>
                    <div className='second'>
                      <img src={womens06}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Multi Retail Beige Net Anarkali Gown Semi Stitched Suit</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>

              <Styled.Products>
                <Styled.box>
                  <Styled.imgbox>
                    <div className='first'>
                      <img src={womens7}/>
                    </div>
                    <div className='second'>
                      <img src={womens07}/>
                      <Styled.imgover>
                        <a href='#'><ImEye/>  Quick View</a>
                      </Styled.imgover>
                    </div>
                  </Styled.imgbox>
                  <Styled.textbox>
                  <p><a href='#'>Cotton Henley T-shirt Lorem Ipsum</a></p>
                    <ul>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiFillStar/></li>
                        <li><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                  </Styled.textbox>
                </Styled.box>
              </Styled.Products>
            </Styled.row>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>            
          </div>
        </Styled.row>




        <Styled.row>
          <div className='container'>
          <Styled.pro>
            <h1>Latest Blogs</h1>
            <Styled.bor></Styled.bor>
            <Styled.prodbor></Styled.prodbor>
          </Styled.pro>
            <Styled.row>
              <Styled.Products>
                <Styled.box>
                  <Styled.blimg>
                    <img src={homblo}/>
                    <Styled.blover>
                      <span><FaSearch/></span>
                      <span><FaLink/></span>
                    </Styled.blover>
                  </Styled.blimg>
                  <Styled.textbox>
                    <Styled.bltext>
                      <p className='date'>20 <br/> <span>Sep</span></p>
                      <p><a href='#'>Duis autem vel eum iriure dolor</a></p>
                    </Styled.bltext>
                    <Styled.redmo>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat … </p>
                    <a href='#' className='btn Readmore'>Read more</a>
                    </Styled.redmo>
                  </Styled.textbox>
                  </Styled.box>
                </Styled.Products>

                <Styled.Products>
                <Styled.box>
                  <Styled.blimg>
                    <img src={homblo1}/>
                    <Styled.blover>
                      <span><FaSearch/></span>
                      <span><FaLink/></span>
                    </Styled.blover>
                  </Styled.blimg>
                  <Styled.textbox>
                    <Styled.bltext>
                      <p className='date'>20 <br/> <span>Sep</span></p>
                      <p><a href='#'>Stet clita kasd gubergren</a></p>
                    </Styled.bltext>
                    <Styled.redmo>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat … </p>
                    <a href='#' className='btn Readmore'>Read more</a>
                    </Styled.redmo>
                  </Styled.textbox>
                  </Styled.box>
                </Styled.Products>

                <Styled.Products>
                <Styled.box>
                  <Styled.blimg>
                    <img src={homblo2}/>
                    <Styled.blover>
                      <span><FaSearch/></span>
                      <span><FaLink/></span>
                    </Styled.blover>
                  </Styled.blimg>
                  <Styled.textbox>
                    <Styled.bltext>
                      <p className='date'>20 <br/> <span>Sep</span></p>
                      <p><a href='#'>Lorem ipsum dolor sit amet</a></p>
                    </Styled.bltext>
                    <Styled.redmo>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat … </p>
                    <a href='#' className='btn Readmore'>Read more</a>
                    </Styled.redmo>
                  </Styled.textbox>
                  </Styled.box>
                </Styled.Products>

                <Styled.Products>
                <Styled.box>
                  <Styled.blimg>
                    <img src={homblo3}/>
                    <Styled.blover>
                      <span><FaSearch/></span>
                      <span><FaLink/></span>
                    </Styled.blover>
                  </Styled.blimg>
                  <Styled.textbox>
                    <Styled.bltext>
                      <p className='date'>20 <br/> <span>Sep</span></p>
                      <p><a href='#'>Dolore magna aliquam erat</a></p>
                    </Styled.bltext>
                    <Styled.redmo>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat … </p>
                    <a href='#' className='btn Readmore'>Read more</a>
                    </Styled.redmo>
                  </Styled.textbox>
                  </Styled.box>
                </Styled.Products>
            </Styled.row>
          </div>
          </Styled.row>

          <Styled.row>
            <div className='container mb-3'>
              <Styled.row>
                <Styled.Retina>
                  <Styled.box>
                    <Styled.desk>
                    <p><AiOutlineDesktop/></p>
                    <h4>Responsive & Retina Ready</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </Styled.desk>
                  </Styled.box>
                </Styled.Retina>

                <Styled.Retina>
                  <Styled.box>
                    <Styled.desk>
                      <p><FaCube/></p>
                      <h4>Lots of Features</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </Styled.desk>
                  </Styled.box>
                </Styled.Retina>

                <Styled.Retina>
                  <Styled.box>
                    <Styled.desk>
                      <p><IoIosChatbubbles/></p>
                      <h4>Customer Support</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.</p>
                    </Styled.desk>
                  </Styled.box>
                </Styled.Retina>
              </Styled.row>
            </div>
          </Styled.row>
      </>
    )
  }
}
