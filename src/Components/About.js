import React, { Component } from 'react'
import * as Styled from './AboutStyled';
import aboutimg from '../img/about.jpg';
import './aboutstyle.css';
import Accordion from 'react-bootstrap/Accordion';

export default class About extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>About Us</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>About Us</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container mt-4'>
            <Styled.row>
              <Styled.ipsum>
                <Styled.box>
                  <img src={aboutimg}/>
                </Styled.box>
              </Styled.ipsum>
              <Styled.ipsum>
                <Styled.box>
                  <h4>Lorem ipsum consectetuer euismod</h4>
                  <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore dolore magnm aliquam quaerat voluptatem.</p>
                </Styled.box>
              </Styled.ipsum>
            </Styled.row>
          </div>
        </Styled.row>

        <Styled.row>
          <div className='container mt-4'>
            <Styled.row>
              <Styled.ipsum>
                <Styled.box>
                  <h4>Who We Are</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero ligula.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                </Styled.box>
              </Styled.ipsum>
              <Styled.ipsum>
                <Styled.box>
                  <h4>Our Skills</h4>
                  <div className='Skillsbox'>
                    <div className='Skillsbar'>
                    <Styled.web>Website Design</Styled.web>
                      <div className='SkillsPre'>
                        <div className='tooltips'>90%</div>
                      </div>
                    </div>
                  </div>

                  <div className='Skillsbox'>
                    <div className='Skillsbar'>
                    <Styled.web>Graphic Design</Styled.web>
                      <div className='SkillsPre Graphic'>
                        <div className='tooltips'>80%</div>
                      </div>
                    </div>
                  </div>

                  <div className='Skillsbox'>
                    <div className='Skillsbar'>
                    <Styled.web>React Js</Styled.web>
                      <div className='SkillsPre React'>
                        <div className='tooltips'>65%</div>
                      </div>
                    </div>
                  </div>

                  <div className='Skillsbox'>
                    <div className='Skillsbar'>
                    <Styled.web>WordPress</Styled.web>
                      <div className='SkillsPre WordPress'>
                        <div className='tooltips'>75%</div>
                      </div>
                    </div>
                  </div>
                 
                </Styled.box>
              </Styled.ipsum>
            </Styled.row>
          </div>
        </Styled.row>


        <Styled.row>
          <div className='container mt-4'>
            <Styled.row>
              <Styled.abuttext>
                <Styled.box>
                  <h4>What I Do?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.Ut wisi enim ad minim veniam.</p>
                </Styled.box>
              </Styled.abuttext>
              <Styled.abuttext>
                <Styled.box>
                <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Lorem ipsum dolor sit amet?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi enim ad minim veniam
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Lorem ipsum dolor sit?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi enim ad minim veniam
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Lorem ipsum dolor sit amet?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut wisi enim ad minim veniam
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
                </Styled.box>
              </Styled.abuttext>
              <Styled.abuttext>
                <Styled.box>
                  <h4>Winning Our Goal</h4>
                  <Styled.olbox>
                  <ol>
                    <li>Duis autem vel eum iriure dolor.</li>
                    <li>At vero eos et accusam et justo duo.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>dolore dolores duo eirmod eos erat.</li>
                    <li>Mauris metus mauris, tristique quis sapien eu.</li>
                    <li>Aliquam non tincidunt urna.</li>
                    <li>Maecenas pellentesque, dui vitae iaculis mattis.</li>
                    <li>Vivamus dignissim posuere aliquet.</li>
                    <li> Nulla lobortis sem dapibus, aliquet turpis eu</li>
                  </ol>
                  </Styled.olbox>
                </Styled.box>
              </Styled.abuttext>
            </Styled.row>
          </div>
        </Styled.row>
      </>
    )
  }
}
