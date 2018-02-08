import React, { Component, PropTypes } from 'react'
import { Container, Row, Col, Form, FormGroup, Input} from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import ReactMapGL, {Marker} from 'react-map-gl';

import logoIcon from '../images/logo-icon.png'
import 'mapbox-gl/dist/mapbox-gl.css'
import twitter_dark from '../images/social_twitter_dark.png'
import linkedin_dark from '../images/social_linkedin_dark.png'
import image_sidebar from '../images/image_page_sidebar.jpg'
import icon_map from '../images/icon_map.jpg'

export default class contactTemplate extends Component {
  componentDidMount() {
    // const Map = ReactMapboxGl({
    //   accessToken: 'pk.eyJ1IjoiZWx2aXNndWlsbGVuIiwiYSI6ImNqYTA1NGhpeTZkZTcycXBnZ3d1dWNpeXcifQ.n0kMRqsxDE7t89k4qGuLxg'
    // });

    // this.map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: 'mapbox://styles/mapbox/streets-v9',
    //   center: [-77.041, 38.900],
    //   zoom: 14.7,
    //   minZoom: 14.7,
    //   maxZoom: 14.7
    // }) 

    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [{
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [-77.041, 38.900]
    //     },
    //     properties: {
    //       title: 'Height LLC',
    //       description: 'Washington, D.C.'
    //     }
    //   }]
    // };

    // // add markers to map
    // geojson.features.forEach(function(marker) {

    //   // create a HTML element for each feature
    //   var el = document.createElement('div');
    //   el.className = 'marker';

    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el)
    //   .setLngLat(marker.geometry.coordinates)
    //   .addTo(map);
    // });

    // new mapboxgl.Marker(el)
    //   .setLngLat(marker.geometry.coordinates)
    //   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    //   .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    //   .addTo(map);

    
  
  }

  state = {
    viewport: {
      width: 233,
      height: 240,
      latitude: 38.900,
      longitude: -77.041,
      zoom: 14.7
    }
  };

  

  componentWillUnmount() {
    // this.map.remove();
  }

  _renderMarker(station, i) {
    const {name, coordinates} = station;

    return (
      <Marker key={i} longitude={coordinates[0]} latitude={coordinates[1]} >
        <div className="marker"></div>
      </Marker>
    );
  }

  render() {
    const page = this.props.data.markdownRemark
    const locations = [
      {"name":"Lafayette (LAFY)","coordinates":[-77.041,38.900]},
    ]
    return (
      <div style={this.props.transition && this.props.transition.style}>
        <Helmet title={`${page.frontmatter.title} | ${this.props.data.site.siteMetadata.title}`} />
        
        <div className='navbar navbar-expand-lg navbar-dark'>
          <div className='navbar-blue'></div>
          <div className='navbar-teal'></div>
        </div>

        <section className='page-header'>
          <Container>
            <Row>
              <Col className='page-header-text' md={{size: 9}}>
                <header className='bebas'>{page.frontmatter.title}</header>
                <h1>{page.frontmatter.page_header}</h1>
              </Col>

              <div className='page-circular-header'>
                <Link to='/'><img src={logoIcon} /></Link>
              </div>
                
            </Row>
          </Container>
        </section>

        <section className='page-content research'>
          <Container>
                      
            <div className="team-member-container">
              <Row>
                <Col className='page-sidebar contact' md={{size: 4}}>
                  <div id='page-map' className='page-sidebar-image'>
                    <img className='icon-map' src={icon_map} />
                    <ReactMapGL
                      {...this.state.viewport}
                      scrollZoom={false}
                      mapboxApiAccessToken={'pk.eyJ1IjoiZWx2aXNndWlsbGVuIiwiYSI6ImNqYTA1NGhpeTZkZTcycXBnZ3d1dWNpeXcifQ.n0kMRqsxDE7t89k4qGuLxg'}
                      onViewportChange={(viewport) => this.setState({viewport})} >
                      { locations.map(this._renderMarker) }
                    </ReactMapGL>
                  </div>

                  <div className='page-sidebar-content'>
                    <header className='bebas'>Height Capital Markets</header>
                    <h3>1775 Pennsylvania Ave NW, 11th floor</h3>
                    <h3>Washington, DC 20006</h3>  
                    <div className='phone-numbers'>
                      
                      <div className='phone-department'>
                        <p><span>Sales:</span></p>
                        <p>(202) 629-0030</p>
                        <p>sales@heightllc.com</p>
                      </div>

                      <div className='phone-department'>
                        <p><span>Trading:</span></p>
                        <p>(202) 629-0015</p>
                        <p>trading@heightllc.com</p>
                      </div>
                      
                      <div className='phone-department'>
                        <p><span>Front Desk:</span></p>
                        <p>(202) 629-0010</p>
                        <p>glesavoy@heightllc.com</p>
                      </div>

                      <div className='phone-department'>
                        <p><span>Media (Research):</span></p>
                        <p>(202) 629-0000</p>
                        <p>media_research@heightllc.com</p>
                      </div>
                      
                      <div className='phone-department'>
                        <p><span>Media (Banking):</span></p>
                        <p>(202) 836-8960</p>
                        <p>media_iba@heightllc.com</p>
                      </div>

                    </div>
                  </div>
                </Col>

                <Col className='page-copy' md={{size: 8}}>
                              
                  <h1>{page.frontmatter.intro_copy}</h1>
                  <p>{page.frontmatter.body_copy}</p>
                  
                  <form name='contact' method='post' className='form' data-netlify='true' action='thank-you'>

                    <input type="hidden" name="form-name" value="contact" />

                    <FormGroup>
                      <Input type='text' name='name' id='inputName' placeholder='Full Name' />
                    </FormGroup>

                    <FormGroup>
                      <Input type='email' name='email' id='inputEmail' placeholder='Email' />
                    </FormGroup>

                    <FormGroup>
                      <Input type='number' name='phone' id='inputPhone' placeholder='Phone Number' />
                    </FormGroup>

                    <FormGroup>
                      <Input type='text' name='subject' id='inputSubject' placeholder='Subject' />
                    </FormGroup>

                    <FormGroup>
                      <Input type='textarea' name='text' id='inputComment' placeholder='How can we help?' />
                    </FormGroup>

                    <FormGroup>
                      <button type='submit'>Submit ›</button>
                    </FormGroup>

                  </form>

                </Col>
              </Row>
            </div>
          </Container>
        </section>    
      </div>
    )
  }
}



export const contactPageQuery = graphql`
  query ContactPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html 
      frontmatter {
        path
        title
        page_header
        intro_copy
        body_copy
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`