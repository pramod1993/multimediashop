import React, { Component } from 'react'
import * as Styled from './ServicesStyled';
import { AiOutlineDesktop } from "react-icons/ai";
import { RiCrop2Line } from "react-icons/ri";
import { RiExternalLinkFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { FaCube } from "react-icons/fa";
import { FaComments } from "react-icons/fa";


export default class Services extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Services</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Services</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container mt-4'>
            <Styled.Service>
            <h2>Lorem ipsum dolor 
Elementum
Consectetur
 adipiscing elit</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
            </Styled.Service>
          </div>
        </Styled.row>

        <Styled.row>
          <div className='container'>
            <Styled.row>
              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                  <p><AiOutlineDesktop/></p>
                  <h4>Responsive & Retina Ready</h4>
                  <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>

              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                    <p><RiCrop2Line/></p>
                    <h4>Layout Versions</h4>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>

              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                    <p><RiExternalLinkFill/></p>
                    <h4>Power of Flexibility</h4>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>
            </Styled.row>
          </div>
        </Styled.row>
        <Styled.row>
        <div className='container mb-4'>
            <Styled.row>
              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                    <p><BsPencilSquare/></p>
                    <h4>Unlimted Colors</h4>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>

              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                    <p><FaCube/></p>
                    <h4>Lots of Features</h4>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>

              <Styled.servicbox>
                <Styled.box>
                  <Styled.servictext>
                    <p><FaComments/></p>
                    <h4>Customer Support</h4>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing nibh euismod tincidunt.</p>
                  </Styled.servictext>
                </Styled.box>
              </Styled.servicbox>
            </Styled.row>
          </div>
        </Styled.row>
      </>
    )
  }
}
