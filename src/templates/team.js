import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import './team.scss'
import image_team_john from '../images/team_john.png'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default class teamTemplate extends Component {
  render() {
    const page = this.props.data.markdownRemark
    const team = this.props.data.allMarkdownRemark.edges
    return (
      <div style={this.props.transition && this.props.transition.style}>
         <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />
        

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Team</header>
                  <h1>{page.frontmatter.page_header}</h1>
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
                              <button>View All</button>
                            </div>
                          </Col>
                        </Row>


                        <Row>

                          {team.map((team_member, index) => {
                            team_member = team_member.node.frontmatter
                            team_member.id = index
                            return (
                              <Col className='page-related-profiles' md={{size: 4}} key={team_member.id}>
                                <div className='page-sidebar-image'>
                                 <Link to ={team_member.path}><img src={image_team_john} /> </Link>
                                </div>
                                <div className='page-team-name'>
                                  <h3>{team_member.name}</h3>
                                  <h4>{team_member.title}</h4>  
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

export const teamPageQuery = graphql`
  query TeamPage($path: String!) {
    allMarkdownRemark(filter: { frontmatter: { contentType: { eq: "team_member" } } } ) {
      edges {
        node{
          html 
          frontmatter {
            path
            title
            name
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