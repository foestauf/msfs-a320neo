import React from "react"
import { Router, Link } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"

const Contact = React.lazy(() => import("../components/Contact"))
const About = React.lazy(() => import("../components/About"))
const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={"<p>Loading...</p>"}>
    <Component {...props} />
  </React.Suspense>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/contact/">Contact</Link>
    <br />
    <Link to="/about-us/">About Us</Link>
    <br />
    <input />
    <Router>
      <Home path="/" />
      <LazyComponent Component={Contact} path="contact" />
      <LazyComponent Component={About} path="about-us" />
    </Router>
  </Layout>
)

export default IndexPage
