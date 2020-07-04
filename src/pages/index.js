import React from "react"
import SEO from "../components/seo"
import JoeCzar from '../components/joeCzarNeon'
import { Link, graphql } from "gatsby"
import Social from '../components/social'

import styles from './index.module.css'

const LandingPage = ({ data, location }) => {
     const siteTitle = data.site.siteMetadata.title
    return (
      <div className={styles.homeWrapper}>
        <SEO title="JoeCzar | Developer" />
        <JoeCzar height="100%" />
      </div>
    )
}
export default LandingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`