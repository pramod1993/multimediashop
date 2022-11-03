import React, { Component } from 'react'
import * as Styled from './PortfoliosStyled';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { FaSearch } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

import port from '../img/portfoli.png';
import port1 from '../img/portfoli1.png';
import port2 from '../img/portfoli2.png';
import port3 from '../img/portfoli3.png';

export default class Portfolios extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Portfolios</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Portfolios</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container mt-4'>
          <Styled.portbox>
              <Tab.Container id="left-tabs-example" defaultActiveKey="HTML">
                      <Nav variant="pills" className="tablink">
                        <Nav.Item>
                          <Nav.Link eventKey="HTML">Show All </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Developer">Developer </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Fashion">Fashion </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Photoshop">Photography </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Design">Web Design </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content style={{background:'#fff', border:'1px solid #ccc', padding:'10px',}}>
                        <Tab.Pane eventKey="HTML">
                          <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port1}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port3}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>

                          <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port3}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port1}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Developer">
                        <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port3}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Fashion">
                        <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port1}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port3}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Photoshop">
                        <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Design">
                        <Styled.row>
                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port2}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port1}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>

                            <Styled.portfobox>
                              <Styled.box>
                                <Styled.porimg>
                                <img src={port3}/>
                                <div className='over'></div>
                                  <div className='porticon'>
                                    <ul>
                                      <li><FaSearch/></li>
                                      <li><FaLink/></li>
                                    </ul>
                                  </div>
                                  <div className='porttext'>
                                    <h4>Lorem ipsum dolor</h4>
                                    <div className="skill">
                                      <ul>
                                      <li><a href="#">Coding</a>,</li>
                                      <li><a href="#">Design</a>,</li>
                                      <li><a href="#">Photos</a></li>
                                      </ul>
                                      </div>
                                  </div>
                                </Styled.porimg>
                              </Styled.box>
                            </Styled.portfobox>
                          </Styled.row>
                        </Tab.Pane>
                      </Tab.Content>
                      <Styled.fotbtn>
                        <a href='#' className='btn submit'>Load More</a>
                      </Styled.fotbtn>
                </Tab.Container>
              </Styled.portbox>
          </div>
        </Styled.row>
      </>
    )
  }
}
