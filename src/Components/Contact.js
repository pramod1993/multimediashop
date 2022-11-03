import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import * as Styled from './ContactStyled';

export default class Contact extends Component {
  render() {
    return (
      <>
        <Styled.aboutbg>
          <Styled.row>
            <div className='container'>
              <Styled.hed>
                <h4>Contact Us</h4>
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li>/</li>
                  <li>Contact Us</li>
                </ul>
              </Styled.hed>
            </div>
          </Styled.row>
        </Styled.aboutbg>

        <Styled.row>
          <div className='container mt-5'>
            <Styled.maps>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.091885652763!2d85.36243721394338!3d25.734474783649112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed65a420570e15%3A0xa2d2622b0a33e4ae!2sPramod%20Singh%20(Bihari)!5e0!3m2!1sen!2sin!4v1667375210942!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Styled.maps>
          </div>
        </Styled.row>
        <Styled.row>
          <div className='container mb-4'>
            <Styled.row>
              <Styled.cont>
                <Form>
                  <Styled.fombox>
                  <Form.Control type="Name" placeholder="Your Name* ........" className='fom' />
                  </Styled.fombox>
                  <Styled.fombox>
                  <Form.Control type="Email" placeholder="Your Email* ........" className='fom' />
                  </Styled.fombox>
                  <Styled.fombox>
                  <Form.Control type="type" placeholder="Your Subject* ........" className='fom' />
                  </Styled.fombox>
                  <Styled.texta>
                  <Form.Control as="textarea" rows={6}  className='fom1'/>
                  </Styled.texta>
                  <Styled.texta>
                    <input type='submit' value='Send Message' className='btn subm'/>
                  </Styled.texta>
                </Form>
              </Styled.cont>
              <Styled.conttext>
                <h4>Get in touch</h4>
                <p>Feel free to talk to our online representative at any time you please using our Live Chat system on our website or one of the below instant messaging programs.</p>
                <p>Please be patient while waiting for response. (24/7 Support!)</p>
                <p><strong>Phone General Inquiries: 91 123-456-7809</strong></p>
                <h4>Company Address</h4>
                <p>991 Jefferson Avenue, Suite 305, Redwood City, CA 84023, USA</p>
                <p>Telephone: +1 (482) 689-5689</p>
                <p>FAX: +91 1234567809</p>
                <p>E-mail: pramod@info.com</p>
                <p>Website: http://www.pramod.in/</p>
              </Styled.conttext>
            </Styled.row>
          </div>
        </Styled.row>
      </>
    )
  }
}
