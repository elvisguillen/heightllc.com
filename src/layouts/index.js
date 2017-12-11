import React from 'react'
import { Col, Container, Row, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Typography from 'typography'
import { slide as Menu } from 'react-burger-menu'


// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

// AOS
import 'aos/dist/aos.css'

// header style
import './header.scss'

// custom burger icon

import burger_icon from '../images/icon_burger.png'
import logo from '../images/logo-white.png'
import twitter from '../images/social_twitter.png'
import linkedin from '../images/social_linkedin.png'
import icon_skip from '../images/icon_skip.png'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerWeight: 200,
  headerFontFamily: ['MuseoSans', 'BebasNeueBook', 'sans-serif'],
  bodyFontFamily: ['Helvetica', 'sans-serif'],
  // See below for the full list of options.
})

typography.injectStyles()

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  
  return (
    <div className='site-layout'>
      <Helmet title={`Home | ${data.site.siteMetadata.title}`} />

      
      <div className='wrapper'>
          <div className='skip-icon'>
            <a href='#cta'><img src={icon_skip} /></a>
          </div>
          <div className='social-icons'>
            <a href='https://twitter.com/heightllc' target='_blank'><img src={twitter} /></a>
            <a href='https://www.linkedin.com/company/height-securities?trk=company_logo' target='_blank' ><img src={linkedin} /></a>
          </div>
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>
        <Menu right width={ '100%' } customBurgerIcon={ <img src={burger_icon} /> } customCrossIcon={ false } >
          <Container>
          <Row>
            <Col md='3' className='branding'>
              <img src={logo} />
            </Col>
            <Col md={{ size: 4, offset: 5 }}>
              <a data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='menu-item' href='#'>Expertise</a>
              <a data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='menu-item' href='#'>Our Services</a>
              <a data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='menu-item' href='#'>The Team</a>
              <a data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='menu-item' href='#'>News</a>
              <a data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out-quart" data-aos-duration="800" data-aos-once="true" className='menu-item' href='#'>Contact</a>
            </Col>
          </Row>
          </Container>
         </Menu>
        <div className="content">{children()}</div>
      </div>
        <footer className="footer">
          <Row>      
            <ul className="footerlinks">
              <li>
                <a href="#">REGULATORY DISCLOSURES</a>
              </li>
              <li>
                <a href="#">RULE 606 REPORTS</a>
              </li>
              <li>
                <a href="#">TERMS OF USE</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#">BROKER CHECK</a>
              </li>
            </ul>
          </Row>

          <Row>
            <div className="copyright">
              <p>© 2017 Height Securities, LLC. To learn more, contact us at 202-629-0000.</p>
            </div>
          </Row>
        </footer>
      </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}


export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
