import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import '../templates/expertise.scss'
import '../templates/team.scss'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default class researchTemplate extends Component {
  render() {
    // const page = this.props.data.markdownRemark
    
    return (
      <div style={this.props.transition && this.props.transition.style}>
         {/* <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} /> */}
        
         <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>
            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Research</header>
                  <h1>From analysis to investments, our expertise goes beyond insights.</h1>
                </Col>

                <div className='page-circular-header'>
                  <Link to='/'><img src={logoIcon} /></Link>
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
                              <a className='bebas' href='#'>Research</a>
                              <button>View All</button>
                            </div>
                          </Col>
                        </Row>


                        <Row>

                          {this.props.data.allMarkdownRemark.edges.map((post, index) => {
                              post = post.node.frontmatter
                              post.id = index
                              return (
                                <Col className='page-related-profiles' md={{size: 4}} key={post.id}>
                                  <Link to={post.path}><div className='page-team-sidebar-image'>
                                  {/* <img src={post.attachments.filename} />  */}
                                  </div></Link>
                                  <div className='page-team-name'>
                                    <h3>{post.title}</h3>
                                  </div>
                                </Col>
                              )
                            })}
                          
                        </Row>
                      </div>

              </Container>
            </section>
            
      </div>
    )
  }
}

export const researchPageQuery = graphql`
  query ResearchPage($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { contentType: { eq: "blog" } } } ) {
      edges {
        node{
          html 
          frontmatter {
            path
            title
            name
            attachments {
              filename
            }
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