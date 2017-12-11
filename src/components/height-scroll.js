import React, {Component} from 'react'

export default class heightScroll extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);        
    }

    handleScroll() {
        let elmnt = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body)
        elmnt.scrollTop
    }

    render() {
        return(
            <p>{handleScroll}</p>
        )
    }

}