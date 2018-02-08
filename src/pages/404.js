import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { basename } from 'path'
import Link from 'gatsby-link'

import logoIcon from '../images/logo-icon.png'
import thumbnail from '../images/image_thumbnail.jpg'

export default function Template ({ transition }) {
  // const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []
  return (
    <div style={transition && transition.style}>
        <Helmet title={`404 | Page Not Found - Height Capital Markets`} />
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>
        <section className='page-header'>
          <Container>
            <Row>
              <Col className='page-header-text' md={{size: 9}}>
                <header className='bebas'>Height Capital Markets</header>
                <h1>Insights, Elevated.</h1>
              </Col>
              <div className='page-circular-header'>
                <Link to='/'><img src={logoIcon} /></Link>
              </div>
            </Row>
          </Container>
        </section>
        <section className='page-content research'>
          <Container>
            <Row>
              <Col className='page-copy regulatory' md={{size: 10}}>
                <h1>404 Page Not Found</h1>
                <div className='research-post-copy'>
                  <p>Please use our navigation menu or contact us to find what you're looking for.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>  
    </div>
  )
}

