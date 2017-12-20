import React, { Component, PropTypes }from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import logoIcon from '../images/logo-icon.png'
import './expertise.scss'
import './team.scss'
import image_team_john from '../images/team_john.png'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'

export default class teamTemplate extends Component {
  render() {
    return (
      <div>
        {/* <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} /> */}
        

            <section className='page-header'>
              <Container>
                <Row>
                <Col className='page-header-text' md={{size: 9}}>
                  <header className='bebas'>Team</header>
                  <h1>We are talented people at a research- driven firm that puts clients first.</h1>
                </Col>

                <div className='page-circular-header'>
                  <a href='/'><img src={logoIcon} /></a>
                </div>
                
                </Row>
              </Container>
            </section>

            <section className='page-content'>
              <Container>
                <Row>
                  <Col className='page-sidebar' md={{size: 4}}>
                    <div className='page-sidebar-image'>
                      <img src={image_team_john} />
                    </div>
                    <div className='page-sidebar-content'>
                      <div className='page-team-name'>
                        <h3>John<br/>Akridge</h3>
                        <h4>CEO</h4>  
                      </div>
                      <div className='page-team-social-icons'>
                        <a href='https://twitter.com/heightllc' target='_blank'><img src={twitter_dark} /></a>
                        <a href='https://www.linkedin.com/company/height-securities?trk=company_logo' target='_blank' ><img src={linkedin_dark} /></a>
                      </div>
                      <div className='page-team-quote'>
                        <h3>Vivamus pretium elementum elit tinciduntau emti.</h3>
                      </div>
                      <div className='height-tags'>
                        <a className='height-tag' href='#'>John Akridge</a>
                        <a className='height-tag' href='#'>Audio</a>
                      </div>                      
                    </div>
                  </Col>
                  <Col className='page-copy' md={{size: 8}}>
                    <h1>“Lorem ipsum dolorsit amet,consectetur adipiscingelit.Craset dolorarcu.”</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis urna quis neque eleifend auctor. 
                      Integer id semper risus. Morbi posuere diam mattis, rhoncus augue ac, pretium lectus. Pellentesque pretium sapien et tortor viverra,
                       sed mattis tellus finibus. Mauris non interdum lectus, ut faucibus lectus. Aliquam ut quam sed libero congue scelerisque 
                       eu sed ligula. Nulla luctus purus vestibulum laoreet lobortis. Curabitur congue faucibus erat, in ultrices dolor rhoncus a.
                        Sed in eleifend orci. Aliquam id quam tincidunt, convallis erat at, viverra arcu. Ut et tortor magna.</p>

                    <p>Ut nec vehicula elit. Maecenas sed dui erat. Integer eu sodales dui. Class aptent taciti sociosqu ad 
                      litora torquent per conubia nostra, per inceptos himenaeos. Ut iaculis nisi et lorem tempus aliquam. 
                      Nulla bibendum turpis nec orci pharetra porta. Mauris quis fermentum lorem. Proin placerat arcu ut nisl rutrum dignissim.
                       Ut vitae sapien nec augue venenatis auctor vel scelerisque nibh.</p>
                    
                    <p>In vitae luctus dui, ut finibus nisi. Nullam bibendum nunc ipsum, eu bibendum purus pulvinar mollis. 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac posuere lorem, sed blandit velit. Fusce vel varius dui. 
                      Donec ut nunc ut nunc aliquam gravida. Donec efficitur nisl dolor, ac efficitur metus faucibus id. Vivamus elementum magna magna, 
                      et ullamcorper ligula rhoncus non. Cras porttitor ipsum felis, vel cursus risus vulputate eu. Vestibulum quis eros quis urna 
                      fermentum mattis. Donec eu vehicula nibh. Curabitur viverra, purus in luctus sollicitudin, massa tellus sollicitudin arcu,
                       sit amet aliquet neque sem vitae augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                     
                  </Col>
                </Row>
              </Container>
            </section>
            
      </div>
    )
  }
}
