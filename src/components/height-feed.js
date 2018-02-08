import React, { Component, PropTypes} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { CSSTransition } from 'react-transition-group'

export default class Height_Feed extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        activeTabIndex: this.props.defaultActiveTabIndex
      }
      this.handleFeedClick = this.handleFeedClick.bind(this)
    }
    
    handleFeedClick(tabIndex) {
      this.setState({
        activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
      })
    }

    renderChildrenWithTabsApiAsProps() {
      return React.Children.map(this.props.children, (child, index) => {
        return React.cloneElement(child, {
          onClick: this.handleFeedClick,
          tabIndex: index,
          isActive: index === this.state.activeTabIndex
        })
      })
    }

    renderActiveTabContent() {
      const {children} = this.props;
      const {activeTabIndex} = this.state;
      if (children[activeTabIndex]) {
        return children[activeTabIndex].props.children;
      }
    }
    

    render() {

        return (
            <section className="height-feed">
            <Container>
              <Row>
                  <Col className='feed-left' md={{size: 4}}>
                    <div className='feed-sidebar'>
                      <header className='bebas'>The Height Feed</header>
                      <ul>
                        {this.renderChildrenWithTabsApiAsProps()}
                      </ul>
                    </div>
                  </Col> 
      
                  <Col className='feed-right' md={{size: 8}}>
                  <CSSTransition
                    classNames="background"
                    timeout={1000}>
                    {this.renderActiveTabContent()}
                  </CSSTransition>
                  </Col>
              </Row>
            </Container>
          </section>
        )
    }
}

Height_Feed.propTypes = {
  defaultActiveTabIndex: PropTypes.number
};

Height_Feed.defaultProps = {
  defaultActiveTabIndex: 0
};