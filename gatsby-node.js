// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWpPost(sort: { fields: [date] }) {
//         nodes {
//           title
//           excerpt
//           content
//           slug
//         }
//       }
//     }
//   `).then(result => {
//     //highlight-start
//     result.data.allWpPost.nodes.forEach(node => {
//       createPage({
//         path: node.slug,
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           // This is the $slug variable
//           // passed to blog-post.js
//           slug: node.slug,
//         },
//       })
//     })
//     //highlight-end
//   })
// }


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWpPage(sort: { fields: [date] }) {
//         nodes {
//           title
//           excerpt
//           content
//           slug
//         }
//       }
//     }
//   `).then(result => {
//     //highlight-start
//     result.data.allWpPage.nodes.forEach(node => {
//       createPage({
//         path: node.slug,
//         component: path.resolve(`./src/templates/pages/index.js`),
//         context: {
//           // This is the $slug variable
//           // passed to blog-post.js
//           slug: node.slug,
//         },
//       })
//     })
//     //highlight-end
//   })
// }

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const result = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
      allWpPage {
        nodes {
          title
          content
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const BlogPosts =  result.data.allWpPost.nodes
  BlogPosts.forEach(node => {
      createPage({
        path: node.slug,
        component: BlogPostTemplate,
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    const Pages =  result.data.allWpPage.nodes
    Pages.forEach(node => {
      createPage({
        path: node.slug,
        component: PageTemplate,
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}