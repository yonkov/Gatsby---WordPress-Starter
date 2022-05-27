import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  //highlight-line
  return (
    <Layout>
      <SEO title="home" />
      {/* highlight-start */}
      <h1>My WordPress Blog</h1>
      <h4>Recent Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <article key={node.slug} className="entry-post">
           <Link to={node.slug}>
             <h2 className="entry-title">{node.title}</h2>
           </Link>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </article>
      ))}
      {/* highlight-end */}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
//highlight-end