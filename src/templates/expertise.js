import React, { Component, PropTypes } from 'react'
import { Collapse, Button, Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import image_sidebar from '../images/image_page_sidebar.jpg'

export default class expertiseTemplate extends Component {
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
    const pagenavStyle = {
        height: '80%!important'
    };
  }
  

  render() {
    const {cards, collapse, title} = this.state;
    const page = this.props.data.markdownRemark;
    const expertises = this.props.data.markdownRemark.frontmatter.expertises;

    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />

        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

            <section className='page-header'>
              <Container>
                <Row>
                  <Col className='page-header-text' md={{size: 9}}>
                    <header className='bebas'>{page.frontmatter.title}</header>
                    <h1>{page.frontmatter.page_header}</h1>
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
                {expertises.map((expertise, index) => {
                  expertise.id = index
                  return (
                    <div className='page-accordion-container' key={expertise.id}>
                      <Row>
                        <Col className='page-link-container' md={{size: 12}}>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>{expertise.title}</a>
                            <button onClick={this.toggle} data-event={expertise.id}>{this.state.collapse === expertise.id ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Col>
                      </Row>

                        <Collapse isOpen={collapse === expertise.id}>
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
                              <h1>{expertise.header}</h1>
                              <p>{expertise.copy}</p>
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
        expertises {
          title
          header
          copy
        }
      }      
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`