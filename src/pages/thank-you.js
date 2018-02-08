import React, { Component, PropTypes } from 'react'
import { Container, Row, Col, Form, FormGroup, Input} from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default class contactTemplate extends Component {
  render() {
    const page = this.props.data.markdownRemark
    
    return (
      <div style={this.props.transition && this.props.transition.style}>
         <Helmet title={`Thank You | ${this.props.data.site.siteMetadata.title}`} />
        
         <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Contact Us</header>
                  <h1>Thanks for filling out the form!</h1>
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
                              
                              <div className='page-sidebar-content'>
                                <header className='bebas'>Contact</header>
                                <h3>Give us a call to learn more about our expertise.</h3>  
                                <div className='phone-numbers'>
                                  <p><span>Sales:</span>(202) 629-0030</p>
                                  <p><span>Trading:</span>(202) 629-0015</p>
                                </div>
                              </div>
                            </Col>

                            <Col className='page-copy' md={{size: 8}}>
                              
                              <p> Thanks for contacting us, one of our associates will be in touch shortly. </p>
                               
                            </Col>

                            
                            
                          </Row>
                      </div>

              </Container>
            </section>
            
      </div>
    )
  }
}

export const thankyouPageQuery = graphql`
  query ThankYouPage($path: String!) {
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