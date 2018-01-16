import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { basename } from 'path'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import './team.scss'
import image_team_john from '../images/team_john.png'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

// const findNode = (path, data) => data.allMarkdownRemark.edges
//   .map(edge => edge.node.frontmatter)
//   .filter(r => r.path === path)
//   .pop()

export default class teamMemberTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    return (
      <div style={this.props.transition && this.props.transition.style}>
         <Helmet title={`${post.frontmatter.title}`} />
        

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Team</header>
                  {/* <h1>{post.frontmatter.page_header}</h1> */}
                </Col>

                <div className='page-circular-header'>
                  <a href='/'><img src={logoIcon} /></a>
                </div>
                
                </Row>
              </Container>
            </section>

            <section className='page-content'>
              <Container>
                      
                      <div className="team-member-container">
                        <Row>
                          <Col className='page-link-container' md={{size: 12}}>
                            <div className='page-accordion-link'>
                              <a className='bebas' href='#'>Leadership</a>
                              <button>Contact | <span>first.last@heightcapital.com</span></button>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col className='page-sidebar' md={{size: 4}}>
                            <div className='page-sidebar-image'>
                              <img src={image_team_john} />
                            </div>
                            <div className='page-sidebar-content'>
                              <div className='page-team-name'>
                                <h3>{post.frontmatter.name}</h3>
                                <h4>CEO</h4>  
                              </div>
                              <div className='page-team-social-icons'>
                                <a href='https://twitter.com/heightllc' target='_blank'><img src={twitter_dark} /></a>
                                <a href='https://www.linkedin.com/company/height-securities?trk=company_logo' target='_blank' ><img src={linkedin_dark} /></a>
                              </div>
                              <div className='page-team-quote'>
                                <h3>Vivamus pretium elementum elit tinciduntau emti.</h3>
                              </div>
                              <div className='height-tags'>
                                <a className='height-tag' href='#'>John Akridge</a>
                                <a className='height-tag' href='#'>Audio</a>
                              </div>                      
                            </div>
                          </Col>
                          <Col className='page-copy' md={{size: 8}}>
                            <h1>{post.frontmatter.intro}</h1>
                            <p>{post.frontmatter.details}</p>
                            
                          </Col>
                        </Row>

                        <Row>
                          <Col className='page-link-container' md={{size: 12}}>
                            <div className='page-accordion-link'>
                              <a className='bebas' href='#'>Leadership</a>
                              <button>View All</button>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col className='page-related-profiles' md={{size: 4}}>
                            <div className='page-sidebar-image'>
                              <img src={image_team_john} />
                            </div>
                            <div className='page-team-name'>
                              <h3>FirstName<br/>LastName</h3>
                              <h4>CEO</h4>  
                            </div>
                          </Col>

                          <Col className='page-related-profiles' md={{size: 4}}>
                            <div className='page-sidebar-image'>
                              <img src={image_team_john} />
                            </div>
                            <div className='page-team-name'>
                              <h3>FirstName<br/>LastName</h3>
                              <h4>CEO</h4>  
                            </div>
                          </Col>

                          <Col className='page-related-profiles' md={{size: 4}}>
                            <div className='page-sidebar-image'>
                              <img src={image_team_john} />
                            </div>
                            <div className='page-team-name'>
                            <h3>FirstName<br/>LastName</h3>
                              <h4>CEO</h4>  
                            </div>
                          </Col>  
                        </Row>
                      </div>
                    

              </Container>
            </section>
            
      </div>
    )
  }
}

export const teamMemberPageQuery = graphql`
  query TeamMemberPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html 
      frontmatter {
        path
        title
        name
        portrait
        email
        twitter
        linkedin
        intro
        details
      }
    } 
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }

  }
`