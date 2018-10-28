import React from "react"
import { graphql } from "gatsby"
import {Container, Row, Column} from "../components"


export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark
	return (
		<Container>
			<Row>
				<Column width="12">
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>
				</Column>
			</Row>
			<Row dangerouslySetInnerHTML={{ __html: html }}></Row>
		</Container>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
    }
`
