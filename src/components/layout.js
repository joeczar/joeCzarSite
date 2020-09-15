import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styles from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(0.5),
          marginTop: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          fontFamily: `montserrat-alternates, sans-serif`,
          fontWeight: 800,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `montserrat-alternates, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      className={styles.wrapper}
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()},{` `}
        Joe Czarnecki
      </footer>
    </div>
  )
}

export default Layout
