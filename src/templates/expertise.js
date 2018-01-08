import React, { Component, PropTypes } from 'react'
import { Collapse, Button, Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import image_sidebar from '../images/image_page_sidebar.jpg'

export default class expertiseTemplate extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: 1 }
  }
  
  toggle(e) {
    let event = e.target.dataset.event
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) })
  }

  componentDidMount() {
    const pagenavStyle = {
        height: '80%!important'
    };
  }
  

  render() {
    const {cards, collapse, title} = this.state;
    const posts = [
      {id: 1, title: 'Research'},
      {id: 2, title: 'Investment Banking'},
      {id: 3, title: 'Sales + Trading'},
      {id: 4, title: 'Advisory Services'},
    ];
    const page = this.props.data.markdownRemark;


    return (
      <div>
        <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />
      
            <section className='page-header'>
              <Container>
                <Row>
                  <Col className='page-header-text' md={{size: 9}}>
                    <header className='bebas'>Expertise</header>
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
                <div className='page-accordion'>
                {posts.map((post) => {
                  return (
                    <div className='page-accordion-container' key={post.id}>
                      <Row>
                        <Col className='page-link-container' md={{size: 12}}>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>{post.title}</a>
                            <button onClick={this.toggle} data-event={post.id}>{this.state.collapse === post.id ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Col>
                      </Row>

                        <Collapse isOpen={collapse === post.id}>
                          <Row>
                            <Col className='page-sidebar' md={{size: 4}}>
                              <div className='page-sidebar-image'>
                                <img src={image_sidebar} />
                              </div>
                              <div className='page-sidebar-content'>
                                <header className='bebas'>Contact</header>
                                <h3>Give us a call to learn more about our expertise.</h3>  
                                <div className='phone-numbers'>
                                  <p><span>Sales:</span>(202) 629-0030</p>
                                  <p><span>Trading:</span>(202) 629-0015</p>
                                </div>
                              </div>
                            </Col>
                            <Col className='page-copy' md={{size: 8}}>
                              <h1>Capture comprehensive research from the capital’s leading financiers and advisors.</h1>
                              <p>Through collaboration, we are able to experience the dynamic nature of the world and absorb 
                                its abundant data. Free from traditional constraints of covering narrowed companies, issuing ratings, 
                                or publishing on earnings results, our research fits perfectly into two distinctions. Foundation Research 
                                identifies investment themes with 6-12 months duration based on secular changes in a regulatory landscape. 
                                Special Situations Research is supported by in-depth primary source research honed in on a particular market. 
                                Comprehensively, they map out the entire financial landscape.</p>
                                <ul>
                                  <li>›	Financial Services</li>
                                  <li>› Healthcare</li>
                                  <li>›	Energy & Industrials</li>
                                  <li>›	Tax, Trade & Budget</li>
                                  <li>›	Special Situations</li>
                                  <li>›	Politics & Elections</li>
                                </ul>
                            </Col>
                          </Row>
                        </Collapse>
                      </div>
                  )
                })}
                </div>
              </Container>
            </section>
            
      </div>
    )
  }
}

export const expertisePageQuery = graphql`
  query ExpertisePage($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } }) {
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