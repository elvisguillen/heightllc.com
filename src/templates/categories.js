import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import PaginateLink from '../components/PaginateLink'

import logoIcon from '../images/logo-icon.png'
import thumbnail from '../images/image_thumbnail.jpg'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'
import image_sidebar from '../images/image_page_sidebar.jpg'

const categoriesTemplate = ({data, pathContext, transition}) => {
  
  // const page = this.props.data.markdownRemark
  
  const { nodes, page, prev, next, pages, total, limit, category } = pathContext

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
              <header className='bebas'>Height Capital Markets</header>
              <h1>Insights, Elevated.</h1>
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
                  <a className='bebas' href='#'>{category}</a>
                  <Link to='/research' className='subheader-button'>Back To Research</Link>
                </div>
              </Col>
            </Row>
            
            {/* This is where we render the queried posts */}

            <Row>
              {nodes.map((post, index) => {
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
                            <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()}>{post.author}</Link>
                            {post.tags.map((tag, index) => {
                              return (
                              <Link className='height-tag' to={'/tags/' + tag.replace(',', '').replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                              )
                            })}
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
                          <PaginateLink url={ prev } text=" " />
                      </div>
                      <div className="nextLink">
                          <PaginateLink url={ next} text=" " />
                      </div>
                    </div>
                  </Col>

                  <Col className='bebas pagination-counter' md={{size: 6}}>

                    <p>{page} / { pages }</p>

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

export default categoriesTemplate

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
            author
            category
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