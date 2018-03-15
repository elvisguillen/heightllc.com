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


export default class researchTemplate extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: 0 }
  }
  
  toggle(e) {
    let event = e.target.dataset.event
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) })
  }

  componentDidMount() {
  
  }
  render() {
    const {collapse} = this.state;
    const page = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark

    return (
      <div style={this.props.transition && this.props.transition.style} className='research-page'>
          {/* <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} /> */}
        
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>
        <section className='page-header'>
          <Container>
            <Row>
              <Col className='page-header-text' xs={{size: 12}} md={{size: 9}}>
                <header className='bebas'>Research</header>
                <h1>Research that resonates and goes beyond insights.</h1>
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

              <div className="page-accordion-container" key={0}>
                <Row>
                  <Col className='page-link-container' md={{size: 12}}>
                    <div className='page-accordion-link'>
                      <a onClick={this.toggle} data-event={0} className='bebas'>Research</a>
                      <button className='subheader-button' onClick={this.toggle} data-event={0}>{this.state.collapse === 0 ? 'Close -' : 'Open +'}</button>
                    </div>
                  </Col>
                </Row>
              
              {/* This is where we render the queried posts */}
                <Collapse isOpen={collapse === 0}>
                  <Row>
                  {posts.edges.filter(post => post.node.frontmatter.category === 'Research').slice(0, 3).map(({ node: post, index }) => {
                      post = post.frontmatter
                      post.id = index
                      return (
                        <Col className='research-post' md={{size: 12}} key={post.id}>
                          <Row>
                            <Col className='page-sidebar' xs={{size: 12}} md={{size: 4}}>
                              <Link to={post.path}><div className='page-sidebar-image'>
                              {post.image_featured ? 
                                <img className='research-image' src={post.image_featured} />
                              : 
                                <img className='research-image' src={thumbnail} />
                              }
                              </div></Link>
                            </Col>
                            <Col className='page-copy' xs={{size: 12}} md={{size: 8}}> 
                              <div className='page-copy-inner'>
                                <header className='bebas white-bg'>
                                  {post.date}
                                </header>
                                <div className='post-title'>
                                  <Link to={post.path}><h1>{post.title}</h1></Link>
                                </div>
                                <div className='height-tags'>
                                  
                                  <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                                  <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                                  {post.tags.map((tag, index) => {
                                    return (
                                    <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                                    )
                                  })}
                                  
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      )
                    })}
                    <Col xs={{size: 12}} md={{size: 8, offset: 4}} className='category-nav'>
                      <Link to='/categories/research'>View All ›</Link>
                    </Col>
                  </Row>
                </Collapse>
              </div>

              {/* ACCORDION 2 */}
              
              <div className="page-accordion-container" key={1}>
                <Row>
                  <Col className='page-link-container' md={{size: 12}}>
                    <div className='page-accordion-link'>
                      <a onClick={this.toggle} data-event={1} className='bebas'>Height In The News</a>
                      <button className='subheader-button' onClick={this.toggle} data-event={1}>{this.state.collapse === 1 ? 'Close -' : 'Open +'}</button>
                    </div>
                  </Col>
                </Row>
              
              {/* This is where we render the queried posts */}
                <Collapse isOpen={collapse === 1}>
                  <Row>
                  {posts.edges.filter(post => post.node.frontmatter.category === 'Height In The News').slice(0, 3).map(({ node: post, index }) => {
                      post = post.frontmatter
                      post.id = index
                      return (
                        <Col className='research-post' md={{size: 12}} key={post.id}>
                          <Row>
                            <Col className='page-sidebar' xs={{size: 12}} md={{size: 4}}>
                              <Link to={post.path}><div className='page-sidebar-image'>
                              {post.image_featured ? 
                                <img className='research-image' src={post.image_featured} />
                              : 
                                <img className='research-image' src={thumbnail} />
                              }
                              </div></Link>
                            </Col>
                            <Col className='page-copy' xs={{size: 12}} md={{size: 8}}> 
                              <div className='page-copy-inner'>
                                <header className='bebas white-bg'>
                                  {post.date}
                                </header>
                                <div className='post-title'>
                                  <Link to={post.path}><h1>{post.title}</h1></Link>
                                </div>
                                <div className='height-tags'>
                                  
                                  <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                                  <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                                  {post.tags.map((tag, index) => {
                                    return (
                                    <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                                    )
                                  })}
                                  
                                </div>



                              </div>
                            </Col>
                          </Row>
                        </Col>
                      )
                    })}
                    <Col xs={{size: 12}} md={{size: 8, offset: 4}} className='category-nav'>
                      <Link to='/categories/height-in-the-news'>View All ›</Link>
                    </Col>
                  </Row>
                </Collapse>
              </div>
              
              {/* ACCORDION 3 */}

              <div className="page-accordion-container" key={2}>
                <Row>
                  <Col className='page-link-container' md={{size: 12}}>
                    <div className='page-accordion-link'>
                      <a onClick={this.toggle} data-event={2} className='bebas'>Press Release</a>
                      <button className='subheader-button' onClick={this.toggle} data-event={2}>{this.state.collapse === 2 ? 'Close -' : 'Open +'}</button>
                    </div>
                  </Col>
                </Row>
              
              {/* This is where we render the queried posts */}
                <Collapse isOpen={collapse === 2}>
                  <Row>
                  {posts.edges.filter(post => post.node.frontmatter.category === 'Press Release').slice(0, 3).map(({ node: post, index }) => {
                      post = post.frontmatter
                      post.id = index
                      return (
                        <Col className='research-post' md={{size: 12}} key={post.id}>
                          <Row>
                            <Col className='page-sidebar' xs={{size: 12}} md={{size: 4}}>
                              <Link to={post.path}><div className='page-sidebar-image'>
                              {post.image_featured ? 
                                <img className='research-image' src={post.image_featured} />
                              : 
                                <img className='research-image' src={thumbnail} />
                              }
                              </div></Link>
                            </Col>
                            <Col className='page-copy' xs={{size: 12}} md={{size: 8}}> 
                              <div className='page-copy-inner'>
                                <header className='bebas white-bg'>
                                  {post.date}
                                </header>
                                <div className='post-title'>
                                  <Link to={post.path}><h1>{post.title}</h1></Link>
                                </div>
                                <div className='height-tags'>
                                  
                                  <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                                  <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
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
                    <Col xs={{size: 12}} md={{size: 8, offset: 4}} className='category-nav'>
                      <Link to='/categories/press-release'>View All ›</Link>
                    </Col>
                  </Row>
                </Collapse>
              </div>
              
              
            </div>
          </Container>
        </section>
      </div>
    )
  }
}

export const researchPageQuery = graphql`
  query ResearchPage($path: String!) {
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