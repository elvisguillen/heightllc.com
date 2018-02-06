import React, { Component } from 'react'
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
import logo from '../images/logo-outline.png'
import twitter from '../images/social_twitter.png'
import linkedin from '../images/social_linkedin.png'
import IndexPage from '../pages/index';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerWeight: 200,
  headerFontFamily: ['MuseoSans', 'BebasNeueBook', 'sans-serif'],
  bodyFontFamily: ['Helvetica', 'sans-serif'],
  // See below for the full list of options.
})

typography.injectStyles()

import logoIcon from '../images/logo-icon.png'

export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  
  render() {
    let user
    if (typeof window !== 'undefined') {
      user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
    }
    return (
      <div className='site-layout'>
        <Helmet title={`Home | ${this.props.data.site.siteMetadata.title}`} />

        
        <div className='wrapper'>
            
          <div className='social-icons'>
            <a href='https://twitter.com/heightllc' target='_blank'><img src={twitter} /></a>
            <a href='https://www.linkedin.com/company/height-securities?trk=company_logo' target='_blank' ><img src={linkedin} /></a>
          </div>
        
          <section className="topbar">
          </section>

          
          <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right width={ '100%' } customBurgerIcon={ <img src={burger_icon} /> } customCrossIcon={ false } >
            <Container>
            <Row>
              <Col xs={{size: 12}} md='4' className='branding'>
                <a href='/'><img src={logo} /></a>
              </Col>
              <Col xs={{size: 12}} md={{ size: 4, offset: 4 }}>
                <h4>Menu</h4>
                <Link onClick={() => this.closeMenu()} className='menu-item' to='/expertise'>Expertise</Link>
                <Link onClick={() => this.closeMenu()} className='menu-item' to='/team'>Team</Link>
                <Link onClick={() => this.closeMenu()} className='menu-item' to='/research'>Research</Link>
                <Link onClick={() => this.closeMenu()} className='menu-item' to='/contact'>Contact</Link>
              </Col>
            </Row>
            </Container>
          </Menu>
          <div className="content">{this.props.children()}</div>
        </div>
          <footer className="footer">
            <Row>      
              <ul className="footerlinks">
                <li>
                  <Link to='/regulatory-disclosures'>REGULATORY DISCLOSURES</Link>
                </li>
                <li>
                  <a href='https://heightllc.com/rule-606-reports/' target='_blank'>RULE 606 REPORTS</a>
                </li>
                <li>
                  <Link to='/terms-of-use'>TERMS OF USE</Link>
                </li>
                <li>
                  <Link to='/privacy-policy'>PRIVACY POLICY</Link>
                </li>
                <li>
                  <p>Members of </p><a href='http://www.sipc.org/' target='_blank'>SIPC</a> <p>and</p> <a href='http://www.finra.org/' target='_blank'>FINRA</a>
                </li>
                <li>
                  <a href='http://brokercheck.finra.org/Firm/Summary/150659' target='_blank'>BROKER CHECK</a>
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