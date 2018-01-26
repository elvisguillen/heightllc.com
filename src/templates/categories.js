import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PaginateLink from '../components/PaginateLink'

import logoIcon from '../images/logo-icon.png'
import '../templates/expertise.scss'
import '../templates/team.scss'
import './research.scss'
import thumbnail from '../images/image_thumbnail.jpg'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'
import image_sidebar from '../images/image_page_sidebar.jpg'

const researchTemplate = ({data, pathContext, transition}) => {
  
  // const page = this.props.data.markdownRemark
  const { group, index, first, last } = pathContext
  const previousUrl = 'research/' + (index - 1 == 1 ? "" : (index - 1)).toString()
  const nextUrl = 'research/' + (index + 1).toString()
  const total = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.contentType === 'blog').length;
  
  return (
    <div style={transition && transition.style}>
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
              <h1>Research that resonates and goes beyond insights.</h1>
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
            
            {/* This is where we render the queried posts */}

            <Row>
              {group.map((post, index) => {
                post = post.node.frontmatter
                post.id = index
                return (
                  <Col className='research-post' md={{size: 12}} key={post.id}>
                    <Row>
                      <Col className='page-sidebar' md={{size: 4}}>
                        <Link to={post.path}><div className='page-sidebar-image'>
                          <img src={thumbnail} />
                        </div></Link>
                      </Col>
                      <Col className='page-copy' md={{size: 8}}> 
                        <div className='page-copy-inner'>
                          <header className='bebas white-bg'>
                            {post.date}
                          </header>
                          <div className='post-title'>
                            <Link to={post.path}><h1>{post.title}</h1></Link>
                          </div>
                          <div className='height-tags'>
                            <a className='height-tag' href='#'>Katie Bays</a>
                            <a className='height-tag' href='#'>Keystone XL</a>
                            <a className='height-tag' href='#'>ITV</a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                )
              })}
              <Col className='pagination-links' md={{size: 8, offset: 4}}>
                <Row>
                  <Col md={{size: 6}}>
                    <div className="pagination">
                      <div className="previousLink">
                          <PaginateLink tag={ first } url={ previousUrl } text=" " />
                      </div>
                      <div className="nextLink">
                          <PaginateLink tag={ last } url={ nextUrl } text=" " />
                      </div>
                    </div>
                  </Col>

                  <Col className='bebas pagination-counter' md={{size: 6}}>

                    <p>{index} / { total / 2 }</p>

                  </Col>
                </Row> 
              </Col>   
            </Row>
            
            


          </div>
        </Container>
      </section>
    </div>
  )
}

export default researchTemplate

export const categoriesPageQuery = graphql`
  query CategoriesPage($path: String!) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { contentType: { eq: "blog" } } } ) {
      totalCount
      edges {
        node{
          html 
          frontmatter {
            contentType
            path
            date(formatString: "DD MMMM, YYYY")
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