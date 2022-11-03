import React, { Component } from 'react'
import * as Styled from './ShopsStyled';
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


export default class Shops extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Shops</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Shops</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container'>
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

          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops6}/>
              </div>
              <div className='second'>
                <img src={shops7}/>
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
          </div>
        </Styled.row>



        <Styled.row>
          <div className='container mb-4'>
          <Styled.row>
          <Styled.gridbx>
          <Styled.box>
            <Styled.shopimg>
              <div className='first'>
                <img src={shops8}/>
              </div>
              <div className='second'>
                <img src={shops9}/>
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
          </div>
        </Styled.row>
      </>
    )
  }
}
