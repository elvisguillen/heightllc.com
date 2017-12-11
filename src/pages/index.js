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
import Fade from 'react-reveal/Fade'; 

import team1 from '../images/team_stefanie.png'

import './home.scss'

import logocolor from '../images/logo-color.png'

// const scrollWindow = () => (
//   elmnt = document.getElementById('home-page');
//   x = elmnt.scrollLeft;
//   y = elmnt.scrollTop;
//   console.log(y)
// )

export default class IndexPage extends Component {

  componentDidMount() {

  }
  // constructor(props) {
  //   super(props)
  //   this.state = false
  // }

  // componentDidMount() {
  //   document.addEventListener('scroll'), () => {
  //     const isTeal = window.scroll < 5000;
  //     if (isTeal !== this.state.isTeal) {
  //       this.setState({ isTeal })
  //     }
  //   }
  // }
  
  render() {
    return(
      <div id='home-page'>
      
      <section className="topbar">
        <heightScroll></heightScroll>
      </section>
      <section id='top-scroll' className="top">
        <Container>
            <Col className="heading first-heading text-left" md={{size: 8, offset: 0}}>
              <Fade right>
                <h4>Heading</h4>
              </Fade>
              <Fade right delay={50}>
                <h1>Elius et</h1>
              </Fade>
              <Fade right delay={100}>
                <h1>prorundicid to</h1>
              </Fade>
              <Fade right delay={150}>
                <h1>es moditio ratintet</h1>
              </Fade>
              <Fade right delay={200}>
                <h1>ipsum molupta ssimillec.</h1>
              </Fade>
            </Col>
          <Col className="heading second-heading text-right" md={{size: 8, offset: 4}}>
            <Fade left>
                <h4>Heading</h4>
            </Fade>
            <Fade left delay={50}>
                <h1>Elius et</h1>
            </Fade>
            <Fade left delay={150}>
                <h1>prorundicid to</h1>
            </Fade>
            <Fade left delay={200}>
                <h1>es moditio ratintet</h1>
            </Fade>
            <Fade left delay={250}>
                <h1>ipsum molupta ssimillec.</h1>
            </Fade>
          </Col>
          <Col className="heading third-heading text-left" md={{size: 8, offset: 0}}>
            <Fade right>
              <h4>Heading</h4>
            </Fade>
            <Fade right delay={50}>
              <h1>Elius et</h1>
            </Fade>
            <Fade right delay={100}>
              <h1>prorundicid to</h1>
            </Fade>
            <Fade right delay={150}>
              <h1>es moditio ratintet</h1>
            </Fade>
            <Fade right delay={200}>
              <h1>ipsum molupta ssimillec.</h1>
            </Fade>
          </Col>

            <Col className="heading circular-heading text-right">
              <div className='branding-color'>
                <img className="logo-color" src={logocolor} />
              </div>
            </Col>
        </Container>
      </section>
  
      <section id='cta' className="cta">
        <Container>
          <Row>
            <Col className='cta-left' md={{size: 4}}>
              <ul className="cta-links">
                  <Fade left>
                    <li>
                      <a href='#'>Research</a>
                    </li>
                  </Fade>
                  <Fade left delay={50}>
                    <li>
                        <a href='#'>Investment Banking</a>  
                    </li>
                  </Fade>
                
                  <Fade left delay={100}>
                    <li>
                      <a href='#'>Sales + Trading</a>
                    </li>
                  </Fade>

                  <Fade left delay={150}>
                    <li className='last-type'>
                      <a href='#'>Advisory</a> 
                    </li>
                  </Fade>
              </ul>
              <Fade left delay={200}>
                <a className='cta-link'>Expertise ></a>
              </Fade>
            </Col>
            <Col className='cta-right' md={{size: 8}}>
              <Fade right>
                
                  <h1>Insights, Elevated.</h1>  
                  <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt est, custrumque alibero modi aliquas nusa dunt sunt eossitas et repudi eossitas et repudi ipsandam nis modis alit, to eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, dolor acid ut vel mi hendrerit eu sapien.</p>
              
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
  
      <Height_Feed>
  
          <FeedContent linkClassName={'Health Care'}>
            <div key={'Health_Care'} className='team-feed'>
              <Row>
                <Col className='team-feed-profile' md={{size: 4}}>
                  <img className='team-feed-image' src={team1} />
                  <h3>Stefanie <br/> Miller</h3>
                  <a href='#'>View Profile</a>
                </Col>
                <Col md={{size: 8}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </FeedContent>
  
          <FeedContent linkClassName={'Financial Services'}>
            <div key={'Financial_Services'} className='team-feed'>
              <Row>
                <Col className='team-feed-profile' md={{size: 4}}>
                  <img className='team-feed-image' src={team1} />
                  <h3>Bob <br/> Miller</h3>
                  <a href='#'>View Profile</a>
                </Col>
                <Col md={{size: 8}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Special Situations'}>
            <div key={'Special_Situations'} className='team-feed'>
              <Row>
                <Col className='team-feed-profile' md={{size: 4}}>
                  <img className='team-feed-image' src={team1} />
                  <h3>Katie <br/> Bays</h3>
                  <a href='#'>View Profile</a>
                </Col>
                <Col md={{size: 8}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Energy + Industrial'}>
            <div key={'Energy_Industrial'} className='team-feed'>
              <Row>
                
                <Col md={{size: 12}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt. Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Tax + Budget'}>
            <div key={'Tax_Budget'} className='team-feed'>
              <Row>
                
                <Col md={{size: 12}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt. Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>  
          </FeedContent>
  
          <FeedContent linkClassName={'Technology'}>
            <div key={'Technology'} className='team-feed'>
              <Row>
                <Col className='team-feed-profile' md={{size: 4}}>
                  <img className='team-feed-image' src={team1} />
                  <h3>Stefanie <br/> Miller</h3>
                  <a href='#'>View Profile</a>
                </Col>
                <Col md={{size: 8}}>
                  <div className='team-feed-copy'>
                    <header className='bebas'>01 November 2017</header>
                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt.</p>
                    <div className='team-feed-nav'>
                    </div>
                  </div>
                </Col>
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

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
