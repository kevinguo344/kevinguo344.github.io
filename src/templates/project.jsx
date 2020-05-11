import React from 'react';
import {Row, Column, Container} from '../components/skeleton.jsx';
import { graphql } from "gatsby"
import {Helmet} from 'react-helmet'

import Navbar from '../components/navbar.jsx';

export default function Project({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container> 
        <Helmet>
			<title>{frontmatter.title}</title>
		</Helmet>
		<Navbar></Navbar>
		<Row>
			<Column className="projects" width="10" offset="1">
        		<div dangerouslySetInnerHTML={{ __html: html }}></div>
			</Column>
		</Row>
	</Container>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
