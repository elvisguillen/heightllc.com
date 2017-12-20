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
    this.state = { collapse: 1, cards: [1, 2, 3, 4] }
  }
  
  toggle(e) {
    let event = e.target.dataset.event
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) })
  }

  render() {
    const {cards, collapse} = this.state;
    return (
      <div>
        {/* <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} /> */}
        

            <section className='page-header'>
              <Container>
                <Row>
                  <Col className='page-header-text' md={{size: 9}}>
                    <header className='bebas'>Expertise</header>
                    <h1>From analysis to investments, our expertise goes beyond insights.</h1>
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
                {cards.map(index => {
                  return (
                  <div>
                    <div className='page-accordion-container' key={index}>
                      <Row>
                        <Col className='page-link-container' md={{size: 12}}>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>Research</a>
                            <button onClick={this.toggle} data-event={index}>{this.state.collapse === index ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Col>
                      </Row>

                        <Collapse isOpen={collapse === index}>
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

                      <div className='page-accordion-container' key={index}>
                        
                        <Col className='page-link-container' md={{size: 12}}>
                        <Row>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>Investment Banking</a>
                            <button onClick={this.toggle} data-event={index}>{this.state.collapse === index ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Row>
                        </Col>

                        <Collapse isOpen={collapse === index}>
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

                      <div className='page-accordion-container' key={index}>
                        <Col className='page-link-container' md={{size: 12}}>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>Sales + Trading</a>
                            <button onClick={this.toggle} data-event={index}>{this.state.collapse === index ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Col>

                        <Collapse isOpen={collapse === index}>
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

                      <div className='page-accordion-container' key={index}>
                        <Col className='page-link-container' md={{size: 12}}>
                          <div className='page-accordion-link'>
                            <a className='bebas' href='#'>Advisory Services</a>
                            <button onClick={this.toggle} data-event={index}>{this.state.collapse === index ? 'Close -' : 'Open +'}</button>
                          </div>
                        </Col>

                        <Collapse isOpen={collapse === index}>
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

