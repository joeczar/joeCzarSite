import React from "react"
import SEO from "../components/seo"
import JoeCzar from "../components/joeCzarNeon"
// import { Link, graphql } from "gatsby"
import Social from "../components/social"
import Layout from "../components/layout"

import styles from "./index.module.css"

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout title={siteTitle} location={location}>
      <div className={styles.homeWrapper}>
        <SEO title="JoeCzar | Developer" />

        <JoeCzar />
        <Social />
      </div>
    </Layout>
  )
}
export default LandingPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
