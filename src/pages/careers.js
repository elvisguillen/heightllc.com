import React, { Component, PropTypes } from 'react'
import { Collapse, Button, Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PaginateLink from '../components/PaginateLink'
import img from 'gatsby-image'

import logoIcon from '../images/logo-icon.png'
import thumbnail from '../images/image_thumbnail.jpg'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'
import image_sidebar from '../images/image_page_sidebar.jpg'


export default class careersTemplate extends Component {
  

  componentDidMount() {
  
  }

  render() {

    return (
      <div style={this.props.transition && this.props.transition.style} className='careers-page'>
          {/* <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} /> */}
        
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>
        <section className='page-header'>
          <Container>
            <Row>
              <Col className='page-header-text' xs={{size: 12}} md={{size: 9}}>
                <header className='bebas'>Careers</header>
                <h1>We're looking for creative, ambitous individuals to join our growing team.</h1>
              </Col>

              <div className='page-circular-header'>
                <Link to='/'><img src={logoIcon} /></Link>
              </div>
            
            </Row>
          </Container>
        </section>

        <section className='page-content'>
          <Container>      
            <div className='page-accordion'>
              
              {/* ACCORDION 1 */}
              <Row>
                <Col className='page-copy intro' xs={{size: 12}} md={{size: 12}}>
                  <p>Height Securities is an investment bank that specializes in regulatory and policy research for institutional and corporate clients. Please find our current job openings listed below.</p>
                </Col>
              </Row>

              <div className="page-accordion-container">
                <Row>
                  <Col className='page-link-container' md={{size: 12}}>
                    <div className='page-accordion-link'>
                      <a className='bebas'>Job Postings</a>
                    </div>
                  </Col>
                </Row>

                  <Row>
                        <Col className='research-post' md={{size: 12}}>
                          <Row>
                            
                            <Col className='page-copy' xs={{size: 12}} md={{size: 12}}> 
                              <div className='page-copy-inner'>
                                {/* <header className='bebas white-bg'>
                                  {post.date}
                                </header> */}
                                <div className='post-title'>
                                  <Link to='/files/Height_Job_Posting_Investment_Research_Analyst.pdf' target='_blank'><h1>Investment Research Analyst</h1></Link>
                                </div>
                              </div>
                            </Col>

                          </Row>
                        </Col>

                        <Col className='research-post' md={{size: 12}}>
                          <Row>
                            
                            <Col className='page-copy' xs={{size: 12}} md={{size: 12}}> 
                              <div className='page-copy-inner'>
                                {/* <header className='bebas white-bg'>
                                  {post.date}
                                </header> */}
                                <div className='post-title'>
                                  <Link to='/files/Height_Job_Posting_Associate_Policy_Advisor.pdf' target='_blank'><h1>Associate Policy Advisor</h1></Link>
                                </div>
                              </div>
                            </Col>

                          </Row>
                        </Col>

                        <Col className='research-post' md={{size: 12}}>
                          <Row>
                            
                            <Col className='page-copy' xs={{size: 12}} md={{size: 12}}> 
                              <div className='page-copy-inner'>
                                {/* <header className='bebas white-bg'>
                                  {post.date}
                                </header> */}
                                <div className='post-title'>
                                  <Link to='/files/Height_Job_Posting_Associate_M&A_Policy_Advisor.pdf' target='_blank'><h1>Associate M&A Policy Advisor</h1></Link>
                                </div>
                              </div>
                            </Col>

                          </Row>
                        </Col>


                  </Row>
              </div>              
            </div>

            <Row>
              <Col className='page-copy outro' xs={{size: 12}} md={{size: 12}}>                
                <p>Height is committed to providing equal employment opportunities (EEO) to all employees and applicants for employment without regard to race, color, ethnicity, gender, sexual orientation, gender identity, transgender status, marital or family status, veteran status, age, national origin, ancestry, religion, disability or medical condition, or any other basis protected by federal, state or local law.</p>
                <h2 className='teal'>If you're interested in any of our positions, please <Link to='/contact'>Contact Us ›</Link></h2>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export const careersPageQuery = graphql`
  query CareersPage($path: String!) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { contentType: { eq: "blog" } } } ) {
      totalCount
      edges {
        node{
          html 
          frontmatter {
            contentType
            path
            author
            date(formatString: "DD MMMM, YYYY")
            title
            category
            image_featured 
            tags
          }    
        }
      }
    }

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