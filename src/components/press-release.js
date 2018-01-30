import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import { Parallax } from 'react-scroll-parallax'

import image_exec from '../images/image-executive.jpg'
import image_featured from '../images/image_feed_featured2.jpg'
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
                                <Link to='/research/stefanie-miller-on-bloomberg-australia-government-shutdown/'><img className='img-responsive' src={image_featured} /></Link>
                                <img className='icon-play' src={icon_play} />
                            </div>
                            <header className='bebas'>Height Featured</header>
                            <div>
                                <Link to='/research/stefanie-miller-on-bloomberg-australia-government-shutdown/'><h3>Stefanie Miller on Bloomberg Australia: Government Shutdown</h3></Link>
                            </div>
                            <div class="height-tags">
                                <Link className="height-tag" to="/tags/stefanie-miller">Stefanie Miller</Link>
                                <Link className="height-tag" to="/tags/tax-budget">Tax + Budget</Link>
                                <Link className="height-tag" to="/tags/australia">Australia</Link>
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
                                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis.</p>
                                    <img src={image_player} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

