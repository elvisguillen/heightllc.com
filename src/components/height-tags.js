import React from 'react'
import Link from 'gatsby-link'

const HeightTags = ({ author, category, tags }) => {
    <div className='height-tags'>
        <Link className='height-tag' to={'/tags/' + author.replace(/\s+/g, '-').toLowerCase()}>{author}</Link>
        <Link className='height-tag' to={'/categories/' + category.replace(/\s+/g, '-').toLowerCase()}>{category}</Link>
        {tags.map((tag, index) => {
            return (
                <Link className='height-tag' to={'/tags/' + tag.replace(/\s+/g, '-').toLowerCase()} key={index}>{tag}</Link>
            )
        })}
    </div>
}

export default HeightTags