import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        This is how you can contact me.
        <a
          href="https://twitter.com/benhovinga"
          target="_blank"
          rel="noreferrer"
        >
          Twitter.
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
