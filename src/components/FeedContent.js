import React, {PropTypes} from 'react'

const FeedContent = (props) => {
    return (
        <li className='tab'>
            <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''} `}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                {props.linkClassName}
            </a>
        </li>
    )
}

FeedContent.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    linkClassName: PropTypes.string.isRequired
};

export default FeedContent