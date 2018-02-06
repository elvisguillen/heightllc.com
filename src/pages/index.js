import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { fadeInLeft, fadeInRight } from 'react-animations'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Cloud from '../components/parallax/clouds.js'
import Press_Release from '../components/press-release.js'
import Height_Feed from '../components/height-feed'
import FeedContent from '../components/FeedContent'
import heightScroll from '../components/height-scroll'
import Fade from 'react-reveal/Fade'
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import team1 from '../images/team_stefanie.png'

import '../templates/home.scss'

import logocolor from '../images/logo-color.png'
import icon_skip from '../images/icon_skip.png'
import icon_scroll from '../images/icon_scroll.png'
import icon_back from '../images/icon_back.png'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heightPosition: 3119,
      isFixed: false,
      firstFixed: true,
      secondFixed: false,
      thirdFixed: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScrollClick = this.handleScrollClick.bind(this)
  }

  handleScrollClick(e) {
    scroll.scrollTo(880, {
      duration: 1500,
      smooth: "easeOutCubic",
    });
  }
  
  handleSkipClick(e) {
    scroll.scrollTo(2350, {
      duration: 1500,
      smooth: "easeOutCubic"
    });
  }

  handleStartClick(e) {
    scroll.scrollTo(0, {
      duration: 1500,
      smooth: "easeOutCubic"
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)

  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const scrollBottom = 3119 - scrollTop * 1.2
    const heightFeet = Math.round(scrollBottom)
    this.setState({ heightPosition: heightFeet })
    
    const scrollJackFirstStart = scrollTop > 0 && scrollTop < 420
    const scrollJackSecondStart = scrollTop > 421 && scrollTop < 940
    const scrollJackThirdStart = scrollTop > 941 && scrollTop < 1560
    const scrollJackThirdEnd = scrollTop > 1600 

    if (scrollJackFirstStart) {
      this.setState({ 
        firstFixed: true,
        secondFixed: false,
        thirdFixed: false
      })
    } 

    if (scrollJackSecondStart) {
      this.setState({ 
        firstFixed: false,
        secondFixed: true,
        thirdFixed: false,
      })
    } 
    
    if (scrollJackThirdStart) {
      this.setState({ 
        firstFixed: false,
        secondFixed: false,
        thirdFixed: true, 
      })
    } 

    if (scrollJackThirdEnd) {
      this.setState({ 
        firstFixed: false,
        secondFixed: false,
        thirdFixed: false
      })
    } 

    const monumentHeight = scrollTop > 2137
    
    if (monumentHeight) {
      this.setState({ isFixed: true })
    } else {
      this.setState({ isFixed: false })
    }
  }

  render() {
    const posts = this.props.data.allMarkdownRemark;

    return(
      
      <div id='home-page' style={this.props.transition && this.props.transition.style}>
      
      <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

      <div className='skip-icon'>
        <a onClick={this.state.isFixed ? this.handleStartClick : this.handleSkipClick}><img className={this.state.isFixed ? 'point-up' : ''} src={icon_skip} /></a>
        <div className='skip-label'>{this.state.isFixed ? 'Start' : 'Skip'}</div>
      </div>    

      <div className={this.state.firstFixed ? 'scroll-icon' : 'scroll-icon hidden'}>
        <a onClick={this.handleScrollClick} ><img className='scroll-icon-image' src={icon_scroll} /></a>
      </div>  
      
      <p className={this.state.isFixed ? "height-number-fixed height-position" : "height-position"}><span>{this.state.isFixed ? "555" : this.state.heightPosition}</span><span>FT</span></p>
      <section id='top-scroll' className="top">
        <Container>
            <Col id='firstHeading' className={this.state.firstFixed ? "scroll-jack-active heading first-heading text-left" : "scroll-jack-inactive heading first-heading text-left"} xs={{size: 12}} md={{size: 10, offset: 0}}>    
                <div className='d-none d-sm-block'>
                  <h4>Analysis</h4>              
                  <h1>Close scrutiny of regulatory,</h1>          
                  <h1>macroeconomic, and geopolitical risk</h1>            
                  <h1>made actionable.</h1>
                </div>
                <div className='d-block d-sm-none'>
                  <h4>Analysis</h4>              
                  <h1>Close scrutiny of regulatory, macroeconomic, and geopolitical risk made actionable.</h1>
                </div>
            </Col>
          <Col id='secondHeading' className={this.state.secondFixed ? "scroll-jack-active heading second-heading text-right" : "scroll-jack-inactive heading second-heading text-right"} xs={{size: 12}} md={{size: 10, offset: 2}}>     
                <div className='d-none d-sm-block'>
                  <h4>Investment</h4>        
                  <h1>Capital markets services</h1>
                  <h1>and assessments catapulted from </h1>
                  <h1>Washington to Beyond.</h1>
                </div>
                
                <div className='d-block d-sm-none'>
                  <h4>Investment</h4>        
                  <h1>Capital markets services and assessments catapulted from Washington to Beyond.</h1>
                </div>
          </Col>
          <Col id='thirdHeading' className={this.state.thirdFixed ? "scroll-jack-active heading third-heading text-left" : "scroll-jack-inactive heading third-heading text-left"} xs={{size: 12}} md={{size: 10, offset: 0}}> 
              <div className='d-none d-sm-block'>
                <h4>Insights</h4>
                <h1>Differentiated research opinions</h1>          
                <h1>from experienced, high-caliber traders</h1>
                <h1>and analysts.</h1>
              </div>
              
              <div className='d-block d-sm-none'>
                <h4>Insights</h4>
                <h1>Differentiated research opinions from experienced, high-caliber traders and analysts.</h1>
              </div>
          </Col>
          <Col id='fourthHeading' className="monument-height" ref={(section) => { this.Monument = section; }} xs={{size: 12}} md={{size: 10, offset: 0}}>
            <h4>Height of The Washington Monument</h4>
          </Col>
          
            <Col className="circular-heading text-right">
              <div className='branding-color'>
                <img className="logo-color" src={logocolor} />
              </div>
            </Col>
        </Container>
      </section>
  
      <section id='cta' className="cta">
        <Container>
          <Row>
            <Col className='cta-left' xs={{size: 12}} md={{size: 4}}>
              <ul className="cta-links">
                  <Fade left>
                    <li>
                      Research
                    </li>
                  </Fade>
                  <Fade left delay={50}>
                    <li>
                      Investment Banking
                    </li>
                  </Fade>
                
                  <Fade left delay={100}>
                    <li>
                      Sales + Trading
                    </li>
                  </Fade>

                  <Fade left delay={150}>
                    <li className='last-type'>
                      Advisory
                    </li>
                  </Fade>
              </ul>
              <Fade left delay={200}>
                <Link className='cta-link' to='/expertise'>Expertise &rsaquo;</Link>
              </Fade>
            </Col>
            <Col className='cta-right' xs={{size: 12}} md={{size: 8}}>
                
                  <h1>Insights, Elevated.</h1>  
                  <p>At Height Capital Markets, we understand policy risk. Investment banking and research traverses deep into the most heavily-regulated sectors of the economy to capture insights with an unmatched expertise. We know our clients need a firm that knows how regulatory, legal, policy and other non-financial risks impact their portfolio and operations. We are that firm.</p>
                  {/* <p>{this.props.data.markdownRemark.frontmatter.cta_copy}</p> */}
              
            </Col>
          </Row>
        </Container>
      </section>
  
      <Height_Feed>
  
          <FeedContent linkClassName={'Health Care'}>
            <div key={'Health_Care'} className='team-feed'>
              <Row>
                
              {posts.edges.filter(post => (post.tags = post.node.frontmatter.tags.filter(tag => tag === 'Healthcare')).length).slice(0, 1).map(({ node: post, index }) => {
                post = post.frontmatter
                post.id = index
                return (
                <Col xs={{size: 12}} md={{size: 12}} key={post.id}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>{post.date}</header>
                    <Link to={post.path}><h1>{post.title} ›</h1></Link>
                    <Row>
                      <div className='height-tags'>
                        <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                        <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                        {post.tags.map((tag, index) => {
                          return (
                          <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                          )
                        })} 
                      </div>
                      {/* <Col md={{size: 4}} className='team-feed-nav'>
                        <a href='#'><img className='icon_back' src={icon_back} /></a>
                        <a href='#'><img className='icon_forward' src={icon_back} /></a>
                      </Col> */}
                    </Row>
                  </div>
                </Col>
                )
              })}

              </Row>
            </div>
          </FeedContent>
  
          <FeedContent linkClassName={'Financial Services'}>
            <div key={'Financial_Services'} className='team-feed'>
              <Row>
                
              { 
                posts.edges.filter(post => (post.tags = post.node.frontmatter.tags.filter(tag => tag === 'Financial Services')).length).slice(0, 1).map(({ node: post, index }) => {
                post = post.frontmatter
                post.id = index
                return (
                <Col xs={{size: 12}} md={{size: 12}} key={post.id}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>{post.date}</header>
                    <Link to={post.path}><h1>{post.title} ›</h1></Link>
                    <Row>
                      <div className='height-tags'>
                        <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                        <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                        {post.tags.map((tag, index) => {
                          return (
                          <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                          )
                        })} 
                      </div>
                      {/* <Col md={{size: 4}} className='team-feed-nav'>
                        <a href='#'><img className='icon_back' src={icon_back} /></a>
                        <a href='#'><img className='icon_forward' src={icon_back} /></a>
                      </Col> */}
                    </Row>
                  </div>
                </Col>
                )
              })}

              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Special Situations'}>
            <div key={'Special_Situations'} className='team-feed'>
              <Row>
                
              {posts.edges.filter(post => (post.tags = post.node.frontmatter.tags.filter(tag => tag === 'Special Situations')).length).slice(0, 1).map(({ node: post, index }) => {
                post = post.frontmatter
                post.id = index
                return (
                <Col xs={{size: 12}} md={{size: 12}} key={post.id}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>{post.date}</header>
                    <Link to={post.path}><h1>{post.title} ›</h1></Link>
                    <Row>
                      <div className='height-tags'>
                        <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                        <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                        {post.tags.map((tag, index) => {
                          return (
                          <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                          )
                        })} 
                      </div>
                      {/* <Col md={{size: 4}} className='team-feed-nav'>
                        <a href='#'><img className='icon_back' src={icon_back} /></a>
                        <a href='#'><img className='icon_forward' src={icon_back} /></a>
                      </Col> */}
                    </Row>
                  </div>
                </Col>
                )
              })}

              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Energy + Industrial'}>
            <div key={'Energy_Industrial'} className='team-feed'>
              <Row>
                
              {posts.edges.filter(post => (post.tags = post.node.frontmatter.tags.filter(tag => tag === 'Energy + Industrials')).length).slice(0, 1).map(({ node: post, index }) => {
                post = post.frontmatter
                post.id = index
                return (
                <Col xs={{size: 12}} md={{size: 12}} key={post.id}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>{post.date}</header>
                    <Link to={post.path}><h1>{post.title} ›</h1></Link>
                    <Row>
                      <div className='height-tags'>
                        <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                        <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                        {post.tags.map((tag, index) => {
                          return (
                          <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                          )
                        })} 
                      </div>
                      {/* <Col md={{size: 4}} className='team-feed-nav'>
                        <a href='#'><img className='icon_back' src={icon_back} /></a>
                        <a href='#'><img className='icon_forward' src={icon_back} /></a>
                      </Col> */}
                    </Row>
                  </div>
                </Col>
                )
              })}

              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Tax + Budget'}>
            <div key={'Tax_Budget'} className='team-feed'>
              <Row>
                
              {posts.edges.filter(post => (post.tags = post.node.frontmatter.tags.filter(tag => tag === 'Tax + Budget')).length).slice(0, 1).map(({ node: post, index }) => {
                post = post.frontmatter
                post.id = index
                return (
                <Col xs={{size: 12}} md={{size: 12}} key={post.id}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>{post.date}</header>
                    <Link to={post.path}><h1>{post.title} ›</h1></Link>
                    <Row>
                      <div className='height-tags'>
                        <Link className='height-tag' to={'/tags/' + post.author.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.author}</Link>
                        <Link className='height-tag' to={'/categories/' + post.category.replace(/\s+/g, '-').toLowerCase()} key={index}>{post.category}</Link>
                        {post.tags.map((tag, index) => {
                          return (
                          <Link className='height-tag' to={'/tags/' + tag.replace('+', '').replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
                          )
                        })} 
                      </div>
                      {/* <Col md={{size: 4}} className='team-feed-nav'>
                        <a href='#'><img className='icon_back' src={icon_back} /></a>
                        <a href='#'><img className='icon_forward' src={icon_back} /></a>
                      </Col> */}
                    </Row>
                  </div>
                </Col>
                )
              })}

              </Row>
            </div>  
          </FeedContent>
          
        </Height_Feed>
  
      <Press_Release></Press_Release>
  
      <ParallaxProvider>
        
        <Cloud />
        
      </ParallaxProvider>
  
      
    </div>
    )
  }
}

// const IndexPage = ({ data }) => (
  
// )

// export default IndexPage

export const homePageQuery = graphql`
  query HomePage {
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
            tags
          }    
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
