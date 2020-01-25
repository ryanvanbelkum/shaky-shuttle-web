import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './privacy.scss';

const SecondPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <div className="privacy">
        <iframe title="privacy" frameBorder="0" src="https://app.termly.io/document/privacy-policy/2e34abeb-e0ca-42d5-93ea-9a799e3c0d61" />
    </div>
  </Layout>
)

export default SecondPage
