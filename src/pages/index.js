import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my blog!</p>
      <StaticImage
        alt="A reddish-brown pitbull looking longingly at the camera from behind a mason jar of overnight oats"
        src="https://pbs.twimg.com/media/EsW978QUcAAj1Pe?format=jpg&name=4096x4096"
      />
    </Layout>
  )
}

export default IndexPage
