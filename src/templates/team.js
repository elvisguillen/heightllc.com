import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import image_team_john from '../images/team_john.png'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default function teamTemplate ({ transition, data }) {
    return(
      <div style={transition && transition.style}>
         <Helmet title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>{data.markdownRemark.frontmatter.title}</header>
                  <h1>{data.markdownRemark.frontmatter.page_header}</h1>
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

                      
                          <div className='team-category'>
                            <Row>
                              <Col className='page-link-container' md={{size: 12}}>
                                <div className='page-accordion-link team'>
                                  <a className='bebas'>Leadership</a>
                                </div>
                              </Col>
                            </Row>


                            <Row>
                            {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.category_team === 'Leadership').map(({ node: post, index }) => {
                              post = post.frontmatter
                              return (
                              <Col className='page-related-profiles' xs={{size: 12}} sm={{size: 6}} lg={{size: 4}} key={index}>
                                <Link to={post.path}><div className='page-team-sidebar-image'>
                                  <img src={post.portrait} /> 
                                </div></Link>
                                <div className='page-team-name'>
                                  <h3>{post.title}</h3>
                                  <h4>{post.job_title}</h4>  
                                </div>
                              </Col>
                              )
                            })}
                            </Row>
                          </div>

                          <div className='team-category'>
                            <Row>
                              <Col className='page-link-container' md={{size: 12}}>
                                <div className='page-accordion-link team'>
                                  <a className='bebas'>Research</a>
                                </div>
                              </Col>
                            </Row>


                            <Row>
                            {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.category_team === 'Research').map(({ node: post, index }) => {
                              post = post.frontmatter
                              post.id = index
                              return (
                              <Col className='page-related-profiles' xs={{size: 12}} sm={{size: 6}} lg={{size: 4}} key={post.id}>
                                <Link to={post.path}><div className='page-team-sidebar-image'>
                                  <img src={post.portrait} /> 
                                </div></Link>
                                <div className='page-team-name'>
                                  <h3>{post.title}</h3>
                                  <h4>{post.job_title}</h4>  
                                </div>
                              </Col>
                              )
                            })}
                            </Row>
                          </div>

                          <div className='team-category'>
                            <Row>
                              <Col className='page-link-container' md={{size: 12}}>
                                <div className='page-accordion-link team'>
                                  <a className='bebas'>Operations</a>
                                </div>
                              </Col>
                            </Row>


                            <Row>
                            {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.category_team === 'Operations').map(({ node: post, index }) => {
                              post = post.frontmatter
                              post.id = index
                              return (
                              <Col className='page-related-profiles' xs={{size: 12}} sm={{size: 6}} lg={{size: 4}} key={post.id}>
                                <Link to={post.path}><div className='page-team-sidebar-image'>
                                  <img src={post.portrait} /> 
                                </div></Link>
                                <div className='page-team-name'>
                                  <h3>{post.title}</h3>
                                  <h4>{post.job_title}</h4>  
                                </div>
                              </Col>
                              )
                            })}
                            </Row>
                          </div>

                          <div className='team-category'>
                            <Row>
                              <Col className='page-link-container' md={{size: 12}}>
                                <div className='page-accordion-link team'>
                                  <a className='bebas'>Sales</a>
                                </div>
                              </Col>
                            </Row>


                            <Row>
                            {data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.category_team === 'Sales').map(({ node: post, index }) => {
                              post = post.frontmatter
                              post.id = index
                              return (
                              <Col className='page-related-profiles' xs={{size: 12}} sm={{size: 6}} lg={{size: 4}} key={post.id}>
                                <div className='page-team-name'>
                                  <h3>{post.title}</h3>
                                  <h4>{post.job_title}</h4>  
                                  <a href={'mailto:' + post.email}>{post.email}</a>
                                </div>
                              </Col>
                              )
                            })}
                            </Row>
                          </div>
                      </div>

              </Container>
            </section>
            
      </div>
    )
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
            job_title
            email
            portrait
            category_team
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