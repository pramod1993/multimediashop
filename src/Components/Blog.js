import React, { Component } from 'react'
import * as Styled from './BlogStyled';
import Accordion from 'react-bootstrap/Accordion';
import blogimg from '../img/blog1.png'

export default class Blog extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Blog</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Blog</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>


        <Styled.row>
          <div className='container mt-4 mb-4'>
            <Styled.Service>
            <Styled.row>
            <Styled.tabx>
            <Styled.blogbox>
            <img src={blogimg}/>
            </Styled.blogbox>
              <Styled.tabbox>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. At vero eos et accusam et justo duo.</p>
              <p className='text'><strong><i>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore</i></strong></p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum.</p>
              <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
              <p> &nbsp; &nbsp; &nbsp; &nbsp;     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </Styled.tabbox>
            </Styled.tabx>
            <Styled.tabx1>
              <Styled.sear>
                <input type='text' placeholder='Search …'/>
              </Styled.sear>

              <Styled.sear>
              <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><a href='#'>Artical</a></li>
                        <li><a href='#'>Clothes</a></li>
                        <li><a href='#'>Fashion</a></li>
                        <li><a href='#'>Multimedia</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>Post Formats</a></li>
                        <li><a href='#'>Shoes</a></li>
                        <li><a href='#'>Social Media</a></li>
                        <li className='foter'><a href='#'>+ Show more</a></li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Styled.sear>
            </Styled.tabx1>
            </Styled.row>
            </Styled.Service>
          </div>
        </Styled.row>
      </>
    )
  }
}
