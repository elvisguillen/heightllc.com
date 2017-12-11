import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Parallax } from 'react-scroll-parallax'

import image_exec from '../images/image-executive.jpg'
import image_featured from '../images/image_feed_featured.jpg'
import icon_play from '../images/icon_play.png'

export default class Press_Release extends Component {

    render() {
        return (
            <section className="height-press-releases">
                <Container>
                    <Row>
                        <Col className='height-press-featured' md={{size: 4}}>
                            <div className='height-featured-image'>
                                <img className='img-responsive' src={image_featured} />
                                <img className='icon-play' src={icon_play} />
                            </div>
                            <header className='bebas'>Height Featured</header>
                            <div>
                            <h3>Height Analyst Katie Bays Talks Keystone XL</h3>
                            <p>Katie Bays modi aliquas nusa dunt ius quo diatipsandam nis modis alit, to unt nusa dunt sunt eossitas et repudi.</p>
                            </div>
                        </Col> 
                        
                        <Col className='height-press-executive' md={{size: 8}}>
                            <div className='executive-featured-image'>
                            <img src={image_exec} className='img-responsive' />
                            <span className='exec-title'>Executive Insight</span>
                            </div>
            
                            <div className='executive-content'>
                                <div className='exec-copy'>
                                    <p>Nonet alibero modi aliquas nusa dunt ius quo diat eicitiunt expe a sunt eossitas et repudi ipsandam nis.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}