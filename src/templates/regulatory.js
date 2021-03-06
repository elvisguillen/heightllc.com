import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { basename } from 'path'
import Link from 'gatsby-link'

import logoIcon from '../images/logo-icon.png'
import thumbnail from '../images/image_thumbnail.jpg'

// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()

export default function Template ({ data, transition }) {
  const { markdownRemark: post } = data
  // const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []
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
                <Col className='page-header-text' xs={{size: 12}} md={{size: 9}}>
                  <header className='bebas'>Height Capital Markets</header>
                  <h1>Insights, Elevated.</h1>
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

                      <Col className='page-copy regulatory' xs={{size: 12}} md={{size: 10}}>
                        <h1>{post.frontmatter.title}</h1>
                        
                        <div className='research-post-copy' dangerouslySetInnerHTML={{ __html: post.html }}/>

                        {/* {post.frontmatter.attachments && (<Container><h4>Attachments</h4><CardGroup>
                          {post.frontmatter.attachments.map((attachment, i) => (
                            <Card key={i}>
                              <CardBody>
                                <CardTitle><a href={attachment.filename}>{basename(attachment.filename)}</a></CardTitle>
                              </CardBody>
                            </Card>
                          ))}
                        </CardGroup></Container>)} */}
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

export const regulatoryQuery = graphql`
  query RegulatoryPagebyPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        author
        path
        category
        tags
        intro_copy
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
