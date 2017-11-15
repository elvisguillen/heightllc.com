import React from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
    return (
      <Container>
        <Row>
          <Col md={{size: 6, offset: 6}}>{post.frontmatter.heading1}</Col>
        </Row>
      </Container>
    )
}

export const homePageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        heading1
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`


