import React, { Component } from 'react'
import * as Styled from './MenWomenStyled';
import Accordion from 'react-bootstrap/Accordion';

import logoim from '../img/logo.jpg';
import logoim1 from '../img/logo1.jpg';
import logoim2 from '../img/logo2.jpg';
import logoim3 from '../img/logo3.jpg';
import logoim4 from '../img/logo4.jpg';
import logoim5 from '../img/logo5.jpg';
import logoim6 from '../img/logo6.jpg';
import logoim7 from '../img/logo7.jpg';

import shops from '../img/shop.jpg';
import shops1 from '../img/shop01.jpg';
import shops2 from '../img/shop2.jpg';
import shops3 from '../img/shop02.jpg';
import shops4 from '../img/shop3.jpg';
import shops5 from '../img/shop03.jpg';
import shops6 from '../img/shop4.jpg';
import shops7 from '../img/shop04.jpg';
import shops8 from '../img/shop5.jpg';
import shops9 from '../img/shop05.jpg';
import shops10 from '../img/shop6.jpg';
import shops11 from '../img/shop06.jpg';
import shops12 from '../img/shop7.jpg';
import shops13 from '../img/shop07.jpg';
import shops14 from '../img/shop8.jpg';
import shops15 from '../img/shop08.jpg';


import { ImEye } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";
import { Card } from 'react-bootstrap';


export default class MenWomen extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Men & Women</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Men Women</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container'>
            <Styled.row>
              <Styled.leftbox>
                  <Styled.sear>
                  <input type='text' placeholder='Search …'/>
                  </Styled.sear> 
                  <Styled.sear>
              <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Product Categories</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href='#'>Product Categories</a></li>
                        <li><a href='#'>Accessories <span>(23)</span> </a></li>
                        <li><a href='#'>Clothing  <span>(26)</span></a></li>
                        <li><a href='#'>Dress Materials  <span>(12)</span></a></li>
                        <li><a href='#'>Dresses  <span>(13)</span></a></li>
                        <li><a href='#'>Night Dresses & Nighties  <span>(12)</span></a></li>
                        <li><a href='#'>Handbags  <span>(12)</span></a></li>
                        <li><a href='#'>Maternity Store  <span>(12)</span></a></li>
                        <li><a href='#'>Others  <span>(162)</span></a></li>
                        <li><a href='#'>Shapewears  <span>(12)</span></a></li>
                        <li><a href='#'>Shirts Tops & Tunics  <span>(12)</span></a></li>
                        <li><a href='#'>Shoes  <span>(11)</span></a></li>
                        <li className='foter'><a href='#'>+ Show more</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Styled.sear>
              </Styled.leftbox>
              <Styled.rightbox>
                <Styled.box>
                  <Styled.menwomen>
                    <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <Styled.logobox>
                      <h5>Brands</h5>
                      <ul>
                        <li><img src={logoim}/></li>
                        <li><img src={logoim1}/></li>
                        <li><img src={logoim2}/></li>
                        <li><img src={logoim3}/></li>
                        <li><img src={logoim4}/></li>
                        <li><img src={logoim5}/></li>
                        <li><img src={logoim6}/></li>
                        <li><img src={logoim7}/></li>
                      </ul>
                    </Styled.logobox>
                      </Styled.menwomen>
                </Styled.box>
          <Styled.row>
          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops}/>
              </div>
              <div className='second'>
                <img src={shops1}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Centario Women’s Casual Wear</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>

          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops2}/>
              </div>
              <div className='second'>
                <img src={shops3}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Wills Lifestyle Blue Shift Dress</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>


          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops4}/>
              </div>
              <div className='second'>
                <img src={shops5}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Royals Official Polo T-Shirts Mens</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>
          </Styled.row>

          <Styled.row>
          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops10}/>
              </div>
              <div className='second'>
                <img src={shops11}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Wills Lifestyle Blue Shift Dress</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>


          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops12}/>
              </div>
              <div className='second'>
                <img src={shops13}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Royals Official Polo T-Shirts Mens</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>

          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops14}/>
              </div>
              <div className='second'>
                <img src={shops15}/>
                <Styled.shopover><a href='#'><ImEye/>  Quick View</a></Styled.shopover>
              </div>              
            </Styled.shopimg>
            <Styled.shoptext>
            <p><a href='#'>Gofab Blue Denim Lycra Jeggings</a></p>
                    <ul>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiFillStar/></li>
                        <li className='star'><AiOutlineStar/></li>
                        <li><span>(3)</span></li>
                    </ul>
                    <p><span>$300.00</span> <span className='dol'>- $280.00</span></p>
                    <Card.Footer>
                    <Styled.card>
                      <a href='#' className='btn addcard'>Add to cart</a>
                      <div className='icon'>
                        <ul>
                            <li><BsSuitHeart/></li>
                            <li><HiOutlineRefresh/></li>
                        </ul>
                      </div>
                    </Styled.card>
                    <div className='color'>
                      <div className='blue'></div>
                      <div className='red'></div>
                      <div className='green'></div>
                    </div>
                    </Card.Footer>
            </Styled.shoptext>
          </Styled.box>
          </Styled.gridbx>
          </Styled.row>

              </Styled.rightbox>
            </Styled.row>
            </div>
            </Styled.row>
      </>
    )
  }
}
