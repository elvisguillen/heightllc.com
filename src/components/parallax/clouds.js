import React, { Component, PropTypes } from 'react'
import { Parallax } from 'react-scroll-parallax'

import cloud from '../../images/par-clouds-nobg.png'
import cloud2 from '../../images/par-clouds2-nobg.png'
import cloud3 from '../../images/par-clouds3-nobg.png'
import cloud4 from '../../images/par-clouds4-nobg.png'
import moon from '../../images/par-moon-nobg.png'
import bridge from '../../images/par_bridge.png'
import monument from '../../images/par-monument.png'

import './clouds.scss'

export default class Cloud extends Component {
	static contextTypes = {
		parallaxController: PropTypes.object.isRequired,
	};

	componentDidMount() {
		setTimeout(function() { //Start the timer
			this.context.parallaxController.update();
			console.log('UPDATE!!')
  	}.bind(this), 3000)
	}
	render() {
		return (
				<div>
				    <Parallax
				          className="par-cloud1"
				          offsetYMax={40}
				          offsetYMin={-10}
				          slowerScrollRate
				          tag="figure"
				      >
				        <img className="cloud1" src={cloud} /> 
				      </Parallax>

				       <Parallax
				          className="par-cloud2"
				          offsetYMax={80}
				          offsetYMin={-90}
				          slowerScrollRate
				          tag="figure1"
				      >
				        <img className="cloud2" src={cloud2} /> 
				      </Parallax>
							
				      <Parallax
				          className="par-cloud3"
				          offsetYMax={30}
				          offsetYMin={-20}
				          slowerScrollRate
				          tag="figure1"
				      >
				        <img className="cloud3" src={cloud3} /> 
				      </Parallax>
									
				      <Parallax
				          className="par-cloud4"
				          offsetYMax={30}
				          offsetYMin={-20}
				          slowerScrollRate
				          tag="figure1"
				      >
				        <img className="cloud4" src={cloud4} /> 
				      </Parallax>

				      <Parallax
				          className="par-moon"
				          offsetYMax={160}
				          offsetYMin={-20}
				          slowerScrollRate
				          tag="figure1"
				      >
				        <img className="moon" src={moon} /> 
				      </Parallax>

				       <Parallax
				          className="par-bridge"
				          offsetYMax={40}
				          offsetYMin={-20}
				          slowerScrollRate
				          tag="figure1"
				      >
				        <img className="bridge" src={bridge} /> 
				      </Parallax>
							
					
		      	</div>
	    );
	}
}

