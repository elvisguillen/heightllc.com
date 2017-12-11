import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { fadeInLeft, fadeInRight } from 'react-animations'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import AOS from 'aos/dist/aos.js'
import Cloud from '../components/parallax/clouds.js'
import Press_Release from '../components/press-release.js'
import Height_Feed from '../components/height-feed'
import FeedContent from '../components/FeedContent'
import heightScroll from '../components/height-scroll'

import team1 from '../images/team_stefanie.png'

import './home.scss'

import logocolor from '../images/logo-color.png'

// new AOS.init()

// const scrollWindow = () => (
//   elmnt = document.getElementById('home-page');
//   x = elmnt.scrollLeft;
//   y = elmnt.scrollTop;
//   console.log(y)
// )

export default class IndexPage extends Component {
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
          <Col className="heading first-heading text-left" md={{size: 8, offset: 0}} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-quad" data-aos-duration="600" data-aos-once="true">
              <h4>Heading</h4>
              <h1 data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">Elius et</h1>
              <h1 data-aos="fade-left" data-aos-delay="300" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">prorundicid to</h1>
              <h1 data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">es moditio ratintet</h1>
              <h1 data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">ipsum molupta ssimillec.</h1>
          </Col>
          <Col className="heading second-heading text-right" md={{size: 8, offset: 4}} data-aos="fade-right" data-aos-easing="ease-in-out-quad" data-aos-duration="600" data-aos-once="true">
              <h4>Heading</h4>
              <h1 data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">Elius et</h1>
              <h1 data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">prorundicid to</h1>
              <h1 data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">es moditio ratintet</h1>
              <h1 data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">ipsum molupta ssimillec.</h1>
          </Col>
          <Col className="heading third-heading text-left" md={{size: 8, offset: 0}} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out-quad" data-aos-duration="600" data-aos-once="true">
              <h4>Heading</h4>
              <h1 data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">Elius et</h1>
              <h1 data-aos="fade-left" data-aos-delay="300" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">prorundicid to</h1>
              <h1 data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">es moditio ratintet</h1>
              <h1 data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">ipsum molupta ssimillec.</h1>
          </Col>
  
          <Col className="heading circular-heading text-right"   data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-out-quad" data-aos-duration="600" data-aos-once="true">
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
                <li data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">
                  <a href='#'>Research</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="300" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">
                  <a href='#'>Investment Banking</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">
                  <a href='#'>Sales + Trading</a>
                </li>
                <li data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">
                  <a href='#'>Advisory</a>
                </li>
              </ul>
  
              <a data-aos="fade-left" data-aos-delay="600" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='cta-link' href='#'>Expertise ></a>
            </Col>
            <Col className='cta-right' md={{size: 8}}>
              <div data-aos="fade" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true">
                <h1>Insights, Elevated.</h1>  
                <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, officae dolor rerum unt est, custrumque alibero modi aliquas nusa dunt sunt eossitas et repudi eossitas et repudi ipsandam nis modis alit, to eossitas et repudi ipsandam nis modis alit, to dolor acid ut vel mi, dolor acid ut vel mi hendrerit eu sapien.</p>
              </div>
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
