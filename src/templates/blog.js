import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { basename } from 'path'
import Link from 'gatsby-link'

import logoIcon from '../images/logo-icon.png'

// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()

export default function Template ({ data, transition }) {
  const { markdownRemark: post } = data
  const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []
  return (
    <div style={transition && transition.style}>
         <Helmet title={`Research | ${post.frontmatter.title}`} />
        
         <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Research</header>
                  <h1>{post.frontmatter.title}</h1>
                </Col>

                <div className='page-circular-header'>
                  <Link to='/'><img src={logoIcon} /></Link>
                </div>
                
                </Row>
              </Container>
            </section>

            <section className='page-content research'>
              
              <Container>


                    
                    <Row>

                      <Col className='page-copy' md={{size: 8}}>
                        <div dangerouslySetInnerHTML={{ __html: post.html }}/>

                        {post.frontmatter.attachments && (<Container><h4>Attachments</h4><CardGroup>
                          {post.frontmatter.attachments.map((attachment, i) => (
                            <Card key={i}>
                              <CardBody>
                                <CardTitle><a href={attachment.filename}>{basename(attachment.filename)}</a></CardTitle>
                              </CardBody>
                            </Card>
                          ))}
                        </CardGroup></Container>)}
                      </Col>

                      <Col className='page-sidebar' md={{size: 4}}>
                        {/* <div className='page-sidebar-image'>
                          <img src={image_sidebar} />
                        </div> */}
                        <div className='page-sidebar-content'>
                          <header className='bebas'>Contact</header>
                            <h3>Give us a call to learn more about our expertise.</h3>  
                          <div className='phone-numbers'>
                            <p><span>Sales:</span>(202) 629-0030</p>
                            <p><span>Trading:</span>(202) 629-0015</p>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    

                    {/* {post.frontmatter.related && (<Container><h4>Related</h4><CardGroup>
                      {related.map((r, i) => (
                        <Card key={i}>
                          <CardBody>
                            <CardTitle>
                              <Link to={r.path}>{r.title}</Link>
                            </CardTitle>
                          </CardBody>
                        </Card>
                      ))}
                    </CardGroup></Container>)}
                   */}
                
              </Container>

            </section>  
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        attachments {
          filename
        }
        related {
          post
        }
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`
