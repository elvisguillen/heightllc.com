import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import { Parallax } from 'react-scroll-parallax'

import image_exec from '../images/image-executive.jpg'
import image_featured from '../../static/files/johnakridgefbn.png'
import icon_play from '../images/icon_play.png'
import image_player from '../images/image_player.png'
import thumbnail from '../images/image_thumbnail.jpg'

export default class Press_Release extends Component {

    render() {
        return (
            <section className="height-press-releases">
                <Container>
                    <Row>
                        <Col className='height-press-featured' md={{size: 4}}>
                            <div className='height-featured-image'>
                                <Link to='/research/john-akridge-on-fox-business-news-stock-market-selloff/'><img className='img-responsive' src={image_featured} /></Link>
                                <img className='icon-play' src={icon_play} />
                            </div>
                            <header className='bebas'>Height Featured</header>
                            <div>
                                <Link to='/research/john-akridge-on-fox-business-news-stock-market-selloff/'><h3>John Akridge on Fox Business News: Stock Market Selloff</h3></Link>
                            </div>
                            <div className="height-tags">
                                <Link className="height-tag" to="/tags/john-akridge">John Akridge</Link>
                                <Link className="height-tag" to="/categories/height-in-the-news">Height In The News</Link>
                                <Link className="height-tag" to="/tags/fox-business">Fox Business</Link>
                            </div>
                        </Col> 
                        
                        <Col className='height-press-executive' md={{size: 8}}>
                            <div className='executive-featured-image'>
                                <img src={image_exec} className='img-responsive' />
                                <span className='exec-subtitle'>Height</span>
                                <span className='exec-title'>Executive Insight</span>
                            </div>
            
                            <div className='executive-content'>
                                <div className='exec-copy'>
                                    <p>Mr. Akridge co-founded Height Capital Markets in 2008, and under his leadership, the firm has grown to one of DC’s top regulatory-focused investment banks for institutional investors and companies by bridging the gap between Wall Street and DC decision-makers. The firm provides investment analysis in key regulated sectors by integrating fundamental and policy research to better understand the financial impact across the capital structure. </p>
                                    <Link to='/team/john-akridge'>Read More ›</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

