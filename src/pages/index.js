import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DownloadLinks from "../components/download-links";

import video from '../assets/video/planet-cartoon-space-animation.mp4';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
      </video>
      <div className="home__container">
            <DownloadLinks />
      </div>
  </Layout>
);

export default IndexPage
