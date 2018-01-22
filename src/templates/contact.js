import React, { Component, PropTypes } from 'react'
import { Container, Row, Col, Form, FormGroup, Input} from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import './team.scss'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default class contactTemplate extends Component {
  render() {
    const page = this.props.data.markdownRemark
    
    return (
      <div style={this.props.transition && this.props.transition.style}>
         <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />
        
         <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>{page.frontmatter.title}</header>
                  <h1>{page.frontmatter.page_header}</h1>
                </Col>

                <div className='page-circular-header'>
                  <Link to='/'><img src={logoIcon} /></Link>
                </div>
                
                </Row>
              </Container>
            </section>

            <section className='page-content research'>
              <Container>
                      
                      <div className="team-member-container">
                      
                        {/* <Row>
                          <Col className='page-link-container' md={{size: 12}}>
                            <div className='page-accordion-link'>
                              <a className='bebas' href='#'>Contact Us</a>
                              <button>View All</button>
                            </div>
                          </Col>
                        </Row> */}


                        <Row>
                            <Col className='page-sidebar' md={{size: 4}}>
                              {/* <div className='page-sidebar-image'>
                                <img src={image_sidebar} />
                              </div> */}
                              <div className='page-sidebar-content'>
                                <header className='bebas'>Contact</header>
                                <h3>Give us a call to learn more about our expertise or fill out our form.</h3>  
                                <div className='phone-numbers'>
                                  <p><span>Sales:</span>(202) 629-0030</p>
                                  <p><span>Trading:</span>(202) 629-0015</p>
                                </div>
                              </div>
                            </Col>
                            <Col className='page-copy' md={{size: 8}}>
                              
                              <Form name='contact' classname='form' data-netlify="true" action='thank-you'>
                                
                                <FormGroup>
                                  <Input type='text' name='name' id='inputName' placeholder='Full Name' />
                                </FormGroup>

                                <FormGroup>
                                  <Input type='email' name='email' id='inputEmail' placeholder='Email' />
                                </FormGroup>

                                <FormGroup>
                                  <Input type='number' name='phone' id='inputPhone' placeholder='Phone Number' />
                                </FormGroup>

                                <FormGroup>
                                  <Input type='text' name='subject' id='inputSubject' placeholder='Subject' />
                                </FormGroup>

                                <FormGroup>
                                  <Input type='textarea' name='text' id='inputComment' placeholder='How can we help?' />
                                </FormGroup>

                                <FormGroup>
                                  <button type='submit'>Submit</button>
                                </FormGroup>
                              </Form>

                            </Col>
                          </Row>
                      </div>

              </Container>
            </section>
            
      </div>
    )
  }
}

export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html 
      frontmatter {
        path
        title
        page_header
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`