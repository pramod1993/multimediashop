import React, { Component } from 'react'
import * as Styled from './TabsStyled';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default class Tabs extends Component {
  render() {
    return (
      <div>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Tabs</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Tabs</li>
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
            <h4>Lorem ipsum dolor 
              Elementum
              Consectetur
              adipiscing elit</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
              <Styled.tabbox>
              <Tab.Container id="left-tabs-example" defaultActiveKey="HTML">
                      <Nav variant="pills" className="tablink">
                        <Nav.Item>
                          <Nav.Link eventKey="HTML">HTML</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Design">Design</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Developer">Developer</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Photoshop">Photoshop</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content style={{background:'#fff', border:'1px solid #ccc', padding:'10px',}}>
                        <Tab.Pane eventKey="HTML">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Design">
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Developer">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Photoshop">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
                        </Tab.Pane>
                      </Tab.Content>
                </Tab.Container>
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
      </div>
    )
  }
}
